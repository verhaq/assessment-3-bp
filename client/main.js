const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const itineraryBtn = document.getElementById('pastButton');
const displaySection = document.getElementById('display-section');
const addInput = document.getElementById('add');
const updateItinerary = document.getElementById('update-itinerary');
const itineraryId = document.getElementById('itinerary-id');
const newItem = document.getElementById('new-item');

const BaseURL = 'http://localhost:4000'

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getItinerary = () => {
  axios.get(`${BaseURL}/api/itinerary`)
  .then( res => displayItinerary(res.data))
  .catch(err => console.log(err))
};

const displayItinerary = (arr) => {
  displaySection.innerHTML = ''
  console.log(arr);
  arr.map(itinerary => {
    let card = document.createElement('div')
    card.innerHTML = `
    
    <h4>${itinerary.name}</h4>
    <button onClick='deleteItem(${itinerary.id})'>Delete</button>
    `
displaySection.appendChild(card)
  })
};

const postItinerary = (e) => {
e.preventDefault()
let body = {
  name:addInput.value
}


axios.post(`${BaseURL}/api/itinerary`,body)
.then(res => displayItinerary(res.data))
.catch(err => console.log(err))

addInput.value = ''
}

const updateForm = (e) => {
  e.preventDefault()

  axios.put(`${BaseURL}/api/itinerary/${itineraryId.value}?newItem=${newItem.value}`)
  .then( res => displayItinerary(res.data))
  .catch(err => console.log(err))
  
}

const deleteItem = (id) => {
axios.delete(`${BaseURL}/api/itinerary/${id}`)
.then(res => displayItinerary(res.data))
.catch(err => console.log(err))
}


updateItinerary.addEventListener('submit', updateForm);
complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
itineraryBtn.addEventListener("click",getItinerary);
addInput.addEventListener("submit", postItinerary);



let form = document.getElementById("form");
let input = document.getElementById("input");
let posts = document.getElementById("posts");

// every time i click the button, it refreshes the page. so I need to add
// e.preventDefault to stop the default action from happening.
form.addEventListener("submit", postItinerary);

