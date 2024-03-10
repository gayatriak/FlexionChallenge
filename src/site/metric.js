function handleSubmit(form) {
  const url = "https://txa7kvacm3.execute-api.us-east-2.amazonaws.com/dev/test";
console.log("AAD", url);


  const fromUnit = form.fromUnit.value;      
  const toUnit = form.toUnit.value;
  const value = form.value.value;      
  const response = form.response.value;
 const body = [{ "value":value, "fromUnit": fromUnit, "toUnit": toUnit, "response" : response}]
console.log("FROM", body)
  fetch(
    url,
    {  
        mode:  'no-cors',          
        headers: { "Content-Type": "application/json" },            
        method: "POST",
        body: [{ "value":value, "fromUnit": fromUnit, "toUnit": toUnit, "response" : response}]
    }
   ).catch(error => console.error(error))
  .then(data => data.json())
  .then((json) => {
    alert(JSON.stringify(json));
       console.log("GOT HERE GAYATRI", data);
  });
  return false;
}