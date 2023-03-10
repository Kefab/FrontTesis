const ipServer = "https://www.kefab.click/";

function doLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log(password);
  console.log(username);
  var data = { username, password };
  fetch(`${ipServer}login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data.isUser && data.id == -1) {
        alert("Se ha superado el limite de intentos");
      } else if (data.isUser) {
        const parawpp = {
          template: "testing",
          data: [
            `https://kefab.github.io/FrontTesis/redireccionInicio.html?id=${data.id}&username=${username}`,
          ],
          phones: [
            {
              number: `593${data.phone}`,
            },
          ],
        };
        sessionStorage.setItem("id", data.id);
        sessionStorage.setItem("username", username);
        fetch(
          "https://aiot.constecoin.com/api/notificationWhatsapp/sendWhatsapp",
          {
            method: "POST",
            body: JSON.stringify(parawpp),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        ).then((response) => {
          window.location = "/FrontTesis/waitLogin.html";
        });
      } else {
        alert("Error de  autenticacion");
      }
    });
}

function regist() {
  window.location = "/FrontTesis/regist.html";
}
