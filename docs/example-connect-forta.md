---
sidebar_position: 4
---

# Example: Trigger via Forta Notifications

You can let Forta trigger your _Easy Trigger_ and as a result, call your smart contract.
This can be useful, e.g. if you want to pause your contract on a potential attack. (see
[Automatically trigger OpenZepplin's Pausable](/#3a-automatically-trigger-openzeppelins-pausable_pause))

## Prerequisites

You will first need to [Configure your Smart Contract](/) and
[Create an _Easy Trigger_](/create-easy-trigger).

You will also need an ethereum wallet for _Polygon Mainnet_ in order to create a Forta notification.

### Create an Ethereum Wallet

You can use a wallet provider like [Metamask](https://metamask.io/).
Add _Metamask_ to your browser and create an account.
Once you open the _Metamask_ browser plugin, it is connected to _Ethereum Mainnet_ by default.

### Switch Wallet to Polygon

Click on _Ethereum Mainnet_ and then on _Add network_ and add _Polygon Mainnet_.

Finally, choose the _Polygon Mainnet_ network from the dropdown at the top of the _Metamask_ browser plugin.

## Log-In to Forta

Go to https://app.forta.network/notifications.

Click _Sign In With Wallet_ at the top right. This will open a popup of _Metamask_ (or any other Wallet you are using) where you have to sign the Forta request.

Once your signed in, click on _Add subscription_, where you should see the following popup:

![Forta Alert](/screenshots/forta_alert.png)

In the _Select Subscription type_ dropdown you can one of the options, e.g. one of the _Forta Curated_ selection of bots. Alternatively you can also also fist [search for a specific bot](https://explorer.forta.network/).


:::caution
If your _Easy Trigger_ will, e.g. pause your smart contract, we highly recommend adding a filter that Forta will only call your Webhook on _Critical_ severity alerts.
Setting an appropriate filter is important as your trigger will be executed whenever the associated webhook receives a request.
:::

To add a filter, click _Add Filter_, select _Min Severity_ and then _CRITICAL_.

Depending on what bots you select, enter your Contract address in _Addresses to watch_.

Finally click on _Webhook_ under _Notify me via_ and enter the [Webhook Url from your _Easy Trigger_](/create-easy-trigger#4-use-webhook).
