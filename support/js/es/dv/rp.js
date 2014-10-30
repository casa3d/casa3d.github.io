rp={//🙋 su opinion es importante
    // reportar un error o sugerir una mejora
  h4:"En el momento de reportar un error o sugerir una mejora, UD deberia tener encuenta que existen varios tipos de actividades (vea detalles)",
  details:{
    fieldset:{
      adaptive:'cuando se encuentra en otro ambiente (i.e. diferente navegador web, sistema operativo)',
      perfective:'proponer o cambiar una opción de la página',
      corrective:'la página funciona pero dentro de ella se encuentra alguna falla o defecto (que termina siendo inoperable)',
      preventive:'planificar posibles situaciones inesperadas/futuras con el fin de que la página no se vea afectada. (e.g. actualizaciones de las dependencias de la página, la disponibilidad del servidor o de los recursos)'}},
  fieldset:{
    type:'adaptivo perfectivo correctivo preventivo otro'.split(' '),
    date:'input id=dt type=date placeholder=YYYY-MM-DD',
    '@':"input type=email placeholder='escriba su E-mail' spellcheck=false",
    recipient:'bugs support designer developer administrator'.split(' '),
    textarea:" style=height:250px;width:92% placeholder='cuentanos todos los detalles'",
    button:" title='Enviarlo Ahora?' id=send"}}