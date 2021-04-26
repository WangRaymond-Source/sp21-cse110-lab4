var tiktok = setInterval(eachSecond, 1000);
function eachSecond () {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}