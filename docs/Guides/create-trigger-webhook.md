---
sidebar_position: 2
---

# Creating & Confuring A Trigger Webhook

## Prerequisites

In order to create an _Easy Trigger_ you must first follow the steps of [configuring your smart contract](/).

## Add a New Trigger

### 1. Click _New Trigger_

![Obtain UserID](/screenshots/click_new_trigger.png)

### 2. Fill out the form

You will get the Webhook after saving the form.

![New Trigger](/screenshots/new_trigger_form.png)

#### Trigger Name

Give your trigger a name.

#### Network

Choose the network where your contract is deployed.

**Note**: We do not support _Mainnet_ yet. If you are interested in it, please let us know (contact@dereg.io).

#### Contract Address

The address of your smart contract. Make sure your contract inherits from _Triggerable_ and passes your _UserID_ (see [Configure Smart Contract](/)).

#### Allowlist for specific domains

Adding domains here, will restrict calling _Easy Trigger_ to the domains you specify here. This will increase security.

If you choose to not use the allowlist, please make sure to never share your webhook, since anyone with the
Webhook Url could call the _Easy Trigger_.

### 3. Click _Save & Create Webhook_

### 4. Use Webhook

After you saved, the Webhook will be created.

![Saved Webhook](/screenshots/webhook_created.png)

:::caution

By default, calling the Webhook does **not** trigger the smart contract, so you can first test it. To activate it, click on the active switch (see [6.](#6-activate-easy-trigger))

:::

### 5. Test _Easy Trigger_

You can now send a **POST** request to your Webhook URL

Alternatively you can just click _Trigger Webhook_ in order to test it.
If your _Easy Trigger_ is active (see [6.](#6-activate-easy-trigger)),
pressing _Trigger Webhook_ will also call your smart contract.

Every time the an _Easy Trigger_ is called you will get a notification and can see details by clicking on the bell icon of your trigger.

![Trigger Notifications](/screenshots/test_trigger_bell.png)

### 6. Activate _Easy Trigger_

Once you have finished testing you can active the _Easy Trigger_ by clicking on the activate switch.

![Activate Trigger](/screenshots/activate_trigger.png)
