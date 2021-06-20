var ProductName = document.getElementById('ProductName')
var ProductCategory = document.getElementById('ProductCategory')
var ProductPrice = document.getElementById('ProductPrice')
var ProductDescription = document.getElementById('ProductDescription')
var searchInput = document.getElementById('search')

var products = [];

if (localStorage.getItem('ourProducts') == null) {
    products = []
} else {

    products = JSON.parse(localStorage.getItem('ourProducts'))
    displayProducts(products)

}
var index

function addProduct() {

    var product = {
        name: ProductName.value,
        category: ProductCategory.value,
        price: ProductPrice.value,
        desc: ProductDescription.value
    }
    var btn = document.getElementById('btn').innerHTML
    console.log(btn);

    if (btn == 'Update') {
        products[index] = product
            // products.splice(index,1,product)
        document.getElementById('btn').innerHTML = 'Add Product'

    } else {

        products.push(product)
    }

    // console.log(products);
    displayProducts(products)
    clear()

    localStorage.setItem('ourProducts', JSON.stringify(products))
}

function displayProducts(anyArray) {
    var kobay = ``

    for (var i = 0; i < anyArray.length; i++) {
        kobay += `<tr>
        <td>` + (i + 1) + `</td>
        <td>` + anyArray[i].name + `</td>
        <td>` + anyArray[i].category + `</td>
        <td>${anyArray[i].price}</td>
        <td>${anyArray[i].desc}</td>
        <td>
            <button onclick="deleteItem(${i})" class="btn btn-danger">delete</button>
        </td>
        <td>
            <button onclick="Update(${i})" class="btn btn-warning">Update</button>

        </td>
    </tr>`
    }
    document.getElementById('kobaya').innerHTML = kobay


}


function clear() {
    ProductName.value = ''
    ProductCategory.value = ''
    ProductPrice.value = ''
    ProductDescription.value = ''
}

// localStorage.setItem('myKey', 'ppppppp')

// console.log(localStorage.getItem('hamada'));
function deleteItem(index) {
    products.splice(index, 1)
    console.log(products);
    localStorage.setItem('ourProducts', JSON.stringify(products))
    displayProducts(products)
}

function Update(i) {
    index = i
        // console.log(i);
        // console.log(products[i]);
    ProductName.value = products[i].name
    ProductCategory.value = products[i].category
    ProductPrice.value = products[i].price
    ProductDescription.value = products[i].desc
    document.getElementById('btn').innerHTML = 'Update'
}



function search() {
    var newArray = []


    for (var i = 0; i < products.length; i++) {

        if (products[i].name.toLowerCase().includes(searchInput.value.toLowerCase())) {

            newArray.push(products[i])
            console.log(products[i]);
        }

    }

    displayProducts(newArray)

}