let shopDatasql; 

async function loadShopItemssql() {
  shopDatasql = await fetch('http://localhost:80/lamode/sqlcategories/all', {
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
  console.log(shopDatasql);
  return shopDatasql;
};

export { loadShopItemssql, shopDatasql };