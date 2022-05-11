function mostrarONoMenu(cuadrito){
	var opcion = document.getElementById(cuadrito)
	if (opcion.style.display == "none"){
		opcion.style.display = "block";
	}else if (opcion.style.display == "block") {
		opcion.style.display = "none";
	}
}





function unZero(i){
	if (i<10){
		i = "0" + i;
	}
return i;
}
function Horario() {

   
	var d = new Date();
	var h = unZero(d.getHours());
	var m = unZero(d.getMinutes());
	var s = unZero(d.getSeconds());
	var dia =(d.getDay());
	var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
	var mes = (d.getMonth());
	var meses = ['Enero' , 'Febrero' , 'Marzo' , 'Abril' ,'Mayo' ,'Junio', 'Julio' , 'Agosto', 'septiembre','Octubre','Noviembre','Diciembre']
var Actualidad = document.getElementById('Reloj')

 Actualidad.innerHTML ="<h1>" + h +':'+m +":"+ s+"<br> Suerte en este dia "+ semana[dia] + " del mes de "+meses[mes]+"</h1>"
        


}

setInterval(Horario,1000)









	function Ventanal() {
		var repe = 0;
		var ancho = (screen.width)
		var alto = screen.height
		var X = (ancho/2)-250
		var Y = (alto/2)-250
	
	

		var mensaje = ('Su Resolucion es de '+ ancho + ' X '+alto)

		var ventana = window.open('','',",titlebar=NO,menubar=NO,toolbar=NO,scrollbars=NO,resizable=NO,status=NO,top="+Y+",left="+X+",width=800px,height=600px")


		if (ancho<800){

		        ventana.document.write('<head><title>Elija sus opciones de acuerdo a su resolucion de pantalla </title>')
		        ventana.document.write('<link rel="stylesheet" type="text/css" href="Index_style.css">')
		       	ventana.document.write(' <link rel="stylesheet" type="text/css" href="fuente.css">')					
		        ventana.document.write('<script type="text/javascript" src="javee.js"></script>')
		        ventana.document.write('</head>')
		        ventana.document.write('<body style="overflow: hidden;">')
		        ventana.document.write('<header class="dos">')
		        ventana.document.write('<h1>Bienvenid@<br>Su resolucion es menor a 1200px</h1>')
		        ventana.document.write('<div id="Reloj" class="dos">')
		 		ventana.document.write('<script type="text/javascript">')
		        ventana.document.write('Horario()')
		        ventana.document.write('</script>')
		        ventana.document.write('</div>')
		       	ventana.document.write('</header>')
		       	ventana.document.write('<footer class="dos"><div >')
		       	ventana.document.write('<h5 ><a href="#" onclick="window.close()" style="display:block; width:700px; text-align:center; heigth:40px; color :#FFF; margin:-25px auto 0px auto;background-color: #000;">Continuar con el sitio</a></h5>')
		        ventana.document.write('<nav id="contacto2" style="float:none; width:700px;"><ul><li><a href="https://www.youtube.com/"><span class="icon-youtube"></span></a></li>')
		      	ventana.document.write('<li><a href="https://www.instagram.com/?hl=es-la"><span class="icon-github"></span></a></li>')
		        ventana.document.write('<li><a href="https://es-la.facebook.com/"><span class="icon-twitter"></span></a></li>')
		        ventana.document.write('<li><a href="https://es-la.facebook.com/"><span class="icon-facebook2"></span></a></li>')
		        ventana.document.write('<li><a href="https://es-la.facebook.com/"><span class="icon-linkedin"></span></a></li></ul></nav></div></footer>')
		        ventana.document.write('</body>')
		        
		}
		else if (ancho >= 800 && ancho <=1200)

		{
		        ventana.document.write('<head><title>Elija sus opciones de acuerdo a su resolucion de pantalla </title>')
		        ventana.document.write('<link rel="stylesheet" type="text/css" href="Index_style.css">')
		       	ventana.document.write(' <link rel="stylesheet" type="text/css" href="fuente.css">')					
		        ventana.document.write('<script type="text/javascript" src="javee.js"></script>')
		        ventana.document.write('</head>')
		        ventana.document.write('<body style="overflow: hidden;">')
		        ventana.document.write('<header class="dos">')
		        ventana.document.write('<h1>Bienvenid@<br>Su resolucion esta entre 800px a 1200px</h1>')
		        ventana.document.write('<div id="Reloj" class="dos">')
		 		ventana.document.write('<script type="text/javascript">')
		        ventana.document.write('Horario()')
		        ventana.document.write('</script>')
		        ventana.document.write('</div>')
		       	ventana.document.write('</header>')
		       	ventana.document.write('<footer class="dos"><div >')
		       	ventana.document.write('<h5 ><a href="#" onclick="window.close()" style="display:block; width:700px; text-align:center; heigth:40px; color :#FFF; margin:-25px auto 0px auto;background-color: #000;">Continuar con el sitio</a></h5>')
		        ventana.document.write('<nav id="contacto2" style="float:none; width:700px;"><ul><li><a href="https://www.youtube.com/"><span class="icon-youtube"></span></a></li>')
		      	ventana.document.write('<li><a href="https://www.instagram.com/?hl=es-la"><span class="icon-github"></span></a></li>')
		        ventana.document.write('<li><a href="https://es-la.facebook.com/"><span class="icon-twitter"></span></a></li>')
		        ventana.document.write('<li><a href="https://es-la.facebook.com/"><span class="icon-facebook2"></span></a></li>')
		        ventana.document.write('<li><a href="https://es-la.facebook.com/"><span class="icon-linkedin"></span></a></li></ul></nav></div></footer>')
		        ventana.document.write('</body>')
		        
		        

		}
		else if (ancho>1200)
		{
		        ventana.document.write('<head><title>Elija sus opciones de acuerdo a su resolucion de pantalla </title>')
		        ventana.document.write('<link rel="stylesheet" type="text/css" href="Index_style.css">')
		       	ventana.document.write(' <link rel="stylesheet" type="text/css" href="fuente.css">')					
		        ventana.document.write('<script type="text/javascript" src="javee.js"></script>')
		        ventana.document.write('</head>')
		        ventana.document.write('<body style="overflow: hidden;">')
		        ventana.document.write('<header class="dos">')
		        ventana.document.write('<h1>Bienvenid@<br>Su resolucion es mayor a 1200px</h1>')
		        ventana.document.write('<div id="Reloj" class="dos">')
		 		ventana.document.write('<script type="text/javascript">')
		        ventana.document.write('Horario()')
		        ventana.document.write('</script>')
		        ventana.document.write('</div>')
		       	ventana.document.write('</header>')
		       	ventana.document.write('<footer class="dos"><div >')
		       	ventana.document.write('<h5 ><a href="#" onclick="window.close()" style="display:block; width:700px; text-align:center; heigth:40px; color :#FFF; margin:-25px auto 0px auto;background-color: #000;">Continuar con el sitio</a></h5>')
		        ventana.document.write('<nav id="contacto2" style="float:none; width:700px;"><ul><li><a href="https://www.youtube.com/"><span class="icon-youtube"></span></a></li>')
		      	ventana.document.write('<li><a href="https://www.instagram.com/?hl=es-la"><span class="icon-github"></span></a></li>')
		        ventana.document.write('<li><a href="https://es-la.facebook.com/"><span class="icon-twitter"></span></a></li>')
		        ventana.document.write('<li><a href="https://es-la.facebook.com/"><span class="icon-facebook2"></span></a></li>')
		        ventana.document.write('<li><a href="https://es-la.facebook.com/"><span class="icon-linkedin"></span></a></li></ul></nav></div></footer>')
		        ventana.document.write('</body>')
		        


		}

			
	}
	
	
	
	


