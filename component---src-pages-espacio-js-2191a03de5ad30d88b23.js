"use strict";(self.webpackChunkaagnes=self.webpackChunkaagnes||[]).push([[612],{3306:function(e,t,a){a.r(t);var n=a(9230),r=a(7294),o=a(5414),i=a(3605),c=a(3744),l=a(5055),s=[{id:"casaCedros",name:"Casa Cedros",location:"Tapalpa, Jalisco",year:"2022",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}],u=function(e){var t=e.data,a=t.projectPhotos.edges.reduce((function(e,t){var a;return Object.assign({},e,((a={})[t.node.relativeDirectory.replace("project_","")]={photos:[]},a))}),{});t.projectPhotos.edges.forEach((function(e){a[e.node.relativeDirectory.replace("project_","")].photos.push(e.node.childImageSharp)}));var n=s.map((function(e,t){var n=a[e.id.replace("project_","")].photos;return Object.assign({},e,{photos:n})}));return r.createElement("section",{className:"w-full h-full scroll-pt-24 overflow-scroll snap-y snap-mandatory"},r.createElement(o.q,null,r.createElement("title",null,"Aagnes | Espacio")),r.createElement("div",{className:"h-24 w-full"}),r.createElement(m,{projectData:n}))},m=function(e){var t=e.projectData,a=(0,r.useRef)([]),n=(0,r.useRef)();a.current.length!==t.length&&(a.current=Array(t.length).fill().map((function(e,t){return a.current[t]||(0,r.createRef)()})));var o=(0,l.RO)(a,"-150px"),i=(0,r.useState)(0),s=i[0],u=i[1];(0,r.useEffect)((function(){u((0,l.ME)(o[0]))}),[o]);return r.createElement("div",{ref:n},t.map((function(e,n){var i="project-wrapper-"+n,l=o.includes(i);return[r.createElement("div",{key:"wrapper-"+n,className:"hidden md:block flex-shrink-0 w-24 lg:w-48 h-fit sticky float-right",style:{top:l||s>n?24*n+96:"auto",bottom:s>n?"auto":24*(t.length-n)}},r.createElement("button",{onClick:function(){return e=n,a.current[e].current.scrollIntoView({behavior:"smooth"}),void setTimeout((function(){a.current[e].current.scrollIntoView({behavior:"smooth"})}),1500);var e}},r.createElement(c.QE,{customStyle:"mb-2 text-left "+(l?"opacity-100":"opacity-20")},e.name)),r.createElement(c.Fy,{customStyle:"mb-1 transition-opacity duration-500 "+(l?"opacity-100":"opacity-0")},e.location),r.createElement(c.Fy,{customStyle:"mb-1 transition-opacity duration-500 "+(l?"opacity-100":"opacity-0")},e.year)),r.createElement(p,{projectData:e,elementId:i,key:n,isOnScreen:l,innerRef:a.current[n]})]})))},p=function(e){var t=e.projectData,a=e.elementId,o=e.isOnScreen,i=e.innerRef;return r.createElement("div",{className:"flex justify-end md:mx-10 mb-4 transition-opacity duration-500 "+(o?"opacity-100":"opacity-10"),ref:i,id:a},r.createElement("div",{className:"grid lg:grid-cols-[repeat(2,minmax(100px,_1450px))] gap-4 mr-4"},r.createElement("div",{className:"flex flex-col md:hidden justify-end items-end snap-start"},r.createElement(c.QE,{customStyle:"mb-2 text-left "+(o?"opacity-100":"opacity-20")},t.name),r.createElement(c.Fy,{customStyle:"mb-1 transition-opacity duration-500"},t.location),r.createElement(c.Fy,{customStyle:"mb-1 transition-opacity duration-500"},t.year)),t.photos.map((function(e,t){return r.createElement(n.G,{image:(0,n.c)(e),className:"snap-start "+(e.gatsbyImageData.width>e.gatsbyImageData.height?"md:col-span-2":"md:col-span-1")+" max-h-[90vh]",alt:"Aagnes"})}))))};u.Layout=i.Z,t.default=u}}]);
//# sourceMappingURL=component---src-pages-espacio-js-2191a03de5ad30d88b23.js.map