const selectedProductIds=[]
const productsElement = document.getElementById("products")
const productsModified = products.map(function (product) {
  product.priceModified = product.price.toFixed(2)
  return product
})
renderProductCards(productsModified)

function renderProductCards(products) {
  let productCards = ""

  for (let i = 0; i < products.length; i++) {
    productCards = productCards + renderProductCard(products[i])
  }
  productsElement.innerHTML = productCards;
  captureFavoriteBtnClick();
}

function renderProductCard(product) {
  return `<div class="col-12 col-md-4 col-lg-3">
      <div class="card">
        <img
          src="${product.image}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">
           ${product.description}
          </p>
          <div>
          <strong><span class="material-icons-outlined">
          currency_rupee
          </span>${product.priceModified}</strong>
          </div>
          <div
            class="btn-group w-100"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" class="btn">
            <i class="bi bi-cart3"></i>
            </button>
            <button type="button" class="btn btn-favorite" data-id='${product.id}'>
            <i class="bi bi-heart"></i>
            </button>
            <button type="button" class="btn">
            <i class="bi bi-arrow-left-right"></i>
            </button>
          </div>
        </div>
      </div>
      </div>`
}