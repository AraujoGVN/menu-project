const list = document.querySelector('ul')
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const buttonSumAll = document.querySelector(".sum-all")
const buttonFilterAll = document.querySelector(".filter-all")
let myLi = ``

function formatCurrency(value) {
    const newValue = value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })

    return newValue
}


function showAll(productsArray) {
    myLi = ``

    productsArray.forEach((product) => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p>
        </li>
    `
    })

    list.innerHTML = myLi
}

function mapAll() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9

    }))

    showAll(newPrices)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, current) => acc + current.price, 0)

    list.innerHTML = `
    <li>
            <p>O valor total dos hambúrgueres é de ${formatCurrency(totalValue)}</p>
    </li>
    `
}

function filterAll() {
    const filterVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterVegan)
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions))

buttonMapAll.addEventListener("click", mapAll)

buttonSumAll.addEventListener("click", sumAllItems)

buttonFilterAll.addEventListener("click", filterAll)