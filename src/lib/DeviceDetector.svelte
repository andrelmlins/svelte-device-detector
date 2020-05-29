<script>
  import UAParser from "ua-parser-js";
  import { onMount } from "svelte";

  onMount(() => {
    console.log("ENTROU");
    const uaParser = new UAParser();
    console.log(uaParser);
    console.log(uaParser.getBrowser());
    console.log(uaParser.getDevice());
    console.log(uaParser.getOS());
  });
</script>

<p>Teste</p>
