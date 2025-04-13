const API_URL = "https://striveschool-api.herokuapp.com/api/product/";
const AUTHORIZATION_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2ViOTM1YzNkZjMwMzAwMTUxNWE2NmYiLCJpYXQiOjE3NDM0OTE5MzIsImV4cCI6MTc0NDcwMTUzMn0.HCLsueTGDgQ2EJSSRvVOan2ZNs8rdk3dIo5CYSr0mAY";

window.onload = async () => {
  const result = await fetch(API_URL, {
    headers: {
      authorization: `${AUTHORIZATION_KEY}`,
    },
  });
  const products = await result.json();
  const row = document.getElementById("products");
  products.map((product) => {
    row.innerHTML += `<div class='col col-3 col-lg-3 col-md-4 col-sm-6 col-sm-12 mb-4'>  
      <div class="card justify-content-between">
        <img src="${product.imageUrl}" class="card-img-top" alt="${product._id}_${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <a href="html/details.html?id=${product._id}" class="btn card-btn">Details</a>
        </div>
      </div> 
    </div>`;
  });
};
