const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.mensagem_mensagemRecebida');

//As "chaves" de criptografia que utilizaremos são:
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"


function btnEncriptar() {
    const textoEncripatado = encriptar(textArea.value);
    mensagem.value = textoEncripatado;
    textArea.value = '';


}

function encriptar (stringEncriptada) {
    let matrizcodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat'] ];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizcodigo.length; i++) {
        if(stringEncriptada.includes(matrizcodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo [i] [0], matrizcodigo[i] [1]);
        }
    }

    return stringEncriptada
}


function btnDesencriptar() {
    const textoDesencripatado = desencriptar(textArea.value);
    mensagem.value = textoDesencripatado;
    textArea.value = '';
}

function desencriptar (stringDesencriptada) {
    let matrizcodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat'] ];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizcodigo.length; i++) {
        if(stringDesencriptada.includes(matrizcodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo [i] [1], matrizcodigo[i] [0]);
        }
    }

    return stringDesencriptada
}


const mensagemEncontrada = document.querySelector('.mensagemEncontrada');

function btnCopiar() {
    navigator.clipboard.writeText(mensagem.value).then(() => {
         console.log('copiado')
    })
} 