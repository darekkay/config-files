# Node.js

## General

- Give Node.js more RAM: `NODE_OPTIONS="--max-old-space-size=8096" node`
- Use [different npm module versions](https://mariosfakiolas.com/blog/install-multiple-major-versions-of-a-node-module-with-npm/) at the same time.

### Packages

## Global packages

- [alex](https://www.npmjs.com/package/alex) - Catch insensitive, inconsiderate writing
- [cloc](https://www.npmjs.com/package/cloc) - Count lines of code
- [evaluatory](https://github.com/darekkay/evaluatory) - Web page evaluation with a focus on accessibility
- [fixpack](https://www.npmjs.com/package/fixpack) - Sort package.json
- [get-changelog-cli](https://www.npmjs.com/package/get-changelog-cli) - Find module changelogs
- [http-server](https://www.npmjs.com/package/http-server) - Local HTTP server
  - `http-server --cors`
- [imagemin-cli](https://www.npmjs.com/package/imagemin-cli) - Image minifier
- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) - Upgrade package.json dependencies
- [ntl](https://www.npmjs.com/package/ntl) - List and run npm tasks
- [release-it](https://www.npmjs.com/package/release-it) - Automate versioning and package publishing tasks.
  - [@release-it/keep-a-changelog](https://github.com/release-it/keep-a-changelog) - Keep a Changelog plugin

```bash
npm install -g alex cloc evaluatory fixpack get-changelog-cli http-server imagemin-cli npm-check-updates ntl release-it @release-it/keep-a-changelog
```

## Other packages

- [alex](https://github.com/get-alex/alex) - Catch insensitive, inconsiderate writing
- [create-react-app](https://github.com/facebook/create-react-app) - React boilerplate
- [envinfo](https://github.com/tabrindle/envinfo) - Development environment report
- [gulp](https://gruntjs.com/) - Streaming build system

## npm

```bash
npm outdated                 # Show outdated packages
npm ls --depth=0             # List package versions
npm publish --access public  # Publish @scoped package
```

## npm settings

```bash
npm config set prefer-offline true
npm config set progress false
npm config set save-exact true
```

## n - version manager

- [n](https://github.com/tj/n)
- [n-install](https://github.com/mklement0/n-install)

```bash
# Install
curl -L https://git.io/n-install | bash

# Update
n-update
```

Commands:

```bash
n                    # Output versions installed
n <version>          # Install or activate node <version>
n rm <version ...>   # Remove the given version(s)
n prune              # Remove all versions except the current version
```

## pm2

```bash
pm2 start apps.yml                  # load all apps defined in apps.yml
pm2 save                            # save process list
pm2 reload apps.yml [--update-env]  # reload all apps
pm2 stop all                        # stop all apps
pm2 delete all                      # delete all apps

pm2 list              # list all processes
pm2 monit             # monitor all processes
pm2 describe 0        # display all information about a specific process

pm2 logs [app]        # display logs
pm2 reset [process]   # reset meta data (restarted time...)
```

- [Update pm2](http://pm2.keymetrics.io/docs/usage/update-pm2/)

```bash
pm2 save
npm install -g pm2
pm2 update
```

- Enable [logrotate](https://github.com/keymetrics/pm2-logrotate)

```bash
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 1M
pm2 set pm2-logrotate:retain 50
pm2 set pm2-logrotate:rotateInterval "0 1 1 1 *"
pm2 set pm2-logrotate:workerInterval 3600
```

- TypeScript support is not very good. Instead, compile TS code to JS.

## node-gyp

- Installation on [Windows](https://github.com/nodejs/node-gyp#on-windows)


## Semantic Versioning

- Major.Minor.Patch
- Caret (`^`): `3.^.^`
- Tilde (`~`): `3.9.~`
