<script nomodule="" src="https://static.parastorage.com/unpkg/core-js-bundle@3.2.1/minified.js"></script>
<script nomodule="" src="https://static.parastorage.com/unpkg/focus-within-polyfill@5.0.9/dist/focus-within-polyfill.js"></script>
<script nomodule="" src="https://polyfill.io/v3/polyfill.min.js?features=fetch"></script>

<!-- Performance API Polyfills -->
<script>
(function () {
  var noop = function noop() {};
  if ("performance" in window === false) {
    window.performance = {};
  }
  window.performance.mark = performance.mark || noop;
  window.performance.measure = performance.measure || noop;
  if ("now" in window.performance === false) {
    var nowOffset = Date.now();
    if (performance.timing && performance.timing.navigationStart) {
      nowOffset = performance.timing.navigationStart;
    }
    window.performance.now = function now() {
      return Date.now() - nowOffset;
    };
  }
})();
</script>

<!-- Globals Definitions -->
<script>
  (function () {
    var now = Date.now()
    window.initialTimestamps = {
      initialTimestamp: now,
      initialRequestTimestamp: Math.round(performance.timeOrigin ? performance.timeOrigin : now - performance.now())
    }

    window.thunderboltTag = "libs-releases-GA-local"
    window.thunderboltVersion = "1.13559.0"
  })();
</script>

  