var tActual = 4;
function agrandarTexto(articulo){
	var tamanios = ['5px','8px','10px','12px','15px','17px','19px','21px','23px'];
	var texto = document.getElementById(articulo);

	if ( tActual < 9) {
		tActual ++}
	if (tActual == 9){
		alert('Tamaño maximo alcanzad0');
	}
	texto.style.fontSize = tamanios[tActual];

}
function achicarTexto(articulo){
	var tamanios = ['5px','8px','10px','12px','15px','17px','19px','21px','23px'];
	var texto = document.getElementById(articulo);

	if ( tActual >= 0) {
		tActual --
	}
	if (tActual == 0){
		alert('Tamaño minimo alcanzad0');
	}
	texto.style.fontSize = tamanios[tActual];

}








function validarFormu(){
	
	var nombre =document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var email = document.getElementById('email').value;
	var edad = document.getElementById('Edad').value;
	var consul = document.getElementById('Consulta').value;


if (nombre == null || nombre.length <= 2 || /^\s+$/.test(nombre))

{
        alert('El campo Nombre es requerido')
        return false
}       

else if (apellido == null || apellido.length <= 2 || /^\s+$/.test(apellido))
{
        alert('El campo Apellido es requerido')
        return false 
}
else if ( edad.length <1 || edad == null || edad.length >=3)
{
        alert('Ingrese un edad válida')
        return false
}
else if (!(/\S+@\S+\.\S+/.test(email)))

{
        alert('Ingrese un email válido')
        return false
}

else if (consul == null || consul.length <= 2 || /^\s+$/.test(consul)) 

{
        alert('El campo consulta es Requerido')
        return false

}       




        alert('Su consulta se ha enviado con exíto, a la brevedad será contactado')
        return true

}

