# Kaspersky AntiVirus

## Remove inject script

 - open a website
 - ctrl-U to view source
 - look at the end of the head section, see this: `<script type="text/javascript" src="https://xxxxxxx.kaspersky-labs.com/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX/main.js" charset="UTF-8"></script>`
 - Kaspersky application
 - Settings Page
 - select "Additional" section on left side
 - select "Network" settings

Monitored Ports
 - [ ] Monitor all network ports
 - [X] Monitor selected ports only _Select..._

Click the Select... link
 - Remove: HTTPS on port 443
 - Remove: HTTP on port 80
 - Remove: any/all other HTTP if you use those frequently
 - Bottom of the list, UNCHECK "Monitor all network ports..."

Close the Network Ports window

Close the settings window

 - re-open chrome or whatever
 - load webpage
 - view source (ctrl-U)
 - injection script should be gone.

[Source](https://www.reddit.com/r/privacy/comments/3frjqw/psa_kaspersky_injects_remote_javascript_into_all/)
