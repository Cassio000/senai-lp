let Evento = prompt("Data do evento.");
Evento = Evento.split('/');
Evento = new Date(Evento[2], Evento[1], Evento[0]);
const hoje = new Date();

if(Evento.valueOf() >= hoje.valueOf()){
    let idade = prompt("Digite sua idade?");
    if (idade>=18) {
        let show = prompt("Palestra 1: 80 cadastrados\nPalestra 2: 40 participantes\nPalestra 3: 100 participantes\nPalestra 4: 2 participantes.");
        if (show != 3) {
            alert("Faça o cadastro...");
        } else {
            alert("Palestra indisponivel. Limite excedido.");
        }
    } else {
        alert("Permitido apenas para maiores.");
    }
}else{
    alert("Data invalida.");
}
