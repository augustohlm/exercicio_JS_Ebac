const numA = document.getElementById('number-A');
const numB = document.getElementById('number-B');
const form = document.getElementById('form-valida');
let formValida = false;

function resultado (resultAB){
        validResult = false
    if (numB.value > numA.value && numA.value < numB.value){
        validResult = true;
    }
    return validResult;
}

form.addEventListener('submit', function (e){
    console.log(e);
    e.preventDefault();

    const mSucesso = `O numero B: <b> ${numB.value} </b> é maior que o numero A: <b> ${numA.value} </b>`;
    const mErro = `O numero B: <b> ${numB.value} </b> não é maior que o numero A: <b> ${numA.value} </b>`;

    formValida = resultado(numB.value, numA.value);
    if(formValida){
        const mensagemValida = document.querySelector('.success');
        mensagemValida.innerHTML = mSucesso;
        mensagemValida.style.display = 'block';
        numA.value = '';
        numB.value = '';
    } else {
        const mensagemErrada = document.querySelector('.failed');
        mensagemErrada.innerHTML = mErro;
        document.querySelector('.failed').style.display = 'block';
        numA.value = '';
        numB.value = '';
    }
})
