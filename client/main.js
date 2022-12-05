const complimentBtn = document.getElementById("complimentButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);

const fortuneBtn = document.getElementById("fortuneButton");

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

fortuneBtn.addEventListener("click", getFortune);

let form = document.getElementById("form");
let input = document.getElementById("input");
let posts = document.getElementById("posts");

// every time i click the button, it refreshes the page. so I need to add
// e.preventDefault to stop the default action from happening.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button");
  formStatus();
});

//once button is pressed, i need a function expressing what happens
//if the form is successfuly or unsuccessfuly submitted

let formStatus = () => {
  if (input.value === "") {
    alert("Uh-oh! You need to write something.");
  } else {
    alert("Your form was successfuly submitted");
    acceptData();
  }
};

//ignore below- i don't know how to make it work
// const pastBtn = document.getElementById("pastButton")
// pastBtn.addEventListener('click', () => {
//     axios 
//         .get('http://localhost:4000/api/itinerary/')
//         .then(res => acceptData())
// });



//Now I need to write a function that will store the data somewhere

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
    posts.innerHTML += 
    ` <div> 
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>`;
  //need below code to refresh text box after every submission
  input.value = "";
    
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();

};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}

