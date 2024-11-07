const getproductCat = async () =>{
    const params =new URLSearchParams(window.location.search).get('xx');
    const {data} =await axios.get(`https://dummyjson.com/products/category/${params}`);
    return data;
}

const displaygetproductCat =async () =>{
    const fofo=await getproductCat();
    const result= fofo.products.map( (soso)=>{
        return `
        <div class='cat'> 
       <img src="${soso.thumbnail}" alrt="${soso.description}">
       <h3>${soso.title}</h3>
       <span>${soso.price}</span>
        </div> `

    } ).join(' ');
    document.querySelector(".categories .container .row").innerHTML=result;
}
displaygetproductCat();