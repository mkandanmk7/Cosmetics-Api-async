//header top image:

let imageHeaderDiv = document.createElement("div");

imageHeaderDiv.innerHTML = `
<img src="https://source.unsplash.com/O-Ct1yeWeRo/1600x100" class="headerImg">

`;

document.body.append(imageHeaderDiv);

//header

let headerDiv = document.createElement("div");
headerDiv.className = "pageHeader";

headerDiv.innerHTML = `
<div>
    <h1><b>Make you Up !</b></h1>
</div>
<div>
    <h3 class="headerPara">Lets get your favourite one...!</h3>    
</div>



`;
document.body.append(headerDiv);

// header after image:

// let imageHeaderDiv1 = document.createElement("div");
// imageHeaderDiv1.innerHTML = `
// <img src="https://source.unsplash.com/VJ4pn_PSBLo/1600x100" alt="make up kit" class="headerImg">

// `;
// document.body.append(imageHeaderDiv1);

// image slide show screen:

// event handler: onclick,onmouse leave over ();

let slideShow = document.createElement("div");
slideShow.className = "slideShow";

//inner elements; previous and next icon done:

slideShow.innerHTML = `
    <div><img class="slideShowImage" src="assets/sliderImages/Spring_SaleDesktopLP24March.jpg" id="slideShowImage" onmouseover="pauseTurn()" onmouseleave="resumeTurn()"></div>
    <div class="previous"><a href="#" onclick="previousTurn()"><i class="fas fa-chevron-left" ></i></a></div>
    <div  class="next"><a href="" onclick="nextTurn()"><i  class="fas fa-chevron-right"></i></i></a></div>
`;

//render in body:

document.body.append(slideShow);

// product details section: creating Div and classes here:

let productSection = document.createElement("div");
productSection.className = "productSection";

let mainBox = document.createElement("div");
mainBox.className = "mainBox";

let productList = document.createElement("div");
productList.className = "productList";

// search bar and Nav bar creation:

let brandBox = document.createElement("div");
brandBox.className = "brandBox";

//create div inside brandbox div:

// onclick event here: for navigation to get details related to p element text:

brandBox.innerHTML = `
    <div><p onclick="changeBrand('nyx')">NYX</p></div>
    <div ><p onclick="changeBrand('clinique')">Clinique</p></div>
    <div ><p onclick="changeBrand('maybelline')">Maybelline</p></div>
    <div ><p onclick="changeBrand('covergirl')">Covergirl</p></div>
    <div ><p onclick="changeBrand('revlon')">Revlon</p></div>
    <div id="searchProduct"><input type="text" class="form-control" placeholder="Search products" onkeydown="searchProduct(event)" id="search"></div>
`;
// brandBox appended to productSection div element:
productSection.append(brandBox);

// left side list nav bar products:

let listHeader = document.createElement("h3");
listHeader.className = "listHeader";
listHeader.innerText = "products";

let listBox = document.createElement("div");
listBox.className = "listBox";
// onclick event changeProduct( ) as value pass as argument;

listBox.innerHTML = `
    <div class="listItems" onclick="changeProduct('lipstick')"> Lipstick <img src="assets/icons/lipstick.png" class=icons></div>
    <div class="listItems" onclick="changeProduct('eyeliner')">Eye Liner <img src="assets/icons/eyeliner.png" class="icons"></div>
    <div class="listItems" onclick="changeProduct('foundation')"> Foundation<img src="assets/icons/foundation.png" class=icons></div>
    <div class="listItems" onclick="changeProduct('lip_liner')"> Lip liner<img src="assets/icons/lip_liner.png" class=icons></div>
    <div class="listItems" onclick="changeProduct('mascara')"> Mascara<img src="assets/icons/mascara.png" class=icons></div>
    <div class="listItems" onclick="changeProduct('eyebrow')"> EyeBrow<img src="assets/icons/eyebrow.png" class=icons></div>
    <div class="listItems" onclick="changeProduct('eyeshadow')"> Eye shadow<img src="assets/icons/eyeshadow.png" class=icons></div>
    <div class="listItems" onclick="changeProduct('bronzer')"> Bronzer<img src="assets/icons/bronzer.png" class=icons></div>
    <div class="listItems" onclick="changeProduct('blush')"> Blush<img src="assets/icons/brush.png" class=icons></div>
`;

productList.append(listHeader, listBox); //two elements append to productList element:

// Right kit content details

let productCards = document.createElement("div");
productCards.className = "productCards";

mainBox.append(productList, productCards); // pList and PCards ele appended to mainBox;
productSection.append(mainBox); // main box append to product section next to brandBox..

document.body.append(productSection); //appended to body

//footer section:

let footer = document.createElement("div");
footer.className = "pageFooter";
footer.innerHTML = `
    <div><h3>Developed By Muthu </h3></div>
    <div><h4>Contact: mkandanmk7@gmail.com</h4></div>
`;
document.body.append(footer);

//slide show image setInterval () clearInterval()
// set arr of images:
//img link ; "assets\\sliderImages\\49d4c6a03633349bfac2722394cbade0.gif"
let sliderImg = [
  "assets\\sliderImages\\49d4c6a03633349bfac2722394cbade0.gif",
  "assets\\sliderImages\\279a2116d1f00502fdbf4061950e5b4b.jpg",
  "assets\\sliderImages\\revbanners3.jpg",
  "assets\\sliderImages\\ca5d691688159790e67ad8f7598f7f85.jpg",
  "assets\\sliderImages\\Spring_SaleDesktopLP24March.jpg",
];

//change next pic after 2000ms: 2s:
imageTurn = setInterval(turnImage, 2000);

