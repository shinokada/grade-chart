<script>
  import {
    // averageScores,
    studentNameStore,
    titleStore,
    studentResults,
    averageResults,
    nameStore,
    averageScoresFrappe,
    studentScoresFrappe,
  } from "../../stores/dataStore";

  // let data;
  let googlesheet =
    "https://docs.google.com/spreadsheets/d/1hoFkfiZ7A-KwTZZHvS0njLfNwhHiTk2lTWFPiF1YCF0/edit#gid=2059040949";
  let sheetName = "test2";
  let studentid;
  let itemdata = [1];
  let error;
  let averageScores;
  let studentObj;
  let names;
  let title;
  // export let test_names = [];

  const submitForm = async () => {
    try {
      // const id = studentid;
      const googleid = googlesheet.split("/")[5];
      const response = await fetch(
        `https://opensheet-okadashinichi.vercel.app/${googleid}/${sheetName}`
      );
      const data = await response.json();
      console.log("data", data);
      // all the test names, Func P1, Geo P2, etc
      // data is an array and the first one has all the names, and Name
      names = data[0];
      const namesLength = Object.keys(names).length;
      console.log(typeof namesLength);
      console.log(namesLength);
      const testNames = Object.entries(names)
        .slice(0, namesLength - 2)
        .map((entry) => entry[1]);
      nameStore.set(testNames);
      console.log("testNames in Form: ", testNames);
      // title
      titleStore.set(names["Name"]);
      // console.log("title in Form: ", title);
      // The second item of data array has the averages
      averageScores = data[1];
      const [studentObj] = data.filter((item) => item.id === studentid);
      // itemStore.set(first);
      // student results, name and ID
      // console.log("studentObj in Form: ", studentObj);
      studentNameStore.set(studentObj["Name"]);

      // for Frappe
      console.log("studentScoresFrappe in form", studentObj);
      const studentScores = Object.entries(studentObj)
        .slice(0, namesLength - 2)
        .map((entry) => entry[1]);
      studentScoresFrappe.set(studentScores);
      averageScoresFrappe.set(averageScores);

      // for Pancake
      const avgpoints = Object.keys(names).map((key, index) => ({
        myX: +key,
        myY: +averageScores[key],
      }));
      avgpoints.splice(-2);
      averageResults.set(avgpoints);
      // Average results, 45, 56 etc.
      // console.log("averageResults in Form: ", $averageResults);

      const points = Object.keys(names).map((key, index) => ({
        myX: +key,
        myY: +studentObj[key],
      }));
      points.splice(-2);
      // students results, 53, 65, etc
      studentResults.set(points);
      // console.log("studentResults in Form: ", $studentResults);
    } catch (err) {
      error = err;
    }
  };

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
</script>

<div class="antialiased text-gray-900 px-6">
  <div class="max-w-4xl mx-auto py-12 md:max-w-4xl">
    <h1>Form</h1>
    <form on:submit|preventDefault={submitForm}>
      <label class="block" for="googlesheet">
        <span class="text-gray-700">Google Sheet URL: </span>
        <input
          type="text"
          name="googlesheet"
          bind:value={googlesheet}
          placeholder="Google sheet URL"
          required
          class="mt-1
        block
        w-full
        rounded-md
        border-gray-300
        shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>

      <label class="block" for="googlesheet">
        <span class="text-gray-700">Sheet Name: </span>
        <input
          type="text"
          name="sheetName"
          bind:value={sheetName}
          placeholder="Sheet Name"
          required
          class="mt-1
        block
        w-full
        rounded-md
        border-gray-300
        shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>

      <label class="block" for="studentid">
        <span class="text-gray-700">Student ID: </span>
        <input
          type="text"
          name="studentid"
          bind:value={studentid}
          placeholder="Student ID"
          required
          class="mt-1
        w-full
        block
        border-gray-300
        rounded-md
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
        shadow-sm"
        />
      </label>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3" />
        <div class="md:w-2/3 py-3">
          <button
            class="shadow bg-purple-600 hover:bg-purple-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>

    {#if isEmpty(itemdata)}
      <p>Please input correct ID.</p>
    {/if}

    {#if error}
      <p>Please input correct Googlesheet: {error}</p>
    {/if}
  </div>
</div>
