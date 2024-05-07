const botao = document.getElementById('nao');

botao.addEventListener('mouseover', () => {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    const novaPosicaoX = Math.random() * (larguraJanela - 100);
    const novaPosicaoY = Math.random() * (alturaJanela - 50);

    botao.style.left = novaPosicaoX + 'px';
    botao.style.top = novaPosicaoY + 'px';
})

const botao2 = document.getElementById('sim')

botao2.addEventListener("click",()=>{
    window.open("https://www.youtube.com/watch?v=IyOOK8tsMmk", "_blank")
})
