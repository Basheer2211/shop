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

const getproduct=async (page) =>{
    const skip=( page - 1 ) * 30;
    const {data}= await axios.get(`https://dummyjson.com/products?limit=30&skip=${skip}`);
    return data;
}
const displayproduct=async (page = 1) =>{
    const fofo =await getproduct(page);
    const result=fofo.products.map((product)=>{
      return `
      <div class="product-section"> 
     <img src="${product.thumbnail}" alt="product.description" class="images"/>
      <h3>${product.title}</h3>

      </div>
      `
    }).join(` `);
    document.querySelector(".products .row").innerHTML=result;

    const numberOfPage=Math.ceil(fofo.total/30);
    let convert1 =0;
    let paginationLink=``;
    if (page==1) {
          paginationLink=`<button >&laquo;</button>`;
    }
    else { 
          paginationLink=`<button onclick='displayproduct(${page-1})' >&laquo;</button>`;

    }
    for (let i = 1; i <=numberOfPage; i++) {
        convert1=i;
        paginationLink+=`<button onclick='displayproduct(${i})'>${i}</button>`;
    }
    if (page==numberOfPage) {
        paginationLink+=` <button >&raquo;</button>`;
    }
    else {    paginationLink+=` <button onclick='displayproduct(${page+1})'>&raquo;</button>`;
}
    document.querySelector(".pagination").innerHTML=paginationLink;

    modle();
}
function modle() {
    const modle=document.querySelector(".My_modle");
    const leftbtn=document.querySelector(".left-btn");
    const rightbtn=document.querySelector(".right-btn");
    const closebtn=document.querySelector(".close-btn");
    const images=Array.from (document.querySelectorAll(".images"));
    let index=0;
    images.forEach(function(img){
    img.addEventListener("click",function(e){
        modle.classList.remove(`non`);
        modle.querySelector("img").setAttribute("src",e.target.src);
        index=images.indexOf(e.target);

    });
    });
    closebtn.addEventListener("click",function(){
        modle.classList.add(`non`);
    });
    rightbtn.addEventListener("click",function(e){
        index++;
        if (index>images.length-1) {
            index=0;
        }
     const src= images[index].src;
     modle.querySelector("img").setAttribute("src",src);
 });
leftbtn.addEventListener("click",function(e){
    index--;
    if (index<0) {
        index=images.length-1;
    }
 const src= images[index].src;
 modle.querySelector("img").setAttribute("src",src);
});




    
}

displayproduct();