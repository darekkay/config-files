TEST_IMAGE_FOLDER=/c/images

find $TEST_IMAGE_FOLDER -name "*.jpg"|while read image; do
  cp "$image" .
  find . -name "*.cube"|while read lut; do
    # gmic "$image" "$lut" map_clut[0] [1] o[0] \"$(basename -s .cube "$lut")-$(basename -s .jpg "$image").jpg\"
    gmic "$image" "$lut" map_clut[0] [1] o[0] \"$(basename -s .jpg "$image")-$(basename -s .cube "$lut").jpg\"
  done
done
