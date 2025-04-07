// Sample sarees
const sarees = [
    {
      name: "Red Banarasi Silk",
      price: "₹2,999",
      image: "images/saree1.jpg"
    },
    {
      name: "Green Kanchipuram Silk",
      price: "₹3,499",
      image: "images/saree2.jpg"
    }
  ];
  
  const productList = document.getElementById("product-list");
  
  sarees.forEach(saree => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${saree.image}" alt="${saree.name}">
      <h3>${saree.name}</h3>
      <p>${saree.price}</p>
      <button onclick="addToCart('${saree.name}')">Add to Cart</button>
      <button onclick="buyNow('${saree.name}')">Buy Now</button>
    `;
    productList.appendChild(card);
  });
  
  function addToCart(name) {
    alert(`${name} added to cart!`);
  }
  
  function buyNow(name) {
    alert(`Proceeding to buy ${name}`);
  }
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function registerUser() {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => alert("Registered successfully!"))
    .catch(error => alert(error.message));
}

function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => alert("Logged in successfully!"))
    .catch(error => alert(error.message));
}
