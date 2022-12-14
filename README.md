# accelerano [![Status Build](https://github.com/xanben/accelerano/actions/workflows/build.yml/badge.svg)](https://github.com/xanben/accelerano/actions/workflows/build.yml)

#### Suite of utils and components ready to use in your project.

#### NOTES

**Release & Publish**

In order to release new version follow next steps:

* check `main` branch if has successful build status
* increase current version in `package.json` and push changes in `main` branch
* wait until build will have successful status
* run `git tag vX.X.X` - will add new tag, `vX.X.X` - new version same as in `package.json`
* run `git push origin --tags` - will push to origin new tag
* check https://github.com/xanben/accelerano/actions/workflows/release-publish.yml - workflow should
  be executed successful
* check https://github.com/xanben/accelerano/releases - should contain new release
* check https://github.com/xanben/accelerano/pkgs/npm/accelerano - should contain new version of the
  project
