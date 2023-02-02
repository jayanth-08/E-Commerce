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