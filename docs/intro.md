---
sidebar_position: 1
slug: /
---

# Intro: What is Easy Trigger & How to Get Started

_Easy Trigger_ provides you with a webhook that will trigger a specific smart contract function when
called. It can be integrated directly into new contracts or added to existing contracts.

:::info

Note that _Easy Trigger_ is a tool still in Alpha and may be subject to frequent changes. If you
have any features to request or bugs to report you can let us know [on our Discord](https://discord.gg/EXrQARywPk).

Any breaking changes **especially** security relevant ones will be announced on both our Discord
& [Twitter](https://twitter.com/).

:::

## Smart Contract Integration (using `foundry`)

### 1. Installation

```
forge install dereg-io/ez-trigger
```

### 2. Obtain your UserID

Login or SignUp at [app.dereg.io](https://app.dereg.io).

After logging in, at the top right of the page you will find your _UserID_.
Add it to your smart contract code (see [3.](/#3-add-to-smart-contract)), this ensure
only you can create an _Easy Trigger_ for your smart contract.

![Obtain UserID](/screenshots/obtain_userid.png)

### 3. Add to Smart Contract


### 3a. Automatically trigger OpenZeppelin's `Pausable._pause`:

Assuming your contract is already using [OpenZeppelin's Pausable](https://docs.openzeppelin.com/contracts/4.x/api/security#Pausable)
mixin all you need to do is import the `TriggerablePause` preset and have your contract inherit from it and replace the example _UserID_ with your
_UserId_ (see [2.](/#2-obtain-your-userid)).

:::note
It's safe to share your _UserID_ and have it be part of your public smart contract code. The _UserID_
is necessary for us to be able to associate contracts to their respective user accounts and prevent
different users from triggering each other's contracts.
:::

```solidity
// Add Easy Trigger import, can be shortened if remappings.txt configured
import { TriggerablePause } from "lib/ez-trigger/src/presets/TriggerablePause.sol";

// Add `TriggerablePause` to parent contracts.
contract YourContract is Pausable, TriggerablePause("1234567b-fbe1-1234-1234-12abcde123a1") {
    // Your contract's custom logic.
}
```

### 3b. Custom trigger logic

If you want something more custom to be executed for your contract's trigger you can use the base `Triggerable` contract and implement the `_onTrigger()` function.
Just like the `Pausable` example you'll have to replace the example _UserID_ (`1234567b-fbe1-1234-1234-12abcde123a1`) with your account's _UserID_ (see [2.](/#2-obtain-your-userid)).

```solidity
// Add Easy Trigger import, can be shortened if remappings.txt is configured
import { Triggerable } from "lib/ez-trigger/src/Triggerable.sol";

contract YourContract is Triggerable("1234567b-fbe1-1234-1234-12abcde123a1") {
    function _onTrigger() internal override {
        // Custom trigger logic
    }
}
```

