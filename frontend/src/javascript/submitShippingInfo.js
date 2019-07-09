export default function sendShippingInfo(dataToSend) {
  let submitResult = fetch('http://localhost:80/lamode/submitShippingAndBillingInfo', {
    method: "POST",
    mode: "cors",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({billingInfo: dataToSend})
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
  console.log(submitResult);
  return submitResult;
};