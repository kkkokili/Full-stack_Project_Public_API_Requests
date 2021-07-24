// jshint esversion:8
const gallery = document.getElementById('gallery');


// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  Model Window Function
// ------------------------------------------
async function augment() {
  const response = await fetch('https://randomuser.me/api/');
  const promise = await response.json();
  const data = promise.results[0];
  const img = data.picture.large;
  const name = `${data.name.first} ${data.name.last}`;
  const email = data.email;
  const city = data.location.city;
  const state = data.location.state;
  const country = data.location.country;
  const cell=data.cell;
  const address = `${data.location.street.number}  ${data.location.street.name}, ${city}, ${state}, ${country}, ${data.location.postcode}`;
  const dob = data.dob.date;
  generate(img, name, email, city, cell, address, dob);

}



function generate(img, name, email, city, cell, address, dob) {
  const section = document.createElement('div');
  section.setAttribute("class", "modal-container");
  document.querySelector('body').appendChild(section);
  section.innerHTML=`
  <div class="modal">
      <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
      <div class="modal-info-container">
          <img class="modal-img" src=${img} alt="profile picture">
          <h3 id="name" class="modal-name cap">${name}</h3>
          <p class="modal-text">${email}</p>
          <p class="modal-text cap">${city}</p>
          <hr>
          <p class="modal-text">${cell}</p>
          <p class="modal-text">${address}</p>
          <p class="modal-text">Birthday: ${dob}</p>
      </div>
  </div>

  // IMPORTANT: Below is only for exceeds tasks
  <div class="modal-btn-container">
      <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
      <button type="button" id="modal-next" class="modal-next btn">Next</button>
  </div>
      `
  ;
}






// ------------------------------------------
//  Show Employee DIRECTORY
// ------------------------------------------

async function extract() {
  const response = await fetch('https://randomuser.me/api/');
  const promise = await response.json();
  const data = promise.results[0];
  const img = data.picture.large;
  const first = data.name.first;
  const last = data.name.last;
  const email = data.email;
  const city = data.location.city;
  const state = data.location.state;
  const country = data.location.country;
  generateHTML(img, first, last, email, city, state, country);

}

function generateHTML(img, first, last, email, city, state, country) {
  const section = document.createElement('div');
  section.setAttribute("class", "card");
  gallery.appendChild(section);
  section.innerHTML=`
      <div class="card-img-container">
          <img class="card-img" src=${img} alt="profile picture">
      </div>
      <div class="card-info-container">
          <h3 id="name" class="card-name cap">${first} ${last}</h3>
          <p class="card-text">${email}</p>
          <p class="card-text cap">${city}, ${state}, ${country}</p>
      </div>`
  ;
}



extract().finally(()=> {
  for(i=0;i<12;i++) {
   document.getElementsByClassName('card')[i].addEventListener('click',augment);
}
});
