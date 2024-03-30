    const loadPhone = async (searchText="a", isShowAll) => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/phones?search=${searchText}`
      );
      const data = await res.json();
      const phones = data.data;

      displayPhone(phones, isShowAll);
    };

    const displayPhone = (phones, isShowAll) => {
      const phoneCont = document.getElementById("phone-con");

      // clear

      phoneCont.textContent = " ";

      const showAll = document.getElementById("showAll");
    

      if (phones.length > 12 && !isShowAll) {
        showAll.classList.remove("hidden");
      } else {
            showAll.classList.add("hidden");
        }
        
console.log(isShowAll);

      // display 12 phones

        if (!isShowAll) {
             phones = phones.slice(0, 12);

   }
     phones.forEach(
       (phone) => {
         console.log(phone);
         // step create a div

         const phoneCard = document.createElement("div");
         phoneCard.classList = "card  bg-gray-100 shadow-xl p-4 ";

         //setp 3
         phoneCard.innerHTML = `
                        <figure><img src="${phone.image}" alt="Shoes" />
                        </figure>
                <div class="card-body">
                    <h2 class="card-title">${phone.phone_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-center">
                    <button onclick="handleShowD('${phone.slug}'), showDModal.showModal()"class="btn btn-primary">Show Detalis</button>
                    </div>
                </div>
                </div>`;

         phoneCont.appendChild(phoneCard);
       }
       //append
     );
      spiner(false);
    };
           


const handleSearch = (isShowAll)=> {
  spiner(true);

  const Search = document.getElementById("Search").value;

  loadPhone(Search , isShowAll);
};
        
const spiner = (isLodding) => {
    const spiner = document.getElementById("spiner");
    if (isLodding) {
        spiner.classList.remove("hidden");
    } 
    else {
        spiner.classList.add("hidden");
        
    }
}

const handleShowD =async (id) => {

const res = await await fetch(
  ` https://openapi.programming-hero.com/api/phone/${id}`
);
    const data = await res.json();
  // console.log(data)
  const phone = data;
  console.log(phone)
showPhoneDetails(phone.data);

}

// show phonbe details

const showPhoneDetails = (phone) => {
 
  
  const phoneName = document.getElementById("phone-name");
  phoneName.innerText = phone.name;
  

  const showDetailContainer = document.getElementById("show-detail-container");
  
 console.log(phone);
  showDetailContainer.innerHTML = `
  <img class="ml-36" src="${phone.image}"  />
  <div class="ml-2 mt-5 font-semibold flex flex-col justify-center items-center text-left">
  <p  > <span class="text-xl ">${phone?.brand}</span> </p>
  <p  > <span class="text-xl ">${phone?.mainFeatures.memory}</span> </p>
  <p > <span class="text-xl ">${phone?.mainFeatures.storage}</span> </p>
  <p > <span class="text-xl ">${phone?.others.GPS}</span> </p>
  <p > <span class="text-xl ">${phone?.releaseDate}</span> </p> </div>
  `;




  
  showDModal.showModal();
}




// handle show all

const handShowAll = () => {

    handleSearch(true);

}

    loadPhone()
