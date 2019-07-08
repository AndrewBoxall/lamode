let shopData; 

async function loadShopItems() {
  shopData = await fetch('http://localhost:4000/lamode/categories/all', {
    method: "GET",
    mode: "cors",
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then((response) => {
    if (response.status !== 200 && response.status !== 201){
      throw new Error('Failed to fetch product data');
    }
    return response.json();
  })
  .then((jsonResponse) => {
    return(jsonResponse)
  })
  .catch((error) => {
    console.log(error);
  })
  //console.log(shopData);
  return shopData;
};

export { loadShopItems, shopData };