if(AmCharts.isModern){var saveAs=saveAs||typeof navigator!="undefined"&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)||function(e){var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=e.URL||e.webkitURL||e,i=t.createElementNS("http://www.w3.org/1999/xhtml","a"),s=!e.externalHost&&"download"in i,o=function(n){var r=t.createEvent("MouseEvents");r.initMouseEvent("click",!0,!1,e,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(r)},u=e.webkitRequestFileSystem,a=e.requestFileSystem||u||e.mozRequestFileSystem,f=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},l="application/octet-stream",c=0,h=[],p=function(){var e=h.length;while(e--){var t=h[e];typeof t=="string"?r.revokeObjectURL(t):t.remove()}h.length=0},d=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var i=e["on"+t[r]];if(typeof i=="function")try{i.call(e,n||e)}catch(s){f(s)}}},v=function(r,o){var f=this,p=r.type,v=!1,m,g,y=function(){var e=n().createObjectURL(r);return h.push(e),e},b=function(){d(f,"writestart progress write writeend".split(" "))},w=function(){if(v||!m)m=y(r);g?g.location.href=m:window.open(m,"_blank"),f.readyState=f.DONE,b()},E=function(e){return function(){if(f.readyState!==f.DONE)return e.apply(this,arguments)}},S={create:!0,exclusive:!1},x;f.readyState=f.INIT,o||(o="download");if(s){m=y(r),t=e.document,i=t.createElementNS("http://www.w3.org/1999/xhtml","a"),i.href=m,i.download=o;var T=t.createEvent("MouseEvents");T.initMouseEvent("click",!0,!1,e,0,0,0,0,0,!1,!1,!1,!1,0,null),i.dispatchEvent(T),f.readyState=f.DONE,b();return}e.chrome&&p&&p!==l&&(x=r.slice||r.webkitSlice,r=x.call(r,0,r.size,l),v=!0),u&&o!=="download"&&(o+=".download");if(p===l||u)g=e;if(!a){w();return}c+=r.size,a(e.TEMPORARY,c,E(function(e){e.root.getDirectory("saved",S,E(function(e){var t=function(){e.getFile(o,S,E(function(e){e.createWriter(E(function(t){t.onwriteend=function(t){g.location.href=e.toURL(),h.push(e),f.readyState=f.DONE,d(f,"writeend",t)},t.onerror=function(){var e=t.error;e.code!==e.ABORT_ERR&&w()},"writestart progress write abort".split(" ").forEach(function(e){t["on"+e]=f["on"+e]}),t.write(r),f.abort=function(){t.abort(),f.readyState=f.DONE},f.readyState=f.WRITING}),w)}),w)};e.getFile(o,{create:!1},E(function(e){e.remove(),t()}),E(function(e){e.code===e.NOT_FOUND_ERR?t():w()}))}),w)}),w)},m=v.prototype,g=function(e,t){return new v(e,t)};return m.abort=function(){var e=this;e.readyState=e.DONE,d(e,"abort")},m.readyState=m.INIT=0,m.WRITING=1,m.DONE=2,m.error=m.onwritestart=m.onprogress=m.onwrite=m.onabort=m.onerror=m.onwriteend=null,e.addEventListener("unload",p,!1),g}(this.self||this.window||this.content);typeof module!="undefined"&&(module.exports=saveAs)};