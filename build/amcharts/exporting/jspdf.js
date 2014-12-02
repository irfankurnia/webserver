var jsPDF=function(){function n(r,i,s,o){typeof r=="undefined"?r="p":r=r.toString().toLowerCase(),typeof i=="undefined"&&(i="mm"),typeof s=="undefined"&&(s="a4"),typeof o=="undefined"&&typeof zpipe=="undefined"&&(o=!1);var u=s.toString().toLowerCase(),a="0.9.0rc2",f=[],l=0,c=o,h="1.3",p={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224]},d="0 g",v="0 G",m=0,g=[],y=2,b=!1,w=[],E={},S={},x=16,T,N=.200025,C=1.15,k,L,A,O={title:"",subject:"",author:"",keywords:"",creator:""},M=0,_=0,D={},P=new t(D),H,B,j=function(e){return e.toFixed(2)},F=function(e){return e.toFixed(3)},I=function(e){var t=e.toFixed(0);return e<10?"0"+t:t},q=function(e){var t=e.toFixed(0);return t.length<10?(new Array(11-t.length)).join("0")+t:t},R=function(e){b?g[m].push(e):(f.push(e),l+=e.length+1)},U=function(){return y++,w[y]=l,R(y+" 0 obj"),y},z=function(e){R("stream"),R(e),R("endstream")},W,X,V,$,J=function(){W=L*A,X=k*A;var e,t,n,r,i,s,o;for(e=1;e<=m;e++){U(),R("<</Type /Page"),R("/Parent 1 0 R"),R("/Resources 2 0 R"),R("/Contents "+(y+1)+" 0 R>>"),R("endobj"),t=g[e].join("\n"),U();if(c){n=[];for(i=0;i<t.length;++i)n[i]=t.charCodeAt(i);o=adler32cs.from(t),s=new Deflater(6),s.append(new Uint8Array(n)),t=s.flush(),n=[new Uint8Array([120,156]),new Uint8Array(t),new Uint8Array([o&255,o>>8&255,o>>16&255,o>>24&255])],t="";for(i in n)n.hasOwnProperty(i)&&(t+=String.fromCharCode.apply(null,n[i]));R("<</Length "+t.length+" /Filter [/FlateDecode]>>")}else R("<</Length "+t.length+">>");z(t),R("endobj")}w[1]=l,R("1 0 obj"),R("<</Type /Pages"),V="/Kids [";for(i=0;i<m;i++)V+=3+2*i+" 0 R ";R(V+"]"),R("/Count "+m),R("/MediaBox [0 0 "+j(W)+" "+j(X)+"]"),R(">>"),R("endobj")},K=function(e){e.objectNumber=U(),R("<</BaseFont/"+e.PostScriptName+"/Type/Font"),typeof e.encoding=="string"&&R("/Encoding/"+e.encoding),R("/Subtype/Type1>>"),R("endobj")},Q=function(){var e;for(e in E)E.hasOwnProperty(e)&&K(E[e])},G=function(){P.publish("putXobjectDict")},Y=function(){R("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),R("/Font <<");var e;for(e in E)E.hasOwnProperty(e)&&R("/"+e+" "+E[e].objectNumber+" 0 R");R(">>"),R("/XObject <<"),G(),R(">>")},Z=function(){Q(),P.publish("putResources"),w[2]=l,R("2 0 obj"),R("<<"),Y(),R(">>"),R("endobj"),P.publish("postPutResources")},et=function(e,t,n){var r;S[t]===r&&(S[t]={}),S[t][n]=e},tt={},nt=function(t,n,r,i){var s="F"+(e(E)+1).toString(10),o=E[s]={id:s,PostScriptName:t,fontName:n,fontStyle:r,encoding:i,metadata:{}};return et(s,n,r),P.publish("addFont",o),s},rt=function(){var e="helvetica",t="times",n="courier",r="normal",i="bold",s="italic",o="bolditalic",u="StandardEncoding",a=[["Helvetica",e,r],["Helvetica-Bold",e,i],["Helvetica-Oblique",e,s],["Helvetica-BoldOblique",e,o],["Courier",n,r],["Courier-Bold",n,i],["Courier-Oblique",n,s],["Courier-BoldOblique",n,o],["Times-Roman",t,r],["Times-Bold",t,i],["Times-Italic",t,s],["Times-BoldItalic",t,o]],f,l,c,h;for(f=0,l=a.length;f<l;f++)c=nt(a[f][0],a[f][1],a[f][2],u),h=a[f][0].split("-"),et(c,h[0],h[1]||"");P.publish("addFonts",{fonts:E,dictionary:S})},it=function(e,t){var n,r,i,s,o,u,a,f,l,c;t===i&&(t={}),s=t.sourceEncoding?s:"Unicode",u=t.outputEncoding;if((t.autoencode||u)&&E[T].metadata&&E[T].metadata[s]&&E[T].metadata[s].encoding){o=E[T].metadata[s].encoding,!u&&E[T].encoding&&(u=E[T].encoding),!u&&o.codePages&&(u=o.codePages[0]),typeof u=="string"&&(u=o[u]);if(u){f=!1,a=[];for(n=0,r=e.length;n<r;n++)l=u[e.charCodeAt(n)],l?a.push(String.fromCharCode(l)):a.push(e[n]),a[n].charCodeAt(0)>>8&&(f=!0);e=a.join("")}}n=e.length;while(f===i&&n!==0)e.charCodeAt(n-1)>>8&&(f=!0),n--;if(!f)return e;a=t.noBOM?[]:[254,255];for(n=0,r=e.length;n<r;n++){l=e.charCodeAt(n),c=l>>8;if(c>>8)throw new Error("Character at position "+n.toString(10)+" of string '"+e+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");a.push(c),a.push(l-(c<<8))}return String.fromCharCode.apply(i,a)},st=function(e,t){return it(e,t).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},ot=function(){R("/Producer (jsPDF "+a+")"),O.title&&R("/Title ("+st(O.title)+")"),O.subject&&R("/Subject ("+st(O.subject)+")"),O.author&&R("/Author ("+st(O.author)+")"),O.keywords&&R("/Keywords ("+st(O.keywords)+")"),O.creator&&R("/Creator ("+st(O.creator)+")");var e=new Date;R("/CreationDate (D:"+[e.getFullYear(),I(e.getMonth()+1),I(e.getDate()),I(e.getHours()),I(e.getMinutes()),I(e.getSeconds())].join("")+")")},ut=function(){R("/Type /Catalog"),R("/Pages 1 0 R"),R("/OpenAction [3 0 R /FitH null]"),R("/PageLayout /OneColumn"),P.publish("putCatalog")},at=function(){R("/Size "+(y+1)),R("/Root "+y+" 0 R"),R("/Info "+(y-1)+" 0 R")},ft=function(){m++,b=!0,g[m]=[]},lt=function(){ft(),R(j(N*A)+" w"),R(v),M!==0&&R(M.toString(10)+" J"),_!==0&&R(_.toString(10)+" j"),P.publish("addPage",{pageNumber:m})},ct=function(e,t){var n,r;e===r&&(e=E[T].fontName),t===r&&(t=E[T].fontStyle);try{n=S[e][t]}catch(i){n=r}if(!n)throw new Error("Unable to look up font label for font '"+e+"', '"+t+"'. Refer to getFontList() for available fonts.");return n},ht=function(){b=!1,f=[],w=[],R("%PDF-"+h),J(),Z(),U(),R("<<"),ot(),R(">>"),R("endobj"),U(),R("<<"),ut(),R(">>"),R("endobj");var e=l,t;R("xref"),R("0 "+(y+1)),R("0000000000 65535 f ");for(t=1;t<=y;t++)R(q(w[t])+" 00000 n ");return R("trailer"),R("<<"),at(),R(">>"),R("startxref"),R(e),R("%%EOF"),b=!0,f.join("\n")},pt=function(e){var t="S";if(e==="F")t="f";else if(e==="FD"||e==="DF")t="B";return t},dt=function(e,t){var n,r,i,s,o,u;switch(e){case n:return ht();case"save":if(navigator.getUserMedia){if(window.URL===undefined)return D.output("dataurlnewwindow");if(window.URL.createObjectURL===undefined)return D.output("dataurlnewwindow")}r=ht(),i=r.length,s=new Uint8Array(new ArrayBuffer(i));for(o=0;o<i;o++)s[o]=r.charCodeAt(o);u=new Blob([s],{type:"application/pdf"}),saveAs(u,t);break;case"datauristring":case"dataurlstring":return"data:application/pdf;base64,"+btoa(ht());case"datauri":case"dataurl":document.location.href="data:application/pdf;base64,"+btoa(ht());break;case"dataurlnewwindow":window.open("data:application/pdf;base64,"+btoa(ht()));break;default:throw new Error('Output type "'+e+'" is not supported.')}};if(i==="pt")A=1;else if(i==="mm")A=72/25.4;else if(i==="cm")A=72/2.54;else{if(i!=="in")throw"Invalid unit: "+i;A=72}if(p.hasOwnProperty(u))k=p[u][1]/A,L=p[u][0]/A;else try{k=s[1],L=s[0]}catch(vt){throw"Invalid format: "+s}if(r==="p"||r==="portrait")r="p",L>k&&(H=L,L=k,k=H);else{if(r!=="l"&&r!=="landscape")throw"Invalid orientation: "+r;r="l",k>L&&(H=L,L=k,k=H)}D.internal={pdfEscape:st,getStyle:pt,getFont:function(){return E[ct.apply(D,arguments)]},getFontSize:function(){return x},getLineHeight:function(){return x*C},btoa:btoa,write:function(e,t,n,r){R(arguments.length===1?e:Array.prototype.join.call(arguments," "))},getCoordinateString:function(e){return j(e*A)},getVerticalCoordinateString:function(e){return j((k-e)*A)},collections:{},newObject:U,putStream:z,events:P,scaleFactor:A,pageSize:{width:L,height:k},output:function(e,t){return dt(e,t)},getNumberOfPages:function(){return g.length-1},pages:g},D.addPage=function(){return lt(),this},D.text=function(e,t,n,r){var i,s,o,u,a,f,l;typeof e=="number"&&(s=n,o=e,u=t,e=s,t=o,n=u),typeof e=="string"&&e.match(/[\n\r]/)&&(e=e.split(/\r\n|\r|\n/g)),typeof r=="undefined"?r={noBOM:!0,autoencode:!0}:(r.noBOM===i&&(r.noBOM=!0),r.autoencode===i&&(r.autoencode=!0));if(typeof e=="string")f=st(e,r);else{if(!(e instanceof Array))throw new Error('Type of text must be string or Array. "'+e+'" is not recognized.');a=e.concat();for(l=a.length-1;l!==-1;l--)a[l]=st(a[l],r);f=a.join(") Tj\nT* (")}return R("BT\n/"+T+" "+x+" Tf\n"+x*C+" TL\n"+d+"\n"+j(t*A)+" "+j((k-n)*A)+" Td\n("+f+") Tj\nET"),this},D.line=function(e,t,n,r){return R(j(e*A)+" "+j((k-t)*A)+" m "+j(n*A)+" "+j((k-r)*A)+" l S"),this},D.lines=function(e,t,n,r,i,s){var o,u,a,f,l,c,h,p,d,v,m,g,y,b,w;typeof e=="number"&&(u=n,a=e,f=t,e=u,t=a,n=f),i=pt(i),r=r===o?[1,1]:r,R(F(t*A)+" "+F((k-n)*A)+" m "),l=r[0],c=r[1],p=e.length,b=t,w=n;for(h=0;h<p;h++)d=e[h],d.length===2?(b=d[0]*l+b,w=d[1]*c+w,R(F(b*A)+" "+F((k-w)*A)+" l")):(v=d[0]*l+b,m=d[1]*c+w,g=d[2]*l+b,y=d[3]*c+w,b=d[4]*l+b,w=d[5]*c+w,R(F(v*A)+" "+F((k-m)*A)+" "+F(g*A)+" "+F((k-y)*A)+" "+F(b*A)+" "+F((k-w)*A)+" c"));return s==1&&R(" h"),R(i),this},D.rect=function(e,t,n,r,i){var s=pt(i);return R([j(e*A),j((k-t)*A),j(n*A),j(-r*A),"re",s].join(" ")),this},D.triangle=function(e,t,n,r,i,s,o){return this.lines([[n-e,r-t],[i-n,s-r],[e-i,t-s]],e,t,[1,1],o,!0),this},D.roundedRect=function(e,t,n,r,i,s,o){var u=4/3*(Math.SQRT2-1);return this.lines([[n-2*i,0],[i*u,0,i,s-s*u,i,s],[0,r-2*s],[0,s*u,-(i*u),s,-i,s],[-n+2*i,0],[-(i*u),0,-i,-(s*u),-i,-s],[0,-r+2*s],[0,-(s*u),i*u,-s,i,-s]],e+i,t,[1,1],o),this},D.ellipse=function(e,t,n,r,i){var s=pt(i),o=4/3*(Math.SQRT2-1)*n,u=4/3*(Math.SQRT2-1)*r;return R([j((e+n)*A),j((k-t)*A),"m",j((e+n)*A),j((k-(t-u))*A),j((e+o)*A),j((k-(t-r))*A),j(e*A),j((k-(t-r))*A),"c"].join(" ")),R([j((e-o)*A),j((k-(t-r))*A),j((e-n)*A),j((k-(t-u))*A),j((e-n)*A),j((k-t)*A),"c"].join(" ")),R([j((e-n)*A),j((k-(t+u))*A),j((e-o)*A),j((k-(t+r))*A),j(e*A),j((k-(t+r))*A),"c"].join(" ")),R([j((e+o)*A),j((k-(t+r))*A),j((e+n)*A),j((k-(t+u))*A),j((e+n)*A),j((k-t)*A),"c",s].join(" ")),this},D.circle=function(e,t,n,r){return this.ellipse(e,t,n,n,r)},D.setProperties=function(e){var t;for(t in O)O.hasOwnProperty(t)&&e[t]&&(O[t]=e[t]);return this},D.setFontSize=function(e){return x=e,this},D.setFont=function(e,t){return T=ct(e,t),this},D.setFontStyle=D.setFontType=function(e){var t;return T=ct(t,e),this},D.getFontList=function(){var e={},t,n,r;for(t in S)if(S.hasOwnProperty(t)){e[t]=r=[];for(n in S[t])S[t].hasOwnProperty(n)&&r.push(n)}return e},D.setLineWidth=function(e){return R((e*A).toFixed(2)+" w"),this},D.setDrawColor=function(e,t,n,r){var i;return t===undefined||r===undefined&&e===t===n?typeof e=="string"?i=e+" G":i=j(e/255)+" G":r===undefined?typeof e=="string"?i=[e,t,n,"RG"].join(" "):i=[j(e/255),j(t/255),j(n/255),"RG"].join(" "):typeof e=="string"?i=[e,t,n,r,"K"].join(" "):i=[j(e),j(t),j(n),j(r),"K"].join(" "),R(i),this},D.setFillColor=function(e,t,n,r){var i;return t===undefined||r===undefined&&e===t===n?typeof e=="string"?i=e+" g":i=j(e/255)+" g":r===undefined?typeof e=="string"?i=[e,t,n,"rg"].join(" "):i=[j(e/255),j(t/255),j(n/255),"rg"].join(" "):typeof e=="string"?i=[e,t,n,r,"k"].join(" "):i=[j(e),j(t),j(n),j(r),"k"].join(" "),R(i),this},D.setTextColor=function(e,t,n){var r=/#[0-9A-Fa-f]{6}/;if(typeof e=="string"&&r.test(e)){var i=e.replace("#",""),s=parseInt(i,16);e=s>>16&255,t=s>>8&255,n=s&255}return e===0&&t===0&&n===0||typeof t=="undefined"?d=F(e/255)+" g":d=[F(e/255),F(t/255),F(n/255),"rg"].join(" "),this},D.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},D.setLineCap=function(e){var t=this.CapJoinStyles[e];if(t===undefined)throw new Error("Line cap style of '"+e+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return M=t,R(t.toString(10)+" J"),this},D.setLineJoin=function(e){var t=this.CapJoinStyles[e];if(t===undefined)throw new Error("Line join style of '"+e+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return _=t,R(t.toString(10)+" j"),this},D.output=dt,D.save=function(e){D.output("save",e)};for(B in n.API)n.API.hasOwnProperty(B)&&(B==="events"&&n.API.events.length?function(e,t){var n,r,i;for(i=t.length-1;i!==-1;i--)n=t[i][0],r=t[i][1],e.subscribe.apply(e,[n].concat(typeof r=="function"?[r]:r))}(P,n.API.events):D[B]=n.API[B]);return rt(),T="F1",lt(),P.publish("initialized"),D}typeof btoa=="undefined"&&(window.btoa=function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n=t.split(""),r,i,s,o,u,a,f,l,c=0,h=0,p="",d=[],v;do r=e.charCodeAt(c++),i=e.charCodeAt(c++),s=e.charCodeAt(c++),l=r<<16|i<<8|s,o=l>>18&63,u=l>>12&63,a=l>>6&63,f=l&63,d[h++]=n[o]+n[u]+n[a]+n[f];while(c<e.length);return p=d.join(""),v=e.length%3,(v?p.slice(0,v-3):p)+"===".slice(v||3)}),typeof atob=="undefined"&&(window.atob=function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n,r,i,s,o,u,a,f,l=0,c=0,h="",p=[];if(!e)return e;e+="";do s=t.indexOf(e.charAt(l++)),o=t.indexOf(e.charAt(l++)),u=t.indexOf(e.charAt(l++)),a=t.indexOf(e.charAt(l++)),f=s<<18|o<<12|u<<6|a,n=f>>16&255,r=f>>8&255,i=f&255,u===64?p[c++]=String.fromCharCode(n):a===64?p[c++]=String.fromCharCode(n,r):p[c++]=String.fromCharCode(n,r,i);while(l<e.length);return h=p.join(""),h});var e=typeof Object.keys=="function"?function(e){return Object.keys(e).length}:function(e){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t},t=function(e){this.topics={},this.context=e,this.publish=function(e,t){if(this.topics[e]){var n=this.topics[e],r=[],i,s,o,u,a=function(){};t=Array.prototype.slice.call(arguments,1);for(s=0,o=n.length;s<o;s++)u=n[s],i=u[0],u[1]&&(u[0]=a,r.push(s)),i.apply(this.context,t);for(s=0,o=r.length;s<o;s++)n.splice(r[s],1)}},this.subscribe=function(e,t,n){return this.topics[e]?this.topics[e].push([t,n]):this.topics[e]=[[t,n]],{topic:e,callback:t}},this.unsubscribe=function(e){if(this.topics[e.topic]){var t=this.topics[e.topic],n,r;for(n=0,r=t.length;n<r;n++)t[n][0]===e.callback&&t.splice(n,1)}}};return n.API={events:[]},n}();