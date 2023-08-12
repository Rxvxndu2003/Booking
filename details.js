var btn_done = document.querySelector(".btn_done");
btn_done.addEventListener("click", function (){
  window.location.href = "booking.html";
})


/*const userInputs = localStorage.getItem("userInputs");

  const newRow = ticketsTable.insertRow();
  const nameCell = newRow.insertCell(0);
  const contactCell = newRow.insertCell(1);
  const dateCell = newRow.insertCell(2);
  const durationCell = newRow.insertCell(3);
  const foreignerAdult = newRow.insertCell(4);
  const foreignerChild = newRow.insertCell(4);
  const slAdult = newRow.insertCell(4);
  const slChild = newRow.insertCell(4);
  const infant = newRow.insertCell(4);
  const priceCell = newRow.insertCell(6);

  function userInputs(){
    nameCell.innerHTML=localStorage.getItem("name");
    contactCell.innerHTML=localStorage.getItem("con_num");
    dateCell.innerHTML=localStorage.getItem("date");
    durationCell.innerHTML=localStorage.getItem("duration");
    foreignerAdult.innerHTML=localStorage.getItem("foreigner-adult");
    foreignerChild.innerHTML=localStorage.getItem("foreigner-child");
    slAdult.innerHTML=localStorage.getItem("sl-adult");
    slChild.innerHTML=localStorage.getItem("sl-child");
    infant.innerHTML=localStorage.getItem("infant");
    priceCell.innerHTML=localStorage.getItem("name");
}*/
const dot = localStorage.getItem("userInputs");
const at = JSON.parse(dot);

if (at) {
    for (const key in at) {
        const markup = `<tr>
        <th>${key}</th><td>${at[key]}</td>
        </tr>`;
        document.getElementById("tab1").innerHTML += markup;
     
     }
 }

const continueButton = document.getElementById("con_btn");

continueButton.addEventListener("click", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const contactNumber = document.getElementById("con_num").value;
  const gender = document.getElementById("geninput").value;
  const email = document.getElementById("email").value;
 
  const formData = {
  Name: name,
  Contact: contactNumber,
  Gender: gender,
  Email: email,
  };
  
  saveUserInputs(formData);
  
  function saveUserInputs(formData) {
  localStorage.setItem("formData", JSON.stringify(formData));
  }

  if (name === "") {
    alert("Please enter name.");
    return;
  }else if (con_num.value.trim() === "") {
    alert("Please enter phone number.");
    return;
  }else  if (email === "") {
    alert("Please enter email.");
    return;
  }
  



  window.location.href = "payement.html";
});


