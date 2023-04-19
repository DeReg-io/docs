---
sidebar_position: 3
---

# Adding a Trigger to an Existing Contract

If you have an existing contract where emergency actions are managed by an `owner()` address you can
still add a trigger without having to redeploy your smart contract.

## Prerequisites

A trigger can .e.g. be added to contracts structured like this:

![Basic Ownable Contract](/img/simple-owned-diagram.svg)

## Overview

Adding a trigger is done by deploying and configuring an "intermediate owner", a contract that sits
between your application and your owner address:

![Inserted Intermediate Owner Diagram](/img/intermediate-owned-diagram.svg)

If the owner needs to call a function they simply forward a call over the intermediate:

![Forward Call Diagram](/img/forward-call-diagram.svg)

:::tip

If your contract has a role system (e.g. using OpenZeppelin's `AccessControl` mixin) where multiple
addresses can have a certain role you do not need to rearrange the ownership chain in this way and
can instead create a simpler trigger contract and assign the necessary role.

:::

Once the intermediary is setup the trigger can then be executed by DeReg:

![Trigger Call Diagram](/img/intermediate-trigger-diagram.svg)

:::info

DeReg will only be able to trigger the functionality defined in the `_onTrigger` function by calling
the external `executeTrigger` method, all other owner-gated functionality will only be executable by
the `owner()` address of the intermediate contract.

:::

## Creating An Intermediate
To set up the contract the first two steps are identical to the process for creating any other
trigger:

1. Install [`dereg-io/ez-trigger`](https://github.com/DeReg-io/ez-trigger) as a submodule in your foundry
   project with `forge install dereg-io/ez-trigger`
2. Sign up for an account on [app.dereg.io](https://app.dereg.io/) (don't worry it's free) and get your User-ID

Once you have your basic setup you can start writing your contract in your foundry project. Start by
creating a new contract and importing the `TriggeredOwner` preset:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {TriggeredOwner} from "ez-trigger/src/presets/TriggeredOwner.sol";

interface IPausable {
    function pause() external;
}

contract PauserIntermediate is
    // Address of the initial owner.
    TriggeredOwner(0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF, "1234567b-fbe1-1234-1234-12abcde123a1")
{
    // Contract to be triggered.
    IPausable internal constant PAUSABLE = IPausable(0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF);

    // The actual trigger function.
    function _onTrigger() internal override {
        PAUSABLE.pause();
    }
}
```

:::note

While you _can_ create a constructor that accepts the initial owner address as a paremeter it is
**not recommended**. Instead we recommend hardcoding the initial owner to minimize the risk of
making a mistake when deploying and configuring the intermediate.

:::

The trigger doesn't have to call `pause` on a contract or even be limited to just one function, you
can have your trigger do anything you want it to. However, trigger functions are limited to ~160,000
gas on testnet for now.

## Deploying An Intermediate

Once you've developed your intermediate contract you'll need to deploy it. We recommend using
foundry's deploy script system.

As an example in a `/script` folder create a new `/script/DeployIntermediate.s.sol` Solidity file:

```
├── lib
├── out
├── script
│   └── DeployIntermediate.s.sol
├── src
├── test
└── foundry.toml
```

`DeployIntermediate.s.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {Script} from "forge-std/Script.sol";
import {PauserIntermediate} from "../src/PauserIntermediate.sol";

contract DeployIntermediateScript is Script {
    function run() public {
        // Requires `.env` file with `PRIV_KEY` constant set to deploy wallet private key.
        vm.startBroadcast(vm.envUint("PRIV_KEY"));

        // Deploys contract.
        new PauserIntermediate();

        vm.stopBroadcast();
    }
}
```

You can then _simulate_ deployment by running `forge script script/DeployIntermediate.s.sol:DeployIntermediateScript --rpc-url <YOUR_RPC_URL>`.
To actually deploy to the set RPC network use the same command adding the `--broadcast` flag:  `forge script script/DeployIntermediate.s.sol:DeployIntermediateScript --rpc-url <YOUR_RPC_URL> --broadcast`.
Note that only Goerli and Sepolia are supported for now.

Once the initial contract is deployed the ownership graph will look something like this:

![Split Ownership Graph](/img/split-owned-diagram.svg)

Once deployed the final step is transferring ownership to the intermediate so that it's able to call
the restricted functions from its trigger:

![Intermediate Ownership Transfer Diagram](/img/intermediate-owner-transfer.svg)

Now that you've added trigger capabilities to your contract you'll can add and configure your trigger
webhook in the DeReg dashboard, you can see the [guide here](./create-trigger-webhook).


## A Note On Security & Splitting Access Control

This guide is meant for applications and teams that have already deployed contracts and do not wish
to deploy anything again. If you're developing new smart contracts and intend to add triggers it is
recommended you include it directly in your contract or at least used a role-based access control
system such as OpenZeppelin's `AccessControl` mixin as it'll allow you to minimize deployment
overhead and minimize the likelihood of making critical deployment errors.

