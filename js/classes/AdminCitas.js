import { contenedorCitas } from "../selectores.js";
import { cargarEdicion } from "../funciones.js";

export default class AdminCitas {

    constructor(){
        this.citas = [];
    }

    agregar(cita){
        this.citas = [...this.citas, cita];

        this.mostrar();
    }

    editar(citaActualizada){
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
        this.mostrar();
    }

    eliminar(id){
        this.citas = this.citas.filter(cita => cita.id !== id);
        this.mostrar();
    }

    mostrar(){
        //limpiarHTML previo
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }

        //comprobar si hay citas
        if(this.citas.length === 0){
            contenedorCitas.innerHTML = '<p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>';
            return;
        }

        //generar citas
        this.citas.forEach(cita => {
            const divCita = document.createElement('div');
            divCita.classList.add('ov-w','tam', 'mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');
        
            const paciente = document.createElement('p');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;
        
            const propietario = document.createElement('p');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;
        
            const email = document.createElement('p');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;
        
            const fecha = document.createElement('p');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;
        
            const sintomas = document.createElement('p');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;
        
            //botones editar y eliminar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add( 'btn-editar','fr-2', 'mr-2','py-2', 'px-1', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center');
            btnEditar.innerHTML = 'Editar';

            const clon = structuredClone(cita);

            btnEditar.onclick = () => cargarEdicion(clon);

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('fr-2', 'mr-2','py-2', 'px-1', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center');
            btnEliminar.innerHTML = 'Eliminar';

            btnEliminar.onclick = () => this.eliminar(cita.id);

            const contenedorBotones = document.createElement('DIV');
            contenedorBotones.classList.add('flex', 'justify-content', 'mt-10');
            
            contenedorBotones.appendChild(btnEditar);
            contenedorBotones.appendChild(btnEliminar);

            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones);
            contenedorCitas.appendChild(divCita);
        });    
    }
}