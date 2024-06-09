import retornaSerie from "./funções/retronaSerie.js";

let hoje = new Date();
let diaSemana = hoje.getDay();

let serieDoDia = retornaSerie(diaSemana);

console.log("A série do dia é: " +serieDoDia)