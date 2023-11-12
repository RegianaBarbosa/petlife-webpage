var duvidas = document.querySelectorAll('.duvida')

duvidas.forEach(function (duvida) {
    duvida.addEventListener('click', function (){
        duvida.classList.toggle('ativa')
    })    
})
// toogle : liga-desliga coloca se não tiver, tira se tiver