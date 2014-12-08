d.rf+=(on=/es/.exec(d.lng)?'es':'en')+'/'
function sp(v){var i,l
  v=v.split(' ')
  for(i in v)(l=lngs[v[i]]).s=l.s.split(' ')}
function s(v){for(i in v)v[i]=v[i].split('_');return v}
importScripts(d.rf+'rp'+j,d.rf+'faq'+j,d.rf+'um'+j,d.rf+'t&t_p'+j,d.rf+'rqlist'+j,d.rf+'vsch'+j,d.rf+'t&c_u'+j)
str={//structure
  'requirements list':s(rq),
  FAQs:s(faq),
  'user manual':s(um),
  'test & training plan':s(tp),
  'improvements':s(vr),
  'contact':rp,
  'terms & conditions of use':s(tc)}
lngs={//languages: title & SEND-BOX
  en:{
    t:'requirements list_FAQs_user manual_test & training plan_improvements_contact_terms & conditions of use',
    s:'type date recipient'},
  es:{
    t:'lista de requerimientos_preguntas frecuentes_manual del usuario_plan de prueba & entrenamiento_mejoras_contacto_terminos & codiciones de uso',
    s:'tipo fecha destinatario'}}
on&&(sp('en es'))