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