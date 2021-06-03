/*
    AUTOR: JEFERSON
    DESCRIÇÃO: DECLARAÇÃO E ESTRUTURAS
*/

//INICIALIZAÇÃO
//TESTE
//AÇÃO
//ATUALIZAÇÃO
var text = '';
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        if (i == 20) {
            text += i;
            break;
        }
        text += i + ', ';
    }
}
console.log(text);
