const datos=JSON.parse(localStorage.getItem('datos'))
const devolver=document.querySelector('.devolver__img')
let cont=1
let titulo=document.querySelector('.titulo')
let parrafo =document.querySelector('.parrafo')
titulo.innerHTML+=`         
<h1 class="titulo__texto">Post#${datos.id}</h1>
<h2 class="titulo__texto titulo__texto--small">${datos.title}</h2> `
parrafo.innerHTML+=`
<p class="parrafo__texto">${datos.body}</p>

`
let dato=null
let response=null
let comentarios=document.querySelector('.comentarios')
const coment =async (e)=>{
        if(datos.id<=5){
            response = await fetch(`https://jsonplaceholder.typicode.com/posts/${cont}/comments`)
            dato = await response.json()
            console.log(dato[0].id)
            dato.forEach(element => {
                if(element.id==datos.id){
                    comentarios.innerHTML+=`
                    <div class="comentarios__name"><span class="comentarios__name comentarios__name--color">Name:</span>${element.name}</div>
                    <div class="comentarios__name"><span class="comentarios__name comentarios__name--color">Email:</span>${element.email}</div>
                    <div class="comentarios__name"><span class="comentarios__name comentarios__name--color">Body:</span>${element.body}</div>
                    `
                }

            });
        }
    
            
    else if(datos.id<=10){
        cont=2
        response = await fetch(`https://jsonplaceholder.typicode.com/posts/${cont}/comments`)
        dato = await response.json()
        console.log(dato[0].id)
        dato.forEach(element => {
            if(element.id==datos.id){
                comentarios.innerHTML+=`
                <div class="comentarios__name"><span class="comentarios__name comentarios__name--color">Name:</span>${element.name}</div>
                <div class="comentarios__name"><span class="comentarios__name comentarios__name--color">Email:</span>${element.email}</div>
                <div class="comentarios__name"><span class="comentarios__name comentarios__name--color">Body:</span>${element.body}</div>
                
                `
            }

        });
            
    }
    else if(datos.id<=15){
        cont=3
        response = await fetch(`https://jsonplaceholder.typicode.com/posts/${cont}/comments`)
        dato = await response.json()
        console.log(dato[0].id)
        dato.forEach(element => {
            if(element.id==datos.id){
                comentarios.innerHTML+=`
                <div class="comentarios__name"><span class="comentarios__name comentarios__name--color">Name:</span>${element.name}</div>
                    <div class="comentarios__name"><span class="comentarios__name comentarios__name--color">Email:</span>${element.email}</div>
                    <div class="comentarios__name"><span class="comentarios__name comentarios__name--color">Body:</span>${element.body}</div>
                    `
            }

        });
            
    }
    else if(datos.id<=20){
        cont=4
        response = await fetch(`https://jsonplaceholder.typicode.com/posts/${cont}/comments`)
        dato = await response.json()
        console.log(dato[0].id)
        dato.forEach(element => {
            if(element.id==datos.id){
                comentarios.innerHTML+=`
                <div class="comentarios__name"><span class="comentarios__name comentarios__name--color">Name:</span>${element.name}</div>
                <div class="comentarios__name"><span class="comentarios__name comentarios__name--color">Email:</span>${element.email}</div>
                <div class="comentarios__name"><span class="comentarios__name comentarios__name--color">Body:</span>${element.body}</div>
                `
            }

        });
            
    }

}
coment()
devolver.addEventListener('click',()=>{
    location.href='../index.html'
})