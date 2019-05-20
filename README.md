# BradMcGonigle.com

[![CircleCI](https://circleci.com/gh/BradMcGonigle/bradmcgonigle/tree/master.svg?style=svg&circle-token=5c8c8153d55f77bdbe1572e12aca8cc461857483)](https://circleci.com/gh/BradMcGonigle/bradmcgonigle/tree/master)

This repo contains the personal website of Brad McGonigle that is built with [Gatsby](https://www.gatsbyjs.org/) and [Bulma](http://bulma.io) running on [Netlify](https://netlify.com).

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment and CDN distribution.

## Prerequisites

- Node (v8.2.0 or higher _recommended_)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

### Access Locally

```
$ git clone https://github.com/bradmcgongile/bradmcgongile.git
$ cd [REPO_NAME]
$ yarn
$ yarn develop
```

## Getting Started (Without Netlify)

```
$ gatsby new [SITE_DIRECTORY_NAME] https://github.com/bradmcgongile/bradmcgongile/
$ cd [SITE_DIRECTORY_NAME]
$ yarn build
$ yarn serve
```

## Debugging

Windows users might encounter `node-gyp` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.

```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')
