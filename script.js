const button = document.getElementById("search");
const input = document.getElementById("city");
const country = document.getElementById("country");
const temp = document.getElementById("temp");
const time = document.getElementById("time");

async function call(value) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${value}&aqi=no`
  );
  const data = await res.json();
  return data;
}

button.addEventListener("click", async () => {
  const value = input.value;
  const data = await call(value);
  console.log(data);
  country.innerText = `${data.location.region} - ${data.location.country}`;
  time.innerText = data.location.localtime;
  temp.innerText = `${data.current.temp_c} - ${data.current.condition.text}`;
});
