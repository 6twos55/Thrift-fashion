const items = document.querySelectorAll('.nav-link');

items.forEach((item, index) =>  {
    item.addEventListener('click', e => {
    items.forEach((item,i) => {
        if(i !== index){
            item.classList.remove("active");
        }
    });

    if(!item.classList.contains("active")){
        item.classList.add("active");


    }else {
        // item.classList.remove("active")
    }
});});

const allProducts = document.querySelector('.allProducts');

const handleFetch = async () => {
    let response = await fetch('https://techwizjson.netlify.app/men');

    const data =  await response.json();

    data.forEach((dat) => {
      allProducts.innerHTML += `
      <div class="col searchItem" >
      <div class="card shadow-sm">
        <img src="${dat.imageUrl}">
        <div class="card-body">
          <p class="card-text product-name">${dat.name}</p>
          <p class="card-text">${dat.description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-danger"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shopping-cart" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg></button>
              <button type="button" class="btn btn-sm btn-outline-danger price-holder"> ${dat.id} </button>
            </div>
            <small class="text-muted"> <small></small> <strong>${dat.price}</strong> </small>
          </div>
        </div>
      </div>
    </div>
      `
    })
}


const womenProducts = document.querySelector('.womenProducts');

const handleWomen = async () => {
  let response = await fetch('https://techwizjson.netlify.app/women');

  const data =  await response.json();

  data.forEach((dat) => {
    allProducts.innerHTML += `
    <div class="col searchItem" >
    <div class="card shadow-sm">
      <img src="${dat.imageUrl}">
      <div class="card-body">
        <p class="card-text product-name">${dat.name}</p>
        <p class="card-text">${dat.description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-danger"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shopping-cart" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg></button>
            <button type="button" class="btn btn-sm btn-outline-danger price-holder"> ${dat.id} </button>
          </div>
          <small class="text-muted"> <small></small> <strong>${dat.price}</strong> </small>
        </div>
      </div>
    </div>
  </div>
    `
  })
}



const fetchAll = async ()=> { 
  await handleFetch();
  await handleWomen();
  await handleKids();
  
}

fetchAll().then(() => {
  const carts = document.querySelectorAll('.btn-group');
const one = document.querySelector('.one');
const sumer = document.querySelector('.sum');

let oner = one.innerText;
let vas = parseInt(oner);




carts.forEach((car) => {
    const carr = car.firstElementChild;
    let stockQuantit = carr.nextElementSibling.innerText;
    let stockQuantity = parseInt(stockQuantit); 

    carr.addEventListener('click', (e) => {


        one.classList.add('show')

        let nalu = ++vas;
        one.innerText = nalu;

        
        let stockQuants = --stockQuantity;
        let stockRange = carr.nextElementSibling;
        stockRange.innerText = stockQuants;
        stockQuantit = stockQuants;

        if (stockRange.innerText === '0') {
            carr.classList.add('dis')
        }
        const sum = sumer.parentElement.lastElementChild.lastElementChild;

        const productName = car.parentElement.parentElement.firstElementChild.innerText;

        const productDes = car.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;

        const parentPrice = car.parentElement.lastElementChild.lastElementChild.innerText;

        const parentPriceLogo = car.parentElement.lastElementChild.firstElementChild.innerText;



        const two = document.querySelector('.two');
        two.innerText = nalu;


        const cartUl = document.querySelector('.cartul');

        const cartList = document.createElement('li');

        cartList.innerHTML = `
        <li class="list-group-item d-flex  justify-content-between lh-sm nn">
            <div>
            <h6 class="my-0"> ${productName}</h6>
            <small class="text-muted">${productDes}</small>
            </div>
            <span class="text-muted">
            <span class="text-muted">${parentPriceLogo}</span>${parentPrice}</span>
            <span class="btn btn-danger del"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 trash" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg></span>
        </li>
        `
        cartUl.appendChild(cartList);

        sum.innerHTML = parseInt(sum.innerHTML) + parseInt(parentPrice.replace("$", ""));

        const del = document.querySelectorAll('.del');

        del.forEach((de) => {
            de.addEventListener('click', () => {
                const deler = de.parentElement.parentElement;
                deler.classList.add('none');

                two.innerText = --nalu;
                one.innerText = two.innerText;

              sum.innerHTML = parseInt(sum.innerHTML) - parseInt(parentPrice.replace("$", ""));

            })
        })


    })
})
})



