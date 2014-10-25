l='<br>',K='casa3d.hostzi.com'
//ⓘ version changes info
vr=['1.0 1.5_'+
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
'    created, tested and included (library which stores cookies in the web browser instead of connecting to database everytime)',
'1.4 2.25_'+
'  Mapped with texture: walls, windows, doors, 1st floor and 2nd floor'+l+
'  In order to reduce source code t.js has been'+l+
'    created, tested and included (library which parses incoming string/vector and returns geometric vertices (only supported by WebGLRenderer)'+l+
'  Stairs included',
'1.5 3.29_'+
'  Controls have undergone some changes (for good)'+l+
'  in order to become navigation friendlier move.js has been'+l+
'    created, tested and included'+l+
'    scenario that is in front of you always will be your NORTH (even if you rotate)'+l+
'    r: enable/disable camera rotation'+l+
'    while r is enabled -180deg (-PI/2) to the right and 180deg (PI/2) to the left'+l+
'    +/-: increase/decrease speed of movement (but rotating speed)'+l+
'    arrow keys: left/right go in x axis, whilst up/down go in z'+l+l+
'    ctrl+arrow keys:'+l+
'     ctrl+up increases camera position in y (go up)'+l+
'     ctrl+down decreases camera position in y (go down)'+l+
'    since touchpad is blocked due to any arrow key (while being pressed), alt helps'+l+
'      alt: move forwards (perfect to navigate together with touchpad)'+l+
'      alt+ctrl: move backwards'+l+
'    shift+arrow keys:increse/decrease rotation of camera in 90deg (PI/2)'+l+
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
'  OOP (Object-Oriented Programming) has been supported/implemented to all 5 libs, due to reduction of amount of variables into the code'+l+
'  each library has its own object:'+l+
'    vectrix.js has v, ck.js has K, t.js has t, move.js has m, index.js has h //House/Home'+l+
'  in contrast it increases the amount of characters, though'+l+
'  // before: ck() now: K.ck()'+l+
"  Callbacks of ad() (function from Lib. t.js) have changed since it only expected 1 parameter (string) therefore it'd to be called about 66 times"+l+
'      Scene.add(new T.AmbientLight())'+l+
"      Scene.add(t.ad('1 2[door/0]'))"+l+
"      Scene.add(t.ad('1 2[door/1]'))"+l+
"      Scene.add(t.ad('1 2[door/2]'))"+l+    //...66
'  but now, it expects a vector (wich may be filled with either string(s) or object(s) furthermore it adds shape to scene.'+l+
'      t.s=Scene'+l+
"      t.ad([new T.AmbientLight(),'1 2[door/0]','1 2[door/1]','1 2[door/2]'])"+l+l+
'  String variables containing Numbers passed to parseFloat'+l+'before: "5"'+l+'now: 5',
'1.9 5.2_'+
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
'  in order to reduce number of scripts (8) inside head, filler.js has been place there instead'+l+
"  once page's finished loading, it fills head on the fly with all necessary scripts and when it's done, it deletes any traceback in head",
'2.3 7.7_'+
"  apache's been replaced with node.js' express server, now working on localhost:3000"+l+
"  and an application's been created with express"+l+
'    jade as html'+l+
'    stylus as css',
'!2.4 7.18_'+
"  !detected conflict with ck lib, all cookies ended up to NaN because it's suppost to only be cookies with 1-6 order stored therein but since now it'll (co-exist) look for them first and gathered them into vector of 6 positions."+l+
"  updated rsz lib's cursor",
'2.5 7.31_'+
'  in order to drag and resize an object, drgNrsz.js has been created, tested and approved; you can enable/disable it pressing "m" key, to drag or resize you\'ll have to go to object or object\'s border and drag',
'2.6 8.16_'+
'  ops.js has been added; it brings to user 10 basic controlling options:'+l+
'    1:add,          //6 different textures, each one holds 4x4 of its type'+
'      ceiling,door,floor,stairs,wall,window   //finished on 25th'+l+
'    2:dragNresize                             //same as pressing m key'+l+
'    3:change picture                          //finished on 24th'+l+
'    4:activate/deactivate rotation (when mouse moves) same as pressing r key'+l+
'    5:rotate camera 90° to the left Π same as pressing shift+left'+l+
'    6:rotate camera 90° to the right -Π same as pressing shift+right'+l+
'    7:decrease light intensity (by -.15 till 0)//since Mesh´s got...'+l+
'    8:increase light intensity (by .15 till 1)//...MeshLambertMaterial'+l+
'    9:export house (as casa3d.js into zip)  //finished on 23rd'+l+
'   10:toggle full or normal screen mode       //finished on 22nd',
'2.7 9.9_'+
'  favicon designed in rw-designer.com and updloaded to '+K,
'2.8 9.21_'+
'  support.'+K+' is been created, tested, fixed, improved and released to public'+l+
"   it's multi purpose website including:"+l+
'     "your opinion is important": you as user can now report an error or suggest inprovement'+l+
'     "FAQs" you can now read the common, how to do? questions'+l+
'     "user manual" the abc about keys, shortcuts, mouse'+l+
'     "test & training plan" with this option you\'ll learn and enhance your skill at the moment to recreate your house'+l+
'     "requirements list" inside it you\'ll notice what\'s best option to start working with'+l+
'     "development info" you can inform about changes log of '+K+l+
'     "terms & conditions of use" you as user need to know what benefits and responsabilities '+K+' has got for you',
'2.9 10.22_'+
'  (Sign up & Log in) "fieldset" has been prepended to index page'+l+
'  Cookies has been removed and IndexedDB has been implemented instead'+l+
'   Indexed database stores basic information like:'+l+
"     a) last camera's position/rotation"+l+
"     b) last session (whether user's already signed up or not)"+l+
"     c) last support section (among 7)"+l+
'   In export option, protocol dataURL has been changed to blob, that is to say:'+l+
'     a) data result will be private'+l+
'     b) time waiting for generating zip file has been redused significantly'+l+
'     c) comparisons:'+l+
'       before:'+l+
"         if file is less than ~15kb then it'd spend ~10s, what 'bout 1mb... (due to itself data)"+l+
'       now:'+l+
"         if file-size is ~1mb then it'd spend ~5s"]