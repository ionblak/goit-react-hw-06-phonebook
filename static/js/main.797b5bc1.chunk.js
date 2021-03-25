(this["webpackJsonpgoit-react-hw-06-phonedook"]=this["webpackJsonpgoit-react-hw-06-phonedook"]||[]).push([[0],{12:function(e,t,n){e.exports={form:"ContactForm_form__2hdSK",label:"ContactForm_label__1EAPN",input:"ContactForm_input__2A224"}},37:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),o=n(14),i=n.n(o),u=n(20),l=n(9),b=n(6),s=n(7),d=n(17),j=n(16),m=Object(b.b)("contacts/add"),p=Object(b.b)("contacts/delete"),O=Object(b.b)("contacts/filterOut"),f=n(3),h=Object(b.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(r={},Object(d.a)(r,m,(function(e,t){return function(e,t){return void 0!==e.find((function(e){return e.name===t.name}))?(alert("".concat(t.name," is already in contacts")),e):[].concat(Object(j.a)(e),[t])}(e,t.payload)})),Object(d.a)(r,p,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),r)),x=Object(b.c)("",Object(d.a)({},O,(function(e,t){return t.payload}))),g=Object(f.c)({items:h,filter:x}),v=n(23),C={key:"contacts",storage:n.n(v).a,blacklist:["filter"]},y=Object(b.a)({reducer:{contacts:Object(s.g)(C,g)},devTools:!1,middleware:Object(b.d)({serializableCheck:{ignoredActions:[s.a,s.f,s.b,s.c,s.d,s.e]}})}),k=Object(s.h)(y),N=(n(37),n(8)),w=n(1),S=Object(N.a)({container:{margin:{right:"auto",left:"auto",top:"20px"},padding:"20px",width:"400px"}}),_=function(e){var t=e.children,n=S();return Object(w.jsx)("div",{className:n.container,children:t})},F=Object(N.a)({button:{marginLeft:"10px",backgroundColor:"white",border:["1px","solid","grey"],borderRadius:"5px",cursor:"pointer","&:hover":{backgroundColor:" rgba(116, 113, 255, 0.34)"}},item:{marginBottom:"10px"}}),D=function(e){var t=e.name,n=e.number,r=e.id,a=e.onDeleteContact,c=F();return Object(w.jsxs)("li",{className:c.item,children:[Object(w.jsx)("span",{children:t}),": ",Object(w.jsx)("span",{children:n}),Object(w.jsx)("button",{className:c.button,type:"button",onClick:function(){return a(r)},children:"Delete"})]})},A=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},E=Object(l.b)((function(e){var t=e.contacts,n=t.items,r=t.filter;return{filteredContacts:A(n,r)}}),(function(e){return{onDeleteContact:function(t){return e(p(t))}}}))((function(e){var t=e.filteredContacts,n=e.onDeleteContact;return Object(w.jsx)("ul",{children:t.map((function(e){return Object(w.jsx)(D,{id:e.id,name:e.name,number:e.number,onDeleteContact:n},e.id)}))})})),H=Object(N.a)({input:{padding:"5px",outline:"none","&:focus":{border:["2px","solid","blue"],boxShadow:["inset","0px","0px","3px","3px","rgba(116, 113, 255, 0.34)"]}}}),L=Object(l.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onHandleChange:function(t){return e(O(t.target.value))}}}))((function(e){var t=e.value,n=e.onHandleChange,r=H();return Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{className:r.titel,children:"Find contacts by name"}),Object(w.jsx)("input",{className:r.input,type:"text",placeholder:"Search contact",name:"filter",value:t,onChange:n})]})})),R=n(19),q=Object(N.a)({button:{cursor:"pointer",margin:{right:"auto",left:"auto",top:"20px",bottom:"20px"},display:"block",padding:"5px",width:"140px",backgroundColor:"transparent",borderRadius:"5px","&:hover":{backgroundColor:" rgba(116, 113, 255, 0.34)"}}}),B=function(){var e=q();return Object(w.jsx)("button",{className:e.button,type:"submit",children:"Add contact"})},J=n(12),K=n.n(J),P=n(42),T=Object(l.b)(null,(function(e){return{onSubmitForm:function(t){return e(m(t))}}}))((function(e){var t=e.onSubmitForm,n=Object(P.a)(),r=Object(P.a)(),c=Object(a.useState)(""),o=Object(R.a)(c,2),i=o[0],u=o[1],l=Object(a.useState)(""),b=Object(R.a)(l,2),s=b[0],d=b[1],j=function(e){var t=e.currentTarget,n=t.name,r=t.value;"name"===n&&u(r),"number"===n&&d(r)},m=function(){u(""),d("")};return Object(w.jsxs)("form",{className:K.a.form,onSubmit:function(e){var n={id:Object(P.a)(),name:i,number:s};e.preventDefault(),t(n),m()},children:[Object(w.jsx)("label",{className:K.a.label,htmlFor:n,children:"Name"}),Object(w.jsx)("input",{className:K.a.input,id:n,type:"text",name:"name",required:!0,placeholder:"Enter name",value:i,onChange:j}),Object(w.jsx)("label",{className:K.a.label,htmlFor:r,children:"Number"}),Object(w.jsx)("input",{className:K.a.input,id:r,type:"tel",name:"number",required:!0,placeholder:"Enter you number",value:s,onChange:j}),Object(w.jsx)(B,{})]})}));var z=function(){return Object(w.jsxs)(_,{children:[Object(w.jsx)("h1",{children:"Phonebook"}),Object(w.jsx)(T,{}),Object(w.jsx)("h2",{children:"Contacts"}),Object(w.jsx)(L,{}),Object(w.jsx)(E,{})]})};i.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(l.a,{store:y,children:Object(w.jsx)(u.a,{loading:null,persistor:k,children:Object(w.jsx)(z,{})})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.797b5bc1.chunk.js.map