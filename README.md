# Svelte Device Detector

[![npm version](https://badge.fury.io/js/svelte-device-detector.svg)](https://www.npmjs.com/package/svelte-device-detector) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/svelte-device-detector/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/svelte-device-detector.svg?branch=master)](https://travis-ci.com/andrelmlins/svelte-device-detector)

Render views on different device types.

## Installation

```
npm i svelte-device-detector
// OR
yarn add svelte-device-detector
```

<em>Note: to use this library in sapper, install as devDependency. See the [link](https://github.com/sveltejs/sapper-template#using-external-components).</em>

## Demo [Link](https://svelte-device-detector.netlify.com/)

Local demo:

```
git clone https://github.com/andrelmlins/svelte-device-detector.git
cd svelte-device-detector
yarn && yarn start
```

## Examples

An example of how to use the library:

```js
<script>
  import DeviceDetector, { DEVICE_TYPES, BROWSER_TYPES } from "svelte-device-detector";
</script>

<DeviceDetector device={DEVICE_TYPES.DESKTOP}>
  <p>Desktop</p>
</DeviceDetector>

<DeviceDetector browser={BROWSER_TYPES.CHROME} device={DEVICE_TYPES.MOBILE}>
  <p>Mobile</p>
</DeviceDetector>
```

## Properties

Component props:

| Prop    | Default | Type   | Description                             |
| ------- | ------- | ------ | --------------------------------------- |
| device  | -       | string | Render view on device types             |
| browser | -       | string | Render view on browser types            |
| os      | -       | string | Render view on operational system types |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/svelte-device-detector.png)](https://nodei.co/npm/svelte-device-detector/)

## License

Svelte Device Detector is open source software [licensed as MIT](https://github.com/andrelmlins/svelte-device-detector/blob/master/LICENSE).
