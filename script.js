 function aggiungiItem(){
   document.getElementById("myP").style.display = "block";  
} 


function annulla(){
   document.getElementById("myP").style.display = "none";   
} 


function aggiungiRiga(id_table){
	var table = document.getElementById(id_table);
	var tbody = table.getElementsByTagName('tbody')[0];
	var colonne = table.getElementsByTagName('th').length;	
	var tr = document.createElement('tr');
    
    var td = document.createElement('td');
    var tx = document.createTextNode("nomeOggetto"));
    td.appendChild(tx);
    tr.appendChild(td);

    var td = document.createElement('td');
    var tx = document.createTextNode("quantita"));
    td.appendChild(tx);
    tr.appendChild(td);
	   // for(var i=0; i<colonne; i++){
		//var td = document.createElement('td');
		//var tx = document.createTextNode(prompt("Inserisci testo per cella "+(i+1),""));
		//td.appendChild(tx);
		//tr.appendChild(td);
	//} 
	tbody.appendChild(tr);
}



    