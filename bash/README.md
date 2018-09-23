# Bash

## Enable colors on SSH connections via CYGWIN

Add `cygwin` to `.bashrc` on the remote machine:

```
case "$TERM" in
    xterm-color|cygwin|*-256color) color_prompt=yes;;
esac
```

# Cron

## Debug

```
* * * * * COMMAND >> /home/user/log.txt 2>&1
```

# Atop

- [atoptool.nl](https://www.atoptool.nl/) - performance monitor
- evaluate performance logs:

```
atopsar -c      # CPU usage stats
atomsar -R 6    # hourly stats
```
