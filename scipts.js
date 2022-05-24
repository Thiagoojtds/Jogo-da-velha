    //objeto para manipulação do DOM
    const html = {
        player: document.querySelector('#player'),
        field: [...document.getElementsByTagName('div')],
        replay: document.querySelector('#replay')
    }
    
    //inicializa o player e o vencedor vazio
    var winner = '';
    var actualPlayer = '';



//incia o jogo e percorre o campo
function startGame(){
    html.player.innerHTML = ' X';
    actualPlayer = 'X';
   for(let i = 0; i < 9; i++){
       //adiciona um evento de click para cada posição
       html.field[i].addEventListener('click', function play(){
           //verifica se o campo está vazio e se não há um vencedor
            if(html.field[i].textContent == '-' && winner == ''){
                html.field[i].innerHTML = actualPlayer;
                html.field[i].style.color = 'black';
                
                //altera o jogador atual
                changePLayer();
                
                winner = getWinner();

                //verifica se existe um vencedor, se sim mostra
                if(winner == 'X' || winner == 'O'){
                    html.player.innerHTML = ` ${winner} Venceu`;   
                }//verifica empate
                else if(html.field[0].textContent != '-' && html.field[1].textContent != '-' && html.field[2].textContent != '-' && 
                        html.field[3].textContent != '-' && html.field[4].textContent != '-' && html.field[5].textContent != '-' &&
                        html.field[6].textContent != '-' && html.field[7].textContent != '-' && html.field[8].textContent != '-'){
                        document.querySelector('#jogador').remove()
                        html.player.innerHTML = 'Velha';
               }
                
            }
       })
   }
   
}

//altera o jogador altual
function changePLayer(){
    if(actualPlayer == 'X'){
        actualPlayer = 'O'
        html.player.innerHTML = ' O';
    }else if(actualPlayer == 'O'){
        actualPlayer = 'X'
        html.player.innerHTML = ' X';
    }
}

//limpa o campo
function clearField(){
    actualPlayer = 'X'
    html.player.innerHTML = ' X'
    for(let i = 0; i < 9; i++){
        html.field[i].textContent = '-'
        html.field[i].style.color = 'white'
        winner = ''
       
    }
    document.querySelector('#jogador').innerHTML ='Jogador'
    html.player.innerHTML = ' X'
    startGame()
}


//buca pelo vencedor ou se empatou
function getWinner() {
    
    let field = html.field;

    if((field[0].textContent==field[1].textContent) && (field[1].textContent==field[2].textContent) && (field[0].textContent != '-')){
        return field[0].textContent;

    }else if((field[3].textContent==field[4].textContent) && (field[4].textContent==field[5].textContent) && (field[3].textContent != '-')){
        return field[3].textContent;

    }else if((field[6].textContent==field[7].textContent) && (field[7].textContent==field[8].textContent) && (field[6].textContent != '-')){
        return field[6].textContent;

    }else if((field[0].textContent==field[4].textContent) && (field[4].textContent==field[8].textContent) && (field[0].textContent != '-')){
        return field[0].textContent;

    }else if((field[2].textContent==field[4].textContent) && (field[4].textContent==field[6].textContent) && (field[2].textContent != '-')){
        return field[2].textContent;

    }else if((field[0].textContent==field[3].textContent) && (field[3].textContent==field[6].textContent) && (field[0].textContent != '-')){
        return field[0].textContent;

    }else if((field[1].textContent==field[4].textContent) && (field[4].textContent==field[7].textContent) && (field[1].textContent != '-')){
        return field[1].textContent;

    }else if((field[2].textContent==field[5].textContent) && (field[5].textContent==field[8].textContent) && (field[2].textContent != '-')){
        return field[2].textContent;
    } 
return '';
};