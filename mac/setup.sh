#!/usr/bin/env sh

brew upgrade

# Git
brew install git

# coreutils: https://formulae.brew.sh/formula/coreutils
brew install coreutils

# findutils: https://formulae.brew.sh/formula/findutils
brew install findutils

# dos2unix: https://formulae.brew.sh/formula/dos2unix
brew install dos2unix

# fzf
brew install fzf
$(brew --prefix)/opt/fzf/install

# Delta: https://github.com/dandavison/delta
brew install git-delta

# mmv: https://formulae.brew.sh/formula/mmv
brew install mmv

# AltTab: https://alt-tab-macos.netlify.app/
brew install alt-tab

# qView: https://interversehq.com/qview/
brew install qview

# Rectangle: https://formulae.brew.sh/cask/rectangle
brew install --cask rectangle

# Fonts
brew tap homebrew/cask-fonts
brew install --cask font-aldrich font-anaheim font-anton font-assistant font-cuprum font-dosis font-fira-code font-gudea font-lato font-noto-sans font-nunito-sans font-open-sans font-oswald font-redacted-script
