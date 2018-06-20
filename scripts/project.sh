#!/bin/bash

# Creates a new project:
#   ~/apps/project
#   ~/git/project.git

# nano ~/bin/project
# chmod +x ~/bin/project


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

echo "[post-receive] Deploying git repository... "

export GIT_DIR=$GIT_REPO
export GIT_WORK_TREE=$WORK_TREE

# Add n to PATH
PATH=\$PATH:/home/darekkay/n/bin

echo "[post-receive] node version: \$(node --version)"
echo "[post-receive] npm  version: \$(npm --version)"

# Checkout repository into work tree
git checkout -f

# Switch into work tree
cd \$GIT_WORK_TREE

# Sync installed node_modules with package.json
echo "[post-receive] Syncing node_modules with package.json..."
npm prune && npm update

echo "[post-receive] Building project"
npm run build

echo "[post-receive] Git repository deployed."

EOT

chmod +x "$GIT_REPO"/hooks/post-receive
echo "Created post-receive hook"
