const tarjeta=document.querySelector('.tarjeta')
let id =null
let cont=0
const main = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const datos= await response.json()
    console.log(datos)
        datos.forEach(dato=>{
            if(cont<20){
            tarjeta.innerHTML+=
                    `
                    <div class="tarjetaconten" id=${dato.id}>
                        <h3 class="tarjeta__titulo" >${dato.title}</h3>
                        <p class="tarjeta__parrafo" >${dato.body}</p>
                    </div>
                
                    `
                    cont++
                
        }
    })
}
const tarjeta2=document.querySelector('.tarjetaconten')
const tarjetaT=document.querySelector('.tarjeta__titulo')
const tarjetaP=document.querySelector('.tarjeta__parrafo')



tarjeta.addEventListener('click',(event)=>{
    if(event.target.ClassName==tarjeta2){
    id=event.target.id    
    localStorage.setItem("datos",JSON.stringify(id))
    }
    if(event.target.ClassName==tarjetaT){
       console.log(event.target.title)
        }
    // else if(event.target.parentElement.ClassName == tarjeta2){
    //     console.log(event.target.parentElement.id)
    // }
})
main()
