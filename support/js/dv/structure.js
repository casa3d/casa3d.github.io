d.rf+=(on=/es/.exec(d.lng)?'es':'en')+'/'
function sp(v){var i,l
  v=v.split(' ')
  for(i in v)(l=lngs[v[i]]).s=l.s.split(' ')}
function s(v){for(i in v)v[i]=v[i].split('_');return v}
importScripts(d.rf+'rp'+j,d.rf+'faq'+j,d.rf+'um'+j,d.rf+'t&t_p'+j,d.rf+'rqlist'+j,d.rf+'vsch'+j,d.rf+'t&c_u'+j)
str={//structure
  'your opinion is important':rp,
  FAQs:s(faq),
  'user manual':s(um),
  'test & training plan':s(tp),
  'list of requirements':s(rq),
  'development info':s(vr),
  'terms & conditions of use':s(tc)}
lngs={//languages: title & SEND-BOX
  en:{
    t:'your opinion is important_FAQs_user manual_test & training plan_list of requirements_development info_terms & conditions of use',
    s:'type date recipient'},
  es:{
    t:'su opinion es importante_Preguntas Frecuentes_manual del usuario_plan de prueba & entrenamiento_lista de requrimientos_informacion de desarrollo_terminos & codiciones de uso',
    s:'tipo fecha destinatario'}}
on&&(sp('en es'))