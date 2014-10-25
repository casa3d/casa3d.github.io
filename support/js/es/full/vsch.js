l='<br>',K='casa3d.hostzi.com'
//ⓘ info de cambios de version
vr=['1.0 1.5_'+
  'Volumen de la casa 500x1200'+l+
  'Paredes han sido construidas',
'1.1 1.20_'+
'  Nuevo piso incluido (plano)'+l+
'    por lo tanto ahora el 1er piso se ha convertido en 2do piso'+l+
'    controles para mover y rotar un elemento (a la vez) han sido habilitados'+l+
'    r: mover arriba (++y)'+l+
'    v: mover abajo (--y)'+l+
'    d: mover hacia la: izquierda (++x)'+l+
'    f: mover hacia la: derecha (--x)'+l+
'    r: mover adelante (++z)'+l+
'    v: mover atras (--z)'+l+
'    u: rotar arriba (++y)'+l+
'    n: rotar abajo (--y)'+l+
'    j: rotar hacia la: izquierda (++x)'+l+
'    k: rotar hacia la: derecha (--x)'+l+
'    o: rotar adelante (++z)'+l+
'    l: rotar atras (--z)'+l+
'    q: cambia entre camara y elemento actual seleccionado',
'1.2 2.10_'+
'  Se hizo espacio para las ventanas dentro de las paredes'+l+
'  ck.js ha sido creado, probado e incluido con el fin de'+
'     guardar la ultima posicion/rotacion de la camara (biblioteca que almacena cookies en el navegador web en vez de conectar a la base de datos cada vez)',
'1.4 2.25_'+
'  Trazado con textura: parades, ventanas, puertas, 1er piso y 2do piso'+l+
'  t.js ha sido creado, probado e incluido con el fin de reducir la fuente de codigo'+l+
'     (biblioteca que examina y verifica proveniente cadena de texto/arreglo-vector y devuelve vertices geometricas (solo apoyado por WebGLRenderer (rendidor de cuentas WebGL))'+l+
'  Incluidas las escaleras',
'1.5 3.29_'+
'  Los controles han sufrido algunos cambios (para bien)'+l+
'  move.js ha sido creado, probado e incluido con el fin de convertir la navigacion mas amistosa o facil de manejar'+l+
'    '+l+
'    El escenario que esta en frente suyo siempre sera su NORTE (aun, si UD rota)'+l+
'    r: habilita/deshabilita la rotacion de la camara'+l+
'    mientras r esté habilitado -180deg (-PI/2) hacia la derecha y 180deg (PI/2) hacia la izquierda'+l+
'    +/-: incrementa/decrementa la velocidad del movimiento (excepto velocidad de rotacion)'+l+
'    teclas direccionales: izquierda/derecha van en eje x, mientras que arriba/abajo van en z'+l+l+
'    ctrl+tecla direccional:'+l+
'     ctrl+arriba incrementa la posicion de la camara en y (sube)'+l+
'     ctrl+abajo decrementa la posicion de la camara en y (baja)'+l+l+
'    tecla alt ayuda, porque el mouse es bloqueado por alguna tecla direccional (mientras se presiona)'+l+
'      alt: mover hacia adelante (perfecto para navegar junto con el mouse)'+l+
'      alt+ctrl: mover hacia atras'+l+
'    shift+teclas direccionales: incrementa/decrementa la rotacion de la camara en 90deg (PI/2)'+l+
'      shift+izquierda:  ++y'+l+
'      shift+derecha: --y',
'1.6 4.10_'+
'  if ha sido minimizado:'+l+
'    antes:'+l+
'      true?callback():0'+l+
'    ahora:'+l+
'      true&&(callback())'+l+
'  //:0 false||no hace nada||garbage'+l+
'  explicacion:'+l+
'    x=0?5:4     //x=4 porque 0 representa false por eso es que x no es 5'+l+
'    ! es igual a "contrario", !0=true mientras que !1=!2=!3... false',
'1.7 4.21_'+
'  Buena transición añadida a la rotacion de la camara (shift+tecla direccional)'+l+
'  Actualizado el eje y de la camara despues de rotar (porque estaba mirando hacia atras)',
'1.8 4.29_'+
'  OOP (Object-Oriented Programming) ha sido apoyado/implementado a todas las 5 bibls, debido a la reducion del monto de variables dentro del codigo'+l+
'  cada biblioteca tiene su propio objeto:'+l+
'    vectrix.js tiene v, ck.js tiene K, t.js tiene t, mover.js tiene m, index.js tiene h //Casa/Hogar'+l+
'  aunque en contraste incrementa el monto de carácteres'+l+
'  // antes: ck() ahora: K.ck()'+l+
'  Callbacks de ad() (funcion de la bibl. t.js) ha sido cambiada porque solo esperaba 1 parametro (cadena de carácter) por lo tanto tenia que ser llamada acerca de 66 veces'+l+
'      Scene.add(new T.AmbientLight())'+l+
"      Scene.add(t.ad('1 2[door/0]'))"+l+
"      Scene.add(t.ad('1 2[door/1]'))"+l+
"      Scene.add(t.ad('1 2[door/2]'))"+l+    //...66
'  pero ahora, espera un arreglo-vector (que puede llenarse con cadena de carácter(es) u objecto(s) ademas añade la figura a la escena.'+l+
'      t.s=Scene'+l+
"      t.ad([new T.AmbientLight(),'1 2[door/0]','1 2[door/1]','1 2[door/2]'])"+l+l+
'  Variables cadena de carácter conteniendo Numeros son pasados por parseFloat'+l+'antes: "5"'+l+'ahora: 5',
'1.9 5.2_'+
'  desde que la pagina termine de cargar, ck.js GUARDA la Posicion actual de la camara  y rotacion en cada onblur event (cuando pierde su enfoque o el usuario cambia a otra pestaña)'+
'  y cuando el usuario decide volver a cargar la pagina.'+l+
'  UD mismo puede asegurarse, presionando tecla "s", para guarda la posicion & rotacion actual de la camara',
'2.0 6.21_'+
'  application cache ha sido probada, arreglada, aprobada y habilitada'+l+
'    beneficios:'+l+l+
'      antes:'+l+
'        tiempo cargando la pagina web:~4s (localhost)'+l+
'        acepta modo offline:NO'+l+
'        actualizacion:NO, tiene que descargar la pagina-web ENTERA (una y otra vez)'+l+l+
'      ahora:'+l+
'        tiempo cargando la pagina web:~2s'+l+
'        acepta modo offline:SI!'+l+
'        actualizacion: solo descarga la pagina-web ENTERA cuando es necesario',
'2.1 7.1_'+
'  xhr.js ha sido creado, probado e incluido con el fin de manejar recursos provenientes'+l+
'      Éste crea un nuevo caso o instancia un nuevo objeto XMLHttpRequest'+l+
'solicita el primer parametro (ej. "archivo.js") y si statusText es OK entonces procede a evaluar el segundo parametro.'+l+
"      eval('t.ad(eval(this.response))') this.response sera un arreglo-vector"+l+
'      (aunque eval funcion es obsoleta or desaprobada)',
'2.2 7.5_'+
'  filler.js ha sido ubicado dentro de head, con el fin de reducir el numero de scripts que contiene (8)'+l+
'  una vez la pagina ha terminado de cargar, en pleno vuelo, este llena a head con todos los scripts necesarios y cuando termina, borra cualquier rastro que haya en head',
'2.3 7.7_'+
'  apache ha sido reemplazado con server express de node.js, trabajando ahora sobre localhost:3000'+l+
'  y ha sido creada una aplicacion con express'+l+
'    jade como html'+l+
'    stylus como css',
'!2.4 7.18_'+
'  !conflicto detectado con bibl ck, toda las cookies terminaban en NaN porque se suponia que debe haber solo cookies con el order 1-6 almacenadas allí adentro pero desde ahora co-existira buscandolas primero y recogiendolas dentro de un arreglo-vector de 6 posiciones.'+l+
'  Actualizado el cursor de la bibl rsz',
'2.5 7.31_'+
'  drgNrsz.js ha sido creado, probado y aprobado; UD puede habilitarla/deshabilitarla presionando la tecla "m", con el fin de arrastrar y rejustar el tamaño de un objeto UD necesitara ir al objeto o a la esquina de este y arrastrar',
'2.6 8.16_'+
'  ops.js ha sido creado, probado y añadido; brinda al usuario 10 opciones basicas de control:'+l+
'    1:añadir          //6 texturas diferentes, cada una contiene 4x4 de su tipo'+
'      techo, puerta, piso, escaleras, pared, ventana   //finalizado el 25'+l+
'    2:arrastrar&reajustar                       //lo mismo que presionar tecla m'+l+
'    3:cambiar foto                             //finalizado el 24'+l+
'    4:activar/desactivar la rotacion (cuando el mouse se mueve) lo mismo que presionar tecla r'+l+
'    5:rotar la camara 90° hacia la izquierda Π lo mismo que presionar shift+izquierda'+l+
'    6:rotar la camara 90° hacia la derecha -Π lo mismo que presionar shift+derecha'+l+
'    7:decrementa intensidad de la luz (by -.15 hasta 0)//desde que Mesh tenga...'+l+
'    8:incrementa intensidad de la luz (by .15 hasta 1)//...MeshLambertMaterial'+l+
'    9:exportar casa (como casa3d.js dentro de zip)  //finalizado el 23'+l+
'   10:alterna modo pantalla completa o normal//finalizado el 22',
'2.7 9.9_'+
'  favicon diseñado en rw-designer.com y subido a '+K,
'2.8 9.21_'+
'  support.'+K+' ha sido creada, probada, arreglada, mejorada y lanzada al publico'+l+
'   es un sitio web multi proposito con 7 secciones:'+l+
'     "tu opinion es importante": tu como usuario ahora puedes reportar un error o sugerir una mejora'+l+
'     "FAQs" ahora puedes leer las preguntas comunes, como se hace?'+l+
'     "manual del usuario" el abc acerca the teclas, atajos,  mouse'+l+
'     "plan de prueba & entrenaminiento" con esta opcion aprenderas y afianzar tus habilidades en el momento de recrear tu casa'+l+
'     "lista de requeremients" dentro de esa lista te daras cuenta cual es la mejor opcion para empezar a trabajar'+l+
'     "info de desarrollo" puedes informarte acerca del registro de los cambios de '+K+l+
'     "terminos & condicions de uso" tu como usuario necesitas conocer que beneficios y responsabilidades '+K+' tiene para ti',
'2.9 10.22_'+
'  (Registro & Inicio de sesion) "conjunto de campos" ha sido agregado de primeras dentro de la pagina indice'+l+
'  Cookies han sido retiradas y a cambio IndexedDB ha sido implementada'+l+
'   Indexed database almacena informacion basica como:'+l+
'     a) ultima posicion/rotacion de la camara'+l+
'     b) ultima sesion (si el usuario ya se ha registrado o no)'+l+
'     c) ultima seccion de apoyo (entre 7)'+l+
'   En la opcion de exportacion, el protocolo dataURL ha sido cambiado por blob, es decir:'+l+
'     a) el resultado de los datos seran privados'+l+
'     b) el tiempo esperando para generar el archivo zip ha tenido una reduccion importante'+l+
'     c) comparaciones:'+l+
'       antes:'+l+
'         si el archivo es menor de ~15kb entonces gastara ~10s, que tal 1mb... (debido a los datos del mismo)'+l+
'       ahora:'+l+
'         si el tamaño del archivo es ~1mb entonces gastara ~5s']