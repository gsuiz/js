
const links = Array.from(document.getElementsByClassName('adicionar'))
const carrinho = document.querySelector('#carrinho')
const produtos = [
    {nome:'camiseta',quantidade:1},
    {nome:'short',quantidade:1},
    {nome:'sapato',quantidade:1}
]

links.forEach((link, indice) =>{
    link.addEventListener('click', () =>{
            if (indice == 0){
            let camiseta = document.querySelector('#camiseta')
            camiseta.innerHTML = `${produtos[0].nome} | quantidade:${produtos[0].quantidade++}<hr>`
        } else if(indice == 1){
            let short = document.querySelector('#short')
            short.innerHTML = `${produtos[1].nome} | quantidade:${produtos[1].quantidade++}<hr>`
        } else{
            let sapato = document.querySelector('#sapato')
            sapato.innerHTML = `${produtos[2].nome} | quantidade:${produtos[2].quantidade++}<hr>`
        }
    })
})