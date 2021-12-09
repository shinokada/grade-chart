<script>
  import {
    studentResults,
    averageResults,
    titleStore,
    studentNameStore,
  } from "../../stores/dataStore";
  import * as Pancake from "@sveltejs/pancake";
  import points from "./points.js";
  import points2 from "./points2.js";

  // console.log("js points: ", points);
  console.log("pointResults: ", $studentResults);
</script>

<h1>{$titleStore}: {$studentNameStore}</h1>

{#if $studentResults && $averageResults}
  <div class="chart">
    <Pancake.Chart x1={1} x2={30} y1={1} y2={100}>
      <Pancake.Grid horizontal count={10} let:value let:first>
        <div class="grid-line horizontal" class:first><span>{value}</span></div>
      </Pancake.Grid>

      <Pancake.Grid vertical count={5} let:value>
        <div class="grid-line vertical" />
        <span class="year-label">{value}</span>
      </Pancake.Grid>

      <Pancake.Svg>
        <Pancake.SvgScatterplot
          data={$studentResults}
          x={(d) => d.myX}
          y={(d) => d.myY}
          let:d
        >
          <path class="data" {d} />
        </Pancake.SvgScatterplot>

        <Pancake.SvgLine
          data={$studentResults}
          x={(d) => d.myX}
          y={(d) => d.myY}
          let:d
        >
          <path class="linegraph" {d} />
        </Pancake.SvgLine>

        <Pancake.SvgScatterplot
          data={$averageResults}
          x={(d) => d.myX}
          y={(d) => d.myY}
          let:d
        >
          <path class="avgdata" {d} />
        </Pancake.SvgScatterplot>

        <Pancake.SvgLine
          data={$averageResults}
          x={(d) => d.myX}
          y={(d) => d.myY}
          let:d
        >
          <path class="avglinegraph" {d} />
        </Pancake.SvgLine>
      </Pancake.Svg>
    </Pancake.Chart>
  </div>
{/if}

<style>
  .chart {
    height: 500px;
    padding: 3em 0 2em 2em;
    margin: 0 0 36px 0;
  }

  .grid-line {
    position: relative;
    display: block;
  }

  .grid-line.horizontal {
    width: calc(100% + 2em);
    left: -2em;
    border-bottom: 1px dashed #ccc;
  }

  .grid-line.vertical {
    height: 100%;
    border-left: 1px dashed #ccc;
  }

  .grid-line.first {
    border-bottom: 1px solid #333;
  }

  .grid-line span {
    position: absolute;
    left: 0;
    bottom: 2px;
    font-family: sans-serif;
    font-size: 14px;
    color: #999;
  }

  .year-label {
    position: absolute;
    width: 4em;
    left: -2em;
    bottom: -22px;
    font-family: sans-serif;
    font-size: 14px;
    color: #999;
    text-align: center;
  }

  path.data {
    stroke: rgb(55, 75, 255);
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-width: 6px;
    fill: none;
  }

  path.avgdata {
    stroke: rgb(191, 0, 0);
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-width: 6px;
    fill: none;
  }

  path.highlight {
    stroke: rgb(214, 0, 0);
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-width: 20px;
    fill: none;
  }

  path.linegraph {
    stroke: rgb(94, 198, 254);
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-width: 2px;
    fill: none;
  }

  path.avglinegraph {
    stroke: rgb(128, 0, 70);
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-width: 2px;
    fill: none;
  }
</style>
