"use strict";(self.webpackChunksinag_project=self.webpackChunksinag_project||[]).push([[703],{2703:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(885),r=n(2791),o=n(9513),c=n.n(o),i=(n(8639),n(6355)),s=n(2982),u=n(429),l=n(1948),d=n(3623),p=n(184);l.kL.register(l.uw,l.f$,l.ZL,l.Dx,l.u,l.De,u.ZP);var m=function(e){var t=e.data,n=e.viewMode,o=(0,r.useState)([]),c=(0,a.Z)(o,2),i=c[0],u=c[1],l=(0,r.useState)([]),m=(0,a.Z)(l,2),f=m[0],y=m[1],b=(0,r.useState)([]),v=(0,a.Z)(b,2),h=(v[0],v[1]);(0,r.useEffect)((function(){try{switch(u([]),y([]),n){case"day":t.map((function(e){y((function(t){return[].concat((0,s.Z)(t),[e.pv_power])})),h((function(t){return[].concat((0,s.Z)(t),[e.pv_power])})),u((function(t){return[].concat((0,s.Z)(t),[e.time])}))}));break;case"month":t.reduce((function(e,t){var n=e.find((function(e){return e.date===t.date}));return n?n.pv_gen+=.16667*parseFloat(t.pv_power):e.push({date:t.date,pv_gen:.16667*t.pv_power}),e}),[]).map((function(e){y((function(t){return[].concat((0,s.Z)(t),[e.pv_gen])})),u((function(t){return[].concat((0,s.Z)(t),[e.date])}))}));break;case"year":for(var e=["January","February","March","April","May","June","July","August","September","October","November","December"],r={},o=0;o<t.length;o++){var c=t[o].date.split(" "),i=e.indexOf(c[0]),l=c[2],d="".concat(e[i],"-").concat(l),p=t[o].pv_power;r[d]?r[d]+=p:r[d]=p}var m={};for(var f in r){var b=f,v=r[f];m[b]?m[b]+=v:m[b]=v}var g=[];for(var x in m){var Z=x.split("-"),k=(0,a.Z)(Z,2),w=k[0],j=(k[1],e.indexOf(w)+1),_=m[x];g.push({month:e[j-1],sum:_})}g.map((function(e){y((function(t){return[].concat((0,s.Z)(t),[e.sum])})),h((function(t){return[].concat((0,s.Z)(t),[e.sum])})),u((function(t){return[].concat((0,s.Z)(t),[e.month])}))}));break;default:return}}catch(D){}}),[t,n]);var g={labels:i,datasets:[{label:"Generate (Wh)",data:f,backgroundColor:"rgba(255, 99, 132, 1)"}]};return(0,p.jsx)(d.$Q,{options:{responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!0,text:"Energy (Wh)",font:{size:24}},zoom:{pan:{enabled:!0,mode:"x"}}}},data:g})};l.kL.register(l.uw,l.f$,l.ZL,l.Dx,l.u,l.De,u.ZP);l.kL.register(l.f$,l.uw,l.ZL,l.od,l.jn,l.De,l.u,l.Gu,l.ST,l.vn,u.ZP);var f=function(e){var t=e.data,n=e.viewMode,o=(0,r.useState)([]),c=(0,a.Z)(o,2),i=c[0],u=c[1],l=(0,r.useState)([]),m=(0,a.Z)(l,2),f=m[0],y=m[1],b=(0,r.useState)([]),v=(0,a.Z)(b,2),h=v[0],g=v[1],x=(0,r.useState)([]),Z=(0,a.Z)(x,2),k=Z[0],w=Z[1];(0,r.useEffect)((function(){try{switch(u([]),y([]),g([]),w([]),n){case"day":t.map((function(e){y((function(t){return[].concat((0,s.Z)(t),[e.batt_level])})),u((function(t){return[].concat((0,s.Z)(t),[e.time])})),g((function(t){return[].concat((0,s.Z)(t),[e.led_status])})),w((function(t){return[].concat((0,s.Z)(t),[e.charging])}))}));break;case"month":t.reduce((function(e,t){var n=e.find((function(e){return e.date===t.date}));return n?n.level=Math.max(n.level,parseFloat(t.batt_level)):e.push({date:t.date,level:t.batt_level}),e}),[]).map((function(e){y((function(t){return[].concat((0,s.Z)(t),[e.level])})),u((function(t){return[].concat((0,s.Z)(t),[e.date])}))}));break;case"year":for(var e=["January","February","March","April","May","June","July","August","September","October","November","December"],r={},o={},c=0;c<t.length;c++){var i=t[c].date.split(" "),l=e.indexOf(i[0]),d=i[2],p="".concat(e[l],"-").concat(d),m=t[c].batt_level;r[p]?(r[p]+=m,o[p]++):(r[p]=m,o[p]=1)}var f=[];for(var b in r){var v=b.split("-"),h=(0,a.Z)(v,2),x=h[0],Z=(h[1],e.indexOf(x)+1),k=r[b]/o[b];f.push({month:e[Z-1],level:k})}f.map((function(e){y((function(t){return[].concat((0,s.Z)(t),[e.level])})),u((function(t){return[].concat((0,s.Z)(t),[e.month])}))}));break;default:return}}catch(j){}}),[t,n]);var j={labels:i,datasets:[{type:"line",label:"Lamp",data:h,backgroundColor:"rgb(207, 0, 15, 0.8)",borderColor:"rgb(207, 0, 15, 0.8)",yAxisID:"y1",stepped:!0},{type:"line",label:"Charging",data:k,backgroundColor:"rgba(28, 164, 63, 0.8)",borderColor:"rgba(28, 164, 63, 0.8)",yAxisID:"y1",stepped:!0},{type:"bar",label:"Level (%)",data:f,backgroundColor:"rgba(9, 15, 30, 0.8)",yAxisID:"y2"}]};return(0,p.jsx)(d.kL,{options:{responsive:!0,interaction:{intersect:!1,mode:"index"},scales:{y2:{type:"linear",position:"left",stack:"batt"},y1:{type:"linear",offset:!0,position:"right",stack:"batt",min:0,max:1,ticks:{stepSize:1}}},plugins:{legend:{position:"bottom"},title:{display:!0,text:"Battery Level",font:{size:24}},zoom:{pan:{enabled:!0,mode:"x"}}}},data:j})};l.kL.register(l.f$,l.uw,l.ZL,l.od,l.jn,l.De,l.u,l.Gu,l.ST,l.vn,u.ZP);var y=function(e){var t=e.data,n=e.viewMode,o=(0,r.useState)([]),c=(0,a.Z)(o,2),i=c[0],u=c[1],l=(0,r.useState)([]),m=(0,a.Z)(l,2),f=m[0],y=m[1],b=(0,r.useState)([]),v=(0,a.Z)(b,2),h=v[0],g=v[1],x=(0,r.useState)([]),Z=(0,a.Z)(x,2),k=Z[0],w=Z[1];(0,r.useEffect)((function(){try{switch(u([]),y([]),g([]),w([]),n){case"day":t.map((function(e){u((function(t){return[].concat((0,s.Z)(t),[e.time])})),y((function(t){return[].concat((0,s.Z)(t),[e.pv_power])})),g((function(t){return[].concat((0,s.Z)(t),[e.temp])})),w((function(t){return[].concat((0,s.Z)(t),[e.lux])}))}));break;case"month":var e=t.reduce((function(e,t){var n=e.find((function(e){return e.date===t.date}));return n?(n.sys_power+=.16667*parseFloat(t.pv_power),n.sys_temp+=parseFloat(t.temp),n.sys_lux+=parseFloat(t.lux),n.count+=1):e.push({date:t.date,sys_power:.16667*t.pv_power,sys_temp:t.temp,sys_lux:t.lux,count:1}),e}),[]);e.map((function(e){u((function(t){return[].concat((0,s.Z)(t),[e.date])})),y((function(t){return[].concat((0,s.Z)(t),[e.sys_power])})),g((function(t){return[].concat((0,s.Z)(t),[e.sys_temp/e.count])})),w((function(t){return[].concat((0,s.Z)(t),[e.sys_lux/e.count])}))})),console.table(e);break;case"year":for(var r=["January","February","March","April","May","June","July","August","September","October","November","December"],o={},c={},i={},l={},d=0;d<t.length;d++){var p=t[d].date.split(" "),m=r.indexOf(p[0]),f=p[2],b="".concat(r[m],"-").concat(f),v=t[d].pv_power,h=t[d].temp,x=t[d].lux;o[b]?(o[b]+=v,c[b]+=h,i[b]+=x,l[b]++):(o[b]=v,c[b]=h,i[b]=x,l[b]=1)}var Z=[];for(var k in o){var j=k.split("-"),_=(0,a.Z)(j,2),D=_[0],S=(_[1],r.indexOf(D)+1),C=o[k]/l[k],N=c[k]/l[k],M=i[k]/l[k];Z.push({month:r[S-1],generate:C,temp:N,lux:M})}Z.map((function(e){y((function(t){return[].concat((0,s.Z)(t),[e.generate])})),g((function(t){return[].concat((0,s.Z)(t),[e.temp])})),w((function(t){return[].concat((0,s.Z)(t),[e.lux])})),u((function(t){return[].concat((0,s.Z)(t),[e.month])}))}));break;default:return}}catch(L){}}),[t,n]);var j={labels:i,datasets:[{type:"line",label:"Temperature (\xb0C)",backgroundColor:"rgb(4, 59, 92, 1)",data:h,borderColor:"rgb(4, 59, 92, 1)",yAxisID:"y1"},{type:"line",label:"Ambient Light (lux)",backgroundColor:"rgb(22, 160, 133, 1)",data:k,borderColor:"rgb(22, 160, 133, 1)",yAxisID:"y"},{type:"line",label:"Generation (Wh)",data:f,backgroundColor:"rgb(207, 0, 15, 1)",borderColor:"rgb(207, 0, 15, 1)",yAxisID:"y1"}]};return(0,p.jsx)(d.kL,{options:{responsive:!0,interaction:{intersect:!1,mode:"index"},plugins:{legend:{position:"bottom"},title:{display:!0,text:"Energy Production",font:{size:24}},zoom:{pan:{enabled:!0,mode:"x"}}},scales:{y:{type:"linear",position:"right"},y1:{type:"linear",position:"left"}}},data:j})};function b(e){var t=(0,r.useState)(new Date),n=(0,a.Z)(t,2),o=n[0],s=n[1],u=(0,r.useState)(!1),l=(0,a.Z)(u,2),d=l[0],b=l[1],v=new Date(2022,10,1),h=(0,r.useState)("day"),g=(0,a.Z)(h,2),x=g[0],Z=g[1],k=(0,r.useState)({month:"long",day:"numeric",year:"numeric"}),w=(0,a.Z)(k,2),j=w[0],_=w[1],D=function(e){e.value;var t=e.onClick;return(0,p.jsx)(i.IiJ,{className:"date-picker-icon",onClick:t})},S=function(e){Z(e),_("month"===e?{month:"long",year:"numeric"}:"year"===e?{year:"numeric"}:{month:"long",day:"numeric",year:"numeric"})},C=j,N=o.toLocaleDateString("en-US",C),M=e.data.filter((function(e){var t=new Date(e.date),n=t.getMonth(),a=t.getDate(),r=t.getFullYear(),o=new Date(N),c=o.getMonth(),i=o.getDate(),s=o.getFullYear();switch(x){case"day":default:return n===c&&a===i&&r===s;case"month":return n===c&&r===s;case"year":return r===s}}));return(0,p.jsxs)("div",{className:"analysis-container",children:[(0,p.jsx)("div",{className:"d-flex align-items-center my-0",children:(0,p.jsx)("h3",{className:"my-0",children:"System Analysis"})}),(0,p.jsxs)("div",{className:"d-flex align-items-center",children:[(0,p.jsx)("div",{className:"analysis-date-picker w-50 py-1",children:(0,p.jsxs)("div",{className:"date-picker-container d-flex justify-content-start align-items-center gap-2",children:[(0,p.jsx)(D,{onClick:function(){b(!d)}}),(0,p.jsx)("h6",{className:"my-0",children:N})]})}),"     ",(0,p.jsxs)("div",{className:"analysis-date-type w-100 d-flex justify-content-end gap-2",children:[(0,p.jsx)("button",{className:"day"===x?"btn date-type-btn-active btn date-type-btn":"btn date-type-btn",onClick:function(){return S("day")},children:"Day"}),(0,p.jsx)("button",{className:"month"===x?"btn date-type-btn-active btn date-type-btn":"btn date-type-btn",onClick:function(){return S("month")},children:"Month"}),(0,p.jsx)("button",{className:"year"===x?"btn date-type-btn-active btn date-type-btn":"btn date-type-btn",onClick:function(){return S("year")},children:"Year"})]})]}),d&&(0,p.jsx)("div",{className:"calendar-container",children:(0,p.jsx)(c(),{selected:o,onChange:function(e){s(e),b(!1)},showMonthYearPicker:"month"===x,showYearPicker:"year"===x,customInput:(0,p.jsx)(p.Fragment,{}),popperPlacement:"top-start",inline:!0,minDate:v,maxDate:new Date})}),(0,p.jsxs)("div",{className:"analysis-section mt-3",children:[(0,p.jsx)("div",{className:"chart energy-chart mb-4",children:(0,p.jsx)(m,{data:M,viewMode:x})}),(0,p.jsx)("div",{className:"chart mb-4",children:(0,p.jsx)(y,{data:M,viewMode:x,className:"chart"})}),(0,p.jsx)("div",{className:"chart",children:(0,p.jsx)(f,{data:M,viewMode:x,className:"chart"})})]})]})}var v=(0,r.memo)(b)}}]);
//# sourceMappingURL=703.f0d6fc03.chunk.js.map