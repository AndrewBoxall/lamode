export default function createSession() {
  let returnData;
  returnData = fetch('http://localhost:80/lamode/createSession', {
    method: "GET",
    mode: "cors",
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then((response) => {
    if (response.status !== 200 && response.status !== 201){
      throw new Error('Failed to fetch session key');
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
