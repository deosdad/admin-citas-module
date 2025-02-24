import {  citaObj, editando } from './variables.js';
import AdminCitas from './classes/AdminCitas.js';
import Notificacion from './classes/Notificacion.js'
import { formulario, formularioInput, pacienteInput,
         propietarioInput, emailInput, fechaInput,
         sintomasInput
        } from './selectores.js';

const citas = new AdminCitas();

export function datosCita (event) {
    citaObj[event.target.name] = event.target.value;
}

export function submitCita (event) {
    event.preventDefault();

    if(Object.values(citaObj).some(valor => valor.trim() === '')){
        new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        });
        return;
    }

    if(editando.value){
        citas.editar({...citaObj});
        new Notificacion({
            texto: 'Guardado correctamente',
            tipo: 'exito'
        });
    }else{
        citas.agregar({...citaObj});

        new Notificacion({
            texto: 'Paciente registrado',
            tipo: 'exito'
        });
    }

    formulario.reset();

    reiniciarObjetoCita();
    formularioInput.value = 'Registrar paciente';
    editando.value = false;
    
}

export function reiniciarObjetoCita(){

    Object.assign(citaObj, {
        id: generarID(),
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: '',
    });
}

export function generarID(){
    return Math.random().toString(36).substring(2) + Date.now();
}

export function cargarEdicion(cita){
    Object.assign(citaObj, cita);

    pacienteInput.value = cita.paciente;
    propietarioInput.value = cita.propietario;
    emailInput.value = cita.email;
    fechaInput.value = cita.fecha;
    sintomasInput.value = cita.sintomas;

    editando.value = true;

    formularioInput.value = 'guardar cambios';
}