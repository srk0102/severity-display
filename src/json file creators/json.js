const fs = require('fs');
const axios = require('axios');

let first = []
let sever = ["sev0", "sev1", "sev2", "sev3", "sev4"]
let res = ["Reboot", "HDMI Failure", "FirmWare Update"]
let aler = ["new", "acknowledge", "closed"]

let n = 1000

function getRamdomDateInBetween(start, end) {
  start = Date.parse(start);
  end = Date.parse(end);

  return new Date(Math.floor(Math.random() * (end - start + 1) + start));
}

for (let i = 0; i < n; i++) {
  let json1 = {
    id: i,
    sev: sever[Math.floor(Math.random() * sever.length)],
    resource: res[Math.floor(Math.random() * res.length)],
    type: aler[Math.floor(Math.random() * aler.length)],
    date: getRamdomDateInBetween('2000-01-01', '2021-01-30')
  }
  first.push(json1)
}


// const f = (name, type) => {
//   return `
//   const ${name} = (type, data) => {
//     return{
//       case:type,
//       data:data
//     }
//   }
//   `
// }

fs.appendFile("first.js", JSON.stringify(first), function (err) {
  if (err) throw err;
  console.log('complete');
}
);

// fs.writeFile ("second.json", JSON.stringify(second), function(err) {
//   if (err) throw err;
//   console.log('complete');
//   }
// );

// let payload = {
//   token: "rqKmp1QP1AARLhk13h_83g",
//   // data: {
//   //   first,
//   // }
// };

// axios({
// method: "post",
// url: "https://app.fakejson.com/q",
// data: payload
// }).then(function(resp) {
// // Do something with fake data
// });

// axios({
//   method: "get",
//   url: "https://app.fakejson.com/q",
// }).then((resp) => resp.json())
//   .then((json) => console.log(json));
//   // Do something with fake data