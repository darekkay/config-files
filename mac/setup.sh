#!/usr/bin/env sh

brew upgrade

# coreutils: https://formulae.brew.sh/formula/coreutils
brew install coreutils

# dos2unix: https://formulae.brew.sh/formula/dos2unix
brew install dos2unix

# exiftool: https://formulae.brew.sh/formula/exiftool
brew install exiftool

# ffmpeg: https://formulae.brew.sh/formula/ffmpeg
brew install ffmpeg

# findutils: https://formulae.brew.sh/formula/findutils
brew install findutils

# fzf: https://formulae.brew.sh/formula/fzf
brew install fzf
$(brew --prefix)/opt/fzf/install

# gawk
brew install gawk

# Git
brew install git

# Delta: https://formulae.brew.sh/formula/git-delta
brew install git-delta

# ImageMagick: https://formulae.brew.sh/formula/imagemagick
brew install imagemagick

# jq: https://formulae.brew.sh/formula/jq
brew install jq

# Mole: https://formulae.brew.sh/formula/mole
brew install mole

# Node.js: https://formulae.brew.sh/formula/node
brew install node

# Python Setuptools: https://formulae.brew.sh/formula/python-setuptools
brew install python-setuptools

# Rectangle: https://formulae.brew.sh/cask/rectangle
brew install --cask rectangle

# sqlite3: https://formulae.brew.sh/formula/sqlite
brew install sqlite

# vale: https://formulae.brew.sh/formula/vale
brew install vale

# yt-dlp: https://formulae.brew.sh/formula/yt-dlp
brew install yt-dlp

# Fonts
brew tap homebrew/cask-fonts
brew install --cask font-aldrich font-anaheim font-anton font-assistant font-cuprum font-dosis font-fira-code font-gudea font-lato font-noto-sans font-nunito-sans font-open-sans font-oswald font-redacted-script
