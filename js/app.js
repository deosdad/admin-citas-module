
import { formulario, pacienteInput, 
         propietarioInput, emailInput, fechaInput,
         sintomasInput } from './selectores.js';
import { datosCita, submitCita } from './funciones.js';


//eventos
pacienteInput.addEventListener('change',datosCita );
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change',datosCita);
formulario.addEventListener('submit', submitCita );

console.log('hola');






