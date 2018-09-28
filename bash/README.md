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

Pipe `stdout` and `stderr` to [syslog](https://serverfault.com/questions/137468/better-logging-for-cronjobs-send-cron-output-to-syslog):

```
* * * * * COMMAND 2>&1 | /usr/bin/logger -t <TAG>
```

Read cron logs:

```
grep CRON /var/log/syslog
grep <TAG> /var/log/syslog
```

# Atop

- [atoptool.nl](https://www.atoptool.nl/) - performance monitor
- evaluate performance logs:

```
atopsar -c      # CPU usage stats
atomsar -R 6    # hourly stats
```
