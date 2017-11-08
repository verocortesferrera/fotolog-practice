var btn = document.getElementById('btn');

//evento al hacer clic

btn.addEventListener('click', function(){
	//guardar div contenedor posteo

	var containerPost = document.getElementById('contenedor-posteos');

	//rescatar textos que ingreso el usuario en el input y textarea
	var name = document.getElementById('nombre').value;

	//limpio el input  para que no se guarde
	document.getElementById('nombre').value = '';

	var comment= document.getElementById('cajaposteos').value;
	//crear elementos necesarios del contenedor de nuevos posteos

	//limpio el comentario tambien para que no se guarde
	document.getElementById('cajaposteos').value = "";

	var post = document.createElement('div');
	//strong del nombre
	var elementName = document.createElement('strong');
	//crear el parrafo

	var elementComment = document.createElement('p');
	//para separar entre el nombre y comentario un elemento hr
	var elementLine = document.createElement('hr');

	//creo nodo de textos para unir de hijo
	var nodoTextName = document.createTextNode(name);
	var nodoTextComment = document.createTextNode(comment);

	//aca hacemos appendchild
	elementName.appendChild(nodoTextName);
	elementComment.appendChild(nodoTextComment);

	//guardar en el contenedor div que hicimos que se llama post
	post.appendChild(elementName);
	post.appendChild(elementLine);
	post.appendChild(elementComment);

	//a post vamos agregar una clase guardada en el css
	post.setAttribute('class','posteo');

	containerPost.appendChild(post)

	var counter = document.getElementById('counter-characters');

	counter.innerHTML = '<span>Hermààààn@ eScRiBiSTèèèè --></span>'+ 0 +'<span><-- caRàààCTeREzzZZz oe ZZzzZììììì</span>';

});


//contador traer el text area
var textArea = document.getElementById('cajaposteos');
//llamo a la funcion que quiero hacer
textArea.onkeyup = function(){
	//rescatamos el valor del textarea
	var comment = document.getElementById('cajaposteos').value;
	//sacamos longitud de ese mensaje

	var long = comment.length;
	//vamos a rescatar el conter parrafo mas span

	var counter = document.getElementById('counter-characters');

	//sobreescribir
	counter.innerHTML = '<span>Hermààààn@ eScRiBiSTèèèè --> </span>' + long + '<span><-- caRàààCTeREzzZZz oe ZZzzZììììì</span>';

};