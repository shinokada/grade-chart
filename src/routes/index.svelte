<script>
  import {
    // averageStore,
    studentNameStore,
    titleStore,
    studentResults,
    averageResults,
  } from "../stores/dataStore";

  import Form from "$lib/components/Form.svelte";
  import Capcake from "$lib/components/Pancake.svelte";
  import Frappe from "$lib/components/Frappe.svelte";
</script>

<h1 class="font-bold text-indigo-500">Hello</h1>
<Form />
{#if $studentResults && $averageResults}
  <Frappe />
{/if}
