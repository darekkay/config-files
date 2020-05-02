#!/bin/bash

# Create standardized GitHub Issue labels
# Based on https://gist.github.com/mavvverick/9b6c5d06db253f8f16a85315069fb019

USER=darekkay
TOKEN=
REPO=

# Delete default labels

curl --user "$USER:$TOKEN" --include --request DELETE "https://api.github.com/repos/$USER/$REPO/labels/bug"
curl --user "$USER:$TOKEN" --include --request DELETE "https://api.github.com/repos/$USER/$REPO/labels/documentation"
curl --user "$USER:$TOKEN" --include --request DELETE "https://api.github.com/repos/$USER/$REPO/labels/duplicate"
curl --user "$USER:$TOKEN" --include --request DELETE "https://api.github.com/repos/$USER/$REPO/labels/enhancement"
curl --user "$USER:$TOKEN" --include --request DELETE "https://api.github.com/repos/$USER/$REPO/labels/good%20first%20issue"
curl --user "$USER:$TOKEN" --include --request DELETE "https://api.github.com/repos/$USER/$REPO/labels/help%20wanted"
curl --user "$USER:$TOKEN" --include --request DELETE "https://api.github.com/repos/$USER/$REPO/labels/invalid"
curl --user "$USER:$TOKEN" --include --request DELETE "https://api.github.com/repos/$USER/$REPO/labels/question"
curl --user "$USER:$TOKEN" --include --request DELETE "https://api.github.com/repos/$USER/$REPO/labels/wontfix"

# Create labels

## Type
curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Type: Bug", "color":"d83933", "description": "Something is not working"}' "https://api.github.com/repos/$USER/$REPO/labels"
curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Type: Documentation", "color":"c5d30a", "description": "Documentation"}' "https://api.github.com/repos/$USER/$REPO/labels"
curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Type: Enhancement", "color":"2672de", "description": "New feature or request "}' "https://api.github.com/repos/$USER/$REPO/labels"
curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Type: Maintainance", "color":"face00", "description": "Code maintainance"}' "https://api.github.com/repos/$USER/$REPO/labels"
curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Type: Question", "color":"b04abd", "description": "Question regarding the project"}' "https://api.github.com/repos/$USER/$REPO/labels"

## Misc
curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"good first issue","color":"7057ff", "description":"Good for newcomers"}' "https://api.github.com/repos/$USER/$REPO/labels"

# curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Status: Abandoned","color":"000000"}' "https://api.github.com/repos/$USER/$REPO/labels"
# curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Status: Accepted","color":"009800"}' "https://api.github.com/repos/$USER/$REPO/labels"
# curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Status: Available","color":"bfe5bf"}' "https://api.github.com/repos/$USER/$REPO/labels"
# curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Status: Blocked","color":"e11c21"}' "https://api.github.com/repos/$USER/$REPO/labels"
# curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Status: Completed","color":"006b75"}' "https://api.github.com/repos/$USER/$REPO/labels"
# curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Status: In Progress","color":"cccccc"}' "https://api.github.com/repos/$USER/$REPO/labels"
# curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Status: On Hold","color":"e11c21"}' "https://api.github.com/repos/$USER/$REPO/labels"
# curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Status: Pending","color":"fef2c0"}' "https://api.github.com/repos/$USER/$REPO/labels"
# curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Status: Review Needed","color":"fbca04"}' "https://api.github.com/repos/$USER/$REPO/labels"
# curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Status: Revision Needed","color":"e11c21"}' "https://api.github.com/repos/$USER/$REPO/labels"
# curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Priority: Critical","color":"e11c21"}' "https://api.github.com/repos/$USER/$REPO/labels"
# curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Priority: High","color":"eb641f"}' "https://api.github.com/repos/$USER/$REPO/labels"
# curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Priority: Low","color":"009800"}' "https://api.github.com/repos/$USER/$REPO/labels"
# curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"Priority: Medium","color":"fbca04"}' "https://api.github.com/repos/$USER/$REPO/labels"
# curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"duplicate","color":"aaaaaa"}' "https://api.github.com/repos/$USER/$REPO/labels"
# curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"wishlist","color":"66Aa00"}' "https://api.github.com/repos/$USER/$REPO/labels"
# curl --user "$USER:$TOKEN" --include --request POST --data '{"name":"declined","color":"83000C"}' "https://api.github.com/repos/$USER/$REPO/labels"

