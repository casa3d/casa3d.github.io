T.MaskPass=function(e,s){this.scene=e,this.camera=s,this.enabled=!0,this.clear=!0,this.needsSwap=!1,this.inverse=!1},T.MaskPass.prototype={render:function(e,s,t){var a=e.context;a.colorMask(!1,!1,!1,!1),a.depthMask(!1);var n,i;this.inverse?(n=0,i=1):(n=1,i=0),a.enable(a.STENCIL_TEST),a.stencilOp(a.REPLACE,a.REPLACE,a.REPLACE),a.stencilFunc(a.ALWAYS,n,4294967295),a.clearStencil(i),e.render(this.scene,this.camera,t,this.clear),e.render(this.scene,this.camera,s,this.clear),a.colorMask(!0,!0,!0,!0),a.depthMask(!0),a.stencilFunc(a.EQUAL,1,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP)}},T.ClearMaskPass=function(){this.enabled=!0},T.ClearMaskPass.prototype={render:function(e){var s=e.context;s.disable(s.STENCIL_TEST)}}