<!-- sendFedopsLoadStarted.inline -->
<script type="application/json" id="wix-fedops">{"data":{"site":{"metaSiteId":"35e02912-d3f0-43f6-947a-2d18e286d16b","userId":"8a79e640-b74e-4bb1-a988-f3115d3a0093","siteId":"2c5f925c-f4aa-4c4e-ab4c-d4a648fb81cd","externalBaseUrl":"https:\/\/www.levesepesados.com.br","siteRevision":377,"siteType":"UGC","dc":"42","isResponsive":false,"editorName":"Unknown","sessionId":"4f23b2cf-2f30-433b-a520-54b23b3f22f9","isSEO":false,"appNameForBiEvents":"thunderbolt"},"rollout":{"siteAssetsVersionsRollout":false,"isDACRollout":0,"isTBRollout":false},"fleetConfig":{"fleetName":"wix-thunderbolt","type":"GA","code":0},"requestUrl":"https:\/\/www.levesepesados.com.br\/","isInSEO":false,"platformOnSite":true}}</script>
<script>window.fedops = JSON.parse(document.getElementById('wix-fedops').textContent)</script>
<script id='sendFedopsLoadStarted'>
  function e(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function r(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}!function(){var t=function(e){var r,t,n,i=!1;if(null===(r=window.viewerModel)||void 0===r||!/\(iP(hone|ad|od);/i.test(null===(t=window)||void 0===t||null===(n=t.navigator)||void 0===n?void 0:n.userAgent))try{i=navigator.sendBeacon(e)}catch(e){}i||((new Image).src=e)};var n=window.fedops.data,i=n.site,o=n.rollout,a=n.fleetConfig,s=n.requestUrl,c=n.isInSEO,u=n.frogOnUserDomain,d=function(e){var r=e.navigator.userAgent;return/instagram.+google\/google/i.test(r)?"":/bot|google(?!play)|phantom|crawl|spider|headless|slurp|facebookexternal|Lighthouse|PTST|^mozilla\/4\.0$|^\s*$/i.test(r)?"ua":""}(window)||function(){try{if(window.self===window.top)return""}catch(e){}return"iframe"}()||function(){var e;if(!Function.prototype.bind)return"bind";var r=window,t=r.document,n=r.navigator;if(!t||!n)return"document";var i=n.webdriver,o=n.userAgent,a=n.plugins,s=n.languages;if(i)return"webdriver";if(!a||Array.isArray(a))return"plugins";if(null!==(e=Object.getOwnPropertyDescriptor(a,"0"))&&void 0!==e&&e.writable)return"plugins-extra";if(!o)return"userAgent";if(o.indexOf("Snapchat")>0&&t.hidden)return"Snapchat";if(!s||0===s.length||!Object.isFrozen(s))return"languages";try{throw Error()}catch(e){if(e instanceof Error){var c=e.stack;if(c&&/ (\(internal\/)|(\(?file:\/)/.test(c))return"stack"}}return""}()||(c?"seo":""),p=!!d,l=function(t,n){var i,o="none",a=t.match(/ssr-caching="?cache[,#]\s*desc=([\w-]+)(?:[,#]\s*varnish=(\w+))?(?:[,#]\s*dc[,#]\s*desc=([\w-]+))?(?:"|;|$)/);if(!a&&window.PerformanceServerTiming){var s=function(e){var r,t;try{r=e()}catch(e){r=[]}var n=[];return r.forEach((function(e){switch(e.name){case"cache":n[1]=e.description;break;case"varnish":n[2]=e.description;break;case"dc":t=e.description}})),{microPop:t,matches:n}}(n);i=s.microPop,a=s.matches}if(a&&a.length&&(o=`${a[1]},${a[2]||"none"}`,i||(i=a[3])),"none"===o){var c="undefined"!=typeof performance?performance.timing:null;c&&c.responseStart-c.requestStart==0&&(o="browser")}return function(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({caching:o,isCached:0===o.indexOf("hit")},i?{microPop:i}:{})}(document.cookie,(function(){return performance.getEntriesByType("navigation")[0].serverTiming||[]})),f=l.isCached,v=l.caching,m=l.microPop,g={WixSite:1,UGC:2,Template:3}[i.siteType]||0,w=i.isResponsive?"thunderbolt-responsive":"thunderbolt",h=o.isDACRollout,b=o.siteAssetsVersionsRollout,x=h?1:0,y=b?1:0,O=0===a.code||1===a.code?a.code:null,P=Date.now()-window.initialTimestamps.initialTimestamp,S=Math.round(performance.now()),j=document.visibilityState,_=window,E=_.fedops,T=_.addEventListener,$=_.thunderboltVersion;E.apps=E.apps||{},E.apps[w]={startLoadTime:S},E.sessionId=i.sessionId,E.vsi="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var r=16*Math.random()|0;return("x"===e?r:3&r|8).toString(16)})),E.is_cached=f,E.phaseStarted=A(28),E.phaseEnded=A(22),performance.mark("[cache] "+v+(m?" ["+m+"]":"")),E.reportError=function(e){var r=(null==e?void 0:e.reason)||(null==e?void 0:e.message);r?D(26,`&errorInfo=${r}&errorType=load`):e.preventDefault()},T("error",E.reportError),T("unhandledrejection",E.reportError);var k=!1;function D(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!s.includes("suppressbi=true")){var n=(u?i.externalBaseUrl.replace(/^https?:\/\//,"")+"/_frog":"//frog.wix.com")+"/"+"bolt-performance?src=72&evid="+e+"&appName="+w+"&is_rollout="+O+"&is_sav_rollout="+y+"&is_dac_rollout="+x+"&dc="+i.dc+(m?"&microPop="+m:"")+"&is_cached="+f+"&msid="+i.metaSiteId+"&session_id="+window.fedops.sessionId+"&ish="+p+"&isb="+p+(p?"&isbr="+d:"")+"&vsi="+window.fedops.vsi+"&caching="+v+(k?",browser_cache":"")+"&pv="+j+"&pn=1&v="+$+"&url="+encodeURIComponent(s)+"&st="+g+`&ts=${P}&tsn=${S}`+r;t(n)}}function A(e){return function(r,t){var n=`&name=${r}&duration=${Date.now()-P}`,i=t&&t.paramsOverrides?Object.keys(t.paramsOverrides).map((function(e){return e+"="+t.paramsOverrides[e]})).join("&"):"";D(e,i?`${n}&${i}`:n)}}T("pageshow",(function(e){e.persisted&&(k||(k=!0,E.is_cached=!0))}),!0),window.__browser_deprecation__||D(21,`&platformOnSite=${window.fedops.data.platformOnSite}`)}();
</script>

<!-- Polyfills check -->
<script>
  if (
    typeof Promise === 'undefined' ||
    typeof Set === 'undefined' ||
    typeof Object.assign === 'undefined' ||
    typeof Array.from === 'undefined' ||
    typeof Symbol === 'undefined'
  ) {
    // send bi in order to detect the browsers in which polyfills are not working
    window.fedops.phaseStarted('missing_polyfills')
  }
</script>

<!-- Essential Viewer Model -->
<script type="application/json" id="wix-essential-viewer-model">{"fleetConfig":{"fleetName":"wix-thunderbolt","type":"GA","code":0},"mode":{"qa":false,"enableTestApi":false,"debug":false,"ssrIndicator":false,"ssrOnly":false,"siteAssetsFallback":"enable"},"componentsLibrariesTopology":[{"artifactId":"editor-elements","namespace":"wixui","url":"https:\/\/static.parastorage.com\/services\/editor-elements\/1.11741.0"},{"artifactId":"editor-elements","namespace":"dsgnsys","url":"https:\/\/static.parastorage.com\/services\/editor-elements\/1.11741.0"}],"siteFeaturesConfigs":{"sessionManager":{"isRunningInDifferentSiteContext":false}},"language":{"userLanguage":"pt"},"siteAssets":{"clientTopology":{"mediaRootUrl":"https:\/\/static.wixstatic.com","staticMediaUrl":"https:\/\/static.wixstatic.com\/media","moduleRepoUrl":"https:\/\/static.parastorage.com\/unpkg","fileRepoUrl":"https:\/\/static.parastorage.com\/services","siteAssetsUrl":"https:\/\/siteassets.parastorage.com","pageJsonServerUrls":["https:\/\/pages.parastorage.com","https:\/\/staticorigin.wixstatic.com","https:\/\/www.levesepesados.com.br","https:\/\/fallback.wix.com\/wix-html-editor-pages-webapp\/page"],"pathOfTBModulesInFileRepoForFallback":"wix-thunderbolt\/dist\/"}},"siteFeatures":["assetsLoader","businessLogger","captcha","clickHandlerRegistrar","commonConfig","componentsLoader","componentsRegistry","consentPolicy","cyclicTabbing","environmentWixCodeSdk","environment","locationWixCodeSdk","navigationManager","navigationPhases","pages","panorama","renderer","reporter","router","scrollRestoration","seoWixCodeSdk","seo","sessionManager","siteMembersWixCodeSdk","siteMembers","siteScrollBlocker","siteWixCodeSdk","stores","structureApi","thunderboltInitializer","tpaCommons","translations","warmupData","windowMessageRegistrar","windowWixCodeSdk","wixEmbedsApi","componentsReact","platform"],"site":{"externalBaseUrl":"https:\/\/www.levesepesados.com.br","isSEO":false},"media":{"staticMediaUrl":"https:\/\/static.wixstatic.com\/media","mediaRootUrl":"https:\/\/static.wixstatic.com\/","staticVideoUrl":"https:\/\/video.wixstatic.com\/"},"requestUrl":"https:\/\/www.levesepesados.com.br\/","rollout":{"siteAssetsVersionsRollout":false,"isDACRollout":0,"isTBRollout":false},"commonConfig":{"brand":"wix","host":"VIEWER","bsi":"","consentPolicy":{},"consentPolicyHeader":{}},"interactionSampleRatio":0.01,"dynamicModelUrl":"https:\/\/www.levesepesados.com.br\/_api\/v2\/dynamicmodel","experiments":{}}</script>
<script>window.viewerModel = JSON.parse(document.getElementById('wix-essential-viewer-model').textContent)</script>

<script>
  window.fetchDynamicModel = () => (window.viewerModel.siteFeaturesConfigs.sessionManager.isRunningInDifferentSiteContext ?  Promise.resolve({}) : fetch(window.viewerModel.dynamicModelUrl, { credentials: 'same-origin' }).then(function(r){if(!r.ok)throw new Error(`[${r.status}]${r.statusText}`);return r.json()}))
  window.dynamicModelPromise = window.fetchDynamicModel()
  window.commonConfig = viewerModel.commonConfig
</script>

