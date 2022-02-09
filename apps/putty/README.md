# PuTTY

## Putty Eclectide color theme

![Putty Eclectide color theme](putty-eclectide.png)

- [Color scheme file](putty-eclectide.reg) (Replace `SESSION_NAME` before executing)
- [Blog post](https://darekkay.com/blog/my-putty-color-scheme/)

## Move PuTTY sessions to another computer

PuTTY stores all the session information in Windows registry:

```C:> regedit /e "%userprofile%\desktop\putty-registry.reg" HKEY_CURRENT_USER\Software\Simontatham```

## Create PuTTY session shortcuts

![PuTTY session shortcut](putty-session-shortcut.png)

[Source](http://www.thegeekstuff.com/2009/07/10-practical-putty-tips-and-tricks-you-probably-didnt-know/)

## Pageant autostart shortcut

- Target: `PAGEANT.EXE key1.ppk key2.ppk`
- Start in: `C:\Users\USER\.ssh`
