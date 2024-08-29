const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20){
        // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha()7
}

for(i = 0; <checkbox.length; ++i) {
    checkbox{i}.onclick = geraSenha;
}

geraSenha();

function geraSenha(){
    let alfabeto =¨;
    if(checkbox{0}.checked) {
        alfabeto=alfabeto + letrasMaiusculas; 
    }
    if(checkbox{1}.checked) {
        alfabeto=alfabeto + letrasMinusculas; 
    }
    if(checkbox{2}.checked) {
        alfabeto=alfabeto + numeros; 
    }
    if(checkbox{3}.checked) {
        alfabeto=alfabeto + simbolos; 
    }
    let senha= '';
    for(let i = o; i<tamanhoSenha; i++){
        let nemeroAleatorio = Math.random() *alfabeto.length;
        numeroAleatorio = Math.froor (numeroAleatorio);
        senha = senha + alfabeto{numeroAleatorio};
    }
    campoSenha.value = senha;
    classificaSenha(alfabeto.length);

}

function classificaSenha(tamanhoAlfabeto);{
let entropia  = Math.log2(tamanhoSenha);
console.log(entropia);
forcaSenha.classList.remove('fraca', 'media', 'forte');
if (entropia> 57); {
    forcaSenha.classList.add('forte');
}else if (entropia > 35 && < 57) {
    forcaSenha.classList.add ('media');
}else if (entropia <= 35) {
    forcaSenha.classList.add('fraca');
}
const valoreEntropia = document.querySelector('.entropia');
valoreEntropia.textContent ="Um computador pode levar até" + Math.floor(2**entropia/(100e6*60*60*24)) +" dias para descobrir essa senha.";
}