dr={crs:'',pj:new T.Projector,sty:'.drg{cursor:url(css/drg.cur),auto}.drgn{cursor:url(css/drgn.cur),auto}.e-rz{cursor:e-resize}.n-rz{cursor:n-resize}.nw-rz{cursor:nw-resize}.sw-rz{cursor:sw-resize',V3:new T.Vector3(0,0,.5),act:function(){dr.app=dr.app?(dr.m&&(dr.m.emissive.g--,dr.o=void 0),u.b.className='idle',$('.trgt').removeClass('not'),!1):($('.trgt').addClass('not'),u.b.className=dr.drg.crs,!(m.rKey=!1))},intrsct:function(){dr.o!=dr.new&&(dr.o&&dr.o.material.emissive.g--,(dr.m=(dr.o=dr.new).material).emissive.g+=1)},rc:function(){return dr.pj.unprojectVector(dr.V3,c),dr.rC=new T.Raycaster(c.position,dr.V3.sub(c.position).normalize()),dr.rst=dr.rC.intersectObjects(t.s.children,!0)[0],dr.rst&&dr.rst.object&&dr.rst.object.parent&&4==dr.rst.object.parent.id?0:dr.rst},drg:{crs:'drg',rv:1,init:function(){var r=dr.rst.point,d=dr.rsz.point;if(Math.abs(r.z-d.z)<50){var t=dr.drg.o,o=t.position,s=dr.cover,e=s.position;t.geometry instanceof T.ShapeGeometry&&(r.x-=t.parent.position.x,r.y-=t.parent.position.y),o.x=r.x,dr.drg.z?o.z+=t.rotation.x?r.z-d.z:t.rotation.y?dr.new.rotation.y?r.z-d.z:d.y-r.y:d.y-r.y:t.rotation.x?dr.new.id==t.id?(dr.follow(),e.y+=e.y<c.position.y?.1:-.1):dr.new.id!=s.id?Math.abs(o.y-r.y)<100&&(o.y=r.y):o.y>e.y&&o.y<c.position.y?e.y+=2*(o.y-e.y):o.y+=(d.z-r.z)*(o.y>c.position.y?-1:1):o.y=r.y}}},follow:function(r){for(var d in{x:0,y:0,z:1})dr.cover.position[d]=r?'z'==d?-600.1:0:dr.new.position[d],dr.cover.rotation[d]=r?0:dr.new.rotation[d]},rsz:{app:!1,δ:function(r){var d=dr.rst?dr.o.position['v'==r?'y':dr.o.rotation.y?'z':'x']-dr.rst.point['v'==r?'y':dr.o.rotation.y?'z':'x']:15;return r?d:Math.abs(d)},brdr:function(){var r;return(dr.rsz.crs=(r=dr.o.geometry.width/2-dr.rsz.δ()<3)?'e-rz':!1)||(dr.rsz.crs=(r=dr.o.geometry.height/2-Math.abs(dr.rsz.δ('v'))<15)?'n-rz':!1)},centre:function(r){var d,t,o,s,e,n,i,a=(d=(r=r||dr.o).geometry).vertices;if(i=function(r){return Math.abs(r)},i(a[0].x)!=a[1].x&&(t=!0,o=(d.width=i(a[0].x)+i(a[1].x))/2,n=(Math.max(i(a[0].x),i(a[1].x))-Math.min(i(a[0].x),i(a[1].x)))/2,dr.rsz.Δ='',r.position[r.rotation.y?'z':'x']+=n*(i(a[0].x)>i(a[1].x)?-1:1)),a[0].y!=i(a[2].y)&&(e=!0,s=(d.height=i(a[0].y)+i(a[2].y))/2,n=(Math.max(i(a[0].y),i(a[2].y))-Math.min(i(a[0].y),i(a[2].y)))/2,r.position.y+=n*(i(a[0].y)>i(a[2].y)?1:-1)),e||t)for(var c in a)t&&(d.vertices[c].x=o*(c%2?1:-1)),e&&(d.vertices[c].y=s*(2>c?1:-1));d.verticesNeedUpdate=!0},init:function(){var r=dr.rsz.v='n-rz'==dr.rsz.crs?!0:'e-rz'==dr.rsz.crs?!1:dr.rsz.v;Δ=dr.rsz.δ(r?'v':!0),dr.rsz.Δ=Math.abs(Δ),dr.o.geometry.vertices[Δ>0?2:r?0:3][r?'y':'x']=dr.o.geometry.vertices[Δ>0?r?3:0:1][r?'y':'x']=-Δ,dr.o.geometry.verticesNeedUpdate=!0,dr.rsz.Δ<(dr.o.geometry.width>30?16:6)&&dr.rsz.centre()}},xy:function(r){dr.V3.x=2*(r.clientX/innerWidth)-1,dr.V3.y=2*-(r.clientY/innerHeight)+1}},$(h.w).on({mousemove:function(r){dr.app&&(dr.xy(r),dr.rc(r)&&(dr.new!=dr.rst.object&&(dr.new=dr.rst.object),!dr.rsz.app&&dr.intrsct(),dr.drg.app?dr.drg.init():(dr.rsz.brdr()?u.b.className!=dr.rsz.crs&&(u.b.className=dr.rsz.crs):!dr.rsz.app&&u.b.className!=dr.drg.crs&&(u.b.className=dr.drg.crs),dr.rsz.app&&(dr.rsz.point&&dr.follow(),dr.rsz.init(dr.rsz.crs))),dr.rsz.point=dr.rst.point))},mousedown:function(){dr.app&&(dr.rsz.crs?dr.rsz.app=!0:(u.b.className='drgn',dr.drg.o=dr.new,dr.drg.app=!0))},mouseup:function(){dr.app&&(dr.rsz.app||dr.drg.app)&&(dr.rsz.app&&(dr.rsz.app=!1,dr.rsz.Δ&&dr.rsz.centre(),dr.follow(1)),dr.drg.app&&(dr.drg.app=!1,dr.follow(1)),!dr.rsz.brdr()&&(u.b.className=dr.drg.crs='drg'))},keydown:function(r){dr.app&&(dr.drg.z=r.ctrlKey)},keyup:function(r){dr.app&&(dr.drg.z=!1),77==r.keyCode&&dr.act()}}),u.sty(dr.sty),t.ad({a:'12 24[!|]0 0 -600.1',p:h.ga}),dr.cover=t.shape