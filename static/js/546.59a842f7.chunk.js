/*! For license information please see 546.59a842f7.chunk.js.LICENSE.txt */
(self.webpackChunksinag_project=self.webpackChunksinag_project||[]).push([[546],{5706:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return H}});var n=r(885),i=r(1413),a=r(2982),s=r(2791),o=r(5987),c=r(1694),l=r.n(c),d=r(2007),u=r.n(d),m=r(184),f=["xxl","xl","lg","md","sm","xs"],p="xs",g=s.createContext({prefixes:{},breakpoints:f,minBreakpoint:p});g.Consumer,g.Provider;function h(e,t){var r=(0,s.useContext)(g).prefixes;return e||r[t]||t}var b=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],y=(u().string,u().bool,u().bool,u().bool,u().bool,s.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.fluid,s=e.rounded,c=e.roundedCircle,d=e.thumbnail,u=(0,o.Z)(e,b);return r=h(r,"img"),(0,m.jsx)("img",(0,i.Z)((0,i.Z)({ref:t},u),{},{className:l()(n,a&&"".concat(r,"-fluid"),s&&"rounded",c&&"rounded-circle",d&&"".concat(r,"-thumbnail"))}))})));y.displayName="Image",y.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var v=y,j=(r(3360),r(6439)),x=r(6549),w=r(7293),N=r(3946),O=r.p+"static/media/laptop-header.fc77829e1651d43946f2.png",D=r.p+"static/media/fd1img.7b3a7c8c407c2eb39098.png",A=r.p+"static/media/fd2img.6ba6cd016824153d4a39.png",S=r.p+"static/media/fd3img.80c1d5729bbce2046f81.png",P=r.p+"static/media/fd4img.1e116f64ee2c15f5bc6a.png",C=r.p+"static/media/fd5img.3005e475876eda14a9d8.png",L=r.p+"static/media/fd6img.4230be2e4210e25d0ab7.png",Z=r.p+"static/media/react-logo.52d2c261eeb0caeee773.png",E=r.p+"static/media/lora-logo.fd5678b3b7e50bd1b8ca.png",k=r.p+"static/media/arduino-logo.27d13a40e2d139d92813.png",I=r.p+"static/media/gsheets-logo.8b4b02911e74bc8287e6.jpg",R=r.p+"static/media/vscode-logo.6de3ed4e5a0c3cb60ce7.png";var H=function(e){var t=e.page,r=e.handlePage,o=[{name:"ALLADA, EARL FRANCES NICOLI",role:"Developer",dp:w},{name:"DE VERA, MIAKA NICOLE",role:"Developer",dp:x},{name:"HADJISAID, JEHAN",role:"Developer",dp:j},{name:"PANGANIBAN, JOHN CARLO",role:"Developer",dp:N}].map((function(e){return(0,m.jsxs)("div",{className:"dev-card text-center d-flex align-items-center flex-column",children:[(0,m.jsx)(v,{src:e.dp,alt:"img-dev",className:"dev-image mb-2",roundedCircle:!0}),(0,m.jsx)("p",{children:e.name}),(0,m.jsx)("p",{children:e.email}),(0,m.jsx)("p",{children:e.role})]})})),c=(0,s.useState)([{id:1,img:D,title:"Live Status Updates",desc:"Our dashboard provides live updates on the current power, energy yield, battery life, and environmental parameters.",descDetailed:"With this feature, you can monitor your solar street lights from the comfort of your office all while ensuring that your solar streetlights are always working efficiently, providing a safe and well-lit environment for your community",showDetailed:!1},{id:2,img:A,title:"Long Range Communication",desc:"Ensure that you are in control of your street lights even if they are situated on different areas.",descDetailed:'LoRa\'s reliable and secure data transmission is made possible by its long-range capabilities, low power consumption, and robustness, which are further enhanced by its unique modulation scheme called "Chirp Spread Spectrum" (CSS), enabling reliable transmission over long distances while using low power and resisting interference.',showDetailed:!1},{id:3,img:S,title:"Anomaly Reports",desc:"Shows any anomaly or issues detected within the system. This can be accessed on the Reports Page.",descDetailed:"The anoomaly report feature in our monitoring portal empowers users to respond promptly to any issues that may affect their solar street lights, minimizing downtime and ensuring optimal performance.",showDetailed:!1},{id:4,img:P,title:"Remote Control",desc:"A physical remote control is included for on-site management of your solar street lights.",descDetailed:"The remote features buttons for Auto, On, Off, Brightness (+), Brightness (-), 3H, 5H, and 8H. The Auto button adjusts lighting output based on ambient light levels, while the On/Off and Brightness (+/-) buttons offer manual control. The 3H, 5H, and 8H buttons allow easy scheduling of lighting, ensuring proper illumination for community safety.",showDetailed:!1},{id:5,img:C,title:"Cost-Effective Solution",desc:"Our solar streetlight monitoring system offers a cost-effective solution for communities seeking reliable and efficient lighting.",descDetailed:" By using renewable energy and optimizing energy consumption, our system reduces electricity and maintenance costs. Additionally, our remote management feature enables easy on-site control, reducing the need for manual adjustments and maintenance visits.",showDetailed:!1},{id:6,img:L,title:"Data Analysis",desc:"Sinag includes a powerful data analysis capabilities that enables you to continuously monitor critical system parameters.",descDetailed:"These parameters include battery charge and discharge, energy generation, and battery level. By utilizing data collected from solar street lights, we can promptly detect and address any problems, thereby ensuring that your streetlights function at their best at all times.",showDetailed:!1}]),l=(0,n.Z)(c,2),d=l[0],u=l[1],f=d.map((function(e,t){return(0,m.jsxs)("div",{className:"feature-card".concat(e.showDetailed?" show-detailed":""),children:[(0,m.jsx)("img",{src:e.img,alt:"feature-img",className:"fc-img"}),(0,m.jsx)("p",{className:"feature-title",children:e.title}),(0,m.jsx)("p",{className:"feature-desc",children:e.desc}),(0,m.jsx)("div",{className:"feature-btn-container",children:(0,m.jsxs)("button",{className:"feature-btn",onClick:function(){return function(e){u((function(t){var r=(0,a.Z)(t);return r[e-1]=(0,i.Z)((0,i.Z)({},r[e-1]),{},{showDetailed:!r[e-1].showDetailed}),r}))}(t+1)},children:[" ",e.showDetailed?"See Less":"More"]})}),(0,m.jsx)("p",{className:"feature-desc-detailed",children:e.descDetailed})]},t)}));return(0,m.jsxs)("div",{className:"home-container",children:[(0,m.jsxs)("div",{className:"header",children:[(0,m.jsx)("img",{className:"laptop-img",src:O,alt:"Laptop"}),(0,m.jsxs)("div",{className:"header-content",children:[(0,m.jsx)("p",{className:"title",children:"SINAG"}),(0,m.jsxs)("p",{className:"mb-4",children:["Bringing sustainable illumination ",(0,m.jsx)("br",{})," for a brighter and greener future"]}),(0,m.jsx)("div",{className:"learn-btn-container",children:(0,m.jsx)("button",{className:"Home"===t?"learn-btn":"learn-btn hide-on-page",onClick:function(){r("ProductOverview")},children:"Learn More "})})]})]}),(0,m.jsxs)("div",{className:"features-desc",children:[(0,m.jsx)("p",{className:"fd-title",children:"Our Features"}),(0,m.jsx)("p",{className:"fd-desc",children:"Discover how our innovative technology allows you to remotely monitor and optimize the performance of your solar streetlights, reducing costs and increasing efficiency."}),(0,m.jsx)("div",{className:"feature-card-container",children:f})]}),(0,m.jsxs)("div",{className:"dev-section",children:[(0,m.jsx)("h3",{className:"devs-section-header",children:"Meet the Developers"}),(0,m.jsx)("div",{className:"dev-card-section d-flex justify-content-center gap-5",children:o})]}),(0,m.jsxs)("div",{className:"tools-section",children:[(0,m.jsx)("p",{className:"t-title",children:"Our Project Toolbox"}),(0,m.jsxs)("div",{className:"tools-row",children:[(0,m.jsx)("div",{className:"tools-card",children:(0,m.jsx)("img",{src:Z,alt:"ReactLogo"})}),(0,m.jsx)("div",{className:"tools-card",children:(0,m.jsx)("img",{src:E,alt:"LoRaLogo"})}),(0,m.jsx)("div",{className:"tools-card",children:(0,m.jsx)("img",{src:R,alt:"VSLogo"})}),(0,m.jsx)("div",{className:"tools-card",children:(0,m.jsx)("img",{src:I,alt:"GSheetsLogo"})}),(0,m.jsx)("div",{className:"tools-card",children:(0,m.jsx)("img",{src:k,alt:"ArduinoLogo"})})]})]})]})}},1694:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var s=i.apply(null,r);s&&e.push(s)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)n.call(r,o)&&r[o]&&e.push(o)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},6439:function(e,t,r){"use strict";e.exports=r.p+"static/media/JHpic.feafb54c3a59227e9336.JPG"},7293:function(e,t,r){"use strict";e.exports=r.p+"static/media/EFNApic.78c14b66abf352f4620a.png"},3946:function(e,t,r){"use strict";e.exports=r.p+"static/media/JCPpic.fe388fa4e49b1f57c994.png"},6549:function(e,t,r){"use strict";e.exports=r.p+"static/media/MDVpic.e6a9e71719ef5b5cd27e.jpg"},4942:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(9142);function i(e,t,r){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},1413:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(4942);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},5987:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(3366);function i(e,t){if(null==e)return{};var r,i,a=(0,n.Z)(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}},3366:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,{Z:function(){return n}})},2982:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(907);var i=r(181);function a(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=546.59a842f7.chunk.js.map