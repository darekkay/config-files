#!/usr/bin/env bash

set -e           # exit on error
set -o pipefail  # trace ERR through pipes
set -o errtrace  # trace ERR through 'time command' and other functions
set -o errexit   # exit the script if any statement returns a non-true return value

# Use UTF-8 (e.g. for Umlauts)
export LANG=C.UTF-8

# Add all JPG files from all subfolders to index.txt
find -L ~+ -type f > index.txt

# Use Windows path
sed -i 's/\/c\//C:\//g' index.txt
sed -i 's/\/d\//C:\//g' index.txt

# :: Run slide show
# :: i_view64.exe /slideshow=index.txt /reloadonloop

## BAT Variant (issue with special characters)
## dir /b /s *.jpg > index.txt