const products = [
    {
      id:1,
      title: "Macbook",
      image:
        "https://demo.opencart.com/image/cache/catalog/demo/macbook_1-200x200.jpg",
      description:
        "Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..",
      price: 600,
    },
    {
      id:2,
      title: "Iphone",
      image:
        "https://demo.opencart.com/image/cache/catalog/demo/iphone_1-200x200.jpg",
      description:
        "iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..",
      price: 123,
    },
    {
      id:3,
      title: "Apple cinema",
      image:
        "https://demo.opencart.com/image/cache/catalog/demo/apple_cinema_30-200x200.jpg",
      description:
        "The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..",
      price: 110,
    },
    {
      id:4,
      title: "Epson",
      image:
        "https://demo.opencart.com/image/cache/catalog/demo/canon_eos_5d_1-200x200.jpg",
      description:
        "Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..",
      price: 98,
    },
  ]
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
  
  
  //forSearch
  
  const forSearch=document.getElementById('search');
  
  forSearch.addEventListener('keyup', (e)=>{
    const term=forSearch.value;
    const termLowercase=term.toLowerCase();
    const productFiltered=productsModified.filter((product)=>{
      const titleLowerCase=product.title.toLocaleLowerCase();
      return titleLowerCase.indexOf(termLowercase)!=-1;
    });
    renderProductCards(productFiltered);
  })
  
  
  
  function captureFavoriteBtnClick(){
    const products$=document.getElementById('products');
    const favoriteBtn$=products$.querySelectorAll('.btn-favorite');
    favoriteBtn$.forEach((btn$)=>{
      btn$.addEventListener('click',(e)=>{
        const target=e.target;
        const favoriteBtn=target.closest('.btn-favorite')
        const selectedId=favoriteBtn.getAttribute('data-id');
        console.log(selectedId);
        const selectedProductIndex=selectedProductIds.indexOf(selectedId);
        const icon=btn$.querySelector('.bi-heart');
        if (selectedProductIndex!= -1) {
        
          selectedProductIds.splice(selectedProductIndex,1);
        icon.innerHTML='bi-heart';
        } else {
          selectedProductIds.push(selectedId);
        icon.innerHTML='bi-heart-fill';
        }
        console.log(selectedProductIds);
  
        const wishListCounter=document.getElementById('wishlistCounter');
        wishListCounter.innerText=selectedProductIds.length;
      })
    })
  }
  