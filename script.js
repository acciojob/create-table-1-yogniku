function insert_Row() {
    //Write your code here
	let table=document.getElementById("sampleTable")
   let btn = document.querySelector('input'); 
	let row=table.insert_row();
    row.insertCell(0).innerHTML=" New Cell1"
	row.insertCell(1).innerHTML=" New Cell2"
	

	
  
  
}
