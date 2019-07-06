(function(t){function e(e){for(var r,o,a=e[0],l=e[1],c=e[2],p=0,h=[];p<a.length;p++)o=a[p],n[o]&&h.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],r=!0,a=1;a<i.length;a++){var l=i[a];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=r,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(i,r,function(e){return t[e]}.bind(null,r));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static/pixel3d/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var r=i("64a9"),n=i.n(r);n.a},"04a6":function(t,e,i){"use strict";var r=i("86ea"),n=i.n(r);n.a},"0f90":function(t,e,i){},1949:function(t,e,i){},"23b4":function(t,e,i){"use strict";var r=i("f564"),n=i.n(r);n.a},5060:function(t,e,i){"use strict";var r=i("68ac"),n=i.n(r);n.a},"56d7":function(t,e,i){"use strict";i.r(e);var r,n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left",style:{display:t.sideBarDisplay},attrs:{id:"main-sidebar"}},[i("button",{staticClass:"w3-bar-item w3-button w3-large w3-hide-large",on:{click:function(e){t.sideBarDisplay="none"}}},[t._v("Close ×")]),i("button",{staticClass:"w3-bar-item w3-button w3-xlarge",class:["home"==t.currentTab?"w3-theme-l1":""],on:{click:function(e){t.currentTab="home"}}},[t._v("\n\t\t\t\t\t\tHome\n\t\t\t\t")]),i("button",{staticClass:"w3-bar-item w3-button w3-xlarge",class:["sprites"==t.currentTab?"w3-theme-l1":""],on:{click:function(e){t.currentTab="sprites"}}},[t._v("\n\t\t\t\t\t\tGallery\n\t\t\t\t")]),i("button",{staticClass:"w3-bar-item w3-button w3-xlarge",class:["editor"==t.currentTab?"w3-theme":""],attrs:{disabled:!t.currentSprite},on:{click:function(e){t.currentTab="editor"}}},[t._v("\n\t\t\t\t\t\tEditor\n\t\t\t\t")])]),i("div",{staticClass:"w3-main",attrs:{id:"main-body"}},[i("header",{staticClass:"w3-cell-row w3-theme",attrs:{id:"main-header"}},[i("button",{staticClass:"w3-button w3-theme w3-xlarge w3-hide-large w3-cell",on:{click:function(e){t.sideBarDisplay="block"}}},[t._v("☰")]),i("h1",{staticClass:"w3-center w3-theme",attrs:{id:"main_title"}},[t._v("3D Pixel Art Generator")])]),i("keep-alive",["home"==t.currentTab?i("home"):t._e(),"sprites"==t.currentTab?i("sprites",{on:{"edit-sprite":function(e){return t.editSprite(e)}}}):t._e(),"editor"==t.currentTab?i("editor",{attrs:{id:"editor",sprite:t.currentSprite}}):t._e()],1)],1)])},o=[],a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-container"},[i("h1",{staticClass:"w3-center",attrs:{id:"home-title"}},[i("b",[t._v("Welcome to the PixelArt 3D Generator 1.0!")])]),i("div",{staticClass:"w3-container w3-center"},[i("p",[t._v("\n\t\t\tThe PixelArt 3D Generator is a Web Application that allows you to easily build 3D models\n\t\t\tfrom your favourite retro games and pixel arts.\n\t\t")]),i("p")])])}],c=(i("83c2"),i("2877")),u={},p=Object(c["a"])(u,a,l,!1,null,null,null),h=p.exports,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.selectedSprite?i("delete-sprite",{attrs:{sprite:t.selectedSprite,display:t.showConfirmDelete},on:{"hide-delete":t.hideDelete,"delete-sprite":t.deleteSprite}}):t._e(),i("new-sprite",{attrs:{display:t.displayNewSprite},on:{"new-sprite":t.addNewSprite,"update:display":function(e){t.displayNewSprite=e}}}),i("button",{staticClass:"w3-button w3-xlarge w3-round-large w3-margin-left w3-margin-top w3-blue",on:{click:function(e){t.displayNewSprite=!0}}},[i("i",{staticClass:"fa fa-upload fa-lg",attrs:{"aria-hidden":"true"}}),t._v("\n\t\tUpload New Sprite\n\t")]),i("div",{staticClass:"w3-row-padding"},t._l(t.sprites,function(e){return i("div",{staticClass:"w3-col l4 m6 s12 w3-padding-16"},[i("sprite",{attrs:{sprite:e},on:{"confirm-delete":t.confirmDelete,"edit-sprite":function(e){return t.$emit("edit-sprite",e)}}})],1)}),0)],1)},f=[],m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.sprite?i("div",{staticClass:"w3-card"},[t.renaming?i("header",{staticClass:"w3-cell-row w3-theme-d1"},[i("div",{staticClass:"w3-container w3-cell w3-cell-middle"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.sprite.name,expression:"sprite.name"}],staticClass:"w3-input w3-theme-l1 w3-border-0",attrs:{type:"text"},domProps:{value:t.sprite.name},on:{input:function(e){e.target.composing||t.$set(t.sprite,"name",e.target.value)}}})]),i("div",{staticClass:"w3-container w3-cell w3-cell-middle"},[i("button",{staticClass:"w3-button w3-right w3-hover-theme w3-theme-l1",on:{click:function(e){return t.renameSprite()}}},[t._v("OK")])])]):i("header",{staticClass:"w3-cell-row w3-padding w3-theme-d1"},[t.displayTools?i("div",{staticClass:"w3-dropdown-hover w3-cell w3-cell-middle w3-theme-d1"},[i("i",{staticClass:"fa fa-bars fa-2x",attrs:{"aria-hidden":"true"}}),i("div",{staticClass:"w3-dropdown-content w3-bar-block w3-border"},[i("button",{staticClass:"w3-bar-item w3-button",on:{click:function(e){return t.renamimgMode()}}},[i("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t\tRename\n\t\t\t\t")]),i("button",{staticClass:"w3-bar-item w3-button w3-text-red",on:{click:function(e){return t.$emit("confirm-delete",t.sprite)}}},[i("i",{staticClass:"fa fa-trash-o",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t\tDelete\n\t\t\t\t")]),i("button",{staticClass:"w3-bar-item w3-button",on:{click:function(e){return t.$emit("edit-sprite",t.sprite)}}},[i("i",{staticClass:"fa fa-cubes",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t\tEdit Model\t\n\t\t\t\t")])])]):t._e(),i("div",{staticClass:"w3-container w3-cell w3-cell-middle"},[i("h4",[t._v(t._s(t.sprite.name))])]),i("div",{staticClass:"w3-cell w3-cell-middle w3-right"},[t.displayTools?i("button",{staticClass:"w3-bar-item w3-button w3-large w3-blue w3-round-large",on:{click:function(e){return t.$emit("edit-sprite",t.sprite)}}},[i("i",{staticClass:"fa fa-cubes",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\tEdit Model\t\n\t\t")]):t._e()])]),i("div",{staticClass:"w3-row w3-center"},[i("button",{staticClass:"w3-button w3-bottombar w3-border-theme w3-hover-theme w3-half",class:["sprite-2d"==t.currentTab?"w3-theme-d1":""],on:{click:function(e){t.currentTab="sprite-2d"}}},[t._v("\n\t\t\t2D Sprite\n\t\t")]),i("button",{staticClass:"w3-button w3-bottombar w3-border-theme w3-hover-theme w3-half",class:["sprite-3d"==t.currentTab?"w3-theme-d1":""],on:{click:function(e){t.currentTab="sprite-3d"}}},[t._v("\n\t\t\t3D Model\n\t\t")])]),i("div",{staticClass:"sprite-view w3-padding-16 w3-center"},[i("keep-alive",["sprite-2d"==t.currentTab?i("sprite-2d",{attrs:{sprite:t.sprite}}):t._e(),"sprite-3d"==t.currentTab&&t.sprite.colorMap?i("sprite-3d",{attrs:{sprite:t.sprite,animate:""}}):t._e()],1),"sprite-3d"!=t.currentTab||t.sprite.colorMap?t._e():i("process-sprite",{attrs:{sprite:t.sprite},on:{"sprite-process":t.handleSpriteProcess}})],1)]):t._e()},w=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{staticClass:"sprite-svg",attrs:{viewBox:t.viewBoxSize}},t._l(t.sprite.pixelMap.rows,function(e,r){return i("g",t._l(e,function(e,n){return i("g",[i("rect",{style:{fill:t.computeColor(e)},attrs:{x:10*n,y:10*r,width:"10",height:"10"}})])}),0)}),0)},v=[],g={props:["sprite"],computed:{viewBoxSize:function(){var t,e,i,r,n;return e=10*this.sprite.pixelMap.height,i=10*this.sprite.pixelMap.width,n=Math.max(e,i),t=(i-n)/2,r=(e-n)/2,`${t} ${r} ${n} ${n}`}},methods:{computeColor:function(t){return`rgb(${t.r},${t.g},${t.b})`}},mounted:function(){return console.log(this.sprite)}},_=g,C=(i("23b4"),Object(c["a"])(_,b,v,!1,null,null,null)),x=C.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("canvas",{ref:t.canvasName,staticClass:"sprite-canvas"})},y=[],S=i("633b");i("b234");r=function(t,e){var i;return i=new S["Scene"](t),i};var $={props:{sprite:{type:Object,required:!0},animate:{type:Boolean,default:!1}},data:function(){return{centerNode:null,engine:null,scene:null,camera:null,meshes:{},highlightLayer:null,highlightedMeshes:[]}},watch:{sprite:function(t,e){return this.$nextTick(function(){return this.clear(),this.initBuild(),this.build(),this.run()})}},computed:{canvasName:function(){return`canvas_${this.sprite.id}`}},methods:{lookForPixelHeightInColorMap:function(t){var e,i,r,n,s;for(i=0,s=this.sprite.colorMap.colorMapItems,r=0,n=s.length;r<n;r++)e=s[r],function(e){e.r===t.r&&e.g===t.g&&e.b===t.b&&(i=e.h)}(e);return i},buildPixel:function(t,e,i,r){var n,s;return[new S["Vector2"](0,0),new S["Vector2"](1,0),new S["Vector2"](1,1),new S["Vector2"](0,1)],n=this.lookForPixelHeightInColorMap(i),s={width:this.sprite.colorMap.pixelSize,height:this.sprite.colorMap.pixelSize,depth:1,updatable:!0},i=S["MeshBuilder"].CreateBox(`pixel_${t}_${e}`,s,r),i.scaling.z=n,i.position.y=(this.sprite.pixelMap.height-t)*this.sprite.colorMap.pixelSize,i.position.x=e*this.sprite.colorMap.pixelSize,i.position.z=-n/2,i.setParent(this.centerNode),i},buildCamera:function(){var t,e;return e=Math.max(this.sprite.pixelMap.width*this.sprite.colorMap.pixelSize,this.sprite.pixelMap.height*this.sprite.colorMap.pixelSize+10),t=new S["ArcRotateCamera"]("camera",-Math.PI/2,Math.PI/2,e,this.centerNode.position,this.scene),t},refreshCamera:function(){var t,e,i,r,n,s;for(this.camera.setTarget(this.centerNode.position),n=Math.max(this.sprite.pixelMap.width*this.sprite.colorMap.pixelSize,this.sprite.pixelMap.height*this.sprite.colorMap.pixelSize+10),this.camera.radius=n,t=[],s=Object.values(this.meshes),e=0,i=s.length;e<i;e++)r=s[e],function(e){var i,r,n,s,o;for(s=Object.values(e),o=[],i=0,r=s.length;i<r;i++)n=s[i],o.push(t.push(n))}(r);return this.camera.zoomOn(t)},buildLight:function(){return new S["HemisphericLight"]("light1",new S["Vector3"](1,0,0),this.scene)},animateSprite:function(){var t,e;return e=new BABYLON.Animation("myAnimation","rotation.y",30,S["Animation"].ANIMATIONTYPE_FLOAT,S["Animation"].ANIMATIONLOOPMODE_CYCLE),t=[],t.push({frame:0,value:0}),t.push({frame:150,value:2*Math.PI}),e.setKeys(t),this.centerNode.animations=[],this.centerNode.animations.push(e),this.scene.beginAnimation(this.centerNode,0,150,!0)},getMeshes:function(){return this.meshes},highlightMeshes:function(t){var e,i,r,n,s,o,a,l;for(o=this.highlightedMeshes,e=0,r=o.length;e<r;e++)s=o[e],this.highlightLayer.removeMesh(s);for(l=this,a=[],i=0,n=t.length;i<n;i++)s=t[i],a.push(function(t){return l.highlightedMeshes.push(t),l.highlightLayer.addMesh(t,S["Color3"].Blue())}(s));return a},updateMeshes:function(t,e){var i,r,n,s;for(s=[],i=0,r=t.length;i<r;i++)n=t[i],s.push(function(t){return t.scaling.z=e,t.position.z=-e/2}(n));return s},build:function(){var t,e,i,r,n,s,o,a,l;for(this.clear(),l=this,console.log("Removing current meshes..."),s=Object.values(this.meshes),e=0,i=s.length;e<i;e++)n=s[e],function(t){var e,i,r,n,s;for(n=Object.values(t),s=[],e=0,i=n.length;e<i;e++)r=n[e],s.push(l.scene.removeMesh(r))}(n);for(r in console.log("Computing center node..."),t=function(t,e,i){var r,n;return r=l.buildPixel(t,e,i,l.scene),n=new S["StandardMaterial"](`pixel_${t}_${e}_texture`,l.scene),n.diffuseColor=new S["Color3"](i.r/255,i.g/255,i.b/255),r.material=n,l.meshes[t]||(l.meshes[t]={}),l.meshes[t][e]=r},console.log("Building pixels..."),o=this.sprite.pixelMap.rows,o)a=o[r],function(e,i){var r,n,s;for(r in s=[],i)n=i[r],s.push(function(i,r){return t(e,i,r)}(r,n))}(r,a);if(this.refreshCamera(),this.animate)return this.animateSprite()},initBuild:function(){var t,e;return t=this.$refs[this.canvasName],this.engine=new S["Engine"](t,!0,{stencil:!0}),this.scene=r(this.engine,t),this.centerNode=new S["TransformNode"]("center",this.scene),this.centerNode.setAbsolutePosition(new S["Vector3"](this.sprite.pixelMap.width*this.sprite.colorMap.pixelSize/2,this.sprite.pixelMap.height*this.sprite.colorMap.pixelSize/2,0)),this.centerNode.rotation.z=-Math.PI/2,this.camera=this.buildCamera(),this.camera.attachControl(t,!1),this.buildLight(),this.highlightLayer=new S["HighlightLayer"]("hl",this.scene),this.highlightLayer.blurHorizontalSize=.1,this.highlightLayer.blurVerticalSize=.5,e=this,window.addEventListener("resize",function(){return e.engine.resize()})},clear:function(){return this.engine.stopRenderLoop()},run:function(){var t;return t=this,this.engine.runRenderLoop(function(){return t.scene.render()})}},mounted:function(){return this.initBuild(),this.build()},destroyed:function(){return this.clear()},deactivated:function(){return this.clear()},activated:function(){return this.run()}},k=$,N=(i("04a6"),Object(c["a"])(k,M,y,!1,null,null,null)),O=N.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-display-container",attrs:{id:"processContainer"}},[i("button",{staticClass:"w3-button w3-theme w3-display-middle w3-xlarge",on:{click:function(e){return t.processSprite()}}},[i("i",{staticClass:"fa fa-cogs fa-lg",attrs:{"aria-hidden":"true"}}),t._v("\n    Generate Model\n  ")])])},j=[],z={props:{sprite:{type:Object,required:!0}},methods:{processSprite:function(){var t,e,i;return i="/api/sprites/"+this.sprite.id+"/process/",t={method:"PUT"},e=this,fetch(i,t).catch(function(t){return console.log(t)}).then(function(t){return t.json()}).then(function(t){return e.$emit("sprite-process",e.sprite,t)})}}},P=z,E=(i("72e1"),Object(c["a"])(P,T,j,!1,null,null,null)),D=E.exports,I={props:{sprite:{type:Object,required:!0},displayTools:{type:Boolean,required:!1,default:!0}},components:{"sprite-2d":x,"sprite-3d":O,"process-sprite":D},data:function(){return{renaming:!1,currentTab:"sprite-2d"}},methods:{renamimgMode:function(){return this.renaming=!0},renameSprite:function(){var t,e,i;return i=`http://localhost:8000/api/sprites/${this.sprite.id}/`,t={method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({name:`${this.sprite.name}`})},e=this,fetch(i,t).catch(function(t){return console.log(t)}).then(function(t){return t.json()}).then(function(t){return e.sprite.name=t.name,e.renaming=!1})},handleSpriteProcess:function(t,e){return console.log(e),t.colorMap=e.colorMap}}},H=I,B=(i("ee71"),Object(c["a"])(H,m,w,!1,null,null,null)),A=B.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-modal",style:{display:t.modalDisplay}},[i("div",{staticClass:"w3-modal-content"},[i("header",{staticClass:"w3-theme w3-bar"},[i("h3",{staticClass:"w3-bar-item"},[t._v("Upload new sprite")]),i("button",{staticClass:"w3-button w3-bar-item w3-right w3-theme",on:{click:function(e){return t.$emit("update:display",!1)}}},[i("i",{staticClass:"fa fa-times fa-lg"})])]),i("div",{staticClass:"w3-container w3-margin w3-animate-opacity w3-animate-zoom w3-padding-16"},[t._m(0),i("input",{directives:[{name:"model",rawName:"v-model",value:t.spriteName,expression:"spriteName"}],staticClass:"w3-input w3-border w3-light-grey",attrs:{type:"text"},domProps:{value:t.spriteName},on:{input:function(e){e.target.composing||(t.spriteName=e.target.value)}}}),i("div",{staticClass:"w3-margin-top"},[t._m(1),i("input",{staticClass:"w3-input w3-border-0",attrs:{type:"file"},on:{change:t.selectFile}})]),i("div",{staticClass:"w3-margin-top"},[i("div",{staticClass:"w3-cell"},[i("button",{staticClass:"w3-btn w3-theme",attrs:{disabled:t.processing},on:{click:function(e){return t.uploadNewSprite()}}},[t.processing?i("span",[t._v("\n\t\t\t\t\tprocessing...\n\t\t\t\t\t")]):i("span",[t._v("\n\t\t\t\t\tUpload!\n\t\t\t\t\t")])])]),t.processing?i("div",{staticClass:"w3-cell"},[i("i",{staticClass:"fa fa-circle-o-notch fa-spin fa-lg fa-fw"})]):t._e()])])])])},F=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"w3-text-theme"},[i("b",[t._v("Sprite Name")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"w3-text-theme w3-margin-top"},[i("b",[t._v("Select File")])])}],U={props:{display:{type:Boolean,required:!0}},data:function(){return{showNewSprite:!1,selectedFile:null,spriteName:"",processing:!1}},computed:{modalDisplay:function(){return this.display?"block":"none"}},methods:{selectFile:function(t){var e;return this.selectedFile=t.target.files[0],e=/(\w+)\.\w+$/,e.test(this.selectedFile.name)?this.spriteName=e.exec(this.selectedFile.name)[1]:this.spriteName=this.selectedFile.name,console.log(this.spriteName)},uploadNewSprite:function(){var t,e,i,r;return this.processing=!0,r="http://localhost:8000/api/sprites/",t=new FormData,t.append("name",this.spriteName),t.append("sprite",this.selectedFile),e={method:"POST",body:t},i=this,fetch(r,e).catch(function(t){return console.log(t)}).then(function(t){return t.json()}).then(function(t){return i.processing=!1,console.log(t),i.processSprite(t.id),i.$emit("update:display",!1)})},processSprite:function(t){var e,i,r;return r=`http://localhost:8000/api/sprites/${t}/process/`,e={method:"PUT"},i=this,fetch(r,e).catch(function(t){return console.log(t)}).then(function(t){return t.json()}).then(function(t){return console.log(t),i.$emit("new-sprite",t)})}}},R=U,q=Object(c["a"])(R,L,F,!1,null,null,null),V=q.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-modal",class:[t.display?"w3-show":"w3-hide"]},[i("div",{staticClass:"w3-modal-content"},[t._m(0),i("div",{staticClass:"w3-container w3-center w3-row-padding"},[i("div",{staticClass:"w3-col l4 m3 s0 w3-padding-16"}),i("div",{staticClass:"w3-col l4 m6 s12 w3-padding-16"},[i("sprite",{attrs:{sprite:t.sprite,"display-tools":!1}})],1),i("div",{staticClass:"w3-col l4 m3 s0 w3-padding-16"})]),i("footer",{staticClass:"w3-container w3-cell-row w3-center"},[i("button",{staticClass:"w3-button w3-theme w3-xlarge w3-cell w3-margin",on:{click:function(e){return t.$emit("hide-delete")}}},[t._v("Cancel")]),i("button",{staticClass:"w3-button w3-red w3-xlarge w3-cell w3-margin",on:{click:function(e){return t.deleteSprite()}}},[t._v("Delete")])])])])},J=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"w3-container w3-center w3-theme-l1"},[i("h3",[t._v("Do you really want to delete this sprite?")])])}],W={props:["display","sprite"],components:{sprite:A},methods:{deleteSprite:function(){var t,e,i;return i=`http://localhost:8000/api/sprites/${this.sprite.id}/`,t={method:"DELETE"},e=this,fetch(i,t).catch(function(t){return console.log(t)}).then(function(t){return e.$emit("delete-sprite",e.sprite)})}}},Y=W,K=Object(c["a"])(Y,G,J,!1,null,null,null),Q=K.exports,X={components:{sprite:A,"new-sprite":V,"delete-sprite":Q},data:function(){return{sprites:[],selectedSprite:null,displayNewSprite:!1,showConfirmDelete:!1}},methods:{fetchSprites:function(){var t,e;return e="http://localhost:8000/api/sprites/",{headers:{accept:"application/json"}},t=this,fetch(e).catch(function(t){return console.log(t)}).then(function(t){return console.log(t),t.json()}).then(function(e){return console.log(e),t.sprites=e})},confirmDelete:function(t){return this.selectedSprite=t,this.showConfirmDelete=!0},hideDelete:function(){return this.showConfirmDelete=!1},deleteSprite:function(t){var e,i;e=!1,i=0;while(!e)this.sprites[i].id===t.id&&(this.sprites.splice(i,1),e=!0),i++;return this.hideDelete()},addNewSprite:function(t){return this.sprites.unshift(t)}},mounted:function(){return this.fetchSprites()}},Z=X,tt=Object(c["a"])(Z,d,f,!1,null,null,null),et=tt.exports,it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("toolbar",{attrs:{updates:t.updates,sprite:t.sprite,id:"editor-toolbar"},on:{reprocess:t.refresh3Ddisplay}}),i("div",{staticClass:"w3-cell-row",attrs:{id:"editor-body"}},[i("div",{staticClass:"w3-cell",attrs:{id:"sprite-view"}},[i("sprite-3d",{ref:"sprite3d",attrs:{sprite:t.sprite}})],1),i("div",{staticClass:"w3-cell w3-cell-top w3-bar-block w3-center",staticStyle:{width:"20%"}},[i("h3",{staticClass:"w3-bar-item w3-center w3-border-top w3-border-theme",attrs:{id:"size-title"}},[t._v("Size")]),i("form",{staticClass:"w3-container"},[t._m(0),i("input",{directives:[{name:"model",rawName:"v-model",value:t.sprite.colorMap.pixelSize,expression:"sprite.colorMap.pixelSize"}],staticClass:"w3-input w3-border",attrs:{type:"number"},domProps:{value:t.sprite.colorMap.pixelSize},on:{input:[function(e){e.target.composing||t.$set(t.sprite.colorMap,"pixelSize",e.target.value)},function(e){return t.handlePixelSizeInput(e.target.value)}]}}),t._m(1),i("input",{directives:[{name:"model",rawName:"v-model",value:t.sprite.colorMap.maxHeight,expression:"sprite.colorMap.maxHeight"}],staticClass:"w3-input w3-border",attrs:{type:"number"},domProps:{value:t.sprite.colorMap.maxHeight},on:{input:[function(e){e.target.composing||t.$set(t.sprite.colorMap,"maxHeight",e.target.value)},function(e){return t.handleMaxHeightInput(e.target.value)}]}})]),i("table",{staticClass:"w3-table"},[t._m(2),i("tr",[i("td",[t._v(" "+t._s(t.sprite.pixelMap.height*t.sprite.colorMap.pixelSize))]),i("td",[t._v(" "+t._s(t.sprite.pixelMap.width*t.sprite.colorMap.pixelSize))]),i("td",[t._v(" "+t._s(t.maxHeight))])])]),i("h3",{staticClass:"w3-bar-item w3-center w3-border-top w3-border-theme"},[t._v("ColorMap")]),i("color-map",{staticClass:"color-map",attrs:{"color-map":t.sprite.colorMap},on:{"select-color":function(e){return t.selectMeshes(e)},"update-color":function(e){return t.handleUpdateColor(e)}}})],1)])],1)},rt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"w3-text-theme"},[i("b",[t._v("Pixel Size")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"w3-text-theme"},[i("b",[t._v("Max Height")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("th",[t._v("Height")]),i("th",[t._v("Width")]),i("th",[t._v("Height")])])}],nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-bar w3-theme-l4"},[i("button",{staticClass:"w3-button w3-bar-item toolbar-button w3-large",attrs:{disabled:!t.currentlyUpdating},on:{click:t.save}},[i("i",{staticClass:"fa fa-floppy-o fa-lg",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\tSave\n\t\t")]),i("button",{staticClass:"w3-button w3-bar-item toolbar-button w3-large",on:{click:t.exportSprite}},[i("i",{staticClass:"fa fa-rocket fa-lg",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\tDownload STL\t\n\t\t")]),i("button",{staticClass:"w3-button w3-bar-item w3-border-right w3-border-theme toolbar-button w3-large",on:{click:t.processSprite}},[i("i",{staticClass:"fa fa-refresh fa-lg",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\tRe-build\t\n\t\t")])])},st=[],ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-dropdown-click"},[i("button",{staticClass:"w3-button",on:{click:function(e){return t.toggle()}}},[i("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t"+t._s(t.selectedMethod)+"\n\t")]),i("div",{staticClass:"w3-dropdown-content w3-bar-block w3-border",class:[t.show?"w3-show":"w3-hide"],attrs:{id:"Demo"}},t._l(t.methods,function(e){return i("button",{staticClass:"w3-bar-item w3-button"},[t._v(t._s(e))])}),0)])},at=[],lt={data:function(){return{methods:["default","hue"],selectedMethod:"default",show:!1}},methods:{toggle:function(){return this.show=!this.show}}},ct=lt,ut=Object(c["a"])(ct,ot,at,!1,null,null,null),pt=ut.exports,ht=i("a217"),dt=i.n(ht),ft={components:{methods:pt},computed:{currentlyUpdating:function(){return Object.keys(this.updates.colorMapItems).length||this.updates.maxHeight||this.updates.pixelSize}},props:{sprite:{type:Object,required:!0},updates:{type:Object,required:!0}},methods:{save:function(){var t,e,i;return console.log(this.updatedColorItems),i=`/api/color_maps/${this.sprite.colorMap.id}/`,t={method:"PATCH",body:JSON.stringify(this.updates),headers:{"Content-Type":"application/json"}},console.log(t.body),e=this,fetch(i,t).catch(function(t){return console.log(t)}).then(function(t){return console.log(t),e.updates.colorMapItems=[],e.$delete(e.updates,"maxHeight"),e.$delete(e.updates,"pixelSize")})},processSprite:function(){var t,e,i;return i="/api/sprites/"+this.sprite.id+"/process/",t={method:"PUT"},e=this,fetch(i,t).catch(function(t){return console.log(t)}).then(function(t){return t.json()}).then(function(t){return e.sprite.colorMap=t.colorMap,console.log(e.sprite),e.$emit("reprocess")})},exportSprite:function(){var t,e;return e="/api/sprites/"+this.sprite.id+"/export/",t={method:"PUT"},this,fetch(e,t).catch(function(t){return console.log(t)}).then(function(t){return t.json()}).then(function(t){return console.log(t),dt()(`${t.model3d}`,`${t.name}.stl`,"application/octet-stream")})}}},mt=ft,wt=(i("5060"),Object(c["a"])(mt,nt,st,!1,null,null,null)),bt=wt.exports,vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-dropdown-click"},[i("button",{staticClass:"w3-button w3-theme",on:{click:function(e){return t.toggle()}}},[i("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\tSelect profile\n\t")]),i("div",{staticClass:"w3-dropdown-content w3-bar-block w3-border",class:[t.show?"w3-show":"w3-hide"],attrs:{id:"Demo"}},t._l(t.profiles,function(e){return i("button",{staticClass:"w3-bar-item w3-button"},[t._v(t._s(e))])}),0)])},gt=[],_t={data:function(){return{profiles:["default"],show:!1}},methods:{toggle:function(){return this.show=!this.show}}},Ct=_t,xt=Object(c["a"])(Ct,vt,gt,!1,null,null,null),Mt=xt.exports,yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-container w3-center"},[i("div",{staticClass:"color-map-table"},[i("table",{staticClass:"w3-table w3-centered w3-hoverable w3-border w3-bordered"},[t._m(0),i("tbody",t._l(t.colorMap.colorMapItems,function(e){return i("color-item",{ref:t.colorRef(e),refInFor:!0,class:[t.selectedColor==t.colorRef(e)?"w3-theme":""],attrs:{color:e},on:{"update-color":function(e){return t.updateColor(e)},click:function(i){return t.selectColor(e)}}})}),1)])])])},St=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("Color")]),i("th",[t._v("R")]),i("th",[t._v("G")]),i("th",[t._v("B")]),i("th",[t._v("Height")])])])}],$t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",{on:{click:function(e){return t.$emit("click")}}},[i("td",{style:t.computeColor(t.color)}),i("td",[t._v(" "+t._s(t.color.r)+" ")]),i("td",[t._v(" "+t._s(t.color.g)+" ")]),i("td",[t._v(" "+t._s(t.color.b)+" ")]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.color.h,expression:"color.h",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.color.h},on:{input:[function(e){e.target.composing||t.$set(t.color,"h",t._n(e.target.value))},t.updateColor],blur:function(e){return t.$forceUpdate()}}})])])},kt=[],Nt={props:["color"],methods:{computeColor:function(t){return{"background-color":`rgb(${t.r},${t.g},${t.b})`}},updateColor:function(t){return this.$emit("update-color",this.color)}}},Ot=Nt,Tt=Object(c["a"])(Ot,$t,kt,!1,null,null,null),jt=Tt.exports,zt={components:{"color-item":jt},props:["colorMap"],data:function(){return{selectedColor:null}},methods:{colorRef:function(t){return`${t.r},${t.g},${t.b}`},selectColor:function(t){return this.$emit("select-color",t),this.selectedColor=this.colorRef(t)},updateColor:function(t){return this.$emit("update-color",t)}}},Pt=zt,Et=(i("805c"),Object(c["a"])(Pt,yt,St,!1,null,null,null)),Dt=Et.exports,It={components:{toolbar:bt,"sprite-3d":O,methods:pt,profiles:Mt,"color-map":Dt},props:["sprite"],data:function(){return{updates:{colorMapItems:[]}}},computed:{maxHeight:function(){var t,e,i,r,n;for(r=0,n=this.sprite.colorMap.colorMapItems,t=0,i=n.length;t<i;t++)e=n[t],function(t){if(t.h>r)r=t.h}(e);return r}},methods:{findMeshes:function(t){var e,i,r,n,s,o;for(e in s=[],i=this.$refs.sprite3d.getMeshes(),o=this,r=o.sprite.pixelMap.rows,r)n=r[e],function(e,r){var n,o,a;for(n in a=[],r)o=r[n],a.push(function(r,n){if(n.r===t.r&&n.g===t.g&&n.b===t.b)return s.push(i[e][r])}(n,o))}(e,n);return s},selectMeshes:function(t){return this.$refs.sprite3d.highlightMeshes(this.findMeshes(t))},updateMeshes:function(t){return this.$refs.sprite3d.updateMeshes(this.findMeshes(t),t.h)},handleUpdateColor:function(t){var e,i,r,n,s;for(this.updateMeshes(t),s=this.updates.colorMapItems,r=0,n=s.length;r<n;r++)e=s[r],e.id===t.id&&(i=e);return i?i.h=t.h:this.updates.colorMapItems.push(t)},handlePixelSizeInput:function(t){return this.$set(this.updates,"pixelSize",t),this.refresh3Ddisplay()},handleMaxHeightInput:function(t){return this.$set(this.updates,"maxHeight",t)},refresh3Ddisplay:function(){return this.$refs.sprite3d.clear(),this.$refs.sprite3d.build(),this.$refs.sprite3d.run()}}},Ht=It,Bt=(i("e8d7"),Object(c["a"])(Ht,it,rt,!1,null,null,null)),At=Bt.exports,Lt={components:{home:h,sprites:et,editor:At},data:function(){return{sideBarDisplay:"block",currentTab:"sprites",currentSprite:null}},methods:{selectTab:function(t){return this.currentTab=t},editSprite:function(t){return this.currentSprite=t,this.currentTab="editor"}}},Ft=Lt,Ut=(i("034f"),Object(c["a"])(Ft,s,o,!1,null,null,null)),Rt=Ut.exports;n["a"].config.productionTip=!1,new n["a"]({render:t=>t(Rt)}).$mount("#app")},"64a9":function(t,e,i){},"68ac":function(t,e,i){},"72e1":function(t,e,i){"use strict";var r=i("fc56"),n=i.n(r);n.a},7307:function(t,e,i){},"805c":function(t,e,i){"use strict";var r=i("d7a7"),n=i.n(r);n.a},"83c2":function(t,e,i){"use strict";var r=i("7307"),n=i.n(r);n.a},"86ea":function(t,e,i){},d7a7:function(t,e,i){},e8d7:function(t,e,i){"use strict";var r=i("0f90"),n=i.n(r);n.a},ee71:function(t,e,i){"use strict";var r=i("1949"),n=i.n(r);n.a},f564:function(t,e,i){},fc56:function(t,e,i){}});
//# sourceMappingURL=app.ad0bb3a2.js.map