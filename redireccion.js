let params = new URLSearchParams(location.search);
document.location.href = `http://127.0.0.1:5500/photoRegist.html?id=${params.get(
  "id"
)}&username=${params.get("username")}`;