let i = 0;
let pageNo = 0;
let slideShowImage = document.querySelector("#slideShowImage");

//  image turn:

function turnImage() {
  if (i > 4) i = 0;
  slideShowImage.src = sliderImg[i];
  i++;
}

// previous image turn :

function previousTurn() {
  clearInterval(imageTurn);
  i = i - 1;
  if (i < 0) {
    i = 4;
  }
  slideShowImage.src = sliderImg[i]; //set src image to slideImage
  imageTurn = setInterval(turnImage, 2000);
}

// next image Turn ();

function nextTurn() {
  clearInterval(imageTurn);
  i = i + 1;
  if (i > 4) i = 0;
  slideShowImage.src = sliderImg[i];
  imageTurn = setInterval(turnImage, 2000); // after forward or reverse pic again run slide each 2s.
}

// onmouseover pauseTurn();
function pauseTurn() {
  clearInterval(imageTurn); //stop run images:
}

//onmouseleave() start the image slide show:
function resumeTurn() {
  imageTurn = setInterval(turnImage, 2000);
}

//search words value:

let searchName = document.querySelector("#search");
let product = "lipstick"; //assume starting product .

let filteredData = [];

//event handling onclick();

function changeProduct(name) {
  product = name;
  pageNo = 0;
  filteredData = [];
  postProduct(data); //call postProduct() with orignal data arg;
}

//changeBrand();

function changeBrand(name) {
  brand = name;
  pageNo = 0;
  filteredData = [];
  brandFilter(brand); //brandFilter() calling func:
}

//searchProduct value then enter key:

function searchProduct(enter) {
  filteredData = [];
  pageNo = 0;
  if (enter.keyCode === 13) {
    let temp = searchName.value; //get value from search bar.
    searchName.value = "";
    searchFilter(temp); //calling searchFilter("with entered Name")
  }
}

let data;

getProduct();

//fetch data from api using async await promise method:

async function getProduct() {
  productCards.innerHTML = `
    <h2 class="loading">Loading...</h2>
    `;
  let loadingImage = document.createElement("img");
  loadingImage.src = "assets/loadingImage/Silver-Balls-Swinging.gif";
  loadingImage.style.width = "100%";
  productCards.append(loadingImage);

  let response = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json"
  );
  data = await response.json();

  // console.log(data);
  postProduct(data);
}

//get search detail data here.
function searchFilter(newData) {
  const regex = new RegExp(newData, "gi");
  data.forEach((i) => {
    if (regex.test(i.name)) {
      filteredData.push(i);
    }
  });
  if (filteredData.length == 0) {
    productCards.innerHTML = `<h2>No products found</h2>`;
  } else {
    listData(filteredData);
  }
}
function brandFilter(newData) {
  data.forEach((i) => {
    if (i.brand === newData) {
      filteredData.push(i);
    }
  });
  listData(filteredData);
}

function postProduct(newData) {
  // console.log(newData);
  // console.log(newData[0].product_type, newData.length);
  productCards.innerHTML = ""; //empty before and add after.

  newData.forEach((i) => {
    if (i.product_type == product) {
      filteredData.push(i);
    }
  });
  listData(filteredData); //send product details to listdata()
}

// listData() ;

function listData(data) {
  productCards.innerHTML = "";
  // console.log(data.length);
  // console.log(data);

  for (let i = pageNo; i < pageNo + 10; i++) {
    if (i < data.length) {
      // console.log(data.length);
      let productName = data[i].name;
      let productBrand = data[i].brand;
      let productPrice = data[i].price;
      let productDescription = data[i].description;
      let productShades = data[i].product_colors;
      let productImage = data[i].image_link;
      let productLink = data[i].product_link;
      // console.log(productName, productPrice);

      productCards.innerHTML += `
      <div class="card" >
        <div>
          <img  class="cardImage" src=${productImage} onerror="this.src='https://source.unsplash.com/VJ4pn_PSBLo/' ">
        </div>
        <div class="cardBody">
          <div class="productName"><h3>${productName}</h3></div>
          <div class="productBrand"><b>Brand :</b> ${productBrand}</div>
          <div class="productPrice"><b>$${productPrice}</b></div>
          <div class="productDescription"><p>${productDescription}</p></div>
          <div class="productShades">
            <div><p>Shades Available:</p></div>
            <div class="shadesContainer${i} shadesContainer"></div>
          </div>
          <div class="productLink"><a href="#">${productLink}</a></div>
        </div>
      </div>
      `;

      // shades using hex value:
      // shades div created;
      let a = "shadesContainer" + i;
      let shadesContainer = document.getElementsByClassName(a)[0];
      for (let j = 0; j < productShades.length; j++) {
        let newShade = document.createElement("div");

        newShade.className = "shades";
        newShade.style.backgroundColor = productShades[j].hex_value;
        // console.log(productShades[j].hex_value);

        shadesContainer.append(newShade);
      }
    }
  }

  //add every page buttons :next and previous:

  productCards.innerHTML += `
    <div class="Buttons">
      
    <div><button class="btn btn-dark" onclick="previousPage()">Previous</button></button></div>
    <div><button class="btn btn-dark" onclick="nextPage()">Next</button></div>   
    </div>
    `;
}
// previous page(): onclick event:

function previousPage() {
  console.log("hy");
  if (pageNo >= 10) {
    productCards.innerHTML = `<h2 class="loading">Loading...</h2>`;
    pageNo -= 10;
    listData(filteredData); // get list data using filteredData value:
  }
}
function nextPage() {
  console.log("h  sgs gdy");
  if (pageNo < filteredData.length - 11) {
    productCards.innerHTML = `<h2 class="loading">Loading...</h2>`;
    pageNo += 10;
    listData(filteredData);
  }
}
