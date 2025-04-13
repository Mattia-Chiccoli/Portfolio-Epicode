const addBtn = document.querySelector(".add-btn");
const editBtn = document.querySelector(".edit-btn");
const deleteBtn = document.querySelector(".delete-btn");
const API_URL = "https://striveschool-api.herokuapp.com/api/product/";
const AUTHORIZATION_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2ViOTM1YzNkZjMwMzAwMTUxNWE2NmYiLCJpYXQiOjE3NDQzNzUxMTUsImV4cCI6MTc0NTU4NDcxNX0.U3uO-WtN4tGwaSm_-zGVhuElbSirk33-bGbsLzX0D_E";
const productName = document.getElementById("productName");
const productDescription = document.getElementById("productDescription");
const productBrand = document.getElementById("productBrand");
const productImg = document.getElementById("productImg");
const productPrice = document.getElementById("productPrice");

let param = new URLSearchParams(window.location.search);
let id = param.get("id");

window.onload = async () => {
  if (id) {
    const fetched = await fetch(API_URL + id, {
      headers: {
        Authorization: `${AUTHORIZATION_KEY}`,
      },
    });
    const product = await fetched.json();
    document.querySelector("#productName").value = product.name;
    document.querySelector("#productDescription").value = product.description;
    document.querySelector("#productImg").value = product.imageUrl;
    document.querySelector("#productBrand").value = product.brand;
    document.querySelector("#productPrice").value = product.price;
    addBtn.remove();
  } else {
    editBtn.remove();
    deleteBtn.remove();
  }
};

const addProduct = async () => {
  const product = {
    name: `${productName.value}`,
    description: `${productDescription.value}`,
    brand: `${productBrand.value}`,
    imageUrl: `${productImg.value}`,
    price: `${productPrice.value}`,
  };

  const send = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `${AUTHORIZATION_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (send.ok) {
    alert("Product created");
  }
};
const editProduct = async () => {
  const product = {
    name: document.querySelector("#productName").value,
    description: document.querySelector("#productDescription").value,
    brand: document.querySelector("#productBrand").value,
    imageUrl: document.querySelector("#productImg").value,
    price: document.querySelector("#productPrice").value,
  };
  let edit = await fetch(API_URL + id, {
    method: "PUT",
    headers: {
      Authorization: `${AUTHORIZATION_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (edit.ok) {
    alert("Product changed");
  }
};
const deleteProduct = async () => {
  let del = await fetch(API_URL + id, {
    method: "DELETE",
    headers: {
      Authorization: `${AUTHORIZATION_KEY}`,
    },
  });
  if (del.ok) {
    alert("Product deleted");
  }
};
