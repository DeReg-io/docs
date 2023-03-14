---
sidebar_position: 1
slug: /
---

# Configure Smart Contract

_Easy Trigger_ provides you with a webhook that will trigger a specific smart contract function when called.

## Smart Contract Integration (using `foundry`)

### 1. Installation

```
foundry install dereg-io/ez-trigger
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
mixin all you need to do is import the `TriggerablePause` preset and have your contract inherit from it and replace _UserID_ with your
_UserId_ (see [2.](/#2-obtain-your-userid)).

```solidity
// Add Easy Trigger import, can be shortened if remappings.txt configured
import { TriggerablePause } from "lib/ez-trigger/src/presets/TriggerablePause.sol";

// Add `TriggerablePause` to parent contracts.
contract YourContract is Pausable, TriggerablePause("UserID") {
    // Your contract's custom logic.
}
```

### 3b. Custom trigger logic

If you want something more custom to be executed for your contract's trigger you can use the base `Triggerable` contract and implement the `_onTrigger()` function:

```solidity
// Add Easy Trigger import, can be shortened if remappings.txt is configured
import { Triggerable } from "lib/ez-trigger/src/Triggerable.sol";

// Add TriggerablePause to parent contracts.
contract YourContract is Pausable, Triggerable("UserID") {
    function _onTrigger() internal override {
        // Custom trigger logic
    }
}
```
