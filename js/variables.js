import { generarID } from "./funciones.js";

let editando = {
    value: false
}

//objeto de cita
const citaObj = {
    id: generarID(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: '',
}

export{
    editando,
    citaObj
}