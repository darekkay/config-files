# Virtual Box

## Setup

- [Linux Mint](https://linuxmint.com/download.php): Xfce 64bit
- [Setup guide](https://www.virtualbox.org/manual/ch01.html)

## Enable clipboard

- VM Settings → General → Advanced → Bidirectional

## Shared folder

- Solve ["permission denied" issue](https://superuser.com/questions/307853/permission-denied-when-accessing-virtualbox-shared-folder-when-member-of-the-vbo):

```
sudo usermod -aG vboxsf $(whoami)
sudo systemctl restart vboxadd-service.service
```

## Headless Mode

- Hold `Shift` when starting, or
- `VBoxManage.exe startvm "Ubuntu Server" --type headless`

## SSH Login

- Server:  `sudo apt-get install openssh-server`
- Client: `ssh -p 3022 localhost`

![screenshot](virtualbox-port-forwarding.png)