const childrenProducts = document.querySelector('.childrenProducts');

const handleKids = async () => {
  let response = await fetch('https://techwizjson.netlify.app/kids');

  const data =  await response.json();

  data.forEach((dat) => {
    allProducts.innerHTML += `
    <div class="col searchItem" >
    <div class="card shadow-sm">
      <img src="${dat.imageUrl}">
      <div class="card-body">
        <p class="card-text product-name">${dat.name}</p>
        <p class="card-text">${dat.description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-danger"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shopping-cart" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg></button>
            <button type="button" class="btn btn-sm btn-outline-danger price-holder"> ${dat.id} </button>
          </div>
          <small class="text-muted"> <small></small> <strong>${dat.price}</strong> </small>
        </div>
      </div>
    </div>
  </div>
    `
  })


  const searchForm = document.querySelector('.searchForm');
const searchInput = document.querySelector('.searchInput');
const searchItems = document.querySelectorAll('.searchItem');


// Search button functionalities as the user types
searchInput.addEventListener('keyup', (e)=>{

  let itemsArray = Array.from(searchItems);

  itemsArray
  .filter((item) => {
    return !item.textContent.toLowerCase().includes(e.target.value.toLowerCase());
  })
  .forEach((item)=>{
    item.classList.add('remove');
  });


  itemsArray
  .filter((item) => {
    return item.textContent.toLowerCase().includes(e.target.value.toLowerCase());
  })
  .forEach((item)=>{
    item.classList.remove('remove');
  });

  window.scrollTo(0,4500);

});


// Search button functionalities when the user submits
searchForm.addEventListener('submit', (e) => {

  e.preventDefault();
  
  let itemsArray = Array.from(searchItems);

  itemsArray
  .filter((item) => {
    return !item.textContent.toLowerCase().includes(searchInput.value.toLowerCase());
  })
  .forEach((item)=>{
    item.classList.add('remove');
  });

  itemsArray
  .filter((item) => {
    return item.textContent.toLowerCase().includes(searchInput.value.toLowerCase());
  })
  .forEach((item)=>{
    item.classList.remove('remove');
  });

});
}








const ticker = document.querySelector('.ticker');
const dateTimeLocCover = document.querySelector('.list-group');
const currentDate = document.querySelector('.date');
const currentTime = document.querySelector('.time');
const currentLocation = document.querySelector('.location');







// Toggling the dropdown button (ticker);
ticker.addEventListener('click', (e) => {
    dateTimeLocCover.classList.toggle('displayToggle');
  
  
    // Showing the current date on the page
    const now = new Date();
    currentDate.innerHTML = now.toDateString();
  });
  
  
  // Showing the time on the page
  const tick = () => {
  
    const now = new Date();
  
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
  
    const html = 
    `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span>
    `;
  
    currentTime.innerHTML = html;
      
  };
  setInterval(tick, 1000);
  
  
  // Showing the user's location on the page
  const findMyState = () => {
  
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;  
      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage*en`;
  
  
      fetch(geoApiUrl)
      .then(res => res.json())
      .then(data => {
        currentLocation.textContent = " " + data.principalSubdivision + ", " + data.countryName;
      })
      .catch(err => {
        console.log(err);
      });
  
    }
  
    const error = () => {
      currentLocation.textContent = "Unable to find your location";
    }
  
    
    navigator.geolocation.getCurrentPosition(success, error);
  }

  window.onload = () => {
    findMyState();
    items[0].classList.add("active");
  }
















const closeBtn = document.querySelector('#closeBtn');
const checkOutBackground = document.querySelector('.checkOutBackground');
const cancelBtn = document.querySelector('.cancelBtn');
const subButton = document.querySelector('.checkout-to-sub');

cancelBtn.addEventListener('click', (e) => {
  checkOutBackground.classList.toggle('remove');

});

closeBtn.addEventListener('click', (e) => {
  checkOutBackground.classList.toggle('remove');
});


subButton.addEventListener('click', () => {
  window.scrollTo(0,0);
  checkOutBackground.classList.toggle('remove');
});











