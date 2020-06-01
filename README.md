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

## Demo

Local demo:

```
git clone https://github.com/andrelmlins/svelte-device-detector.git
cd svelte-device-detector
npm install && npm run dev
```

## Examples

An example of how to use the library:

```js
<script>
  import DeviceDetector from "svelte-device-detector";
</script>

<DeviceDetector showInDevice="desktop">
  <p>Desktop</p>
</DeviceDetector>

<DeviceDetector showInBrowser="chrome" showInDevice="mobile">
  <p>Mobile and Chrome</p>
</DeviceDetector>

<DeviceDetector showInBrowser={["safari", "firefox"]}>
  <p>Safari or Firefox</p>
</DeviceDetector>
```

## Properties

For best results the values have these characteristics:

- Ignores sensitive case
- Ignore special character
- Removing accents
- Skips space

| Prop          | Default | Type              | Description                             |
| ------------- | ------- | ----------------- | --------------------------------------- |
| showInDevice  | -       | `string`, `array` | Render view on device types             |
| showInBrowser | -       | `string`, `array` | Render view on browser types            |
| showInOs      | -       | `string`, `array` | Render view on operational system types |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/svelte-device-detector.png)](https://nodei.co/npm/svelte-device-detector/)

## License

Svelte Device Detector is open source software [licensed as MIT](https://github.com/andrelmlins/svelte-device-detector/blob/master/LICENSE).
