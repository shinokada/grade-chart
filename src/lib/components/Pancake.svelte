<script>
  import { averageStore, nameStore, itemStore } from "../../stores/dataStore";
  import * as Pancake from "@sveltejs/pancake";
  import points from "./points.js";
  import points2 from "./points2.js";
</script>

<h1>Pancake chart</h1>

<div class="chart">
  <Pancake.Chart x1={1979} x2={2016} y1={0} y2={8}>
    <Pancake.Grid horizontal count={5} let:value let:first>
      <div class="grid-line horizontal" class:first><span>{value}</span></div>
    </Pancake.Grid>

    <Pancake.Grid vertical count={10} let:value>
      <div class="grid-line vertical" />
      <span class="year-label">{value}</span>
    </Pancake.Grid>

    <Pancake.Svg>
      <Pancake.SvgScatterplot
        data={points}
        x={(d) => d.myX}
        y={(d) => d.myY}
        let:d
      >
        <path class="data" {d} />
      </Pancake.SvgScatterplot>

      <Pancake.SvgLine data={points} x={(d) => d.myX} y={(d) => d.myY} let:d>
        <path class="linegraph" {d} />
      </Pancake.SvgLine>

      <Pancake.SvgScatterplot
        data={points2}
        x={(d) => d.myX}
        y={(d) => d.myY}
        let:d
      >
        <path class="data" {d} />
      </Pancake.SvgScatterplot>

      <Pancake.SvgLine data={points2} x={(d) => d.myX} y={(d) => d.myY} let:d>
        <path class="linegraph" {d} />
      </Pancake.SvgLine>
    </Pancake.Svg>
  </Pancake.Chart>
</div>
<br />
nameStore:
<br />
{JSON.stringify($nameStore)}
<br />
itemStore
<br />
{JSON.stringify($itemStore)}
<br />
averageStore
<br />
{JSON.stringify($averageStore)}

<style>
  .chart {
    height: 200px;
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
    stroke: rgb(171, 0, 214);
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-width: 6px;
    fill: none;
  }

  path.highlight {
    stroke: rgb(171, 0, 214);
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-width: 20px;
    fill: none;
  }

  path.linegraph {
    stroke: green;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-width: 2px;
    fill: none;
  }
</style>
