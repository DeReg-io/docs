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

Note you can omit the `--no-commit` flag if you're installing the lib into a folder that isn't a git
repo.
```
forge install dereg-io/ez-trigger --no-commit
```

### 2. Obtain your UserID

Login or SignUp at [app.dereg.io](https://app.dereg.io).

After logging in, at the top right of the page you will find your _UserID_.
Add it to your smart contract code (see [3.](/#3-add-to-smart-contract)), this ensure
only you can create an _Easy Trigger_ for your smart contract.

![Obtain UserID](/screenshots/obtain_userid.png)

### 3. Add to Smart Contract

To implement the actual logic that'll get executed for your trigger you can start by importing and
inheriting from the base `Triggerable` mixin and replace the example _UserID_ with your _UserId_
(see [2.](/#2-obtain-your-userid)).

You then define the `_onTrigger` method which will be executed when your trigger webhook is called.

:::note
It's safe to share your _UserID_ and have it be part of your public smart contract code. The _UserID_
is necessary for us to be able to associate contracts to their respective user accounts and prevent
different users from triggering each other's contracts.
:::

```solidity
// Add Easy Trigger import, can be shortened if remappings.txt configured.
import { Triggerable } from "ez-trigger/src/Triggerable.sol";

// Add `Triggerable` to parent contracts (contracts you're inheriting from)
contract YourContract is Pausable, Triggerable("1234567b-fbe1-1234-1234-12abcde123a1") {
    function _onTrigger() internal override {
        _pause();
    }
}
```

Outside of pausing your contract you can customize the functionality of your trigger by defining
different logic in your `_onTrigger` internal method.

:::caution
Trigger logic is limited to ~165k gas _for now_ to mitigate potential spam. If your `_onTrigger`
callback attempts to utilize more than approx. 165,000 gas the call as a whole will revert.
:::
