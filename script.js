let numero = document.getElementById("inputNumero");
let lista = document.getElementById("lista");
let res = document.getElementById("res");
let valores = [];

function adicionar() {
  let num = Number(numero.value)
  
  if (numero.length != 0 && num > 0 && num <= 100) {
    valores.push(Number(numero.value))
    
    let item = document.createElement("option");
    item.innerHTML = `Valor ${numero.value} Adicionado`;
    lista.appendChild(item);
    res.innerHTML = ''
  } else {
    alert("Coloque um numero entre 1 e 100");
  }
 numero.value = ''
 numero.focus();
}


function finalizar() {
  let num = Number(numero.value);

  if (valores.length == 0) {
    alert("Adicione um valor antes de finalizar");
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for ( let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > maior) {
      maior = valores[pos]
    }
    if (valores[pos] < menor) {
      menor = valores[pos]
    }
  }
  media = soma/tot 

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p>A média dos valores digitados é  ${media}</p>`
  
  }

}

