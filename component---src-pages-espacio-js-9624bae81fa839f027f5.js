"use strict";(self.webpackChunkaagnes=self.webpackChunkaagnes||[]).push([[612],{3306:function(e,t,a){a.r(t);var r=a(9230),n=a(7294),o=a(3605),i=a(3744),c=a(5055),l=[{id:"casaCedros",name:"Casa Cedros",location:"Tapalpa, Jalisco",year:"2022",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}],s=function(e){var t=e.data,a=t.projectPhotos.edges.reduce((function(e,t){var a;return Object.assign({},e,((a={})[t.node.relativeDirectory.replace("project_","")]={photos:[]},a))}),{});t.projectPhotos.edges.forEach((function(e){a[e.node.relativeDirectory.replace("project_","")].photos.push(e.node.childImageSharp)}));var r=l.map((function(e,t){var r=a[e.id.replace("project_","")].photos;return Object.assign({},e,{photos:r})}));return n.createElement("section",{className:"w-full h-full scroll-pt-24 overflow-scroll snap-y snap-mandatory"},n.createElement("div",{className:"h-24 w-full"}),n.createElement(u,{projectData:r}))},u=function(e){var t=e.projectData,a=(0,n.useRef)([]),r=(0,n.useRef)();a.current.length!==t.length&&(a.current=Array(t.length).fill().map((function(e,t){return a.current[t]||(0,n.createRef)()})));var o=(0,c.RO)(a,"-150px"),l=(0,n.useState)(0),s=l[0],u=l[1];(0,n.useEffect)((function(){u((0,c.ME)(o[0]))}),[o]);return n.createElement("div",{ref:r},t.map((function(e,r){var c="project-wrapper-"+r,l=o.includes(c);return[n.createElement("div",{key:"wrapper-"+r,className:"hidden md:block flex-shrink-0 w-24 lg:w-48 h-fit sticky float-right",style:{top:l||s>r?24*r+96:"auto",bottom:s>r?"auto":24*(t.length-r)}},n.createElement("button",{onClick:function(){return e=r,a.current[e].current.scrollIntoView({behavior:"smooth"}),void setTimeout((function(){a.current[e].current.scrollIntoView({behavior:"smooth"})}),1500);var e}},n.createElement(i.QE,{customStyle:"mb-2 text-left "+(l?"opacity-100":"opacity-20")},e.name)),n.createElement(i.Fy,{customStyle:"mb-1 transition-opacity duration-500 "+(l?"opacity-100":"opacity-0")},e.location),n.createElement(i.Fy,{customStyle:"mb-1 transition-opacity duration-500 "+(l?"opacity-100":"opacity-0")},e.year)),n.createElement(m,{projectData:e,elementId:c,key:r,isOnScreen:l,innerRef:a.current[r]})]})))},m=function(e){var t=e.projectData,a=e.elementId,o=e.isOnScreen,c=e.innerRef;return n.createElement("div",{className:"flex justify-end md:mx-10 mb-4 transition-opacity duration-500 "+(o?"opacity-100":"opacity-10"),ref:c,id:a},n.createElement("div",{className:"grid lg:grid-cols-[repeat(2,minmax(100px,_450px))] gap-4 mr-4"},n.createElement("div",{className:"flex flex-col md:hidden justify-end items-end snap-start"},n.createElement(i.QE,{customStyle:"mb-2 text-left "+(o?"opacity-100":"opacity-20")},t.name),n.createElement(i.Fy,{customStyle:"mb-1 transition-opacity duration-500"},t.location),n.createElement(i.Fy,{customStyle:"mb-1 transition-opacity duration-500"},t.year)),t.photos.map((function(e,t){return console.log(e.gatsbyImageData),n.createElement(r.G,{image:(0,r.c)(e),className:"snap-start "+(e.gatsbyImageData.width>e.gatsbyImageData.height?"md:col-span-2":"md:col-span-1"),alt:"Aagnes"})}))))};s.Layout=o.Z,t.default=s}}]);
//# sourceMappingURL=component---src-pages-espacio-js-9624bae81fa839f027f5.js.map