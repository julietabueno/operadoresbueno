/* ================================THEME================================= */
//cambiar theme
const botonDarkMode = document.getElementById("botonDarkMode")
const botonLightMode = document.getElementById("botonLightMode")
//chequeo el localStorage para ver si hay guardado el theme
let lightMode

//simplifico el codigo del if
localStorage.getItem("theme") ? (lightMode = localStorage.getItem("theme")) : (localStorage.setItem("theme", "dark"))

if (lightMode == "light") {
    document.body.classList.add("lightMode")
}

//BOTONES

botonLightMode.addEventListener("click", () => {
    document.body.classList.add("lightMode")
    localStorage.setItem("theme", "light")
})

botonDarkMode.addEventListener("click", () => {
    document.body.classList.remove("lightMode")
    localStorage.setItem("theme", "dark")
})


//==================================main=========================================



class Crypto {
    constructor(nombre, sigla, valorDolares) {
        this.n = nombre
        this.s = sigla
        this.v = valorDolares
    }
}
const crypto1 = new Crypto("USDC", "USDC", 287)
const cryptos = [crypto1]

function mostrarNombre({ n: nombre }) {
    console.log(nombre)
}
function mostrarSiglaValor({ s: sigla, v: valorDolares }) {
    console.log(sigla, valorDolares)
}

mostrarNombre(crypto1)
mostrarSiglaValor(crypto1)



//creo el objeto crypto y hago copias modificables con copia profunda
const crypto3 = {
    nombre: "Bitcoin",
    sigla: "BTC",
    valorDolares: 23886.95,
}

const crypto4 = structuredClone(crypto3)

crypto4.nombre = "Ethereum"
crypto4.sigla = "ETH"
crypto4.valorDolares = 1712.34

console.log(crypto3)
console.log(crypto4)
