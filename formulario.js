let openModal = document.getElementById('openModal');
let modalForm = document.getElementById('modal');
let closeModal = document.getElementById('close');
let closeModal2 = document.getElementById('close2');


//abrir modal

openModal.onclick = function() {
	modalForm.style.visibility = "visible";

}

// cerrar modal

closeModal.onclick = function(){
	modalForm.style.visibility = "hidden";
	alert("Pedido realizado con exito!");

}
closeModal2.onclick = function(){
	modalForm.style.visibility = "hidden";
	alert("Pedido cancelado");

}