(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[945],{3835:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var l=a(5893),n=a(7294),s=a(9635),r=a.n(s),c=a(1664),i=a.n(c);function o(e){let{label:t,buttonStyle:a,ariaLabel:s,buttonType:c="button",target:o,disabled:u=!1,onClick:d}=e,_=(0,n.useRef)(null),b=e=>{let t=document.querySelector(e);try{t.scrollIntoView({behavior:"smooth"},!0)}catch(e){console.error(e)}},p=e=>{e.preventDefault(),d&&d(e);let t=_.current.getAttribute("data-target");b(t)},m=e=>{if("Enter"===e.key||" "===e.key){e.preventDefault();let t=_.current.getAttribute("data-target");b(t)}};return(0,l.jsx)(l.Fragment,{children:"link"===c?(0,l.jsx)(i(),{href:o,legacyBehavior:!0,children:(0,l.jsx)("a",{className:[r().base,r()[a]].join(" "),"aria-label":s||t,"aria-labelledby":s?"".concat(ID,"-label"):null,children:(0,l.jsx)("span",{className:r().label,children:t})})}):(0,l.jsx)("button",{className:[r().base,r()[a]].join(" "),"aria-label":s||t,"aria-labelledby":s?"".concat(ID,"-label"):null,type:"cta"===c?"button":c,"data-target":o,onClick:"cta"===c?p:null,onKeyDown:"cta"===c?m:null,ref:_,disabled:u,children:(0,l.jsx)("span",{className:r().label,children:t})})})}},6945:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var l=a(5893),n=a(7294),s=a(2190),r=a.n(s),c=a(2225),i=a(3520),o=a(6572),u=a(3935),d=a(5152),_=a.n(d),b=a(1756),p=a.n(b);function m(e){let{content:t}=e;return(0,l.jsxs)("div",{className:p().base,children:[(0,l.jsx)(c.Z,{level:"3",mainText:"Equipment example:",parentClassNames:[p().heading]}),t.map((e,t)=>(0,l.jsxs)("div",{className:p().specWrapper,children:[(0,l.jsx)(c.Z,{level:"4",mainText:e.list.title,parentClassNames:[p().listHeading]}),(0,l.jsx)("ul",{className:p().list,children:e.list.items.map((e,t)=>(0,l.jsx)("li",{className:p().listItem,children:e},t))})]},t))]})}var x=a(3835);let h=_()(()=>a.e(920).then(a.bind(a,5920)),{loadableGenerated:{webpack:()=>[5920]},ssr:!1});function j(e){let{iconName:t,heading:a,text:s,description:d,id:_,modalContainer:b,modalContent:p}=e,j=(0,n.useId)(),[f,y]=(0,n.useState)(!1),[N,v]=(0,n.useState)(!1),C=(0,n.useRef)(null),g=(0,n.useCallback)(e=>{e.preventDefault(),v(!N)},[N]),k=(0,n.useCallback)(e=>{v(!N)},[N]);return(0,n.useEffect)(()=>{y(!0)},[]),(0,l.jsxs)("div",{className:r().base,id:j,children:[(0,l.jsxs)("div",{className:r().content,ref:C,onClick:g,children:[(0,l.jsx)(o.Z,{className:r().icon,iconName:t}),(0,l.jsx)(c.Z,{className:r().heading,level:3,mainText:a}),s&&(0,l.jsx)(i.Z,{className:r().text,text:s})]}),f&&b.current?(0,u.createPortal)((0,l.jsxs)(h,{controlledBy:j,isOpen:N,handleClose:k,children:[(0,l.jsx)(c.Z,{mainText:a,hasSeparator:!0}),(0,l.jsx)(i.Z,{text:d}),(0,l.jsx)(m,{content:p}),(0,l.jsx)("div",{className:r().controlContainer,children:(0,l.jsx)(x.Z,{label:"Contact-us!",buttonStyle:"primary",buttonType:"cta",target:"#contact",onClick:k})})]}),b.current):null]})}},9635:function(e){e.exports={base:"button_base__9U8D7",primary:"button_primary__Lu5M_",secondary:"button_secondary__hsrHJ",label:"button_label__jsxAH"}},2190:function(e){e.exports={base:"product-card_base__5tTAb",content:"product-card_content__WMCVy",icon:"product-card_icon__Tnfd4",controlContainer:"product-card_controlContainer__EacJr"}},1756:function(e){e.exports={base:"product-details_base__heMDo",heading:"product-details_heading__Eyn1L",specWrapper:"product-details_specWrapper__SwTvv",listHeading:"product-details_listHeading__t3yKX",list:"product-details_list__zsMVq",listItem:"product-details_listItem__5IuCj"}}}]);