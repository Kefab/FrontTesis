const titulo = document.getElementById('titulo')

titulo.innerHTML = `Bienvenido ${sessionStorage.getItem("username")}`