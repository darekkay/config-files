# Use UTF-8 Encoding
export LESSCHARSET=UTF-8
export LC_ALL=C.UTF-8

# Hide unnecessary bash prompt info on a locale machine (default: $MSYS2_PS1 or $PS1)
export PS1='\[\033]0;\W\007\]\n\[\033[34m\]● \[\033[32m\]\w\[\033[36m\]`__git_ps1`\[\033[0m\]\n$ '

# Avoid duplicate history entries
export HISTCONTROL=ignoreboth:erasedups

# Sort files with dotfiles first
export LC_COLLATE="C"

# Disable terminal sounds
setterm -blength 0
unsetopt beep

# Set Node.js RAM
export NODE_OPTIONS=--max-old-space-size=8096

# Use yarn instead of npm for the ntl package
export NTL_RUNNER=yarn ntl
