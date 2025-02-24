import { formulario } from '../selectores.js'

export default class Notificacion {

    constructor({texto, tipo}){
        this.texto = texto;
        this.tipo = tipo;

        this.mostrar();
    }

    mostrar(){
        //crear la notificacion
        const alerta = document.createElement('DIV');
        alerta.classList.add('alert','text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');
    
        //eliminar alertas duplicadas
        const alertaPrevia = document.querySelector('.alert');
        alertaPrevia?.remove();

        //dependiendo el tipo añadimos una clase uotra
        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');
        
        //mensaje de error
        alerta.textContent = this.texto;

        //insertar en el dom
        formulario.parentElement.insertBefore(alerta, formulario);

        //quitar despues de x segundos
        setTimeout(() => {
            alerta.remove();
        },2500);
    }
}