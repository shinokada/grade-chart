<script>
  import {
    studentResults,
    averageResults,
    titleStore,
    studentNameStore,
    nameStore,
    averageScoresFrappe,
    studentScoresFrappe,
  } from "../../stores/dataStore";

  import Chart from "svelte-frappe-charts";
  let frappe_data = {
    labels: Object.values($nameStore),
    datasets: [
      {
        name: "Average",
        type: "line",
        values: Object.values($averageScoresFrappe),
      },
      {
        name: "Your score",
        type: "line",
        values: Object.values($studentScoresFrappe),
      },
    ],
  };
  $: console.log("studentResults in Frappe", studentResults);
  console.log("averageResults in Frappe", averageResults);
  console.log("nameStore in Frappe", Object.values($nameStore));
</script>

<div class="m-4">
  <h1>{$titleStore}: {$studentNameStore}</h1>
  <Chart data={frappe_data} />
  {Object.values($nameStore)}
  {$studentResults[0].myY}
  {$averageResults[0].myY}
</div>
