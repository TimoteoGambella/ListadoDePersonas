const personas = [
]

function mostrarPersonas(){
    let baseDeDatos = localStorage.getItem("personas")
    if(!baseDeDatos){
        localStorage.setItem("personas",JSON.stringify(personas))
    }else{
        let personasGuardadas = localStorage.getItem("personas")
        let array = JSON.parse(personasGuardadas)

        var texto = ""
        for (let i = 0;i<array.length;i++){
            texto += `<li>${array[i]._nombre} ${array[i]._apellido}</li>`
        }
        document.getElementById("personas").innerHTML=texto
    }

}

function agregarPersona(){
    const forma = document.forms["forma"]
    const nombre = forma["nombre"]
    const apellido = forma["apellido"]
    if (nombre.value!="" && apellido.value!=""){
        const persona = new Persona(nombre.value,apellido.value)
        const personasBDD = localStorage.getItem("personas")
        let array = JSON.parse(personasBDD)
        array.push(persona)
        localStorage.setItem("personas",JSON.stringify(array))
        mostrarPersonas()
    }else{
        alert("No hay informacion para agregar")
    }
    
}