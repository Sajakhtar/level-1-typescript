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


Compiler (does not work for Parcel 2)
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

## Notes

If using JS modules add `type="module"` to the script tag in index.html.

Usefule TS resources: [Awesome TypeScript](https://github.com/dzharii/awesome-typescript)

## TypeScript Compiler (TSC)

Install TypeScript as dev dependancy:
```bash
npm install --save-dev typescript
```

Create a `tsconfig.json` filer in the root of the project.

Add `"tsc": "tsc",` in the package.json scripts, then run the following in order to use the TypeScript Compiler within the project:

```bash
npm run tsc
```

This will create convert the `.ts` files into `.js` files.
