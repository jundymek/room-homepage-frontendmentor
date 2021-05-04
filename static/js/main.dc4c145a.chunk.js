(this["webpackJsonproom-homepage-react"]=this["webpackJsonproom-homepage-react"]||[]).push([[0],[,,,function(e,t,r){e.exports={slider:"Slider_slider__3A2az",bg1:"Slider_bg1__2BKiB",bg2:"Slider_bg2__1krn0",bg3:"Slider_bg3__35pul",hamburger:"Slider_hamburger__2KgbO",navWrapper:"Slider_navWrapper__10Fxo",navWrapperMobileOpen:"Slider_navWrapperMobileOpen__-e-kK",title:"Slider_title__33u_k",hide:"Slider_hide__RXeRx"}},function(e,t,r){e.exports={nav:"Navigation_nav__-ARQd",navList:"Navigation_navList__ytWnc",navListItem:"Navigation_navListItem__ceT7D",title:"Navigation_title__23R9C",hide:"Navigation_hide__351Ss"}},function(e,t,r){e.exports={wrapper:"About_wrapper__ztTYR",pictureDark:"About_pictureDark__3-aDj",pictureLight:"About_pictureLight__1ZKmk",about:"About_about__LFvp9",paragraph:"About_paragraph__mAn1E",title:"About_title__39Ivx"}},,function(e,t,r){e.exports={discover:"Discover_discover__19-yb",title:"Discover_title__22Fn4",paragraph:"Discover_paragraph__3sgjS",link:"Discover_link__2fLI7"}},function(e,t,r){e.exports={arrows:"Arrows_arrows__1r2mP",button:"Arrows_button__2M9hu"}},,,,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var i=r(1),a=r.n(i),n=r(10),c=r.n(n),s=(r(15),r(16),r(5)),o=r.n(s),l=r(0),u=function(){return Object(l.jsxs)("div",{className:o.a.wrapper,children:[Object(l.jsx)("div",{className:o.a.pictureDark}),Object(l.jsxs)("div",{className:o.a.about,children:[Object(l.jsx)("h3",{className:o.a.title,children:"About our furniture"}),Object(l.jsx)("p",{className:o.a.paragraph,children:"Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space."})]}),Object(l.jsx)("div",{className:o.a.pictureLight})]})},d=r(7),b=r.n(d),h=r(8),j=r.n(h),p=r.p+"static/media/icon-angle-left.d53877df.svg",v=r.p+"static/media/icon-angle-right.0ed3f81f.svg",_=r(6),m=i.createContext(void 0);function O(e){var t=e.children,r=i.useState(1),a=Object(_.a)(r,2),n=a[0],c=a[1];var s={slideNr:n,handleChangeSlide:function(e){switch(e){case"right":return c(n<3?n+1:1);case"left":return c(n>=2?n-1:3)}}};return Object(l.jsx)(m.Provider,{value:s,children:t})}function g(){var e=i.useContext(m);if(void 0===e)throw new Error("useSliderImage must be used within a SliderProvider");return e}function x(){var e=Object(i.useState)(0),t=Object(_.a)(e,2),r=t[0],a=t[1];return Object(i.useEffect)((function(){function e(){a(window.innerWidth)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),r}var f=function(){var e=g().handleChangeSlide,t=x(),r=t<1e3?"10":"15",i=t<1e3?"15":"25";return Object(l.jsxs)("div",{className:j.a.arrows,children:[Object(l.jsx)("button",{className:j.a.button,onClick:function(){return e("left")},children:Object(l.jsx)("img",{src:p,alt:"Arrow left",width:r,height:i,title:"Arrow left"})}),Object(l.jsx)("button",{className:j.a.button,onClick:function(){return e("right")},title:"Arrow right",children:Object(l.jsx)("img",{src:v,alt:"Arrow right",width:r,height:i})})]})},w=function(){var e=x()>1e3;return Object(l.jsxs)("div",{className:b.a.discover,children:[Object(l.jsx)("h2",{className:b.a.title,children:"Discover innovative ways to decorate"}),Object(l.jsx)("p",{className:b.a.paragraph,children:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."}),Object(l.jsx)("a",{href:"/#",className:b.a.link,children:"Shop now"}),e&&Object(l.jsx)(f,{})]})},N=r(3),y=r.n(N),M=r.p+"static/media/logo.8fad0542.svg",S=r.p+"static/media/icon-hamburger.dc022bac.svg",k=r.p+"static/media/icon-close.3e88bd6e.svg",L=r(2),A=i.createContext(void 0);function C(e){var t=e.children,r=i.useState(!1),a=Object(_.a)(r,2),n={isMobileMenuOpen:a[0],setIsMobileMenuOpen:a[1]};return Object(l.jsx)(A.Provider,{value:n,children:t})}function I(){var e=i.useContext(A);if(void 0===e)throw new Error("useMobileMenu must be used within a MobileMenuProvider");return e}var D=r(4),F=r.n(D),W=function(){var e=I().isMobileMenuOpen,t=x(),r=Object(L.a)("".concat(F.a.nav),!e&&t<1e3&&"".concat(F.a.hide));return Object(l.jsx)("nav",{className:r,children:Object(l.jsxs)("ul",{className:F.a.navList,children:[Object(l.jsx)("li",{className:F.a.navListItem,children:Object(l.jsx)("a",{href:"/#",children:"home"})}),Object(l.jsx)("li",{className:F.a.navListItem,children:Object(l.jsx)("a",{href:"/#",children:"shop"})}),Object(l.jsx)("li",{className:F.a.navListItem,children:Object(l.jsx)("a",{href:"/#",children:"about"})}),Object(l.jsx)("li",{className:F.a.navListItem,children:Object(l.jsx)("a",{href:"/#",children:"contact"})})]})})},P=function(){var e=x(),t=e<=1e3,r=I(),i=r.isMobileMenuOpen,a=r.setIsMobileMenuOpen,n=g().slideNr,c=Object(L.a)("".concat(y.a.slider),y.a["bg".concat(n)]),s=Object(L.a)("".concat(y.a.title),i&&e<1e3&&"".concat(y.a.hide)),o=Object(L.a)("".concat(y.a.navWrapper),i&&e<1e3&&"".concat(y.a.navWrapperMobileOpen));return Object(l.jsxs)("section",{className:c,children:[Object(l.jsxs)("div",{className:o,children:[Object(l.jsx)("button",{className:y.a.hamburger,onClick:function(){a(!i)},title:"Hamburger",children:i?Object(l.jsx)("img",{src:k,alt:"Close icon",width:"24",height:"24"}):Object(l.jsx)("img",{src:S,alt:"Hamburger icon",width:"24",height:"14"})}),Object(l.jsx)("h1",{className:s,children:Object(l.jsx)("img",{src:M,alt:"Room logo",width:"62",height:"14"})}),Object(l.jsx)(W,{})]}),t&&Object(l.jsx)(f,{})]})};var E=function(){var e=I().isMobileMenuOpen,t=Object(L.a)("overlay",e&&"open");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"app",children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("div",{className:"top-wrapper",children:Object(l.jsxs)(O,{children:[Object(l.jsx)(P,{}),Object(l.jsx)(w,{})]})}),Object(l.jsx)(u,{})]})}),Object(l.jsx)("div",{className:t})]})},R=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,19)).then((function(t){var r=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;r(e),i(e),a(e),n(e),c(e)}))};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(C,{children:Object(l.jsx)(E,{})})}),document.getElementById("root")),R()}],[[18,1,2]]]);
//# sourceMappingURL=main.dc4c145a.chunk.js.map