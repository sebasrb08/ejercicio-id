const tarjeta=document.querySelector('.tarjeta')
let id =null
let cont=0
let datos=null
let array={}
const main = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
     datos= await response.json()
    console.log(datos)
        datos.forEach(dato=>{
            if(cont<20){
            tarjeta.innerHTML+=
                    `
                    <div class = "tarjetaconten" id=${dato.id}>
                        <h3 class="tarjeta__titulo" >${dato.title}</h3>
                        <p class="tarjeta__parrafo" >${dato.body}</p>
                    </div>
                
                    `
                    cont++
                
        }
    })
}
let tarjeta2=document.querySelector('.tarjetaconten')
const tarjetaP=document.querySelector('.tarjeta__parrafo')



tarjeta.addEventListener('click',(event)=>{

    if(event.target.ClassName ==tarjeta2){
    id=event.target.id  || event.target.parentElement.id 
    title=datos[id-1].title
    body=datos[id-1].body
    array={id:id,title:title,body:body}
    console.log(array)
    localStorage.setItem("datos",JSON.stringify(array))
    location.href='../html/index2.html'
    }
   
   
})
main()
