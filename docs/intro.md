---
sidebar_position: 1
slug: /
---

# Configure Smart Contract

_Easy Trigger_ provides you with a webhook that will trigger a specific smart contract function when called.

### Smart Contract Integration (`foundry` example)

**1. Installation**

```
foundry install dereg-io/ez-trigger
```

**2. Automatically trigger OpenZeppelin's `Pausable._pause`:**\
\*\*\*\*Assuming your contract is already using [OpenZeppelin's Pausable](https://docs.openzeppelin.com/contracts/4.x/api/security#Pausable) mixin all you need to do is import the `TriggerablePause` preset and have your contract inherit from it:

```solidity
// Add Easy Trigger import, can be shortened if remappings.txt configured
import { TriggerablePause } from "lib/ez-trigger/src/presets/TriggerablePause.sol";

// Add `TriggerablePause` to parent contracts.
contract YourContract is Pausable, TriggerablePause {
    // Your contract's custom logic.
}
```

**2b. Custom trigger logic**\
\*\*\*\*If you want something more custom to be executed for your contract's trigger you can use the base `Triggerable` contract and implement the `_onTrigger()` function:

```solidity
// Add Easy Trigger import, can be shortened if remappings.txt configured
import { Triggerable } from "lib/ez-trigger/src/Triggerable.sol";

// Add TriggerablePause to parent contracts.
contract YourContract is Pausable, Triggerable {
    function _onTrigger() internal override {
        // Custom trigger logic
    }
}
```

### Activating and Using Your Trigger

(Insert UI instructions and screenshots here)
