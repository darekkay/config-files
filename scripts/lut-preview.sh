#!/usr/bin/env bash

set -e           # exit on error
set -o pipefail  # trace ERR through pipes
set -o errtrace  # trace ERR through 'time command' and other functions
set -o errexit   # exit the script if any statement returns a non-true return value

# This script applies all LUT files from the current folder to all test images

TEST_IMAGE_FOLDER=/d/misc/photography/LUTs/_test-img/

find $TEST_IMAGE_FOLDER -name "*.jpg"|while read image; do
  cp "$image" .
  find . -name "*.cube"|while read lut; do
    filename_lut_img=$(basename -s .cube "$lut")-$(basename -s .jpg "$image").jpg
    filename_img_lut=$(basename -s .jpg "$image")-$(basename -s .cube "$lut").jpg
    gmic "$image" "$lut" map_clut[0] [1] o[0] \"$filename_img_lut\"
    # Uncomment to create two duplicate images to view the results a) by LUT b) by test image
    # cp "$filename_lut_img" "$filename_lut_img"
  done
done
