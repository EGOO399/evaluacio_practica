

document.addEventListener('DOMContentLoaded', () => {
    fetchData ()  
    
    
})


//para acceder al api.json
const fetchData = async () => {
    try{
        const res = await fetch('api.json')
        const data = await res.json()
        console.log(data)
        
    }catch (error){
        console.log(error)
    }

}    


function bProductos (){
    let cadena;
    cadena = document.getElementById('buscarProducto').value;

    document.querySelector('.resultado').innerHTML= "";

    for (let p of data ){
        let id=p.id;
        let nombre=p.nombre;
        let marca=p.marca;
        let proveedor=p.proveedor;
        if(id.indexOf (cadena.toUpperCase()) !== -1){
            document.querySelector('.resultado').innerHTML+= `<li>id: 
            ${id} nombre: ${nombre} marca: ${marca} proveedor: ${proveedor}</li>`
        }

    }
    
}