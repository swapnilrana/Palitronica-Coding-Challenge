async function calculateFinalPrice() {
  var customerId = document.getElementById("custId").value; 
  
  var validationErrMsg = validateRequest(customerId, itemQuantity);
  if(validationErrMsg.length > 0)
  {
	  alert(validationErrMsg);
	  return;
  }
var AllProductPriceTotal = 0;
var AllTaxTotal = 0;
  for(var i = 1; i < 5; i++)
  {
	  var itemQuantity = document.getElementById(`quantity${i}`).value;
	  console.log(itemQuantity);
	  var respData = "";
	  var resultOfService = false;
	  resultOfService = await fetch(`http://localhost:4000/api/listing/GetProductCost/${i}/${itemQuantity}/${customerId}`)
	  .then((response) => response.json())
	  .then((data) => {
		respData = data;
		console.log('Success:', respData);
		if(data.message != undefined){
			alert("Error while calling service. Please click again");
			return false;
		}
		
		AllProductPriceTotal += data.totalPrice;
		AllTaxTotal += data.totalTax;
		document.getElementById("resultCustName").innerHTML = data.customerName;
		document.getElementById(`resultTotalPriceProduct${i}`).innerHTML = data.totalPrice;
		document.getElementById("resultTotalTax").innerHTML = AllTaxTotal;
		document.getElementById("resultTotalPrice").innerHTML = AllProductPriceTotal;
		if(i == 4){
			var x = document.getElementById("resultSection");
			x.style.display = "block";
		}
		return true;
	  })
	  .catch(function(error) {
		  console.log(error);
	  }); 
	  if(!resultOfService){
		  break;
	  }
  }	
}

function validateRequest(custId, quantity){
	var inValidReqMsg = "";
	if(custId.length == 0)
	{ 
		inValidReqMsg = "Please select valid customer. Customer id ranges from 1 to 4 \n";	
	}
	else if(custId == 0 || custId > 4)
	{ 
		inValidReqMsg = "Please select valid customer. Customer id ranges from 1 to 4 \n";
	}
	return inValidReqMsg;
}