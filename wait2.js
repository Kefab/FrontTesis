var intervalID = setInterval(myCallback, 5000);
const ipServer = "https://www.kefab.click/";

function myCallback() {
  console.log(sessionStorage.getItem("id"));
  const data = {
    id: sessionStorage.getItem("id"),
  };
  fetch(`${ipServer}loged`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.uploaded == 1) {
        alert("Registro completado");
        window.location = "/FrontTesis/mainPage.html";
      }
    });
}
