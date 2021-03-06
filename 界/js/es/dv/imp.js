l='<br>',K='casa3d.hostzi.com'
//ⓘ registro de mejoras de desarrollo
imp=['1.0 1.5_'+
  'usando la biblioteca three.js (rv61) del Español Ricardo Cabello aka Mr.doob',
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
'  t.js ha sido creado, probado e incluido con el fin de reducir la fuente de codigo escrita para Three.js'+l+
'     (biblioteca que examina y verifica proveniente cadena de texto/arreglo o vector y devuelve vertices geometricas (solo apoyado por WebGLRenderer (rendidor de cuentas WebGL))'+l+
'  Incluidas las escaleras',
'1.5 3.29_'+
'  Los controles han sufrido algunos cambios (para bien)'+l+
'  move.js (usando jQuery) ha sido creado, probado e incluido con el fin de convertir la navigacion mas amistosa o facil de manejar'+l+
'    '+l+
'    El escenario que esta en frente suyo siempre sera su NORTE (aun, si UD rotara)'+l+
'    r: habilita/deshabilita la rotacion de la camara'+l+
'    mientras r esté habilitado -180° (-Π) hacia la derecha y 180° (Π) hacia la izquierda'+l+
'    +/-: incrementa/decrementa la velocidad del movimiento (excepto velocidad de rotacion)'+l+
'    teclas direccionales: izquierda/derecha van en eje x, mientras que arriba/abajo van en z'+l+l+
'    ctrl+tecla direccional:'+l+
'     ctrl+arriba incrementa la posicion de la camara en y (sube)'+l+
'     ctrl+abajo decrementa la posicion de la camara en y (baja)'+l+l+
'    tecla alt ayuda, porque el mouse es bloqueado por alguna tecla direccional (mientras se presiona)'+l+
'      alt: mover hacia adelante (perfecto para navegar junto con el mouse)'+l+
'      alt+ctrl: mover hacia atras'+l+
'    shift+teclas direccionales: incrementa/decrementa la rotacion de la camara en 90° (Π/2)'+l+
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
'  OOP (Object-Oriented Programming) ha sido apoyado/implementado a todas las bibls, debido a la reduccion del monto de variables dentro del codigo'+l+
'  cada biblioteca representa un objeto:'+l+
'    vectrix.js tiene v, ck.js tiene K, t.js tiene t, move.js tiene m, house.js (usando jQuery) tiene h'+l+
'  aunque en contraste incrementa el monto de carácteres'+l+
'  // antes: ck() ahora: K.ck()'+l+
'  llamadas a t.ad(), ha sido cambiada porque solo esperaba 1 parametro (cadena de carácter) por lo tanto tenia que ser llamada muchas veces'+l+
'  antes:'+l+
"    Scene.add(t.ad('1 2[door/0]'))"+l+
"    Scene.add(t.ad('1 2[door/1]'))"+l+
"    Scene.add(t.ad('1 2[door/2]'))"+l+
'  pero ahora, espera un objeto con 3 atributos {a:asset(s), p:parent, gp:grandpa}'+l+
'    a es un arreglo o vector (que puede llenarse con cadena de carácter(es)'+l+
'    p es un contenedor o casa'+l+
'   gp es la escena que contendra todas las casas'+l+
'  ahora:'+l+
"    t.ad({['1 2[door/0]','1 2[door/1]','1 2[door/2]'],p:new T.Object3D,gp:t.s})"+l+
"   y cuando termina t.ad añade el papa al abuelo solo si abuelo fue enviado"+l+
'  Variables cadena de carácter conteniendo Numeros son pasados por parseFloat'+l+'antes: "5"'+l+'ahora: 5',
'1.9 5.2_'+
'  "reemplazado por IndexedDB en vr2.9"'+l+
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
"      eval('t.ad(eval(this.response))') this.response sera un arreglo o vector"+l+
'      (aunque eval funcion es obsoleta o desaprobada)',
'2.2 7.5_'+
'  filler.js ha sido creado, con el fin de reducir el tiempo de carga de la pagina debido al numero de scripts dentro de head'+l+
'  antes: 13'+l+
'  ahora: 1 "index.js" una vez cargada la pagina agrega "filler.js"'+l+
'  cuando filler es absolutamente cargado, detras de escenas filler llena a head con el resto de scripts y cuando termina, borra cualquier rastro de scripts que haya',
'2.3 7.7_'+
'  apache ha sido reemplazado por el servidor de node.js, trabajando ahora sobre localhost:3000'+l+
'  y ha sido creada una aplicacion con express'+l+
'    jade como html'+l+
'    stylus como CSS',
'2.4 7.18_'+
'  conflicto detectado con bibl ck, toda las cookies terminaban en NaN porque se suponia que debe haber solo cookies con el order 1-6 almacenadas allí adentro pero desde ahora co-existira buscandolas primero y recogiendolas dentro de un arreglo o vector de 6 posiciones.'+l+
'  Actualizado el cursor de la bibl rsz',
'2.5 7.31_'+
'  drgNrsz.js (usando jQuery) ha sido creado, probado y aprobado; UD puede habilitarla/deshabilitarla presionando la tecla m, con el fin de arrastrar y rejustar el tamaño de un objeto UD necesitara ir al objeto o a la esquina de este y arrastrar',
'2.6 8.16_'+
'  ops.js (usando todas las bibliotecas) ha sido añadido; brinda al usuario opciones de control:'+l+
'    1) mostrar controles del teclado usados en la pagina: shift, control y direccionales'+l+
'    2) alternar posicion del menu: puesto en la parte derecha o abajo'+l+
'    3) añadir: casas y/o 6 clases de texturas, cada una contiene 4x4 de su tipo'+
'      techo,puerta,piso,escaleras,pared,ventana               //ultimo ajuste: 2014 10 27'+l+
'    4) añadir/importar la textura/foto del usuario:           //ultimo ajuste: dia 24'+l+
'    5) arrastrar:   lo mismo que presionar la tecla "m"'+l+
'    6) reajustar tamaño: lo mismo que presionar la tecla "m"'+l+
'    7) rotar la camera 90° hacia izquierda: Π/2 lo mismo que presionar shift+izquierda'+l+
'    8) rotar la camera 90° hacia derecha: -Π/2 lo mismo que presionar shift+derecha'+l+
'    9)     reducir la intensidad de la luz: (por -.15 hasta .15)   //desde que Mesh tenga...'+l+
'   10) incrementar la intensidad de la luz: (por .15 hasta 1)  //...MeshLambertMaterial'+l+
'   11) activar/desactivar rotacion: (cuando el mouse se mueve) lo mismo que presionar "r" key'+l+
'   12) alternar modo de pantalla: completa y normal            //ultimo ajuste: dia 22'+l+
'   13) exportar casa (usando la biblioteca zip.js del Frances Gildas Lormeau): como "casa# UTCdate.zip"                 //ultimo ajuste: 2014 10 29'+l+
'   14) importar casa (usando zip.js): como "casa# UTCdate.zip"                 //ultimo ajuste: 2014 10 29'+l+
'   15) ir a la pagina de apoyo al usuario: el usuario puede ser oido, estar actualizado y adiestrarse'+l+
'   16) cerrar sesion: parar y dejar las cosas en espera        //ultimo ajuste: 2014 10 20',
'2.7 9.9_'+
'  favicon diseñado en rw-designer.com y subido a '+K,
'2.8 9.21_'+
'  '+K+'/support ha sido creada, probada, arreglada, mejorada y lanzada al publico'+l+
'   es un sitio web multi proposito con 7 secciones:'+l+
'     "Lista de Requerimientos" dentro de la lista te daras cuenta cual es la mejor opcion para empezar a trabajar'+l+
'     "FAQs" ahora puedes leer las preguntas comunes, como se hace?'+l+
'     "Manual del Usuario" el abc de: teclas, atajos,  mouse'+l+
'     "Plan de Prueba & Entrenaminiento" con esta opcion aprenderas y afianzaras tus habilidades en el momento de recrear tu casa'+l+
'     "Mejoras" te actualizaras con el Registro de las Mejoras de Desarrollo'+l+
'     "Contacto": tu como usuario ahora puedes reportar un error o sugerir una mejora'+l+
'     "Periodo & sus Condicions de uso" tu como usuario necesitas conocer los beneficios y responsabilidades que '+K+' tiene para ti',
'2.9 10.22_'+
'  (Registro & Inicio de sesion) "conjunto de campos" ha sido agregado de primeras dentro de la pagina indice'+l+
'  Cookies han sido retiradas y a cambio IndexedDB ha sido implementada mediante idb.js'+l+
'   Indexed database almacena informacion basica como:'+l+
'     a) ultima posicion/rotacion de la camara'+l+
'     b) ultima sesion (si el usuario cerro sesion o no)'+l+
'     c) ultima seccion de apoyo (entre 7)'+l+
'   En la opcion de exportacion:'+l+
'     a) el protocolo data ha sido cambiado por blob, es decir:'+l+
'     b) el resultado de los datos seran privados'+l+
'     c) el tiempo esperando para generar el archivo zip ha tenido una reduccion importante'+l+
'     d) casa# dependera de la casa mas cercana a la posicion actual de la camara'+l+
'   En la opcion de importacion:'+l+
'     cuando una nueva casa llega, la camara se mueve enfrente de ella y un numero es mostrado encima','3.0 11.13_'+'filler.js ha sido mejorado (usando zip.js):'+l+'ahora va a añadir dentro de head casi todos los scripts necesarios extraidos de "lbs.zip"'+l+'esto significa que:'+l+'el tamaño de la pagina se ha reducido un 33.33%'+l+'antes: ~1.2MB'+l+'ahora: ~800kb',
'3.1 11.29_'+
'  Metro-Style ha sido sido implementado.'+l+
'  ahora hay 3 secciones (API, Cuenta, Apoyo)'+l+
'  API:'+l+
'  Usted sera capaz de integrar casa3d a su sitio web (mire la seccion de API para saber como)'+l+
'  Cuenta:'+l+
'  hay dos secciones comunes: iniciar sesion & registrarse'+l+
'  Apoyo:'+l+
'  las 7 secciones de la pagina de apoyo externa'+l+l+
'  CSS extra'+l+
'  Estoy orgulloso de anunciar que, todos los CSS extras seran adheridos literalmente al primer document.styleSheets o al elemento por defecto "new style tag" usando insertRule',
'3.2 1.8_'+
'  Context Menu (clic derecho) añadido a canvas, tiene 6 opciones:'+l+
'  cambiar foto, borrar objeto, rotar objeto hacia: arriba, izquierda, derecha, abajo'+l+
'  Video tutoriales han sido incluidos a la seccion "Plan de Entrenamiento".'+l+
'  Ha sido apoyada la font-family "Segoe UI Symbol" ya que está interpreta todos los glifos',
'3.3 2.28_'+
'  Todos los menus de edición han sido actualizados ya que ahora el usuario tendra a su dispocision el 99% de la pantalla'+l+
'  Menu Foto-Miniaturas:'+l+
'   cuenta con descripción util como su nombre y tamaño'+l+
'   van entrelazados en un fondo blanco, negro incluyendo el canal α (transparencia)'+l+l+
'  Ahora la intensidad de la luz se ajustará mediante una entrada de tipo rango'+l+
'  se agregó 2 nuevas opciones: Alternar entre camaras y Configurar su velocidad'+l+
'  la posición y rotación de la camara estan a la dispocíon del usuario']