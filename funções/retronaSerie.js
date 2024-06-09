import retornaDiaSemana from './diaSemana.js';

let serie = [
    'WandaVsion', 
    'Loki',
    'What if...?', 
    'The Walking Dead', 
    'Dark', 
    'The Last of Us', 
    'Sex Education'
];


function retornaSerieDia(){
    let diaSemana = retornaDiaSemana();
    let serieDoDia = serie[diaSemana];
    return serieDoDia;
  }
  
  export default retornaSerieDia;