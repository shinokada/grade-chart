<script>
  import Chart from "svelte-frappe-charts";
  import Form from "$lib/components/Form.svelte";
  import Capcake from "$lib/components/Pancake.svelte";
  import Frappe from "$lib/components/Frappe.svelte";

  let frappe_data = {
    labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
    datasets: [
      {
        values: [10, 12, 3, 9, 8, 15, 9],
      },
    ],
  };
</script>

<h1 class="font-bold text-indigo-500">Hello</h1>
<Chart data={frappe_data} type="line" />
<Form />
<Capcake />
<Frappe />
