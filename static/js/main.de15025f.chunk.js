(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{116:function(e,t,c){},219:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(27),s=c.n(r),i=(c(207),c(53)),l=c(30),o=(c(116),c(17)),j=c(274),u=c(269),b=c(270),d=c(289),h=c(268),O=c(6),m=function(e){var t=e.children,c=e.onClick,n=e.tip,a=e.btnClassName,r=e.tipClassName,s=e.btnStyle;return Object(O.jsx)(d.a,{title:n,className:r,style:{btnStyle:s},children:Object(O.jsx)(h.a,{onClick:c,className:a,children:t})})},p=c(171),x=c.n(p),f=c(172),g=c.n(f),v=c(173),y=c.n(v),w=c(169),N=c(41),S=c(170),k=Object(w.a)({apiKey:"AIzaSyD-LcB8sagIHNWIEOf6dnV1T8iIpfeVpJE",authDomain:"enliven-30c7e.firebaseapp.com",projectId:"enliven-30c7e",storageBucket:"enliven-30c7e.appspot.com",messagingSenderId:"862598587365",appId:"1:862598587365:web:09f209bee1e21991ecc50c",measurementId:"G-7XQDY60B2W"}),C=Object(S.a)(k),I=Object(N.d)(k),E=c(32),R=c(82),U=a.a.createContext();function F(){return Object(n.useContext)(U)}function P(e){var t=e.children,c=Object(n.useState)(),a=Object(o.a)(c,2),r=a[0],s=a[1];Object(n.useEffect)((function(){return C.onAuthStateChanged((function(e){s(e)}))}),[]);var i={currentUser:r,signup:function(e,t){return Object(R.a)(C,e,t)},login:function(e,t){return Object(R.c)(C,e,t)},signout:function(){return Object(R.d)(C)},update:function(e,t,c,n){return Object(R.e)(C.currentUser,{displayName:e,email:t,photoURL:c,bio:n})}};return Object(O.jsx)(U.Provider,{value:i,children:t})}var W=c(114),L=function(e){var t=Object(n.useState)(0),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(null),i=Object(o.a)(s,2),l=i[0],j=i[1],u=Object(n.useState)(null),b=Object(o.a)(u,2),d=b[0],h=b[1],O=F().currentUser,m=Object(W.b)();return Object(n.useEffect)((function(){var t={contentType:e.type},c=new Date+"-"+e.name,n=Object(W.c)(m,"images/".concat(c)),a=Object(W.d)(n,e,t);a.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t),e.state}),(function(e){j(e)}),(function(){Object(W.a)(a.snapshot.ref).then((function(e){h(e),Object(E.a)(Object(E.b)(I,"images"),{url:e,createdAt:Object(E.i)(),user:O.displayName,userEmail:O.email}).then((function(){console.log("Image File (Url) Uploaded")}))}))}))}),[e]),{progress:a,url:d,error:l}},A=function(e){var t=e.file,c=e.setFile,a=L(t),r=a.url,s=a.progress;return Object(n.useEffect)((function(){r&&c(null)}),[r,c]),Object(O.jsx)("div",{className:"progress-bar",style:{width:s+"%"}})},D=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(n.useState)(null),d=Object(o.a)(j,2),h=d[0],p=d[1],f=F().currentUser,v=function(){document.getElementById("imageInput").click()},w=["image/png","image/jpeg"],N=function(e){e.preventDefault();var t=e.target.files[0];t&&w.includes(t.type)?(l(t),p("")):(l(null),alert("Please select an image file (png or jpg)"),p("Incorrect File Type"))},S=function(e){e.preventDefault(),Object(E.a)(Object(E.b)(I,"posts"),{content:c,createdAt:Object(E.i)(),user:f.displayName,userEmail:f.email}).then((function(){console.log("Posted")})).catch((function(e){alert(e.post),console.error()}))};return Object(O.jsxs)("form",{className:"",onSubmit:S,children:[Object(O.jsx)("h1",{children:"Make a New Post"}),Object(O.jsx)("hr",{}),Object(O.jsx)(u.a,{className:"posting",minRows:3,maxRows:3,style:{minWidth:375,minHeight:75},maxLength:250,placeholder:"Share your thoughts",value:c,onChange:function(e){return a(e.target.value)}}),i&&Object(O.jsx)(A,{file:i,setFile:l}),Object(O.jsxs)(b.a,{children:[Object(O.jsx)(m,{onClick:S,tip:"Click here to Post",children:Object(O.jsx)(x.a,{})}),Object(O.jsx)("input",{type:"file",id:"imageInput",hidden:"hidden",onChange:N}),Object(O.jsx)(m,{onClick:v,tip:"Click here to add a Photo",children:Object(O.jsx)(g.a,{})}),h&&Object(O.jsx)("div",{className:"error"}),Object(O.jsx)("input",{type:"file",id:"imageInput",hidden:"hidden",onChange:N}),Object(O.jsx)(m,{onClick:v,tip:"Click here to attach a file",children:Object(O.jsx)(y.a,{})})]})]})},B=c(272),q=c(273),T=c(271);function z(){var e=Object(T.a)({flexGrow:{flex:"1"},button:{backgroundColor:"#3c52b2",color:"#fff","&:hover":{backgroundColor:"#303f9f",color:"#fff"}}})();return Object(O.jsx)(B.a,{children:Object(O.jsx)(b.a,{className:"nav-container",children:Object(O.jsxs)("div",{className:e.flexGrow,children:[Object(O.jsx)(q.a,{className:e.button,variant:"outlined",style:{marginRight:200},color:"inherit",component:i.b,to:"/aboutus",children:"About Us"}),Object(O.jsx)(q.a,{className:e.button,variant:"outlined",style:{marginRight:200},color:"inherit",component:i.b,to:"/",children:"Home"}),Object(O.jsx)(q.a,{className:e.button,variant:"outlined",style:{marginRight:200},color:"inherit",component:i.b,to:"/news",children:"News"}),Object(O.jsx)(q.a,{className:e.button,variant:"outlined",color:"inherit",component:i.b,to:"/profile",children:"Profile"})]})})})}var Y=c(62),H=function(e){var t=Object(n.useState)(!0),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),l=i[0],j=i[1];return Object(n.useEffect)((function(){var t=Object(N.g)(Object(N.a)(I,e),Object(N.f)("createdAt","desc")),c=Object(N.e)(t,(function(e){var t=[];e.forEach((function(e){t.push(Object(Y.a)(Object(Y.a)({},e.data()),{},{id:e.id}))})),j(t),r(!1)}));return function(){return c()}}),[e,a]),a?Object(O.jsx)("h1",{children:"loading firebase data..."}):{docs:l}},G=function(e){var t=e.setSelectedImg,c=H("images").docs;return Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("h1",{children:" Images "}),Object(O.jsx)("hr",{}),c&&c.map((function(e){return Object(O.jsx)("div",{className:"img-wrap",onClick:function(){return t(e.url)},children:Object(O.jsx)("img",{src:e.url,alt:"Loading..."})},e.id)}))]})},J=function(){var e=H("posts").docs;return Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("h1",{children:"Posts"}),Object(O.jsx)("hr",{}),e&&e.map((function(e){return Object(O.jsx)("div",{className:"post-wrap",children:Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:e.user}),": ",e.content]})},e.id)}))]})},M=c(175),V=c.n(M),K=function(e){var t=e.selectedImage,c=e.setSelectedImg,a=Object(n.useState)(null),r=Object(o.a)(a,2),s=r[0],i=r[1],l=H("images").imageUrls;return Object(O.jsxs)("div",{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&c(null)},children:[Object(O.jsx)("img",{src:t,alt:"image pop out view"}),Object(O.jsx)(m,{btnClassName:"img-delete-btn",onClick:function(e){e.target.classList.contains("img-delete-btn")&&i(t),Object(N.b)(Object(N.c)(l,"images","".concat(s)))},tip:"Click here to DELETE Post",children:Object(O.jsx)(V.a,{})})]})};function Q(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(z,{}),Object(O.jsxs)(j.a,{container:!0,spacing:2,children:[Object(O.jsx)(j.a,{item:!0,sm:4,sx:12,children:Object(O.jsx)(J,{})}),Object(O.jsxs)(j.a,{item:!0,sm:4,sx:12,children:[Object(O.jsx)(G,{setSelectedImg:a}),c&&Object(O.jsx)(K,{selectedImage:c,setSelectedImg:a})]}),Object(O.jsx)(j.a,{item:!0,sm:4,sx:12,children:Object(O.jsx)(D,{})})]})]})}var X=c(1),_=c.n(X),Z=c(4),$=c(280),ee=c(276),te=c(286),ce=c(281),ne=c(282),ae=c(275);function re(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=F().login,a=Object(n.useState)(""),r=Object(o.a)(a,2),s=r[0],i=r[1],j=Object(n.useState)(!1),u=Object(o.a)(j,2),b=u[0],d=u[1],h=Object(l.g)();function m(){return(m=Object(Z.a)(_.a.mark((function n(a){return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,i(""),d(!0),n.next=6,c(e.current.value,t.current.value);case 6:console.log("User logged in"),d(!1),h.push("/"),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0),i("Failed to log in: "+n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,11]])})))).apply(this,arguments)}return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(ae.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(O.jsxs)("div",{className:"w-100",style:{maxWidth:"400px"},children:[Object(O.jsx)(te.a,{children:Object(O.jsxs)(te.a.Body,{children:[Object(O.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),s&&Object(O.jsx)(ce.a,{variant:"danger",children:s}),Object(O.jsxs)(ne.a,{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(O.jsx)($.a,{required:!0,inputRef:e,className:"mb-3",margin:"normal",fullWidth:!0,type:"email",id:"email",label:"Your Email Address",variant:"filled"}),Object(O.jsx)($.a,{required:!0,inputRef:t,className:"mt-3 mb-3",margin:"normal",fullWidth:!0,type:"password",id:"password",label:"Password",variant:"filled"}),Object(O.jsx)(q.a,{disabled:b,className:"w-100 mt-4",variant:"contained",color:"primary",type:"submit",children:"Log In"})]})]})}),Object(O.jsx)("div",{className:"w-100 text-center mt-2",children:Object(O.jsxs)("p",{children:["Don't have an account? ",Object(O.jsx)(ee.a,{to:"./signup",children:"Sign up."})]})})]})})})}function se(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useRef)(),a=Object(n.useRef)(),r=Object(n.useRef)(),s=F(),i=s.signup,j=s.update,u=Object(n.useState)(""),b=Object(o.a)(u,2),d=b[0],h=b[1],m=Object(n.useState)(!1),p=Object(o.a)(m,2),x=p[0],f=p[1],g=Object(l.g)();function v(){return(v=Object(Z.a)(_.a.mark((function n(s){var l;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s.preventDefault(),a.current.value===r.current.value){n.next=5;break}return console.log(a.current.value),console.log(r.current.value),n.abrupt("return",h("Passwords do not match"));case 5:return n.prev=5,h(""),f(!0),n.next=10,i(c.current.value,a.current.value);case 10:return Object(E.j)(Object(E.d)(I,"users",c.current.value),{displayName:"".concat(e.current.value," ").concat(t.current.value),email:c.current.value,photoURL:"null",bio:""}),l="".concat(e.current.value," ").concat(t.current.value),n.next=14,j(l,c.current.value,"null","");case 14:f(!1),g.push("/"),n.next=22;break;case 18:n.prev=18,n.t0=n.catch(5),console.log(n.t0),h("Failed to create an account: "+n.t0);case 22:case"end":return n.stop()}}),n,null,[[5,18]])})))).apply(this,arguments)}return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(ae.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(O.jsxs)("div",{className:"w-100",style:{maxWidth:"400px"},children:[Object(O.jsx)(te.a,{children:Object(O.jsxs)(te.a.Body,{children:[Object(O.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),d&&Object(O.jsx)(ce.a,{variant:"danger",children:d}),Object(O.jsxs)(ne.a,{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(O.jsx)($.a,{required:!0,inputRef:e,className:"mb-3",margin:"normal",fullWidth:!0,id:"fName",label:"Your First Name",variant:"filled",type:"text"}),Object(O.jsx)($.a,{required:!0,inputRef:t,className:"mb-3",margin:"normal",fullWidth:!0,id:"lName",label:"Your Last Name",variant:"filled",type:"text"}),Object(O.jsx)($.a,{required:!0,inputRef:c,className:"mb-3",margin:"normal",fullWidth:!0,id:"email",label:"Your Email Address",variant:"filled",type:"email"}),Object(O.jsx)($.a,{required:!0,inputRef:a,className:"mt-3 mb-3",margin:"normal",fullWidth:!0,type:"password",id:"password",label:"Password",variant:"filled",helperText:"Enter a strong password at least 6 characters in length."}),Object(O.jsx)($.a,{required:!0,inputRef:r,className:"mt-3 mb-3",margin:"normal",fullWidth:!0,type:"password",id:"confirmPassword",label:"Confirm Password",variant:"filled"}),Object(O.jsx)(q.a,{disabled:x,className:"w-100 mt-4",variant:"contained",color:"primary",type:"submit",children:"Sign Up"})]})]})}),Object(O.jsx)("div",{className:"w-100 text-center mt-2",children:Object(O.jsxs)("p",{children:["Already signed up? ",Object(O.jsx)(ee.a,{to:"./login",children:"Log in."})]})})]})})})}function ie(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(z,{}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"text-center",children:"About Us"}),Object(O.jsx)("hr",{}),Object(O.jsx)("h2",{className:"mt-5",children:"This is Enliven."}),Object(O.jsx)("hr",{className:"w-25"}),Object(O.jsx)("p",{children:"In the midst of a pandemic, connecting with others has become increasingly more difficult. We wanted to figure out a way to connect with people virtually and without barriers."}),Object(O.jsxs)("p",{children:["Introducing ",Object(O.jsx)("strong",{children:"Enliven"}),", a content-sharing platform where you can see the content of users around the globe, without the barriers of only seeing content from people you follow. We encourage users to post meaningful, contributing, and encouraging content in order to spark hope and positivity in such a difficult period of all our lives."]}),Object(O.jsx)("p",{children:"This idea was brought forth by a group of four college students at Florida Atlantic University. We hope this platform can help you in your own growth as an individual and to help others along the way."}),Object(O.jsx)("p",{children:"Everyone can make a meaningful impact here. By signing up with us, you are becoming a crucial component of this amazing movement to share encouragement and advice, and to receive some as well."}),Object(O.jsx)("p",{children:"Feel free to utilize our News page! Simply type in any search term and find out the most relevant news articles related to your search term."}),Object(O.jsx)("p",{children:"We hope you enjoy this platform and we can\u2019t wait to see the amazing things you\u2019d like to share with everyone!"})]})]})}var le=c(287),oe=c(277),je=c(278),ue=c(279),be=function(e){var t=Object(n.useState)(!0),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),l=i[0],j=i[1],u=F().currentUser;return Object(n.useEffect)((function(){var t=Object(N.g)(Object(N.a)(I,e),Object(N.f)("createdAt","desc"),Object(N.h)("user","==","".concat(u.displayName))),c=Object(N.e)(t,(function(e){var t=[];e.forEach((function(e){t.push(Object(Y.a)(Object(Y.a)({},e.data()),{},{id:e.id}))})),j(t),r(!1)}));return function(){return c()}}),[e,a]),a?Object(O.jsx)("h1",{children:"loading firebase data..."}):{docs:l}},de=function(){var e=be("posts").docs;return Object(O.jsx)("div",{className:"user-posts",children:e&&e.map((function(e){return Object(O.jsx)("div",{className:"user-post-wrap",children:Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:e.user}),": ",e.content]})},e.id)}))})},he=function(){var e=be("images").docs;return Object(O.jsx)("div",{className:"user-img-grid",children:e&&e.map((function(e){return Object(O.jsx)("div",{className:"user-img-wrap",children:Object(O.jsx)("img",{src:e.url,alt:"Loading..."})},e.id)}))})};function Oe(){var e=F(),t=e.currentUser,c=e.signout,a=e.update,r=Object(n.useState)(""),s=Object(o.a)(r,2),i=s[0],u=s[1],b=Object(n.useState)(""),d=Object(o.a)(b,2),h=d[0],m=d[1],p=Object(n.useState)(!1),x=Object(o.a)(p,2),f=x[0],g=x[1],v=Object(n.useRef)(),y=Object(l.g)();function w(){return(w=Object(Z.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(""),e.next=4,c();case 4:console.log("User signed out"),y.push("/login"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),u("Failed to log out: "+e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}Object(n.useEffect)((function(){var e=Object(E.h)(Object(E.b)(I,"users"),Object(E.k)("email","==","".concat(t.email)));return Object(E.f)(e,(function(e){e.forEach((function(e){m(e.data().bio)}))}))}),[]);function N(){return(N=Object(Z.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(E.j)(Object(E.d)(I,"users",t.email),{displayName:t.displayName,email:t.email,photoURL:"null",bio:v.current.value}),e.next=3,a(t.displayName,t.email,t.photoURL,v.current.value);case 3:g(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(){g(!1)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(z,{}),Object(O.jsxs)(j.a,{container:!0,spacing:3,children:[Object(O.jsx)(j.a,{item:!0,sm:4,xs:12,children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"User Profile"}),Object(O.jsx)("hr",{}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Name:"})," ",t&&t.displayName]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Email:"})," ",t&&t.email]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Bio:"})," ",t&&h]}),i&&Object(O.jsx)(ce.a,{variant:"danger",children:i}),Object(O.jsx)("hr",{}),Object(O.jsx)(q.a,{className:"w-100",variant:"contained",color:"primary",type:"submit",onClick:function(){g(!0)},children:"Edit Profile"}),Object(O.jsx)(q.a,{className:"w-100 mt-4",variant:"contained",color:"primary",type:"submit",onClick:function(){return w.apply(this,arguments)},children:"Log Out"})]})}),Object(O.jsxs)(j.a,{item:!0,sm:4,xs:12,children:[Object(O.jsx)("h1",{children:"User Posts"}),Object(O.jsx)("hr",{}),Object(O.jsx)(de,{})]}),Object(O.jsxs)(j.a,{item:!0,sm:4,xs:12,children:[Object(O.jsx)("h1",{children:"User Photos"}),Object(O.jsx)("hr",{}),Object(O.jsx)(he,{})]})]}),Object(O.jsxs)(le.a,{open:f,onClose:S,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(O.jsx)(oe.a,{id:"alert-dialog-title",children:"Edit Your Profile"}),Object(O.jsx)(je.a,{children:Object(O.jsx)(ne.a,{children:Object(O.jsx)($.a,{inputRef:v,className:"mb-3",margin:"normal",fullWidth:!0,id:"bio",label:"Add a bio",variant:"filled",type:"text"})})}),Object(O.jsxs)(ue.a,{children:[Object(O.jsx)(q.a,{variant:"contained",color:"primary",onClick:S,children:"Close"}),Object(O.jsx)(q.a,{variant:"contained",color:"primary",onClick:function(){return N.apply(this,arguments)},autoFocus:!0,children:"Save Changes"})]})]})]})}var me=c(179),pe=["component"];function xe(e){var t=e.component,c=Object(me.a)(e,pe),n=F().currentUser;return Object(O.jsx)(l.b,Object(Y.a)(Object(Y.a)({},c),{},{render:function(e){return n?Object(O.jsx)(t,Object(Y.a)({},e)):Object(O.jsx)(l.a,{to:"/login"})}}))}var fe=c(284),ge=c(288),ve=c(283);function ye(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),i=(s[0],s[1]),l=Object(n.useState)([]),u=Object(o.a)(l,2),b=u[0],d=u[1],h=Object(n.useRef)(),m=function(){""!==h.current.value&&null!=h.current.value&&h.current.value.trim().length?(a(null),fetch("https://gnews.io/api/v4/search?q=".concat(h.current.value,"&sortBy=relevance&lang=en&token=").concat("7f0818593503dce6507a7bb4a99bb2c4")).then((function(e){return e.json()})).then((function(e){i(!0),d(e.articles)}),(function(e){i(!0),a(e)}))):a("Invalid search term")};return c?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(z,{}),Object(O.jsx)("h1",{children:"News"}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{class:"input-group",children:[Object(O.jsx)("input",{type:"text",ref:h,class:"form-control",placeholder:"Search for news related to any topic"}),Object(O.jsx)("div",{class:"input-group-append",children:Object(O.jsx)(q.a,{className:"btn",variant:"contained",color:"primary",type:"submit",onClick:m,children:"Search"})})]}),Object(O.jsx)(ce.a,{className:"m-auto mt-3 w-50 d-flex align-items-center justify-content-center",variant:"danger",children:c})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(z,{}),Object(O.jsx)("h1",{children:"News"}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{class:"input-group",children:[Object(O.jsx)("input",{type:"text",ref:h,class:"form-control",placeholder:"Search for news related to any topic"}),Object(O.jsx)("div",{class:"input-group-append",children:Object(O.jsx)(q.a,{variant:"contained",color:"primary",type:"submit",onClick:m,children:"Search"})})]}),Object(O.jsx)(fe.a,{divided:!0,style:{maxWidth:900,margin:"0 auto"},children:b.map((function(e,t){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(fe.a.Item,{className:"mb-4 mt-4",style:{padding:30},children:Object(O.jsxs)(j.a,{container:!0,spacing:4,children:[Object(O.jsxs)(j.a,{item:!0,sm:8,sx:12,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[Object(O.jsx)(ge.a,{as:"h3",children:e.title}),Object(O.jsx)(fe.a.Description,{style:{margin:"20px 0"},children:e.description}),Object(O.jsxs)(fe.a,{horizontal:!0,children:[Object(O.jsxs)(fe.a.Item,{children:[Object(O.jsx)("strong",{children:e.source.name})," | ",Object(O.jsx)("a",{className:"mt-5",href:e.url,target:"o",children:"Read More"})]}),Object(O.jsx)(fe.a.Item,{children:(c=e.publishedAt,new Date(c).toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"}))})]})]}),Object(O.jsx)(j.a,{sm:4,sx:12,children:Object(O.jsx)(ve.a,{className:"news-image",alt:"No image found",src:e.image,size:"small"})})]})},t),Object(O.jsx)("hr",{})]});var c}))})]})}var we=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(i.a,{basename:window.location.pathname||"",children:Object(O.jsx)(P,{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(l.d,{children:[Object(O.jsx)(xe,{exact:!0,path:"/",component:Q}),Object(O.jsx)(l.b,{path:"/login",component:re}),Object(O.jsx)(l.b,{path:"/signup",component:se}),Object(O.jsx)(l.b,{path:"/aboutus",component:ie}),Object(O.jsx)(l.b,{path:"/profile",component:Oe}),Object(O.jsx)(l.b,{path:"/news",component:ye})]})})})})})};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(we,{})}),document.getElementById("root"))}},[[219,1,2]]]);
//# sourceMappingURL=main.de15025f.chunk.js.map