"use strict";(self.webpackChunkextension=self.webpackChunkextension||[]).push([[427],{64975:(e,t,r)=>{r.d(t,{H:()=>s,Z:()=>f});var n=r(94184),l=r.n(n),o=r(35776),a=r(49003);const i=["children","placeholder","className","canFetchMore","isFetchingNextPage","fetchNextPage"];function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const s=e=>{var t;return!e.isLoading&&!e.isFetchingNextPage&&e.hasNextPage&&(null===(t=e.data)||void 0===t?void 0:t.pages.length)>0};const f=function(e){let t=e.children,r=e.placeholder,n=e.className,s=e.canFetchMore,f=e.isFetchingNextPage,p=e.fetchNextPage,d=u(e,i);const y=(0,a.Z)({fetchPage:p,canFetchMore:s});return o.default.createElement("div",c({},d,{className:l()("flex relative flex-col",n)}),t,f&&r,o.default.createElement("div",{className:"absolute bottom-0 left-0 w-px h-px opacity-0 pointer-events-none",ref:y}))}},48023:(e,t,r)=>{r.r(t),r.d(t,{UpvotedPopupModal:()=>m,default:()=>g});var n=r(35776),l=r(88767),o=r(50562),a=r(77803),i=r(64975),c=r(70516);const u=["requestQuery","children"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function m(e){var t;let r=e.requestQuery,f=r.queryKey,d=r.query,m=r.params,g=r.options,b=void 0===g?{}:g,h=(e.children,y(e,u));const v=(0,a.Y)().requestMethod,O=(0,l.useInfiniteQuery)(f,(e=>{let t=e.pageParam;return v(o.B3,d,p(p({},m),{},{after:t}),{requestKey:JSON.stringify(f)})}),p(p({},b),{},{getNextPageParam:e=>{var t,r,n,l;return(null==e||null===(t=e.upvotes)||void 0===t||null===(r=t.pageInfo)||void 0===r?void 0:r.hasNextPage)&&(null==e||null===(n=e.upvotes)||void 0===n||null===(l=n.pageInfo)||void 0===l?void 0:l.endCursor)}}));return n.default.createElement(c.Z,s({},h,{title:"Upvoted by",scrollingProps:{isFetchingNextPage:O.isFetchingNextPage,canFetchMore:(0,i.H)(O),fetchNextPage:O.fetchNextPage},users:null===(t=O.data)||void 0===t?void 0:t.pages.map((e=>e.upvotes.edges.map((e=>e.node.user)))).flat()}))}const g=m},70516:(e,t,r)=>{r.d(t,{Z:()=>O});var n=r(35776),l=r(58953),o=r(41664),a=r.n(o),i=r(98710);function c(e){let t=e.placeholderAmount;const r=t<=5?t:5;return n.default.createElement("div",{className:"flex flex-col"},Array(r).fill(0).map(((e,t)=>n.default.createElement(i.x,{key:t}))))}var u=r(77405),s=r(64975);const f=["placeholderAmount","scrollingProps","users","additionalContent","initialItem","isLoading","emptyPlaceholder"];function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const y=function(e){let t=e.placeholderAmount,r=e.scrollingProps,l=e.users,o=e.additionalContent,i=e.initialItem,y=e.isLoading,m=e.emptyPlaceholder,g=d(e,f);const b=n.default.createElement(c,{placeholderAmount:t});return null!=l&&l.length?n.default.createElement(s.Z,p({},r,{"aria-label":"users-list",placeholder:b}),!!i&&i,l.map(((e,t)=>n.default.createElement(a(),{key:e.username,href:e.permalink},n.default.createElement(u.z,p({},g,{tag:"a",href:e.permalink,user:e}),null==o?void 0:o(e,t)))))):y?b:null!=m?m:b},m=["users","title","header","scrollingProps","placeholderAmount","size","userListProps"];function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},g.apply(this,arguments)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,l,o=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){i=!0,l=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw l}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const O=function(e){let t=e.users,r=e.title,o=e.header,a=e.scrollingProps,i=e.placeholderAmount,c=e.size,u=void 0===c?l.u_.Size.Medium:c,s=e.userListProps,f=v(e,m);const p=(0,n.useRef)(),d=b((0,n.useState)(),2),h=d[0],O=d[1];return n.default.createElement(l.u_,g({contentRef:e=>O(e),kind:l.u_.Kind.FlexibleCenter,size:u},f),null!=o?o:n.default.createElement(l.u_.Header,{title:r}),n.default.createElement(l.u_.Body,{className:"py-2 px-0",ref:p},n.default.createElement(y,g({},s,{users:t,scrollingProps:a,scrollingContainer:p.current,appendTooltipTo:h,placeholderAmount:i}))))}},77405:(e,t,r)=>{r.d(t,{z:()=>m});var n=r(94184),l=r.n(n),o=r(35776),a=r(38050),i=r(52250),c=r(57877);const u=["imageSize","tag","user","className","disableTooltip","scrollingContainer","appendTooltipTo","children"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const p=(0,i.be)(),d="py-3 px-6 hover:bg-theme-hover",y="flex-1";function m(e){var t,r,n;let i=e.imageSize,m=void 0===i?"xlarge":i,g=e.tag,b=e.user,h=e.className,v=void 0===h?{}:h,O=e.disableTooltip,P=e.scrollingContainer,j=e.appendTooltipTo,x=e.children,w=f(e,u);const E=g||"a",N=b.name,S=b.username,k=b.bio,A={appendTo:j||(null===(t=document)||void 0===t?void 0:t.body)||"parent",visible:!O&&void 0};return o.default.createElement(E,s({},w,{className:l()("flex flex-row",null!==(r=v.container)&&void 0!==r?r:d)}),o.default.createElement(c.R,{user:b,tooltip:A,scrollingContainer:P},o.default.createElement(a.YY,{user:b,size:m,nativeLazyLoading:!0})),o.default.createElement(c.R,{user:b,tooltip:A,scrollingContainer:P},o.default.createElement("div",{className:l()("flex overflow-hidden flex-col ml-4 typo-callout",null!==(n=v.textWrapper)&&void 0!==n?n:y)},o.default.createElement(p,{className:"font-bold"},N),o.default.createElement(p,{className:"text-theme-label-secondary"},"@",S),k&&o.default.createElement("span",{className:"mt-1 text-theme-label-tertiary"},k))),x)}}}]);