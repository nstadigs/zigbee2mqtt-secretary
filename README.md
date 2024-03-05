# zigbee2mqtt-secretary
A zigbee2mqtt extension that lets you send multiple commands in one payload.
This extension will try to optimize your commands by automatically creating
groups and scenes for your most common operations.

# !! WIP !!

Nothing works yet.

# How to install
Create an automations.yaml file in the zigbee2mqtt\data directory (alongside configuration.yaml) and write your first automation (copy from the examples).
Don't modify configuration.yaml.

Method 1
Download the file dist\automation.js and place it in the zigbee2mqtt\data\extension directory (create the directory if it doesn't exist).
Stop zigbee2mqtt, ensure it has completely stoppped, and then start it again. This method ensures all extensions are loaded.

Method 2
In frontend go to Extensions add an extension. Name it automation.js and confirm. In the editor delete the default extension content and copy paste the entire content of automation.js. Save it.

# How to reload the automations when the file automations.yaml has been modified.
In frontend go to Extensions. Select automation.js and save. The extension is reloaded and the automations.yaml is reloaded too.

# Bug report and feature request
https://github.com/nstadigs/zigbee2mqtt-secretary/issues

# Credits
This extension was originally forked from https://github.com/Luligu/zigbee2mqtt-automations for the great setup of a repo for an z2m extension.
