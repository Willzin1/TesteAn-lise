var num = document.querySelector('input#num') 
var res = document.querySelector('div#resultado')
var lista = document.querySelector('select#tabelaNumeros')
let valores = []

// USAREI OS PARÂMETROS QUE ESTÃO DENTRO DE var num
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else {
        return false;
    }
}


// USAREI OS PARÂMETROS QUE ESTÃO DENTRO DE var num e valores
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// USAREI OS PARÂMETROS QUE ESTÃO DENTRO DE var num
function addNum() {
    
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado.`
        lista.appendChild(item)
        res.innerHTML = ''
        
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}    

function finalizar() {
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores informados é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores informados é ${media}</p>`
    }
}