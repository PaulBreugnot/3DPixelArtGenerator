(function(t){function e(e){for(var r,a,o=e[0],l=e[1],c=e[2],p=0,h=[];p<o.length;p++)a=o[p],n[a]&&h.push(n[a][0]),n[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],r=!0,o=1;o<i.length;o++){var l=i[o];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=i[0]))}return t}var r={},n={app:0},s=[];function a(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=r,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(i,r,function(e){return t[e]}.bind(null,r));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static/pixel3d/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var r=i("64a9"),n=i.n(r);n.a},"04a6":function(t,e,i){"use strict";var r=i("86ea"),n=i.n(r);n.a},"0f90":function(t,e,i){},1949:function(t,e,i){},"23b4":function(t,e,i){"use strict";var r=i("f564"),n=i.n(r);n.a},5060:function(t,e,i){"use strict";var r=i("68ac"),n=i.n(r);n.a},"56d7":function(t,e,i){"use strict";i.r(e);var r,n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"w3-main",attrs:{id:"main-body"}},[i("header",{staticClass:"w3-bar w3-bottombar w3-border-theme",attrs:{id:"main-header"}},[i("button",{staticClass:"w3-bar-item w3-mobile w3-button w3-xlarge top-button w3-wide w3-text-red",class:["home"==t.currentTab?"w3-theme":""],on:{click:function(e){t.currentTab="home"}}},[t._v("\n\t\t\tUNIPIX\n\t\t")]),i("button",{staticClass:"w3-bar-item w3-mobile w3-button w3-xlarge top-button",class:["sprites"==t.currentTab?"w3-theme":""],on:{click:function(e){t.currentTab="sprites"}}},[t._v("\n\t\t\t\tGallery\n\t\t")]),i("button",{staticClass:"w3-bar-item w3-mobile w3-button w3-xlarge top-button",class:["editor"==t.currentTab?"w3-theme":""],attrs:{disabled:!t.currentSprite},on:{click:function(e){t.currentTab="editor"}}},[t._v("\n\t\t\t\tEditor\n\t\t")]),i("a",{staticClass:"w3-bar-item w3-mobile w3-button w3-xlarge top-button",attrs:{href:"https://github.com/PaulBreugnot/UniPix/wiki",target:"_blank"}},[t._v("\n\t\t\tManual\n\t\t")]),t._m(0),t._m(1),t._m(2)]),i("keep-alive",["home"==t.currentTab?i("home",{on:{"update:currentTab":function(e){t.currentTab=e}}}):t._e(),"sprites"==t.currentTab?i("sprites",{attrs:{sprites:t.sprites},on:{"edit-sprite":function(e){return t.editSprite(e)}}}):t._e(),"editor"==t.currentTab?i("editor",{attrs:{id:"editor",sprite:t.currentSprite}}):t._e()],1)],1)])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"w3-bar-item w3-mobile w3-button w3-right  w3-xlarge top-button w3-hover-black",attrs:{href:"https://github.com/PaulBreugnot/UniPix",target:"_blank"}},[i("i",{staticClass:"fa fa-github fa-lg",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\tGitHub\n\t\t")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"w3-bar-item w3-mobile w3-button w3-right  w3-xlarge top-button w3-text-blue w3-hover-blue",attrs:{href:"https://twitter.com/PaulBreugnot",target:"_blank"}},[i("i",{staticClass:"fa fa-twitter fa-lg",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\tTwitter\n\t\t")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"w3-bar-item w3-mobile w3-button w3-right  w3-xlarge top-button w3-text-deep-purple w3-hover-deep-purple",attrs:{href:"https://join.slack.com/t/pixled/shared_invite/enQtNjYwMDczNTg3Mjk2LTJiMjZkMzhiZjgzYmVjNTgxZWViYmU3NjYzOWUzMWU5ZTQ4YmMyZjRiMzRjNjAxMjcxZTkwMTQyMmNkM2RmODM",target:"_blank"}},[i("i",{staticClass:"fa fa-slack",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\tSlack\n\t\t")])}],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-container"},[t._m(0),i("div",{staticClass:"w3-container w3-center",attrs:{id:"home-content"}},[t._m(1),i("div",{staticClass:"w3-container w3-center"},[i("img",{staticClass:"w3-margin-right",attrs:{src:t.publicPath+"kirby_2d.png",height:"200px"}}),i("img",{staticClass:"w3-margin-left",attrs:{src:t.publicPath+"kirby_3d.png",height:"200px"}})]),i("p",[t._v("\n\t\t\tNo 3D modeling skills are required to build your models : the algorithm handles a base\n\t\t\tmodel generation for you, that you can edit and customize simply by changing color\n\t\t\theights from the editor. You can then export your model as an .stl file, ready to load\n\t\t\tin your favourite 3D slicer.\n\t\t")]),i("div",{staticClass:"w3-cell-row w3-padding-16 w3-center"},[i("div",{staticClass:"w3-cell w3-mobile"},[t._m(2),i("img",{attrs:{src:t.publicPath+"vile_2d.png",height:"300px"}})]),i("div",{staticClass:"w3-cell w3-mobile"},[t._m(3),i("img",{attrs:{src:t.publicPath+"vile_3d.png",height:"300px"}})]),i("div",{staticClass:"w3-cell w3-mobile"},[t._m(4),i("img",{attrs:{src:t.publicPath+"vile_print.JPG",height:"300px"}})]),i("div",{staticClass:"w3-cell w3-mobile"},[t._m(5),i("img",{attrs:{src:t.publicPath+"vile_paint.png",height:"300px"}})])]),i("div",{staticClass:"w3-container w3-margin-top"},[i("button",{staticClass:"w3-button w3-blue w3-xxlarge w3-round-large",on:{click:function(e){return t.$emit("update:currentTab","sprites")}}},[t._v("Start Building Your Sprites!")])])])])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"w3-center",attrs:{id:"home-title"}},[i("b",[t._v("Welcome to UNIPIX 1.0!")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("b",{staticClass:"w3-wide w3-text-red"},[t._v("UNIPIX")]),t._v(" is a Web Application that allows you to easily generate 3D models\n\t\t\tfrom your favourite retro game sprites and pixel arts.\n\t\t")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",[i("b",[t._v("1. Choose a sprite")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",[i("b",[t._v("2. Import it and build your model")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",[i("b",[t._v("3. Print it!")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",[i("b",[t._v("4. (Optional) Paint it!")])])}],c={data:function(){return{publicPath:"/static/pixel3d/"}}},u=c,p=(i("83c2"),i("2877")),h=Object(p["a"])(u,o,l,!1,null,null,null),d=h.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.selectedSprite?i("delete-sprite",{attrs:{sprite:t.selectedSprite,display:t.showConfirmDelete},on:{"hide-delete":t.hideDelete,"delete-sprite":t.deleteSprite}}):t._e(),i("new-sprite",{attrs:{display:t.displayNewSprite},on:{"new-sprite":t.addNewSprite,"update:display":function(e){t.displayNewSprite=e}}}),i("button",{staticClass:"w3-button w3-xlarge w3-round-large w3-margin-left w3-margin-top w3-blue",on:{click:function(e){t.displayNewSprite=!0}}},[i("i",{staticClass:"fa fa-upload fa-lg",attrs:{"aria-hidden":"true"}}),t._v("\n\t\tUpload New Sprite\n\t")]),i("div",{staticClass:"w3-row-padding"},t._l(t.sprites,function(e){return i("div",{staticClass:"w3-col l4 m6 s12 w3-padding-16"},[i("sprite",{attrs:{sprite:e},on:{"confirm-delete":t.confirmDelete,"edit-sprite":function(e){return t.$emit("edit-sprite",e)}}})],1)}),0)],1)},m=[],w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.sprite?i("div",{staticClass:"w3-card"},[t.renaming?i("header",{staticClass:"w3-cell-row w3-theme-d1 card-header"},[i("div",{staticClass:"w3-container w3-cell w3-cell-middle"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.sprite.name,expression:"sprite.name"}],staticClass:"w3-input w3-theme-l1 w3-border-0",attrs:{type:"text"},domProps:{value:t.sprite.name},on:{input:function(e){e.target.composing||t.$set(t.sprite,"name",e.target.value)}}})]),i("div",{staticClass:"w3-container w3-cell w3-cell-middle"},[i("button",{staticClass:"w3-button w3-right w3-hover-theme w3-theme-l1",on:{click:function(e){return t.renameSprite()}}},[t._v("OK")])])]):i("header",{staticClass:"w3-cell-row w3-padding w3-theme-d1 card-header"},[t.displayTools?i("div",{staticClass:"w3-dropdown-hover w3-cell w3-cell-middle w3-theme-d1"},[i("i",{staticClass:"fa fa-bars fa-2x",attrs:{"aria-hidden":"true"}}),i("div",{staticClass:"w3-dropdown-content w3-bar-block w3-border"},[i("button",{staticClass:"w3-bar-item w3-button",on:{click:function(e){return t.renamimgMode()}}},[i("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t\tRename\n\t\t\t\t")]),i("button",{staticClass:"w3-bar-item w3-button w3-text-red",on:{click:function(e){return t.$emit("confirm-delete",t.sprite)}}},[i("i",{staticClass:"fa fa-trash-o",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t\tDelete\n\t\t\t\t")]),i("button",{staticClass:"w3-bar-item w3-button",on:{click:function(e){return t.$emit("edit-sprite",t.sprite)}}},[i("i",{staticClass:"fa fa-cubes",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t\tEdit Model\t\n\t\t\t\t")])])]):t._e(),i("div",{staticClass:"w3-container w3-cell w3-cell-middle"},[i("h4",[t._v(t._s(t.sprite.name))])]),i("div",{staticClass:"w3-cell w3-cell-middle w3-right"},[t.displayTools?i("button",{staticClass:"w3-bar-item w3-button w3-large w3-blue w3-round-large",on:{click:function(e){return t.$emit("edit-sprite",t.sprite)}}},[i("i",{staticClass:"fa fa-cubes",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\tEdit Model\t\n\t\t")]):t._e()])]),i("div",{staticClass:"w3-row w3-center"},[i("button",{staticClass:"w3-button w3-bottombar w3-border-theme w3-hover-theme w3-half",class:["sprite-2d"==t.currentTab?"w3-theme-d1":""],on:{click:function(e){t.currentTab="sprite-2d"}}},[t._v("\n\t\t\t2D Sprite\n\t\t")]),i("button",{staticClass:"w3-button w3-bottombar w3-border-theme w3-hover-theme w3-half",class:["sprite-3d"==t.currentTab?"w3-theme-d1":""],on:{click:function(e){t.currentTab="sprite-3d"}}},[t._v("\n\t\t\t3D Model\n\t\t")])]),i("div",{staticClass:"sprite-view w3-padding-16 w3-center"},[i("keep-alive",["sprite-2d"==t.currentTab?i("sprite-2d",{attrs:{sprite:t.sprite}}):t._e(),"sprite-3d"==t.currentTab&&t.sprite.colorMap?i("sprite-3d",{attrs:{sprite:t.sprite,animate:""}}):t._e()],1),"sprite-3d"!=t.currentTab||t.sprite.colorMap?t._e():i("process-sprite",{attrs:{sprite:t.sprite},on:{"sprite-process":t.handleSpriteProcess}})],1)]):t._e()},b=[],g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{staticClass:"sprite-svg",attrs:{viewBox:t.viewBoxSize}},t._l(t.sprite.pixelMap.rows,function(e,r){return i("g",t._l(e,function(e,n){return i("g",[i("rect",{style:{fill:t.computeColor(e)},attrs:{x:10*n,y:10*r,width:"10",height:"10"}})])}),0)}),0)},v=[],_={props:["sprite"],computed:{viewBoxSize:function(){var t,e,i,r,n;return e=10*this.sprite.pixelMap.height,i=10*this.sprite.pixelMap.width,n=Math.max(e,i),t=(i-n)/2,r=(e-n)/2,`${t} ${r} ${n} ${n}`}},methods:{computeColor:function(t){return`rgb(${t.r},${t.g},${t.b})`}},mounted:function(){return console.log(this.sprite)}},C=_,x=(i("23b4"),Object(p["a"])(C,g,v,!1,null,null,null)),M=x.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("canvas",{ref:t.canvasName,staticClass:"sprite-canvas"})},$=[],S=i("633b");i("b234");r=function(t,e){var i;return i=new S["Scene"](t),i};var k={props:{sprite:{type:Object,required:!0},animate:{type:Boolean,default:!1}},data:function(){return{centerNode:null,engine:null,scene:null,camera:null,meshes:{},highlightLayer:null,highlightedMeshes:[]}},watch:{sprite:function(t,e){return this.$nextTick(function(){return this.clear(),this.initBuild(),this.build(),this.run()})}},computed:{canvasName:function(){return`canvas_${this.sprite.id}`}},methods:{lookForPixelHeightInColorMap:function(t){var e,i,r,n,s;for(i=0,s=this.sprite.colorMap.colorMapItems,r=0,n=s.length;r<n;r++)e=s[r],function(e){e.r===t.r&&e.g===t.g&&e.b===t.b&&(i=e.h)}(e);return i},buildPixel:function(t,e,i,r){var n,s;return[new S["Vector2"](0,0),new S["Vector2"](1,0),new S["Vector2"](1,1),new S["Vector2"](0,1)],n=this.lookForPixelHeightInColorMap(i),s={width:this.sprite.colorMap.pixelSize,height:this.sprite.colorMap.pixelSize,depth:1,updatable:!0},i=S["MeshBuilder"].CreateBox(`pixel_${t}_${e}`,s,r),i.scaling.z=n,i.position.y=(this.sprite.pixelMap.height-t)*this.sprite.colorMap.pixelSize,i.position.x=e*this.sprite.colorMap.pixelSize,i.position.z=-n/2,i.setParent(this.centerNode),i},buildCamera:function(){var t,e;return e=Math.max(this.sprite.pixelMap.width*this.sprite.colorMap.pixelSize,this.sprite.pixelMap.height*this.sprite.colorMap.pixelSize+10),t=new S["ArcRotateCamera"]("camera",-Math.PI/2,Math.PI/2,e,this.centerNode.position,this.scene),t},refreshCamera:function(){var t,e,i,r,n,s;for(this.camera.setTarget(this.centerNode.position),n=Math.max(this.sprite.pixelMap.width*this.sprite.colorMap.pixelSize,this.sprite.pixelMap.height*this.sprite.colorMap.pixelSize+10),this.camera.radius=n,t=[],s=Object.values(this.meshes),e=0,i=s.length;e<i;e++)r=s[e],function(e){var i,r,n,s,a;for(s=Object.values(e),a=[],i=0,r=s.length;i<r;i++)n=s[i],a.push(t.push(n))}(r);return this.camera.zoomOn(t)},buildLight:function(){return new S["HemisphericLight"]("light1",new S["Vector3"](1,0,0),this.scene)},animateSprite:function(){var t,e;return e=new BABYLON.Animation("myAnimation","rotation.y",30,S["Animation"].ANIMATIONTYPE_FLOAT,S["Animation"].ANIMATIONLOOPMODE_CYCLE),t=[],t.push({frame:0,value:0}),t.push({frame:150,value:2*Math.PI}),e.setKeys(t),this.centerNode.animations=[],this.centerNode.animations.push(e),this.scene.beginAnimation(this.centerNode,0,150,!0)},getMeshes:function(){return this.meshes},highlightMeshes:function(t){var e,i,r,n,s,a,o,l;for(a=this.highlightedMeshes,e=0,r=a.length;e<r;e++)s=a[e],this.highlightLayer.removeMesh(s);for(l=this,o=[],i=0,n=t.length;i<n;i++)s=t[i],o.push(function(t){return l.highlightedMeshes.push(t),l.highlightLayer.addMesh(t,S["Color3"].Blue())}(s));return o},updateMeshes:function(t,e){var i,r,n,s;for(s=[],i=0,r=t.length;i<r;i++)n=t[i],s.push(function(t){return t.scaling.z=e,t.position.z=-e/2}(n));return s},build:function(){var t,e,i,r,n,s,a,o,l;for(this.clear(),l=this,console.log("Removing current meshes..."),s=Object.values(this.meshes),e=0,i=s.length;e<i;e++)n=s[e],function(t){var e,i,r,n,s;for(n=Object.values(t),s=[],e=0,i=n.length;e<i;e++)r=n[e],s.push(l.scene.removeMesh(r))}(n);for(r in console.log("Computing center node..."),t=function(t,e,i){var r,n;return r=l.buildPixel(t,e,i,l.scene),n=new S["StandardMaterial"](`pixel_${t}_${e}_texture`,l.scene),n.diffuseColor=new S["Color3"](i.r/255,i.g/255,i.b/255),r.material=n,l.meshes[t]||(l.meshes[t]={}),l.meshes[t][e]=r},console.log("Building pixels..."),a=this.sprite.pixelMap.rows,a)o=a[r],function(e,i){var r,n,s;for(r in s=[],i)n=i[r],s.push(function(i,r){return t(e,i,r)}(r,n))}(r,o);if(this.refreshCamera(),this.animate)return this.animateSprite()},initBuild:function(){var t,e;return t=this.$refs[this.canvasName],this.engine=new S["Engine"](t,!0,{stencil:!0}),this.scene=r(this.engine,t),this.centerNode=new S["TransformNode"]("center",this.scene),this.centerNode.setAbsolutePosition(new S["Vector3"](this.sprite.pixelMap.width*this.sprite.colorMap.pixelSize/2,this.sprite.pixelMap.height*this.sprite.colorMap.pixelSize/2,0)),this.centerNode.rotation.z=-Math.PI/2,this.camera=this.buildCamera(),this.camera.attachControl(t,!1),this.buildLight(),this.highlightLayer=new S["HighlightLayer"]("hl",this.scene),this.highlightLayer.blurHorizontalSize=.1,this.highlightLayer.blurVerticalSize=.5,e=this,window.addEventListener("resize",function(){return e.engine.resize()})},clear:function(){return this.engine.stopRenderLoop()},run:function(){var t;return t=this,this.engine.runRenderLoop(function(){return t.scene.render()})}},mounted:function(){return this.initBuild(),this.build()},destroyed:function(){return this.clear()},deactivated:function(){return this.clear()},activated:function(){return this.run()}},N=k,j=(i("04a6"),Object(p["a"])(N,y,$,!1,null,null,null)),T=j.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-display-container",attrs:{id:"processContainer"}},[i("button",{staticClass:"w3-button w3-theme w3-display-middle w3-xlarge",on:{click:function(e){return t.processSprite()}}},[i("i",{staticClass:"fa fa-cogs fa-lg",attrs:{"aria-hidden":"true"}}),t._v("\n    Generate Model\n  ")])])},O=[],z={props:{sprite:{type:Object,required:!0}},methods:{processSprite:function(){var t,e,i;return i="/api/sprites/"+this.sprite.id+"/process/",t={method:"PUT"},e=this,fetch(i,t).catch(function(t){return console.log(t)}).then(function(t){return t.json()}).then(function(t){return e.$emit("sprite-process",e.sprite,t)})}}},E=z,D=(i("72e1"),Object(p["a"])(E,P,O,!1,null,null,null)),I=D.exports,H={props:{sprite:{type:Object,required:!0},displayTools:{type:Boolean,required:!1,default:!0}},components:{"sprite-2d":M,"sprite-3d":T,"process-sprite":I},data:function(){return{renaming:!1,currentTab:"sprite-2d"}},methods:{renamimgMode:function(){return this.renaming=!0},renameSprite:function(){var t,e,i;return i=`http://localhost:8000/api/sprites/${this.sprite.id}/`,t={method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({name:`${this.sprite.name}`})},e=this,fetch(i,t).catch(function(t){return console.log(t)}).then(function(t){return t.json()}).then(function(t){return e.sprite.name=t.name,e.renaming=!1})},handleSpriteProcess:function(t,e){return console.log(e),t.colorMap=e.colorMap}}},B=H,L=(i("ee71"),Object(p["a"])(B,w,b,!1,null,null,null)),U=L.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-modal",style:{display:t.modalDisplay}},[i("div",{staticClass:"w3-modal-content"},[i("header",{staticClass:"w3-theme w3-bar"},[i("h3",{staticClass:"w3-bar-item"},[t._v("Upload new sprite")]),i("button",{staticClass:"w3-button w3-bar-item w3-right w3-theme",on:{click:function(e){return t.$emit("update:display",!1)}}},[i("i",{staticClass:"fa fa-times fa-lg"})])]),i("div",{staticClass:"w3-container w3-margin w3-animate-opacity w3-animate-zoom w3-padding-16"},[t._m(0),i("input",{directives:[{name:"model",rawName:"v-model",value:t.spriteName,expression:"spriteName"}],staticClass:"w3-input w3-border w3-light-grey",attrs:{type:"text"},domProps:{value:t.spriteName},on:{input:function(e){e.target.composing||(t.spriteName=e.target.value)}}}),i("div",{staticClass:"w3-margin-top"},[t._m(1),i("input",{staticClass:"w3-input w3-border-0",attrs:{type:"file"},on:{change:t.selectFile}})]),i("div",{staticClass:"w3-margin-top"},[i("div",{staticClass:"w3-cell"},[i("button",{staticClass:"w3-btn w3-theme",attrs:{disabled:t.processing},on:{click:function(e){return t.uploadNewSprite()}}},[t.processing?i("span",[t._v("\n\t\t\t\t\tprocessing...\n\t\t\t\t\t")]):i("span",[t._v("\n\t\t\t\t\tUpload!\n\t\t\t\t\t")])])]),t.processing?i("div",{staticClass:"w3-cell"},[i("i",{staticClass:"fa fa-circle-o-notch fa-spin fa-lg fa-fw"})]):t._e()])])])])},F=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"w3-text-theme"},[i("b",[t._v("Sprite Name")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"w3-text-theme w3-margin-top"},[i("b",[t._v("Select File")])])}],R={props:{display:{type:Boolean,required:!0}},data:function(){return{showNewSprite:!1,selectedFile:null,spriteName:"",processing:!1}},computed:{modalDisplay:function(){return this.display?"block":"none"}},methods:{selectFile:function(t){var e;return this.selectedFile=t.target.files[0],e=/(\w+)\.\w+$/,e.test(this.selectedFile.name)?this.spriteName=e.exec(this.selectedFile.name)[1]:this.spriteName=this.selectedFile.name,console.log(this.spriteName)},uploadNewSprite:function(){var t,e,i,r;return this.processing=!0,r="http://localhost:8000/api/sprites/",t=new FormData,t.append("name",this.spriteName),t.append("sprite",this.selectedFile),e={method:"POST",body:t},i=this,fetch(r,e).catch(function(t){return console.log(t)}).then(function(t){return t.json()}).then(function(t){return i.processing=!1,console.log(t),i.processSprite(t.id),i.$emit("update:display",!1)})},processSprite:function(t){var e,i,r;return r=`http://localhost:8000/api/sprites/${t}/process/`,e={method:"PUT"},i=this,fetch(r,e).catch(function(t){return console.log(t)}).then(function(t){return t.json()}).then(function(t){return console.log(t),i.$emit("new-sprite",t)})}}},Y=R,q=Object(p["a"])(Y,A,F,!1,null,null,null),V=q.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-modal",class:[t.display?"w3-show":"w3-hide"]},[i("div",{staticClass:"w3-modal-content"},[t._m(0),i("div",{staticClass:"w3-container w3-center w3-row-padding"},[i("div",{staticClass:"w3-col l4 m3 s0 w3-padding-16"}),i("div",{staticClass:"w3-col l4 m6 s12 w3-padding-16"},[i("sprite",{attrs:{sprite:t.sprite,"display-tools":!1}})],1),i("div",{staticClass:"w3-col l4 m3 s0 w3-padding-16"})]),i("footer",{staticClass:"w3-container w3-cell-row w3-center"},[i("button",{staticClass:"w3-button w3-theme w3-xlarge w3-cell w3-margin",on:{click:function(e){return t.$emit("hide-delete")}}},[t._v("Cancel")]),i("button",{staticClass:"w3-button w3-red w3-xlarge w3-cell w3-margin",on:{click:function(e){return t.deleteSprite()}}},[t._v("Delete")])])])])},W=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"w3-container w3-center w3-theme-l1"},[i("h3",[t._v("Do you really want to delete this sprite?")])])}],Z={props:["display","sprite"],components:{sprite:U},methods:{deleteSprite:function(){var t,e,i;return i=`http://localhost:8000/api/sprites/${this.sprite.id}/`,t={method:"DELETE"},e=this,fetch(i,t).catch(function(t){return console.log(t)}).then(function(t){return e.$emit("delete-sprite",e.sprite)})}}},G=Z,Q=Object(p["a"])(G,J,W,!1,null,null,null),X=Q.exports,K={components:{sprite:U,"new-sprite":V,"delete-sprite":X},props:{sprites:{type:Array,required:!0}},data:function(){return{selectedSprite:null,displayNewSprite:!1,showConfirmDelete:!1}},methods:{confirmDelete:function(t){return this.selectedSprite=t,this.showConfirmDelete=!0},hideDelete:function(){return this.showConfirmDelete=!1},deleteSprite:function(t){var e,i;e=!1,i=0;while(!e)this.sprites[i].id===t.id&&(this.sprites.splice(i,1),e=!0),i++;return this.hideDelete()},addNewSprite:function(t){return this.sprites.unshift(t)}}},tt=K,et=Object(p["a"])(tt,f,m,!1,null,null,null),it=et.exports,rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("toolbar",{attrs:{updates:t.updates,sprite:t.sprite,id:"editor-toolbar"},on:{reprocess:t.refresh3Ddisplay}}),i("div",{staticClass:"w3-cell-row",attrs:{id:"editor-body"}},[i("div",{staticClass:"w3-cell",attrs:{id:"sprite-view"}},[i("sprite-3d",{ref:"sprite3d",attrs:{sprite:t.sprite}})],1),i("div",{staticClass:"w3-cell w3-cell-top w3-bar-block w3-center",staticStyle:{width:"20%"}},[i("h3",{staticClass:"w3-bar-item w3-center w3-border-top w3-border-theme",attrs:{id:"size-title"}},[t._v("Size")]),i("form",{staticClass:"w3-container"},[t._m(0),i("input",{directives:[{name:"model",rawName:"v-model",value:t.sprite.colorMap.pixelSize,expression:"sprite.colorMap.pixelSize"}],staticClass:"w3-input w3-border",attrs:{type:"number"},domProps:{value:t.sprite.colorMap.pixelSize},on:{input:[function(e){e.target.composing||t.$set(t.sprite.colorMap,"pixelSize",e.target.value)},function(e){return t.handlePixelSizeInput(e.target.value)}]}}),t._m(1),i("input",{directives:[{name:"model",rawName:"v-model",value:t.sprite.colorMap.maxHeight,expression:"sprite.colorMap.maxHeight"}],staticClass:"w3-input w3-border",attrs:{type:"number"},domProps:{value:t.sprite.colorMap.maxHeight},on:{input:[function(e){e.target.composing||t.$set(t.sprite.colorMap,"maxHeight",e.target.value)},function(e){return t.handleMaxHeightInput(e.target.value)}]}})]),i("table",{staticClass:"w3-table"},[t._m(2),i("tr",[i("td",[t._v(" "+t._s(t.sprite.pixelMap.height*t.sprite.colorMap.pixelSize))]),i("td",[t._v(" "+t._s(t.sprite.pixelMap.width*t.sprite.colorMap.pixelSize))]),i("td",[t._v(" "+t._s(t.maxHeight))])])]),i("h3",{staticClass:"w3-bar-item w3-center w3-border-top w3-border-theme"},[t._v("ColorMap")]),i("color-map",{staticClass:"color-map",attrs:{"color-map":t.sprite.colorMap},on:{"select-color":function(e){return t.selectMeshes(e)},"update-color":function(e){return t.handleUpdateColor(e)}}})],1)])],1)},nt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"w3-text-theme"},[i("b",[t._v("Pixel Size")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"w3-text-theme"},[i("b",[t._v("Max Height")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("th",[t._v("Height")]),i("th",[t._v("Width")]),i("th",[t._v("Height")])])}],st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-bar w3-theme-l4"},[i("button",{staticClass:"w3-button w3-bar-item toolbar-button w3-large",attrs:{disabled:!t.currentlyUpdating},on:{click:t.save}},[i("i",{staticClass:"fa fa-floppy-o fa-lg",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\tSave\n\t\t")]),i("button",{staticClass:"w3-button w3-bar-item toolbar-button w3-large",on:{click:t.exportSprite}},[i("i",{staticClass:"fa fa-rocket fa-lg",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\tDownload STL\t\n\t\t")]),i("button",{staticClass:"w3-button w3-bar-item w3-border-right w3-border-theme toolbar-button w3-large",on:{click:t.processSprite}},[i("i",{staticClass:"fa fa-refresh fa-lg",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\tRe-build\t\n\t\t")])])},at=[],ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-dropdown-click"},[i("button",{staticClass:"w3-button",on:{click:function(e){return t.toggle()}}},[i("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t"+t._s(t.selectedMethod)+"\n\t")]),i("div",{staticClass:"w3-dropdown-content w3-bar-block w3-border",class:[t.show?"w3-show":"w3-hide"],attrs:{id:"Demo"}},t._l(t.methods,function(e){return i("button",{staticClass:"w3-bar-item w3-button"},[t._v(t._s(e))])}),0)])},lt=[],ct={data:function(){return{methods:["default","hue"],selectedMethod:"default",show:!1}},methods:{toggle:function(){return this.show=!this.show}}},ut=ct,pt=Object(p["a"])(ut,ot,lt,!1,null,null,null),ht=pt.exports,dt=i("a217"),ft=i.n(dt),mt={components:{methods:ht},computed:{currentlyUpdating:function(){return Object.keys(this.updates.colorMapItems).length||this.updates.maxHeight||this.updates.pixelSize}},props:{sprite:{type:Object,required:!0},updates:{type:Object,required:!0}},methods:{save:function(){var t,e,i;return console.log(this.updatedColorItems),i=`/api/color_maps/${this.sprite.colorMap.id}/`,t={method:"PATCH",body:JSON.stringify(this.updates),headers:{"Content-Type":"application/json"}},console.log(t.body),e=this,fetch(i,t).catch(function(t){return console.log(t)}).then(function(t){return console.log(t),e.updates.colorMapItems=[],e.$delete(e.updates,"maxHeight"),e.$delete(e.updates,"pixelSize")})},processSprite:function(){var t,e,i;return i="/api/sprites/"+this.sprite.id+"/process/",t={method:"PUT"},e=this,fetch(i,t).catch(function(t){return console.log(t)}).then(function(t){return t.json()}).then(function(t){return e.sprite.colorMap=t.colorMap,console.log(e.sprite),e.$emit("reprocess")})},exportSprite:function(){var t,e;return e="/api/sprites/"+this.sprite.id+"/export/",t={method:"PUT"},this,fetch(e,t).catch(function(t){return console.log(t)}).then(function(t){return t.json()}).then(function(t){return console.log(t),ft()(`${t.model3d}`)})}}},wt=mt,bt=(i("5060"),Object(p["a"])(wt,st,at,!1,null,null,null)),gt=bt.exports,vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-dropdown-click"},[i("button",{staticClass:"w3-button w3-theme",on:{click:function(e){return t.toggle()}}},[i("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\tSelect profile\n\t")]),i("div",{staticClass:"w3-dropdown-content w3-bar-block w3-border",class:[t.show?"w3-show":"w3-hide"],attrs:{id:"Demo"}},t._l(t.profiles,function(e){return i("button",{staticClass:"w3-bar-item w3-button"},[t._v(t._s(e))])}),0)])},_t=[],Ct={data:function(){return{profiles:["default"],show:!1}},methods:{toggle:function(){return this.show=!this.show}}},xt=Ct,Mt=Object(p["a"])(xt,vt,_t,!1,null,null,null),yt=Mt.exports,$t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w3-container w3-center"},[i("div",{staticClass:"color-map-table"},[i("table",{staticClass:"w3-table w3-centered w3-hoverable w3-border w3-bordered"},[t._m(0),i("tbody",t._l(t.colorMap.colorMapItems,function(e){return i("color-item",{ref:t.colorRef(e),refInFor:!0,class:[t.selectedColor==t.colorRef(e)?"w3-theme":""],attrs:{color:e},on:{"update-color":function(e){return t.updateColor(e)},click:function(i){return t.selectColor(e)}}})}),1)])])])},St=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("Color")]),i("th",[t._v("R")]),i("th",[t._v("G")]),i("th",[t._v("B")]),i("th",[t._v("Height")])])])}],kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",{on:{click:function(e){return t.$emit("click")}}},[i("td",{style:t.computeColor(t.color)}),i("td",[t._v(" "+t._s(t.color.r)+" ")]),i("td",[t._v(" "+t._s(t.color.g)+" ")]),i("td",[t._v(" "+t._s(t.color.b)+" ")]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.color.h,expression:"color.h",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.color.h},on:{input:[function(e){e.target.composing||t.$set(t.color,"h",t._n(e.target.value))},t.updateColor],blur:function(e){return t.$forceUpdate()}}})])])},Nt=[],jt={props:["color"],methods:{computeColor:function(t){return{"background-color":`rgb(${t.r},${t.g},${t.b})`}},updateColor:function(t){return this.$emit("update-color",this.color)}}},Tt=jt,Pt=Object(p["a"])(Tt,kt,Nt,!1,null,null,null),Ot=Pt.exports,zt={components:{"color-item":Ot},props:["colorMap"],data:function(){return{selectedColor:null}},methods:{colorRef:function(t){return`${t.r},${t.g},${t.b}`},selectColor:function(t){return this.$emit("select-color",t),this.selectedColor=this.colorRef(t)},updateColor:function(t){return this.$emit("update-color",t)}}},Et=zt,Dt=(i("805c"),Object(p["a"])(Et,$t,St,!1,null,null,null)),It=Dt.exports,Ht={components:{toolbar:gt,"sprite-3d":T,methods:ht,profiles:yt,"color-map":It},props:["sprite"],data:function(){return{updates:{colorMapItems:[]}}},computed:{maxHeight:function(){var t,e,i,r,n;for(r=0,n=this.sprite.colorMap.colorMapItems,t=0,i=n.length;t<i;t++)e=n[t],function(t){if(t.h>r)r=t.h}(e);return r}},methods:{findMeshes:function(t){var e,i,r,n,s,a;for(e in s=[],i=this.$refs.sprite3d.getMeshes(),a=this,r=a.sprite.pixelMap.rows,r)n=r[e],function(e,r){var n,a,o;for(n in o=[],r)a=r[n],o.push(function(r,n){if(n.r===t.r&&n.g===t.g&&n.b===t.b)return s.push(i[e][r])}(n,a))}(e,n);return s},selectMeshes:function(t){return this.$refs.sprite3d.highlightMeshes(this.findMeshes(t))},updateMeshes:function(t){return this.$refs.sprite3d.updateMeshes(this.findMeshes(t),t.h)},handleUpdateColor:function(t){var e,i,r,n,s;for(this.updateMeshes(t),s=this.updates.colorMapItems,r=0,n=s.length;r<n;r++)e=s[r],e.id===t.id&&(i=e);return i?i.h=t.h:this.updates.colorMapItems.push(t)},handlePixelSizeInput:function(t){return this.$set(this.updates,"pixelSize",t),this.refresh3Ddisplay()},handleMaxHeightInput:function(t){return this.$set(this.updates,"maxHeight",t)},refresh3Ddisplay:function(){return this.$refs.sprite3d.clear(),this.$refs.sprite3d.build(),this.$refs.sprite3d.run()}}},Bt=Ht,Lt=(i("e8d7"),Object(p["a"])(Bt,rt,nt,!1,null,null,null)),Ut=Lt.exports,At={components:{home:d,sprites:it,editor:Ut},data:function(){return{sprites:[],sideBarDisplay:"block",currentTab:"home",currentSprite:null}},methods:{selectTab:function(t){return this.currentTab=t},editSprite:function(t){return this.currentSprite=t,this.currentTab="editor"},fetchSprites:function(){var t,e;return e="http://localhost:8000/api/sprites/",{headers:{accept:"application/json"}},t=this,fetch(e).catch(function(t){return console.log(t)}).then(function(t){return console.log(t),t.json()}).then(function(e){return console.log(e),t.sprites=e})}},mounted:function(){return this.fetchSprites()}},Ft=At,Rt=(i("034f"),Object(p["a"])(Ft,s,a,!1,null,null,null)),Yt=Rt.exports;n["a"].config.productionTip=!1,new n["a"]({render:t=>t(Yt)}).$mount("#app")},"64a9":function(t,e,i){},"68ac":function(t,e,i){},"72e1":function(t,e,i){"use strict";var r=i("fc56"),n=i.n(r);n.a},7307:function(t,e,i){},"805c":function(t,e,i){"use strict";var r=i("d7a7"),n=i.n(r);n.a},"83c2":function(t,e,i){"use strict";var r=i("7307"),n=i.n(r);n.a},"86ea":function(t,e,i){},d7a7:function(t,e,i){},e8d7:function(t,e,i){"use strict";var r=i("0f90"),n=i.n(r);n.a},ee71:function(t,e,i){"use strict";var r=i("1949"),n=i.n(r);n.a},f564:function(t,e,i){},fc56:function(t,e,i){}});
//# sourceMappingURL=app.dd18066b.js.map