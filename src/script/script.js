let tela = document.getElementById('display');
let limpa = document.getElementById('clear');

let um = document.querySelector('#um')
let dois = document.querySelector('#dois')
let tres = document.querySelector('#tres')
let quatro = document.querySelector('#quatro')
let cinco = document.querySelector('#cinco')
let seis = document.querySelector('#seis')
let sete = document.querySelector('#sete')
let oito = document.querySelector('#oito')
let nove = document.querySelector('#nove')

let menos = document.querySelector('#menos')
let mais = document.querySelector('#mais')
let vezes = document.querySelector('#vezes')
let dividir = document.querySelector('#divisao')

let total = 0;

function listener(number) {

    if (typeof number == 'number') {
        parseInt(number)
        tela.innerHTML += number;
        total = tela.value;
    } else if(typeof number == 'string') {
        tela.innerHTML += number;
        total = tela.value;
        console.log(number)
    }

}



limpa.addEventListener('click', function clear() {
    tela.innerHTML = '';
    total = 0;
})



function digitou(event) {
    alert("You pressed button: " + event.button)
}
