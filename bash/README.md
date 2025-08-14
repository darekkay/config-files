# Bash

## File permissinos

```
Owner - Group - Others
r = 4   w = 2   x = 1
```

- Remove (-) write (w) permission for group (g):

```
$ chmod g-w <filename>
```

## Enable colors on SSH connections via CYGWIN

Add `cygwin` to `.bashrc` on the remote machine:

```
case "$TERM" in
    xterm-color|cygwin|*-256color) color_prompt=yes;;
esac
```

## Brace expansion

```
$ echo a{b,c,d}e
abe ace ade
```

- [Manual](https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html)

# Zsh

## Plugins

- Built-in
  - [npm](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/npm): Adds completion and aliases for `npm` commands.
  - [yarn](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/yarn): Adds completion and aliases for `yarn` commands.
  - [sudo](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sudo): Press double ESC to add `sudo` to the previous command.
- 3rd-party
  - [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions): Suggest commands from history.
  - [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting): Colors while typing.

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

# rsync

- Use `--dry-run --itemize-changes --stats` to test the command
- Directory sync:
  - `rsync path/source target`: `target/source/*`
  - `rsync path/source/ target`: `target/*`


# Atop

- [atoptool.nl](https://www.atoptool.nl/) - performance monitor
- evaluate performance logs:

```
atopsar -c      # CPU usage stats
atomsar -R 6    # hourly stats
```

# htop

| Shortcut              | Description            |
| --------------------- | ---------------------- |
| Shift + M             | Sort by Memory usage   |
| Shift + H             | Hide threads           |
| F5                    | Process Tree View      |

# Nano

## Improved syntax highlighting

- upload backup (`~/.nano`, `~/.nanorc`)
- system-wide: `/etc/nanorc`:

```ini
include "/home/USER/.nano/syntax/*.nanorc"
```

- OR: [nanorc](https://github.com/scopatz/nanorc)

## Add Linux utilities to Windows Git Bash

- [How to add more to Git Bash on Windows](https://gist.github.com/evanwill/0207876c3243bbb6863e65ec5dc3f058)
- e.g. `wget`
