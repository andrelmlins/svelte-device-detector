<script>
  import UAParser from "ua-parser-js";
  import { onMount } from "svelte";

  export let showInDevice = undefined;
  export let showInBrowser = undefined;
  export let showInOs = undefined;

  let showSlot = false;

  onMount(() => {
    const uaParser = new UAParser();
    let detectedBrowser = uaParser.getBrowser();
    let detectedDevice = uaParser.getDevice();
    let detectedOs = uaParser.getOS();
    let show = true;

    if (showInDevice && !equals(getDevice(detectedDevice), showInDevice)) {
      show = false;
    }

    if (
      showInBrowser &&
      !equals(formatter(detectedBrowser.name), showInBrowser)
    ) {
      show = false;
    }

    if (showInOs && !equals(formatter(detectedOs.name), showInOs)) {
      show = false;
    }

    showSlot = show;
  });

  const getDevice = device => {
    if (!device.type) {
      return "desktop";
    }

    return formatter(device.type);
  };

  const formatter = string =>
    string
      .toLowerCase()
      .normalize("NFD")
      .replace(/ /g, "")
      .replace(/[^\w\s]/gi, "")
      .replace(/[\u0300-\u036f]/g, "");

  const equals = (value, option) => {
    if (Array.isArray(option)) {
      return option.some(item => value === formatter(item));
    }

    return value === formatter(option);
  };
</script>

{#if showSlot}
  <slot />
{/if}
