l='<br>',K='casa3d.hostzi.com'
//ⓘ version changes info
vr=['1.0 1.5_'+
  "using spaniard Ricardo Cabello aka Mr.doob's three.js library (rv61)",
  "House volume's 500x1200"+l+
  'Walls have been built',
'1.1 1.20_'+
'  New floor included (flat)'+l+
'    therefore 1st floor has become 2nd floor now'+l+
'    controls for moving and rotating element(per time) has been enabled'+l+
'    r: move up (++y)'+l+
'    v: move down (--y)'+l+
'    d: move to: left (++x)'+l+
'    f: move to: right (--x)'+l+
'    r: move forwards (++z)'+l+
'    v: move backwards (--z)'+l+
'    u: rotate up (++y)'+l+
'    n: rotate down (--y)'+l+
'    j: rotate to: left (++x)'+l+
'    k: rotate to: right (--x)'+l+
'    o: rotate forwards (++z)'+l+
'    l: rotate backwards (--z)'+l+
'    q: shifts between camera and current selected element',
'1.2 2.10_'+
'  Made room for windows inside walls'+l+
'  In order to save last camera position/rotation ck.js has been '+l+
'    created, tested and included (library which stores cookies in the web browser instead of connecting to database every time)',
'1.4 2.25_'+
'  Mapped with texture: walls, windows, doors, 1st floor and 2nd floor'+l+
'  In order to reduce source code written to Three.js, t.js has been'+l+
'    created, tested and included (library which parses incoming string/vector and returns geometric vertices (only supported by WebGLRenderer)'+l+
'  Stairs included',
'1.5 3.29_'+
'  Controls have undergone some changes (for good)'+l+
'  in order to become navigation friendlier move.js (using jQuery) has been'+l+
'    created, tested and included'+l+
'    scenario that is in front of you always will be your NORTH (even if you rotate)'+l+
'    r: enable/disable camera rotation'+l+
'    while r is enabled -180° (-Π) to the right and 180° (Π) to the left'+l+
'    +/-: increase/decrease speed of movement (but rotating speed)'+l+
'    arrow keys: left/right go in x axis, whilst up/down go in z'+l+l+
'    ctrl+arrow keys:'+l+
'     ctrl+up increases camera position in y (go up)'+l+
'     ctrl+down decreases camera position in y (go down)'+l+
'    since touchpad is blocked due to any arrow key (while being pressed), alt helps'+l+
'      alt: move forwards (perfect to navigate together with touchpad)'+l+
'      alt+ctrl: move backwards'+l+
'    shift+arrow keys:increse/decrease rotation of camera in 90° (Π/2)'+l+
'      shift+left:  ++y'+l+
'      shift+right: --y',
'1.6 4.10_'+
"  if's been minimized:"+l+
'    before:'+l+
'      true?callback():0'+l+
'    now:'+l+
'      true&&(callback())'+l+
'  //:0 false||do nothing||garbage'+l+
'  explanation:'+l+
"    x=0?5:4     //x=4 because 0 represents false that's why x isn't 5"+l+
'    ! equals to "contrary", !0=true whilst !1=!2=!3... false',
'1.7 4.21_'+
'  Nice transition added to rotation camera (shift+arrow key)'+l+
"  Updated Camera' y axis after rotating (because it was looking backwards)",
'1.8 4.29_'+
'  OOP (Object-Oriented Programming) has been supported/implemented to all libs, due to reduction of amount of variables into the code'+l+
'  each library stands for an object:'+l+
'    vectrix.js has v, ck.js has K, t.js has t, move.js has m, house.js (using jQuery) has h'+l+
'  in contrast it increases the amount of characters, though'+l+
'  // before: ck() now: K.ck()'+l+
"  callings to t.ad(), it's been changed because it only expected 1 parameter (string) therefore it'd to be called several times"+l+
'  before:'+l+
"    Scene.add(t.ad('1 2[door/0]'))"+l+
"    Scene.add(t.ad('1 2[door/1]'))"+l+
"    Scene.add(t.ad('1 2[door/2]'))"+l+
'  but now, it expects an object with 3 attributes {a:asset(s), p:parent, gp:grandpa}'+l+
'    a is an array or vector (which may be filled with strings)'+l+
'    p is a container or house'+l+
'   gp is the scene which holds all houses'+l+
'  now:'+l+
"    t.ad({['1 2[door/0]','1 2[door/1]','1 2[door/2]'],p:new T.Object3D,gp:t.s})"+l+
"   and when it's done t.ad add parent to grandpa if grandpa was sent"+l+
'  String variables containing Numbers passed to parseFloat'+l+'before: "5"'+l+'now: 5',
'1.9 5.2_'+
'  "superseded to IndexedDB en vr2.9"'+l+
"  Since page's loaded, ck.js SAVES Current Camera's Position and rotation in every onblur event (when it looses its focus or user shifts to another tab)"+
'  and when user decides to reload page.'+l+
'  you can make yourself sure, pressing "s" key, it saves current Camera\'s position & rotation',
'2.0 6.21_'+
'  application cache has been tested, fixed, approved and enabled'+l+
'    benefits:'+l+
'      before:'+l+
'        time loading web page:~4s (localhost)'+l+
'        accepts offline mode:NO'+l+
'        update:NO, it has to download WHOLE web-page (again and again)'+l+
'      now:'+l+
'        time loading web page:~2s'+l+
'        accepts offline mode:YES!'+l+
'        update: it only downloads WHOLE web-page when necessary',
'2.1 7.1_'+
'  in order to handle incoming assets xhr.js has been'+l+
'    created, tested and included'+l+
'      it instances a XMLHttpRequest, it requests first parameter (e.g. "file.js") and if statusText is OK then it proceeds to evaluate second parameter.'+l+
"      eval('t.ad(eval(this.response))') this.response will be vector"+l+
"      (eval function is deprecated though)",
'2.2 7.5_'+
'  in order to reduce the time loding web-page due to number of scripts inside head, filler.js has been created'+l+
'  before: 13'+l+
'  now: 1 "index.js" once page\'s loaded, it adds "filler.js"'+l+
"  when filler is absolutely loaded, in background it fills with rest of scripts to head and when it's done, it effaces any scripting traceback",
'2.3 7.7_'+
"  apache's been replaced to node.js' server, now working on localhost:3000"+l+
"  and an application's been created with express"+l+
'    jade as html'+l+
'    stylus as css',
'2.4 7.18_'+
"  detected conflict with ck lib, all cookies ended up to NaN because it's suppost to only be cookies with 1-6 order stored therein but since now it'll (co-exist) look for them first and gathered them into vector of 6 positions."+l+
"  updated rsz lib's cursor",
'2.5 7.31_'+
'  in order to drag and resize an object, drgNrsz.js (using jQuery) has been created, tested and approved; you can enable/disable it pressing m key, to drag or resize you\'ll have to go to object or object\'s border and drag',
'2.6 8.16_'+
'  ops.js (using all libraries) has been added; it brings to user controlling options:'+l+
'    1) display keyboard controls used in web-page: shift, control and arrows'+l+
'    2) toggle position of menu: docked right or bottom'+l+
'    3) add: houses and/or 6 kind of textures, each one holds 4x4 of its type'+
'      ceiling,door,floor,stairs,wall,window       //last tweak: 2014 10 27'+l+
'    4) add/import user texture/picture:           //last tweak: 24th'+l+
'    5) drag:   same as pressing m key'+l+
'    6) resize: same as pressing m key'+l+
'    7) rotate camera 90° to the left: Π/2 same as pressing shift+left'+l+
'    8) rotate camera 90° to the right: -Π/2 same as pressing shift+right'+l+
'    9)   reduce light intensity: (by -.15 till .15)   //since Mesh´s got...'+l+
'   10) increase light intensity: (by .15 till 1)  //...MeshLambertMaterial'+l+
'   11) activate/deactivate rotation: (when mouse moves) same as pressing "r" key'+l+
'   12) toggle screen mode: full and normal        //last tweak: 22nd'+l+
'   13) export house (using French Gildas Lormeau\'s zip.js library): as "casa# UTCdate.zip"       //last tweak: 2014 10 29'+l+
'   14) import house: as "casa# UTCdate.zip"       //last tweak: 2014 10 29'+l+
'   15) go to user support page: user can be heard, be updated and train himself'+l+
'   16) log out: stop and let things in stand-by //last tweak: 2014 10 20',
'2.7 9.9_'+
'  favicon designed in rw-designer.com and updloaded to '+K,
'2.8 9.21_'+
'  '+K+'/support is been created, tested, fixed, improved and released to public'+l+
"   it's multi purpose website including:"+l+
'     "your opinion is important": you as user can now report an error or suggest inprovement'+l+
'     "FAQs" you can now read the common, how to do? questions'+l+
'     "user manual" the abc about: keys, shortcuts, mouse'+l+
'     "test & training plan" with this option you\'ll learn and enhance your skill at the moment to recreate your house'+l+
'     "requirements list" inside it you\'ll notice what\'s best option to start working with'+l+
'     "development info" you\'ll be updated about log of development changes'+l+
'     "terms & conditions of use" you as user need to know the benefits and responsabilities that '+K+' has got for you',
'2.9 10.22_'+
'  (Sign up & Log in) "fieldset" has been prepended to index page'+l+
'  Cookies has been removed and IndexedDB has been implemented instead through idb.js'+l+
'   Indexed database stores basic information like:'+l+
"     a) last camera's position/rotation"+l+
"     b) last session (whether user's log out or not)"+l+
"     c) last support section (among 7)"+l+
"   In export option:"+l+
'     a) protocol data has been changed to blob'+l+
'     b) data result will be private'+l+
'     c) time awaiting while generating zip file has been redused significantly'+l+
'     d) casa# will depend on nearest house to camera position'+l+
'   In import option:'+l+
'     when new house comes, camera moves infront of it and a number is displayed above it']