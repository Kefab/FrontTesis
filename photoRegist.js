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

function saveImage() {
  let params = new URLSearchParams(location.search);
  var formData = new FormData();
  canvas.toBlob(function (blob) {
    formData.append("image", blob, `${params.get("username")}.jpeg`);
    formData.append("id", params.get("id"));
    fetch("http://34.238.44.59:3000/uploadImage", {
      method: "POST",
      body: formData,
    }).then((res) => console.log(res));
  });
}

function movoToIndex() {
  window.location = "/FrontTesis/";
}
