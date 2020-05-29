<script>
  import DeviceDetector from "../lib/DeviceDetector.svelte";
</script>

<style>

</style>

<main>
  <h1>Svelte Device Detector</h1>
  <DeviceDetector showInBrowser={['safari', 'firefox']}>
    <h1>teste</h1>
  </DeviceDetector>
</main>
