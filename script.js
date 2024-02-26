function insert_Row() {
    //Write your code here
	let table=document.getElementById("sampleTable")
   let btn = document.querySelector('input'); 
	let row=table.insertRow();
    row.insertCell(0).innerHTML="New cell1"
	row.insertCell(1).innerHTML="New cell2"

  
}
