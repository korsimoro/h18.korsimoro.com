webpackJsonp([4],{150:function(e,t,n){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},l=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    column-count: 4;\n    column-span: all;\n    column-gap: 45px;\n    column-fill: balance;\n"],["\n    column-count: 4;\n    column-span: all;\n    column-gap: 45px;\n    column-fill: balance;\n"]),a=n(0),r=c(a),i=n(12),u=n(442),s=c(u),f=n(439),d=c(f),h=n(145),p=n(29),m=(0,p.css)(l),y=[{count:1,title:"Banker"},{count:1,title:"Customs Director"},{count:1,title:"Digital Identity Director"},{count:1,title:"Factory Owner"},{count:1,title:"General"},{count:1,title:"Head Monk"},{count:1,title:"Hospital Director"},{count:1,title:"Immigration Chief"},{count:1,title:"Importer"},{count:1,title:"Judge"},{count:1,title:"King"},{count:1,title:"Mayor"},{count:1,title:"Police Chief"},{count:1,title:"Prince"},{count:1,title:"Princess"},{count:1,title:"Queen"},{count:1,title:"School Director"},{count:1,title:"Tax Collector"},{count:2,title:"Doctor"},{count:2,title:"Lawyer"},{count:2,title:"Teacher"},{count:3,title:"Shop Owner"},{count:4,title:"Factory Worker"},{count:4,title:"Novice Monk"},{count:4,title:"Nurse"},{count:7,title:"Buffalo"},{count:8,title:"Bureaucrat"},{count:8,title:"Legal Immigrant"},{count:8,title:"Refugee"},{count:10,title:"Police Officer"},{count:10,title:"Soldier"},{count:14,title:"Child"},{count:24,title:"Farmer"}],g=function(e){return r.default.createElement(s.default,{title:"Helsinki 2018 Cards and NoT - the Non-Internet of Things"},r.default.createElement("h4",null,"The Levity of Identity"),r.default.createElement("p",null,"These cards model a set of real world identities.  As a low-stake game consisting only of public information, we are using them to evaluate and improve the process of bootstrapping a complete, non-technical identity domain governed by a Domain Specific Trust Framework built from the Sovrin Foundation Trust Framework."),r.default.createElement("p",null,"Along the way we are learning valuable technical and trust-framework lessons. We hope to improve the technical bootstrapping experience, understand how to visualize an identity across multiple systems, and evaluate the interoperability of identity systems built around a Domain Specific Trust Framework."),r.default.createElement("p",null,"This project was conceived in early August 2018 and we are still documenting the rules of engagement.  The documentation will be available in September 2018, and the functioning system will be deployed during October.  Certain components, however, are clear - a Cardish identity may be claimed by marking the cardly biometric, uploading a photo, and linking it with some PII such as a DID. Instructions regarding how to modify the generational record (the strip along the bottom) will be provided upon each successful claim."),"The functioning system includes",r.default.createElement("ol",null,r.default.createElement("li",null,"A ",r.default.createElement(d.default,{to:"/about/resolver"},"DID Resolution toy method"),", pointing to a managed identity system, which represents a classic IAM honeypot."),r.default.createElement("li",null,"A Domain Specific Trust Framework built upon the Sovrin Foundational Trust Framework"),r.default.createElement("li",null,"A small data store of card information fronted by a small webapp."),r.default.createElement("li",null,"Metadata associated with each identity which trace the evolution of ownership, dependency and guardianship through time.")),r.default.createElement("h4",null,"The Story of the Cardish"),r.default.createElement("p",null,"Many identities lack both human biometrics and secure cryptographic co-processing enclaves.  Such identities lack GPS tracking signals, and you can not easily run their fingerprints through an AFIS, yet they exist, are unique, are identifiable, can be owned or guarded, depend upon others, and in every sense qualify for identity."),r.default.createElement("p",null,"These identities have no need of private data storage or secure P2P messaging.  They were born at",r.default.createElement(d.default,{to:"http://www.nuntapun.com/"},"Nuntapun Printing"),"in mid August 2018 and are destined to travel the world before becoming irrelevant, lost, or discarded.  In the meantime, they card around with their cardly friends, hang out in wallets and on desktops, nestle down in the cracks of sofa cushions or rest, forgotten, on taxi seats or the tables of conference venues. This is the nature of cardish life."),r.default.createElement("p",null,"Simple as they are, they can be a useful teacher.  Current identity system tools remain difficult to use and it is not yet clear how, exactly, these tools can be used to model the society of the cardish. Any identity management ecosystem capable of managing my international KYC information or protecting me from the intrusions of an abusive surveilance state should be up to the task of managing the identity of the cardish."),r.default.createElement("p",null,"Using the cardish as stand-ins for more serious and weighty identities, such as those of People, Pets, Corporations, and Governments, we hope to map out the technical and trust-architectural details of what it takes to track, manage, and sustain identity."),r.default.createElement("p",null,"Along the way we hope to learn a lot about the state of identity art and understand which tools are card-positive and which are cardist. Which identity systems have implicit reliance upon the biometric sensors and cryptographic enclaves of machines manufactured by a limited set of manufacturers.  Which identity systems assume you are practiced member of the cryptocurrency culture, spending cardly moments trading ICOs or otherwise monetizing the value of your identity."),r.default.createElement("p",null,"The cardish do not worry about secure message passing, as their lives are entirely public.  They do worry about modeling the trust relationships of their society, and they view their world as an ideal candidate for at least one Domain Specific Trust Framework.  Their sole mortal desire is to have the trust structure of their cardly culture modeled with verisimilitude and respect for their cardish idiosyncracies."),r.default.createElement("h4",null,"Social Identities"),"The following is a list of minted cardish identities.  The society has been scattered to the winds, and, through acts of claimation and the registration of cardly biometrics, they hope to regain structure to their realm.",r.default.createElement(h.Container,null,r.default.createElement(h.List,{className:m,noBullet:!0},y.map(function(e,t){return r.default.createElement(h.ListItem,{key:t},r.default.createElement(h.ListItemLabel,null,e.count," : ",e.title))}))),r.default.createElement("h4",null,"Multiple Trust Frameworks and Credentials"),r.default.createElement("p",null,"When is a domain specific trust framework required, and when can trust frameworks be combined?"),r.default.createElement("dl",null,r.default.createElement("dt",null,"Unified Trust Framework"),r.default.createElement("dd",null),r.default.createElement("dt",null,"Personalized Trust Framework"),r.default.createElement("dd",null)))};g=(0,i.connect)(function(e){return o({},e)},function(e){return{}})(g),t.default=g},438:function(e,t,n){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},a=o(["\n    position: relative;\n    display: block;\n    z-index: 3;\n"],["\n    position: relative;\n    display: block;\n    z-index: 3;\n"]),r=o(["\n    ","\n"],["\n    ","\n"]),i=o(["\n    width: 100%;\n"],["\n    width: 100%;\n"]),u=o(["\n    fill={fill}\n"],["\n    fill={fill}\n"]),s=o(["\n    fill={ fill}\n"],["\n    fill={ fill}\n"]),f=o(["\n        width: ","px;\n    "],["\n        width: ","px;\n    "]),d=n(0),h=c(d),p=n(29),m=c(p),y=n(49),g=n(73),b=(0,m.default)("span")(a),E=(0,m.default)("span")(r,(0,y.hideText)()),w=(0,m.default)("svg")(i),v=(0,m.default)("path")(u),k=(0,m.default)("path")(u),O=(0,m.default)("path")(u),C=(0,m.default)("path")(u),_=(0,m.default)("path")(s),T=(0,m.default)("path")(u),M=(0,m.default)("path")(u),D=(0,m.default)("path")(u),I=(0,m.default)("path")(u),P=(0,m.default)("path")(u),j=(0,m.default)("path")(u),R=(0,m.default)("path")(u),S=(0,m.default)("path")(u),F=(0,m.default)("path")(u);t.default=function(e){var t=g.getSiteData.siteTitle,n=(0,p.css)(f,e.width);return h.default.createElement(b,l({className:n+" korsimoro-logo",label:e.label},e),h.default.createElement(E,{className:"sr-text"},e.label||t),h.default.createElement(w,{viewBox:"0 0 641.3 395.1",width:e.width},h.default.createElement(v,{fill:e.fill,d:"M149,257.6c0,0.4-15.1,4.6-33.5,2.9c0,0,18.3,13,44,7c0,0-10.6,11.7-44.7,3c0,0,36.8,32.5,89.9,12   c24-9,18.8-29.1,21.4-41.1c5.6-23.1,38.5-24.8,38.5-24.8c-37.3-10.3-53.1-7.7-65.1-4.3c-21,5.6-26.6,26.1-40.3,31.3   c-22.7,8.6-51.8-7.3-51.8-7.3C107.9,239.6,125.5,260.1,149,257.6z"}),h.default.createElement(k,{fill:e.fill,d:"M20,153.5c10.8,13.2,10.4,29.5,9.9,37.5c-1.1,15.7-15.5,32.9,0.7,61.9c4.8,8.7,18.6,16.6,18.6,16.6   s-7.1-11-8-18.9c-0.9-8,2.9-13.6,2.9-13.6c1.7,22.8,15.1,37.8,27.6,39.2c16.4,1.8,30.9-19.7,32.2-29c4.6-30-21.7-41.6-21.7-41.6   s22,33.2,4.9,42.3c-4.5,2.7-12.2-3.9-10.7-16.5c1.6-12.2-5-18.3-5-18.3s2.1,6.5,0.9,10.3c-1,3.2-4.4,6.4-5.2,9   c-2.3,6.9,0.5,14.1,0.5,14.1s-9-7.5-7.8-27.8c7.4-73.9-43.3-93.4-51.3-96.2c0,0,19.7,14.7,27.2,30.2c11,21.9,10.5,35.5,10.5,35.5   C28.6,139,2,141.8,2,141.8C13.4,146,17.6,150.8,20,153.5z"}),h.default.createElement(C,{fill:e.fill,d:"M65.7,107.8c-3.3,11.6-4.8,21.5-1.2,39.1c9.2,45.3,51,85.3,51,85.3c-50.3-73.2-38.6-108-27-126.1   c18.7-26.1,29.9-44.1,25.6-73.8c-1.8-11-8.3-23.7-23.6-32.3c0,0,16.5,23.3,13.6,47.5c-2.9,24.2-17.8,39-17.8,39   c1.4-6-1.4-24.2-2.1-27.5c-4.9-17.8-20.4-29.5-20.4-29.5S78,50.2,77.5,75.6c0,0,0.3,14.4-3.4,19.9c0,0-4-26.3-20.9-33.8   C53.3,61.8,72.2,85.9,65.7,107.8z"}),h.default.createElement(O,{fill:e.fill,d:"M128.9,293.1c0,0-0.4-0.4-1-1c0.2-0.1,0.3-0.2,0.3-0.2s-0.1,0-0.4,0.1c-0.9-0.8-2.3-2.1-4.2-3.4   c2.9,1.6,4.7,2.9,4.7,2.9c0,0-10.8-14-32.7-15.6c-27.6-1.8-24.9,16.3-51.9,22.2c-3.8,0.6-15.6-1-27-4.2c0,0,22.2,13.2,42.2,9.1   c10.3-2.2,15.9-9,27.2-17.5c8.1-6,18.3-4.7,26.7-1.8c-5.8-1.4-12.8-1.4-20.7,2.3c-9.5,4.4-18.4,23.5-18.4,23.5s-0.3-5.5,0.9-8.6   c1.2-3.1,3.3-6.3,3.3-6.3c-9.3,3.6-5.9,13.6-15.3,22.6c-4.3,4-10.7,4.1-12.7,4c-14.8,0.5-31.1-9.8-31.1-9.8s8.9,11.4,21.3,15.8   c13.1,4.5,23.4,2,29.2-2.8c12.2-10.4,13.7-19.7,24.2-28c16.1-12.7,29.6-6.9,34.1-4.3c-4.1,1-22.6,6.6-29.7,26.5   c-7.9,21.9-20.2,23.6-20.2,23.6s3.1-1.6,7.1-8.9c4.9-8.9,4.9-20.8,4.9-20.8c-14.8,31.8-30.1,32.7-32,32.8c0,0,5-3.9,6.2-4.9   c3.1-3.4,3.5-7,3.5-7s-12.4,15.8-37.8,1.2c-14.6-8-14-22.1-14-22.1s-16.5,21.3,10,41.3c11.3,8.6,34.6,14.6,53.6,7.6   c18-6.3,24.3-29.1,25.5-34.3c4.3-18.5,20.4-32.3,23.4-34.7C128.4,292.7,128.9,293.1,128.9,293.1z"}),h.default.createElement(_,{fill:e.fill,d:"M202.4,335.5c-37.3-5.6-44.1-10.3-44.1-10.3s7.3,1.7,10.3,1.7c5.1,0,20.6-1.3,20.6-1.3s-15-0.4-25.7-4.7   c-15-6-13.3-11.6-8.1-13.7c13.7-4.3,33.4,9.8,33.4,9.8s-6-9.4-15.8-15.8c-12.4-8.6-25.3-8.6-28.3-8.6c-7.3,0-18.4,3.9-18.8,9.4   c-0.9,7.7,21.8,18.4,21.8,18.4s-4.3,0.9-20.1-6.4c0,0,1.7,4.7,6.4,10.7c5.1,6.4,19.7,14.1,27.8,16.3c10.3,3,28.3,6.4,28.3,6.4 c37.3,8.6,61.2,25.3,61.2,25.3c-9.4-13.3-26.6-20.6-26.6-20.6l11.6,3.9c0,0,8.1,2.1,22.7,10.3c16.3,9.4,33.8,28.7,33.8,28.7 S278.6,348.4,202.4,335.5z"}),h.default.createElement(T,{fill:e.fill,d:"M400.5,319.6c0,0-58,3.2-105.4-0.5c-72.6-6.9-121.1-24.3-121.1-24.3l0,0c0,0,20.2,19.7,39.2,26.1 c3,1,11,3.5,22.8,7.8c4.2,1.5,9.3,3.4,14.8,5.8c32.5,12.9,34.6,22.4,34.6,22.4s-2.8-14.7-12-21.1c0,0,5.5,1.1,11,3.5 c5.5,2.4,8.6,9.8,8.6,9.8s1.4-2.9-0.6-7.3c-1.4-3.4-6.4-6-7.6-6.6c1.8,0.8,13.6,4.8,62.2,2.9c0,0,76.6-7.5,121.7-9.1 c122.3-4.4,146.6,10.8,146.6,10.8s-23.9-23.3-129.7-23.8C464.9,315.9,400.5,319.6,400.5,319.6z"}),h.default.createElement("g",null,h.default.createElement(M,{fill:e.fill,d:"M259.4,261.9c-3.8-0.4-8-0.8-11.8,0.4c-10.5,2.9-18.9,10.1-25.7,18.5c-1.7,2.5-2.5,5.5-3.8,8.4   c0.8,6.3,3.8,10.9,9.3,12.2c4.2,0.8,8.4,1.3,12.6,0.8c13.9-1.7,23.6-9.3,28.6-22.3c1.7-3.8,1.3-6.3-1.3-8.8   c-0.8-0.8-1.7-1.7-1.7-2.5C265.7,264.4,262.7,262.3,259.4,261.9z M255.6,282.5c-5.9,5.5-12.6,9.7-21.5,9.7c-4.6,0-6.7-2.5-5.1-6.3   c4.2-8.8,10.9-15.6,20.6-18.9c1.3-0.4,2.5,0,3.8,0c0,0.4,0,0.4,0,0.8c-4.2,1.7-8.8,2.1-11.8,6.3c3.4-0.4,7.2-0.4,11.4-0.8   c-0.8,1.7-1.7,2.9-2.1,4.2c-0.4,0.8-0.4,2.1-0.4,2.9c1.3,0,2.5,0,3.4-0.8c1.7-1.3,2.9-2.5,4.6-4.2c0.4,0,0.4,0.4,0.8,0.4   C258.1,278.7,257.3,281.2,255.6,282.5z"}),h.default.createElement(D,{fill:e.fill,d:"M275.8,304.4c2.9,1.7,5.1-0.8,7.6-6.7c1.7-3.8,2.9-8,5.1-11.4c4.2-7.6,10.5-13.1,18.5-16.4   c2.5-0.8,4.6-0.4,5.9,2.5c0.4,0.8,1.7,1.7,2.5,1.7c0.4,0,1.7-1.3,1.7-2.1c0-2.1,0-4.2-0.4-6.3c0-3.4-2.5-4.6-5.5-4.2   c-2.9,0.8-6.3,1.3-8.8,2.9c-5.1,3.4-10.1,7.6-14.7,10.9c0-0.4,0.4-0.8-0.4-1.7c1.3-2.1,2.5-4.2,3.4-6.7c0.4-1.3-0.4-2.5-0.4-3.8   c-0.8,0.4-2.5,0-3.4,0.8c-1.7,1.7-2.9,3.4-3.8,5.1c-5.1,8.4-7.2,17.3-8,26.9C274.5,298.9,272.4,302.3,275.8,304.4z"}),h.default.createElement(I,{fill:e.fill,d:"M334.7,302.7c6.7-0.4,12.6-2.5,17.3-7.2c5.1-5.1,3.8-10.5-3.4-12.6c-0.8-0.4-2.1-0.8-2.9-0.8   c-3.8-0.8-7.2-1.3-11.4-2.1c5.5-6.3,13.9-10.5,18.9-8.8c-0.4,2.1-1.3,4.6-1.7,6.7c-0.4,0.8,0,2.1,0.4,2.5c0,0.4,1.7,0.4,2.1,0   c5.1-4.6,10.1-9.3,14.7-14.3c2.1-2.5,0.8-4.2-2.5-4.2c-2.1,0-4.6,0.4-6.7,0.4c-10.1-0.8-18.5,3.4-26.5,8.4   c-2.9,1.7-5.5,4.6-7.6,7.6c-3.4,4.2-1.3,8.4,3.8,9.3c2.5,0.4,4.6,0.4,7.2,0.8c2.5,0.4,5.1,1.3,7.6,1.7c-2.5,4.2-5.1,5.5-14.3,5.1   c-1.3,0-2.5-0.8-4.2-2.1c-1.3,0.8-3.8,2.1-6.3,4.2c-0.4,0.4-0.8,1.3-0.8,2.1c0.4,0.4,1.3,0.8,2.1,1.3   C325.1,302.7,329.7,303.1,334.7,302.7z"}),h.default.createElement("g",null,h.default.createElement(P,{fill:e.fill,d:"M378.5,299.8c0.4,1.3,1.3,2.5,2.1,3.8c1.7-1.3,3.8-1.7,4.2-2.9c2.5-5.1,4.6-10.1,6.3-15.2   c1.7-4.6,2.9-9.3,3.8-13.9c0.4-2.9-1.3-4.6-4.2-4.6c-4.2,0-7.6,2.5-9.3,7.2c-2.9,7.6-5.1,15.6-2.9,23.6   C378.5,298.1,378.5,298.9,378.5,299.8z"}),h.default.createElement(j,{fill:e.fill,d:"M386.1,255.1c1.7,0.4,4.2,0,5.5-0.8c4.6-3.8,9.3-8,13.9-11.8c0.4,0,0.8-0.8,1.3-2.1c-1.7,0-2.9,0-4.2-0.4   c-3.8,1.3-7.6,2.5-11.4,3.8c-2.1,0.8-4.6,1.7-6.7,3.4c-1.3,1.3-2.1,3.4-2.1,5.1C382.7,253.4,384.9,254.7,386.1,255.1z"})),h.default.createElement(R,{fill:e.fill,d:"M400.9,296.8c-0.4,3.8,2.9,5.9,6.7,5.1s5.5-3.4,6.3-6.7c2.5-9.3,9.3-15.6,16-21.5c2.5-2.1,5.5-4.2,8-6.3   c0.4,0.8,0.4,1.3,0,1.7c-2.5,7.2-4.6,14.3-7.2,21.5c-2.1,5.9,2.9,8.4,7.6,7.6c4.6-0.8,7.2-4.2,9.7-8s4.2-8,7.2-11.8   c2.5-3.8,6.3-6.7,9.3-9.7c0.4,0.4,0.4,0.4,0.8,0.8c-0.4,0.8-1.3,1.7-1.7,2.9c-2.9,6.7-5.9,13.5-8.4,20.6c-0.8,2.9-1.7,6.7,1.3,9.3   c3.4,3.4,7.2,5.1,12.2,4.2c5.1-0.8,8.8-3.4,12.6-6.7c1.7-1.7,3.4-3.4,5.1-5.1c2.5,4.6,6.3,5.9,10.5,6.7c6.3,1.3,12.2,0,17.7-2.1   c10.1-3.8,17.3-10.5,20.6-20.6c0-0.8,0.4-2.9,0-4.2c-1.7-3.4-4.2-6.3-5.1-10.1c-0.4-0.8-2.1-1.7-3.4-2.1c-4.6-2.1-8.8-2.1-13.5-0.4   c-10.5,3.4-18.1,10.1-24.8,18.1c-2.5,2.9-4.2,6.3-3.8,10.1c0,0.4,0,1.7-0.4,1.7c-4.2,2.9-8.4,5.5-14.3,5.9c0.4-2.9,0-5.5,0.8-8   c2.1-7.2,4.2-14.3,6.3-21.5c1.7-5.9-2.5-10.5-8-8.8c-5.1,1.7-9.7,4.2-14.3,7.2c-2.5,1.3-4.2,3.4-6.7,5.5c0.8-2.5,1.3-4.2,1.7-5.9   c1.3-4.6-0.8-7.6-5.5-7.6c-5.9-0.4-10.9,2.5-15.2,5.9c-5.1,3.4-9.7,7.2-15.2,11.4c0.4-3.4,1.3-5.9,1.7-8.4c0.4-2.9-0.4-4.2-3.8-4.2   c-2.5,0-4.2,1.3-5.1,3.8c-1.3,4.2-2.5,8-3.4,12.2C402.5,285,401.7,290.9,400.9,296.8z M495.6,285c4.2-8.4,10.5-14.7,19.4-17.7   c1.7-0.4,3.4-0.4,4.6-0.4c0,0.4,0,0.4,0,0.8c-4.2,1.7-8.8,2.1-12.2,5.5c0,0.4,0,0.8,0.4,0.8c3.4-0.4,7.2-0.4,10.9-0.8   c-0.8,1.7-1.7,3.4-2.5,4.6c-0.4,0.8-0.4,1.7-0.4,2.5c0.8,0,2.1,0,2.9-0.4c1.7-1.3,3.4-2.9,4.6-4.2c0.4,0,0.8,0.4,0.8,0.4   c-0.4,2.5-1.7,5.5-3.4,6.7c-5.9,5.1-12.6,9.3-20.6,9.3C495.6,292.2,493.5,289.2,495.6,285z"}),h.default.createElement(S,{fill:e.fill,d:"M546.5,302.3c1.7-2.9,2.9-5.9,4.2-9.3c3.8-9.7,10.9-16.8,19.8-21.9c4.2-2.1,5.5-1.7,8.4,2.5   c0.4,0.4,1.3,0.8,2.1,0.8c0.4,0,1.3-0.8,1.7-1.3c1.3-2.5,0-9.3-1.7-10.5c-2.5-2.1-6.3-2.1-8.8-0.4c-6.7,4.2-13.1,8.4-19.4,12.6   c0.4,0.4,0.4,0.4-0.4,0.8c0.8-2.1,2.1-4.2,2.9-6.7c0.4-1.7,0-3.8,0-5.5c-1.7,0.8-3.4,1.7-5.1,2.5c0,0-0.4,0.4-0.4,0.8   c-7.2,10.1-9.3,21.9-10.1,34.1c0,1.3,1.3,2.5,1.7,3.8C543.2,304,545.7,303.5,546.5,302.3z"}),h.default.createElement(F,{fill:e.fill,d:"M634.1,270.3c-0.4-0.4-0.4-1.7-0.8-2.5c-0.8-1.7-1.7-4.2-3.4-5.1c-2.5-1.3-5.5-1.7-8-2.5   c-2.9,0.4-5.1,0.8-7.2,1.7c-11.4,3.8-19.8,10.9-26.5,20.2c-5.9,8.4,0.4,18.5,9.3,19.4c3.4,0.4,7.2,0.4,10.5,0   c13.1-2.1,22.7-8.8,27.8-21.5C637.9,277,637.5,273.2,634.1,270.3z M621.9,283.8c-5.9,4.6-12.6,8.8-20.6,8.4c-3.8,0-5.9-2.1-4.2-5.9   c3.8-9.3,10.9-16,20.6-19.4c1.3-0.4,2.5,0,4.2,0.4c-4.2,1.7-8.4,3.4-12.6,5.1c1.7,2.9,3.8,1.3,5.5,1.3c2.1,0,3.8,0,6.3,0   c-0.8,2.1-1.7,3.4-2.5,5.1c-0.4,0.4,0,1.3,0,2.1c0.8,0,1.7,0.4,2.5,0c2.1-1.3,3.8-2.9,5.9-4.6C626.5,279.5,624,282.1,621.9,283.8z"}))))}},439:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(c),l=n(73),a=n(145);t.default=function(e){return o.default.createElement(l.Link,e,o.default.createElement(a.LinkStyle,null,e.children))}},440:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c="http://h18.korsimoro.com/map/",o=function(e,t){return{type:"RECEIVE_DATA",data:t,lookup:e}},l=function(){return{type:"RECEIVE_ERROR"}},a=function(e){return{type:"RECEIVE_REGISTRY",registry:e}},r=(t.resetOutputBox=function(){return{type:"RESET_OUTPUT_BOX"}},t.recordLastValue=function(e,t){return{type:"RECORD_LAST_VALUE",key:e,value:t}},t.fetchRegistry=function(e){return fetch("http://h18.korsimoro.com/registry").then(function(t){200===t.status?t.json().then(function(t){e(a(t))}):e(l())}).catch(function(t){console.log("ERROR FETCHING REGISTRY",t),e(l())}),{type:"LOADING"}},t.lookupMap=function(e,t){var n=c+t;return console.log("Fetching Map Data from",n),fetch(n).then(function(t){200===t.status?t.json().then(function(t){e(o("map",t))}):e(l())}).catch(function(t){console.log("ERROR FETCHING MAP",t),e(l())}),{type:"LOADING"}}),i=t.lookupCard=function(e,t){var n=c+t;return console.log("Fetching Card Data from",n),fetch(n).then(function(t){200===t.status?t.json().then(function(t){"korsimoro-h18"!=t._t&&(t={_t:"not found"}),e(o("card",t))}):e(l())}).catch(function(t){console.log("ERROR FETCHING CARD",t),e(l())}),{type:"LOADING"}},u=t.lookupDDO=function(e,t,n){var c="http://h18.korsimoro.com/did/"+t+"/"+n;return console.log("Fetching DDO Data from",c),fetch(c).then(function(t){200===t.status?t.json().then(function(t){e(o("ddo",t))}):e(l())}).catch(function(t){console.log("ERROR FETCHING MAP",t),e(l())}),{type:"LOADING"}};t.submitValues=function(e,t){return"ddo"===t.lookup?e(u(e,t.method,t.sn)):"map"===t.lookup?e(r(e,t.sn)):"card"===t.lookup&&e(i(e,t.sn)),{type:"SUBMIT_VALUES",values:t}}},441:function(e,t,n){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}return function(t,n,c){return n&&e(t.prototype,n),c&&e(t,c),t}}(),u=n(0),s=c(u),f=n(12),d=n(145),h=n(438),p=c(h),m=n(28),y=n(440),g=n(146),b=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.processQueryStringInit;t&&n(t)}},{key:"render",value:function(){var e=this.props.right;return s.default.createElement(d.Container,null,s.default.createElement("div",{style:{float:"right"}},e),s.default.createElement("div",{className:"logo-wrapper"},s.default.createElement(p.default,{fill:m.palette.green,width:320,style:{zIndex:-1}}),s.default.createElement("div",{style:{color:"white"}},"Helsinki 2018")),this.props.children)}}]),t}(u.Component);t.default=(0,f.connect)(function(e){return r({},e)},function(e){return{processQueryStringInit:function(t){var n=new URLSearchParams(t.search);if(n.get("sn"))if(e((0,g.change)("lookupForm","sn",n.get("sn"))),"hello"===n.get("cmd"))e((0,g.change)("lookupForm","lookup","card")),e((0,g.change)("lookupForm","method","h18")),e((0,y.lookupCard)(e,n.get("sn")));else{var c=n.get("lookup");c?(console.log("LOOKUP"),e((0,g.change)("lookupForm","lookup",c)),e("card"===c?(0,y.lookupCard)(e,n.get("sn")):"map"===c?(0,y.lookupMap)(e,n.get("sn")):(0,y.lookupDDO)(e,"h18",n.get("sn")))):(e((0,g.change)("lookupForm","lookup","ddo")),e((0,y.lookupDDO)(e,"h18",n.get("sn")))),e((0,g.change)("lookupForm","method","h18"))}"hello"===n.get("cmd")&&e({type:"INDICATE_CARD_LOAD"}),e((0,y.fetchRegistry)(e))}}})(b)},442:function(e,t,n){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}return function(t,n,c){return n&&e(t.prototype,n),c&&e(t,c),t}}(),u=n(0),s=c(u),f=n(12),d=(n(145),n(438)),h=(c(d),n(28),n(441)),p=c(h),m=n(73),y=function(e){return s.default.createElement("div",null,s.default.createElement(m.Link,{to:"/"},"H18 Home"),s.default.createElement("br",null),s.default.createElement(m.Link,{to:"/about"},"General Information"),s.default.createElement("br",null),s.default.createElement(m.Link,{to:"/about/usecases"},"Reference Use Cases"),s.default.createElement("br",null),s.default.createElement(m.Link,{to:"/about/resolver"},"DID Resolution"),s.default.createElement("br",null),s.default.createElement(m.Link,{to:"/about/h18cards"},"The Levity of Identity"))},g=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return console.log("PROPS",this.props),s.default.createElement(p.default,r({},this.props,{right:s.default.createElement(y,null)}),this.props.children)}}]),t}(u.Component);t.default=(0,f.connect)(function(e){return r({},e)},function(e){return{}})(g)}});