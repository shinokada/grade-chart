export const post = async (request) => {
  const googlesheet = request.body.get("googlesheet")
  const studentid = request.body.get("studentid")
  googleid = googlesheet.split("/")[5]
  const response = await fetch(
    `https://opensheet-okadashinichi.vercel.app/${googleid}/json`
  );
  console.log(response.json)
  return {
    body: JSON.stringify({
      googlesheet,
      studentid,
      googleid,
    })
  }
  // const response = await fetch(
  //   `https://opensheet-okadashinichi.vercel.app/${sheetid}`
  // );
  // const data = await response.json();
  // return data
}