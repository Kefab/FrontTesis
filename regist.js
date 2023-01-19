var camera_button = document.querySelector("#start-camera");
var click_button = document.querySelector("#click-photo");
var canvas = document.querySelector("#canvas");
var video = document.querySelector("#video");

camera_button.addEventListener("click", async function () {
  let stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  video.srcObject = stream;
});

click_button.addEventListener("click", function () {
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  let image_data_url = canvas.toDataURL("image/jpeg");
});

function movoToIndex() {
  window.location = "/FrontTesis/";
}

function saveUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  const data = { username, password, phoneNumber };

  fetch("http://34.238.44.59:3000/registUser", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem("id", data.id);
      const parawpp = {
        template: "testing",
        data: [
          `https://kefab.github.io/FrontTesis/faceRecognition.html?id=${data.id}&username=${username}`,
        ],
        phones: [
          {
            number: "593980030821",
          },
        ],
      };
      fetch(
        "https://aiot.constecoin.com/api/notificationWhatsapp/sendWhatsapp",
        {
          method: "POST",
          body: JSON.stringify(parawpp),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      window.location = "/FrontTesis/waitPage.html";
    });
}
