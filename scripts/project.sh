#!/bin/bash

# Creates a new project:
#   ~/apps/project
#   ~/git/project.git

# nano ~/bin/project
# chmod +x ~/bin/project

set -e           # exit on error
set -o pipefail  # trace ERR through pipes
set -o errtrace  # trace ERR through 'time command' and other functions
set -o errexit   # exit the script if any statement returns a non-true return value

if [[ $# -eq 0 ]] ; then
    echo 'Error: project name required.'
    exit 0
fi

PROJECT="$1"

GIT_REPO=$HOME/git/$PROJECT.git
WORK_TREE=$HOME/apps/$PROJECT

mkdir -p "$WORK_TREE"
echo "Created app folder: $WORK_TREE"

mkdir -p "$GIT_REPO"
git init --bare "$GIT_REPO"
echo "Created git repository: $GIT_REPO"

cat > "$GIT_REPO"/hooks/post-receive << EOT
#!/bin/bash

set -e           # exit on error
set -o pipefail  # trace ERR through pipes
set -o errtrace  # trace ERR through 'time command' and other functions
set -o errexit   # exit the script if any statement returns a non-true return value

echo "[post-receive] Deploying git repository... "

export GIT_DIR=$GIT_REPO
export GIT_WORK_TREE=$WORK_TREE

# Add n to PATH
PATH=\$PATH:/home/darekkay/n/bin

echo "[post-receive] node version: \$(node --version)"
echo "[post-receive] npm  version: \$(npm --version)"
echo "[post-receive] yarn version: $(yarn --version)"

# Checkout repository into work tree
git checkout -f

# Switch into work tree
cd \$GIT_WORK_TREE

# Reset git variables for yarn
unset GIT_DIR
unset GIT_WORK_TREE

# Sync installed node_modules with package.json
echo "[post-receive] Syncing node_modules with package.json..."
yarn install --pure-lockfile --prefer-offline

echo "[post-receive] Building project"
yarn build

echo "[post-receive] Git repository deployed."

EOT

chmod +x "$GIT_REPO"/hooks/post-receive
echo "Created post-receive hook"
