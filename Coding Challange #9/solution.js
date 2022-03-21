const data = [17, 21, 23];
const data_2 = [12, 5, -5, 0, 4];
const print_forecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}"ºC" in ${i + 1} days...`;
  }
  console.log(str);
};

print_forecast(data_2);
