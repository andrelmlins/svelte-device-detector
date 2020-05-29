<script>
  import UAParser from "ua-parser-js";
  import { onMount } from "svelte";

  export let device = undefined;
  export let browser = undefined;
  export let os = undefined;

  let showSlot = false;

  onMount(() => {
    const uaParser = new UAParser();
    let detectedBrowser = uaParser.getBrowser();
    let detectedDevice = uaParser.getDevice();
    let detectedOs = uaParser.getOS();
    let show = true;

    if (device && formatter(device) !== getDevice(device)) {
      show = false;
    }

    if (browser && formatter(browser) !== formatter(detectedBrowser.name)) {
      show = false;
    }

    if (os && formatter(os) !== formatter(detectedOs.name)) {
      show = false;
    }

    showSlot = show;
  });

  const getDevice = device => {
    if (!device.type) {
      return "browser";
    }

    return formatter(device.type);
  };

  const formatter = string => string.toLowerCase().replace(/ /g, "");
</script>

{#if showSlot}
  <slot />
{/if}
