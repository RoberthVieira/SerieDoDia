function retornaDiaSemana () {
    let hoje = new Date();
    let dia = hoje.getDay();
    return dia;
}

export default retornaDiaSemana;