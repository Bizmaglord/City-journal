(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"1iyJ":function(e,t,n){"use strict";n.r(t);n("RzqG")},2:function(e,t,n){e.exports=n("1iyJ")},RzqG:function(e,t){!function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){var n,i=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)),i}function n(n){for(var i=1;i<arguments.length;i++){var o=null!=arguments[i]?arguments[i]:{};i%2?t(Object(o),!0).forEach((function(t){e(n,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,o=!1,r=void 0;try{for(var a,d=e[Symbol.iterator]();!(i=(a=d.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{i||null==d.return||d.return()}finally{if(o)throw r}}return n}}(e,t)||r(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var d,l,s=(d={},l={},{publish:function e(t){var n,i=void 0===(n=t.name)?"":n,o=void 0===(n=t.value)?{}:n;"all"!==(t=void 0===(t=t.scope)?"page":t)&&e({name:i,value:o,scope:"all"}),d[i]||(d[i]={}),d[i][t]||(d[i][t]=[]),d[i][t].push(o),l[i]&&l[i][t]&&l[i][t].forEach((function(e){e(o)}))},subscribe:function(e){var t,n=void 0===(t=e.name)?"":t,i=void 0===(t=e.callback)?function(){}:t,o=void 0===(e=e.scope)?"page":e;l[n]||(l[n]={}),l[n][o]||(l[n][o]=[]);var r=l[n][o].push(i)-1;return d[n]&&d[n][o]&&d[n][o].length&&d[n][o].forEach((function(e){i(e)})),{remove:function(){return l[n][o].splice(r,1)}}},unsubscribeToAll:function(e){Object.keys(l).forEach((function(t){l[t]&&l[t][e]&&delete l[t][e]})),Object.keys(d).forEach((function(t){d[t]&&d[t][e]&&delete d[t][e]}))}});function u(e,t,n){var i="".concat(e,"-").concat(t);try{var o;return performance.mark(i),performance.measure(i,n,i),(o=(o=performance.getEntriesByName(i).filter((function(e){return"measure"===e.entryType})))[o.length-1])?Math.round(o.duration):0}catch(e){return 0}}function c(e){return-1!==document.cookie.indexOf(e)}function p(e){var t={PURR_AcceptableTrackers:0,PURR_AdConfiguration:5,PURR_DataSaleOptOutUI:2,PURR_DataProcessingConsentUI:3,PURR_AcceptableTrackers_v2:4,PURR_AdConfiguration_v2:5,PURR_DataProcessingPreferenceUI:6,PURR_DataSaleOptOutUI_v2:7,PURR_CaliforniaNoticesUI:8,PURR_EmailMarketingOptInUI:9,PURR_DeleteIPAddress:10,PURR_AdConfiguration_v3:11,PURR_LimitSensitivePI:12,PURR_EmailMarketingOptInUI_v2:13,PURR_AdConfiguration_v4:14},n=function(e){return 2===(e="; ".concat(document.cookie).split("; ".concat(e,"="))).length?e.pop().split(";").shift():null}(e),i={};return Object.keys(t).forEach((function(e){i[e]=function(e,t){return t=new RegExp("^.{".concat(t,"}(.)")),(null==(t=e.match(t))?void 0:t[1])||""}(n,t[e])})),ee.forEach((function(e){Object.keys(e.valueMapping).forEach((function(t){e.valueMapping[t]===i[e.name]&&(i[e.name]=t)}))})),i}function v(){var e;try{return function(){if("undefined"==typeof window)return!1;var e=-1!==(i=window.navigator.userAgent||window.navigator.vendor).indexOf("nyt_android"),t=-1!==i.indexOf("nytios"),n=-1!==i.indexOf("nyt_xwords_ios"),i=-1!==i.indexOf("Crosswords");return e||t||n||i}()?null!==(e=null===window||void 0===window?void 0:window.config)&&void 0!==e&&e.PurrDirectives?window.config.PurrDirectives:c("override-purr")?p("override-purr"):Y({},te):c("nyt-purr")?p("nyt-purr"):Y({},te)}catch(e){return console.warn("can’t get directives from cookie or config",e),Y({},te)}}function f(e){return e&&"_"!==e?e:null}function g(){var e=(n=v()).PURR_AdConfiguration_v4,t=n.PURR_AdConfiguration_v3,n=n.PURR_AdConfiguration_v2;return function(e){return e=e||window.location.search,(e=new URLSearchParams(e))&&e.get("privacy-override")}()||f(e)||f(t)||f(n)}var m="message",h="visibilitychange",b="mouseenter",w="mouseleave",y="readystatechange",R="unload",A="slotRequested",P="slotResponseReceived",I="slotRenderEnded",O="slotOnload",_="impressionViewable",U="responseStart",S="timeDefined",E="timeCalled",C="timeCallSent",k="timeReceived",T="timeRendered",D="timeLoaded",j="timeViewed",M="AdEmpty",L="AdDefined",V="AdCalled",z="AdRefreshed",x="AdRequestSent",q="AdResponse",N="AdRendered",B="AdLoaded",$="AdSlotReady",F="AdViewable",J="AdEnteredViewport",K="AdLeftViewport",G="AdMouseEnter",W="AdMouseLeave",Z="AdsDisabled",H="GptError",Q="pos",X="request_time",Y=function(){return(Y=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},ee=[{name:"PURR_AcceptableTrackers",valueMapping:{controllers:"c",processors:"p"}},{name:"PURR_AdConfiguration",valueMapping:{full:"f",npa:"n","adluce-socrates":"s"}},{name:"PURR_DataSaleOptOutUI",valueMapping:{hide:"h",show:"s"}},{name:"PURR_DataProcessingConsentUI",valueMapping:{hide:"h",show:"s"}},{name:"PURR_AcceptableTrackers_v2",valueMapping:{controllers:"c",processors:"p",essentials:"e"}},{name:"PURR_AdConfiguration_v2",valueMapping:{full:"f",rdp:"r",npa:"n",adluce:"a","adluce-socrates":"s"}},{name:"PURR_DataProcessingPreferenceUI",valueMapping:{hide:"h","allow-opt-out":"o","allow-opt-in":"i","allow-opt-in-or-out":"a"}},{name:"PURR_DataSaleOptOutUI_v2",valueMapping:{hide:"h",show:"s","show-opted-out":"o"}},{name:"PURR_CaliforniaNoticesUI",valueMapping:{hide:"h",show:"s"}},{name:"PURR_EmailMarketingOptInUI",valueMapping:{checked:"c",unchecked:"u"}},{name:"PURR_DeleteIPAddress",valueMapping:{delete:"d",keep:"k"}},{name:"PURR_AdConfiguration_v3",valueMapping:{full:"f",rdp:"r",npa:"n",ltd:"l","adluce-socrates":"s"}},{name:"PURR_LimitSensitivePI",valueMapping:{hide:"h",show:"s"}},{name:"PURR_EmailMarketingOptInUI_v2",valueMapping:{checked:"c",unchecked:"u","do-not-display":"d"}},{name:"PURR_AdConfiguration_v4",valueMapping:{full:"f",rdp:"r",npa:"n",ltd:"l","adluce-socrates":"s","no-ads":"a"}}],te={PURR_DataSaleOptOutUI:"hide",PURR_DataSaleOptOutUI_v2:"hide",PURR_CaliforniaNoticesUI:"hide",PURR_DataProcessingConsentUI:"hide",PURR_DataProcessingPreferenceUI:"hide",PURR_AcceptableTrackers_v2:"controllers",PURR_AcceptableTrackers:"controllers",PURR_AdConfiguration_v2:"full",PURR_AdConfiguration:"full",PURR_EmailMarketingOptInUI:"unchecked",PURR_DeleteIPAddress:"delete",PURR_AdConfiguration_v3:"full",PURR_LimitSensitivePI:"hide",PURR_EmailMarketingOptInUI_v2:"unchecked",PURR_AdConfiguration_v4:"full"},ne="ltd",ie=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window;return e.googletag=e.googletag||{},e.googletag.cmd=e.googletag.cmd||[],e.googletag};function oe(){var e,t,n,i=function(){window.googletag?ie().cmd.push((function(){ie()._loadStarted_||s.publish({name:M,value:{type:"AdBlockOn"}})})):s.publish({name:M,value:{type:H}})},o=g()===ne?"https://pagead2.googlesyndication.com/tag/js/gpt.js":"https://securepubads.g.doubleclick.net/tag/js/gpt.js";ie().apiReady?i():(e=o,t=i,n=function(){s.publish({name:M,value:{type:H}})},o=document.getElementsByTagName("head")[0],i=document.createElement("script"),t&&(i.onload=t),n&&(i.onerror=n),i.src=e,i.async=!0,o.appendChild(i))}var re=function(t,n){s.publish({name:V,scope:t.id,value:e({id:t.id,position:t.position,slot:t.slot},E,n)})};function ae(e){ie().cmd.push((function(){var t=e.id,n=e.slot,i=u(t,E,U);re(e,i),window.apstag&&window.apstag.setDisplayBids&&window.apstag.setDisplayBids(),n.setTargeting(X,i.toString()),ie().display(t)}))}function de(e,t){s.publish({name:z,scope:"all"}),ie().cmd.push((function(){e&&e.forEach((function(e){var t=u(n=e.getSlotElementId(),E,U),n=function(e){var t,n;return null===(t=("undefined"!=typeof window&&window||{}).AdSlot4)||void 0===t||null===(n=t.getAdOnPage)||void 0===n?void 0:n.call(t,e)}(n);re(n,t),e.setTargeting(X,t.toString())})),e&&t?ie().pubads().refresh(e,t):e?ie().pubads().refresh(e):t?ie().pubads().refresh(null,t):ie().pubads().refresh()}))}function le(e,t){var n=e.displayed,i=e.slot;t.isRefresh&&n?(de([i],t.changeCorrelator?null:{changeCorrelator:!1}),t.changeCorrelator=!1):(ae(e),e.displayed=!0)}var se=function(e,t){return!!(e&&t&&t.unobserve&&"function"==typeof t.unobserve)&&(t.unobserve(e),!0)};function ue(e,t,n,i){var o=1<arguments.length?t:void 0,r=2<arguments.length?n:void 0,a=3<arguments.length?i:void 0;if((e=0<arguments.length&&void 0!==e?e:{}).exclusive&&e.div){var d,l=e.div;switch(e.type){case"only-child":!function(e,t){t=1<arguments.length&&void 0!==t?t:{},(e=e&&e.empty||t.unrenderedAds||[]).length&&e.forEach((function(e){se(e.AdSlotElement,e.observer),s.publish({name:M,value:{type:e.id},scope:e.id})})),t.unrenderedAds=[],t.stopAdCalls=!0}({empty:function(e,t){return t=1<arguments.length&&void 0!==t?t:{},Object.values(t).filter((function(t){return e!==t.id}))}(l,o)},a);break;case"family-plan":void 0!==(d=o[l]&&o[l].slot&&(o[l].slot.getResponseInformation()||{}).lineItemId)&&r({adv:d,excl:"family"});break;case"blank":s.publish({name:M,value:{type:l},scope:l})}return 1}}function ce(e){return!!(e||(t=document.referrer||"",(e=/([a-zA-Z0-9_\-.]+)(@|%40)([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})/).test(t)||e.test(window.location.href))||"no-ads"===g()||"adluce-socrates"===g());var t}function pe(e){return ie().pubads().getSlots().find((function(t){return t.getSlotElementId()===e}))}function ve(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){};t=new IntersectionObserver((function(e,t){e=e[0],n(e,t)}),t);return e&&t.observe(e),t}function fe(e,t,n){return ve(e.AdSlotElement,{root:null,rootMargin:"".concat(t,"px"),threshold:0},(function(t,i){return o=i,r=e,i=n,void(t.isIntersecting&&(le(r,i),o.unobserve(r.AdSlotElement)));var o,r}))}var ge={init:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.adsDisabled,i=void 0===(i=e.adTargeting)?{}:i;return(t=t||ce())||(ie().cmd.push((function(){!function(){switch(g()){case"rdp":ie().pubads().setPrivacySettings({restrictDataProcessing:!0});break;case"npa":ie().pubads().setRequestNonPersonalizedAds(1);break;case ne:ie().pubads().setPrivacySettings({limitedAds:!0})}}()})),i=n(n({},i),{},{purr:g()})),n(n({},e),{},{adTargeting:i,adsDisabled:t})}};function me(e,t,n,i){e.displayed||(e.observer=fe(e,i,n),n.unrenderedAds.push(e)),t[e.id]=e}function he(e,t){s.publish({name:t,scope:e.id,value:{id:e.id,position:e.position,creativeId:e.creativeId,lineItemId:e.lineItemId}})}function be(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};t.potentiallyViewable&&(null!==(e=t.viewabilityTimeout)&&void 0!==e||(t.viewabilityTimeout=setTimeout((function(){return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};delete e.viewabilityTimeout,delete e.potentiallyViewable,e.viewable=!0,he(e,J)}(t)}),1e3)))}function we(e,t,n){var i;e.target&&(i=null===n.root,n=242e3<=e.target.clientWidth*e.target.clientHeight?Ie:Pe,(n=e.intersectionRatio>=n)||(delete t.potentiallyViewable,clearTimeout(t.viewabilityTimeout),delete t.viewabilityTimeout,i?delete t.potentiallyViewableInViewport:delete t.potentiallyViewableInContainer),e.isIntersecting&&0!==e.intersectionRatio?!n||t.potentiallyViewable||t.viewable||(i&&!t.potentiallyViewableInViewport?(t.potentiallyViewableInViewport=!0,t.viewabilityContainer&&!t.potentiallyViewableInContainer||(t.potentiallyViewable=!0,be(t))):i||t.potentiallyViewableInContainer||(t.potentiallyViewableInContainer=!0,t.potentiallyViewableInViewport&&(t.potentiallyViewable=!0,be(t)))):t.viewable&&(he(t,K),delete t.viewable))}function ye(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};e.viewabilityTimeout&&(clearTimeout(e.viewabilityTimeout),delete e.viewabilityTimeout),e.viewable&&(delete e.viewable,e.potentiallyViewable=!0,he(e,K))}function Re(e){var t=(e.target.parentNode.id.match(/^google/)?e.target.parentNode:e.target).parentNode.id,n=(i=pe(t)).getTargeting(Q),i=(o=i.getResponseInformation()).sourceAgnosticCreativeId,o=o.sourceAgnosticLineItemId;s.publish({name:e.type===b?G:W,scope:t,value:{type:e.type===b?"hover_mouse_enter":"hover_mouse_leave",id:t,position:n,creativeId:i,lineItemId:o}})}function Ae(){return console.warn("::warning:: this function is deprecated")}var Pe=.5,Ie=.3,Oe=[0,.001,Pe,Ie];function _e(e,t,n){return ie().defineSlot(e,t,n)}function Ue(e){var t,n=e.observer,i=e.viewabilityObservers,o=e.AdSlotElement;return null!=n&&n.unobserve(o),e.observer=null,delete e.potentiallyViewable,delete e.potentiallyViewableInContainer,delete e.potentiallyViewableInViewport,e.viewabilityObservers=(t=i,(n=null==o?void 0:o.querySelector("iframe"))&&(i=t.viewportObserver,o=t.containerObserver,se(n,i),se(n,o),o=w,n.removeEventListener(b,Re),n.removeEventListener(o,Re)),t),e}function Se(e){var t,n,i=null===(r=document)||void 0===r?void 0:r.getElementById(e.id),o=null==i?void 0:i.querySelector("iframe"),r=Ue(e);return r.AdSlotElement=i,r.viewabilityObservers=(t=r,i=ve(e=o,{root:null,rootMargin:"0px",threshold:Oe},(function(e,n){return we(e,t,n)})),t.viewabilityContainer&&(n=ve(e,{root:t.viewabilityContainer,rootMargin:"0px",threshold:Oe},(function(e,n){return we(e,t,n)}))),{viewportObserver:i,containerObserver:n}),null!=o&&o.addEventListener(b,Re),null!=o&&o.addEventListener(w,Re),r}function Ee(e){return e&&null!=e&&e.getSlotElementId&&null!=e&&e.getTargeting?{id:e.getSlotElementId(),position:e.getTargeting(Q)[0]||""}:{}}function Ce(e){var t=(o=Ee(e.slot)).id,i=o.position,o=u(t,C,U);s.publish({name:x,value:n(n({},e),{},{id:t,position:i,timeCallSent:o}),scope:t})}function ke(e){var t=(o=Ee(e.slot)).id,i=o.position,o=u(t,k,"".concat(t,"-").concat(E));s.publish({name:q,value:n(n({},e),{},{id:t,position:i,timeReceived:o}),scope:t})}function Te(e){var t=(r=Ee(e.slot)).id,i=r.position,o=(a=e.slot.getResponseInformation()).sourceAgnosticCreativeId,r=a.sourceAgnosticLineItemId,a=u(t,j,"".concat(t,"-").concat(E));s.publish({name:F,value:n(n({},e),{},{id:t,position:i,creativeId:o,lineItemId:r,timeViewed:a}),scope:t})}function De(e){var t=window.location.href;e=e.replace(/[[]]/g,"\\$&");return(t=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(t))&&t[2]?decodeURIComponent(t[2].replace(/\+/g,"")):""}function je(t){var i=De("ad-keywords"),o=n(n({},t),{},{vp:window.matchMedia("(min-width: 970px)").matches?"large":window.matchMedia("(min-width: 728px)").matches?"medium":"small",uap:(t=window.navigator.userAgent).match(/(nyt)[_\w\d-]*(ios)/i)?"ios":t.match(/(nyt)[_\w\d-]*(android)/i)?"android":"browser"},i?e({},"adv",i):null);return ie().cmd.push((function(){var e,t,n=(e=o,t=ie().pubads().getTargetingKeys(),Object.keys(e).filter((function(e){return t.indexOf(e)<0})).reduce((function(t,n){return t[n]=e[n],t}),{}));Object.keys(n).forEach((function(e){ie().pubads().setTargeting(e,n[e])}))})),o}function Me(e){return function(){Object.values(e()).forEach((function(e){e.viewable&&he(e,K)}))}}function Le(e){return function(){"visible"===document.visibilityState?Object.values(e()).forEach(be):Object.values(e()).forEach(ye)}}var Ve={default:[[0,[0,0]]]},ze=[[0,[3,7]]];(function(){if(window.AdSlot4&&window.AdSlot4.init)return window.AdSlot4;var e={},t=window.AdSlot4||{};function r(){return d}t.props={},t.events=s,t.getSlot=pe,t.refreshAdsInView=de,t.getAdsOnPage=function(){return e},t.getAdOnPage=function(t){return e[t]};var a=[ge],d={isRefresh:!1,changeCorrelator:!1,stopAdCalls:!1,unrenderedAds:[]},l=[],c=!0,p=!1;if(t.initializeAd=function(e,n){var i,r;if(!t.isAdSlotReady())return t.events.subscribe({name:$,callback:function(){return t.initializeAd(e,n)}}),!1;var a,s,c=(y=t.props).adUnitPath,p=y.sizeMapping,v=y.hideTopAd,f=y.adsDisabled,g=n.id,m=n.position,h=n.sizeKey,b=n.lazyLoad,w=n.truePosition,y=n.adUnitPath,R=n.adTargeting,A=n.viewabilityContainerId,P=y||c,I=(h=h||m,o(document.querySelectorAll("[data-ad-view-id]")).find((function(e){return e.dataset.adViewId===A}))),O=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Ve,n=De("unfillAd");return"all"===n||e&&e===n?ze:e in t?t[e]:t.default}(h,p);return!("top"===m&&v||(f?(t.events.publish({name:M,value:{type:Z}}),1):!g||!P||!O||null!=e&&null!==(i=e.classList)&&void 0!==i&&i.contains("placed-ad")||null!=e&&null!==(r=e.parentNode)&&void 0!==r&&null!==(s=r.classList)&&void 0!==s&&s.contains("placed-ad")||l.includes(g)?(!l.includes(g)||(a=t.getAdsOnPage())&&a[g]&&e!==a[g].AdSlotElement&&me(Se(a[g]),a,d,t.props.offset),1):d.stopAdCalls?(t.events.publish({name:M,value:{type:g},scope:g}),1):(s=l,(a=g)&&s.push(a),ie().cmd.push((function(){var e,n,i=(i=g,e=P,o=O,"undefined"!=typeof window&&window.document&&window.document.createElement&&window.self!==window.top?r=_e(e,function(e,t){return(t=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:[]).filter((function(e){return!Number.isNaN(Number(e[0]))&&1<e.length})).sort((function(e,t){return t[0]-e[0]}))}(t).find((function(t){return t[0]<=e})))&&t[1]||[]}(window.outerWidth,o),i):(r=_e(e,["fluid"],i),n=ie().sizeMapping(),[].concat(o).forEach((function(e){n.addSize([e[0],0],e[1])})),null!=r&&r.defineSizeMapping(n.build())),r),o=w||m;null!=i&&i.setTargeting("div",g),null!=i&&i.setTargeting(Q,o),R&&0<Object.keys(R).length&&null!=i&&i.updateTargetingFromMap(R),null!=i&&i.setCollapseEmptyDiv(!0),null!=i&&i.addService(ie().pubads());var r=Se({id:g,slot:i,position:o,sizes:O,viewabilityObservers:null,viewabilityContainer:I});t.events.publish({name:L,value:{id:g,pos:o,sizes:O,truePosition:w,timeDefined:u(g,S,U),slot:i},scope:g}),o=t.getAdsOnPage(),b||(o[g]&&o[g].slot?de([i]):ae(r),r.displayed=!0),me(r,o,d,t.props.offset)})),0)))},t.fillPlacements=function(e){return!!Object.keys(t.props).length&&!t.props.adsDisabled&&(function(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length?arguments[1]:void 0,n=2<arguments.length?arguments[2]:void 0,i=0;i<e.length;i++){var o=e[i],r=o.id,a=(p=o.dataset).position,d=p.sizeKey,l=void 0===(c=p.lazyLoad)?"true":c,s=p.slotId,u=p.adUnitPath,c="false"!==l,p=o;l=a,a=s&&s!==r;(r||s)&&l&&(a&&!t||!a)&&(a&&(l=s,(a=document.createElement("div")).id=s,a.setAttribute("style","display: block; text-align: center; height: 100%"),p=a,o.appendChild(a)),n(p,{id:p.id,position:l,sizeKey:d,lazyLoad:c,adUnitPath:u}),o.classList.add("placed-ad"))}}(document.querySelectorAll(".place-ad:not(.placed-ad)"),e,t.initializeAd),!0)},t.updateAdReq=function(e,i){ie().cmd.push((function(){var o=pe(i);t.props.adTargeting=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length?arguments[2]:void 0,o={};return Object.keys(e).forEach((function(t){var n,r="".concat(e[t]);i?null!==(n=i.setTargeting)&&void 0!==n&&n.call(i,t,r):(o[t]=r,ie().pubads().setTargeting(t,r))})),n(n({},t),o)}(e,t.getAdReq(),o)}))},t.getAdReq=function(){return t.props&&t.props.adTargeting||{}},t.refreshAd=function(e){if(t.props.adsDisabled)return!1;var i=t.getAdOnPage(e);return!(null==i||!i.displayed||(t.getAdsOnPage()[e]=Ue(i),ye(i),i.observer=fe(i,t.props.offset,n(n({},d),{},{isRefresh:!0})),0))},t.refreshAds=function(){var e;t.props.adsDisabled||(d.isRefresh=!0,d.changeCorrelator=!0,d.unrenderedAds=[],c=!1,l=[],e=t.getAdsOnPage(),Object.entries(e).forEach((function(n){var o=(r=i(n,2))[0],r=(n=r[1]).displayed;d.unrenderedAds.push(n),r&&(e[o]=Ue(n),ye(n),n.observer=fe(n,t.props.offset,d))})),setTimeout((function(){c=!0}),2e3))},t.removeAdPlacement=function(e){ie().cmd.push((function(){var t,n=pe(e);ie().destroySlots([n]),t=e,t=(n=l).indexOf(t),n.splice(t,1)}))},t.init=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(t.isAdSlotReady())return!1;var i,o,d,l=e.plugins,c=void 0===(b=(U=(a=l||a).reduce((function(e,t){return t.init&&t.init(e)||e}),e)).adTargeting)?{}:b,v=void 0===(g=U.adUnitPath)?"":g,f=void 0===(w=U.offset)?400:w,g=(e=void 0!==(l=U.lockdownAds)&&l,void 0!==(b=U.hideTopAd)&&b),b=(l=void 0===(w=U.sizeMapping)?{}:w,U.haltDFP),w=U.adsDisabled,U=/^tragedy$/i.test(v);U=b||w||U;return t.props={adTargeting:c,adUnitPath:v,offset:f,sizeMapping:l,hideTopAd:g,adsDisabled:U},U?t.events.publish({name:M,value:{type:Z}}):(je(c),ie().cmd.push((function(){function e(){t.fillPlacements()}function i(){return"complete"===document.readyState}var o,r;ie().enableServices(),t.fillPlacements(!0),i()?e():document.addEventListener(y,(function t(){i()&&(document.removeEventListener(y,t),e())})),window.addEventListener(R,Me),window.document.addEventListener(h,Le),ie().pubads().addEventListener(A,Ce),ie().pubads().addEventListener(P,ke),ie().pubads().addEventListener(I,(o=t.getAdOnPage,function(e){var t,i=(t=Ee(e.slot)).id,r=t.position,a=u(i,T,"".concat(i,"-").concat(E));(t=o(i))&&(t.creativeId=e.sourceAgnosticCreativeId,t.lineItemId=e.sourceAgnosticLineItemId,t.renderedSize=e.size),e.isEmpty?s.publish({name:M,value:n(n({},e),{},{type:i,id:i,position:r,timeRendered:a}),scope:i}):s.publish({name:N,value:n(n({},e),{},{id:i,position:r,timeRendered:a}),scope:i})})),ie().pubads().addEventListener(O,(r=t.getAdsOnPage,function(e){var t=(a=Ee(e.slot)).id,i=a.position,o=r(),a=o[t];o[t]=Se(a),a=u(t,D,"".concat(t,"-").concat(E)),s.publish({name:B,value:n(n({},e),{},{id:t,position:i,timeLoaded:a}),scope:t})})),ie().pubads().addEventListener(_,Te)})),e?ie().cmd.push((function(){ie().pubads().setForceSafeFrame(!0)})):(i=t.getAdsOnPage,o=t.updateAdReq,d=r,window&&window.addEventListener&&window.addEventListener(m,(function(e){!function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return!(!e||!((null===(e=e.location)||void 0===e?void 0:e.origin)===t||null!==(e=t.match)&&void 0!==e&&e.call(t,/(safeframe|tpc)\.googlesyndication\.com$/)))}(window,e.origin)||ue(e.data,i(),o,d())}),!1)),oe()),p=!0,t.events.publish({name:$}),p},t.isAdSlotReady=function(){return p},t.cmd)for(;t.cmd.length;)t.cmd.shift()();t.cmd={length:0,push:function(e){e()}},window.AdSlot4=t,window.AdSlot={placeDynamicAds:t.fillPlacements,getSlot:t.getSlot,setTargeting:function(e,n){var i={};i[e]=n,t.updateAdReq(i)},setSlotTargeting:function(e,n,i){var o={};o[n]=i,t.updateAdReq(o,e.getSlotElementId())},displayAd:ae,removeAdPlacement:t.removeAdPlacement,dispatch:Ae,destroyAdSlots:function(){ie().cmd.push((function(){ie().destroySlots()}))},checkAdsInViewport:function e(){t.isAdSlotReady()||t.events.subscribe({name:$,callback:e}),d.unrenderedAds=d.unrenderedAds.filter((function(e){var n=function(e,t,n,i,o,r){var a=1<arguments.length&&void 0!==t?t:0,d=2<arguments.length&&void 0!==n?n:0,l=3<arguments.length&&void 0!==i?i:0,s=4<arguments.length&&void 0!==o?o:0,u=!(5<arguments.length&&void 0!==r)||r;if(!e||1!==e.nodeType)return!1;t=(c=e.getBoundingClientRect()).top-a,n=c.left,i=c.bottom,o=c.right,r=0,e=0,a=window.innerHeight;var c=window.innerWidth;return u?r+l*s<=i&&e+d*s<=o&&t<=a-l*s&&n<=c-d*s:r<=t&&i<=a}(n=e.AdSlotElement,c?t.props.offset:0,0,0,0,c);return(e.potentiallyViewable=n)&&le(e,d),!n}))},refresh:t.refreshAds,AdSlotReady:!0,adTargeting:t.props&&t.props.adTargeting||{}}})()}()}},[[2,128]]]);
//# sourceMappingURL=adslot-638c0533fe938504a562.js.map