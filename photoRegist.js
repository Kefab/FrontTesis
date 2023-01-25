var camera_button = document.querySelector("#start-camera");
var click_button = document.querySelector("#click-photo");
var canvas = document.querySelector("#canvas");
var video = document.querySelector("#video");
const ipServer = "http://34.239.123.8:3000/";

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
  alert("Foto guardada con exito");
}

async function updateReferenceImageResults(src) {
  const inputImgEl = new Image();
  inputImgEl.src = src;

  const fullFaceDescriptions = await faceapi
    .detectAllFaces(inputImgEl, getFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceDescriptors();
  console.log(fullFaceDescriptions.length);
  if (!fullFaceDescriptions.length || fullFaceDescriptions.length <= 0) {
    console.log("Ninguna cara encontrada");
    return -1;
  } else if (fullFaceDescriptions.length > 1) {
    console.log(
      `Solo puede haber una cara pero hay ${fullFaceDescriptions.length}`
    );
    return -2;
  } else {
    faceMatcher = new faceapi.FaceMatcher(fullFaceDescriptions);
    return 0;
  }
}

function movoToIndex() {
  window.location = "/FrontTesis/";
}

async function run() {
  await changeFaceDetector(selectedFaceDetector);
  await faceapi.loadFaceLandmarkModel("/");
  await faceapi.loadFaceRecognitionModel("/");
}

$(document).ready(function () {
  initFaceDetectionControls();
  run();
});
