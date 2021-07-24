// jshint esversion:8
const gallery =document.getElementById('gallery');



async function extract() {
  const response = await fetch('https://randomuser.me/api/');
  const promise = await response.json();
  const data = console.log(promise.results[0]);
}

extract();



function generateHTML(img,first,last,email,city,state) {
  const section = document.createElement('div');
  section.setAttribute("class", "card");
  gallery.appendChild(div);
  document.querySelector('card').innerHTML=`
      <div class="card-img-container">
          <img class="card-img" src=${img} alt="profile picture">
      </div>
      <div class="card-info-container">
          <h3 id="name" class="card-name cap">${first} ${last}</h3>
          <p class="card-text">${email}</p>
          <p class="card-text cap">${city}, ${state}</p>
      </div>`
  ;
}
