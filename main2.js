const datos=JSON.parse(localStorage.getItem('datos'))
let titulo=document.querySelector('.titulo')
titulo.innerHTML+=`         
<h1 class="titulo_post">post#${datos}</h1>
<div class="titulo_texto"></div> `

