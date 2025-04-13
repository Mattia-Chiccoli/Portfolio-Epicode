const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/";
const AUTHORIZATION_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2ViOTM1YzNkZjMwMzAwMTUxNWE2NmYiLCJpYXQiOjE3NDQzNzUxMTUsImV4cCI6MTc0NTU4NDcxNX0.U3uO-WtN4tGwaSm_-zGVhuElbSirk33-bGbsLzX0D_E";
const parameters = new URLSearchParams(window.location.search);
const id = parameters.get("id");
window.onload = async () => {
  const data = await fetch(BASE_URL + id, {
    headers: {
      Authorization: `${AUTHORIZATION_KEY}`,
    },
  });
  const product = await data.json();
  const row = document.getElementById("products");
  row.innerHTML += `<div class="itemContainer">
                        <div class="d-flex justify-content-start w-75 mx-auto">
                          <a href="./backoffice.html?id=${product._id}" class="backofficeBtn text-decoration-none">Backoffice</a>
                        </div>
                        <h1 class="text-center mb-1">${product.name}</h1>
                        <p class="itemBrand mb-3">${product.brand}</p>
                        <p class="itemParagraphs">${product.description}</p>
                        <div class="d-flex justify-content-center align-items-center">
                          <div class="imgContainer">
                            <img class="itemImg img-fluid" src="${product.imageUrl}" alt="">
                            <div class="d-flex justify-content-evenly align-items-center w-75 mx-auto">
                                <p class="itemParagraphs mt-4">${product.price} euros</p>
                            </div>
                          </div>
                        </div>
                    </div>`;
};
