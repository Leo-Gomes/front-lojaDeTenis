const produtos = [
    {
        img: "../assets/produto.png",
        categoria: "Tênis",
        titulo: "K-Swiss V8 - Masculino",
        preco: 200
    },
    {
        img: "../assets/produto.png",
        categoria: "Tênis",
        titulo: "K-Swiss V8 - Masculino",
        preco: 200
    },
    {
        img: "../assets/produto.png",
        categoria: "Tênis",
        titulo: "K-Swiss V8 - Masculino",
        preco: 200
    },
    {
        img: "../assets/produto.png",
        categoria: "Tênis",
        titulo: "K-Swiss V8 - Masculino",
        preco: 200
    },
    {
        img: "../assets/produto.png",
        categoria: "Tênis",
        titulo: "K-Swiss V8 - Masculino",
        preco: 200
    },
    {
        img: "../assets/produto.png",
        categoria: "Tênis",
        titulo: "K-Swiss V8 - Masculino",
        preco: 200
    },
    {
        img: "../assets/produto.png",
        categoria: "Tênis",
        titulo: "K-Swiss V8 - Masculino",
        preco: 200
    },
    {
        img: "../assets/produto.png",
        categoria: "Tênis",
        titulo: "K-Swiss V8 - Masculino",
        preco: 200
    },
    {
        img: "../assets/produto.png",
        categoria: "Tênis",
        titulo: "K-Swiss V8 - Masculino",
        preco: 200
    },
    {
        img: "../assets/produto.png",
        categoria: "Tênis",
        titulo: "K-Swiss V8 - Masculino",
        preco: 200
    },
    {
        img: "../assets/produto.png",
        categoria: "Tênis",
        titulo: "K-Swiss V8 - Masculino",
        preco: 200
    },
    {
        img: "../assets/produto.png",
        categoria: "Tênis",
        titulo: "K-Swiss V8 - Masculino",
        preco: 200
    },
    {
        img: "../assets/produto.png",
        categoria: "Tênis",
        titulo: "K-Swiss V8 - Masculino",
        preco: 200
    },
    {
        img: "../assets/produto.png",
        categoria: "Tênis",
        titulo: "K-Swiss V8 - Masculino",
        preco: 200
    },
    {
        img: "../assets/produto.png",
        categoria: "Tênis",
        titulo: "K-Swiss V8 - Masculino",
        preco: 200
    },
]

let cards = document.getElementById('cards');
let resultadoBusca = document.getElementById('resultadoBusca')
let searchInput = document.getElementById('searchInput')

cards.innerHTML = produtos.map((item) =>{
   return `
    <div class="card">
                    <div class="flex bg-white rounded-sm">
                        <img src="${item.img}" alt="Tênis">
                    </div>
                    <div class="text-2xl">
                        <p class="text-xs mt-[18px] text-[#8F8F8F]">${item.categoria}</p>
                        <h2 class="tracking-[1.25px] text-[#474747]">${item.titulo}</h2>
                        <p class="mt-2 font-bold">$${item.preco}</p>
                    </div>
                </div>
    `
}).join("");

function buscar(){
    let cardsFiltrados = produtos.filter(item => item.categoria == searchInput.value || item.titulo == searchInput.value);

    resultadoBusca.innerHTML = `Resultados para "${searchInput.value}"`

    console.log(cardsFiltrados)

    cards.innerHTML = cardsFiltrados.map((item) =>{
        return `
         <div class="card">
                         <div class="flex bg-white rounded-sm">
                             <img src="${item.img}" alt="Tênis">
                         </div>
                         <div class="text-2xl">
                             <p class="text-xs mt-[18px]">${item.categoria}</p>
                             <h2 class="">${item.titulo}</h2>
                             <p class="mt-2">$${item.preco}</p>
                         </div>
                     </div>
         `
     }).join("")



}