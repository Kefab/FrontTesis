const ipServer = "http://34.239.123.8:3000/";

function doLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log(password);
  console.log(username);
  var data = { username, password };

  const parawpp = {
    template: "testing",
    data: [
      `https://kefab.github.io/FrontTesis/faceRecognition.html?id=${data.id}&username=${username}`,
    ],
    phones: [
      {
        number: `593996541462`,
      },
    ],
  };
  sessionStorage.setItem("id", data.id);
  sessionStorage.setItem("username", username);
  fetch("https://aiot.constecoin.com/api/notificationWhatsapp/sendWhatsapp", {
    method: "POST",
    body: JSON.stringify(parawpp),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  }).then((response) => {
    window.location = "/FrontTesis/waitLogin.html";
  });
}

function regist() {
  window.location = "/FrontTesis/regist.html";
}
