#!/bin/bash -e

# Commit and push linter fixes

yarn config list
yarn install
yarn jenkins:lint:js

git fetch --all

# Alternative, if GitHub env variables are not available:

# Find the (first) remote branch name pointing to the current commit
# REMOTE_BRANCH_REF=$(git branch --remotes --format='%(refname)' --points-at $(git rev-parse HEAD) | sed -n 1p)

# Replace refs/remotes/origin/<branch> with refs/heads/<branch> for pushing
# REMOTE_BRANCH_HEAD=$(echo $REMOTE_BRANCH_REF | sed "s/remotes\/origin/heads/")

if [[ "${ghprbSourceBranch}" != "develop" ]]; then
  git checkout ${ghprbSourceBranch}

  # Commit and push ESlint and Prettier fixes
  git add -A
  git diff-index --quiet HEAD || git commit -m "Apply ESlint and Prettier fixes"
  {
    #try
    echo "Pushing changes"
    git push --no-verify origin ${ghprbSourceBranch}
  } || {
    # catch
    echo "Could not push changes"
  }
fi
