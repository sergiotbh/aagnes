"use strict";(self.webpackChunkaagnes=self.webpackChunkaagnes||[]).push([[612],{7054:function(e,t,a){var n=a(7294),r=a(9230),o=a(3744),i=a(5055),c=function(e){var t,a=e.projectData,i=e.elementId,c=e.isOnScreen,l=e.innerRef;return console.log("PROJ",a),n.createElement("div",{className:"flex justify-end md:mx-10 mb-4 transition-opacity duration-500 "+(c?"opacity-100":"opacity-10"),ref:l,id:i},n.createElement("div",{className:"grid lg:grid-cols-[repeat(2,minmax(100px,_1450px))] gap-4 mr-4"},n.createElement("div",{className:"flex flex-col md:hidden justify-end items-end snap-start"},n.createElement(o.QE,{customStyle:"mb-2 text-left "+(c?"opacity-100":"opacity-20")},a.name),n.createElement(o.Fy,{customStyle:"mb-1 transition-opacity duration-500"},a.location),n.createElement(o.Fy,{customStyle:"mb-1 transition-opacity duration-500"},a.year)),null===(t=a.photos)||void 0===t?void 0:t.map((function(e,t){return n.createElement(r.G,{key:"image"+t,image:(0,r.c)(e),className:"snap-start "+(e.gatsbyImageData.width>e.gatsbyImageData.height?"md:col-span-2":"md:col-span-1")+" max-h-[90vh]",alt:"Aagnes"})}))))};t.Z=function(e){var t=e.projectData,a=(0,n.useRef)([]),r=(0,n.useRef)();a.current.length!==t.length&&(a.current=Array(t.length).fill().map((function(e,t){return a.current[t]||(0,n.createRef)()})));var l=(0,i.RO)(a,"-150px"),s=(0,n.useState)(0),u=s[0],m=s[1];(0,n.useEffect)((function(){m((0,i.ME)(l[0]))}),[l]);return n.createElement("div",{ref:r},t.map((function(e,r){var i="project-wrapper-"+r,s=l.includes(i);return[n.createElement("div",{key:"wrapper-"+r,className:"hidden md:block flex-shrink-0 w-24 lg:w-48 h-fit sticky float-right",style:{top:s||u>r?24*r+96:"auto",bottom:u>r?"auto":24*(t.length-r)}},n.createElement("button",{onClick:function(){return e=r,a.current[e].current.scrollIntoView({behavior:"smooth"}),void setTimeout((function(){a.current[e].current.scrollIntoView({behavior:"smooth"})}),1500);var e}},n.createElement(o.QE,{customStyle:"mb-2 text-left "+(s?"opacity-100":"opacity-20")},e.name)),n.createElement(o.Fy,{customStyle:"mb-1 transition-opacity duration-500 "+(s?"opacity-100":"opacity-0")},e.location),n.createElement(o.Fy,{customStyle:"mb-1 transition-opacity duration-500 "+(s?"opacity-100":"opacity-0")},e.year)),n.createElement(c,{projectData:e,elementId:i,key:r,isOnScreen:s,innerRef:a.current[r]})]})))}},3306:function(e,t,a){a.r(t);var n=a(7294),r=a(5414),o=a(6781),i=a(7054),c=[{id:"casaCedros",name:"Casa Cedros",location:"Tapalpa, Jalisco",year:"2022",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}],l=function(e){var t=e.data,a=t.projectPhotos.edges.reduce((function(e,t){var a;return Object.assign({},e,((a={})[t.node.relativeDirectory.replace("project_","")]={photos:[]},a))}),{});t.projectPhotos.edges.forEach((function(e){a[e.node.relativeDirectory.replace("project_","")].photos.push(e.node.childImageSharp)}));var o=c.map((function(e,t){var n=a[e.id.replace("project_","")].photos;return Object.assign({},e,{photos:n})}));return n.createElement("section",{className:"w-full h-full scroll-pt-24 overflow-scroll snap-y snap-mandatory"},n.createElement(r.q,null,n.createElement("title",null,"Aagnes | Espacio")),n.createElement("div",{className:"h-24 w-full"}),n.createElement(i.Z,{projectData:o}))};l.Layout=o.Z,t.default=l}}]);
//# sourceMappingURL=component---src-pages-espacio-js-24145bca4d2124a05001.js.map