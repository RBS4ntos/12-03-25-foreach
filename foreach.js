function contar(){ //abre função contar
    let numero = 0; //declara uma variavel temporaria com valor de numero como 0
    let txtNumeroFinal = document.getElementById("txtNumeroFinal"); //declara uma variável e recebe o elemento txtNumeroFinal pelo id
    let divNumeros = document.getElementById("divNumeros"); //declara uma variável e recebe o elemento divNumeros pelo id
    divNumeros.innerHTML = ""; //apaga o que esta no divNumeros 
    for(let i = numero; i <= txtNumeroFinal.value; i++) { //enquanto i for menor que txtNumeroFinal, irá somar + 1 e executará o código
        divNumeros.innerHTML += i + "<br />"; //vai fazer com qye a variável receba ela mesma + o valor desejado

    } //fecha bloco de código do for
} //fecha bloco de código da função contar

document.getElementById("txtNumeroFinal").addEventListener('keyup', function(event) { //adiciona um evento de pressionar a tecla
    if (event.keyCode == 13){ //coloca uma verificação se a tecla pressionada é a 13
        contar(); //chama a função contar
    } else { //fecha o bloco de código do if e executa o bloco de código abaixo se a primeira condição for falsa
        if ( //verifica as condições abaixo
            isNaN(event.key) &&  //verifica se a tecla pressionada não é um número
            event.keyCode != 8 && //verifica se a tecla pressionada não é a tecla de apagar
            event.keyCode != 46 && //verifica se a tecla pressionada não é tecla de delete
            event.keyCode != 37 && //verifica se a tecla pressionada não é tecla seta para esquerda
            event.keyCode != 38 && //verifica se a tecla pressionada não é tecla seta para cima
            event.keyCode != 39 && //verifica se a tecla pressionada não é tecla seta para baixo 
            event.keyCode != 40 && //verifica se a tecla pressionada não é tecla seta para direita
            event.keyCode != 35 && //verifica se a tecla pressionada não é tecla end
            event.keyCode != 36 //verifica se a tecla pressionada não é tecla home
        ) { 
            console.log("Não é numérico"); //envia uma mensagem no console
            divNumeros.innerHTML = "Não é possível digitar letras. Por favor digite um número"; //envia uma mensagem de erro
        } //fecha o bloco de código do if
    }
});        

document.getElementById("txtNumeroFinal").addEventListener('input', function(event) { //adiciona um evento para qualquer alteração no número final

        if (this.value.length > 3) { //verifica se passou de 3 caracteres
            console.log("Tem mais de 3 caracteres"); //manda uma mensagem no console
            if(this.value > 999){ //verifica se o valor do texto é maior que 999
                this.value = 999; //define o valor do texto para 999
                alert("O número máximo permitido é 999!") //manda um alerta falando que atingiu o número máximo
            } else {
                this.value = this.value.substring(0,3); //força o valor do texto começando do zero apenas 3 caracteres
            }
        }
}); //fecha o bloco de código do function(event)        