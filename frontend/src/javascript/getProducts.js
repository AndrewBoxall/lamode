export default function getProducts(fetchUrl) {
  let returnData;
  returnData = fetch(fetchUrl, {
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
  return returnData;
};
