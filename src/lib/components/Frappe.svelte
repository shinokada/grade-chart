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

  let averageScores;
  let studentScores;
  let frappe_data;
  $: averageScores = Object.values($averageScoresFrappe);
  $: studentScores = Object.values($studentScoresFrappe);

  $: frappe_data = {
    labels: Object.values($nameStore),
    datasets: [
      {
        name: "Average",
        type: "line",
        values: averageScores,
      },
      {
        name: "Your score",
        type: "line",
        values: studentScores,
      },
    ],
  };
  console.log("studentScoresFrappe in Frappe", $studentScoresFrappe);
  console.log("averageScoresFrappe in Frappe", $averageScoresFrappe);
  // console.log("nameStore in Frappe", Object.values($nameStore));
</script>

<div class="m-4">
  <h1>{$titleStore}: {$studentNameStore}</h1>
  <Chart data={frappe_data} />
</div>
