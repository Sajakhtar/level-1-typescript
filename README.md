# Level 1 TypeScript course

Courtesy of [Levelup Tutorials](https://leveluptutorials.com/).

Requires installation of Parcel.

## Setup

Install Parcel bundler:

```bash
npm install -g parcel
```

Init Node modules:

```bash
npm init
```


Compiler
- can use TypeScript inbuilt compiler (TSC)
- or use Parcel plugin that uses TSC, as it has additional features

```bash
# For  latest version of Parcel
npm install --save-dev parcel-plugin-typescript

# If latest version gives errors, v1.9.4 is known to work
npm install --save-dev parcel-plugin-typescript parcel-bundler-1.9.4
```

## Run locally

To run local server port 1234:

```bash
parcel index.html
```
Open http://localhost:1234/.
