# Git

| Command                                      | Description                                     |
| -------------------------------------------- | ----------------------------------------------- |
| `git branch -d <local-branch>`               | Delete a local branch                           |
| `git push origin :<remote-branch>`           | Delete a remote branch                          |
| `git diff --cached`                          | Show staged changes                             |
| `git reset`                                  | Unstage all staged changes                      |
| `git checkout .`                             | Revert all modified changes                     |
| `git clean -f`                               | Remove untracked files from the working tree    |
| `git reset HEAD~`                            | Undo last commit, leave changes unstaged        |
| `git commit --amend -m "<msg>"`              | Change last commit message                      |
| `git commit --allow-empty --amend --no-edit` | Recommit last commit (hook test)                |

## Git clients

 - [SourceTree](https://www.sourcetreeapp.com/)
 - [TortoiseGit](https://tortoisegit.org/)
 - [GitKraken](https://www.gitkraken.com/)
 - [Git Tower](https://www.git-tower.com/windows/)

## Set default editor

```ini
# Vim (default)
editor = "vim"

# Notepad++
# Either add the exe to PATH or provide the full path
editor = "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
editor = "notepad++ -multiInst -notabbar -nosession -noPlugin"

# VSCode
editor = "code --wait"

# Atom
editor = "atom --wait"

# Sublime Text 3
editor = "subl -w"
```

## Rebase vs Merge

![Rebase vs Merge](rebase-vs-merge.jpg)

[Source](https://twitter.com/michaelhenke/status/585142133167751169)
