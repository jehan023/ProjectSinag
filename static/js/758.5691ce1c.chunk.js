"use strict";(self.webpackChunksinag_project=self.webpackChunksinag_project||[]).push([[758],{3758:function(e,a,t){t.r(a);var s=t(885),n=t(2791),i=(t(5636),t(1968)),c=t.n(i),r=t(8014),d=t(6355),l=t(4373),o=t(1578),h=t(7692),u=t(9126),m=t(71),v=t(184);function p(e,a){a.setHumidityValue;var t=(0,n.useState)(!1),i=(0,s.Z)(t,2),p=i[0],x=i[1],j=(0,n.useState)(null),f=(0,s.Z)(j,2),N=(f[0],f[1]),w=e.selectedSL,_=e.sameDate,g=e.allData,S=(0,n.useState)("-"),T=(0,s.Z)(S,2),Z=T[0],D=T[1],y=(0,n.useState)("-"),F=(0,s.Z)(y,2),b=F[0],A=F[1],C=(0,n.useState)("-"),B=(0,s.Z)(C,2),L=B[0],k=B[1],E=(0,n.useState)("-"),O=(0,s.Z)(E,2),W=O[0],I=O[1],M=(0,n.useState)(0),Y=(0,s.Z)(M,2),H=Y[0],P=Y[1],V=(0,n.useState)(0),G=(0,s.Z)(V,2),q=G[0],K=G[1];(0,n.useEffect)((function(){U()}),[]),(0,n.useEffect)((function(){z(),J()}),[g]);var U=function(){try{x(!0),fetch("https://api.openweathermap.org/data/2.5/weather?lat=14.4506&lon=120.9828&appid=a09978101e59b60cb76ea444b36760cc&units=metric").then((function(e){return e.json()})).then((function(e){D($(e.sys.sunrise)),A($(e.sys.sunset)),k(e.main.temp),I(e.weather[0].description)})).catch((function(e){return N(e)})).finally(x(!1))}catch(e){console.error(e)}};function $(e){return new Date(1e3*e).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})}var z=function(){var e=g.reduce((function(e,a,t,s){if(1===a.charging){var n=s[t+1];if(n&&n.date===a.date&&(1===n.charging||0===n.charging)){var i=new Date(a.date).toISOString().split("T")[0],c=new Date("".concat(i,"T").concat(a.time,":00Z")),r=(new Date("".concat(i,"T").concat(n.time,":00Z"))-c)/36e5,d=e.find((function(e){return e.date===a.date}));d?d.charging_time+=r:e.push({date:a.date,charging_time:r})}}return e}),[]),a=e.reduce((function(e,a){return e+a.charging_time}),0)/e.length;P(parseFloat(a).toFixed(2))},J=function(){var e=g.reduce((function(e,a,t,s){if(1===a.led_status){var n=s[t+1],i=a.time.split(":"),c=parseInt(i[0]);if(n&&n.date===a.date&&(1===n.led_status||0===n.led_status)){var r=new Date(a.date).toISOString().split("T")[0],d=new Date("".concat(r,"T").concat(a.time,":00Z")),l=(new Date("".concat(r,"T").concat(n.time,":00Z"))-d)/36e5;if(0===n.led_status&&(l-=1/60),c>=18){var o=e.find((function(e){return e.date==="A-"+a.date}));o?o.on_time+=l:e.push({date:"A-"+a.date,on_time:l})}if(c<=6){var h=e.find((function(e){return e.date==="B-"+a.date}));h?h.on_time+=l:e.push({date:"B-"+a.date,on_time:l})}}if(n&&n.date!==a.date&&(1===n.led_status||0===n.led_status)){var u=new Date(a.date).toISOString().split("T")[0],m=new Date("".concat(u,"T").concat(a.time,":00Z")),v=(new Date("".concat(u,"T23:59:59Z"))-m)/36e5;if(0===n.led_status&&(v-=1/60),c>=18){var p=e.find((function(e){return e.date==="A-"+a.date}));p?p.on_time+=v:e.push({date:"A-"+a.date,on_time:v})}if(c<=6){var x=e.find((function(e){return e.date==="B-"+a.date}));x?x.on_time+=v:e.push({date:"B-"+a.date,on_time:v})}}}return e}),[]).reduce((function(e,a,t,s){var n=a.date;if(n.startsWith("A")){var i=s[t+1];if(i.date.startsWith("B")){var c=e.find((function(e){return e.date===a.date}));c?c.on_time=a.on_time+i.on_time:e.push({date:n,on_time:a.on_time+i.on_time})}else{var r=e.find((function(e){return e.date===a.date}));r?r.on_time=a.on_time:e.push({date:n,on_time:a.on_time})}}return e}),[]),a=e.reduce((function(e,a){return e+a.on_time}),0)/e.length;K(parseFloat(a).toFixed(2))};return(0,v.jsxs)("div",{className:"overview-container",children:[p?(0,v.jsx)(c(),{type:"spokes",color:"#0f1b2a",height:550,width:375,className:"loading-api"}):"",(0,v.jsx)("div",{className:"",children:(0,v.jsx)("h3",{className:"my-0",children:"System Overview"})}),(0,v.jsxs)("div",{className:"overview-container-wrapper",children:[(0,v.jsx)("div",{className:"sl-overview-container",children:(0,v.jsxs)("div",{className:"sl-wrapper mb-3",children:[(0,v.jsx)("div",{className:"sl-overview-card",children:(0,v.jsxs)("div",{className:"card-content",children:[(0,v.jsx)(d.f38,{className:"sl-icon"}),(0,v.jsxs)("h3",{children:[function(){var e=0;return _.forEach((function(a){e+=a.pv_power})),parseFloat(.08333*e).toFixed(2)}(),"Wh"]}),(0,v.jsx)("p",{children:"Current Yield"})]})}),(0,v.jsx)("div",{className:"sl-overview-card",children:(0,v.jsxs)("div",{className:"card-content",children:[(0,v.jsx)(r.FMY,{className:"sl-icon"}),(0,v.jsxs)("h3",{children:[function(){var e=g.reduce((function(e,a){var t=e.find((function(e){return e.date===a.date}));return t?t.gen_power+=.08333*parseFloat(a.pv_power):e.push({date:a.date,gen_power:.08333*a.pv_power}),e}),[]).reduce((function(e,a){return Math.max(e,a.gen_power)}),0);return parseFloat(e).toFixed(2)}(),"Wh"]}),(0,v.jsx)("p",{children:"Highest Yield"})]})}),(0,v.jsx)("div",{className:"sl-overview-card",children:(0,v.jsxs)("div",{className:"card-content",children:[(0,v.jsx)(d.rV$,{className:"sl-icon"}),(0,v.jsx)("h3",{children:w.battCapacity.split(" ")[1]}),(0,v.jsx)("p",{children:"Battery Capacity"})]})}),(0,v.jsx)("div",{className:"sl-overview-card",children:(0,v.jsxs)("div",{className:"card-content",children:[(0,v.jsx)(m.WEr,{className:"sl-icon"}),(0,v.jsxs)("h3",{children:[isNaN(H)?0:H,"hr"]}),(0,v.jsx)("p",{children:"Avg. Charging Time"})]})}),(0,v.jsx)("div",{className:"sl-overview-card",children:(0,v.jsxs)("div",{className:"card-content",children:[(0,v.jsx)(o.PnF,{className:"sl-icon"}),(0,v.jsxs)("h3",{children:[isNaN(q)?0:q,"hr"]}),(0,v.jsx)("p",{children:"Avg. ON Time"})]})}),(0,v.jsx)("div",{className:"sl-overview-card",children:(0,v.jsxs)("div",{className:"card-content",children:[(0,v.jsx)(l.oV2,{className:"sl-icon"}),(0,v.jsx)("h3",{children:w.lamp}),(0,v.jsx)("p",{children:"LED Lamp"})]})})]})}),(0,v.jsxs)("div",{className:"sl-temp-container",children:[(0,v.jsxs)("div",{className:"sl-wrapper",children:[(0,v.jsxs)("div",{className:"weather-wrapper",children:[(0,v.jsx)("div",{className:"icon-wrapper",children:(0,v.jsx)(h.weT,{className:"weather-icon"})}),(0,v.jsxs)("div",{className:"temp-container",children:[(0,v.jsxs)("h2",{className:"temp-value",children:[L,"\xb0C"]}),(0,v.jsx)("h2",{className:"device-title",children:"Las Pi\xf1as, PH"}),(0,v.jsx)("h6",{children:(0,v.jsx)("i",{children:W})})]})]}),(0,v.jsxs)("div",{className:"weather-container",children:[(0,v.jsxs)("div",{className:"overview-content-container sunrise-container",children:[(0,v.jsx)("div",{className:"content-wrap",children:(0,v.jsx)("div",{className:"icon-wrapper",children:(0,v.jsx)(u.YKx,{className:"s-icon"})})}),(0,v.jsxs)("div",{className:"content-wrap",children:[(0,v.jsx)("h2",{className:"sunrise-value",children:Z}),(0,v.jsx)("h6",{className:"gmt",children:"(GMT+8)"}),(0,v.jsx)("p",{children:"Sunrise"})]})]}),(0,v.jsxs)("div",{className:"overview-content-container sunset-container",children:[(0,v.jsx)("div",{className:"content-wrap",children:(0,v.jsx)("div",{className:"icon-wrapper",children:(0,v.jsx)(u.qud,{className:"s-icon"})})}),(0,v.jsxs)("div",{className:"content-wrap",children:[(0,v.jsx)("h2",{className:"sunset-value",children:b}),(0,v.jsx)("h6",{className:"gmt",children:"(GMT+8)"}),(0,v.jsx)("p",{children:"Sunset"})]})]})]})]}),(0,v.jsx)("div",{className:"dv-container",children:(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{className:"device-title",children:"Location"}),(0,v.jsx)("p",{className:"location-txt",children:w.location})]})})]})]})]})}a.default=(0,n.memo)(p)}}]);
//# sourceMappingURL=758.5691ce1c.chunk.js.map