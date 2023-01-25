var intervalID = setInterval(myCallback, 5000);
const ipServer = "http://34.239.123.8:3000/";
var num = 3;
function myCallback() {
  console.log(num);
  if (num == 10) {
    window.location = "/FrontTesis/";
  } else {
    num += 1;
  }
}
