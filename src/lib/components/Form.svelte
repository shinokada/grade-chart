<script>
  import {
    // averageStore,
    // itemStore,
    // nameStore,
    studentResults,
    averageResults,
  } from "../../stores/dataStore";

  // let data;
  export let googlesheet;
  export let studentid;
  export let itemdata = [1];
  export let error;
  let averageStore;
  let studentObj;
  let nameStore;
  // export let test_names = [];

  const submitForm = async () => {
    try {
      // const id = studentid;
      const googleid = googlesheet.split("/")[5];
      const response = await fetch(
        `https://opensheet-okadashinichi.vercel.app/${googleid}/test2`
      );
      const data = await response.json();
      nameStore = data[0];
      averageStore = data[1];
      const [studentObj] = data.filter((item) => item.id === studentid);
      // itemStore.set(first);
      console.log("studentObj: ", studentObj);

      const avgpoints = Object.keys(nameStore).map((key, index) => ({
        myX: +key,
        myY: +averageStore[key],
      }));
      avgpoints.splice(-2);
      averageResults.set(avgpoints);
      console.log("averageResults: ", $averageResults);

      const points = Object.keys(nameStore).map((key, index) => ({
        myX: +key,
        myY: +studentObj[key],
      }));
      points.splice(-2);
      studentResults.set(points);
      console.log("studentResults: ", $studentResults);
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
        <div class="md:w-2/3">
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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
