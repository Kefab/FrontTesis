var intervalID = setInterval(myCallback, 5000);

function myCallback() {
  const data = {
    id: sessionStorage.getItem("id"),
  };
  fetch("http://localhost:3000/uploaded", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.uploaded == 1) {
        alert('Registro completado')
        window.location = "/";
      }
    });
}
