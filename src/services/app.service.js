export async function getMonthsData() {
  try {
    let data = await fetch("https://week-and-year.p.rapidapi.com/en", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "500602ae83msh65285f19f2b49d6p149b14jsn23f4b706f151",
        "X-RapidAPI-Host": "week-and-year.p.rapidapi.com",
      },
    });
    return data.json();
  } catch (e) {
    throw new Error(e);
  }
}
