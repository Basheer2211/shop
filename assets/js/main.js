const getCategories= async () =>{

    const { data } =await axios.get(`https://dummyjson.com/products/category-list`);
    return data;
}
const displayCategories = async () =>{
    document.querySelector(".load").classList.add("load1");
   const fofo =  await getCategories();
   try{
    const result=fofo.map( (category) =>{
        return `<div class="categorie">
        <h2>${category}</h2>
        
        <a href='detailsCategories.html?xx=${category}'>details</a>
        </div>`

    } ).join(` `);

      document.querySelector(".categories .row").innerHTML=result;
      document.querySelector(".load").classList.remove("load1");
   }
   catch(error){
    document.querySelector(".load").innerHTML="<p>error</p>" ;
    document.querySelector(".load").classList.remove("load1");
   }
}
displayCategories();

const getproduct=async () =>{
    const {data}= await axios.get('https://dummyjson.com/products');
    return data;
}
const displayproduct=async () =>{
    const fofo =await getproduct();
    const result=fofo.products.map((product)=>{
      return `
      <div class="product-section"> 
     <img src="${product.thumbnail}" alt="product.description"/>
      <h3>${product.title}</h3>

      </div>
      `
    }).join(` `);
    document.querySelector(".products .row").innerHTML=result;

}

displayproduct();