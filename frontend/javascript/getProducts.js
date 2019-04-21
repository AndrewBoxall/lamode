export default function getProducts(fetchUrl) {
  //connect to localhost:4000 and do this from there instead
  //alert('here1');
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
    //alert('here2respone: ' + response);
    return response.json();
  })
  .then((jsonResponse) => {
    //alert('here3response: ' + JSON.stringify(jsonResponse));
    return(jsonResponse)
  })
  .catch((error) => {
    console.log(error);
  })
  return returnData;
};
