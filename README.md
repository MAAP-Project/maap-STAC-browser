# STAC browser CDK

This repository contains the AWS CDK code (written in typescript) used to deploy a STAC browser that acts as a front end to a MAAP STAC catalog. The app in itself is from https://github.com/radiantearth/stac-browser.

## Deployment

The deployment is triggered manually with github workflows. See the actions in this repository, based on `.github/workflows/deploy.yml`. You can run a workflow for either the `test` or `stage` environment (see the environments for this repository).