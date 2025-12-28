"use strict";(()=>{var N_=Object.defineProperty;var U_=(s,e,t)=>e in s?N_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Va=(s,e,t)=>(U_(s,typeof e!="symbol"?e+"":e,t),t);var Rd="164";var F_=0,Jf=1,z_=2;var km=1,Pd=2,Zn=3,Pn=0,Oi=1,Li=2,Ms=0,Kr=1,Qf=2,ep=3,tp=4,k_=5,ir=100,B_=101,H_=102,V_=103,G_=104,W_=200,X_=201,Y_=202,q_=203,ju=204,Ju=205,$_=206,Z_=207,K_=208,j_=209,J_=210,Q_=211,ev=212,tv=213,iv=214,nv=0,sv=1,rv=2,zl=3,av=4,ov=5,lv=6,cv=7,Bm=0,uv=1,dv=2,Ts=0,hv=1,fv=2,pv=3,Id=4,mv=5,gv=6,_v=7,ip="attached",vv="detached",Hm=300,ea=301,ta=302,Qu=303,ed=304,mc=306,In=1e3,jn=1001,io=1002,hi=1003,Ld=1004;var qr=1005;var Di=1006,Ja=1007;var En=1008;var As=1009,xv=1010,yv=1011,Vm=1012,Gm=1013,ia=1014,Cn=1015,gc=1016,Wm=1017,Xm=1018,mo=1020,wv=35902,bv=1021,Sv=1022,xn=1023,Mv=1024,Tv=1025,jr=1026,no=1027,Ym=1028,qm=1029,Av=1030,$m=1031,Zm=1033,gu=33776,_u=33777,vu=33778,xu=33779,np=35840,sp=35841,rp=35842,ap=35843,op=36196,lp=37492,cp=37496,up=37808,dp=37809,hp=37810,fp=37811,pp=37812,mp=37813,gp=37814,_p=37815,vp=37816,xp=37817,yp=37818,wp=37819,bp=37820,Sp=37821,yu=36492,Mp=36494,Tp=36495,Ev=36283,Ap=36284,Ep=36285,Cp=36286;var na=2300,sr=2301,wu=2302,Rp=2400,Pp=2401,Ip=2402,Cv=2500;var Km=0,_c=1,go=2,Rv=3200,Pv=3201,jm=0,Iv=1,bs="",At="srgb",Ht="srgb-linear",Dd="display-p3",vc="display-p3-linear",kl="linear",St="srgb",Bl="rec709",Hl="p3";var Rr=7680;var Lp=519,Lv=512,Dv=513,Ov=514,Jm=515,Nv=516,Uv=517,Fv=518,zv=519,td=35044;var Dp="300 es",Jn=2e3,Vl=2001,Es=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}},ci=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Op=1234567,Qa=Math.PI/180,sa=180/Math.PI;function yn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ci[s&255]+ci[s>>8&255]+ci[s>>16&255]+ci[s>>24&255]+"-"+ci[e&255]+ci[e>>8&255]+"-"+ci[e>>16&15|64]+ci[e>>24&255]+"-"+ci[t&63|128]+ci[t>>8&255]+"-"+ci[t>>16&255]+ci[t>>24&255]+ci[i&255]+ci[i>>8&255]+ci[i>>16&255]+ci[i>>24&255]).toLowerCase()}function di(s,e,t){return Math.max(e,Math.min(t,s))}function Od(s,e){return(s%e+e)%e}function kv(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Bv(s,e,t){return s!==e?(t-s)/(e-s):0}function eo(s,e,t){return(1-t)*s+t*e}function Hv(s,e,t,i){return eo(s,e,1-Math.exp(-t*i))}function Vv(s,e=1){return e-Math.abs(Od(s,e*2)-e)}function Gv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Wv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Xv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Yv(s,e){return s+Math.random()*(e-s)}function qv(s){return s*(.5-Math.random())}function $v(s){s!==void 0&&(Op=s);let e=Op+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zv(s){return s*Qa}function Kv(s){return s*sa}function jv(s){return(s&s-1)===0&&s!==0}function Jv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Qv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ex(s,e,t,i,n){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),d=r((e-i)/2),h=a((e-i)/2),f=r((i-e)/2),m=a((i-e)/2);switch(n){case"XYX":s.set(o*u,l*d,l*h,o*c);break;case"YZY":s.set(l*h,o*u,l*d,o*c);break;case"ZXZ":s.set(l*d,l*h,o*u,o*c);break;case"XZX":s.set(o*u,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*u,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Qm={DEG2RAD:Qa,RAD2DEG:sa,generateUUID:yn,clamp:di,euclideanModulo:Od,mapLinear:kv,inverseLerp:Bv,lerp:eo,damp:Hv,pingpong:Vv,smoothstep:Gv,smootherstep:Wv,randInt:Xv,randFloat:Yv,randFloatSpread:qv,seededRandom:$v,degToRad:Zv,radToDeg:Kv,isPowerOfTwo:jv,ceilPowerOfTwo:Jv,floorPowerOfTwo:Qv,setQuaternionFromProperEuler:ex,normalize:pt,denormalize:vn},tt=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(di(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class s{constructor(e,t,i,n,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],m=i[8],_=n[0],p=n[3],g=n[6],v=n[1],x=n[4],w=n[7],T=n[2],M=n[5],S=n[8];return r[0]=a*_+o*v+l*T,r[3]=a*p+o*x+l*M,r[6]=a*g+o*w+l*S,r[1]=c*_+u*v+d*T,r[4]=c*p+u*x+d*M,r[7]=c*g+u*w+d*S,r[2]=h*_+f*v+m*T,r[5]=h*p+f*x+m*M,r[8]=h*g+f*w+m*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+n*r*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,m=t*d+i*h+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=d*_,e[1]=(n*c-u*i)*_,e[2]=(o*i-n*a)*_,e[3]=h*_,e[4]=(u*t-n*l)*_,e[5]=(n*r-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(bu.makeScale(e,t)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,t){return this.premultiply(bu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bu=new Ze;function eg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function so(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function tx(){let s=so("canvas");return s.style.display="block",s}var Np={};function tg(s){s in Np||(Np[s]=!0,console.warn(s))}var Up=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fp=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ul={[Ht]:{transfer:kl,primaries:Bl,toReference:s=>s,fromReference:s=>s},[At]:{transfer:St,primaries:Bl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[vc]:{transfer:kl,primaries:Hl,toReference:s=>s.applyMatrix3(Fp),fromReference:s=>s.applyMatrix3(Up)},[Dd]:{transfer:St,primaries:Hl,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Fp),fromReference:s=>s.applyMatrix3(Up).convertLinearToSRGB()}},ix=new Set([Ht,vc]),dt={enabled:!0,_workingColorSpace:Ht,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!ix.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let i=ul[e].toReference,n=ul[t].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ul[s].primaries},getTransfer:function(s){return s===bs?kl:ul[s].transfer}};function Jr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Su(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Pr,id=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pr===void 0&&(Pr=so("canvas")),Pr.width=e.width,Pr.height=e.height;let i=Pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=so("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Jr(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Jr(t[i]/255)*255):t[i]=Jr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},nx=0,Gl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Mu(n[a].image)):r.push(Mu(n[a]))}else r=Mu(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function Mu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?id.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var sx=0,ti=class s extends Es{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=jn,n=jn,r=Di,a=En,o=xn,l=As,c=s.DEFAULT_ANISOTROPY,u=bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=yn(),this.name="",this.source=new Gl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case In:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case In:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=Hm;ti.DEFAULT_ANISOTROPY=1;var gt=class s{constructor(e=0,t=0,i=0,n=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,w=(f+1)/2,T=(g+1)/2,M=(u+h)/4,S=(d+_)/4,R=(m+p)/4;return x>w&&x>T?x<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(x),n=M/i,r=S/i):w>T?w<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(w),i=M/n,r=R/n):T<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(T),i=S/r,n=R/r),this.set(i,n,r,t),this}let v=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nd=class extends Es{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new ti(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Gl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qn=class extends nd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Wl=class extends ti{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=hi,this.minFilter=hi,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sd=class extends ti{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=hi,this.minFilter=hi,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],u=i[n+2],d=i[n+3],h=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(d!==_||l!==h||c!==f||u!==m){let p=1-o,g=l*h+c*f+u*m+d*_,v=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){let T=Math.sqrt(x),M=Math.atan2(T,g*v);p=Math.sin(p*M)/T,o=Math.sin(o*M)/T}let w=o*v;if(l=l*p+h*w,c=c*p+f*w,u=u*p+m*w,d=d*p+_*w,p===1-o){let T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],d=r[a],h=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+u*d+l*f-c*h,e[t+1]=l*m+u*h+c*d-o*f,e[t+2]=c*m+u*f+o*h-l*d,e[t+3]=u*m-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),d=o(r/2),h=l(i/2),f=l(n/2),m=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(di(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+n*c-r*l,this._y=n*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-n*o,this._w=a*u-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=n*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class s{constructor(e=0,t=0,i=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),u=2*(o*t-r*n),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=n+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tu.copy(this).projectOnVector(e),this.sub(Tu)}reflect(e){return this.sub(Tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(di(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tu=new U,zp=new Yt,sn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(r,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dl.copy(i.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ga),hl.subVectors(this.max,Ga),Ir.subVectors(e.a,Ga),Lr.subVectors(e.b,Ga),Dr.subVectors(e.c,Ga),gs.subVectors(Lr,Ir),_s.subVectors(Dr,Lr),Zs.subVectors(Ir,Dr);let t=[0,-gs.z,gs.y,0,-_s.z,_s.y,0,-Zs.z,Zs.y,gs.z,0,-gs.x,_s.z,0,-_s.x,Zs.z,0,-Zs.x,-gs.y,gs.x,0,-_s.y,_s.x,0,-Zs.y,Zs.x,0];return!Au(t,Ir,Lr,Dr,hl)||(t=[1,0,0,0,1,0,0,0,1],!Au(t,Ir,Lr,Dr,hl))?!1:(fl.crossVectors(gs,_s),t=[fl.x,fl.y,fl.z],Au(t,Ir,Lr,Dr,hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Gn=[new U,new U,new U,new U,new U,new U,new U,new U],mn=new U,dl=new sn,Ir=new U,Lr=new U,Dr=new U,gs=new U,_s=new U,Zs=new U,Ga=new U,hl=new U,fl=new U,Ks=new U;function Au(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Ks.fromArray(s,r);let o=n.x*Math.abs(Ks.x)+n.y*Math.abs(Ks.y)+n.z*Math.abs(Ks.z),l=e.dot(Ks),c=t.dot(Ks),u=i.dot(Ks);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var rx=new sn,Wa=new U,Eu=new U,Wi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):rx.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);let t=Wa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Wa,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(Eu)),this.expandByPoint(Wa.copy(e.center).sub(Eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wn=new U,Cu=new U,pl=new U,vs=new U,Ru=new U,ml=new U,Pu=new U,ra=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Cu.copy(e).add(t).multiplyScalar(.5),pl.copy(t).sub(e).normalize(),vs.copy(this.origin).sub(Cu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(pl),o=vs.dot(this.direction),l=-vs.dot(pl),c=vs.lengthSq(),u=Math.abs(1-a*a),d,h,f,m;if(u>0)if(d=a*l-o,h=a*o-l,m=r*u,d>=0)if(h>=-m)if(h<=m){let _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Cu).addScaledVector(pl,h),f}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);let i=Wn.dot(this.direction),n=Wn.dot(Wn)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,i,n,r){Ru.subVectors(t,e),ml.subVectors(i,e),Pu.crossVectors(Ru,ml);let a=this.direction.dot(Pu),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vs.subVectors(this.origin,e);let l=o*this.direction.dot(ml.crossVectors(vs,ml));if(l<0)return null;let c=o*this.direction.dot(Ru.cross(vs));if(c<0||l+c>a)return null;let u=-o*vs.dot(Pu);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class s{constructor(e,t,i,n,r,a,o,l,c,u,d,h,f,m,_,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,u,d,h,f,m,_,p)}set(e,t,i,n,r,a,o,l,c,u,d,h,f,m,_,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Or.setFromMatrixColumn(e,0).length(),r=1/Or.setFromMatrixColumn(e,1).length(),a=1/Or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,m=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,m=c*u,_=c*d;t[0]=h+_*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,m=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,m=o*u,_=o*d;t[0]=l*u,t[4]=m*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=m*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+m,t[10]=h-_*d}else if(e.order==="XZY"){let h=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ax,e,ox)}lookAt(e,t,i){let n=this.elements;return Vi.subVectors(e,t),Vi.lengthSq()===0&&(Vi.z=1),Vi.normalize(),xs.crossVectors(i,Vi),xs.lengthSq()===0&&(Math.abs(i.z)===1?Vi.x+=1e-4:Vi.z+=1e-4,Vi.normalize(),xs.crossVectors(i,Vi)),xs.normalize(),gl.crossVectors(Vi,xs),n[0]=xs.x,n[4]=gl.x,n[8]=Vi.x,n[1]=xs.y,n[5]=gl.y,n[9]=Vi.y,n[2]=xs.z,n[6]=gl.z,n[10]=Vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],m=i[2],_=i[6],p=i[10],g=i[14],v=i[3],x=i[7],w=i[11],T=i[15],M=n[0],S=n[4],R=n[8],b=n[12],y=n[1],C=n[5],L=n[9],P=n[13],O=n[2],z=n[6],k=n[10],V=n[14],N=n[3],K=n[7],I=n[11],ae=n[15];return r[0]=a*M+o*y+l*O+c*N,r[4]=a*S+o*C+l*z+c*K,r[8]=a*R+o*L+l*k+c*I,r[12]=a*b+o*P+l*V+c*ae,r[1]=u*M+d*y+h*O+f*N,r[5]=u*S+d*C+h*z+f*K,r[9]=u*R+d*L+h*k+f*I,r[13]=u*b+d*P+h*V+f*ae,r[2]=m*M+_*y+p*O+g*N,r[6]=m*S+_*C+p*z+g*K,r[10]=m*R+_*L+p*k+g*I,r[14]=m*b+_*P+p*V+g*ae,r[3]=v*M+x*y+w*O+T*N,r[7]=v*S+x*C+w*z+T*K,r[11]=v*R+x*L+w*k+T*I,r[15]=v*b+x*P+w*V+T*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15];return m*(+r*l*d-n*c*d-r*o*h+i*c*h+n*o*f-i*l*f)+_*(+t*l*f-t*c*h+r*a*h-n*a*f+n*c*u-r*l*u)+p*(+t*c*d-t*o*f-r*a*d+i*a*f+r*o*u-i*c*u)+g*(-n*o*u-t*l*d+t*o*h+n*a*d-i*a*h+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],v=d*p*c-_*h*c+_*l*f-o*p*f-d*l*g+o*h*g,x=m*h*c-u*p*c-m*l*f+a*p*f+u*l*g-a*h*g,w=u*_*c-m*d*c+m*o*f-a*_*f-u*o*g+a*d*g,T=m*d*l-u*_*l-m*o*h+a*_*h+u*o*p-a*d*p,M=t*v+i*x+n*w+r*T;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/M;return e[0]=v*S,e[1]=(_*h*r-d*p*r-_*n*f+i*p*f+d*n*g-i*h*g)*S,e[2]=(o*p*r-_*l*r+_*n*c-i*p*c-o*n*g+i*l*g)*S,e[3]=(d*l*r-o*h*r-d*n*c+i*h*c+o*n*f-i*l*f)*S,e[4]=x*S,e[5]=(u*p*r-m*h*r+m*n*f-t*p*f-u*n*g+t*h*g)*S,e[6]=(m*l*r-a*p*r-m*n*c+t*p*c+a*n*g-t*l*g)*S,e[7]=(a*h*r-u*l*r+u*n*c-t*h*c-a*n*f+t*l*f)*S,e[8]=w*S,e[9]=(m*d*r-u*_*r-m*i*f+t*_*f+u*i*g-t*d*g)*S,e[10]=(a*_*r-m*o*r+m*i*c-t*_*c-a*i*g+t*o*g)*S,e[11]=(u*o*r-a*d*r-u*i*c+t*d*c+a*i*f-t*o*f)*S,e[12]=T*S,e[13]=(u*_*n-m*d*n+m*i*h-t*_*h-u*i*p+t*d*p)*S,e[14]=(m*o*n-a*_*n-m*i*l+t*_*l+a*i*p-t*o*p)*S,e[15]=(a*d*n-u*o*n+u*i*l-t*d*l-a*i*h+t*o*h)*S,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*a,0,c*l-n*o,u*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,m=r*d,_=a*u,p=a*d,g=o*d,v=l*c,x=l*u,w=l*d,T=i.x,M=i.y,S=i.z;return n[0]=(1-(_+g))*T,n[1]=(f+w)*T,n[2]=(m-x)*T,n[3]=0,n[4]=(f-w)*M,n[5]=(1-(h+g))*M,n[6]=(p+v)*M,n[7]=0,n[8]=(m+x)*S,n[9]=(p-v)*S,n[10]=(1-(h+_))*S,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,r=Or.set(n[0],n[1],n[2]).length(),a=Or.set(n[4],n[5],n[6]).length(),o=Or.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],gn.copy(this);let c=1/r,u=1/a,d=1/o;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=d,gn.elements[9]*=d,gn.elements[10]*=d,t.setFromRotationMatrix(gn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=Jn){let l=this.elements,c=2*r/(t-e),u=2*r/(i-n),d=(t+e)/(t-e),h=(i+n)/(i-n),f,m;if(o===Jn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Vl)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=Jn){let l=this.elements,c=1/(t-e),u=1/(i-n),d=1/(a-r),h=(t+e)*c,f=(i+n)*u,m,_;if(o===Jn)m=(a+r)*d,_=-2*d;else if(o===Vl)m=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Or=new U,gn=new Ge,ax=new U(0,0,0),ox=new U(1,1,1),xs=new U,gl=new U,Vi=new U,kp=new Ge,Bp=new Yt,Ln=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],d=n[2],h=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(di(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-di(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(di(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-di(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(di(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-di(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var Xl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lx=0,Hp=new U,Nr=new Yt,Xn=new Ge,_l=new U,Xa=new U,cx=new U,ux=new Yt,Vp=new U(1,0,0),Gp=new U(0,1,0),Wp=new U(0,0,1),Xp={type:"added"},dx={type:"removed"},Ur={type:"childadded",child:null},Iu={type:"childremoved",child:null},Lt=class s extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new U,t=new Ln,i=new Yt,n=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ze}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(Vp,e)}rotateY(e){return this.rotateOnAxis(Gp,e)}rotateZ(e){return this.rotateOnAxis(Wp,e)}translateOnAxis(e,t){return Hp.copy(e).applyQuaternion(this.quaternion),this.position.add(Hp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vp,e)}translateY(e){return this.translateOnAxis(Gp,e)}translateZ(e){return this.translateOnAxis(Wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_l.copy(e):_l.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Xa,_l,this.up):Xn.lookAt(_l,Xa,this.up),this.quaternion.setFromRotationMatrix(Xn),n&&(Xn.extractRotation(n.matrixWorld),Nr.setFromRotationMatrix(Xn),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xp),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dx),Iu.child=e,this.dispatchEvent(Iu),Iu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xp),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,e,cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,ux,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++){let o=n[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};Lt.DEFAULT_UP=new U(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=new U,Yn=new U,Lu=new U,qn=new U,Fr=new U,zr=new U,Yp=new U,Du=new U,Ou=new U,Nu=new U,$r=class s{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),_n.subVectors(e,t),n.cross(_n);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){_n.subVectors(n,t),Yn.subVectors(i,t),Lu.subVectors(e,t);let a=_n.dot(_n),o=_n.dot(Yn),l=_n.dot(Lu),c=Yn.dot(Yn),u=Yn.dot(Lu),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,m=(a*u-o*l)*h;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static isFrontFacing(e,t,i,n){return _n.subVectors(i,t),Yn.subVectors(e,t),_n.cross(Yn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),_n.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;Fr.subVectors(n,i),zr.subVectors(r,i),Du.subVectors(e,i);let l=Fr.dot(Du),c=zr.dot(Du);if(l<=0&&c<=0)return t.copy(i);Ou.subVectors(e,n);let u=Fr.dot(Ou),d=zr.dot(Ou);if(u>=0&&d<=u)return t.copy(n);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Fr,a);Nu.subVectors(e,r);let f=Fr.dot(Nu),m=zr.dot(Nu);if(m>=0&&f<=m)return t.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(zr,o);let p=u*m-f*d;if(p<=0&&d-u>=0&&f-m>=0)return Yp.subVectors(r,n),o=(d-u)/(d-u+(f-m)),t.copy(n).addScaledVector(Yp,o);let g=1/(p+_+h);return a=_*g,o=h*g,t.copy(i).addScaledVector(Fr,a).addScaledVector(zr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},vl={h:0,s:0,l:0};function Uu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=dt.workingColorSpace){if(e=Od(e,1),t=di(t,0,1),i=di(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Uu(a,r,e+1/3),this.g=Uu(a,r,e),this.b=Uu(a,r,e-1/3)}return dt.toWorkingColorSpace(this,n),this}setStyle(e,t=At){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let i=ig[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=Su(e.r),this.g=Su(e.g),this.b=Su(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return dt.fromWorkingColorSpace(ui.copy(this),e),Math.round(di(ui.r*255,0,255))*65536+Math.round(di(ui.g*255,0,255))*256+Math.round(di(ui.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(ui.copy(this),t);let i=ui.r,n=ui.g,r=ui.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(ui.copy(this),t),e.r=ui.r,e.g=ui.g,e.b=ui.b,e}getStyle(e=At){dt.fromWorkingColorSpace(ui.copy(this),e);let t=ui.r,i=ui.g,n=ui.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(vl);let i=eo(ys.h,vl.h,t),n=eo(ys.s,vl.s,t),r=eo(ys.l,vl.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ui=new ze;ze.NAMES=ig;var hx=0,Xi=class extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=Kr,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ju,this.blendDst=Ju,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==Pn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ju&&(i.blendSrc=this.blendSrc),this.blendDst!==Ju&&(i.blendDst=this.blendDst),this.blendEquation!==ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Dn=class extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new U,xl=new tt,It=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=td,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return tg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xl.fromBufferAttribute(this,t),xl.applyMatrix3(e),this.setXY(t,xl.x,xl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),n=pt(n,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==td&&(e.usage=this.usage),e}};var Yl=class extends It{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ql=class extends It{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var nn=class extends It{constructor(e,t,i){super(new Float32Array(e),t,i)}},fx=0,tn=new Ge,Fu=new Lt,kr=new U,Gi=new sn,Ya=new sn,Jt=new U,Ni=class s extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eg(e)?ql:Yl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];Gi.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Gi.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Gi.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Gi.min),this.boundingBox.expandByPoint(Gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Gi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ya.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Gi.min,Ya.min),Gi.expandByPoint(Jt),Jt.addVectors(Gi.max,Ya.max),Gi.expandByPoint(Jt)):(Gi.expandByPoint(Ya.min),Gi.expandByPoint(Ya.max))}Gi.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)Jt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Jt.fromBufferAttribute(o,c),l&&(kr.fromBufferAttribute(e,c),Jt.add(kr)),n=Math.max(n,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new U,l[R]=new U;let c=new U,u=new U,d=new U,h=new tt,f=new tt,m=new tt,_=new U,p=new U;function g(R,b,y){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,y),h.fromBufferAttribute(r,R),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,y),u.sub(c),d.sub(c),f.sub(h),m.sub(h);let C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(C),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(C),o[R].add(_),o[b].add(_),o[y].add(_),l[R].add(p),l[b].add(p),l[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,b=v.length;R<b;++R){let y=v[R],C=y.start,L=y.count;for(let P=C,O=C+L;P<O;P+=3)g(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let x=new U,w=new U,T=new U,M=new U;function S(R){T.fromBufferAttribute(n,R),M.copy(T);let b=o[R];x.copy(b),x.sub(T.multiplyScalar(T.dot(b))).normalize(),w.crossVectors(M,b);let C=w.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,C)}for(let R=0,b=v.length;R<b;++R){let y=v[R],C=y.start,L=y.count;for(let P=C,O=C+L;P<O;P+=3)S(e.getX(P+0)),S(e.getX(P+1)),S(e.getX(P+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let n=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let h=0,f=e.count;h<f;h+=3){let m=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);n.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(n,r),u.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)n.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(n,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let g=0;g<u;g++)h[m++]=c[f++]}return new It(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let c in n){let u=n[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qp=new Ge,js=new ra,yl=new Wi,$p=new U,Br=new U,Hr=new U,Vr=new U,zu=new U,wl=new U,bl=new tt,Sl=new tt,Ml=new tt,Zp=new U,Kp=new U,jp=new U,Tl=new U,Al=new U,fi=class extends Lt{constructor(e=new Ni,t=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){wl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(zu.fromBufferAttribute(d,e),a?wl.addScaledVector(zu,u):wl.addScaledVector(zu.sub(t),u))}t.add(wl)}return t}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(r),js.copy(e.ray).recast(e.near),!(yl.containsPoint(js.origin)===!1&&(js.intersectSphere(yl,$p)===null||js.origin.distanceToSquared($p)>(e.far-e.near)**2))&&(qp.copy(r).invert(),js.copy(e.ray).applyMatrix4(qp),!(i.boundingBox!==null&&js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,js)))}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=h.length;m<_;m++){let p=h[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let w=v,T=x;w<T;w+=3){let M=o.getX(w),S=o.getX(w+1),R=o.getX(w+2);n=El(this,g,e,i,c,u,d,M,S,R),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{let m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let v=o.getX(p),x=o.getX(p+1),w=o.getX(p+2);n=El(this,a,e,i,c,u,d,v,x,w),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=h.length;m<_;m++){let p=h[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let w=v,T=x;w<T;w+=3){let M=w,S=w+1,R=w+2;n=El(this,g,e,i,c,u,d,M,S,R),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let v=p,x=p+1,w=p+2;n=El(this,a,e,i,c,u,d,v,x,w),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}};function px(s,e,t,i,n,r,a,o){let l;if(e.side===Oi?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Pn,o),l===null)return null;Al.copy(o),Al.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Al);return c<t.near||c>t.far?null:{distance:c,point:Al.clone(),object:s}}function El(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,Br),s.getVertexPosition(l,Hr),s.getVertexPosition(c,Vr);let u=px(s,e,t,i,Br,Hr,Vr,Tl);if(u){n&&(bl.fromBufferAttribute(n,o),Sl.fromBufferAttribute(n,l),Ml.fromBufferAttribute(n,c),u.uv=$r.getInterpolation(Tl,Br,Hr,Vr,bl,Sl,Ml,new tt)),r&&(bl.fromBufferAttribute(r,o),Sl.fromBufferAttribute(r,l),Ml.fromBufferAttribute(r,c),u.uv1=$r.getInterpolation(Tl,Br,Hr,Vr,bl,Sl,Ml,new tt)),a&&(Zp.fromBufferAttribute(a,o),Kp.fromBufferAttribute(a,l),jp.fromBufferAttribute(a,c),u.normal=$r.getInterpolation(Tl,Br,Hr,Vr,Zp,Kp,jp,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new U,materialIndex:0};$r.getNormal(Br,Hr,Vr,d.normal),u.face=d}return u}var ro=class s extends Ni{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,n,a,2),m("x","z","y",1,-1,e,i,-t,n,a,3),m("x","y","z",1,-1,e,t,i,n,r,4),m("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(d,2));function m(_,p,g,v,x,w,T,M,S,R,b){let y=w/S,C=T/R,L=w/2,P=T/2,O=M/2,z=S+1,k=R+1,V=0,N=0,K=new U;for(let I=0;I<k;I++){let ae=I*C-P;for(let Ce=0;Ce<z;Ce++){let qe=Ce*y-L;K[_]=qe*v,K[p]=ae*x,K[g]=O,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[g]=M>0?1:-1,u.push(K.x,K.y,K.z),d.push(Ce/S),d.push(1-I/R),V+=1}}for(let I=0;I<R;I++)for(let ae=0;ae<S;ae++){let Ce=h+ae+z*I,qe=h+ae+z*(I+1),$=h+(ae+1)+z*(I+1),ee=h+(ae+1)+z*I;l.push(Ce,qe,ee),l.push(qe,$,ee),N+=6}o.addGroup(f,N,b),f+=N,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function aa(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Si(s){let e={};for(let t=0;t<s.length;t++){let i=aa(s[t]);for(let n in i)e[n]=i[n]}return e}function mx(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ng(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var gx={clone:aa,merge:Si},_x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_x,this.fragmentShader=vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=aa(e.uniforms),this.uniformsGroups=mx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},$l=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ws=new U,Jp=new tt,Qp=new tt,Xt=class extends $l{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ws.x,ws.y).multiplyScalar(-e/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ws.x,ws.y).multiplyScalar(-e/ws.z)}getViewSize(e,t){return this.getViewBounds(e,Jp,Qp),t.subVectors(Qp,Jp)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qa*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gr=-90,Wr=1,rd=class extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Xt(Gr,Wr,e,t);n.layers=this.layers,this.add(n);let r=new Xt(Gr,Wr,e,t);r.layers=this.layers,this.add(r);let a=new Xt(Gr,Wr,e,t);a.layers=this.layers,this.add(a);let o=new Xt(Gr,Wr,e,t);o.layers=this.layers,this.add(o);let l=new Xt(Gr,Wr,e,t);l.layers=this.layers,this.add(l);let c=new Xt(Gr,Wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},ao=class extends ti{constructor(e,t,i,n,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ea,super(e,t,i,n,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ad=class extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ao(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Di}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ro(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:aa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Oi,blending:Ms});r.uniforms.tEquirect.value=t;let a=new fi(n,r),o=t.minFilter;return t.minFilter===En&&(t.minFilter=Di),new rd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}},ku=new U,xx=new U,yx=new Ze,Kn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=ku.subVectors(i,t).cross(xx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ku),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||yx.getNormalMatrix(e),n=this.coplanarPoint(ku).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Js=new Wi,Cl=new U,oo=class{constructor(e=new Kn,t=new Kn,i=new Kn,n=new Kn,r=new Kn,a=new Kn){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jn){let i=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],u=n[5],d=n[6],h=n[7],f=n[8],m=n[9],_=n[10],p=n[11],g=n[12],v=n[13],x=n[14],w=n[15];if(i[0].setComponents(l-r,h-c,p-f,w-g).normalize(),i[1].setComponents(l+r,h+c,p+f,w+g).normalize(),i[2].setComponents(l+a,h+u,p+m,w+v).normalize(),i[3].setComponents(l-a,h-u,p-m,w-v).normalize(),i[4].setComponents(l-o,h-d,p-_,w-x).normalize(),t===Jn)i[5].setComponents(l+o,h+d,p+_,w+x).normalize();else if(t===Vl)i[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){return Js.center.set(0,0,0),Js.radius=.7071067811865476,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Cl.x=n.normal.x>0?e.max.x:e.min.x,Cl.y=n.normal.y>0?e.max.y:e.min.y,Cl.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sg(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function wx(s){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l._updateRange,h=l.updateRanges;if(s.bindBuffer(c,o),d.count===-1&&h.length===0&&s.bufferSubData(c,0,u),h.length!==0){for(let f=0,m=h.length;f<m;f++){let _=h[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(s.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var oa=class s extends Ni{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,d=e/o,h=t/l,f=[],m=[],_=[],p=[];for(let g=0;g<u;g++){let v=g*h-a;for(let x=0;x<c;x++){let w=x*d-r;m.push(w,-v,0),_.push(0,0,1),p.push(x/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let x=v+c*g,w=v+c*(g+1),T=v+1+c*(g+1),M=v+1+c*g;f.push(x,w,M),f.push(w,T,M)}this.setIndex(f),this.setAttribute("position",new nn(m,3)),this.setAttribute("normal",new nn(_,3)),this.setAttribute("uv",new nn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},bx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ax=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Px=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ox=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ux=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ey=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,py=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,my=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,by=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,My=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ty=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ay=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ey=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ry=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Iy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ny=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Fy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ky=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,By=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$y=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ky=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ew=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,sw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ow=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ww=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Aw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Rw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ow=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ww=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$w=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:bx,alphahash_pars_fragment:Sx,alphamap_fragment:Mx,alphamap_pars_fragment:Tx,alphatest_fragment:Ax,alphatest_pars_fragment:Ex,aomap_fragment:Cx,aomap_pars_fragment:Rx,batching_pars_vertex:Px,batching_vertex:Ix,begin_vertex:Lx,beginnormal_vertex:Dx,bsdfs:Ox,iridescence_fragment:Nx,bumpmap_pars_fragment:Ux,clipping_planes_fragment:Fx,clipping_planes_pars_fragment:zx,clipping_planes_pars_vertex:kx,clipping_planes_vertex:Bx,color_fragment:Hx,color_pars_fragment:Vx,color_pars_vertex:Gx,color_vertex:Wx,common:Xx,cube_uv_reflection_fragment:Yx,defaultnormal_vertex:qx,displacementmap_pars_vertex:$x,displacementmap_vertex:Zx,emissivemap_fragment:Kx,emissivemap_pars_fragment:jx,colorspace_fragment:Jx,colorspace_pars_fragment:Qx,envmap_fragment:ey,envmap_common_pars_fragment:ty,envmap_pars_fragment:iy,envmap_pars_vertex:ny,envmap_physical_pars_fragment:py,envmap_vertex:sy,fog_vertex:ry,fog_pars_vertex:ay,fog_fragment:oy,fog_pars_fragment:ly,gradientmap_pars_fragment:cy,lightmap_pars_fragment:uy,lights_lambert_fragment:dy,lights_lambert_pars_fragment:hy,lights_pars_begin:fy,lights_toon_fragment:my,lights_toon_pars_fragment:gy,lights_phong_fragment:_y,lights_phong_pars_fragment:vy,lights_physical_fragment:xy,lights_physical_pars_fragment:yy,lights_fragment_begin:wy,lights_fragment_maps:by,lights_fragment_end:Sy,logdepthbuf_fragment:My,logdepthbuf_pars_fragment:Ty,logdepthbuf_pars_vertex:Ay,logdepthbuf_vertex:Ey,map_fragment:Cy,map_pars_fragment:Ry,map_particle_fragment:Py,map_particle_pars_fragment:Iy,metalnessmap_fragment:Ly,metalnessmap_pars_fragment:Dy,morphinstance_vertex:Oy,morphcolor_vertex:Ny,morphnormal_vertex:Uy,morphtarget_pars_vertex:Fy,morphtarget_vertex:zy,normal_fragment_begin:ky,normal_fragment_maps:By,normal_pars_fragment:Hy,normal_pars_vertex:Vy,normal_vertex:Gy,normalmap_pars_fragment:Wy,clearcoat_normal_fragment_begin:Xy,clearcoat_normal_fragment_maps:Yy,clearcoat_pars_fragment:qy,iridescence_pars_fragment:$y,opaque_fragment:Zy,packing:Ky,premultiplied_alpha_fragment:jy,project_vertex:Jy,dithering_fragment:Qy,dithering_pars_fragment:ew,roughnessmap_fragment:tw,roughnessmap_pars_fragment:iw,shadowmap_pars_fragment:nw,shadowmap_pars_vertex:sw,shadowmap_vertex:rw,shadowmask_pars_fragment:aw,skinbase_vertex:ow,skinning_pars_vertex:lw,skinning_vertex:cw,skinnormal_vertex:uw,specularmap_fragment:dw,specularmap_pars_fragment:hw,tonemapping_fragment:fw,tonemapping_pars_fragment:pw,transmission_fragment:mw,transmission_pars_fragment:gw,uv_pars_fragment:_w,uv_pars_vertex:vw,uv_vertex:xw,worldpos_vertex:yw,background_vert:ww,background_frag:bw,backgroundCube_vert:Sw,backgroundCube_frag:Mw,cube_vert:Tw,cube_frag:Aw,depth_vert:Ew,depth_frag:Cw,distanceRGBA_vert:Rw,distanceRGBA_frag:Pw,equirect_vert:Iw,equirect_frag:Lw,linedashed_vert:Dw,linedashed_frag:Ow,meshbasic_vert:Nw,meshbasic_frag:Uw,meshlambert_vert:Fw,meshlambert_frag:zw,meshmatcap_vert:kw,meshmatcap_frag:Bw,meshnormal_vert:Hw,meshnormal_frag:Vw,meshphong_vert:Gw,meshphong_frag:Ww,meshphysical_vert:Xw,meshphysical_frag:Yw,meshtoon_vert:qw,meshtoon_frag:$w,points_vert:Zw,points_frag:Kw,shadow_vert:jw,shadow_frag:Jw,sprite_vert:Qw,sprite_frag:eb},fe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},An={basic:{uniforms:Si([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Si([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Si([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Si([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Si([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Si([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Si([fe.points,fe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Si([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Si([fe.common,fe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Si([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Si([fe.sprite,fe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Si([fe.common,fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Si([fe.lights,fe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};An.physical={uniforms:Si([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Rl={r:0,b:0,g:0},Qs=new Ln,tb=new Ge;function ib(s,e,t,i,n,r,a){let o=new ze(0),l=r===!0?0:1,c,u,d=null,h=0,f=null;function m(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1,w=m(v);w===null?g(o,l):w&&w.isColor&&(g(w,1),x=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function p(v,x){let w=m(x);w&&(w.isCubeTexture||w.mapping===mc)?(u===void 0&&(u=new fi(new ro(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:aa(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,M,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),Qs.copy(x.backgroundRotation),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tb.makeRotationFromEuler(Qs)),u.material.toneMapped=dt.getTransfer(w.colorSpace)!==St,(d!==w||h!==w.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,d=w,h=w.version,f=s.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new fi(new oa(2,2),new On({name:"BackgroundMaterial",uniforms:aa(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=dt.getTransfer(w.colorSpace)!==St,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=w,h=w.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,x){v.getRGB(Rl,ng(s)),i.buffers.color.setClear(Rl.r,Rl.g,Rl.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,g(o,l)},render:_,addToRenderList:p}}function nb(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=h(null),r=n,a=!1;function o(y,C,L,P,O){let z=!1,k=d(P,L,C);r!==k&&(r=k,c(r.object)),z=f(y,P,L,O),z&&m(y,P,L,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,w(y,C,L,P),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function d(y,C,L){let P=L.wireframe===!0,O=i[y.id];O===void 0&&(O={},i[y.id]=O);let z=O[C.id];z===void 0&&(z={},O[C.id]=z);let k=z[P];return k===void 0&&(k=h(l()),z[P]=k),k}function h(y){let C=[],L=[],P=[];for(let O=0;O<t;O++)C[O]=0,L[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:P,object:y,attributes:{},index:null}}function f(y,C,L,P){let O=r.attributes,z=C.attributes,k=0,V=L.getAttributes();for(let N in V)if(V[N].location>=0){let I=O[N],ae=z[N];if(ae===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),I===void 0||I.attribute!==ae||ae&&I.data!==ae.data)return!0;k++}return r.attributesNum!==k||r.index!==P}function m(y,C,L,P){let O={},z=C.attributes,k=0,V=L.getAttributes();for(let N in V)if(V[N].location>=0){let I=z[N];I===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(I=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(I=y.instanceColor));let ae={};ae.attribute=I,I&&I.data&&(ae.data=I.data),O[N]=ae,k++}r.attributes=O,r.attributesNum=k,r.index=P}function _(){let y=r.newAttributes;for(let C=0,L=y.length;C<L;C++)y[C]=0}function p(y){g(y,0)}function g(y,C){let L=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;L[y]=1,P[y]===0&&(s.enableVertexAttribArray(y),P[y]=1),O[y]!==C&&(s.vertexAttribDivisor(y,C),O[y]=C)}function v(){let y=r.newAttributes,C=r.enabledAttributes;for(let L=0,P=C.length;L<P;L++)C[L]!==y[L]&&(s.disableVertexAttribArray(L),C[L]=0)}function x(y,C,L,P,O,z,k){k===!0?s.vertexAttribIPointer(y,C,L,O,z):s.vertexAttribPointer(y,C,L,P,O,z)}function w(y,C,L,P){_();let O=P.attributes,z=L.getAttributes(),k=C.defaultAttributeValues;for(let V in z){let N=z[V];if(N.location>=0){let K=O[V];if(K===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){let I=K.normalized,ae=K.itemSize,Ce=e.get(K);if(Ce===void 0)continue;let qe=Ce.buffer,$=Ce.type,ee=Ce.bytesPerElement,ue=$===s.INT||$===s.UNSIGNED_INT||K.gpuType===Gm;if(K.isInterleavedBufferAttribute){let ie=K.data,Le=ie.stride,Pe=K.offset;if(ie.isInstancedInterleavedBuffer){for(let G=0;G<N.locationSize;G++)g(N.location+G,ie.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let G=0;G<N.locationSize;G++)p(N.location+G);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let G=0;G<N.locationSize;G++)x(N.location+G,ae/N.locationSize,$,I,Le*ee,(Pe+ae/N.locationSize*G)*ee,ue)}else{if(K.isInstancedBufferAttribute){for(let ie=0;ie<N.locationSize;ie++)g(N.location+ie,K.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ie=0;ie<N.locationSize;ie++)p(N.location+ie);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let ie=0;ie<N.locationSize;ie++)x(N.location+ie,ae/N.locationSize,$,I,ae*ee,ae/N.locationSize*ie*ee,ue)}}else if(k!==void 0){let I=k[V];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(N.location,I);break;case 3:s.vertexAttrib3fv(N.location,I);break;case 4:s.vertexAttrib4fv(N.location,I);break;default:s.vertexAttrib1fv(N.location,I)}}}}v()}function T(){R();for(let y in i){let C=i[y];for(let L in C){let P=C[L];for(let O in P)u(P[O].object),delete P[O];delete C[L]}delete i[y]}}function M(y){if(i[y.id]===void 0)return;let C=i[y.id];for(let L in C){let P=C[L];for(let O in P)u(P[O].object),delete P[O];delete C[L]}delete i[y.id]}function S(y){for(let C in i){let L=i[C];if(L[y.id]===void 0)continue;let P=L[y.id];for(let O in P)u(P[O].object),delete P[O];delete L[y.id]}}function R(){b(),a=!0,r!==n&&(r=n,c(r.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function sb(s,e,t){let i;function n(c){i=c}function r(c,u){s.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(s.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<d;f++)this.render(c[f],u[f]);else{h.multiDrawArraysWEBGL(i,c,0,u,0,d);let f=0;for(let m=0;m<d;m++)f+=u[m];t.update(f,i,1)}}function l(c,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],u[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_];for(let _=0;_<h.length;_++)t.update(m,i,h[_])}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rb(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(M){return!(M!==xn&&i.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){let S=M===gc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==As&&i.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Cn&&!S)}function l(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=f>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:w,maxSamples:T}}function ab(s){let e=this,t=null,i=0,n=!1,r=!1,a=new Kn,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||n;return n=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=s.get(d);if(!n||m===null||m.length===0||r&&!p)r?u(null):c();else{let v=r?0:i,x=v*4,w=g.clippingState||null;l.value=w,w=u(m,h,x,f);for(let T=0;T!==x;++T)w[T]=t[T];g.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=f+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,w=f;x!==_;++x,w+=4)a.copy(d[x]).applyMatrix4(v,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ob(s){let e=new WeakMap;function t(a,o){return o===Qu?a.mapping=ea:o===ed&&(a.mapping=ta),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Qu||o===ed)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ad(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var la=class extends $l{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zr=4,em=[.125,.215,.35,.446,.526,.582],nr=20,Bu=new la,tm=new ze,Hu=null,Vu=0,Gu=0,Wu=!1,tr=(1+Math.sqrt(5))/2,Xr=1/tr,im=[new U(-tr,Xr,0),new U(tr,Xr,0),new U(-Xr,0,tr),new U(Xr,0,tr),new U(0,tr,-Xr),new U(0,tr,Xr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Zl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Hu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hu,Vu,Gu),this._renderer.xr.enabled=Wu,e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ea||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:gc,format:xn,colorSpace:Ht,depthBuffer:!1},n=nm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nm(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lb(r)),this._blurMaterial=cb(r,e,t)}return n}_compileMaterial(e){let t=new fi(this._lodPlanes[0],e);this._renderer.compile(t,Bu)}_sceneToCubeUV(e,t,i,n){let o=new Xt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(tm),u.toneMapping=Ts,u.autoClear=!1;let f=new Dn({name:"PMREM.Background",side:Oi,depthWrite:!1,depthTest:!1}),m=new fi(new ro,f),_=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(tm),_=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):v===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));let x=this._cubeSize;Pl(n,v*x,g>2?x:0,x,x),u.setRenderTarget(n),_&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===ea||e.mapping===ta;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());let r=n?this._cubemapMaterial:this._equirectMaterial,a=new fi(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Pl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Bu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=im[(n-r-1)%im.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new fi(this._lodPlanes[n],c),h=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*nr-1),_=r/m,p=isFinite(r)?1+Math.floor(u*_):nr;p>nr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${nr}`);let g=[],v=0;for(let S=0;S<nr;++S){let R=S/_,b=Math.exp(-R*R/2);g.push(b),S===0?v+=b:S<p&&(v+=2*b)}for(let S=0;S<g.length;S++)g[S]=g[S]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:x}=this;h.dTheta.value=m,h.mipInt.value=x-i;let w=this._sizeLods[n],T=3*w*(n>x-Zr?n-x+Zr:0),M=4*(this._cubeSize-w);Pl(t,T,M,3*w,2*w),l.setRenderTarget(t),l.render(d,Bu)}};function lb(s){let e=[],t=[],i=[],n=s,r=s-Zr+1+em.length;for(let a=0;a<r;a++){let o=Math.pow(2,n);t.push(o);let l=1/o;a>s-Zr?l=em[a-s+Zr-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,m=6,_=3,p=2,g=1,v=new Float32Array(_*m*f),x=new Float32Array(p*m*f),w=new Float32Array(g*m*f);for(let M=0;M<f;M++){let S=M%3*2/3-1,R=M>2?0:-1,b=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];v.set(b,_*m*M),x.set(h,p*m*M);let y=[M,M,M,M,M,M];w.set(y,g*m*M)}let T=new Ni;T.setAttribute("position",new It(v,_)),T.setAttribute("uv",new It(x,p)),T.setAttribute("faceIndex",new It(w,g)),e.push(T),n>Zr&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function nm(s,e,t){let i=new Qn(s,e,t);return i.texture.mapping=mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pl(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function cb(s,e,t){let i=new Float32Array(nr),n=new U(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function sm(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function rm(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function Nd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ub(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Qu||l===ed,u=l===ea||l===ta;if(c||u){let d=e.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Zl(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&n(f)?(t===null&&(t=new Zl(s)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function n(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function db(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function hb(s,e,t,i){let n={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);for(let m in h.morphAttributes){let _=h.morphAttributes[m];for(let p=0,g=_.length;p<g;p++)e.remove(_[p])}h.removeEventListener("dispose",a),delete n[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let m in h)e.update(h[m],s.ARRAY_BUFFER);let f=d.morphAttributes;for(let m in f){let _=f[m];for(let p=0,g=_.length;p<g;p++)e.update(_[p],s.ARRAY_BUFFER)}}function c(d){let h=[],f=d.index,m=d.attributes.position,_=0;if(f!==null){let v=f.array;_=f.version;for(let x=0,w=v.length;x<w;x+=3){let T=v[x+0],M=v[x+1],S=v[x+2];h.push(T,M,M,S,S,T)}}else if(m!==void 0){let v=m.array;_=m.version;for(let x=0,w=v.length/3-1;x<w;x+=3){let T=x+0,M=x+1,S=x+2;h.push(T,M,M,S,S,T)}}else return;let p=new(eg(h)?ql:Yl)(h,1);p.version=_;let g=r.get(d);g&&e.remove(g),r.set(d,p)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function fb(s,e,t){let i;function n(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){s.drawElements(i,f,r,h*a),t.update(f,i,1)}function c(h,f,m){m!==0&&(s.drawElementsInstanced(i,f,r,h*a,m),t.update(f,i,m))}function u(h,f,m){if(m===0)return;let _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<m;p++)this.render(h[p]/a,f[p]);else{_.multiDrawElementsWEBGL(i,f,0,r,h,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,i,1)}}function d(h,f,m,_){if(m===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)c(h[g]/a,f[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,h,0,_,0,m);let g=0;for(let v=0;v<m;v++)g+=f[v];for(let v=0;v<_.length;v++)t.update(g,i,_[v])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function pb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function mb(s,e,t){let i=new WeakMap,n=new gt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let b=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],x=0;f===!0&&(x=1),m===!0&&(x=2),_===!0&&(x=3);let w=o.attributes.position.count*x,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let M=new Float32Array(w*T*4*d),S=new Wl(M,w,T,d);S.type=Cn,S.needsUpdate=!0;let R=x*4;for(let y=0;y<d;y++){let C=p[y],L=g[y],P=v[y],O=w*T*4*y;for(let z=0;z<C.count;z++){let k=z*R;f===!0&&(n.fromBufferAttribute(C,z),M[O+k+0]=n.x,M[O+k+1]=n.y,M[O+k+2]=n.z,M[O+k+3]=0),m===!0&&(n.fromBufferAttribute(L,z),M[O+k+4]=n.x,M[O+k+5]=n.y,M[O+k+6]=n.z,M[O+k+7]=0),_===!0&&(n.fromBufferAttribute(P,z),M[O+k+8]=n.x,M[O+k+9]=n.y,M[O+k+10]=n.z,M[O+k+11]=P.itemSize===4?n.w:1)}}h={count:d,texture:S,size:new tt(w,T)},i.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function gb(s,e,t,i){let n=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(n.get(d)!==c&&(e.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return d}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Kl=class extends ti{constructor(e,t,i,n,r,a,o,l,c,u){if(u=u!==void 0?u:jr,u!==jr&&u!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===jr&&(i=ia),i===void 0&&u===no&&(i=mo),super(null,n,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:hi,this.minFilter=l!==void 0?l:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},rg=new ti,ag=new Kl(1,1);ag.compareFunction=Jm;var og=new Wl,lg=new sd,cg=new ao,am=[],om=[],lm=new Float32Array(16),cm=new Float32Array(9),um=new Float32Array(4);function fa(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=am[n];if(r===void 0&&(r=new Float32Array(n),am[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function qt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function $t(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function xc(s,e){let t=om[e];t===void 0&&(t=new Int32Array(e),om[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function _b(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function vb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2fv(this.addr,e),$t(t,e)}}function xb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;s.uniform3fv(this.addr,e),$t(t,e)}}function yb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4fv(this.addr,e),$t(t,e)}}function wb(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;um.set(i),s.uniformMatrix2fv(this.addr,!1,um),$t(t,i)}}function bb(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;cm.set(i),s.uniformMatrix3fv(this.addr,!1,cm),$t(t,i)}}function Sb(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;lm.set(i),s.uniformMatrix4fv(this.addr,!1,lm),$t(t,i)}}function Mb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Tb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2iv(this.addr,e),$t(t,e)}}function Ab(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3iv(this.addr,e),$t(t,e)}}function Eb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4iv(this.addr,e),$t(t,e)}}function Cb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Rb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2uiv(this.addr,e),$t(t,e)}}function Pb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3uiv(this.addr,e),$t(t,e)}}function Ib(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4uiv(this.addr,e),$t(t,e)}}function Lb(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r=this.type===s.SAMPLER_2D_SHADOW?ag:rg;t.setTexture2D(e||r,n)}function Db(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||lg,n)}function Ob(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||cg,n)}function Nb(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||og,n)}function Ub(s){switch(s){case 5126:return _b;case 35664:return vb;case 35665:return xb;case 35666:return yb;case 35674:return wb;case 35675:return bb;case 35676:return Sb;case 5124:case 35670:return Mb;case 35667:case 35671:return Tb;case 35668:case 35672:return Ab;case 35669:case 35673:return Eb;case 5125:return Cb;case 36294:return Rb;case 36295:return Pb;case 36296:return Ib;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return Nb}}function Fb(s,e){s.uniform1fv(this.addr,e)}function zb(s,e){let t=fa(e,this.size,2);s.uniform2fv(this.addr,t)}function kb(s,e){let t=fa(e,this.size,3);s.uniform3fv(this.addr,t)}function Bb(s,e){let t=fa(e,this.size,4);s.uniform4fv(this.addr,t)}function Hb(s,e){let t=fa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Vb(s,e){let t=fa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Gb(s,e){let t=fa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Wb(s,e){s.uniform1iv(this.addr,e)}function Xb(s,e){s.uniform2iv(this.addr,e)}function Yb(s,e){s.uniform3iv(this.addr,e)}function qb(s,e){s.uniform4iv(this.addr,e)}function $b(s,e){s.uniform1uiv(this.addr,e)}function Zb(s,e){s.uniform2uiv(this.addr,e)}function Kb(s,e){s.uniform3uiv(this.addr,e)}function jb(s,e){s.uniform4uiv(this.addr,e)}function Jb(s,e,t){let i=this.cache,n=e.length,r=xc(t,n);qt(i,r)||(s.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||rg,r[a])}function Qb(s,e,t){let i=this.cache,n=e.length,r=xc(t,n);qt(i,r)||(s.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||lg,r[a])}function eS(s,e,t){let i=this.cache,n=e.length,r=xc(t,n);qt(i,r)||(s.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||cg,r[a])}function tS(s,e,t){let i=this.cache,n=e.length,r=xc(t,n);qt(i,r)||(s.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||og,r[a])}function iS(s){switch(s){case 5126:return Fb;case 35664:return zb;case 35665:return kb;case 35666:return Bb;case 35674:return Hb;case 35675:return Vb;case 35676:return Gb;case 5124:case 35670:return Wb;case 35667:case 35671:return Xb;case 35668:case 35672:return Yb;case 35669:case 35673:return qb;case 5125:return $b;case 36294:return Zb;case 36295:return Kb;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return eS;case 36289:case 36303:case 36311:case 36292:return tS}}var od=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ub(t.type)}},ld=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iS(t.type)}},cd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},Xu=/(\w+)(\])?(\[|\.)?/g;function dm(s,e){s.seq.push(e),s.map[e.id]=e}function nS(s,e,t){let i=s.name,n=i.length;for(Xu.lastIndex=0;;){let r=Xu.exec(i),a=Xu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){dm(t,c===void 0?new od(o,s,e):new ld(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new cd(o),dm(t,d)),t=d}}}var Qr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=e.getActiveUniform(t,n),a=e.getUniformLocation(t,r.name);nS(r,a,this)}}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function hm(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var sS=37297,rS=0;function aS(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function oS(s){let e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(s),i;switch(e===t?i="":e===Hl&&t===Bl?i="LinearDisplayP3ToLinearSRGB":e===Bl&&t===Hl&&(i="LinearSRGBToLinearDisplayP3"),s){case Ht:case vc:return[i,"LinearTransferOETF"];case At:case Dd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function fm(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+aS(s.getShaderSource(e),a)}else return n}function lS(s,e){let t=oS(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cS(s,e){let t;switch(e){case hv:t="Linear";break;case fv:t="Reinhard";break;case pv:t="OptimizedCineon";break;case Id:t="ACESFilmic";break;case gv:t="AgX";break;case _v:t="Neutral";break;case mv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function uS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function dS(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hS(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ja(s){return s!==""}function pm(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ud(s){return s.replace(fS,mS)}var pS=new Map;function mS(s,e){let t=$e[e];if(t===void 0){let i=pS.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ud(t)}var gS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gm(s){return s.replace(gS,_S)}function _S(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function _m(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===km?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Pd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function xS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ea:case ta:e="ENVMAP_TYPE_CUBE";break;case mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function wS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bm:e="ENVMAP_BLENDING_MULTIPLY";break;case uv:e="ENVMAP_BLENDING_MIX";break;case dv:e="ENVMAP_BLENDING_ADD";break}return e}function bS(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function SS(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=vS(t),c=xS(t),u=yS(t),d=wS(t),h=bS(t),f=uS(t),m=dS(r),_=n.createProgram(),p,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ja).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ja).join(`
`),g.length>0&&(g+=`
`)):(p=[_m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),g=[_m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ts?"#define TONE_MAPPING":"",t.toneMapping!==Ts?$e.tonemapping_pars_fragment:"",t.toneMapping!==Ts?cS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,lS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ja).join(`
`)),a=ud(a),a=pm(a,t),a=mm(a,t),o=ud(o),o=pm(o,t),o=mm(o,t),a=gm(a),o=gm(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Dp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=v+p+a,w=v+g+o,T=hm(n,n.VERTEX_SHADER,x),M=hm(n,n.FRAGMENT_SHADER,w);n.attachShader(_,T),n.attachShader(_,M),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function S(C){if(s.debug.checkShaderErrors){let L=n.getProgramInfoLog(_).trim(),P=n.getShaderInfoLog(T).trim(),O=n.getShaderInfoLog(M).trim(),z=!0,k=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,T,M);else{let V=fm(n,T,"vertex"),N=fm(n,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+V+`
`+N)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(P===""||O==="")&&(k=!1);k&&(C.diagnostics={runnable:z,programLog:L,vertexShader:{log:P,prefix:p},fragmentShader:{log:O,prefix:g}})}n.deleteShader(T),n.deleteShader(M),R=new Qr(n,_),b=hS(n,_)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(_,sS)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=M,this}var MS=0,dd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new hd(e),t.set(e,i)),i}},hd=class{constructor(e){this.id=MS++,this.code=e,this.usedTimes=0}};function TS(s,e,t,i,n,r,a){let o=new Xl,l=new dd,c=new Set,u=[],d=n.logarithmicDepthBuffer,h=n.vertexTextures,f=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,y,C,L,P){let O=L.fog,z=P.geometry,k=b.isMeshStandardMaterial?L.environment:null,V=(b.isMeshStandardMaterial?t:e).get(b.envMap||k),N=V&&V.mapping===mc?V.image.height:null,K=m[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let I=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ae=I!==void 0?I.length:0,Ce=0;z.morphAttributes.position!==void 0&&(Ce=1),z.morphAttributes.normal!==void 0&&(Ce=2),z.morphAttributes.color!==void 0&&(Ce=3);let qe,$,ee,ue;if(K){let rt=An[K];qe=rt.vertexShader,$=rt.fragmentShader}else qe=b.vertexShader,$=b.fragmentShader,l.update(b),ee=l.getVertexShaderID(b),ue=l.getFragmentShaderID(b);let ie=s.getRenderTarget(),Le=P.isInstancedMesh===!0,Pe=P.isBatchedMesh===!0,G=!!b.map,Xe=!!b.matcap,we=!!V,Se=!!b.aoMap,_e=!!b.lightMap,Oe=!!b.bumpMap,Ie=!!b.normalMap,H=!!b.displacementMap,st=!!b.emissiveMap,D=!!b.metalnessMap,A=!!b.roughnessMap,q=b.anisotropy>0,J=b.clearcoat>0,Q=b.dispersion>0,te=b.iridescence>0,me=b.sheen>0,le=b.transmission>0,ne=q&&!!b.anisotropyMap,De=J&&!!b.clearcoatMap,se=J&&!!b.clearcoatNormalMap,be=J&&!!b.clearcoatRoughnessMap,je=te&&!!b.iridescenceMap,ge=te&&!!b.iridescenceThicknessMap,ve=me&&!!b.sheenColorMap,Ne=me&&!!b.sheenRoughnessMap,We=!!b.specularMap,mt=!!b.specularColorMap,Ue=!!b.specularIntensityMap,F=le&&!!b.transmissionMap,Z=le&&!!b.thicknessMap,j=!!b.gradientMap,oe=!!b.alphaMap,ce=b.alphaTest>0,Ve=!!b.alphaHash,lt=!!b.extensions,ft=Ts;b.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ft=s.toneMapping);let xt={shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:qe,fragmentShader:$,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:ue,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Pe,instancing:Le,instancingColor:Le&&P.instanceColor!==null,instancingMorph:Le&&P.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ht,alphaToCoverage:!!b.alphaToCoverage,map:G,matcap:Xe,envMap:we,envMapMode:we&&V.mapping,envMapCubeUVHeight:N,aoMap:Se,lightMap:_e,bumpMap:Oe,normalMap:Ie,displacementMap:h&&H,emissiveMap:st,normalMapObjectSpace:Ie&&b.normalMapType===Iv,normalMapTangentSpace:Ie&&b.normalMapType===jm,metalnessMap:D,roughnessMap:A,anisotropy:q,anisotropyMap:ne,clearcoat:J,clearcoatMap:De,clearcoatNormalMap:se,clearcoatRoughnessMap:be,dispersion:Q,iridescence:te,iridescenceMap:je,iridescenceThicknessMap:ge,sheen:me,sheenColorMap:ve,sheenRoughnessMap:Ne,specularMap:We,specularColorMap:mt,specularIntensityMap:Ue,transmission:le,transmissionMap:F,thicknessMap:Z,gradientMap:j,opaque:b.transparent===!1&&b.blending===Kr&&b.alphaToCoverage===!1,alphaMap:oe,alphaTest:ce,alphaHash:Ve,combine:b.combine,mapUv:G&&_(b.map.channel),aoMapUv:Se&&_(b.aoMap.channel),lightMapUv:_e&&_(b.lightMap.channel),bumpMapUv:Oe&&_(b.bumpMap.channel),normalMapUv:Ie&&_(b.normalMap.channel),displacementMapUv:H&&_(b.displacementMap.channel),emissiveMapUv:st&&_(b.emissiveMap.channel),metalnessMapUv:D&&_(b.metalnessMap.channel),roughnessMapUv:A&&_(b.roughnessMap.channel),anisotropyMapUv:ne&&_(b.anisotropyMap.channel),clearcoatMapUv:De&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(b.sheenRoughnessMap.channel),specularMapUv:We&&_(b.specularMap.channel),specularColorMapUv:mt&&_(b.specularColorMap.channel),specularIntensityMapUv:Ue&&_(b.specularIntensityMap.channel),transmissionMapUv:F&&_(b.transmissionMap.channel),thicknessMapUv:Z&&_(b.thicknessMap.channel),alphaMapUv:oe&&_(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ie||q),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(G||oe),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ce,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ft,useLegacyLights:s._useLegacyLights,decodeVideoTexture:G&&b.map.isVideoTexture===!0&&dt.getTransfer(b.map.colorSpace)===St,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Li,flipSided:b.side===Oi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:lt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:lt&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function g(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)y.push(C),y.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(v(y,b),x(y,b),y.push(s.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function v(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function x(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),b.push(o.mask)}function w(b){let y=m[b.type],C;if(y){let L=An[y];C=gx.clone(L.uniforms)}else C=b.uniforms;return C}function T(b,y){let C;for(let L=0,P=u.length;L<P;L++){let O=u[L];if(O.cacheKey===y){C=O,++C.usedTimes;break}}return C===void 0&&(C=new SS(s,y,b,r),u.push(C)),C}function M(b){if(--b.usedTimes===0){let y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function S(b){l.remove(b)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:w,acquireProgram:T,releaseProgram:M,releaseShaderCache:S,programs:u,dispose:R}}function AS(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function i(r,a,o){s.get(r)[a]=o}function n(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function ES(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function xm(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(d,h,f,m,_,p){let g=s[e];return g===void 0?(g={id:d.id,object:d,geometry:h,material:f,groupOrder:m,renderOrder:d.renderOrder,z:_,group:p},s[e]=g):(g.id=d.id,g.object=d,g.geometry=h,g.material=f,g.groupOrder=m,g.renderOrder=d.renderOrder,g.z=_,g.group=p),e++,g}function o(d,h,f,m,_,p){let g=a(d,h,f,m,_,p);f.transmission>0?i.push(g):f.transparent===!0?n.push(g):t.push(g)}function l(d,h,f,m,_,p){let g=a(d,h,f,m,_,p);f.transmission>0?i.unshift(g):f.transparent===!0?n.unshift(g):t.unshift(g)}function c(d,h){t.length>1&&t.sort(d||ES),i.length>1&&i.sort(h||vm),n.length>1&&n.sort(h||vm)}function u(){for(let d=e,h=s.length;d<h;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:u,sort:c}}function CS(){let s=new WeakMap;function e(i,n){let r=s.get(i),a;return r===void 0?(a=new xm,s.set(i,[a])):n>=r.length?(a=new xm,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function RS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ze};break;case"SpotLight":t={position:new U,direction:new U,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function PS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var IS=0;function LS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function DS(s){let e=new RS,t=PS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let n=new U,r=new Ge,a=new Ge;function o(c,u){let d=0,h=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,_=0,p=0,g=0,v=0,x=0,w=0,T=0,M=0,S=0,R=0;c.sort(LS);let b=u===!0?Math.PI:1;for(let C=0,L=c.length;C<L;C++){let P=c[C],O=P.color,z=P.intensity,k=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*z*b,h+=O.g*z*b,f+=O.b*z*b;else if(P.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(P.sh.coefficients[N],z);R++}else if(P.isDirectionalLight){let N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){let K=P.shadow,I=t.get(P);I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,i.directionalShadow[m]=I,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=P.shadow.matrix,x++}i.directional[m]=N,m++}else if(P.isSpotLight){let N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(O).multiplyScalar(z*b),N.distance=k,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,i.spot[p]=N;let K=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,K.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[p]=K.matrix,P.castShadow){let I=t.get(P);I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,i.spotShadow[p]=I,i.spotShadowMap[p]=V,T++}p++}else if(P.isRectAreaLight){let N=e.get(P);N.color.copy(O).multiplyScalar(z),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=N,g++}else if(P.isPointLight){let N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*b),N.distance=P.distance,N.decay=P.decay,P.castShadow){let K=P.shadow,I=t.get(P);I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,I.shadowCameraNear=K.camera.near,I.shadowCameraFar=K.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=P.shadow.matrix,w++}i.point[_]=N,_++}else if(P.isHemisphereLight){let N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(z*b),N.groundColor.copy(P.groundColor).multiplyScalar(z*b),i.hemi[v]=N,v++}}g>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;let y=i.hash;(y.directionalLength!==m||y.pointLength!==_||y.spotLength!==p||y.rectAreaLength!==g||y.hemiLength!==v||y.numDirectionalShadows!==x||y.numPointShadows!==w||y.numSpotShadows!==T||y.numSpotMaps!==M||y.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=p,i.rectArea.length=g,i.point.length=_,i.hemi.length=v,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=T+M-S,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=R,y.directionalLength=m,y.pointLength=_,y.spotLength=p,y.rectAreaLength=g,y.hemiLength=v,y.numDirectionalShadows=x,y.numPointShadows=w,y.numSpotShadows=T,y.numSpotMaps=M,y.numLightProbes=R,i.version=IS++)}function l(c,u){let d=0,h=0,f=0,m=0,_=0,p=u.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){let x=c[g];if(x.isDirectionalLight){let w=i.directional[d];w.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(p),d++}else if(x.isSpotLight){let w=i.spot[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(p),f++}else if(x.isRectAreaLight){let w=i.rectArea[m];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){let w=i.point[h];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){let w=i.hemi[_];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function ym(s){let e=new DS(s),t=[],i=[];function n(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(u){e.setup(t,u)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function OS(s){let e=new WeakMap;function t(n,r=0){let a=e.get(n),o;return a===void 0?(o=new ym(s),e.set(n,[o])):r>=a.length?(o=new ym(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var fd=class extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pd=class extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},NS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,US=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function FS(s,e,t){let i=new oo,n=new tt,r=new tt,a=new gt,o=new fd({depthPacking:Pv}),l=new pd,c={},u=t.maxTextureSize,d={[Pn]:Oi,[Oi]:Pn,[Li]:Li},h=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:NS,fragmentShader:US}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ni;m.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new fi(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=km;let g=this.type;this.render=function(M,S,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;let b=s.getRenderTarget(),y=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Ms),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let P=g!==Zn&&this.type===Zn,O=g===Zn&&this.type!==Zn;for(let z=0,k=M.length;z<k;z++){let V=M[z],N=V.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;n.copy(N.mapSize);let K=N.getFrameExtents();if(n.multiply(K),r.copy(N.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/K.x),n.x=r.x*K.x,N.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/K.y),n.y=r.y*K.y,N.mapSize.y=r.y)),N.map===null||P===!0||O===!0){let ae=this.type!==Zn?{minFilter:hi,magFilter:hi}:{};N.map!==null&&N.map.dispose(),N.map=new Qn(n.x,n.y,ae),N.map.texture.name=V.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();let I=N.getViewportCount();for(let ae=0;ae<I;ae++){let Ce=N.getViewport(ae);a.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),L.viewport(a),N.updateMatrices(V,ae),i=N.getFrustum(),w(S,R,N.camera,V,this.type)}N.isPointLightShadow!==!0&&this.type===Zn&&v(N,R),N.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(b,y,C)};function v(M,S){let R=e.update(_);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Qn(n.x,n.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(S,null,R,h,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(S,null,R,f,_,null)}function x(M,S,R,b){let y=null,C=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)y=C;else if(y=R.isPointLight===!0?l:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let L=y.uuid,P=S.uuid,O=c[L];O===void 0&&(O={},c[L]=O);let z=O[P];z===void 0&&(z=y.clone(),O[P]=z,S.addEventListener("dispose",T)),y=z}if(y.visible=S.visible,y.wireframe=S.wireframe,b===Zn?y.side=S.shadowSide!==null?S.shadowSide:S.side:y.side=S.shadowSide!==null?S.shadowSide:d[S.side],y.alphaMap=S.alphaMap,y.alphaTest=S.alphaTest,y.map=S.map,y.clipShadows=S.clipShadows,y.clippingPlanes=S.clippingPlanes,y.clipIntersection=S.clipIntersection,y.displacementMap=S.displacementMap,y.displacementScale=S.displacementScale,y.displacementBias=S.displacementBias,y.wireframeLinewidth=S.wireframeLinewidth,y.linewidth=S.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let L=s.properties.get(y);L.light=R}return y}function w(M,S,R,b,y){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===Zn)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);let P=e.update(M),O=M.material;if(Array.isArray(O)){let z=P.groups;for(let k=0,V=z.length;k<V;k++){let N=z[k],K=O[N.materialIndex];if(K&&K.visible){let I=x(M,K,b,y);M.onBeforeShadow(s,M,S,R,P,I,N),s.renderBufferDirect(R,null,P,I,M,N),M.onAfterShadow(s,M,S,R,P,I,N)}}}else if(O.visible){let z=x(M,O,b,y);M.onBeforeShadow(s,M,S,R,P,z,null),s.renderBufferDirect(R,null,P,z,M,null),M.onAfterShadow(s,M,S,R,P,z,null)}}let L=M.children;for(let P=0,O=L.length;P<O;P++)w(L[P],S,R,b,y)}function T(M){M.target.removeEventListener("dispose",T);for(let R in c){let b=c[R],y=M.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}function zS(s){function e(){let F=!1,Z=new gt,j=null,oe=new gt(0,0,0,0);return{setMask:function(ce){j!==ce&&!F&&(s.colorMask(ce,ce,ce,ce),j=ce)},setLocked:function(ce){F=ce},setClear:function(ce,Ve,lt,ft,xt){xt===!0&&(ce*=ft,Ve*=ft,lt*=ft),Z.set(ce,Ve,lt,ft),oe.equals(Z)===!1&&(s.clearColor(ce,Ve,lt,ft),oe.copy(Z))},reset:function(){F=!1,j=null,oe.set(-1,0,0,0)}}}function t(){let F=!1,Z=null,j=null,oe=null;return{setTest:function(ce){ce?ue(s.DEPTH_TEST):ie(s.DEPTH_TEST)},setMask:function(ce){Z!==ce&&!F&&(s.depthMask(ce),Z=ce)},setFunc:function(ce){if(j!==ce){switch(ce){case nv:s.depthFunc(s.NEVER);break;case sv:s.depthFunc(s.ALWAYS);break;case rv:s.depthFunc(s.LESS);break;case zl:s.depthFunc(s.LEQUAL);break;case av:s.depthFunc(s.EQUAL);break;case ov:s.depthFunc(s.GEQUAL);break;case lv:s.depthFunc(s.GREATER);break;case cv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=ce}},setLocked:function(ce){F=ce},setClear:function(ce){oe!==ce&&(s.clearDepth(ce),oe=ce)},reset:function(){F=!1,Z=null,j=null,oe=null}}}function i(){let F=!1,Z=null,j=null,oe=null,ce=null,Ve=null,lt=null,ft=null,xt=null;return{setTest:function(rt){F||(rt?ue(s.STENCIL_TEST):ie(s.STENCIL_TEST))},setMask:function(rt){Z!==rt&&!F&&(s.stencilMask(rt),Z=rt)},setFunc:function(rt,Re,xe){(j!==rt||oe!==Re||ce!==xe)&&(s.stencilFunc(rt,Re,xe),j=rt,oe=Re,ce=xe)},setOp:function(rt,Re,xe){(Ve!==rt||lt!==Re||ft!==xe)&&(s.stencilOp(rt,Re,xe),Ve=rt,lt=Re,ft=xe)},setLocked:function(rt){F=rt},setClear:function(rt){xt!==rt&&(s.clearStencil(rt),xt=rt)},reset:function(){F=!1,Z=null,j=null,oe=null,ce=null,Ve=null,lt=null,ft=null,xt=null}}}let n=new e,r=new t,a=new i,o=new WeakMap,l=new WeakMap,c={},u={},d=new WeakMap,h=[],f=null,m=!1,_=null,p=null,g=null,v=null,x=null,w=null,T=null,M=new ze(0,0,0),S=0,R=!1,b=null,y=null,C=null,L=null,P=null,O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,k=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=k>=1):V.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=k>=2);let N=null,K={},I=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),Ce=new gt().fromArray(I),qe=new gt().fromArray(ae);function $(F,Z,j,oe){let ce=new Uint8Array(4),Ve=s.createTexture();s.bindTexture(F,Ve),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let lt=0;lt<j;lt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(Z,0,s.RGBA,1,1,oe,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(Z+lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return Ve}let ee={};ee[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),n.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ue(s.DEPTH_TEST),r.setFunc(zl),Oe(!1),Ie(Jf),ue(s.CULL_FACE),Se(Ms);function ue(F){c[F]!==!0&&(s.enable(F),c[F]=!0)}function ie(F){c[F]!==!1&&(s.disable(F),c[F]=!1)}function Le(F,Z){return u[F]!==Z?(s.bindFramebuffer(F,Z),u[F]=Z,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Z),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Z),!0):!1}function Pe(F,Z){let j=h,oe=!1;if(F){j=d.get(Z),j===void 0&&(j=[],d.set(Z,j));let ce=F.textures;if(j.length!==ce.length||j[0]!==s.COLOR_ATTACHMENT0){for(let Ve=0,lt=ce.length;Ve<lt;Ve++)j[Ve]=s.COLOR_ATTACHMENT0+Ve;j.length=ce.length,oe=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,oe=!0);oe&&s.drawBuffers(j)}function G(F){return f!==F?(s.useProgram(F),f=F,!0):!1}let Xe={[ir]:s.FUNC_ADD,[B_]:s.FUNC_SUBTRACT,[H_]:s.FUNC_REVERSE_SUBTRACT};Xe[V_]=s.MIN,Xe[G_]=s.MAX;let we={[W_]:s.ZERO,[X_]:s.ONE,[Y_]:s.SRC_COLOR,[ju]:s.SRC_ALPHA,[J_]:s.SRC_ALPHA_SATURATE,[K_]:s.DST_COLOR,[$_]:s.DST_ALPHA,[q_]:s.ONE_MINUS_SRC_COLOR,[Ju]:s.ONE_MINUS_SRC_ALPHA,[j_]:s.ONE_MINUS_DST_COLOR,[Z_]:s.ONE_MINUS_DST_ALPHA,[Q_]:s.CONSTANT_COLOR,[ev]:s.ONE_MINUS_CONSTANT_COLOR,[tv]:s.CONSTANT_ALPHA,[iv]:s.ONE_MINUS_CONSTANT_ALPHA};function Se(F,Z,j,oe,ce,Ve,lt,ft,xt,rt){if(F===Ms){m===!0&&(ie(s.BLEND),m=!1);return}if(m===!1&&(ue(s.BLEND),m=!0),F!==k_){if(F!==_||rt!==R){if((p!==ir||x!==ir)&&(s.blendEquation(s.FUNC_ADD),p=ir,x=ir),rt)switch(F){case Kr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qf:s.blendFunc(s.ONE,s.ONE);break;case ep:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Kr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ep:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}g=null,v=null,w=null,T=null,M.set(0,0,0),S=0,_=F,R=rt}return}ce=ce||Z,Ve=Ve||j,lt=lt||oe,(Z!==p||ce!==x)&&(s.blendEquationSeparate(Xe[Z],Xe[ce]),p=Z,x=ce),(j!==g||oe!==v||Ve!==w||lt!==T)&&(s.blendFuncSeparate(we[j],we[oe],we[Ve],we[lt]),g=j,v=oe,w=Ve,T=lt),(ft.equals(M)===!1||xt!==S)&&(s.blendColor(ft.r,ft.g,ft.b,xt),M.copy(ft),S=xt),_=F,R=!1}function _e(F,Z){F.side===Li?ie(s.CULL_FACE):ue(s.CULL_FACE);let j=F.side===Oi;Z&&(j=!j),Oe(j),F.blending===Kr&&F.transparent===!1?Se(Ms):Se(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),n.setMask(F.colorWrite);let oe=F.stencilWrite;a.setTest(oe),oe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),st(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(F){b!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),b=F)}function Ie(F){F!==F_?(ue(s.CULL_FACE),F!==y&&(F===Jf?s.cullFace(s.BACK):F===z_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ie(s.CULL_FACE),y=F}function H(F){F!==C&&(z&&s.lineWidth(F),C=F)}function st(F,Z,j){F?(ue(s.POLYGON_OFFSET_FILL),(L!==Z||P!==j)&&(s.polygonOffset(Z,j),L=Z,P=j)):ie(s.POLYGON_OFFSET_FILL)}function D(F){F?ue(s.SCISSOR_TEST):ie(s.SCISSOR_TEST)}function A(F){F===void 0&&(F=s.TEXTURE0+O-1),N!==F&&(s.activeTexture(F),N=F)}function q(F,Z,j){j===void 0&&(N===null?j=s.TEXTURE0+O-1:j=N);let oe=K[j];oe===void 0&&(oe={type:void 0,texture:void 0},K[j]=oe),(oe.type!==F||oe.texture!==Z)&&(N!==j&&(s.activeTexture(j),N=j),s.bindTexture(F,Z||ee[F]),oe.type=F,oe.texture=Z)}function J(){let F=K[N];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function je(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(F){Ce.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Ce.copy(F))}function Ne(F){qe.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),qe.copy(F))}function We(F,Z){let j=l.get(Z);j===void 0&&(j=new WeakMap,l.set(Z,j));let oe=j.get(F);oe===void 0&&(oe=s.getUniformBlockIndex(Z,F.name),j.set(F,oe))}function mt(F,Z){let oe=l.get(Z).get(F);o.get(Z)!==oe&&(s.uniformBlockBinding(Z,oe,F.__bindingPointIndex),o.set(Z,oe))}function Ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},N=null,K={},u={},d=new WeakMap,h=[],f=null,m=!1,_=null,p=null,g=null,v=null,x=null,w=null,T=null,M=new ze(0,0,0),S=0,R=!1,b=null,y=null,C=null,L=null,P=null,Ce.set(0,0,s.canvas.width,s.canvas.height),qe.set(0,0,s.canvas.width,s.canvas.height),n.reset(),r.reset(),a.reset()}return{buffers:{color:n,depth:r,stencil:a},enable:ue,disable:ie,bindFramebuffer:Le,drawBuffers:Pe,useProgram:G,setBlending:Se,setMaterial:_e,setFlipSided:Oe,setCullFace:Ie,setLineWidth:H,setPolygonOffset:st,setScissorTest:D,activeTexture:A,bindTexture:q,unbindTexture:J,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:je,texImage3D:ge,updateUBOMapping:We,uniformBlockBinding:mt,texStorage2D:se,texStorage3D:be,texSubImage2D:me,texSubImage3D:le,compressedTexSubImage2D:ne,compressedTexSubImage3D:De,scissor:ve,viewport:Ne,reset:Ue}}function kS(s,e,t,i,n,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,A){return f?new OffscreenCanvas(D,A):so("canvas")}function _(D,A,q){let J=1,Q=st(D);if((Q.width>q||Q.height>q)&&(J=q/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let te=Math.floor(J*Q.width),me=Math.floor(J*Q.height);d===void 0&&(d=m(te,me));let le=A?m(te,me):d;return le.width=te,le.height=me,le.getContext("2d").drawImage(D,0,0,te,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+te+"x"+me+")."),le}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),D;return D}function p(D){return D.generateMipmaps&&D.minFilter!==hi&&D.minFilter!==Di}function g(D){s.generateMipmap(D)}function v(D,A,q,J,Q=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let te=A;if(A===s.RED&&(q===s.FLOAT&&(te=s.R32F),q===s.HALF_FLOAT&&(te=s.R16F),q===s.UNSIGNED_BYTE&&(te=s.R8)),A===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(te=s.R8UI),q===s.UNSIGNED_SHORT&&(te=s.R16UI),q===s.UNSIGNED_INT&&(te=s.R32UI),q===s.BYTE&&(te=s.R8I),q===s.SHORT&&(te=s.R16I),q===s.INT&&(te=s.R32I)),A===s.RG&&(q===s.FLOAT&&(te=s.RG32F),q===s.HALF_FLOAT&&(te=s.RG16F),q===s.UNSIGNED_BYTE&&(te=s.RG8)),A===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(te=s.RG8UI),q===s.UNSIGNED_SHORT&&(te=s.RG16UI),q===s.UNSIGNED_INT&&(te=s.RG32UI),q===s.BYTE&&(te=s.RG8I),q===s.SHORT&&(te=s.RG16I),q===s.INT&&(te=s.RG32I)),A===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),A===s.RGBA){let me=Q?kl:dt.getTransfer(J);q===s.FLOAT&&(te=s.RGBA32F),q===s.HALF_FLOAT&&(te=s.RGBA16F),q===s.UNSIGNED_BYTE&&(te=me===St?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(D,A){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==hi&&D.minFilter!==Di?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function w(D){let A=D.target;A.removeEventListener("dispose",w),M(A),A.isVideoTexture&&u.delete(A)}function T(D){let A=D.target;A.removeEventListener("dispose",T),R(A)}function M(D){let A=i.get(D);if(A.__webglInit===void 0)return;let q=D.source,J=h.get(q);if(J){let Q=J[A.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(D),Object.keys(J).length===0&&h.delete(q)}i.remove(D)}function S(D){let A=i.get(D);s.deleteTexture(A.__webglTexture);let q=D.source,J=h.get(q);delete J[A.__cacheKey],a.memory.textures--}function R(D){let A=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(A.__webglFramebuffer[J]))for(let Q=0;Q<A.__webglFramebuffer[J].length;Q++)s.deleteFramebuffer(A.__webglFramebuffer[J][Q]);else s.deleteFramebuffer(A.__webglFramebuffer[J]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[J])}else{if(Array.isArray(A.__webglFramebuffer))for(let J=0;J<A.__webglFramebuffer.length;J++)s.deleteFramebuffer(A.__webglFramebuffer[J]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let J=0;J<A.__webglColorRenderbuffer.length;J++)A.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[J]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let q=D.textures;for(let J=0,Q=q.length;J<Q;J++){let te=i.get(q[J]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(q[J])}i.remove(D)}let b=0;function y(){b=0}function C(){let D=b;return D>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+n.maxTextures),b+=1,D}function L(D){let A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function P(D,A){let q=i.get(D);if(D.isVideoTexture&&Ie(D),D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){let J=D.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(q,D,A);return}}t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+A)}function O(D,A){let q=i.get(D);if(D.version>0&&q.__version!==D.version){Ce(q,D,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+A)}function z(D,A){let q=i.get(D);if(D.version>0&&q.__version!==D.version){Ce(q,D,A);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+A)}function k(D,A){let q=i.get(D);if(D.version>0&&q.__version!==D.version){qe(q,D,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+A)}let V={[In]:s.REPEAT,[jn]:s.CLAMP_TO_EDGE,[io]:s.MIRRORED_REPEAT},N={[hi]:s.NEAREST,[Ld]:s.NEAREST_MIPMAP_NEAREST,[qr]:s.NEAREST_MIPMAP_LINEAR,[Di]:s.LINEAR,[Ja]:s.LINEAR_MIPMAP_NEAREST,[En]:s.LINEAR_MIPMAP_LINEAR},K={[Lv]:s.NEVER,[zv]:s.ALWAYS,[Dv]:s.LESS,[Jm]:s.LEQUAL,[Ov]:s.EQUAL,[Fv]:s.GEQUAL,[Nv]:s.GREATER,[Uv]:s.NOTEQUAL};function I(D,A){if(A.type===Cn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Di||A.magFilter===Ja||A.magFilter===qr||A.magFilter===En||A.minFilter===Di||A.minFilter===Ja||A.minFilter===qr||A.minFilter===En)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,V[A.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,V[A.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,V[A.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,N[A.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,N[A.minFilter]),A.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,K[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===hi||A.minFilter!==qr&&A.minFilter!==En||A.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,n.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function ae(D,A){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",w));let J=A.source,Q=h.get(J);Q===void 0&&(Q={},h.set(J,Q));let te=L(A);if(te!==D.__cacheKey){Q[te]===void 0&&(Q[te]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,q=!0),Q[te].usedTimes++;let me=Q[D.__cacheKey];me!==void 0&&(Q[D.__cacheKey].usedTimes--,me.usedTimes===0&&S(A)),D.__cacheKey=te,D.__webglTexture=Q[te].texture}return q}function Ce(D,A,q){let J=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(J=s.TEXTURE_3D);let Q=ae(D,A),te=A.source;t.bindTexture(J,D.__webglTexture,s.TEXTURE0+q);let me=i.get(te);if(te.version!==me.__version||Q===!0){t.activeTexture(s.TEXTURE0+q);let le=dt.getPrimaries(dt.workingColorSpace),ne=A.colorSpace===bs?null:dt.getPrimaries(A.colorSpace),De=A.colorSpace===bs||le===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let se=_(A.image,!1,n.maxTextureSize);se=H(A,se);let be=r.convert(A.format,A.colorSpace),je=r.convert(A.type),ge=v(A.internalFormat,be,je,A.colorSpace,A.isVideoTexture);I(J,A);let ve,Ne=A.mipmaps,We=A.isVideoTexture!==!0,mt=me.__version===void 0||Q===!0,Ue=te.dataReady,F=x(A,se);if(A.isDepthTexture)ge=s.DEPTH_COMPONENT16,A.type===Cn?ge=s.DEPTH_COMPONENT32F:A.type===ia?ge=s.DEPTH_COMPONENT24:A.type===mo&&(ge=s.DEPTH24_STENCIL8),mt&&(We?t.texStorage2D(s.TEXTURE_2D,1,ge,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,ge,se.width,se.height,0,be,je,null));else if(A.isDataTexture)if(Ne.length>0){We&&mt&&t.texStorage2D(s.TEXTURE_2D,F,ge,Ne[0].width,Ne[0].height);for(let Z=0,j=Ne.length;Z<j;Z++)ve=Ne[Z],We?Ue&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,ve.width,ve.height,be,je,ve.data):t.texImage2D(s.TEXTURE_2D,Z,ge,ve.width,ve.height,0,be,je,ve.data);A.generateMipmaps=!1}else We?(mt&&t.texStorage2D(s.TEXTURE_2D,F,ge,se.width,se.height),Ue&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,be,je,se.data)):t.texImage2D(s.TEXTURE_2D,0,ge,se.width,se.height,0,be,je,se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){We&&mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,F,ge,Ne[0].width,Ne[0].height,se.depth);for(let Z=0,j=Ne.length;Z<j;Z++)ve=Ne[Z],A.format!==xn?be!==null?We?Ue&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,se.depth,be,ve.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,ge,ve.width,ve.height,se.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Ue&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,se.depth,be,je,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Z,ge,ve.width,ve.height,se.depth,0,be,je,ve.data)}else{We&&mt&&t.texStorage2D(s.TEXTURE_2D,F,ge,Ne[0].width,Ne[0].height);for(let Z=0,j=Ne.length;Z<j;Z++)ve=Ne[Z],A.format!==xn?be!==null?We?Ue&&t.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,ve.width,ve.height,be,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,Z,ge,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Ue&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,ve.width,ve.height,be,je,ve.data):t.texImage2D(s.TEXTURE_2D,Z,ge,ve.width,ve.height,0,be,je,ve.data)}else if(A.isDataArrayTexture)We?(mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,F,ge,se.width,se.height,se.depth),Ue&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,be,je,se.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ge,se.width,se.height,se.depth,0,be,je,se.data);else if(A.isData3DTexture)We?(mt&&t.texStorage3D(s.TEXTURE_3D,F,ge,se.width,se.height,se.depth),Ue&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,be,je,se.data)):t.texImage3D(s.TEXTURE_3D,0,ge,se.width,se.height,se.depth,0,be,je,se.data);else if(A.isFramebufferTexture){if(mt)if(We)t.texStorage2D(s.TEXTURE_2D,F,ge,se.width,se.height);else{let Z=se.width,j=se.height;for(let oe=0;oe<F;oe++)t.texImage2D(s.TEXTURE_2D,oe,ge,Z,j,0,be,je,null),Z>>=1,j>>=1}}else if(Ne.length>0){if(We&&mt){let Z=st(Ne[0]);t.texStorage2D(s.TEXTURE_2D,F,ge,Z.width,Z.height)}for(let Z=0,j=Ne.length;Z<j;Z++)ve=Ne[Z],We?Ue&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,be,je,ve):t.texImage2D(s.TEXTURE_2D,Z,ge,be,je,ve);A.generateMipmaps=!1}else if(We){if(mt){let Z=st(se);t.texStorage2D(s.TEXTURE_2D,F,ge,Z.width,Z.height)}Ue&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,be,je,se)}else t.texImage2D(s.TEXTURE_2D,0,ge,be,je,se);p(A)&&g(J),me.__version=te.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function qe(D,A,q){if(A.image.length!==6)return;let J=ae(D,A),Q=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+q);let te=i.get(Q);if(Q.version!==te.__version||J===!0){t.activeTexture(s.TEXTURE0+q);let me=dt.getPrimaries(dt.workingColorSpace),le=A.colorSpace===bs?null:dt.getPrimaries(A.colorSpace),ne=A.colorSpace===bs||me===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let De=A.isCompressedTexture||A.image[0].isCompressedTexture,se=A.image[0]&&A.image[0].isDataTexture,be=[];for(let j=0;j<6;j++)!De&&!se?be[j]=_(A.image[j],!0,n.maxCubemapSize):be[j]=se?A.image[j].image:A.image[j],be[j]=H(A,be[j]);let je=be[0],ge=r.convert(A.format,A.colorSpace),ve=r.convert(A.type),Ne=v(A.internalFormat,ge,ve,A.colorSpace),We=A.isVideoTexture!==!0,mt=te.__version===void 0||J===!0,Ue=Q.dataReady,F=x(A,je);I(s.TEXTURE_CUBE_MAP,A);let Z;if(De){We&&mt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,F,Ne,je.width,je.height);for(let j=0;j<6;j++){Z=be[j].mipmaps;for(let oe=0;oe<Z.length;oe++){let ce=Z[oe];A.format!==xn?ge!==null?We?Ue&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,0,0,ce.width,ce.height,ge,ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,Ne,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,0,0,ce.width,ce.height,ge,ve,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,Ne,ce.width,ce.height,0,ge,ve,ce.data)}}}else{if(Z=A.mipmaps,We&&mt){Z.length>0&&F++;let j=st(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,F,Ne,j.width,j.height)}for(let j=0;j<6;j++)if(se){We?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,be[j].width,be[j].height,ge,ve,be[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ne,be[j].width,be[j].height,0,ge,ve,be[j].data);for(let oe=0;oe<Z.length;oe++){let Ve=Z[oe].image[j].image;We?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,0,0,Ve.width,Ve.height,ge,ve,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,Ne,Ve.width,Ve.height,0,ge,ve,Ve.data)}}else{We?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ge,ve,be[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ne,ge,ve,be[j]);for(let oe=0;oe<Z.length;oe++){let ce=Z[oe];We?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,0,0,ge,ve,ce.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,Ne,ge,ve,ce.image[j])}}}p(A)&&g(s.TEXTURE_CUBE_MAP),te.__version=Q.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function $(D,A,q,J,Q,te){let me=r.convert(q.format,q.colorSpace),le=r.convert(q.type),ne=v(q.internalFormat,me,le,q.colorSpace);if(!i.get(A).__hasExternalTextures){let se=Math.max(1,A.width>>te),be=Math.max(1,A.height>>te);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,ne,se,be,A.depth,0,me,le,null):t.texImage2D(Q,te,ne,se,be,0,me,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Oe(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Q,i.get(q).__webglTexture,0,_e(A)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Q,i.get(q).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(D,A,q){if(s.bindRenderbuffer(s.RENDERBUFFER,D),A.depthBuffer&&!A.stencilBuffer){let J=s.DEPTH_COMPONENT24;if(q||Oe(A)){let Q=A.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Cn?J=s.DEPTH_COMPONENT32F:Q.type===ia&&(J=s.DEPTH_COMPONENT24));let te=_e(A);Oe(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,J,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,J,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,J,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,D)}else if(A.depthBuffer&&A.stencilBuffer){let J=_e(A);q&&Oe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,A.width,A.height):Oe(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,D)}else{let J=A.textures;for(let Q=0;Q<J.length;Q++){let te=J[Q],me=r.convert(te.format,te.colorSpace),le=r.convert(te.type),ne=v(te.internalFormat,me,le,te.colorSpace),De=_e(A);q&&Oe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,De,ne,A.width,A.height):Oe(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,ne,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ne,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ue(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),P(A.depthTexture,0);let J=i.get(A.depthTexture).__webglTexture,Q=_e(A);if(A.depthTexture.format===jr)Oe(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(A.depthTexture.format===no)Oe(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ie(D){let A=i.get(D),q=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ue(A.__webglFramebuffer,D)}else if(q){A.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[J]),A.__webglDepthbuffer[J]=s.createRenderbuffer(),ee(A.__webglDepthbuffer[J],D,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),ee(A.__webglDepthbuffer,D,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(D,A,q){let J=i.get(D);A!==void 0&&$(J.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&ie(D)}function Pe(D){let A=D.texture,q=i.get(D),J=i.get(A);D.addEventListener("dispose",T);let Q=D.textures,te=D.isWebGLCubeRenderTarget===!0,me=Q.length>1;if(me||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=A.version,a.memory.textures++),te){q.__webglFramebuffer=[];for(let le=0;le<6;le++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[le]=[];for(let ne=0;ne<A.mipmaps.length;ne++)q.__webglFramebuffer[le][ne]=s.createFramebuffer()}else q.__webglFramebuffer[le]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let le=0;le<A.mipmaps.length;le++)q.__webglFramebuffer[le]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(me)for(let le=0,ne=Q.length;le<ne;le++){let De=i.get(Q[le]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),a.memory.textures++)}if(D.samples>0&&Oe(D)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){let ne=Q[le];q.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[le]);let De=r.convert(ne.format,ne.colorSpace),se=r.convert(ne.type),be=v(ne.internalFormat,De,se,ne.colorSpace,D.isXRRenderTarget===!0),je=_e(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,je,be,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,q.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),ee(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),I(s.TEXTURE_CUBE_MAP,A);for(let le=0;le<6;le++)if(A.mipmaps&&A.mipmaps.length>0)for(let ne=0;ne<A.mipmaps.length;ne++)$(q.__webglFramebuffer[le][ne],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,ne);else $(q.__webglFramebuffer[le],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(A)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let le=0,ne=Q.length;le<ne;le++){let De=Q[le],se=i.get(De);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),I(s.TEXTURE_2D,De),$(q.__webglFramebuffer,D,De,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,0),p(De)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(le=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,J.__webglTexture),I(le,A),A.mipmaps&&A.mipmaps.length>0)for(let ne=0;ne<A.mipmaps.length;ne++)$(q.__webglFramebuffer[ne],D,A,s.COLOR_ATTACHMENT0,le,ne);else $(q.__webglFramebuffer,D,A,s.COLOR_ATTACHMENT0,le,0);p(A)&&g(le),t.unbindTexture()}D.depthBuffer&&ie(D)}function G(D){let A=D.textures;for(let q=0,J=A.length;q<J;q++){let Q=A[q];if(p(Q)){let te=D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,me=i.get(Q).__webglTexture;t.bindTexture(te,me),g(te),t.unbindTexture()}}}let Xe=[],we=[];function Se(D){if(D.samples>0){if(Oe(D)===!1){let A=D.textures,q=D.width,J=D.height,Q=s.COLOR_BUFFER_BIT,te=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=i.get(D),le=A.length>1;if(le)for(let ne=0;ne<A.length;ne++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ne=0;ne<A.length;ne++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[ne]);let De=i.get(A[ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,De,0)}s.blitFramebuffer(0,0,q,J,0,0,q,J,Q,s.NEAREST),l===!0&&(Xe.length=0,we.length=0,Xe.push(s.COLOR_ATTACHMENT0+ne),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Xe.push(te),we.push(te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,we)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let ne=0;ne<A.length;ne++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,me.__webglColorRenderbuffer[ne]);let De=i.get(A[ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.TEXTURE_2D,De,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let A=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function _e(D){return Math.min(n.maxSamples,D.samples)}function Oe(D){let A=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ie(D){let A=a.render.frame;u.get(D)!==A&&(u.set(D,A),D.update())}function H(D,A){let q=D.colorSpace,J=D.format,Q=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Ht&&q!==bs&&(dt.getTransfer(q)===St?(J!==xn||Q!==As)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}function st(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=y,this.setTexture2D=P,this.setTexture2DArray=O,this.setTexture3D=z,this.setTextureCube=k,this.rebindTextures=Le,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Oe}function BS(s,e){function t(i,n=bs){let r,a=dt.getTransfer(n);if(i===As)return s.UNSIGNED_BYTE;if(i===Wm)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Xm)return s.UNSIGNED_SHORT_5_5_5_1;if(i===wv)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===xv)return s.BYTE;if(i===yv)return s.SHORT;if(i===Vm)return s.UNSIGNED_SHORT;if(i===Gm)return s.INT;if(i===ia)return s.UNSIGNED_INT;if(i===Cn)return s.FLOAT;if(i===gc)return s.HALF_FLOAT;if(i===bv)return s.ALPHA;if(i===Sv)return s.RGB;if(i===xn)return s.RGBA;if(i===Mv)return s.LUMINANCE;if(i===Tv)return s.LUMINANCE_ALPHA;if(i===jr)return s.DEPTH_COMPONENT;if(i===no)return s.DEPTH_STENCIL;if(i===Ym)return s.RED;if(i===qm)return s.RED_INTEGER;if(i===Av)return s.RG;if(i===$m)return s.RG_INTEGER;if(i===Zm)return s.RGBA_INTEGER;if(i===gu||i===_u||i===vu||i===xu)if(a===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===gu)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_u)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===gu)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_u)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vu)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xu)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===np||i===sp||i===rp||i===ap)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===np)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sp)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rp)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ap)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===op||i===lp||i===cp)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===op||i===lp)return a===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===cp)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===up||i===dp||i===hp||i===fp||i===pp||i===mp||i===gp||i===_p||i===vp||i===xp||i===yp||i===wp||i===bp||i===Sp)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===up)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dp)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hp)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fp)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pp)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mp)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gp)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_p)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vp)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xp)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yp)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wp)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bp)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sp)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yu||i===Mp||i===Tp)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===yu)return a===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mp)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tp)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ev||i===Ap||i===Ep||i===Cp)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===yu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ap)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ep)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cp)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mo?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var md=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Rn=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},HS={type:"move"},to=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,i),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(HS)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Rn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},VS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let n=new ti,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}render(e,t){if(this.texture!==null){if(this.mesh===null){let i=t.cameras[0].viewport,n=new On({vertexShader:VS,fragmentShader:GS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fi(new oa(20,20),n)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},_d=class extends Es{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null,_=new gd,p=t.getContextAttributes(),g=null,v=null,x=[],w=[],T=new tt,M=null,S=new Xt;S.layers.enable(1),S.viewport=new gt;let R=new Xt;R.layers.enable(2),R.viewport=new gt;let b=[S,R],y=new md;y.layers.enable(1),y.layers.enable(2);let C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=x[$];return ee===void 0&&(ee=new to,x[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=x[$];return ee===void 0&&(ee=new to,x[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=x[$];return ee===void 0&&(ee=new to,x[$]=ee),ee.getHandSpace()};function P($){let ee=w.indexOf($.inputSource);if(ee===-1)return;let ue=x[ee];ue!==void 0&&(ue.update($.inputSource,$.frame,c||a),ue.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){n.removeEventListener("select",P),n.removeEventListener("selectstart",P),n.removeEventListener("selectend",P),n.removeEventListener("squeeze",P),n.removeEventListener("squeezestart",P),n.removeEventListener("squeezeend",P),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",z);for(let $=0;$<x.length;$++){let ee=w[$];ee!==null&&(w[$]=null,x[$].disconnect(ee))}C=null,L=null,_.reset(),e.setRenderTarget(g),f=null,h=null,d=null,n=null,v=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(g=e.getRenderTarget(),n.addEventListener("select",P),n.addEventListener("selectstart",P),n.addEventListener("selectend",P),n.addEventListener("squeeze",P),n.addEventListener("squeezestart",P),n.addEventListener("squeezeend",P),n.addEventListener("end",O),n.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(T),n.renderState.layers===void 0){let ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,ee),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Qn(f.framebufferWidth,f.framebufferHeight,{format:xn,type:As,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,ue=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?no:jr,ue=p.stencil?mo:ia);let Le={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};d=new XRWebGLBinding(n,t),h=d.createProjectionLayer(Le),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Qn(h.textureWidth,h.textureHeight,{format:xn,type:As,depthTexture:new Kl(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),qe.setContext(n),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function z($){for(let ee=0;ee<$.removed.length;ee++){let ue=$.removed[ee],ie=w.indexOf(ue);ie>=0&&(w[ie]=null,x[ie].disconnect(ue))}for(let ee=0;ee<$.added.length;ee++){let ue=$.added[ee],ie=w.indexOf(ue);if(ie===-1){for(let Pe=0;Pe<x.length;Pe++)if(Pe>=w.length){w.push(ue),ie=Pe;break}else if(w[Pe]===null){w[Pe]=ue,ie=Pe;break}if(ie===-1)break}let Le=x[ie];Le&&Le.connect(ue)}}let k=new U,V=new U;function N($,ee,ue){k.setFromMatrixPosition(ee.matrixWorld),V.setFromMatrixPosition(ue.matrixWorld);let ie=k.distanceTo(V),Le=ee.projectionMatrix.elements,Pe=ue.projectionMatrix.elements,G=Le[14]/(Le[10]-1),Xe=Le[14]/(Le[10]+1),we=(Le[9]+1)/Le[5],Se=(Le[9]-1)/Le[5],_e=(Le[8]-1)/Le[0],Oe=(Pe[8]+1)/Pe[0],Ie=G*_e,H=G*Oe,st=ie/(-_e+Oe),D=st*-_e;ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(D),$.translateZ(st),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();let A=G+st,q=Xe+st,J=Ie-D,Q=H+(ie-D),te=we*Xe/q*A,me=Se*Xe/q*A;$.projectionMatrix.makePerspective(J,Q,te,me,A,q),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function K($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;_.texture!==null&&($.near=_.depthNear,$.far=_.depthFar),y.near=R.near=S.near=$.near,y.far=R.far=S.far=$.far,(C!==y.near||L!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,L=y.far,S.near=C,S.far=L,R.near=C,R.far=L,S.updateProjectionMatrix(),R.updateProjectionMatrix(),$.updateProjectionMatrix());let ee=$.parent,ue=y.cameras;K(y,ee);for(let ie=0;ie<ue.length;ie++)K(ue[ie],ee);ue.length===2?N(y,S,R):y.projectionMatrix.copy(S.projectionMatrix),I($,y,ee)};function I($,ee,ue){ue===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(ue.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=sa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null};let ae=null;function Ce($,ee){if(u=ee.getViewerPose(c||a),m=ee,u!==null){let ue=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ie=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,ie=!0);for(let Pe=0;Pe<ue.length;Pe++){let G=ue[Pe],Xe=null;if(f!==null)Xe=f.getViewport(G);else{let Se=d.getViewSubImage(h,G);Xe=Se.viewport,Pe===0&&(e.setRenderTargetTextures(v,Se.colorTexture,h.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(v))}let we=b[Pe];we===void 0&&(we=new Xt,we.layers.enable(Pe),we.viewport=new gt,b[Pe]=we),we.matrix.fromArray(G.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(G.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Pe===0&&(y.matrix.copy(we.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ie===!0&&y.cameras.push(we)}let Le=n.enabledFeatures;if(Le&&Le.includes("depth-sensing")){let Pe=d.getDepthInformation(ue[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,n.renderState)}}for(let ue=0;ue<x.length;ue++){let ie=w[ue],Le=x[ue];ie!==null&&Le!==void 0&&Le.update(ie,ee,c||a)}_.render(e,y),ae&&ae($,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),m=null}let qe=new sg;qe.setAnimationLoop(Ce),this.setAnimationLoop=function($){ae=$},this.dispose=function(){}}},er=new Ln,WS=new Ge;function XS(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,ng(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function n(p,g,v,x,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g)):g.isMeshStandardMaterial?(r(p,g),h(p,g),g.isMeshPhysicalMaterial&&f(p,g,w)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,v,x):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Oi&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Oi&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=e.get(g),x=v.envMap,w=v.envMapRotation;if(x&&(p.envMap.value=x,er.copy(w),er.x*=-1,er.y*=-1,er.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),p.envMapRotation.value.setFromMatrix4(WS.makeRotationFromEuler(er)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap){p.lightMap.value=g.lightMap;let T=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=g.lightMapIntensity*T,t(g.lightMap,p.lightMapTransform)}g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,x){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=x*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Oi&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function YS(s,e,t,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){let w=x.program;i.uniformBlockBinding(v,w)}function c(v,x){let w=n[v.id];w===void 0&&(m(v),w=u(v),n[v.id]=w,v.addEventListener("dispose",p));let T=x.program;i.updateUBOMapping(v,T);let M=e.render.frame;r[v.id]!==M&&(h(v),r[v.id]=M)}function u(v){let x=d();v.__bindingPointIndex=x;let w=s.createBuffer(),T=v.__size,M=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,T,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,w),w}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let x=n[v.id],w=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let M=0,S=w.length;M<S;M++){let R=Array.isArray(w[M])?w[M]:[w[M]];for(let b=0,y=R.length;b<y;b++){let C=R[b];if(f(C,M,b,T)===!0){let L=C.__offset,P=Array.isArray(C.value)?C.value:[C.value],O=0;for(let z=0;z<P.length;z++){let k=P[z],V=_(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,L+O,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,O),O+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,w,T){let M=v.value,S=x+"_"+w;if(T[S]===void 0)return typeof M=="number"||typeof M=="boolean"?T[S]=M:T[S]=M.clone(),!0;{let R=T[S];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return T[S]=M,!0}else if(R.equals(M)===!1)return R.copy(M),!0}return!1}function m(v){let x=v.uniforms,w=0,T=16;for(let S=0,R=x.length;S<R;S++){let b=Array.isArray(x[S])?x[S]:[x[S]];for(let y=0,C=b.length;y<C;y++){let L=b[y],P=Array.isArray(L.value)?L.value:[L.value];for(let O=0,z=P.length;O<z;O++){let k=P[O],V=_(k),N=w%T;N!==0&&T-N<V.boundary&&(w+=T-N),L.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=V.storage}}}let M=w%T;return M>0&&(w+=T-M),v.__size=w,v.__cache={},this}function _(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){let x=v.target;x.removeEventListener("dispose",p);let w=a.indexOf(x.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(n[x.id]),delete n[x.id],delete r[x.id]}function g(){for(let v in n)s.deleteBuffer(n[v]);a=[],n={},r={}}return{bind:l,update:c,dispose:g}}var jl=class{constructor(e={}){let{canvas:t=tx(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;let f=new Uint32Array(4),m=new Int32Array(4),_=null,p=null,g=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=Ts,this.toneMappingExposure=1;let x=this,w=!1,T=0,M=0,S=null,R=-1,b=null,y=new gt,C=new gt,L=null,P=new ze(0),O=0,z=t.width,k=t.height,V=1,N=null,K=null,I=new gt(0,0,z,k),ae=new gt(0,0,z,k),Ce=!1,qe=new oo,$=!1,ee=!1,ue=new Ge,ie=new U,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return S===null?V:1}let G=i;function Xe(E,B){return t.getContext(E,B)}try{let E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rd}`),t.addEventListener("webglcontextlost",F,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",j,!1),G===null){let B="webgl2";if(G=Xe(B,E),G===null)throw Xe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let we,Se,_e,Oe,Ie,H,st,D,A,q,J,Q,te,me,le,ne,De,se,be,je,ge,ve,Ne,We;function mt(){we=new db(G),we.init(),ve=new BS(G,we),Se=new rb(G,we,e,ve),_e=new zS(G),Oe=new pb(G),Ie=new AS,H=new kS(G,we,_e,Ie,Se,ve,Oe),st=new ob(x),D=new ub(x),A=new wx(G),Ne=new nb(G,A),q=new hb(G,A,Oe,Ne),J=new gb(G,q,A,Oe),be=new mb(G,Se,H),ne=new ab(Ie),Q=new TS(x,st,D,we,Se,Ne,ne),te=new XS(x,Ie),me=new CS,le=new OS(we),se=new ib(x,st,D,_e,J,h,l),De=new FS(x,J,Se),We=new YS(G,Oe,Se,_e),je=new sb(G,we,Oe),ge=new fb(G,we,Oe),Oe.programs=Q.programs,x.capabilities=Se,x.extensions=we,x.properties=Ie,x.renderLists=me,x.shadowMap=De,x.state=_e,x.info=Oe}mt();let Ue=new _d(x,G);this.xr=Ue,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let E=we.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=we.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(z,k,!1))},this.getSize=function(E){return E.set(z,k)},this.setSize=function(E,B,W=!0){if(Ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,k=B,t.width=Math.floor(E*V),t.height=Math.floor(B*V),W===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(z*V,k*V).floor()},this.setDrawingBufferSize=function(E,B,W){z=E,k=B,V=W,t.width=Math.floor(E*W),t.height=Math.floor(B*W),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,B,W,X){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,B,W,X),_e.viewport(y.copy(I).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(ae)},this.setScissor=function(E,B,W,X){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,B,W,X),_e.scissor(C.copy(ae).multiplyScalar(V).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(E){_e.setScissorTest(Ce=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(E=!0,B=!0,W=!0){let X=0;if(E){let Y=!1;if(S!==null){let re=S.texture.format;Y=re===Zm||re===$m||re===qm}if(Y){let re=S.texture.type,he=re===As||re===ia||re===Vm||re===mo||re===Wm||re===Xm,pe=se.getClearColor(),Ee=se.getClearAlpha(),ke=pe.r,Ae=pe.g,Me=pe.b;he?(f[0]=ke,f[1]=Ae,f[2]=Me,f[3]=Ee,G.clearBufferuiv(G.COLOR,0,f)):(m[0]=ke,m[1]=Ae,m[2]=Me,m[3]=Ee,G.clearBufferiv(G.COLOR,0,m))}else X|=G.COLOR_BUFFER_BIT}B&&(X|=G.DEPTH_BUFFER_BIT),W&&(X|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",F,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",j,!1),me.dispose(),le.dispose(),Ie.dispose(),st.dispose(),D.dispose(),J.dispose(),Ne.dispose(),We.dispose(),Q.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",rt),Ue.removeEventListener("sessionend",Re),xe.stop()};function F(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=Oe.autoReset,B=De.enabled,W=De.autoUpdate,X=De.needsUpdate,Y=De.type;mt(),Oe.autoReset=E,De.enabled=B,De.autoUpdate=W,De.needsUpdate=X,De.type=Y}function j(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function oe(E){let B=E.target;B.removeEventListener("dispose",oe),ce(B)}function ce(E){Ve(E),Ie.remove(E)}function Ve(E){let B=Ie.get(E).programs;B!==void 0&&(B.forEach(function(W){Q.releaseProgram(W)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,W,X,Y,re){B===null&&(B=Le);let he=Y.isMesh&&Y.matrixWorld.determinant()<0,pe=jt(E,B,W,X,Y);_e.setMaterial(X,he);let Ee=W.index,ke=1;if(X.wireframe===!0){if(Ee=q.getWireframeAttribute(W),Ee===void 0)return;ke=2}let Ae=W.drawRange,Me=W.attributes.position,ut=Ae.start*ke,kt=(Ae.start+Ae.count)*ke;re!==null&&(ut=Math.max(ut,re.start*ke),kt=Math.min(kt,(re.start+re.count)*ke)),Ee!==null?(ut=Math.max(ut,0),kt=Math.min(kt,Ee.count)):Me!=null&&(ut=Math.max(ut,0),kt=Math.min(kt,Me.count));let oi=kt-ut;if(oi<0||oi===1/0)return;Ne.setup(Y,X,pe,W,Ee);let wi,Ye=je;if(Ee!==null&&(wi=A.get(Ee),Ye=ge,Ye.setIndex(wi)),Y.isMesh)X.wireframe===!0?(_e.setLineWidth(X.wireframeLinewidth*Pe()),Ye.setMode(G.LINES)):Ye.setMode(G.TRIANGLES);else if(Y.isLine){let Fe=X.linewidth;Fe===void 0&&(Fe=1),_e.setLineWidth(Fe*Pe()),Y.isLineSegments?Ye.setMode(G.LINES):Y.isLineLoop?Ye.setMode(G.LINE_LOOP):Ye.setMode(G.LINE_STRIP)}else Y.isPoints?Ye.setMode(G.POINTS):Y.isSprite&&Ye.setMode(G.TRIANGLES);if(Y.isBatchedMesh)Y._multiDrawInstances!==null?Ye.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances):Ye.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Ye.renderInstances(ut,oi,Y.count);else if(W.isInstancedBufferGeometry){let Fe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Tn=Math.min(W.instanceCount,Fe);Ye.renderInstances(ut,oi,Tn)}else Ye.render(ut,oi)};function lt(E,B,W){E.transparent===!0&&E.side===Li&&E.forceSinglePass===!1?(E.side=Oi,E.needsUpdate=!0,Ct(E,B,W),E.side=Pn,E.needsUpdate=!0,Ct(E,B,W),E.side=Li):Ct(E,B,W)}this.compile=function(E,B,W=null){W===null&&(W=E),p=le.get(W),p.init(B),v.push(p),W.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),E!==W&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(x._useLegacyLights);let X=new Set;return E.traverse(function(Y){let re=Y.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){let pe=re[he];lt(pe,W,Y),X.add(pe)}else lt(re,W,Y),X.add(re)}),v.pop(),p=null,X},this.compileAsync=function(E,B,W=null){let X=this.compile(E,B,W);return new Promise(Y=>{function re(){if(X.forEach(function(he){Ie.get(he).currentProgram.isReady()&&X.delete(he)}),X.size===0){Y(E);return}setTimeout(re,10)}we.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let ft=null;function xt(E){ft&&ft(E)}function rt(){xe.stop()}function Re(){xe.start()}let xe=new sg;xe.setAnimationLoop(xt),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(E){ft=E,Ue.setAnimationLoop(E),E===null?xe.stop():xe.start()},Ue.addEventListener("sessionstart",rt),Ue.addEventListener("sessionend",Re),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(B),B=Ue.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,B,S),p=le.get(E,v.length),p.init(B),v.push(p),ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),qe.setFromProjectionMatrix(ue),ee=this.localClippingEnabled,$=ne.init(this.clippingPlanes,ee),_=me.get(E,g.length),_.init(),g.push(_),ot(E,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(N,K);let W=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1;W&&se.addToRenderList(_,E),this.info.render.frame++,$===!0&&ne.beginShadows();let X=p.state.shadowsArray;De.render(X,E,B),$===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=_.opaque,re=_.transmissive;if(p.setupLights(x._useLegacyLights),B.isArrayCamera){let he=B.cameras;if(re.length>0)for(let pe=0,Ee=he.length;pe<Ee;pe++){let ke=he[pe];Be(Y,re,E,ke)}W&&se.render(E);for(let pe=0,Ee=he.length;pe<Ee;pe++){let ke=he[pe];de(_,E,ke,ke.viewport)}}else re.length>0&&Be(Y,re,E,B),W&&se.render(E),de(_,E,B);S!==null&&(H.updateMultisampleRenderTarget(S),H.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(x,E,B),Ne.resetDefaultState(),R=-1,b=null,v.pop(),v.length>0?(p=v[v.length-1],$===!0&&ne.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function ot(E,B,W,X){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||qe.intersectsSprite(E)){X&&ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ue);let he=J.update(E),pe=E.material;pe.visible&&_.push(E,he,pe,W,ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||qe.intersectsObject(E))){let he=J.update(E),pe=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ie.copy(E.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),ie.copy(he.boundingSphere.center)),ie.applyMatrix4(E.matrixWorld).applyMatrix4(ue)),Array.isArray(pe)){let Ee=he.groups;for(let ke=0,Ae=Ee.length;ke<Ae;ke++){let Me=Ee[ke],ut=pe[Me.materialIndex];ut&&ut.visible&&_.push(E,he,ut,W,ie.z,Me)}}else pe.visible&&_.push(E,he,pe,W,ie.z,null)}}let re=E.children;for(let he=0,pe=re.length;he<pe;he++)ot(re[he],B,W,X)}function de(E,B,W,X){let Y=E.opaque,re=E.transmissive,he=E.transparent;p.setupLightsView(W),$===!0&&ne.setGlobalState(x.clippingPlanes,W),X&&_e.viewport(y.copy(X)),Y.length>0&&Te(Y,B,W),re.length>0&&Te(re,B,W),he.length>0&&Te(he,B,W),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Be(E,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Qn(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?gc:As,minFilter:En,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));let re=p.state.transmissionRenderTarget[X.id],he=X.viewport||y;re.setSize(he.z,he.w);let pe=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(P),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear();let Ee=x.toneMapping;x.toneMapping=Ts;let ke=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),$===!0&&ne.setGlobalState(x.clippingPlanes,X),Te(E,W,X),H.updateMultisampleRenderTarget(re),H.updateRenderTargetMipmap(re),we.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Me=0,ut=B.length;Me<ut;Me++){let kt=B[Me],oi=kt.object,wi=kt.geometry,Ye=kt.material,Fe=kt.group;if(Ye.side===Li&&oi.layers.test(X.layers)){let Tn=Ye.side;Ye.side=Oi,Ye.needsUpdate=!0,He(oi,W,X,wi,Ye,Fe),Ye.side=Tn,Ye.needsUpdate=!0,Ae=!0}}Ae===!0&&(H.updateMultisampleRenderTarget(re),H.updateRenderTargetMipmap(re))}x.setRenderTarget(pe),x.setClearColor(P,O),ke!==void 0&&(X.viewport=ke),x.toneMapping=Ee}function Te(E,B,W){let X=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,re=E.length;Y<re;Y++){let he=E[Y],pe=he.object,Ee=he.geometry,ke=X===null?he.material:X,Ae=he.group;pe.layers.test(W.layers)&&He(pe,B,W,Ee,ke,Ae)}}function He(E,B,W,X,Y,re){E.onBeforeRender(x,B,W,X,Y,re),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(x,B,W,X,E,re),Y.transparent===!0&&Y.side===Li&&Y.forceSinglePass===!1?(Y.side=Oi,Y.needsUpdate=!0,x.renderBufferDirect(W,B,X,Y,E,re),Y.side=Pn,Y.needsUpdate=!0,x.renderBufferDirect(W,B,X,Y,E,re),Y.side=Li):x.renderBufferDirect(W,B,X,Y,E,re),E.onAfterRender(x,B,W,X,Y,re)}function Ct(E,B,W){B.isScene!==!0&&(B=Le);let X=Ie.get(E),Y=p.state.lights,re=p.state.shadowsArray,he=Y.state.version,pe=Q.getParameters(E,Y.state,re,B,W),Ee=Q.getProgramCacheKey(pe),ke=X.programs;X.environment=E.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(E.isMeshStandardMaterial?D:st).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",oe),ke=new Map,X.programs=ke);let Ae=ke.get(Ee);if(Ae!==void 0){if(X.currentProgram===Ae&&X.lightsStateVersion===he)return Mt(E,pe),Ae}else pe.uniforms=Q.getUniforms(E),E.onBuild(W,pe,x),E.onBeforeCompile(pe,x),Ae=Q.acquireProgram(pe,Ee),ke.set(Ee,Ae),X.uniforms=pe.uniforms;let Me=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=ne.uniform),Mt(E,pe),X.needsLights=yt(E),X.lightsStateVersion=he,X.needsLights&&(Me.ambientLightColor.value=Y.state.ambient,Me.lightProbe.value=Y.state.probe,Me.directionalLights.value=Y.state.directional,Me.directionalLightShadows.value=Y.state.directionalShadow,Me.spotLights.value=Y.state.spot,Me.spotLightShadows.value=Y.state.spotShadow,Me.rectAreaLights.value=Y.state.rectArea,Me.ltc_1.value=Y.state.rectAreaLTC1,Me.ltc_2.value=Y.state.rectAreaLTC2,Me.pointLights.value=Y.state.point,Me.pointLightShadows.value=Y.state.pointShadow,Me.hemisphereLights.value=Y.state.hemi,Me.directionalShadowMap.value=Y.state.directionalShadowMap,Me.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Me.spotShadowMap.value=Y.state.spotShadowMap,Me.spotLightMatrix.value=Y.state.spotLightMatrix,Me.spotLightMap.value=Y.state.spotLightMap,Me.pointShadowMap.value=Y.state.pointShadowMap,Me.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.currentProgram=Ae,X.uniformsList=null,Ae}function et(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=Qr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Mt(E,B){let W=Ie.get(E);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function jt(E,B,W,X,Y){B.isScene!==!0&&(B=Le),H.resetTextureUnits();let re=B.fog,he=X.isMeshStandardMaterial?B.environment:null,pe=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Ht,Ee=(X.isMeshStandardMaterial?D:st).get(X.envMap||he),ke=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ae=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Me=!!W.morphAttributes.position,ut=!!W.morphAttributes.normal,kt=!!W.morphAttributes.color,oi=Ts;X.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(oi=x.toneMapping);let wi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ye=wi!==void 0?wi.length:0,Fe=Ie.get(X),Tn=p.state.lights;if($===!0&&(ee===!0||E!==b)){let en=E===b&&X.id===R;ne.setState(X,E,en)}let ct=!1;X.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Tn.state.version||Fe.outputColorSpace!==pe||Y.isBatchedMesh&&Fe.batching===!1||!Y.isBatchedMesh&&Fe.batching===!0||Y.isInstancedMesh&&Fe.instancing===!1||!Y.isInstancedMesh&&Fe.instancing===!0||Y.isSkinnedMesh&&Fe.skinning===!1||!Y.isSkinnedMesh&&Fe.skinning===!0||Y.isInstancedMesh&&Fe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Fe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Fe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Fe.instancingMorph===!1&&Y.morphTexture!==null||Fe.envMap!==Ee||X.fog===!0&&Fe.fog!==re||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ne.numPlanes||Fe.numIntersection!==ne.numIntersection)||Fe.vertexAlphas!==ke||Fe.vertexTangents!==Ae||Fe.morphTargets!==Me||Fe.morphNormals!==ut||Fe.morphColors!==kt||Fe.toneMapping!==oi||Fe.morphTargetsCount!==Ye)&&(ct=!0):(ct=!0,Fe.__version=X.version);let $s=Fe.currentProgram;ct===!0&&($s=Ct(X,B,Y));let Kf=!1,Ha=!1,fu=!1,li=$s.getUniforms(),ms=Fe.uniforms;if(_e.useProgram($s.program)&&(Kf=!0,Ha=!0,fu=!0),X.id!==R&&(R=X.id,Ha=!0),Kf||b!==E){li.setValue(G,"projectionMatrix",E.projectionMatrix),li.setValue(G,"viewMatrix",E.matrixWorldInverse);let en=li.map.cameraPosition;en!==void 0&&en.setValue(G,ie.setFromMatrixPosition(E.matrixWorld)),Se.logarithmicDepthBuffer&&li.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&li.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Ha=!0,fu=!0)}if(Y.isSkinnedMesh){li.setOptional(G,Y,"bindMatrix"),li.setOptional(G,Y,"bindMatrixInverse");let en=Y.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),li.setValue(G,"boneTexture",en.boneTexture,H))}Y.isBatchedMesh&&(li.setOptional(G,Y,"batchingTexture"),li.setValue(G,"batchingTexture",Y._matricesTexture,H));let pu=W.morphAttributes;if((pu.position!==void 0||pu.normal!==void 0||pu.color!==void 0)&&be.update(Y,W,$s),(Ha||Fe.receiveShadow!==Y.receiveShadow)&&(Fe.receiveShadow=Y.receiveShadow,li.setValue(G,"receiveShadow",Y.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ms.envMap.value=Ee,ms.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(ms.envMapIntensity.value=B.environmentIntensity),Ha&&(li.setValue(G,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&Tt(ms,fu),re&&X.fog===!0&&te.refreshFogUniforms(ms,re),te.refreshMaterialUniforms(ms,X,V,k,p.state.transmissionRenderTarget[E.id]),Qr.upload(G,et(Fe),ms,H)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Qr.upload(G,et(Fe),ms,H),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&li.setValue(G,"center",Y.center),li.setValue(G,"modelViewMatrix",Y.modelViewMatrix),li.setValue(G,"normalMatrix",Y.normalMatrix),li.setValue(G,"modelMatrix",Y.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let en=X.uniformsGroups;for(let mu=0,O_=en.length;mu<O_;mu++){let jf=en[mu];We.update(jf,$s),We.bind(jf,$s)}}return $s}function Tt(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function yt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,B,W){Ie.get(E.texture).__webglTexture=B,Ie.get(E.depthTexture).__webglTexture=W;let X=Ie.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){let W=Ie.get(E);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,W=0){S=E,T=B,M=W;let X=!0,Y=null,re=!1,he=!1;if(E){let Ee=Ie.get(E);Ee.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(G.FRAMEBUFFER,null),X=!1):Ee.__webglFramebuffer===void 0?H.setupRenderTarget(E):Ee.__hasExternalTextures&&H.rebindTextures(E,Ie.get(E.texture).__webglTexture,Ie.get(E.depthTexture).__webglTexture);let ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(he=!0);let Ae=Ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[B])?Y=Ae[B][W]:Y=Ae[B],re=!0):E.samples>0&&H.useMultisampledRTT(E)===!1?Y=Ie.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?Y=Ae[W]:Y=Ae,y.copy(E.viewport),C.copy(E.scissor),L=E.scissorTest}else y.copy(I).multiplyScalar(V).floor(),C.copy(ae).multiplyScalar(V).floor(),L=Ce;if(_e.bindFramebuffer(G.FRAMEBUFFER,Y)&&X&&_e.drawBuffers(E,Y),_e.viewport(y),_e.scissor(C),_e.setScissorTest(L),re){let Ee=Ie.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ee.__webglTexture,W)}else if(he){let Ee=Ie.get(E.texture),ke=B||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ee.__webglTexture,W||0,ke)}R=-1},this.readRenderTargetPixels=function(E,B,W,X,Y,re,he){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){_e.bindFramebuffer(G.FRAMEBUFFER,pe);try{let Ee=E.texture,ke=Ee.format,Ae=Ee.type;if(!Se.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-X&&W>=0&&W<=E.height-Y&&G.readPixels(B,W,X,Y,ve.convert(ke),ve.convert(Ae),re)}finally{let Ee=S!==null?Ie.get(S).__webglFramebuffer:null;_e.bindFramebuffer(G.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(E,B,W=0){let X=Math.pow(2,-W),Y=Math.floor(B.image.width*X),re=Math.floor(B.image.height*X);H.setTexture2D(B,0),G.copyTexSubImage2D(G.TEXTURE_2D,W,0,0,E.x,E.y,Y,re),_e.unbindTexture()},this.copyTextureToTexture=function(E,B,W,X=0){let Y=B.image.width,re=B.image.height,he=ve.convert(W.format),pe=ve.convert(W.type);H.setTexture2D(W,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,X,E.x,E.y,Y,re,he,pe,B.image.data):B.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,X,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,he,B.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,X,E.x,E.y,he,pe,B.image),X===0&&W.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(E,B,W,X,Y=0){let re=E.max.x-E.min.x,he=E.max.y-E.min.y,pe=E.max.z-E.min.z,Ee=ve.convert(X.format),ke=ve.convert(X.type),Ae;if(X.isData3DTexture)H.setTexture3D(X,0),Ae=G.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)H.setTexture2DArray(X,0),Ae=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);let Me=G.getParameter(G.UNPACK_ROW_LENGTH),ut=G.getParameter(G.UNPACK_IMAGE_HEIGHT),kt=G.getParameter(G.UNPACK_SKIP_PIXELS),oi=G.getParameter(G.UNPACK_SKIP_ROWS),wi=G.getParameter(G.UNPACK_SKIP_IMAGES),Ye=W.isCompressedTexture?W.mipmaps[Y]:W.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,Ye.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ye.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,E.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,E.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,E.min.z),W.isDataTexture||W.isData3DTexture?G.texSubImage3D(Ae,Y,B.x,B.y,B.z,re,he,pe,Ee,ke,Ye.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Ae,Y,B.x,B.y,B.z,re,he,pe,Ee,Ye.data):G.texSubImage3D(Ae,Y,B.x,B.y,B.z,re,he,pe,Ee,ke,Ye),G.pixelStorei(G.UNPACK_ROW_LENGTH,Me),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ut),G.pixelStorei(G.UNPACK_SKIP_PIXELS,kt),G.pixelStorei(G.UNPACK_SKIP_ROWS,oi),G.pixelStorei(G.UNPACK_SKIP_IMAGES,wi),Y===0&&X.generateMipmaps&&G.generateMipmap(Ae),_e.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?H.setTextureCube(E,0):E.isData3DTexture?H.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?H.setTexture2DArray(E,0):H.setTexture2D(E,0),_e.unbindTexture()},this.resetState=function(){T=0,M=0,S=null,_e.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Dd?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===vc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}};var Jl=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},lo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=td,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return tg("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bi=new U,co=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bi.fromBufferAttribute(this,t),bi.applyMatrix4(e),this.setXYZ(t,bi.x,bi.y,bi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bi.fromBufferAttribute(this,t),bi.applyNormalMatrix(e),this.setXYZ(t,bi.x,bi.y,bi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bi.fromBufferAttribute(this,t),bi.transformDirection(e),this.setXYZ(t,bi.x,bi.y,bi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=vn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),n=pt(n,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var wm=new U,bm=new gt,Sm=new gt,qS=new U,Mm=new Ge,Il=new U,Yu=new Wi,Tm=new Ge,qu=new ra,Ql=class extends fi{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ip,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Il),this.boundingBox.expandByPoint(Il)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Il),this.boundingSphere.expandByPoint(Il)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yu.copy(this.boundingSphere),Yu.applyMatrix4(n),e.ray.intersectsSphere(Yu)!==!1&&(Tm.copy(n).invert(),qu.copy(e.ray).applyMatrix4(Tm),!(this.boundingBox!==null&&qu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new gt,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ip?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;bm.fromBufferAttribute(n.attributes.skinIndex,e),Sm.fromBufferAttribute(n.attributes.skinWeight,e),wm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Sm.getComponent(r);if(a!==0){let o=bm.getComponent(r);Mm.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(qS.copy(wm).applyMatrix4(Mm),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},uo=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ec=class extends ti{constructor(e=null,t=1,i=1,n,r,a,o,l,c=hi,u=hi,d,h){super(null,a,o,l,c,u,n,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Am=new Ge,$S=new Ge,tc=class s{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ge;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:$S;Am.multiplyMatrices(o,t[r]),Am.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new ec(t,e,e,xn,Cn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let r=e.bones[i],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new uo),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}},Nn=class extends It{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Yr=new Ge,Em=new Ge,Ll=[],Cm=new sn,ZS=new Ge,qa=new fi,$a=new Wi,rr=class extends fi{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,ZS)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yr),Cm.copy(e.boundingBox).applyMatrix4(Yr),this.boundingBox.union(Cm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yr),$a.copy(e.boundingSphere).applyMatrix4(Yr),this.boundingSphere.union($a)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(qa.geometry=this.geometry,qa.material=this.material,qa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$a.copy(this.boundingSphere),$a.applyMatrix4(i),e.ray.intersectsSphere($a)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Yr),Em.multiplyMatrices(i,Yr),qa.matrixWorld=Em,qa.raycast(e,Ll);for(let a=0,o=Ll.length;a<o;a++){let l=Ll[a];l.instanceId=r,l.object=this,t.push(l)}Ll.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nn(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new ec(new Float32Array(n*this.count),n,this.count,Ym,Cn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ho=class extends Xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ic=new U,nc=new U,Rm=new Ge,Za=new ra,Dl=new Wi,$u=new U,Pm=new U,ca=class extends Lt{constructor(e=new Ni,t=new ho){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)ic.fromBufferAttribute(t,n-1),nc.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=ic.distanceTo(nc);e.setAttribute("lineDistance",new nn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(n),Dl.radius+=r,e.ray.intersectsSphere(Dl)===!1)return;Rm.copy(n).invert(),Za.copy(e.ray).applyMatrix4(Rm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,p=m-1;_<p;_+=c){let g=u.getX(_),v=u.getX(_+1),x=Ol(this,e,Za,l,g,v);x&&t.push(x)}if(this.isLineLoop){let _=u.getX(m-1),p=u.getX(f),g=Ol(this,e,Za,l,_,p);g&&t.push(g)}}else{let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,p=m-1;_<p;_+=c){let g=Ol(this,e,Za,l,_,_+1);g&&t.push(g)}if(this.isLineLoop){let _=Ol(this,e,Za,l,m-1,f);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ol(s,e,t,i,n,r){let a=s.geometry.attributes.position;if(ic.fromBufferAttribute(a,n),nc.fromBufferAttribute(a,r),t.distanceSqToSegment(ic,nc,$u,Pm)>i)return;$u.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo($u);if(!(l<e.near||l>e.far))return{distance:l,point:Pm.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,object:s}}var Im=new U,Lm=new U,sc=class extends ca{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Im.fromBufferAttribute(t,n),Lm.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Im.distanceTo(Lm);e.setAttribute("lineDistance",new nn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},rc=class extends ca{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},fo=class extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dm=new Ge,vd=new ra,Nl=new Wi,Ul=new U,ac=class extends Lt{constructor(e=new Ni,t=new fo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(n),Nl.radius+=r,e.ray.intersectsSphere(Nl)===!1)return;Dm.copy(n).invert(),vd.copy(e.ray).applyMatrix4(Dm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=h,_=f;m<_;m++){let p=c.getX(m);Ul.fromBufferAttribute(d,p),Om(Ul,p,l,n,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=h,_=f;m<_;m++)Ul.fromBufferAttribute(d,m),Om(Ul,m,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Om(s,e,t,i,n,r,a){let o=vd.distanceSqToPoint(s);if(o<t){let l=new U;vd.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var wn=class extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jm,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yi=class extends wn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return di(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Fl(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function KS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function jS(s){function e(n,r){return s[n]-s[r]}let t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Nm(s,e,t){let i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)n[a++]=s[o+l]}return n}function ug(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}var Cs=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xd=class extends Cs{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rp,endingEnd:Rp}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pp:r=e,o=2*t-i;break;case Ip:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Pp:a=e,l=2*i-t;break;case Ip:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),_=m*m,p=_*m,g=-h*p+2*h*_-h*m,v=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*m+1,x=(-1-f)*p+(1.5+f)*_+.5*m,w=f*p-f*_;for(let T=0;T!==o;++T)r[T]=g*a[u+T]+v*a[c+T]+x*a[l+T]+w*a[d+T];return r}},yd=class extends Cs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(n-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},wd=class extends Cs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},rn=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fl(t,this.TimeBufferType),this.values=Fl(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fl(e.times,Array),values:Fl(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new wd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case na:t=this.InterpolantFactoryMethodDiscrete;break;case sr:t=this.InterpolantFactoryMethodLinear;break;case wu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return sr;case this.InterpolantFactoryMethodSmooth:return wu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&KS(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===wu,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(n)l=!0;else{let d=o*i,h=d-i,f=d+i;for(let m=0;m!==i;++m){let _=t[d+m];if(_!==t[h+m]||_!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,h=a*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=sr;var Rs=class extends rn{};Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=na;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var oc=class extends rn{};oc.prototype.ValueTypeName="color";var es=class extends rn{};es.prototype.ValueTypeName="number";var bd=class extends Cs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let u=c+o;c!==u;c+=4)Yt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Un=class extends rn{InterpolantFactoryMethodLinear(e){return new bd(this.times,this.values,this.getValueSize(),e)}};Un.prototype.ValueTypeName="quaternion";Un.prototype.DefaultInterpolation=sr;Un.prototype.InterpolantFactoryMethodSmooth=void 0;var Ps=class extends rn{};Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=na;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends rn{};ts.prototype.ValueTypeName="vector";var lc=class{constructor(e="",t=-1,i=[],n=Cv){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(QS(i[a]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(rn.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=jS(l);l=Nm(l,1,u),c=Nm(c,1,u),!n&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new es(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let d=u[1],h=n[d];h||(n[d]=h=[]),h.push(c)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(d,h,f,m,_){if(f.length!==0){let p=[],g=[];ug(f,p,g,m),p.length!==0&&_.push(new d(h,p,g))}},n=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let f={},m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let _=0;_<h[m].morphTargets.length;_++)f[h[m].morphTargets[_]]=-1;for(let _ in f){let p=[],g=[];for(let v=0;v!==h[m].morphTargets.length;++v){let x=h[m];p.push(x.time),g.push(x.morphTarget===_?1:0)}n.push(new es(".morphTargetInfluence["+_+"]",p,g))}l=f.length*a}else{let f=".bones["+t[d].name+"]";i(ts,f+".position",h,"pos",n),i(Un,f+".quaternion",h,"rot",n),i(ts,f+".scale",h,"scl",n)}}return n.length===0?null:new this(r,l,n,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function JS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return es;case"vector":case"vector2":case"vector3":case"vector4":return ts;case"color":return oc;case"quaternion":return Un;case"bool":case"boolean":return Rs;case"string":return Ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function QS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=JS(s.type);if(s.times===void 0){let t=[],i=[];ug(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Ss={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Sd=class{constructor(e,t,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&n.onStart!==void 0&&n.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}},eM=new Sd,an=class{constructor(e){this.manager=e!==void 0?e:eM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};an.DEFAULT_MATERIAL_NAME="__DEFAULT";var $n={},Md=class extends Error{constructor(e,t){super(e),this.response=t}},Is=class extends an{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ss.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:i,onError:n});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=$n[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,m=f!==0,_=0,p=new ReadableStream({start(g){v();function v(){d.read().then(({done:x,value:w})=>{if(x)g.close();else{_+=w.byteLength;let T=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let M=0,S=u.length;M<S;M++){let R=u[M];R.onProgress&&R.onProgress(T)}g.enqueue(w),v()}})}}});return new Response(p)}else throw new Md(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Ss.add(e,c);let u=$n[e];delete $n[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=$n[e];if(u===void 0)throw this.manager.itemError(e),c;delete $n[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var cc=class extends an{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ss.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=so("img");function l(){u(),Ss.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),n&&n(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}},uc=class extends an{constructor(e){super(e)}load(e,t,i,n){let r=new ao;r.colorSpace=At;let a=new cc(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,n)}for(let c=0;c<e.length;++c)l(c);return r}};var ua=class extends an{constructor(e){super(e)}load(e,t,i,n){let r=new ti,a=new cc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},da=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Zu=new Ge,Um=new U,Fm=new U,po=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oo,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Um.setFromMatrixPosition(e.matrixWorld),t.position.copy(Um),Fm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fm),t.updateMatrixWorld(),Zu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Td=class extends po{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=sa*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},dc=class extends da{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Td}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},zm=new Ge,Ka=new U,Ku=new U,Ad=class extends po{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ka.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ka),Ku.copy(i.position),Ku.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ku),i.updateMatrixWorld(),n.makeTranslation(-Ka.x,-Ka.y,-Ka.z),zm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zm)}},hc=class extends da{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Ad}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ed=class extends po{constructor(){super(new la(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ha=class extends da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Ed}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},fc=class extends da{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ls=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var pc=class extends an{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ss.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ss.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Ss.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ss.add(e,l),r.manager.itemStart(e)}};var Ud="\\[\\]\\.:\\/",tM=new RegExp("["+Ud+"]","g"),Fd="[^"+Ud+"]",iM="[^"+Ud.replace("\\.","")+"]",nM=/((?:WC+[\/:])*)/.source.replace("WC",Fd),sM=/(WCOD+)?/.source.replace("WCOD",iM),rM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fd),aM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fd),oM=new RegExp("^"+nM+sM+rM+aM+"$"),lM=["material","materials","bones","map"],Cd=class{constructor(e,t,i){let n=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},wt=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tM,"")}static parseTrackName(e){let t=oM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);lM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Cd;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var NE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rd);function is(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function vg(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var ki={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ga={duration:.5,overwrite:!1,delay:0},ih,ni,Et,ln=1e8,vt=1/ln,Xd=Math.PI*2,cM=Xd/4,uM=0,xg=Math.sqrt,dM=Math.cos,hM=Math.sin,Zt=function(e){return typeof e=="string"},Dt=function(e){return typeof e=="function"},ss=function(e){return typeof e=="number"},Rc=function(e){return typeof e>"u"},kn=function(e){return typeof e=="object"},zi=function(e){return e!==!1},nh=function(){return typeof window<"u"},yc=function(e){return Dt(e)||Zt(e)},yg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pi=Array.isArray,Yd=/(?:-?\.?\d|\.)+/gi,sh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,cr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,zd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rh=/[+-]=-?[.\d]+/,wg=/[^,'"\[\]\s]+/gi,fM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rt,Fn,qd,ah,$i={},Mc={},bg,Sg=function(e){return(Mc=_a(e,$i))&&mi},Pc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},bo=function(e,t){return!t&&console.warn(e)},Mg=function(e,t){return e&&($i[e]=t)&&Mc&&(Mc[e]=t)||$i},So=function(){return 0},pM={suppressEvents:!0,isStart:!0,kill:!1},wc={suppressEvents:!0,kill:!1},mM={suppressEvents:!0},oh={},Os=[],$d={},Tg,Ui={},kd={},dg=30,bc=[],lh="",ch=function(e){var t=e[0],i,n;if(kn(t)||Dt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=bc.length;n--&&!bc[n].targetTest(t););i=bc[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new fh(e[n],i)))||e.splice(n,1);return e},Ns=function(e){return e._gsap||ch(cn(e))[0]._gsap},uh=function(e,t,i){return(i=e[t])&&Dt(i)?e[t]():Rc(i)&&e.getAttribute&&e.getAttribute(t)||i},Mi=function(e,t){return(e=e.split(",")).forEach(t)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},Vt=function(e){return Math.round(e*1e7)/1e7||0},ur=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},gM=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Tc=function(){var e=Os.length,t=Os.slice(0),i,n;for($d={},Os.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},dh=function(e){return!!(e._initted||e._startAt||e.add)},Ag=function(e,t,i,n){Os.length&&!ni&&Tc(),e.render(t,i,n||!!(ni&&t<0&&dh(e))),Os.length&&!ni&&Tc()},Eg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(wg).length<2?t:Zt(e)?e.trim():e},Cg=function(e){return e},Zi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},_M=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},_a=function(e,t){for(var i in t)e[i]=t[i];return e},hg=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=kn(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},Ac=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},xo=function(e){var t=e.parent||Rt,i=e.keyframes?_M(pi(e.keyframes)):Zi;if(zi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},vM=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Rg=function(e,t,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},Ic=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,a=t._next;r?r._next=a:e[i]===t&&(e[i]=a),a?a._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},Us=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ar=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},xM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Zd=function(e,t,i,n){return e._startAt&&(ni?e._startAt.revert(wc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},yM=function s(e){return!e||e._ts&&s(e.parent)},fg=function(e){return e._repeat?va(e._tTime,e=e.duration()+e._rDelay)*e:0},va=function(e,t){var i=Math.floor(e=Vt(e/t));return e&&i===e?i-1:i},Ec=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Lc=function(e){return e._end=Vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||vt)||0))},Dc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Vt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Lc(e),i._dirty||ar(i,e)),e},Pg=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Ec(e.rawTime(),t),(!t._dur||Ao(0,t.totalDuration(),i)-t._tTime>vt)&&t.render(i,!0)),ar(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-vt}},zn=function(e,t,i,n){return t.parent&&Us(t),t._start=Vt((ss(i)?i:i||e!==Rt?on(e,i,t):e._time)+t._delay),t._end=Vt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Rg(e,t,"_first","_last",e._sort?"_start":0),Kd(t)||(e._recent=t),n||Pg(e,t),e._ts<0&&Dc(e,e._tTime),e},Ig=function(e,t){return($i.ScrollTrigger||Pc("scrollTrigger",t))&&$i.ScrollTrigger.create(t,e)},Lg=function(e,t,i,n,r){if(gh(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!ni&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Tg!==Fi.frame)return Os.push(e),e._lazy=[r,n],1},wM=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Kd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},bM=function(e,t,i,n){var r=e.ratio,a=t<0||!t&&(!e._start&&wM(e)&&!(!e._initted&&Kd(e))||(e._ts<0||e._dp._ts<0)&&!Kd(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Ao(0,e._tDur,t),u=va(l,o),e._yoyo&&u&1&&(a=1-a),u!==va(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||ni||n||e._zTime===vt||!t&&e._zTime){if(!e._initted&&Lg(e,t,n,i,l))return;for(d=e._zTime,e._zTime=t||(i?vt:0),i||(i=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Zd(e,t,i,!0),e._onUpdate&&!i&&qi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&qi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Us(e,1),!i&&!ni&&(qi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},SM=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},xa=function(e,t,i,n){var r=e._repeat,a=Vt(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Vt(a*(r+1)+e._rDelay*r):a,o>0&&!n&&Dc(e,e._tTime=e._tDur*o),e.parent&&Lc(e),i||ar(e.parent,e),e},pg=function(e){return e instanceof ii?ar(e):xa(e,e._dur)},MM={_start:0,endTime:So,totalDuration:So},on=function s(e,t,i){var n=e.labels,r=e._recent||MM,a=e.duration()>=ln?r.endTime(!1):e._dur,o,l,c;return Zt(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(pi(i)?i[0]:i).totalDuration()),o>1?s(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},yo=function(e,t,i){var n=ss(t[1]),r=(n?2:1)+(e<2?0:1),a=t[r],o,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=zi(l.vars.inherit)&&l.parent;a.immediateRender=zi(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new zt(t[0],a,t[r+1])},Fs=function(e,t){return e||e===0?t(e):t},Ao=function(e,t,i){return i<e?e:i>t?t:i},si=function(e,t){return!Zt(e)||!(t=fM.exec(e))?"":t[1]},TM=function(e,t,i){return Fs(i,function(n){return Ao(e,t,n)})},jd=[].slice,Dg=function(e,t){return e&&kn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&kn(e[0]))&&!e.nodeType&&e!==Fn},AM=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Zt(n)&&!t||Dg(n,1)?(r=i).push.apply(r,cn(n)):i.push(n)})||i},cn=function(e,t,i){return Et&&!t&&Et.selector?Et.selector(e):Zt(e)&&!i&&(qd||!ya())?jd.call((t||ah).querySelectorAll(e),0):pi(e)?AM(e,i):Dg(e)?jd.call(e,0):e?[e]:[]},Jd=function(e){return e=cn(e)[0]||bo("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return cn(t,i.querySelectorAll?i:i===e?bo("Invalid scope")||ah.createElement("div"):e)}},Og=function(e){return e.sort(function(){return .5-Math.random()})},Ng=function(e){if(Dt(e))return e;var t=kn(e)?e:{each:e},i=or(t.ease),n=t.from||0,r=parseFloat(t.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,u=n,d=n;return Zt(n)?u=d={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(u=n[0],d=n[1]),function(h,f,m){var _=(m||t).length,p=a[_],g,v,x,w,T,M,S,R,b;if(!p){if(b=t.grid==="auto"?0:(t.grid||[1,ln])[1],!b){for(S=-ln;S<(S=m[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(p=a[_]=[],g=l?Math.min(b,_)*u-.5:n%b,v=b===ln?0:l?_*d/b-.5:n/b|0,S=0,R=ln,M=0;M<_;M++)x=M%b-g,w=v-(M/b|0),p[M]=T=c?Math.abs(c==="y"?w:x):xg(x*x+w*w),T>S&&(S=T),T<R&&(R=T);n==="random"&&Og(p),p.max=S-R,p.min=R,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(b>_?_-1:c?c==="y"?_/b:b:Math.max(b,_/b))||0)*(n==="edges"?-1:1),p.b=_<0?r-_:r,p.u=si(t.amount||t.each)||0,i=i&&_<0?Wg(i):i}return _=(p[h]-p.min)/p.max||0,Vt(p.b+(i?i(_):_)*p.v)+p.u}},Qd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Vt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(ss(i)?0:si(i))}},Ug=function(e,t){var i=pi(e),n,r;return!i&&kn(e)&&(n=i=e.radius||ln,e.values?(e=cn(e.values),(r=!ss(e[0]))&&(n*=n)):e=Qd(e.increment)),Fs(t,i?Dt(e)?function(a){return r=e(a),Math.abs(r-a)<=n?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=ln,u=0,d=e.length,h,f;d--;)r?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!n||c<=n?e[u]:a,r||u===a||ss(a)?u:u+si(a)}:Qd(e))},Fg=function(e,t,i,n){return Fs(pi(e)?!t:i===!0?!!(i=0):!n,function(){return pi(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},EM=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,a){return a(r)},n)}},CM=function(e,t){return function(i){return e(parseFloat(i))+(t||si(i))}},RM=function(e,t,i){return kg(e,t,0,1,i)},zg=function(e,t,i){return Fs(i,function(n){return e[~~t(n)]})},PM=function s(e,t,i){var n=t-e;return pi(e)?zg(e,s(0,e.length),t):Fs(i,function(r){return(n+(r-e)%n)%n+e})},IM=function s(e,t,i){var n=t-e,r=n*2;return pi(e)?zg(e,s(0,e.length-1),t):Fs(i,function(a){return a=(r+(a-e)%r)%r||0,e+(a>n?r-a:a)})},wa=function(e){for(var t=0,i="",n,r,a,o;~(n=e.indexOf("random(",t));)a=e.indexOf(")",n),o=e.charAt(n+7)==="[",r=e.substr(n+7,a-n-7).match(o?wg:Yd),i+=e.substr(t,n-t)+Fg(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return i+e.substr(t,e.length-t)},kg=function(e,t,i,n,r){var a=t-e,o=n-i;return Fs(r,function(l){return i+((l-e)/a*o||0)})},LM=function s(e,t,i,n){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var a=Zt(e),o={},l,c,u,d,h;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(pi(e)&&!pi(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(s(e[c-1],e[c]));d--,r=function(m){m*=d;var _=Math.min(h,~~m);return u[_](m-_)},i=t}else n||(e=_a(pi(e)?[]:{},e));if(!u){for(l in t)ph.call(o,e,l,"get",t[l]);r=function(m){return xh(m,o)||(a?e.p:e)}}}return Fs(i,r)},mg=function(e,t,i){var n=e.labels,r=ln,a,o,l;for(a in n)o=n[a]-t,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},qi=function(e,t,i){var n=e.vars,r=n[t],a=Et,o=e._ctx,l,c,u;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&Os.length&&Tc(),o&&(Et=o),u=l?r.apply(c,l):r.call(c),Et=a,u},_o=function(e){return Us(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ni),e.progress()<1&&qi(e,"onInterrupt"),e},ma,Bg=[],Hg=function(e){if(e)if(e=!e.name&&e.default||e,nh()||e.headless){var t=e.name,i=Dt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:So,render:xh,add:ph,kill:$M,modifier:qM,rawVars:0},a={targetTest:0,get:0,getSetter:Oc,aliases:{},register:0};if(ya(),e!==n){if(Ui[t])return;Zi(n,Zi(Ac(e,r),a)),_a(n.prototype,_a(r,Ac(e,a))),Ui[n.prop=t]=n,e.targetTest&&(bc.push(n),oh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Mg(t,n),e.register&&e.register(mi,n,Ti)}else Bg.push(e)},_t=255,vo={aqua:[0,_t,_t],lime:[0,_t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_t],navy:[0,0,128],white:[_t,_t,_t],olive:[128,128,0],yellow:[_t,_t,0],orange:[_t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_t,0,0],pink:[_t,192,203],cyan:[0,_t,_t],transparent:[_t,_t,_t,0]},Bd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*_t+.5|0},Vg=function(e,t,i){var n=e?ss(e)?[e>>16,e>>8&_t,e&_t]:0:vo.black,r,a,o,l,c,u,d,h,f,m;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),vo[e])n=vo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&_t,n&_t,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&_t,e&_t]}else if(e.substr(0,3)==="hsl"){if(n=m=e.match(Yd),!t)l=+n[0]%360/360,c=+n[1]/100,u=+n[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,n.length>3&&(n[3]*=1),n[0]=Bd(l+1/3,r,a),n[1]=Bd(l,r,a),n[2]=Bd(l-1/3,r,a);else if(~e.indexOf("="))return n=e.match(sh),i&&n.length<4&&(n[3]=1),n}else n=e.match(Yd)||vo.transparent;n=n.map(Number)}return t&&!m&&(r=n[0]/_t,a=n[1]/_t,o=n[2]/_t,d=Math.max(r,a,o),h=Math.min(r,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===r?(a-o)/f+(a<o?6:0):d===a?(o-r)/f+2:(r-a)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},Gg=function(e){var t=[],i=[],n=-1;return e.split(ns).forEach(function(r){var a=r.match(cr)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},gg=function(e,t,i){var n="",r=(e+n).match(ns),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!r)return e;if(r=r.map(function(h){return(h=Vg(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=Gg(e),l=i.c,l.join(n)!==u.c.join(n)))for(c=e.replace(ns,"1").split(cr),d=c.length-1;o<d;o++)n+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:i).shift());if(!c)for(c=e.split(ns),d=c.length-1;o<d;o++)n+=c[o]+r[o];return n+c[d]},ns=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in vo)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),DM=/hsl[a]?\(/,hh=function(e){var t=e.join(" "),i;if(ns.lastIndex=0,ns.test(t))return i=DM.test(t),e[1]=gg(e[1],i),e[0]=gg(e[0],i,Gg(e[1])),!0},Mo,Fi=function(){var s=Date.now,e=500,t=33,i=s(),n=i,r=1e3/240,a=r,o=[],l,c,u,d,h,f,m=function _(p){var g=s()-n,v=p===!0,x,w,T,M;if((g>e||g<0)&&(i+=g-t),n+=g,T=n-i,x=T-a,(x>0||v)&&(M=++d.frame,h=T-d.time*1e3,d.time=T=T/1e3,a+=x+(x>=r?4:r-x),w=1),v||(l=c(_)),w)for(f=0;f<o.length;f++)o[f](T,h,M,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){bg&&(!qd&&nh()&&(Fn=qd=window,ah=Fn.document||{},$i.gsap=mi,(Fn.gsapVersions||(Fn.gsapVersions=[])).push(mi.version),Sg(Mc||Fn.GreenSockGlobals||!Fn.gsap&&Fn||{}),Bg.forEach(Hg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Mo=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Mo=0,c=So},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){r=1e3/(p||240),a=d.time*1e3+r},add:function(p,g,v){var x=g?function(w,T,M,S){p(w,T,M,S),d.remove(x)}:p;return d.remove(p),o[v?"unshift":"push"](x),ya(),x},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&f>=g&&f--},_listeners:o},d}(),ya=function(){return!Mo&&Fi.wake()},at={},OM=/^[\d.\-M][\d.\-,\s]/,NM=/["']/g,UM=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,a=i.length,o,l,c;r<a;r++)l=i[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace(NM,"").trim():+c,n=l.substr(o+1).trim();return t},FM=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},zM=function(e){var t=(e+"").split("("),i=at[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[UM(t[1])]:FM(e).split(",").map(Eg)):at._CE&&OM.test(e)?at._CE("",e):i},Wg=function(e){return function(t){return 1-e(1-t)}},Xg=function s(e,t){for(var i=e._first,n;i;)i instanceof ii?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},or=function(e,t){return e&&(Dt(e)?e:at[e]||zM(e))||t},dr=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},a;return Mi(e,function(o){at[o]=$i[o]=r,at[a=o.toLowerCase()]=i;for(var l in r)at[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[o+"."+l]=r[l]}),r},Yg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Hd=function s(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),a=r/Xd*(Math.asin(1/n)||0),o=function(u){return u===1?1:n*Math.pow(2,-10*u)*hM((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Yg(o);return r=Xd/r,l.config=function(c,u){return s(e,c,u)},l},Vd=function s(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:Yg(i);return n.config=function(r){return s(e,r)},n};Mi("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;dr(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;dr("Elastic",Hd("in"),Hd("out"),Hd());(function(s,e){var t=1/e,i=2*t,n=2.5*t,r=function(o){return o<t?s*o*o:o<i?s*Math.pow(o-1.5/e,2)+.75:o<n?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};dr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);dr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});dr("Circ",function(s){return-(xg(1-s*s)-1)});dr("Sine",function(s){return s===1?1:-dM(s*cM)+1});dr("Back",Vd("in"),Vd("out"),Vd());at.SteppedEase=at.steps=$i.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,a=1-vt;return function(o){return((n*Ao(0,a,o)|0)+r)*i}}};ga.ease=at["quad.out"];Mi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return lh+=s+","+s+"Params,"});var fh=function(e,t){this.id=uM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:uh,this.set=t?t.getSetter:Oc},To=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,xa(this,+t.duration,1,1),this.data=t.data,Et&&(this._ctx=Et,Et.data.push(this)),Mo||Fi.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,xa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(ya(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Dc(this,i),!r._dp||r.parent||Pg(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&zn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===vt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Ag(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+fg(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+fg(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?va(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-vt?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Ec(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-vt?0:this._rts,this.totalTime(Ao(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),Lc(this),xM(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ya(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==vt&&(this._tTime-=vt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&zn(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(zi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ec(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=mM);var n=ni;return ni=i,dh(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ni=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,pg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,pg(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(on(this,i),zi(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,zi(n)),this._dur||(this._zTime=-vt),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-vt,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-vt)},e.eventCallback=function(i,n,r){var a=this.vars;return arguments.length>1?(n?(a[i]=n,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this;return new Promise(function(r){var a=Dt(i)?i:Cg,o=function(){var c=n.then;n.then=null,Dt(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=c),r(a),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?o():n._prom=o})},e.kill=function(){_o(this)},s}();Zi(To.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-vt,_prom:0,_ps:!1,_rts:1});var ii=function(s){vg(e,s);function e(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=zi(i.sortChildren),Rt&&zn(i.parent||Rt,is(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Ig(is(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,a){return yo(0,arguments,this),this},t.from=function(n,r,a){return yo(1,arguments,this),this},t.fromTo=function(n,r,a,o){return yo(2,arguments,this),this},t.set=function(n,r,a){return r.duration=0,r.parent=this,xo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new zt(n,r,on(this,a),1),this},t.call=function(n,r,a){return zn(this,zt.delayedCall(0,n,r),a)},t.staggerTo=function(n,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new zt(n,a,on(this,l)),this},t.staggerFrom=function(n,r,a,o,l,c,u){return a.runBackwards=1,xo(a).immediateRender=zi(a.immediateRender),this.staggerTo(n,r,a,o,l,c,u)},t.staggerFromTo=function(n,r,a,o,l,c,u,d){return o.startAt=a,xo(o).immediateRender=zi(o.immediateRender),this.staggerTo(n,r,o,l,c,u,d)},t.render=function(n,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=n<=0?0:Vt(n),d=this._zTime<0!=n<0&&(this._initted||!c),h,f,m,_,p,g,v,x,w,T,M,S;if(this!==Rt&&u>l&&n>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,n+=this._time-o),h=u,w=this._start,x=this._ts,g=!x,d&&(c||(o=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(M=this._yoyo,p=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,r,a);if(h=Vt(u%p),u===l?(_=this._repeat,h=c):(T=Vt(u/p),_=~~T,_&&_===T&&(h=c,_--),h>c&&(h=c)),T=va(this._tTime,p),!o&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),M&&_&1&&(h=c-h,S=1),_!==T&&!this._lock){var R=M&&T&1,b=R===(M&&_&1);if(_<T&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(S?0:Vt(_*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&qi(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;Xg(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=SM(this,Vt(o),Vt(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&u&&!r&&!T&&(qi(this,"onStart"),this._tTime!==u))return this;if(h>=o&&n>=0)for(f=this._first;f;){if(m=f._next,(f._act||h>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(n,r,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,r,a),h!==this._time||!this._ts&&!g){v=0,m&&(u+=this._zTime=-vt);break}}f=m}else{f=this._last;for(var y=n<0?n:h;f;){if(m=f._prev,(f._act||y<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(n,r,a);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,r,a||ni&&dh(f)),h!==this._time||!this._ts&&!g){v=0,m&&(u+=this._zTime=y?-vt:vt);break}}f=m}}if(v&&!r&&(this.pause(),v.render(h>=o?0:-vt)._zTime=h>=o?1:-1,this._ts))return this._start=w,Lc(this),this.render(n,r,a);this._onUpdate&&!r&&qi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(w===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Us(this,1),!r&&!(n<0&&!o)&&(u||o||!l)&&(qi(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var a=this;if(ss(r)||(r=on(this,r,n)),!(n instanceof To)){if(pi(n))return n.forEach(function(o){return a.add(o,r)}),this;if(Zt(n))return this.addLabel(n,r);if(Dt(n))n=zt.delayedCall(0,n);else return this}return this!==n?zn(this,n,r):this},t.getChildren=function(n,r,a,o){n===void 0&&(n=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-ln);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof zt?r&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===n)return r[a]},t.remove=function(n){return Zt(n)?this.removeLabel(n):Dt(n)?this.killTweensOf(n):(n.parent===this&&Ic(this,n),n===this._recent&&(this._recent=this._last),ar(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Vt(Fi.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=on(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,a){var o=zt.delayedCall(0,r||So,a);return o.data="isPause",this._hasPause=1,zn(this,o,on(this,n))},t.removePause=function(n){var r=this._first;for(n=on(this,n);r;)r._start===n&&r.data==="isPause"&&Us(r),r=r._next},t.killTweensOf=function(n,r,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)Ds!==o[l]&&o[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var a=[],o=cn(n),l=this._first,c=ss(r),u;l;)l instanceof zt?gM(l._targets,o)&&(c?(!Ds||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(n,r){r=r||{};var a=this,o=on(a,n),l=r,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,m=zt.to(a,Zi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||vt,onStart:function(){if(a.pause(),!f){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==p&&xa(m,p,0,1).render(m._time,!0,!0),f=1}u&&u.apply(m,d||[])}},r));return h?m.render(0):m},t.tweenFromTo=function(n,r,a){return this.tweenTo(r,Zi({startAt:{time:on(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),mg(this,on(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),mg(this,on(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+vt)},t.shiftChildren=function(n,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=n);return ar(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),ar(this)},t.totalDuration=function(n){var r=0,a=this,o=a._last,l=ln,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,zn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;xa(a,a===Rt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(Rt._ts&&(Ag(Rt,Ec(n,Rt)),Tg=Fi.frame),Fi.frame>=dg){dg+=ki.autoSleep||120;var r=Rt._first;if((!r||!r._ts)&&ki.autoSleep&&Fi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Fi.sleep()}}},e}(To);Zi(ii.prototype,{_lock:0,_hasPause:0,_forcing:0});var kM=function(e,t,i,n,r,a,o){var l=new Ti(this._pt,e,t,0,1,vh,null,r),c=0,u=0,d,h,f,m,_,p,g,v;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=wa(n)),a&&(v=[i,n],a(v,e,t),i=v[0],n=v[1]),h=i.match(zd)||[];d=zd.exec(n);)m=d[0],_=n.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:m.charAt(1)==="="?ur(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=zd.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(rh.test(n)||g)&&(l.e=0),this._pt=l,l},ph=function(e,t,i,n,r,a,o,l,c,u){Dt(n)&&(n=n(r||0,e,a));var d=e[t],h=i!=="get"?i:Dt(d)?c?e[t.indexOf("set")||!Dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Dt(d)?c?WM:Zg:_h,m;if(Zt(n)&&(~n.indexOf("random(")&&(n=wa(n)),n.charAt(1)==="="&&(m=ur(h,n)+(si(h)||0),(m||m===0)&&(n=m))),!u||h!==n||eh)return!isNaN(h*n)&&n!==""?(m=new Ti(this._pt,e,t,+h||0,n-(h||0),typeof d=="boolean"?YM:Kg,0,f),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!d&&!(t in e)&&Pc(t,n),kM.call(this,e,t,h,n,f,l||ki.stringFilter,c))},BM=function(e,t,i,n,r){if(Dt(e)&&(e=wo(e,r,t,i,n)),!kn(e)||e.style&&e.nodeType||pi(e)||yg(e))return Zt(e)?wo(e,r,t,i,n):e;var a={},o;for(o in e)a[o]=wo(e[o],r,t,i,n);return a},mh=function(e,t,i,n,r,a){var o,l,c,u;if(Ui[e]&&(o=new Ui[e]).init(r,o.rawVars?t[e]:BM(t[e],n,r,a,i),i,n,a)!==!1&&(i._pt=l=new Ti(i._pt,r,e,0,1,o.render,o,0,o.priority),i!==ma))for(c=i._ptLookup[i._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ds,eh,gh=function s(e,t,i){var n=e.vars,r=n.ease,a=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,u=n.runBackwards,d=n.yoyoEase,h=n.keyframes,f=n.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:p,x=e._overwrite==="auto"&&!ih,w=e.timeline,T,M,S,R,b,y,C,L,P,O,z,k,V;if(w&&(!h||!r)&&(r="none"),e._ease=or(r,ga.ease),e._yEase=d?Wg(or(d===!0?r:d,ga.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!w&&!!n.runBackwards,!w||h&&!n.stagger){if(L=p[0]?Ns(p[0]).harness:0,k=L&&n[L.prop],T=Ac(n,oh),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&m?wc:pM),_._lazy=0),a){if(Us(e._startAt=zt.set(p,Zi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&zi(l),startAt:null,delay:0,onUpdate:c&&function(){return qi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ni||!o&&!f)&&e._startAt.revert(wc),o&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(o=!1),S=Zi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&zi(l),immediateRender:o,stagger:0,parent:g},T),k&&(S[L.prop]=k),Us(e._startAt=zt.set(p,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ni?e._startAt.revert(wc):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,vt,vt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&zi(l)||l&&!m,M=0;M<p.length;M++){if(b=p[M],C=b._gsap||ch(p)[M]._gsap,e._ptLookup[M]=O={},$d[C.id]&&Os.length&&Tc(),z=v===p?M:v.indexOf(b),L&&(P=new L).init(b,k||T,e,z,v)!==!1&&(e._pt=R=new Ti(e._pt,b,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(N){O[N]=R}),P.priority&&(y=1)),!L||k)for(S in T)Ui[S]&&(P=mh(S,T,e,z,b,v))?P.priority&&(y=1):O[S]=R=ph.call(e,b,S,"get",T[S],z,v,0,n.stringFilter);e._op&&e._op[M]&&e.kill(b,e._op[M]),x&&e._pt&&(Ds=e,Rt.killTweensOf(b,O,e.globalTime(t)),V=!e.parent,Ds=0),e._pt&&l&&($d[C.id]=1)}y&&yh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!V,h&&t<=0&&w.render(ln,!0,!0)},HM=function(e,t,i,n,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return eh=1,e.vars[t]="+=0",gh(e,o),eh=0,l?bo(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(n||n===0)&&!r?n:u.s+(n||0)+a*u.c,u.c=i-u.s,d.e&&(d.e=Ot(i)+si(d.e)),d.b&&(d.b=u.s+si(d.b))},VM=function(e,t){var i=e[0]?Ns(e[0]).harness:0,n=i&&i.aliases,r,a,o,l;if(!n)return t;r=_a({},t);for(a in n)if(a in r)for(l=n[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},GM=function(e,t,i,n){var r=t.ease||n||"power1.inOut",a,o;if(pi(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},wo=function(e,t,i,n,r){return Dt(e)?e.call(t,i,n,r):Zt(e)&&~e.indexOf("random(")?wa(e):e},qg=lh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",$g={};Mi(qg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return $g[s]=1});var zt=function(s){vg(e,s);function e(i,n,r,a){var o;typeof n=="number"&&(r.duration=n,n=r,r=null),o=s.call(this,a?n:xo(n))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,v=n.parent||Rt,x=(pi(i)||yg(i)?ss(i[0]):"length"in n)?[i]:cn(i),w,T,M,S,R,b,y,C;if(o._targets=x.length?ch(x):bo("GSAP target "+i+" not found. https://gsap.com",!ki.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,m||h||yc(c)||yc(u)){if(n=o.vars,w=o.timeline=new ii({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),w.kill(),w.parent=w._dp=is(o),w._start=0,h||yc(c)||yc(u)){if(S=x.length,y=h&&Ng(h),kn(h))for(R in h)~qg.indexOf(R)&&(C||(C={}),C[R]=h[R]);for(T=0;T<S;T++)M=Ac(n,$g),M.stagger=0,g&&(M.yoyoEase=g),C&&_a(M,C),b=x[T],M.duration=+wo(c,is(o),T,b,x),M.delay=(+wo(u,is(o),T,b,x)||0)-o._delay,!h&&S===1&&M.delay&&(o._delay=u=M.delay,o._start+=u,M.delay=0),w.to(b,M,y?y(T,b,x):0),w._ease=at.none;w.duration()?c=u=0:o.timeline=0}else if(m){xo(Zi(w.vars.defaults,{ease:"none"})),w._ease=or(m.ease||n.ease||"none");var L=0,P,O,z;if(pi(m))m.forEach(function(k){return w.to(x,k,">")}),w.duration();else{M={};for(R in m)R==="ease"||R==="easeEach"||GM(R,m[R],M,m.easeEach);for(R in M)for(P=M[R].sort(function(k,V){return k.t-V.t}),L=0,T=0;T<P.length;T++)O=P[T],z={ease:O.e,duration:(O.t-(T?P[T-1].t:0))/100*c},z[R]=O.v,w.to(x,z,L),L+=z.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return f===!0&&!ih&&(Ds=is(o),Rt.killTweensOf(x),Ds=0),zn(v,is(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(d||!c&&!m&&o._start===Vt(v._time)&&zi(d)&&yM(is(o))&&v.data!=="nested")&&(o._tTime=-vt,o.render(Math.max(0,-u)||0)),p&&Ig(is(o),p),o}var t=e.prototype;return t.render=function(n,r,a){var o=this._time,l=this._tDur,c=this._dur,u=n<0,d=n>l-vt&&!u?l:n<vt?0:n,h,f,m,_,p,g,v,x,w;if(!c)bM(this,n,r,a);else if(d!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+n,r,a);if(h=Vt(d%_),d===l?(m=this._repeat,h=c):(p=Vt(d/_),m=~~p,m&&m===p?(h=c,m--):h>c&&(h=c)),g=this._yoyo&&m&1,g&&(w=this._yEase,h=c-h),p=va(this._tTime,_),h===o&&!a&&this._initted&&m===p)return this._tTime=d,this;m!==p&&(x&&this._yEase&&Xg(x,g),this.vars.repeatRefresh&&!g&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Vt(_*m),!0).invalidate()._lock=0))}if(!this._initted){if(Lg(this,u?n:h,a,r,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(n,r,a)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(w||this._ease)(h/c),this._from&&(this.ratio=v=1-v),!o&&d&&!r&&!p&&(qi(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;x&&x.render(n<0?n:x._dur*x._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(u&&Zd(this,n,r,a),qi(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&qi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Zd(this,n,!0,!0),(n||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Us(this,1),!r&&!(u&&!o)&&(d||o||g)&&(qi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,a,o,l){Mo||Fi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||gh(this,c),u=this._ease(c/this._dur),HM(this,n,r,a,o,u,c,l)?this.resetTo(n,r,a,o,1):(Dc(this,0),this.parent||Rg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?_o(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ni),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Ds&&Ds.vars.overwrite!==!0)._first||_o(this),this.parent&&a!==this.timeline.totalDuration()&&xa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?cn(n):o,c=this._ptLookup,u=this._pt,d,h,f,m,_,p,g;if((!r||r==="all")&&vM(o,l))return r==="all"&&(this._pt=0),_o(this);for(d=this._op=this._op||[],r!=="all"&&(Zt(r)&&(_={},Mi(r,function(v){return _[v]=1}),r=_),r=VM(o,r)),g=o.length;g--;)if(~l.indexOf(o[g])){h=c[g],r==="all"?(d[g]=r,m=h,f={}):(f=d[g]=d[g]||{},m=r);for(_ in m)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Ic(this,p,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&_o(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return yo(1,arguments)},e.delayedCall=function(n,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,r,a){return yo(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,a){return Rt.killTweensOf(n,r,a)},e}(To);Zi(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Mi("staggerTo,staggerFrom,staggerFromTo",function(s){zt[s]=function(){var e=new ii,t=jd.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var _h=function(e,t,i){return e[t]=i},Zg=function(e,t,i){return e[t](i)},WM=function(e,t,i,n){return e[t](n.fp,i)},XM=function(e,t,i){return e.setAttribute(t,i)},Oc=function(e,t){return Dt(e[t])?Zg:Rc(e[t])&&e.setAttribute?XM:_h},Kg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},YM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},vh=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},xh=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},qM=function(e,t,i,n){for(var r=this._pt,a;r;)a=r._next,r.p===n&&r.modifier(e,t,i),r=a},$M=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Ic(this,t,"_pt"):t.dep||(i=1),t=n;return!i},ZM=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},yh=function(e){for(var t=e._pt,i,n,r,a;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=r},Ti=function(){function s(t,i,n,r,a,o,l,c,u){this.t=i,this.s=r,this.c=a,this.p=n,this.r=o||Kg,this.d=l||this,this.set=c||_h,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=ZM,this.m=i,this.mt=r,this.tween=n},s}();Mi(lh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return oh[s]=1});$i.TweenMax=$i.TweenLite=zt;$i.TimelineLite=$i.TimelineMax=ii;Rt=new ii({sortChildren:!1,defaults:ga,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ki.stringFilter=hh;var lr=[],Sc={},KM=[],_g=0,jM=0,Gd=function(e){return(Sc[e]||KM).map(function(t){return t()})},th=function(){var e=Date.now(),t=[];e-_g>2&&(Gd("matchMediaInit"),lr.forEach(function(i){var n=i.queries,r=i.conditions,a,o,l,c;for(o in n)a=Fn.matchMedia(n[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),Gd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),_g=e,Gd("matchMedia"))},jg=function(){function s(t,i){this.selector=i&&Jd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=jM++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,n,r){Dt(i)&&(r=n,n=i,i=Dt);var a=this,o=function(){var c=Et,u=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=Jd(r)),Et=a,d=n.apply(a,arguments),Dt(d)&&a._r.push(d),Et=c,a.selector=u,a.isReverted=!1,d};return a.last=o,i===Dt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var n=Et;Et=null,i(this),Et=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof zt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof ii?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof zt)&&c.revert&&c.revert(i);r._r.forEach(function(u){return u(i,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=lr.length;a--;)lr[a].id===this.id&&lr.splice(a,1)},e.revert=function(i){this.kill(i||{})},s}(),JM=function(){function s(t){this.contexts=[],this.scope=t,Et&&Et.data.push(this)}var e=s.prototype;return e.add=function(i,n,r){kn(i)||(i={matches:i});var a=new jg(0,r||this.scope),o=a.conditions={},l,c,u;Et&&!a.selector&&(a.selector=Et.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(c in i)c==="all"?u=1:(l=Fn.matchMedia(i[c]),l&&(lr.indexOf(a)<0&&lr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(th):l.addEventListener("change",th)));return u&&n(a,function(d){return a.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s}(),Cc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Hg(n)})},timeline:function(e){return new ii(e)},getTweensOf:function(e,t){return Rt.getTweensOf(e,t)},getProperty:function(e,t,i,n){Zt(e)&&(e=cn(e)[0]);var r=Ns(e||{}).get,a=i?Cg:Eg;return i==="native"&&(i=""),e&&(t?a((Ui[t]&&Ui[t].get||r)(e,t,i,n)):function(o,l,c){return a((Ui[o]&&Ui[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=cn(e),e.length>1){var n=e.map(function(u){return mi.quickSetter(u,t,i)}),r=n.length;return function(u){for(var d=r;d--;)n[d](u)}}e=e[0]||{};var a=Ui[t],o=Ns(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;ma._pt=0,d.init(e,i?u+i:u,ma,0,[e]),d.render(1,d),ma._pt&&xh(1,ma)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var n,r=mi.to(e,Zi((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return Rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=or(e.ease,ga.ease)),hg(ga,e||{})},config:function(e){return hg(ki,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!Ui[o]&&!$i[o]&&bo(t+" effect requires "+o+" plugin.")}),kd[t]=function(o,l,c){return i(cn(o),Zi(l||{},r),c)},a&&(ii.prototype[t]=function(o,l,c){return this.add(kd[t](o,kn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){at[e]=or(t)},parseEase:function(e,t){return arguments.length?or(e,t):at},getById:function(e){return Rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ii(e),n,r;for(i.smoothChildTiming=zi(e.smoothChildTiming),Rt.remove(i),i._dp=0,i._time=i._tTime=Rt._time,n=Rt._first;n;)r=n._next,(t||!(!n._dur&&n instanceof zt&&n.vars.onComplete===n._targets[0]))&&zn(i,n,n._start-n._delay),n=r;return zn(Rt,i,0),i},context:function(e,t){return e?new jg(e,t):Et},matchMedia:function(e){return new JM(e)},matchMediaRefresh:function(){return lr.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||th()},addEventListener:function(e,t){var i=Sc[e]||(Sc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Sc[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:PM,wrapYoyo:IM,distribute:Ng,random:Fg,snap:Ug,normalize:RM,getUnit:si,clamp:TM,splitColor:Vg,toArray:cn,selector:Jd,mapRange:kg,pipe:EM,unitize:CM,interpolate:LM,shuffle:Og},install:Sg,effects:kd,ticker:Fi,updateRoot:ii.updateRoot,plugins:Ui,globalTimeline:Rt,core:{PropTween:Ti,globals:Mg,Tween:zt,Timeline:ii,Animation:To,getCache:Ns,_removeLinkedListItem:Ic,reverting:function(){return ni},context:function(e){return e&&Et&&(Et.data.push(e),e._ctx=Et),Et},suppressOverwrites:function(e){return ih=e}}};Mi("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Cc[s]=zt[s]});Fi.add(ii.updateRoot);ma=Cc.to({},{duration:0});var QM=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},eT=function(e,t){var i=e._targets,n,r,a;for(n in t)for(r=i.length;r--;)a=e._ptLookup[r][n],a&&(a=a.d)&&(a._pt&&(a=QM(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[r],n))},Wd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,a){a._onInit=function(o){var l,c;if(Zt(r)&&(l={},Mi(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}eT(o,r)}}}},mi=Cc.registerPlugin({name:"attr",init:function(e,t,i,n,r){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],n,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)ni?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Wd("roundProps",Qd),Wd("modifiers"),Wd("snap",Ug))||Cc;zt.version=ii.version=mi.version="3.13.0";bg=1;nh()&&ya();var tT=at.Power0,iT=at.Power1,nT=at.Power2,sT=at.Power3,rT=at.Power4,aT=at.Linear,oT=at.Quad,lT=at.Cubic,cT=at.Quart,uT=at.Quint,dT=at.Strong,hT=at.Elastic,fT=at.Back,pT=at.SteppedEase,mT=at.Bounce,gT=at.Sine,_T=at.Expo,vT=at.Circ;var Jg,zs,Sa,Ah,mr,xT,Qg,Eh,yT=function(){return typeof window<"u"},as={},pr=180/Math.PI,Ma=Math.PI/180,ba=Math.atan2,e0=1e8,Ch=/([A-Z])/g,wT=/(left|right|width|margin|padding|x)/i,bT=/[\s,\(]\S/,Bn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ST=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},MT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},TT=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},l0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},c0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},AT=function(e,t,i){return e.style[t]=i},ET=function(e,t,i){return e.style.setProperty(t,i)},CT=function(e,t,i){return e._gsap[t]=i},RT=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},PT=function(e,t,i,n,r){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},IT=function(e,t,i,n,r){var a=e._gsap;a[t]=i,a.renderTransform(r,a)},Pt="transform",Bi=Pt+"Origin",LT=function s(e,t){var i=this,n=this.target,r=n.style,a=n._gsap;if(e in as&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Bn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=rs(n,o)}):this.tfm[e]=a.x?a[e]:rs(n,e),e===Bi&&(this.tfm.zOrigin=a.zOrigin);else return Bn.transform.split(",").forEach(function(o){return s.call(i,o,t)});if(this.props.indexOf(Pt)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Bi,t,"")),e=Pt}(r||t)&&this.props.push(e,t,r[e])},u0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},DT=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Ch,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Eh(),(!r||!r.isStart)&&!i[Pt]&&(u0(i),n.zOrigin&&i[Bi]&&(i[Bi]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},d0=function(e,t){var i={target:e,props:[],revert:DT,save:LT};return e._gsap||mi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},h0,Sh=function(e,t){var i=zs.createElementNS?zs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zs.createElement(e);return i&&i.style?i:zs.createElement(e)},un=function s(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Ch,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&s(e,Ta(t)||t,1)||""},t0="O,Moz,ms,Ms,Webkit".split(","),Ta=function(e,t,i){var n=t||mr,r=n.style,a=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(t0[a]+e in r););return a<0?null:(a===3?"ms":a>=0?t0[a]:"")+e},Mh=function(){yT()&&window.document&&(Jg=window,zs=Jg.document,Sa=zs.documentElement,mr=Sh("div")||{style:{}},xT=Sh("div"),Pt=Ta(Pt),Bi=Pt+"Origin",mr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",h0=!!Ta("perspective"),Eh=mi.core.reverting,Ah=1)},i0=function(e){var t=e.ownerSVGElement,i=Sh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),Sa.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),Sa.removeChild(i),r},n0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},f0=function(e){var t,i;try{t=e.getBBox()}catch{t=i0(e),i=1}return t&&(t.width||t.height)||i||(t=i0(e)),t&&!t.width&&!t.x&&!t.y?{x:+n0(e,["x","cx","x1"])||0,y:+n0(e,["y","cy","y1"])||0,width:0,height:0}:t},p0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&f0(e))},gr=function(e,t){if(t){var i=e.style,n;t in as&&t!==Bi&&(t=Pt),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Ch,"-$1").toLowerCase())):i.removeAttribute(t)}},ks=function(e,t,i,n,r,a){var o=new Ti(e._pt,t,i,0,1,a?c0:l0);return e._pt=o,o.b=n,o.e=r,e._props.push(i),o},s0={deg:1,rad:1,turn:1},OT={grid:1,flex:1},Bs=function s(e,t,i,n){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",o=mr.style,l=wT.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=n==="px",f=n==="%",m,_,p,g;if(n===a||!r||s0[n]||s0[a])return r;if(a!=="px"&&!h&&(r=s(e,t,i,"px")),g=e.getCTM&&p0(e),(f||a==="%")&&(as[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[u],Ot(f?r/m*d:r/100*m);if(o[l?"width":"height"]=d+(h?a:n),_=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===zs||!_.appendChild)&&(_=zs.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Fi.time&&!p.uncache)return Ot(r/p.width*d);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+n,m=e[u],v?e.style[t]=v:gr(e,t)}else(f||a==="%")&&!OT[un(_,"display")]&&(o.position=un(e,"position")),_===e&&(o.position="static"),_.appendChild(mr),m=mr[u],_.removeChild(mr),o.position="absolute";return l&&f&&(p=Ns(_),p.time=Fi.time,p.width=_[u]),Ot(h?m*r/d:m&&r?d/m*r:0)},rs=function(e,t,i,n){var r;return Ah||Mh(),t in Bn&&t!=="transform"&&(t=Bn[t],~t.indexOf(",")&&(t=t.split(",")[0])),as[t]&&t!=="transform"?(r=Ro(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Uc(un(e,Bi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Nc[t]&&Nc[t](e,t,i)||un(e,t)||uh(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Bs(e,t,r,i)+i:r},NT=function(e,t,i,n){if(!i||i==="none"){var r=Ta(t,e,1),a=r&&un(e,r,1);a&&a!==i?(t=r,i=a):t==="borderColor"&&(i=un(e,"borderTopColor"))}var o=new Ti(this._pt,e.style,t,0,1,vh),l=0,c=0,u,d,h,f,m,_,p,g,v,x,w,T;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=un(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(_=e.style[t],e.style[t]=n,n=un(e,t)||n,_?e.style[t]=_:gr(e,t)),u=[i,n],hh(u),i=u[0],n=u[1],h=i.match(cr)||[],T=n.match(cr)||[],T.length){for(;d=cr.exec(n);)p=d[0],v=n.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(_=h[c++]||"")&&(f=parseFloat(_)||0,w=_.substr((f+"").length),p.charAt(1)==="="&&(p=ur(f,p)+w),g=parseFloat(p),x=p.substr((g+"").length),l=cr.lastIndex-x.length,x||(x=x||ki.units[t]||w,l===n.length&&(n+=x,o.e+=x)),w!==x&&(f=Bs(e,t,_,x)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:g-f,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?c0:l0;return rh.test(n)&&(o.e=0),this._pt=o,o},r0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},UT=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=r0[i]||i,t[1]=r0[n]||n,t.join(" ")},FT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,a=i._gsap,o,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],as[o]&&(l=1,o=o==="transformOrigin"?Bi:Pt),gr(i,o);l&&(gr(i,Pt),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Ro(i,1),a.uncache=1,u0(n)))}},Nc={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var a=e._pt=new Ti(e._pt,t,i,0,0,FT);return a.u=n,a.pr=-10,a.tween=r,e._props.push(i),1}}},Co=[1,0,0,1,0,0],m0={},g0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},a0=function(e){var t=un(e,Pt);return g0(t)?Co:t.substr(7).match(sh).map(Ot)},Rh=function(e,t){var i=e._gsap||Ns(e),n=e.style,r=a0(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Co:r):(r===Co&&!e.offsetParent&&e!==Sa&&!i.svg&&(l=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Sa.appendChild(e)),r=a0(e),l?n.display=l:gr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Sa.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Th=function(e,t,i,n,r,a){var o=e._gsap,l=r||Rh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],m=l[1],_=l[2],p=l[3],g=l[4],v=l[5],x=t.split(" "),w=parseFloat(x[0])||0,T=parseFloat(x[1])||0,M,S,R,b;i?l!==Co&&(S=f*p-m*_)&&(R=w*(p/S)+T*(-_/S)+(_*v-p*g)/S,b=w*(-m/S)+T*(f/S)-(f*v-m*g)/S,w=R,T=b):(M=f0(e),w=M.x+(~x[0].indexOf("%")?w/100*M.width:w),T=M.y+(~(x[1]||x[0]).indexOf("%")?T/100*M.height:T)),n||n!==!1&&o.smooth?(g=w-c,v=T-u,o.xOffset=d+(g*f+v*_)-g,o.yOffset=h+(g*m+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=w,o.yOrigin=T,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[Bi]="0px 0px",a&&(ks(a,o,"xOrigin",c,w),ks(a,o,"yOrigin",u,T),ks(a,o,"xOffset",d,o.xOffset),ks(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",w+" "+T)},Ro=function(e,t){var i=e._gsap||new fh(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=un(e,Bi)||"0",u,d,h,f,m,_,p,g,v,x,w,T,M,S,R,b,y,C,L,P,O,z,k,V,N,K,I,ae,Ce,qe,$,ee;return u=d=h=_=p=g=v=x=w=0,f=m=1,i.svg=!!(e.getCTM&&p0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pt]!=="none"?l[Pt]:"")),n.scale=n.rotate=n.translate="none"),S=Rh(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),c=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),Th(e,V||c,!!V||i.originIsAbsolute,i.smooth!==!1,S)),T=i.xOrigin||0,M=i.yOrigin||0,S!==Co&&(C=S[0],L=S[1],P=S[2],O=S[3],u=z=S[4],d=k=S[5],S.length===6?(f=Math.sqrt(C*C+L*L),m=Math.sqrt(O*O+P*P),_=C||L?ba(L,C)*pr:0,v=P||O?ba(P,O)*pr+_:0,v&&(m*=Math.abs(Math.cos(v*Ma))),i.svg&&(u-=T-(T*C+M*P),d-=M-(T*L+M*O))):(ee=S[6],qe=S[7],I=S[8],ae=S[9],Ce=S[10],$=S[11],u=S[12],d=S[13],h=S[14],R=ba(ee,Ce),p=R*pr,R&&(b=Math.cos(-R),y=Math.sin(-R),V=z*b+I*y,N=k*b+ae*y,K=ee*b+Ce*y,I=z*-y+I*b,ae=k*-y+ae*b,Ce=ee*-y+Ce*b,$=qe*-y+$*b,z=V,k=N,ee=K),R=ba(-P,Ce),g=R*pr,R&&(b=Math.cos(-R),y=Math.sin(-R),V=C*b-I*y,N=L*b-ae*y,K=P*b-Ce*y,$=O*y+$*b,C=V,L=N,P=K),R=ba(L,C),_=R*pr,R&&(b=Math.cos(R),y=Math.sin(R),V=C*b+L*y,N=z*b+k*y,L=L*b-C*y,k=k*b-z*y,C=V,z=N),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=Ot(Math.sqrt(C*C+L*L+P*P)),m=Ot(Math.sqrt(k*k+ee*ee)),R=ba(z,k),v=Math.abs(R)>2e-4?R*pr:0,w=$?1/($<0?-$:$):0),i.svg&&(V=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!g0(un(e,Pt)),V&&e.setAttribute("transform",V))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=Ot(f),i.scaleY=Ot(m),i.rotation=Ot(_)+o,i.rotationX=Ot(p)+o,i.rotationY=Ot(g)+o,i.skewX=v+o,i.skewY=x+o,i.transformPerspective=w+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[Bi]=Uc(c)),i.xOffset=i.yOffset=0,i.force3D=ki.force3D,i.renderTransform=i.svg?kT:h0?_0:zT,i.uncache=0,i},Uc=function(e){return(e=e.split(" "))[0]+" "+e[1]},wh=function(e,t,i){var n=si(t);return Ot(parseFloat(t)+parseFloat(Bs(e,"x",i+"px",n)))+n},zT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,_0(e,t)},hr="0deg",Eo="0px",fr=") ",_0=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,h=i.skewX,f=i.skewY,m=i.scaleX,_=i.scaleY,p=i.transformPerspective,g=i.force3D,v=i.target,x=i.zOrigin,w="",T=g==="auto"&&e&&e!==1||g===!0;if(x&&(d!==hr||u!==hr)){var M=parseFloat(u)*Ma,S=Math.sin(M),R=Math.cos(M),b;M=parseFloat(d)*Ma,b=Math.cos(M),a=wh(v,a,S*b*-x),o=wh(v,o,-Math.sin(M)*-x),l=wh(v,l,R*b*-x+x)}p!==Eo&&(w+="perspective("+p+fr),(n||r)&&(w+="translate("+n+"%, "+r+"%) "),(T||a!==Eo||o!==Eo||l!==Eo)&&(w+=l!==Eo||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+fr),c!==hr&&(w+="rotate("+c+fr),u!==hr&&(w+="rotateY("+u+fr),d!==hr&&(w+="rotateX("+d+fr),(h!==hr||f!==hr)&&(w+="skew("+h+", "+f+fr),(m!==1||_!==1)&&(w+="scale("+m+", "+_+fr),v.style[Pt]=w||"translate(0, 0)"},kT=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,h=i.scaleY,f=i.target,m=i.xOrigin,_=i.yOrigin,p=i.xOffset,g=i.yOffset,v=i.forceCSS,x=parseFloat(a),w=parseFloat(o),T,M,S,R,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ma,c*=Ma,T=Math.cos(l)*d,M=Math.sin(l)*d,S=Math.sin(l-c)*-h,R=Math.cos(l-c)*h,c&&(u*=Ma,b=Math.tan(c-u),b=Math.sqrt(1+b*b),S*=b,R*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),T*=b,M*=b)),T=Ot(T),M=Ot(M),S=Ot(S),R=Ot(R)):(T=d,R=h,M=S=0),(x&&!~(a+"").indexOf("px")||w&&!~(o+"").indexOf("px"))&&(x=Bs(f,"x",a,"px"),w=Bs(f,"y",o,"px")),(m||_||p||g)&&(x=Ot(x+m-(m*T+_*S)+p),w=Ot(w+_-(m*M+_*R)+g)),(n||r)&&(b=f.getBBox(),x=Ot(x+n/100*b.width),w=Ot(w+r/100*b.height)),b="matrix("+T+","+M+","+S+","+R+","+x+","+w+")",f.setAttribute("transform",b),v&&(f.style[Pt]=b)},BT=function(e,t,i,n,r){var a=360,o=Zt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?pr:1),c=l-n,u=n+c+"deg",d,h;return o&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*e0)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*e0)%a-~~(c/a)*a)),e._pt=h=new Ti(e._pt,t,i,n,c,ST),h.e=u,h.u="deg",e._props.push(i),h},o0=function(e,t){for(var i in t)e[i]=t[i];return e},HT=function(e,t,i){var n=o0({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,d,h,f,m;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Pt]=t,o=Ro(i,1),gr(i,Pt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Pt],a[Pt]=t,o=Ro(i,1),a[Pt]=c);for(l in as)c=n[l],u=o[l],c!==u&&r.indexOf(l)<0&&(f=si(c),m=si(u),d=f!==m?Bs(i,l,c,m):parseFloat(c),h=parseFloat(u),e._pt=new Ti(e._pt,o,l,d,h-d,bh),e._pt.u=m||0,e._props.push(l));o0(o,n)};Mi("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",n="Bottom",r="Left",a=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(o){return e<2?s+o:"border"+o+s});Nc[e>1?"border"+s:s]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(m){return rs(o,m,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(m,_){return f[m]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,f,d)}});var Ph={name:"css",register:Mh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var a=this._props,o=e.style,l=i.vars.startAt,c,u,d,h,f,m,_,p,g,v,x,w,T,M,S,R;Ah||Mh(),this.styles=this.styles||d0(e),R=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Ui[_]&&mh(_,t,i,n,e,r)))){if(f=typeof u,m=Nc[_],f==="function"&&(u=u.call(i,n,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=wa(u)),m)m(this,e,_,u,i)&&(S=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ns.lastIndex=0,ns.test(c)||(p=si(c),g=si(u)),g?p!==g&&(c=Bs(e,_,c,g)+g):p&&(u+=p),this.add(o,"setProperty",c,u,n,r,0,0,_),a.push(_),R.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,n,e,r):l[_],Zt(c)&&~c.indexOf("random(")&&(c=wa(c)),si(c+"")||c==="auto"||(c+=ki.units[_]||si(rs(e,_))||""),(c+"").charAt(1)==="="&&(c=rs(e,_))):c=rs(e,_),h=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),_ in Bn&&(_==="autoAlpha"&&(h===1&&rs(e,"visibility")==="hidden"&&d&&(h=0),R.push("visibility",0,o.visibility),ks(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Bn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in as,x){if(this.styles.save(_),f==="string"&&u.substring(0,6)==="var(--"&&(u=un(e,u.substring(4,u.indexOf(")"))),d=parseFloat(u)),w||(T=e._gsap,T.renderTransform&&!t.parseTransform||Ro(e,t.parseTransform),M=t.smoothOrigin!==!1&&T.smooth,w=this._pt=new Ti(this._pt,o,Pt,0,1,T.renderTransform,T,0,-1),w.dep=1),_==="scale")this._pt=new Ti(this._pt,T,"scaleY",T.scaleY,(v?ur(T.scaleY,v+d):d)-T.scaleY||0,bh),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(Bi,0,o[Bi]),u=UT(u),T.svg?Th(e,u,0,M,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==T.zOrigin&&ks(this,T,"zOrigin",T.zOrigin,g),ks(this,o,_,Uc(c),Uc(u)));continue}else if(_==="svgOrigin"){Th(e,u,1,M,0,this);continue}else if(_ in m0){BT(this,T,_,h,v?ur(h,v+u):u);continue}else if(_==="smoothOrigin"){ks(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){HT(this,u,e);continue}}else _ in o||(_=Ta(_)||_);if(x||(d||d===0)&&(h||h===0)&&!bT.test(u)&&_ in o)p=(c+"").substr((h+"").length),d||(d=0),g=si(u)||(_ in ki.units?ki.units[_]:p),p!==g&&(h=Bs(e,_,c,g)),this._pt=new Ti(this._pt,x?T:o,_,h,(v?ur(h,v+d):d)-h,!x&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?TT:bh),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=MT);else if(_ in o)NT.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,n,r);else if(_!=="parseTransform"){Pc(_,u);continue}x||(_ in o?R.push(_,0,o[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,c||e[_])),a.push(_)}}S&&yh(this)},render:function(e,t){if(t.tween._time||!Eh())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:rs,aliases:Bn,getSetter:function(e,t,i){var n=Bn[t];return n&&n.indexOf(",")<0&&(t=n),t in as&&t!==Bi&&(e._gsap.x||rs(e,"x"))?i&&Qg===i?t==="scale"?RT:CT:(Qg=i||{})&&(t==="scale"?PT:IT):e.style&&!Rc(e.style[t])?AT:~t.indexOf("-")?ET:Oc(e,t)},core:{_removeProperty:gr,_getMatrix:Rh}};mi.utils.checkPrefix=Ta;mi.core.getStyleSaver=d0;(function(s,e,t,i){var n=Mi(s+","+e+","+t,function(r){as[r]=1});Mi(e,function(r){ki.units[r]="deg",m0[r]=1}),Bn[n[13]]=s+","+e,Mi(i,function(r){var a=r.split(":");Bn[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Mi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ki.units[s]="px"});mi.registerPlugin(Ph);var Hs=mi.registerPlugin(Ph)||mi,GE=Hs.core.Tween;function v0(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function VT(s,e,t){return e&&v0(s.prototype,e),t&&v0(s,t),s}var ri,kc,GT,Ki,Vs,Gs,Ea,y0,_r,Io,w0,os,bn,b0,S0=function(){return ri||typeof window<"u"&&(ri=window.gsap)&&ri.registerPlugin&&ri},M0=1,Aa=[],Je=[],Sn=[],Lo=Date.now,Ih=function(e,t){return t},WT=function(){var e=Io.core,t=e.bridge||{},i=e._scrollers,n=e._proxies;i.push.apply(i,Je),n.push.apply(n,Sn),Je=i,Sn=n,Ih=function(a,o){return t[a](o)}},cs=function(e,t){return~Sn.indexOf(e)&&Sn[Sn.indexOf(e)+1][t]},Do=function(e){return!!~w0.indexOf(e)},Ei=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:n!==!1,capture:!!r})},Ai=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Fc="scrollLeft",zc="scrollTop",Lh=function(){return os&&os.isPressed||Je.cache++},Bc=function(e,t){var i=function n(r){if(r||r===0){M0&&(Ki.history.scrollRestoration="manual");var a=os&&os.isPressed;r=n.v=Math.round(r)||(os&&os.iOS?1:0),e(r),n.cacheID=Je.cache,a&&Ih("ss",r)}else(t||Je.cache!==n.cacheID||Ih("ref"))&&(n.cacheID=Je.cache,n.v=e());return n.v+n.offset};return i.offset=0,e&&i},gi={s:Fc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Bc(function(s){return arguments.length?Ki.scrollTo(s,Gt.sc()):Ki.pageXOffset||Vs[Fc]||Gs[Fc]||Ea[Fc]||0})},Gt={s:zc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:gi,sc:Bc(function(s){return arguments.length?Ki.scrollTo(gi.sc(),s):Ki.pageYOffset||Vs[zc]||Gs[zc]||Ea[zc]||0})},Ci=function(e,t){return(t&&t._ctx&&t._ctx.selector||ri.utils.toArray)(e)[0]||(typeof e=="string"&&ri.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},XT=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},ls=function(e,t){var i=t.s,n=t.sc;Do(e)&&(e=Vs.scrollingElement||Gs);var r=Je.indexOf(e),a=n===Gt.sc?1:2;!~r&&(r=Je.push(e)-1),Je[r+a]||Ei(e,"scroll",Lh);var o=Je[r+a],l=o||(Je[r+a]=Bc(cs(e,i),!0)||(Do(e)?n:Bc(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,o||(l.smooth=ri.getProperty(e,"scrollBehavior")==="smooth"),l},Hc=function(e,t,i){var n=e,r=e,a=Lo(),o=a,l=t||50,c=Math.max(500,l*3),u=function(m,_){var p=Lo();_||p-a>l?(r=n,n=m,o=a,a=p):i?n+=m:n=r+(m-r)/(p-o)*(a-o)},d=function(){r=n=i?0:n,o=a=0},h=function(m){var _=o,p=r,g=Lo();return(m||m===0)&&m!==n&&u(m),a===o||g-o>c?0:(n+(i?p:-p))/((i?g:a)-_)*1e3};return{update:u,reset:d,getVelocity:h}},Po=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},x0=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},T0=function(){Io=ri.core.globals().ScrollTrigger,Io&&Io.core&&WT()},A0=function(e){return ri=e||S0(),!kc&&ri&&typeof document<"u"&&document.body&&(Ki=window,Vs=document,Gs=Vs.documentElement,Ea=Vs.body,w0=[Ki,Vs,Gs,Ea],GT=ri.utils.clamp,b0=ri.core.context||function(){},_r="onpointerenter"in Ea?"pointer":"mouse",y0=Nt.isTouch=Ki.matchMedia&&Ki.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ki||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,bn=Nt.eventTypes=("ontouchstart"in Gs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Gs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return M0=0},500),T0(),kc=1),kc};gi.op=Gt;Je.cache=0;var Nt=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(i){kc||A0(ri)||console.warn("Please gsap.registerPlugin(Observer)"),Io||T0();var n=i.tolerance,r=i.dragMinimum,a=i.type,o=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,d=i.onStop,h=i.onStopDelay,f=i.ignore,m=i.wheelSpeed,_=i.event,p=i.onDragStart,g=i.onDragEnd,v=i.onDrag,x=i.onPress,w=i.onRelease,T=i.onRight,M=i.onLeft,S=i.onUp,R=i.onDown,b=i.onChangeX,y=i.onChangeY,C=i.onChange,L=i.onToggleX,P=i.onToggleY,O=i.onHover,z=i.onHoverEnd,k=i.onMove,V=i.ignoreCheck,N=i.isNormalizer,K=i.onGestureStart,I=i.onGestureEnd,ae=i.onWheel,Ce=i.onEnable,qe=i.onDisable,$=i.onClick,ee=i.scrollSpeed,ue=i.capture,ie=i.allowClicks,Le=i.lockAxis,Pe=i.onLockAxis;this.target=o=Ci(o)||Gs,this.vars=i,f&&(f=ri.utils.toArray(f)),n=n||1e-9,r=r||0,m=m||1,ee=ee||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ki.getComputedStyle(Ea).lineHeight)||22);var G,Xe,we,Se,_e,Oe,Ie,H=this,st=0,D=0,A=i.passive||!u&&i.passive!==!1,q=ls(o,gi),J=ls(o,Gt),Q=q(),te=J(),me=~a.indexOf("touch")&&!~a.indexOf("pointer")&&bn[0]==="pointerdown",le=Do(o),ne=o.ownerDocument||Vs,De=[0,0,0],se=[0,0,0],be=0,je=function(){return be=Lo()},ge=function(xe,ot){return(H.event=xe)&&f&&XT(xe.target,f)||ot&&me&&xe.pointerType!=="touch"||V&&V(xe,ot)},ve=function(){H._vx.reset(),H._vy.reset(),Xe.pause(),d&&d(H)},Ne=function(){var xe=H.deltaX=x0(De),ot=H.deltaY=x0(se),de=Math.abs(xe)>=n,Be=Math.abs(ot)>=n;C&&(de||Be)&&C(H,xe,ot,De,se),de&&(T&&H.deltaX>0&&T(H),M&&H.deltaX<0&&M(H),b&&b(H),L&&H.deltaX<0!=st<0&&L(H),st=H.deltaX,De[0]=De[1]=De[2]=0),Be&&(R&&H.deltaY>0&&R(H),S&&H.deltaY<0&&S(H),y&&y(H),P&&H.deltaY<0!=D<0&&P(H),D=H.deltaY,se[0]=se[1]=se[2]=0),(Se||we)&&(k&&k(H),we&&(p&&we===1&&p(H),v&&v(H),we=0),Se=!1),Oe&&!(Oe=!1)&&Pe&&Pe(H),_e&&(ae(H),_e=!1),G=0},We=function(xe,ot,de){De[de]+=xe,se[de]+=ot,H._vx.update(xe),H._vy.update(ot),c?G||(G=requestAnimationFrame(Ne)):Ne()},mt=function(xe,ot){Le&&!Ie&&(H.axis=Ie=Math.abs(xe)>Math.abs(ot)?"x":"y",Oe=!0),Ie!=="y"&&(De[2]+=xe,H._vx.update(xe,!0)),Ie!=="x"&&(se[2]+=ot,H._vy.update(ot,!0)),c?G||(G=requestAnimationFrame(Ne)):Ne()},Ue=function(xe){if(!ge(xe,1)){xe=Po(xe,u);var ot=xe.clientX,de=xe.clientY,Be=ot-H.x,Te=de-H.y,He=H.isDragging;H.x=ot,H.y=de,(He||(Be||Te)&&(Math.abs(H.startX-ot)>=r||Math.abs(H.startY-de)>=r))&&(we=He?2:1,He||(H.isDragging=!0),mt(Be,Te))}},F=H.onPress=function(Re){ge(Re,1)||Re&&Re.button||(H.axis=Ie=null,Xe.pause(),H.isPressed=!0,Re=Po(Re),st=D=0,H.startX=H.x=Re.clientX,H.startY=H.y=Re.clientY,H._vx.reset(),H._vy.reset(),Ei(N?o:ne,bn[1],Ue,A,!0),H.deltaX=H.deltaY=0,x&&x(H))},Z=H.onRelease=function(Re){if(!ge(Re,1)){Ai(N?o:ne,bn[1],Ue,!0);var xe=!isNaN(H.y-H.startY),ot=H.isDragging,de=ot&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Be=Po(Re);!de&&xe&&(H._vx.reset(),H._vy.reset(),u&&ie&&ri.delayedCall(.08,function(){if(Lo()-be>300&&!Re.defaultPrevented){if(Re.target.click)Re.target.click();else if(ne.createEvent){var Te=ne.createEvent("MouseEvents");Te.initMouseEvent("click",!0,!0,Ki,1,Be.screenX,Be.screenY,Be.clientX,Be.clientY,!1,!1,!1,!1,0,null),Re.target.dispatchEvent(Te)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,d&&ot&&!N&&Xe.restart(!0),we&&Ne(),g&&ot&&g(H),w&&w(H,de)}},j=function(xe){return xe.touches&&xe.touches.length>1&&(H.isGesturing=!0)&&K(xe,H.isDragging)},oe=function(){return(H.isGesturing=!1)||I(H)},ce=function(xe){if(!ge(xe)){var ot=q(),de=J();We((ot-Q)*ee,(de-te)*ee,1),Q=ot,te=de,d&&Xe.restart(!0)}},Ve=function(xe){if(!ge(xe)){xe=Po(xe,u),ae&&(_e=!0);var ot=(xe.deltaMode===1?l:xe.deltaMode===2?Ki.innerHeight:1)*m;We(xe.deltaX*ot,xe.deltaY*ot,0),d&&!N&&Xe.restart(!0)}},lt=function(xe){if(!ge(xe)){var ot=xe.clientX,de=xe.clientY,Be=ot-H.x,Te=de-H.y;H.x=ot,H.y=de,Se=!0,d&&Xe.restart(!0),(Be||Te)&&mt(Be,Te)}},ft=function(xe){H.event=xe,O(H)},xt=function(xe){H.event=xe,z(H)},rt=function(xe){return ge(xe)||Po(xe,u)&&$(H)};Xe=H._dc=ri.delayedCall(h||.25,ve).pause(),H.deltaX=H.deltaY=0,H._vx=Hc(0,50,!0),H._vy=Hc(0,50,!0),H.scrollX=q,H.scrollY=J,H.isDragging=H.isGesturing=H.isPressed=!1,b0(this),H.enable=function(Re){return H.isEnabled||(Ei(le?ne:o,"scroll",Lh),a.indexOf("scroll")>=0&&Ei(le?ne:o,"scroll",ce,A,ue),a.indexOf("wheel")>=0&&Ei(o,"wheel",Ve,A,ue),(a.indexOf("touch")>=0&&y0||a.indexOf("pointer")>=0)&&(Ei(o,bn[0],F,A,ue),Ei(ne,bn[2],Z),Ei(ne,bn[3],Z),ie&&Ei(o,"click",je,!0,!0),$&&Ei(o,"click",rt),K&&Ei(ne,"gesturestart",j),I&&Ei(ne,"gestureend",oe),O&&Ei(o,_r+"enter",ft),z&&Ei(o,_r+"leave",xt),k&&Ei(o,_r+"move",lt)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=Se=we=!1,H._vx.reset(),H._vy.reset(),Q=q(),te=J(),Re&&Re.type&&F(Re),Ce&&Ce(H)),H},H.disable=function(){H.isEnabled&&(Aa.filter(function(Re){return Re!==H&&Do(Re.target)}).length||Ai(le?ne:o,"scroll",Lh),H.isPressed&&(H._vx.reset(),H._vy.reset(),Ai(N?o:ne,bn[1],Ue,!0)),Ai(le?ne:o,"scroll",ce,ue),Ai(o,"wheel",Ve,ue),Ai(o,bn[0],F,ue),Ai(ne,bn[2],Z),Ai(ne,bn[3],Z),Ai(o,"click",je,!0),Ai(o,"click",rt),Ai(ne,"gesturestart",j),Ai(ne,"gestureend",oe),Ai(o,_r+"enter",ft),Ai(o,_r+"leave",xt),Ai(o,_r+"move",lt),H.isEnabled=H.isPressed=H.isDragging=!1,qe&&qe(H))},H.kill=H.revert=function(){H.disable();var Re=Aa.indexOf(H);Re>=0&&Aa.splice(Re,1),os===H&&(os=0)},Aa.push(H),N&&Do(o)&&(os=H),H.enable(_)},VT(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Nt.version="3.13.0";Nt.create=function(s){return new Nt(s)};Nt.register=A0;Nt.getAll=function(){return Aa.slice()};Nt.getById=function(s){return Aa.filter(function(e){return e.vars.id===s})[0]};S0()&&ri.registerPlugin(Nt);var ye,Pa,it,bt,Qi,ht,qh,nu,Yo,Bo,No,Vc,_i,ou,Bh,Pi,E0,C0,Ia,W0,Dh,X0,Ri,Hh,Y0,q0,Ws,Vh,$h,La,Zh,su,Gh,Oh,Gc=1,vi=Date.now,Nh=vi(),fn=0,Uo=0,R0=function(e,t,i){var n=Ji(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=n,n?e.substr(6,e.length-7):e},P0=function(e,t){return t&&(!Ji(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},YT=function s(){return Uo&&requestAnimationFrame(s)},I0=function(){return ou=1},L0=function(){return ou=0},Hn=function(e){return e},Fo=function(e){return Math.round(e*1e5)/1e5||0},$0=function(){return typeof window<"u"},Z0=function(){return ye||$0()&&(ye=window.gsap)&&ye.registerPlugin&&ye},Sr=function(e){return!!~qh.indexOf(e)},K0=function(e){return(e==="Height"?Zh:it["inner"+e])||Qi["client"+e]||ht["client"+e]},j0=function(e){return cs(e,"getBoundingClientRect")||(Sr(e)?function(){return iu.width=it.innerWidth,iu.height=Zh,iu}:function(){return us(e)})},qT=function(e,t,i){var n=i.d,r=i.d2,a=i.a;return(a=cs(e,"getBoundingClientRect"))?function(){return a()[n]}:function(){return(t?K0(r):e["client"+r])||0}},$T=function(e,t){return!t||~Sn.indexOf(e)?j0(e):function(){return iu}},Vn=function(e,t){var i=t.s,n=t.d2,r=t.d,a=t.a;return Math.max(0,(i="scroll"+n)&&(a=cs(e,i))?a()-j0(e)()[r]:Sr(e)?(Qi[i]||ht[i])-K0(n):e[i]-e["offset"+n])},Wc=function(e,t){for(var i=0;i<Ia.length;i+=3)(!t||~t.indexOf(Ia[i+1]))&&e(Ia[i],Ia[i+1],Ia[i+2])},Ji=function(e){return typeof e=="string"},xi=function(e){return typeof e=="function"},zo=function(e){return typeof e=="number"},vr=function(e){return typeof e=="object"},Oo=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Uh=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},Ca=Math.abs,J0="left",Q0="top",Kh="right",jh="bottom",yr="width",wr="height",Ho="Right",Vo="Left",Go="Top",Wo="Bottom",Wt="padding",dn="margin",Oa="Width",Jh="Height",Kt="px",hn=function(e){return it.getComputedStyle(e)},ZT=function(e){var t=hn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},D0=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},us=function(e,t){var i=t&&hn(e)[Bh]!=="matrix(1, 0, 0, 1, 0, 0)"&&ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return i&&i.progress(0).kill(),n},ru=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},e_=function(e){var t=[],i=e.labels,n=e.duration(),r;for(r in i)t.push(i[r]/n);return t},KT=function(e){return function(t){return ye.utils.snap(e_(e),t)}},Qh=function(e){var t=ye.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(n,r){return n-r});return i?function(n,r,a){a===void 0&&(a=.001);var o;if(!r)return t(n);if(r>0){for(n-=a,o=0;o<i.length;o++)if(i[o]>=n)return i[o];return i[o-1]}else for(o=i.length,n+=a;o--;)if(i[o]<=n)return i[o];return i[0]}:function(n,r,a){a===void 0&&(a=.001);var o=t(n);return!r||Math.abs(o-n)<a||o-n<0==r<0?o:t(r<0?n-e:n+e)}},jT=function(e){return function(t,i){return Qh(e_(e))(t,i.direction)}},Xc=function(e,t,i,n){return i.split(",").forEach(function(r){return e(t,r,n)})},ei=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:!n,capture:!!r})},Qt=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Yc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},O0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},qc={toggleActions:"play",anticipatePin:0},au={top:0,left:0,center:.5,bottom:1,right:1},Jc=function(e,t){if(Ji(e)){var i=e.indexOf("="),n=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(n*=t/100),e=e.substr(0,i-1)),e=n+(e in au?au[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},$c=function(e,t,i,n,r,a,o,l){var c=r.startColor,u=r.endColor,d=r.fontSize,h=r.indent,f=r.fontWeight,m=bt.createElement("div"),_=Sr(i)||cs(i,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=_?ht:i,v=e.indexOf("start")!==-1,x=v?c:u,w="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(w+=(n===Gt?Kh:jh)+":"+(a+parseFloat(h))+"px;"),o&&(w+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=w,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+n.op.d2],Qc(m,0,n,v),m},Qc=function(e,t,i,n){var r={display:"block"},a=i[n?"os2":"p2"],o=i[n?"p2":"os2"];e._isFlipped=n,r[i.a+"Percent"]=n?-100:0,r[i.a]=n?"1px":0,r["border"+a+Oa]=1,r["border"+o+Oa]=0,r[i.p]=t+"px",ye.set(e,r)},Qe=[],Wh={},qo,N0=function(){return vi()-fn>34&&(qo||(qo=requestAnimationFrame(ds)))},Ra=function(){(!Ri||!Ri.isPressed||Ri.startX>ht.clientWidth)&&(Je.cache++,Ri?qo||(qo=requestAnimationFrame(ds)):ds(),fn||Tr("scrollStart"),fn=vi())},Fh=function(){q0=it.innerWidth,Y0=it.innerHeight},ko=function(e){Je.cache++,(e===!0||!_i&&!X0&&!bt.fullscreenElement&&!bt.webkitFullscreenElement&&(!Hh||q0!==it.innerWidth||Math.abs(it.innerHeight-Y0)>it.innerHeight*.25))&&nu.restart(!0)},Mr={},JT=[],t_=function s(){return Qt(Ke,"scrollEnd",s)||xr(!0)},Tr=function(e){return Mr[e]&&Mr[e].map(function(t){return t()})||JT},ji=[],i_=function(e){for(var t=0;t<ji.length;t+=5)(!e||ji[t+4]&&ji[t+4].query===e)&&(ji[t].style.cssText=ji[t+1],ji[t].getBBox&&ji[t].setAttribute("transform",ji[t+2]||""),ji[t+3].uncache=1)},ef=function(e,t){var i;for(Pi=0;Pi<Qe.length;Pi++)i=Qe[Pi],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));su=!0,t&&i_(t),t||Tr("revert")},n_=function(e,t){Je.cache++,(t||!Ii)&&Je.forEach(function(i){return xi(i)&&i.cacheID++&&(i.rec=0)}),Ji(e)&&(it.history.scrollRestoration=$h=e)},Ii,br=0,U0,QT=function(){if(U0!==br){var e=U0=br;requestAnimationFrame(function(){return e===br&&xr(!0)})}},s_=function(){ht.appendChild(La),Zh=!Ri&&La.offsetHeight||it.innerHeight,ht.removeChild(La)},F0=function(e){return Yo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},xr=function(e,t){if(Qi=bt.documentElement,ht=bt.body,qh=[it,bt,Qi,ht],fn&&!e&&!su){ei(Ke,"scrollEnd",t_);return}s_(),Ii=Ke.isRefreshing=!0,Je.forEach(function(n){return xi(n)&&++n.cacheID&&(n.rec=n())});var i=Tr("refreshInit");W0&&Ke.sort(),t||ef(),Je.forEach(function(n){xi(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),Qe.slice(0).forEach(function(n){return n.refresh()}),su=!1,Qe.forEach(function(n){if(n._subPinOffset&&n.pin){var r=n.vars.horizontal?"offsetWidth":"offsetHeight",a=n.pin[r];n.revert(!0,1),n.adjustPinSpacing(n.pin[r]-a),n.refresh()}}),Gh=1,F0(!0),Qe.forEach(function(n){var r=Vn(n.scroller,n._dir),a=n.vars.end==="max"||n._endClamp&&n.end>r,o=n._startClamp&&n.start>=r;(a||o)&&n.setPositions(o?r-1:n.start,a?Math.max(o?r:n.start+1,r):n.end,!0)}),F0(!1),Gh=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),Je.forEach(function(n){xi(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),n_($h,1),nu.pause(),br++,Ii=2,ds(2),Qe.forEach(function(n){return xi(n.vars.onRefresh)&&n.vars.onRefresh(n)}),Ii=Ke.isRefreshing=!1,Tr("refresh")},Xh=0,eu=1,Xo,ds=function(e){if(e===2||!Ii&&!su){Ke.isUpdating=!0,Xo&&Xo.update(0);var t=Qe.length,i=vi(),n=i-Nh>=50,r=t&&Qe[0].scroll();if(eu=Xh>r?-1:1,Ii||(Xh=r),n&&(fn&&!ou&&i-fn>200&&(fn=0,Tr("scrollEnd")),No=Nh,Nh=i),eu<0){for(Pi=t;Pi-- >0;)Qe[Pi]&&Qe[Pi].update(0,n);eu=1}else for(Pi=0;Pi<t;Pi++)Qe[Pi]&&Qe[Pi].update(0,n);Ke.isUpdating=!1}qo=0},Yh=[J0,Q0,jh,Kh,dn+Wo,dn+Ho,dn+Go,dn+Vo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],tu=Yh.concat([yr,wr,"boxSizing","max"+Oa,"max"+Jh,"position",dn,Wt,Wt+Go,Wt+Ho,Wt+Wo,Wt+Vo]),eA=function(e,t,i){Da(i);var n=e._gsap;if(n.spacerIsNative)Da(n.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},zh=function(e,t,i,n){if(!e._gsap.swappedIn){for(var r=Yh.length,a=t.style,o=e.style,l;r--;)l=Yh[r],a[l]=i[l];a.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(a.display="inline-block"),o[jh]=o[Kh]="auto",a.flexBasis=i.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[yr]=ru(e,gi)+Kt,a[wr]=ru(e,Gt)+Kt,a[Wt]=o[dn]=o[Q0]=o[J0]="0",Da(n),o[yr]=o["max"+Oa]=i[yr],o[wr]=o["max"+Jh]=i[wr],o[Wt]=i[Wt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},tA=/([A-Z])/g,Da=function(e){if(e){var t=e.t.style,i=e.length,n=0,r,a;for((e.t._gsap||ye.core.getCache(e.t)).uncache=1;n<i;n+=2)a=e[n+1],r=e[n],a?t[r]=a:t[r]&&t.removeProperty(r.replace(tA,"-$1").toLowerCase())}},Zc=function(e){for(var t=tu.length,i=e.style,n=[],r=0;r<t;r++)n.push(tu[r],i[tu[r]]);return n.t=e,n},iA=function(e,t,i){for(var n=[],r=e.length,a=i?8:0,o;a<r;a+=2)o=e[a],n.push(o,o in t?t[o]:e[a+1]);return n.t=e.t,n},iu={left:0,top:0},z0=function(e,t,i,n,r,a,o,l,c,u,d,h,f,m){xi(e)&&(e=e(l)),Ji(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Jc("0"+e.substr(3),i):0));var _=f?f.time():0,p,g,v;if(f&&f.seek(0),isNaN(e)||(e=+e),zo(e))f&&(e=ye.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&Qc(o,i,n,!0);else{xi(t)&&(t=t(l));var x=(e||"0").split(" "),w,T,M,S;v=Ci(t,l)||ht,w=us(v)||{},(!w||!w.left&&!w.top)&&hn(v).display==="none"&&(S=v.style.display,v.style.display="block",w=us(v),S?v.style.display=S:v.style.removeProperty("display")),T=Jc(x[0],w[n.d]),M=Jc(x[1]||"0",i),e=w[n.p]-c[n.p]-u+T+r-M,o&&Qc(o,M,n,i-M<20||o._isStart&&M>20),i-=i-M}if(m&&(l[m]=e||-.001,e<0&&(e=0)),a){var R=e+i,b=a._isStart;p="scroll"+n.d2,Qc(a,R,n,b&&R>20||!b&&(d?Math.max(ht[p],Qi[p]):a.parentNode[p])<=R+1),d&&(c=us(o),d&&(a.style[n.op.p]=c[n.op.p]-n.op.m-a._offset+Kt))}return f&&v&&(p=us(v),f.seek(h),g=us(v),f._caScrollDist=p[n.p]-g[n.p],e=e/f._caScrollDist*h),f&&f.seek(_),f?e:Math.round(e)},nA=/(webkit|moz|length|cssText|inset)/i,k0=function(e,t,i,n){if(e.parentNode!==t){var r=e.style,a,o;if(t===ht){e._stOrig=r.cssText,o=hn(e);for(a in o)!+a&&!nA.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=i,r.left=n}else r.cssText=e._stOrig;ye.core.getCache(e).uncache=1,t.appendChild(e)}},r_=function(e,t,i){var n=t,r=n;return function(a){var o=Math.round(e());return o!==n&&o!==r&&Math.abs(o-n)>3&&Math.abs(o-r)>3&&(a=o,i&&i()),r=n,n=Math.round(a),n}},Kc=function(e,t,i){var n={};n[t.p]="+="+i,ye.set(e,n)},B0=function(e,t){var i=ls(e,t),n="_scroll"+t.p2,r=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,m={};c=c||i();var _=r_(i,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[n]=o,l.inherit=!1,l.modifiers=m,m[n]=function(){return _(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){Je.cache++,a.tween&&ds()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=ye.to(e,l),h};return e[n]=i,i.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},ei(e,"wheel",i.wheelHandler),Ke.isTouch&&ei(e,"touchmove",i.wheelHandler),r},Ke=function(){function s(t,i){Pa||s.register(ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Vh(this),this.init(t,i)}var e=s.prototype;return e.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Uo){this.update=this.refresh=this.kill=Hn;return}i=D0(Ji(i)||zo(i)||i.nodeType?{trigger:i}:i,qc);var r=i,a=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,d=r.scrub,h=r.trigger,f=r.pin,m=r.pinSpacing,_=r.invalidateOnRefresh,p=r.anticipatePin,g=r.onScrubComplete,v=r.onSnapComplete,x=r.once,w=r.snap,T=r.pinReparent,M=r.pinSpacer,S=r.containerAnimation,R=r.fastScrollEnd,b=r.preventOverlaps,y=i.horizontal||i.containerAnimation&&i.horizontal!==!1?gi:Gt,C=!d&&d!==0,L=Ci(i.scroller||it),P=ye.core.getCache(L),O=Sr(L),z=("pinType"in i?i.pinType:cs(L,"pinType")||O&&"fixed")==="fixed",k=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],V=C&&i.toggleActions.split(" "),N="markers"in i?i.markers:qc.markers,K=O?0:parseFloat(hn(L)["border"+y.p2+Oa])||0,I=this,ae=i.onRefreshInit&&function(){return i.onRefreshInit(I)},Ce=qT(L,O,y),qe=$T(L,O),$=0,ee=0,ue=0,ie=ls(L,y),Le,Pe,G,Xe,we,Se,_e,Oe,Ie,H,st,D,A,q,J,Q,te,me,le,ne,De,se,be,je,ge,ve,Ne,We,mt,Ue,F,Z,j,oe,ce,Ve,lt,ft,xt;if(I._startClamp=I._endClamp=!1,I._dir=y,p*=45,I.scroller=L,I.scroll=S?S.time.bind(S):ie,Xe=ie(),I.vars=i,n=n||i.animation,"refreshPriority"in i&&(W0=1,i.refreshPriority===-9999&&(Xo=I)),P.tweenScroll=P.tweenScroll||{top:B0(L,Gt),left:B0(L,gi)},I.tweenTo=Le=P.tweenScroll[y.p],I.scrubDuration=function(de){j=zo(de)&&de,j?Z?Z.duration(de):Z=ye.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:j,paused:!0,onComplete:function(){return g&&g(I)}}):(Z&&Z.progress(1).kill(),Z=0)},n&&(n.vars.lazy=!1,n._initted&&!I.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),I.animation=n.pause(),n.scrollTrigger=I,I.scrubDuration(d),Ue=0,l||(l=n.vars.id)),w&&((!vr(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in ht.style&&ye.set(O?[ht,Qi]:L,{scrollBehavior:"auto"}),Je.forEach(function(de){return xi(de)&&de.target===(O?bt.scrollingElement||Qi:L)&&(de.smooth=!1)}),G=xi(w.snapTo)?w.snapTo:w.snapTo==="labels"?KT(n):w.snapTo==="labelsDirectional"?jT(n):w.directional!==!1?function(de,Be){return Qh(w.snapTo)(de,vi()-ee<500?0:Be.direction)}:ye.utils.snap(w.snapTo),oe=w.duration||{min:.1,max:2},oe=vr(oe)?Bo(oe.min,oe.max):Bo(oe,oe),ce=ye.delayedCall(w.delay||j/2||.1,function(){var de=ie(),Be=vi()-ee<500,Te=Le.tween;if((Be||Math.abs(I.getVelocity())<10)&&!Te&&!ou&&$!==de){var He=(de-Se)/q,Ct=n&&!C?n.totalProgress():He,et=Be?0:(Ct-F)/(vi()-No)*1e3||0,Mt=ye.utils.clamp(-He,1-He,Ca(et/2)*et/.185),jt=He+(w.inertia===!1?0:Mt),Tt,yt,E=w,B=E.onStart,W=E.onInterrupt,X=E.onComplete;if(Tt=G(jt,I),zo(Tt)||(Tt=jt),yt=Math.max(0,Math.round(Se+Tt*q)),de<=_e&&de>=Se&&yt!==de){if(Te&&!Te._initted&&Te.data<=Ca(yt-de))return;w.inertia===!1&&(Mt=Tt-He),Le(yt,{duration:oe(Ca(Math.max(Ca(jt-Ct),Ca(Tt-Ct))*.185/et/.05||0)),ease:w.ease||"power3",data:Ca(yt-de),onInterrupt:function(){return ce.restart(!0)&&W&&W(I)},onComplete:function(){I.update(),$=ie(),n&&!C&&(Z?Z.resetTo("totalProgress",Tt,n._tTime/n._tDur):n.progress(Tt)),Ue=F=n&&!C?n.totalProgress():I.progress,v&&v(I),X&&X(I)}},de,Mt*q,yt-de-Mt*q),B&&B(I,Le.tween)}}else I.isActive&&$!==de&&ce.restart(!0)}).pause()),l&&(Wh[l]=I),h=I.trigger=Ci(h||f!==!0&&f),xt=h&&h._gsap&&h._gsap.stRevert,xt&&(xt=xt(I)),f=f===!0?h:Ci(f),Ji(o)&&(o={targets:h,className:o}),f&&(m===!1||m===dn||(m=!m&&f.parentNode&&f.parentNode.style&&hn(f.parentNode).display==="flex"?!1:Wt),I.pin=f,Pe=ye.core.getCache(f),Pe.spacer?J=Pe.pinState:(M&&(M=Ci(M),M&&!M.nodeType&&(M=M.current||M.nativeElement),Pe.spacerIsNative=!!M,M&&(Pe.spacerState=Zc(M))),Pe.spacer=me=M||bt.createElement("div"),me.classList.add("pin-spacer"),l&&me.classList.add("pin-spacer-"+l),Pe.pinState=J=Zc(f)),i.force3D!==!1&&ye.set(f,{force3D:!0}),I.spacer=me=Pe.spacer,mt=hn(f),je=mt[m+y.os2],ne=ye.getProperty(f),De=ye.quickSetter(f,y.a,Kt),zh(f,me,mt),te=Zc(f)),N){D=vr(N)?D0(N,O0):O0,H=$c("scroller-start",l,L,y,D,0),st=$c("scroller-end",l,L,y,D,0,H),le=H["offset"+y.op.d2];var rt=Ci(cs(L,"content")||L);Oe=this.markerStart=$c("start",l,rt,y,D,le,0,S),Ie=this.markerEnd=$c("end",l,rt,y,D,le,0,S),S&&(ft=ye.quickSetter([Oe,Ie],y.a,Kt)),!z&&!(Sn.length&&cs(L,"fixedMarkers")===!0)&&(ZT(O?ht:L),ye.set([H,st],{force3D:!0}),ve=ye.quickSetter(H,y.a,Kt),We=ye.quickSetter(st,y.a,Kt))}if(S){var Re=S.vars.onUpdate,xe=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){I.update(0,0,1),Re&&Re.apply(S,xe||[])})}if(I.previous=function(){return Qe[Qe.indexOf(I)-1]},I.next=function(){return Qe[Qe.indexOf(I)+1]},I.revert=function(de,Be){if(!Be)return I.kill(!0);var Te=de!==!1||!I.enabled,He=_i;Te!==I.isReverted&&(Te&&(Ve=Math.max(ie(),I.scroll.rec||0),ue=I.progress,lt=n&&n.progress()),Oe&&[Oe,Ie,H,st].forEach(function(Ct){return Ct.style.display=Te?"none":"block"}),Te&&(_i=I,I.update(Te)),f&&(!T||!I.isActive)&&(Te?eA(f,me,J):zh(f,me,hn(f),ge)),Te||I.update(Te),_i=He,I.isReverted=Te)},I.refresh=function(de,Be,Te,He){if(!((_i||!I.enabled)&&!Be)){if(f&&de&&fn){ei(s,"scrollEnd",t_);return}!Ii&&ae&&ae(I),_i=I,Le.tween&&!Te&&(Le.tween.kill(),Le.tween=0),Z&&Z.pause(),_&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren&&n.getChildren(!0,!0,!1).forEach(function(ct){return ct.vars.immediateRender&&ct.render(0,!0,!0)})),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Ct=Ce(),et=qe(),Mt=S?S.duration():Vn(L,y),jt=q<=.01||!q,Tt=0,yt=He||0,E=vr(Te)?Te.end:i.end,B=i.endTrigger||h,W=vr(Te)?Te.start:i.start||(i.start===0||!h?0:f?"0 0":"0 100%"),X=I.pinnedContainer=i.pinnedContainer&&Ci(i.pinnedContainer,I),Y=h&&Math.max(0,Qe.indexOf(I))||0,re=Y,he,pe,Ee,ke,Ae,Me,ut,kt,oi,wi,Ye,Fe,Tn;for(N&&vr(Te)&&(Fe=ye.getProperty(H,y.p),Tn=ye.getProperty(st,y.p));re-- >0;)Me=Qe[re],Me.end||Me.refresh(0,1)||(_i=I),ut=Me.pin,ut&&(ut===h||ut===f||ut===X)&&!Me.isReverted&&(wi||(wi=[]),wi.unshift(Me),Me.revert(!0,!0)),Me!==Qe[re]&&(Y--,re--);for(xi(W)&&(W=W(I)),W=R0(W,"start",I),Se=z0(W,h,Ct,y,ie(),Oe,H,I,et,K,z,Mt,S,I._startClamp&&"_startClamp")||(f?-.001:0),xi(E)&&(E=E(I)),Ji(E)&&!E.indexOf("+=")&&(~E.indexOf(" ")?E=(Ji(W)?W.split(" ")[0]:"")+E:(Tt=Jc(E.substr(2),Ct),E=Ji(W)?W:(S?ye.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,Se):Se)+Tt,B=h)),E=R0(E,"end",I),_e=Math.max(Se,z0(E||(B?"100% 0":Mt),B,Ct,y,ie()+Tt,Ie,st,I,et,K,z,Mt,S,I._endClamp&&"_endClamp"))||-.001,Tt=0,re=Y;re--;)Me=Qe[re],ut=Me.pin,ut&&Me.start-Me._pinPush<=Se&&!S&&Me.end>0&&(he=Me.end-(I._startClamp?Math.max(0,Me.start):Me.start),(ut===h&&Me.start-Me._pinPush<Se||ut===X)&&isNaN(W)&&(Tt+=he*(1-Me.progress)),ut===f&&(yt+=he));if(Se+=Tt,_e+=Tt,I._startClamp&&(I._startClamp+=Tt),I._endClamp&&!Ii&&(I._endClamp=_e||-.001,_e=Math.min(_e,Vn(L,y))),q=_e-Se||(Se-=.01)&&.001,jt&&(ue=ye.utils.clamp(0,1,ye.utils.normalize(Se,_e,Ve))),I._pinPush=yt,Oe&&Tt&&(he={},he[y.a]="+="+Tt,X&&(he[y.p]="-="+ie()),ye.set([Oe,Ie],he)),f&&!(Gh&&I.end>=Vn(L,y)))he=hn(f),ke=y===Gt,Ee=ie(),se=parseFloat(ne(y.a))+yt,!Mt&&_e>1&&(Ye=(O?bt.scrollingElement||Qi:L).style,Ye={style:Ye,value:Ye["overflow"+y.a.toUpperCase()]},O&&hn(ht)["overflow"+y.a.toUpperCase()]!=="scroll"&&(Ye.style["overflow"+y.a.toUpperCase()]="scroll")),zh(f,me,he),te=Zc(f),pe=us(f,!0),kt=z&&ls(L,ke?gi:Gt)(),m?(ge=[m+y.os2,q+yt+Kt],ge.t=me,re=m===Wt?ru(f,y)+q+yt:0,re&&(ge.push(y.d,re+Kt),me.style.flexBasis!=="auto"&&(me.style.flexBasis=re+Kt)),Da(ge),X&&Qe.forEach(function(ct){ct.pin===X&&ct.vars.pinSpacing!==!1&&(ct._subPinOffset=!0)}),z&&ie(Ve)):(re=ru(f,y),re&&me.style.flexBasis!=="auto"&&(me.style.flexBasis=re+Kt)),z&&(Ae={top:pe.top+(ke?Ee-Se:kt)+Kt,left:pe.left+(ke?kt:Ee-Se)+Kt,boxSizing:"border-box",position:"fixed"},Ae[yr]=Ae["max"+Oa]=Math.ceil(pe.width)+Kt,Ae[wr]=Ae["max"+Jh]=Math.ceil(pe.height)+Kt,Ae[dn]=Ae[dn+Go]=Ae[dn+Ho]=Ae[dn+Wo]=Ae[dn+Vo]="0",Ae[Wt]=he[Wt],Ae[Wt+Go]=he[Wt+Go],Ae[Wt+Ho]=he[Wt+Ho],Ae[Wt+Wo]=he[Wt+Wo],Ae[Wt+Vo]=he[Wt+Vo],Q=iA(J,Ae,T),Ii&&ie(0)),n?(oi=n._initted,Dh(1),n.render(n.duration(),!0,!0),be=ne(y.a)-se+q+yt,Ne=Math.abs(q-be)>1,z&&Ne&&Q.splice(Q.length-2,2),n.render(0,!0,!0),oi||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Dh(0)):be=q,Ye&&(Ye.value?Ye.style["overflow"+y.a.toUpperCase()]=Ye.value:Ye.style.removeProperty("overflow-"+y.a));else if(h&&ie()&&!S)for(pe=h.parentNode;pe&&pe!==ht;)pe._pinOffset&&(Se-=pe._pinOffset,_e-=pe._pinOffset),pe=pe.parentNode;wi&&wi.forEach(function(ct){return ct.revert(!1,!0)}),I.start=Se,I.end=_e,Xe=we=Ii?Ve:ie(),!S&&!Ii&&(Xe<Ve&&ie(Ve),I.scroll.rec=0),I.revert(!1,!0),ee=vi(),ce&&($=-1,ce.restart(!0)),_i=0,n&&C&&(n._initted||lt)&&n.progress()!==lt&&n.progress(lt||0,!0).render(n.time(),!0,!0),(jt||ue!==I.progress||S||_||n&&!n._initted)&&(n&&!C&&(n._initted||ue||n.vars.immediateRender!==!1)&&n.totalProgress(S&&Se<-.001&&!ue?ye.utils.normalize(Se,_e,0):ue,!0),I.progress=jt||(Xe-Se)/q===ue?0:ue),f&&m&&(me._pinOffset=Math.round(I.progress*be)),Z&&Z.invalidate(),isNaN(Fe)||(Fe-=ye.getProperty(H,y.p),Tn-=ye.getProperty(st,y.p),Kc(H,y,Fe),Kc(Oe,y,Fe-(He||0)),Kc(st,y,Tn),Kc(Ie,y,Tn-(He||0))),jt&&!Ii&&I.update(),u&&!Ii&&!A&&(A=!0,u(I),A=!1)}},I.getVelocity=function(){return(ie()-we)/(vi()-No)*1e3||0},I.endAnimation=function(){Oo(I.callbackAnimation),n&&(Z?Z.progress(1):n.paused()?C||Oo(n,I.direction<0,1):Oo(n,n.reversed()))},I.labelToScroll=function(de){return n&&n.labels&&(Se||I.refresh()||Se)+n.labels[de]/n.duration()*q||0},I.getTrailing=function(de){var Be=Qe.indexOf(I),Te=I.direction>0?Qe.slice(0,Be).reverse():Qe.slice(Be+1);return(Ji(de)?Te.filter(function(He){return He.vars.preventOverlaps===de}):Te).filter(function(He){return I.direction>0?He.end<=Se:He.start>=_e})},I.update=function(de,Be,Te){if(!(S&&!Te&&!de)){var He=Ii===!0?Ve:I.scroll(),Ct=de?0:(He-Se)/q,et=Ct<0?0:Ct>1?1:Ct||0,Mt=I.progress,jt,Tt,yt,E,B,W,X,Y;if(Be&&(we=Xe,Xe=S?ie():He,w&&(F=Ue,Ue=n&&!C?n.totalProgress():et)),p&&f&&!_i&&!Gc&&fn&&(!et&&Se<He+(He-we)/(vi()-No)*p?et=1e-4:et===1&&_e>He+(He-we)/(vi()-No)*p&&(et=.9999)),et!==Mt&&I.enabled){if(jt=I.isActive=!!et&&et<1,Tt=!!Mt&&Mt<1,W=jt!==Tt,B=W||!!et!=!!Mt,I.direction=et>Mt?1:-1,I.progress=et,B&&!_i&&(yt=et&&!Mt?0:et===1?1:Mt===1?2:3,C&&(E=!W&&V[yt+1]!=="none"&&V[yt+1]||V[yt],Y=n&&(E==="complete"||E==="reset"||E in n))),b&&(W||Y)&&(Y||d||!n)&&(xi(b)?b(I):I.getTrailing(b).forEach(function(Ee){return Ee.endAnimation()})),C||(Z&&!_i&&!Gc?(Z._dp._time-Z._start!==Z._time&&Z.render(Z._dp._time-Z._start),Z.resetTo?Z.resetTo("totalProgress",et,n._tTime/n._tDur):(Z.vars.totalProgress=et,Z.invalidate().restart())):n&&n.totalProgress(et,!!(_i&&(ee||de)))),f){if(de&&m&&(me.style[m+y.os2]=je),!z)De(Fo(se+be*et));else if(B){if(X=!de&&et>Mt&&_e+1>He&&He+1>=Vn(L,y),T)if(!de&&(jt||X)){var re=us(f,!0),he=He-Se;k0(f,ht,re.top+(y===Gt?he:0)+Kt,re.left+(y===Gt?0:he)+Kt)}else k0(f,me);Da(jt||X?Q:te),Ne&&et<1&&jt||De(se+(et===1&&!X?be:0))}}w&&!Le.tween&&!_i&&!Gc&&ce.restart(!0),o&&(W||x&&et&&(et<1||!Oh))&&Yo(o.targets).forEach(function(Ee){return Ee.classList[jt||x?"add":"remove"](o.className)}),a&&!C&&!de&&a(I),B&&!_i?(C&&(Y&&(E==="complete"?n.pause().totalProgress(1):E==="reset"?n.restart(!0).pause():E==="restart"?n.restart(!0):n[E]()),a&&a(I)),(W||!Oh)&&(c&&W&&Uh(I,c),k[yt]&&Uh(I,k[yt]),x&&(et===1?I.kill(!1,1):k[yt]=0),W||(yt=et===1?1:3,k[yt]&&Uh(I,k[yt]))),R&&!jt&&Math.abs(I.getVelocity())>(zo(R)?R:2500)&&(Oo(I.callbackAnimation),Z?Z.progress(1):Oo(n,E==="reverse"?1:!et,1))):C&&a&&!_i&&a(I)}if(We){var pe=S?He/S.duration()*(S._caScrollDist||0):He;ve(pe+(H._isFlipped?1:0)),We(pe)}ft&&ft(-He/S.duration()*(S._caScrollDist||0))}},I.enable=function(de,Be){I.enabled||(I.enabled=!0,ei(L,"resize",ko),O||ei(L,"scroll",Ra),ae&&ei(s,"refreshInit",ae),de!==!1&&(I.progress=ue=0,Xe=we=$=ie()),Be!==!1&&I.refresh())},I.getTween=function(de){return de&&Le?Le.tween:Z},I.setPositions=function(de,Be,Te,He){if(S){var Ct=S.scrollTrigger,et=S.duration(),Mt=Ct.end-Ct.start;de=Ct.start+Mt*de/et,Be=Ct.start+Mt*Be/et}I.refresh(!1,!1,{start:P0(de,Te&&!!I._startClamp),end:P0(Be,Te&&!!I._endClamp)},He),I.update()},I.adjustPinSpacing=function(de){if(ge&&de){var Be=ge.indexOf(y.d)+1;ge[Be]=parseFloat(ge[Be])+de+Kt,ge[1]=parseFloat(ge[1])+de+Kt,Da(ge)}},I.disable=function(de,Be){if(I.enabled&&(de!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,Be||Z&&Z.pause(),Ve=0,Pe&&(Pe.uncache=1),ae&&Qt(s,"refreshInit",ae),ce&&(ce.pause(),Le.tween&&Le.tween.kill()&&(Le.tween=0)),!O)){for(var Te=Qe.length;Te--;)if(Qe[Te].scroller===L&&Qe[Te]!==I)return;Qt(L,"resize",ko),O||Qt(L,"scroll",Ra)}},I.kill=function(de,Be){I.disable(de,Be),Z&&!Be&&Z.kill(),l&&delete Wh[l];var Te=Qe.indexOf(I);Te>=0&&Qe.splice(Te,1),Te===Pi&&eu>0&&Pi--,Te=0,Qe.forEach(function(He){return He.scroller===I.scroller&&(Te=1)}),Te||Ii||(I.scroll.rec=0),n&&(n.scrollTrigger=null,de&&n.revert({kill:!1}),Be||n.kill()),Oe&&[Oe,Ie,H,st].forEach(function(He){return He.parentNode&&He.parentNode.removeChild(He)}),Xo===I&&(Xo=0),f&&(Pe&&(Pe.uncache=1),Te=0,Qe.forEach(function(He){return He.pin===f&&Te++}),Te||(Pe.spacer=0)),i.onKill&&i.onKill(I)},Qe.push(I),I.enable(!1,!1),xt&&xt(I),n&&n.add&&!q){var ot=I.update;I.update=function(){I.update=ot,Je.cache++,Se||_e||I.refresh()},ye.delayedCall(.01,I.update),q=.01,Se=_e=0}else I.refresh();f&&QT()},s.register=function(i){return Pa||(ye=i||Z0(),$0()&&window.document&&s.enable(),Pa=Uo),Pa},s.defaults=function(i){if(i)for(var n in i)qc[n]=i[n];return qc},s.disable=function(i,n){Uo=0,Qe.forEach(function(a){return a[n?"kill":"disable"](i)}),Qt(it,"wheel",Ra),Qt(bt,"scroll",Ra),clearInterval(Vc),Qt(bt,"touchcancel",Hn),Qt(ht,"touchstart",Hn),Xc(Qt,bt,"pointerdown,touchstart,mousedown",I0),Xc(Qt,bt,"pointerup,touchend,mouseup",L0),nu.kill(),Wc(Qt);for(var r=0;r<Je.length;r+=3)Yc(Qt,Je[r],Je[r+1]),Yc(Qt,Je[r],Je[r+2])},s.enable=function(){if(it=window,bt=document,Qi=bt.documentElement,ht=bt.body,ye&&(Yo=ye.utils.toArray,Bo=ye.utils.clamp,Vh=ye.core.context||Hn,Dh=ye.core.suppressOverwrites||Hn,$h=it.history.scrollRestoration||"auto",Xh=it.pageYOffset||0,ye.core.globals("ScrollTrigger",s),ht)){Uo=1,La=document.createElement("div"),La.style.height="100vh",La.style.position="absolute",s_(),YT(),Nt.register(ye),s.isTouch=Nt.isTouch,Ws=Nt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Hh=Nt.isTouch===1,ei(it,"wheel",Ra),qh=[it,bt,Qi,ht],ye.matchMedia?(s.matchMedia=function(c){var u=ye.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},ye.addEventListener("matchMediaInit",function(){return ef()}),ye.addEventListener("matchMediaRevert",function(){return i_()}),ye.addEventListener("matchMedia",function(){xr(0,1),Tr("matchMedia")}),ye.matchMedia().add("(orientation: portrait)",function(){return Fh(),Fh})):console.warn("Requires GSAP 3.11.0 or later"),Fh(),ei(bt,"scroll",Ra);var i=ht.hasAttribute("style"),n=ht.style,r=n.borderTopStyle,a=ye.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=us(ht),Gt.m=Math.round(o.top+Gt.sc())||0,gi.m=Math.round(o.left+gi.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),i||(ht.setAttribute("style",""),ht.removeAttribute("style")),Vc=setInterval(N0,250),ye.delayedCall(.5,function(){return Gc=0}),ei(bt,"touchcancel",Hn),ei(ht,"touchstart",Hn),Xc(ei,bt,"pointerdown,touchstart,mousedown",I0),Xc(ei,bt,"pointerup,touchend,mouseup",L0),Bh=ye.utils.checkPrefix("transform"),tu.push(Bh),Pa=vi(),nu=ye.delayedCall(.2,xr).pause(),Ia=[bt,"visibilitychange",function(){var c=it.innerWidth,u=it.innerHeight;bt.hidden?(E0=c,C0=u):(E0!==c||C0!==u)&&ko()},bt,"DOMContentLoaded",xr,it,"load",xr,it,"resize",ko],Wc(ei),Qe.forEach(function(c){return c.enable(0,1)}),l=0;l<Je.length;l+=3)Yc(Qt,Je[l],Je[l+1]),Yc(Qt,Je[l],Je[l+2])}},s.config=function(i){"limitCallbacks"in i&&(Oh=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Vc)||(Vc=n)&&setInterval(N0,n),"ignoreMobileResize"in i&&(Hh=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Wc(Qt)||Wc(ei,i.autoRefreshEvents||"none"),X0=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,n){var r=Ci(i),a=Je.indexOf(r),o=Sr(r);~a&&Je.splice(a,o?6:2),n&&(o?Sn.unshift(it,n,ht,n,Qi,n):Sn.unshift(r,n))},s.clearMatchMedia=function(i){Qe.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},s.isInViewport=function(i,n,r){var a=(Ji(i)?Ci(i):i).getBoundingClientRect(),o=a[r?yr:wr]*n||0;return r?a.right-o>0&&a.left+o<it.innerWidth:a.bottom-o>0&&a.top+o<it.innerHeight},s.positionInViewport=function(i,n,r){Ji(i)&&(i=Ci(i));var a=i.getBoundingClientRect(),o=a[r?yr:wr],l=n==null?o/2:n in au?au[n]*o:~n.indexOf("%")?parseFloat(n)*o/100:parseFloat(n)||0;return r?(a.left+l)/it.innerWidth:(a.top+l)/it.innerHeight},s.killAll=function(i){if(Qe.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),i!==!0){var n=Mr.killAll||[];Mr={},n.forEach(function(r){return r()})}},s}();Ke.version="3.13.0";Ke.saveStyles=function(s){return s?Yo(s).forEach(function(e){if(e&&e.style){var t=ji.indexOf(e);t>=0&&ji.splice(t,5),ji.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ye.core.getCache(e),Vh())}}):ji};Ke.revert=function(s,e){return ef(!s,e)};Ke.create=function(s,e){return new Ke(s,e)};Ke.refresh=function(s){return s?ko(!0):(Pa||Ke.register())&&xr(!0)};Ke.update=function(s){return++Je.cache&&ds(s===!0?2:0)};Ke.clearScrollMemory=n_;Ke.maxScroll=function(s,e){return Vn(s,e?gi:Gt)};Ke.getScrollFunc=function(s,e){return ls(Ci(s),e?gi:Gt)};Ke.getById=function(s){return Wh[s]};Ke.getAll=function(){return Qe.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Ke.isScrolling=function(){return!!fn};Ke.snapDirectional=Qh;Ke.addEventListener=function(s,e){var t=Mr[s]||(Mr[s]=[]);~t.indexOf(e)||t.push(e)};Ke.removeEventListener=function(s,e){var t=Mr[s],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Ke.batch=function(s,e){var t=[],i={},n=e.interval||.016,r=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=ye.delayedCall(n,function(){u(d,h),d=[],h=[]}).pause();return function(m){d.length||f.restart(!0),d.push(m.trigger),h.push(m),r<=d.length&&f.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&xi(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return xi(r)&&(r=r(),ei(Ke,"refresh",function(){return r=e.batchMax()})),Yo(s).forEach(function(l){var c={};for(o in i)c[o]=i[o];c.trigger=l,t.push(Ke.create(c))}),t};var H0=function(e,t,i,n){return t>n?e(n):t<0&&e(0),i>n?(n-t)/(i-t):i<0?t/(t-i):1},kh=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Nt.isTouch?" pinch-zoom":""):"none",e===Qi&&s(ht,t)},jc={auto:1,scroll:1},sA=function(e){var t=e.event,i=e.target,n=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||ye.core.getCache(r),o=vi(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r!==ht&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(jc[(l=hn(r)).overflowY]||jc[l.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==i&&!Sr(r)&&(jc[(l=hn(r)).overflowY]||jc[l.overflowX]),a._isScrollT=o}(a._isScroll||n==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},a_=function(e,t,i,n){return Nt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&sA,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&ei(bt,Nt.eventTypes[0],G0,!1,!0)},onDisable:function(){return Qt(bt,Nt.eventTypes[0],G0,!0)}})},rA=/(input|label|select|textarea)/i,V0,G0=function(e){var t=rA.test(e.target.tagName);(t||V0)&&(e._gsapAllow=!0,V0=t)},aA=function(e){vr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,n=t.momentum,r=t.allowNestedScroll,a=t.onRelease,o,l,c=Ci(e.target)||Qi,u=ye.core.globals().ScrollSmoother,d=u&&u.get(),h=Ws&&(e.content&&Ci(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=ls(c,Gt),m=ls(c,gi),_=1,p=(Nt.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,g=0,v=xi(n)?function(){return n(o)}:function(){return n||2.8},x,w,T=a_(c,e.type,!0,r),M=function(){return w=!1},S=Hn,R=Hn,b=function(){l=Vn(c,Gt),R=Bo(Ws?1:0,l),i&&(S=Bo(0,Vn(c,gi))),x=br},y=function(){h._gsap.y=Fo(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},C=function(){if(w){requestAnimationFrame(M);var N=Fo(o.deltaY/2),K=R(f.v-N);if(h&&K!==f.v+f.offset){f.offset=K-f.v;var I=Fo((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",h._gsap.y=I+"px",f.cacheID=Je.cache,ds()}return!0}f.offset&&y(),w=!0},L,P,O,z,k=function(){b(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return h&&ye.set(h,{y:"+=0"}),e.ignoreCheck=function(V){return Ws&&V.type==="touchmove"&&C(V)||_>1.05&&V.type!=="touchstart"||o.isGesturing||V.touches&&V.touches.length>1},e.onPress=function(){w=!1;var V=_;_=Fo((it.visualViewport&&it.visualViewport.scale||1)/p),L.pause(),V!==_&&kh(c,_>1.01?!0:i?!1:"x"),P=m(),O=f(),b(),x=br},e.onRelease=e.onGestureStart=function(V,N){if(f.offset&&y(),!N)z.restart(!0);else{Je.cache++;var K=v(),I,ae;i&&(I=m(),ae=I+K*.05*-V.velocityX/.227,K*=H0(m,I,ae,Vn(c,gi)),L.vars.scrollX=S(ae)),I=f(),ae=I+K*.05*-V.velocityY/.227,K*=H0(f,I,ae,Vn(c,Gt)),L.vars.scrollY=R(ae),L.invalidate().duration(K).play(.01),(Ws&&L.vars.scrollY>=l||I>=l-1)&&ye.to({},{onUpdate:k,duration:K})}a&&a(V)},e.onWheel=function(){L._ts&&L.pause(),vi()-g>1e3&&(x=0,g=vi())},e.onChange=function(V,N,K,I,ae){if(br!==x&&b(),N&&i&&m(S(I[2]===N?P+(V.startX-V.x):m()+N-I[1])),K){f.offset&&y();var Ce=ae[2]===K,qe=Ce?O+V.startY-V.y:f()+K-ae[1],$=R(qe);Ce&&qe!==$&&(O+=$-qe),f($)}(K||N)&&ds()},e.onEnable=function(){kh(c,i?!1:"x"),Ke.addEventListener("refresh",k),ei(it,"resize",k),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),T.enable()},e.onDisable=function(){kh(c,!0),Qt(it,"resize",k),Ke.removeEventListener("refresh",k),T.kill()},e.lockAxis=e.lockAxis!==!1,o=new Nt(e),o.iOS=Ws,Ws&&!f()&&f(1),Ws&&ye.ticker.add(Hn),z=o._dc,L=ye.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:r_(f,f(),function(){return L.pause()})},onUpdate:ds,onComplete:z.vars.onComplete}),o};Ke.sort=function(s){if(xi(s))return Qe.sort(s);var e=it.pageYOffset||0;return Ke.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),Qe.sort(s||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Ke.observe=function(s){return new Nt(s)};Ke.normalizeScroll=function(s){if(typeof s>"u")return Ri;if(s===!0&&Ri)return Ri.enable();if(s===!1){Ri&&Ri.kill(),Ri=s;return}var e=s instanceof Nt?s:aA(s);return Ri&&Ri.target===e.target&&Ri.kill(),Sr(e.target)&&(Ri=e),e};Ke.core={_getVelocityProp:Hc,_inputObserver:a_,_scrollers:Je,_proxies:Sn,bridge:{ss:function(){fn||Tr("scrollStart"),fn=vi()},ref:function(){return _i}}};Z0()&&ye.registerPlugin(Ke);var hs=class{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(n=>{let r=this.resolveName(n);this.callbacks[r.namespace]instanceof Object||(this.callbacks[r.namespace]={}),this.callbacks[r.namespace][r.value]instanceof Array||(this.callbacks[r.namespace][r.value]=[]),this.callbacks[r.namespace][r.value].push(t)}),this)}off(e){return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(i=>{let n=this.resolveName(i);if(n.namespace!=="base"&&n.value==="")delete this.callbacks[n.namespace];else if(n.namespace==="base")for(let r in this.callbacks)this.callbacks[r]instanceof Object&&this.callbacks[r][n.value]instanceof Array&&(delete this.callbacks[r][n.value],Object.keys(this.callbacks[r]).length===0&&delete this.callbacks[r]);else this.callbacks[n.namespace]instanceof Object&&this.callbacks[n.namespace][n.value]instanceof Array&&(delete this.callbacks[n.namespace][n.value],Object.keys(this.callbacks[n.namespace]).length===0&&delete this.callbacks[n.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;let i=null,n=null,r=t instanceof Array?t:[],a=this.resolveNames(e);if(a=this.resolveName(a[0]),a.namespace==="base")for(let o in this.callbacks)this.callbacks[o]instanceof Object&&this.callbacks[o][a.value]instanceof Array&&this.callbacks[o][a.value].forEach(function(l){n=l.apply(this,r),typeof i>"u"&&(i=n)});else if(this.callbacks[a.namespace]instanceof Object){if(a.value==="")return console.warn("wrong name"),this;this.callbacks[a.namespace][a.value].forEach(function(o){n=o.apply(this,r),typeof i>"u"&&(i=n)})}return i}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){let t={},i=e.split(".");return t.original=e,t.value=i[0],t.namespace="base",i.length>1&&i[1]!==""&&(t.namespace=i[1]),t}};var $o=class extends hs{constructor(e){super(),this.container=e,this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")})}};var Zo=class extends hs{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,window.requestAnimationFrame(()=>{this.tick()})}tick(){let e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.trigger("tick"),window.requestAnimationFrame(()=>{this.tick()})}};var Ko=class{constructor(e,t){this.experience=e,this.sizes=e.sizes,this.scene=e.scene,this.canvas=e.canvas,this.containerAttribute=t.getAttribute("data-3d"),this.setInstance()}setInstance(){let e=this.sizes.width/this.sizes.height;this.instance=new Xt(60,e,.1,1e4),this.instance.position.set(5,4,6),this.instance.lookAt(0,0,0),this.scene.add(this.instance)}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){}};var jo=class{constructor(e){this.experience=e,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.setInstance()}setInstance(){this.instance=new jl({canvas:this.canvas,antialias:!0,alpha:!0}),this.instance.outputColorSpace=At,this.instance.toneMapping=Id,this.instance.toneMappingExposure=1,this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=Pd,this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}update(){this.instance.render(this.scene,this.camera.instance)}};var Jo=class{constructor(e,t){this.experience=e,this.scene=this.experience.scene,this.resources=this.experience.resources,this.containerAttribute=t.getAttribute("data-3d"),this.addThreePointLights(),this.containerAttribute,console.log(this.scene.children)}addThreePointLights(){let e=new ha(16777215,2);e.position.set(4,6,5),e.target.position.set(0,0,0),e.castShadow=!0,e.shadow.mapSize.width=4096,e.shadow.mapSize.height=4096,e.shadow.bias=.005,e.shadow.normalBias=.2,e.shadow.radius=60,e.shadow.camera.left=-8,e.shadow.camera.right=8,e.shadow.camera.top=8,e.shadow.camera.bottom=-8,e.shadow.camera.near=1,e.shadow.camera.far=40,this.scene.add(e),this.scene.add(e.target);let t=new fc(8947848,2);this.scene.add(t)}};function oA(s){let e=2166136261;for(let t=0;t<s.length;t++)e=Math.imul(e^s.charCodeAt(t),16777619)>>>0;return e>>>0}function lA(s){let e=s>>>0;return function(){e|=0,e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function cA(s){return 1-Math.pow(1-s,3)}var Qo=class{constructor(e){Va(this,"stoneLayerDefs",[{name:"layer2",sizeScale:1},{name:"layer3",sizeScale:1},{name:"layer7",sizeScale:1},{name:"layer8",sizeScale:1}]);Va(this,"stoneLayerIndices",[2,3,7,8]);Va(this,"stoneLayerMap",{2:0,3:1,7:2,8:3});Va(this,"stoneAnimation",{startTime:null,perInstanceDelays:[],finalPositions:[],duration:.33,heightAbove:8,layerStates:[],groundFadeDuration:.33});this.stoneSizeMultiplier=1.5,this.stoneSeed=3405691582,this.experience=e,this.scene=this.experience.scene,this.resources=this.experience.resources,this.resource=this.resources.items.liningModel,this.liningTexture=this.resources.items.liningTexture,this.layerMeshes=[],this.stonePlanes=[],this.setupLayers()}resetLayerAnimationState(){this.stoneAnimation.layerStates=[];let e=0;this.stoneAnimation.layerStates.push({type:"ground",index:11,start:e,end:e+this.stoneAnimation.groundFadeDuration,done:!1,progress:0}),e+=this.stoneAnimation.groundFadeDuration;for(let t=10;t>=1;t--)this.stoneAnimation.layerStates.push({type:this.stoneLayerIndices.includes(t)?"stone":"normal",index:t,start:e,end:e+this.stoneAnimation.duration,done:!1,progress:0}),e+=this.stoneAnimation.duration}setupLayers(){this.setupTexture(this.liningTexture),this.resource.scene&&!this.scene.children.includes(this.resource.scene)&&this.scene.add(this.resource.scene);let e=[];this.resource.scene.traverse(t=>{t.isMesh&&e.push(t)}),e.forEach(t=>{this.scene.children.includes(t)||this.scene.add(t)});for(let t=11;t>=1;t--){let i=`layer${t}`,n=this.scene.children.find(r=>r.name===i);n&&(n.userData.targetY=n.position.y,n.castShadow=!1,n.receiveShadow=!1,t===2||t===3||t===7||t===8?(n.visible=!1,n.castShadow=!0,n.receiveShadow=!0):t===1?(n.visible=!0,n.material=new wn({color:230732,roughness:.7,metalness:.1,transparent:!1,opacity:1}),n.castShadow=!0,n.receiveShadow=!0):t===4||t===6||t===9?(n.visible=!0,n.material=new wn({color:230732,roughness:.7,metalness:.1,transparent:!1,opacity:0}),n.castShadow=!0,n.receiveShadow=!0):(n.visible=!0,n.material=new wn({map:this.liningTexture,color:16777215,roughness:.7,metalness:.1,transparent:!1,opacity:0}),n.castShadow=!0,n.receiveShadow=!0),this.scene.add(n),this.layerMeshes.push(n))}this.generateStoneLayerPlanes()}generateStoneLayers(){}refreshLayers(){this.stonePlanes.forEach(e=>{this.scene.remove(e),e.geometry.dispose(),e.material.dispose()}),this.stonePlanes=[],this.generateStoneLayerPlanes()}setupTexture(e){e&&(e.flipY=!1,e.encoding=At)}update(){this.stoneAnimation.startTime||(this.stoneAnimation.startTime=performance.now()*.001,this.resetLayerAnimationState());let e=performance.now()*.001-this.stoneAnimation.startTime,t=this.stoneAnimation.layerStates[0],i=this.scene.children.find(r=>r.name==="layer11");if(i){let r=(e-t.start)/(t.end-t.start);r=Math.max(0,Math.min(1,r)),i.material.transparent=!0,i.material.opacity=r,r>=1&&(t.done=!0)}for(let r=1;r<this.stoneAnimation.layerStates.length;r++){let a=this.stoneAnimation.layerStates[r],o=this.scene.children.find(c=>c.name===`layer${a.index}`),l=(e-a.start)/(a.end-a.start);if(l=Math.max(0,Math.min(1,l)),a.progress=l,o){o.material.transparent=!0;let c=.3,u=a.end-a.start||this.stoneAnimation.duration,d=0;if(u>0){let f=l*u;d=Math.min(1,f/c)}o.material.opacity=d,o.position.y=o.userData.targetY+(1-l)*this.stoneAnimation.heightAbove,l>=1&&(o.position.y=o.userData.targetY,a.done=!0);let h=.5;o.castShadow=d>h,o.receiveShadow=!0}}for(let r=0;r<this.stonePlanes.length;r++){let a=this.stoneLayerIndices[r],o=this.stoneAnimation.layerStates.find(w=>w.index===a);if(!o)continue;let l=this.stonePlanes[r],c=.5,u=o.progress;l.castShadow=!0,l.receiveShadow=!1,l.material&&(l.material.transparent=!0,l.material.opacity=Math.max(0,Math.min(1,u)));let d=this.stoneAnimation.perInstanceDelays[r]||[],h=this.stoneAnimation.finalPositions[r]||[],f=this.stoneAnimation.perInstanceRotations&&this.stoneAnimation.perInstanceRotations[r]||[],m=l.userData.maxDelay||1,_=o.progress,p=!1,g=new Yt().setFromAxisAngle(new U(0,0,1),Math.PI/4),v=new Yt().setFromAxisAngle(new U(0,1,0),Math.PI/4),x=g.clone().multiply(v);for(let w=0;w<l.count;w++){let M=(d[w]||0)/m,R=.6/Math.max(1e-4,this.stoneAnimation.duration),b=Math.min(1,M+R),y=h[w];if(!y)continue;let C,L=!1;if(_<M)C=y.y+this.stoneAnimation.heightAbove,l._lastY?.[w]!==C&&(L=!0);else if(_>=b||_>=1)C=y.y,l._lastY?.[w]!==C&&(L=!0);else{let P=(_-M)/(b-M);P=Math.max(0,Math.min(1,P)),P=cA(P),C=y.y+(1-P)*this.stoneAnimation.heightAbove,l._lastY?.[w]!==C&&(L=!0)}if(L){let P=new U(y.x,C,y.z),O=new Ge,z=f[w]||0,k=new Yt().setFromAxisAngle(new U(0,0,1),z),V=x.clone().multiply(k);O.compose(P,V,new U(1,1,1)),l.setMatrixAt(w,O),p=!0,l._lastY||(l._lastY=[]),l._lastY[w]=C}}if(p&&(l.instanceMatrix.needsUpdate=!0),o.progress>=1&&!(l.userData&&l.userData._finalized)){let w=h.length;l.count!==w&&console.debug("[Lining] instance count mismatch",{count:l.count,finalsLen:w});for(let T=0;T<Math.min(l.count,w);T++){let M=new U(h[T].x,h[T].y,h[T].z),S=new Ge,R=this.stoneAnimation.perInstanceRotations&&this.stoneAnimation.perInstanceRotations[r]&&this.stoneAnimation.perInstanceRotations[r][T]||0,b=new Yt().setFromAxisAngle(new U(0,0,1),R),y=x.clone().multiply(b);S.compose(M,y,new U(1,1,1)),l.setMatrixAt(T,S)}l.instanceMatrix.needsUpdate=!0;try{var n=Array.isArray(h)?h.length:void 0;console.debug("[Lining] finalizing layer",a,"stoneIdx",r,"seed",this.stoneSeed,"allocatedInstances",l.count||"(unknown)","finalPositions",n)}catch(T){console.warn("[Lining] failed to log finalizing diagnostics",T)}if(typeof l.count=="number"&&typeof w=="number"&&l.count!==w&&(console.warn("[Lining] instance count mismatch \u2014 correcting instancedMesh.count",l.count,"->",w),l.count=w),l.material){l.material.opacity=1,l.material.transparent=!1,l.material.depthWrite=!0;try{l.material.side=Li}catch{}l.material.alphaTest=Math.max(l.material.alphaTest||0,.1),l.material.needsUpdate=!0}l._lastY=null,l.userData||(l.userData={}),l.userData._finalized=!0}}}destroy(){this.gui&&this.gui.destroy(),this.guiContainer&&this.guiContainer.parentNode&&this.guiContainer.parentNode.removeChild(this.guiContainer),this.stonePlanes.forEach(e=>{this.scene.remove(e),e.geometry.dispose(),e.material.dispose()}),this.stonePlanes=[],this.layerMeshes.forEach(e=>{this.scene.remove(e)})}generateStoneLayerPlanes(){this.stoneAnimation.perInstanceDelays=[],this.stoneAnimation.finalPositions=[],this.stonePlanes.forEach(t=>this.scene.remove(t)),this.stonePlanes=[];let e={layer2:{x:4,z:4,y:.180905,color:65280},layer3:{x:4,z:4,y:.092328,color:255},layer7:{x:4,z:4,y:.180905,color:16711935},layer8:{x:4,z:4,y:.092328,color:16746496}};this.stoneLayerDefs.forEach((t,i)=>{let n=this.scene.children.find(C=>C.name===t.name);if(!n){console.warn(`Stone layer mesh not found: ${t.name}`);return}let r=n.position.clone(),a=e[t.name],o=.98,l={x:a.x*o,y:a.y,z:a.z*o,color:a.color},c=3,u=l.y/c*.98*t.sizeScale*this.stoneSizeMultiplier,d=Math.max(1,Math.floor(l.x/u)),h=Math.max(1,Math.floor(l.z/u));d<1&&(d=1),h<1&&(h=1);let f=new oa(u,u),m=new wn({map:this.resources.items.stoneTexture,transparent:!0,roughness:.7,metalness:.1,depthWrite:!1,opacity:0,side:Li,alphaTest:.05}),_=d*c*h,p=new rr(f,m,_);p.castShadow=!0,p.receiveShadow=!1,p.frustumCulled=!1;let g=new Yt().setFromAxisAngle(new U(0,0,1),Math.PI/4),v=new Yt().setFromAxisAngle(new U(0,1,0),Math.PI/4),x=g.clone().multiply(v),w=oA(`${t.name}:${this.stoneSeed}:${i}`),T=lA(w),M=[],S=[],R=[];for(let C=0;C<c;C++)for(let L=0;L<d;L++)for(let P=0;P<h;P++){let O=d>1?L/(d-1):.5,z=c>1?C/(c-1):.5,k=h>1?P/(h-1):.5,V=r.x-l.x/2+O*l.x,N=r.y-l.y/2+z*l.y,K=r.z-l.z/2+k*l.z,I=u*.1,ae=(qe,$,ee)=>Math.max($,Math.min(ee,qe));V+=ae((T()-.5)*I,-(V-(r.x-l.x/2)),r.x+l.x/2-V),N+=ae((T()-.5)*I,-(N-(r.y-l.y/2)),r.y+l.y/2-N),K+=ae((T()-.5)*I,-(K-(r.z-l.z/2)),r.z+l.z/2-K),N=Math.min(N,r.y+l.y/2-u*.5);let Ce=T();M.push(Ce),S.push({x:V,y:N,z:K}),R.push(T()*Math.PI*2)}let b=Math.max.apply(null,M);p.userData.maxDelay=b;let y=S.length;if(y!==p.count)if(y<p.count)p.count=y,console.debug("[Lining] adjusted instancedMesh.count down",{name:t.name,gridX:d,gridY:c,gridZ:h,original:_,adjusted:p.count,finalsLen:y});else{console.warn("[Lining] finalPositions exceed instanced allocation; recreating mesh",{name:t.name,allocated:p.count,needed:y});let C=new rr(f,m,y);C.castShadow=p.castShadow,C.receiveShadow=p.receiveShadow,C.frustumCulled=p.frustumCulled,this.scene.remove(p),this.scene.add(C),p=C}for(let C=0;C<S.length;C++){let L=S[C],P=R[C]||0,O=new U(L.x,L.y+this.stoneAnimation.heightAbove,L.z),z=new Ge,k=new Yt().setFromAxisAngle(new U(0,0,1),P),V=x.clone().multiply(k);z.compose(O,V,new U(1,1,1)),p.setMatrixAt(C,z)}try{let C=this.resources.items.stoneTexture;C&&(C.wrapS=In,C.wrapT=In,C.needsUpdate=!0);let L=new Float32Array(S.length*2),P=new Float32Array(S.length*3);for(let z=0;z<S.length;z++){let k=(T()-.5)*.8,V=(T()-.5)*.8;L[z*2]=k,L[z*2+1]=V;let N=.75+T()*.25;P[z*3]=N,P[z*3+1]=N,P[z*3+2]=N}p.geometry.setAttribute("instanceUvOffset",new Nn(L,2)),p.geometry.setAttribute("instanceColor",new Nn(P,3));let O=p.material;if(O&&typeof O.onBeforeCompile=="function"){let z="__cw_instanced_uv_injected__";O[z]||(O.onBeforeCompile=k=>{try{let V=k.vertexShader;/varying\s+vec2\s+vUv\s*;/.test(V)||(V=`varying vec2 vUv;
`+V),/attribute\s+vec2\s+instanceUvOffset\s*;/.test(V)||(V=V.replace(/void\s+main\s*\(\s*\)\s*{/,`attribute vec2 instanceUvOffset;
attribute vec3 instanceColor;
varying vec3 vInstanceColor;

void main() {`)),V.indexOf("#include <uv_vertex>")!==-1?V=V.replace("#include <uv_vertex>",`#include <uv_vertex>
    vUv += instanceUvOffset;
    vInstanceColor = instanceColor;`):V.indexOf("vUv = uv;")!==-1?V=V.replace("vUv = uv;",`vUv = uv + instanceUvOffset;
    vInstanceColor = instanceColor;`):V=V.replace(/\n}\s*$/,`
    vUv += instanceUvOffset;
    vInstanceColor = instanceColor;
}
`),k.vertexShader=V;let N=k.fragmentShader;/varying\s+vec3\s+vInstanceColor\s*;/.test(N)||(/varying\s+vec2\s+vUv\s*;/.test(N)?N=N.replace(/varying\s+vec2\s+vUv\s*;/,`varying vec2 vUv;
varying vec3 vInstanceColor;`):N=`varying vec3 vInstanceColor;
`+N),N.indexOf("vec4 diffuseColor = vec4( diffuse, opacity );")!==-1&&(N=N.replace("vec4 diffuseColor = vec4( diffuse, opacity );","vec4 diffuseColor = vec4( diffuse * vInstanceColor, opacity );")),k.fragmentShader=N}catch(V){console.warn("[Lining] failed to inject instanced UV+color shader code",V)}},O[z]=!0,O.needsUpdate=!0)}}catch(C){console.warn("[Lining] failed to add per-instance UV offsets",C)}this.stoneAnimation.perInstanceDelays.push(M),this.stoneAnimation.finalPositions.push(S),this.stoneAnimation.perInstanceRotations||(this.stoneAnimation.perInstanceRotations=[]),this.stoneAnimation.perInstanceRotations.push(R),this.scene.add(p),this.stonePlanes.push(p)})}};var el=class{constructor(e,t){if(this.experience=e,this.scene=this.experience.scene,this.resources=this.experience.resources,!this.resources)throw new Error("World: this.resources is undefined. Check Experience initialization and sources.js.");this.containerAttribute=t.getAttribute("data-3d"),this.resources.on("ready",()=>{this.containerAttribute==="lining"?(this.Lining=new Qo(this.experience),this.environment=new Jo(this.experience,t)):console.log("nothing was loaded")})}update(){this.Lining&&this.Lining.update&&this.Lining.update(),this.experience.camera&&this.experience.camera.update()}};var tf=new WeakMap,lu=class extends an{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,n){let r=new Is(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,n)},i,n)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,At).catch(i)}decodeDracoFile(e,t,i,n,r=Ht,a=()=>{}){let o={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){let i=JSON.stringify(t);if(tf.has(e)){let l=tf.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n,r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(n=l,new Promise((c,u)=>{n._callbacks[r]={resolve:c,reject:u},n.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{n&&r&&this._releaseTask(n,r)}),tf.set(e,{key:i,promise:o}),o}_createGeometry(e){let t=new Ni;e.index&&t.setIndex(new It(e.index.array,1));for(let i=0;i<e.attributes.length;i++){let n=e.attributes[i],r=n.name,a=n.array,o=n.itemSize,l=new It(a,o);r==="color"&&(this._assignVertexColorSpace(l,n.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==At)return;let i=new ze;for(let n=0,r=e.count;n<r;n++)i.fromBufferAttribute(e,n).convertSRGBToLinear(),e.setXYZ(n,i.r,i.g,i.b)}_loadLibrary(e,t){let i=new Is(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((n,r)=>{i.load(e,n,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{let n=i[0];e||(this.decoderConfig.wasmBinary=i[1]);let r=uA.toString(),a=["/* draco decoder */",n,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(r){let a=r.data;switch(a.type){case"decode":n._callbacks[a.id].resolve(a);break;case"error":n._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,r){return n._taskLoad>r._taskLoad?-1:1});let i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function uA(){let s,e;onmessage=function(a){let o=a.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(d){u({draco:d})},DracoDecoderModule(s)});break;case"decode":let l=o.buffer,c=o.taskConfig;e.then(u=>{let d=u.draco,h=new d.Decoder;try{let f=t(d,h,new Int8Array(l),c),m=f.attributes.map(_=>_.array.buffer);f.index&&m.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},m)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{d.destroy(h)}});break}};function t(a,o,l,c){let u=c.attributeIDs,d=c.attributeTypes,h,f,m=o.GetEncodedGeometryType(l);if(m===a.TRIANGULAR_MESH)h=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,h);else if(m===a.POINT_CLOUD)h=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,h);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||h.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let _={index:null,attributes:[]};for(let p in u){let g=self[d[p]],v,x;if(c.useUniqueIDs)x=u[p],v=o.GetAttributeByUniqueId(h,x);else{if(x=o.GetAttributeId(h,a[u[p]]),x===-1)continue;v=o.GetAttribute(h,x)}let w=n(a,o,h,p,g,v);p==="color"&&(w.vertexColorSpace=c.vertexColorSpace),_.attributes.push(w)}return m===a.TRIANGULAR_MESH&&(_.index=i(a,o,h)),a.destroy(h),_}function i(a,o,l){let u=l.num_faces()*3,d=u*4,h=a._malloc(d);o.GetTrianglesUInt32Array(l,d,h);let f=new Uint32Array(a.HEAPF32.buffer,h,u).slice();return a._free(h),{array:f,itemSize:1}}function n(a,o,l,c,u,d){let h=d.num_components(),m=l.num_points()*h,_=m*u.BYTES_PER_ELEMENT,p=r(a,u),g=a._malloc(_);o.GetAttributeDataArrayForAllPoints(l,d,p,_,g);let v=new u(a.HEAPF32.buffer,g,m).slice();return a._free(g),{name:c,array:v,itemSize:h}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}function nf(s,e){if(e===Km)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===go||e===_c){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let i=t.count-2,n=[];if(e===go)for(let a=1;a<=i;a++)n.push(t.getX(0)),n.push(t.getX(a)),n.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(t.getX(a)),n.push(t.getX(a+1)),n.push(t.getX(a+2))):(n.push(t.getX(a+2)),n.push(t.getX(a+1)),n.push(t.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var cu=class extends an{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uf(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new xf(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new Mf(t)})}load(e,t,i,n){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ls.extractUrlBase(e);a=Ls.resolveURL(c,this.path)}else a=Ls.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Is(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===d_){try{a[nt.KHR_BINARY_GLTF]=new Tf(e)}catch(d){n&&n(d);return}r=JSON.parse(a[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Lf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case nt.KHR_MATERIALS_UNLIT:a[d]=new lf;break;case nt.KHR_DRACO_MESH_COMPRESSION:a[d]=new Af(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:a[d]=new Ef;break;case nt.KHR_MESH_QUANTIZATION:a[d]=new Cf;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}};function dA(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},of=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new ze(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ht);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ha(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new hc(u),c.distance=d;break;case"spot":c=new dc(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ys(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},lf=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Dn}extendParams(e,t,i){let n=[];e.color=new ze(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ht),e.opacity=a[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(n)}},cf=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},uf=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yi}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new tt(o,o)}return Promise.all(r)}},df=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yi}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},hf=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yi}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},ff=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yi}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ht)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,At)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},pf=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yi}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},mf=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yi}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],a=n.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(o[0],o[1],o[2],Ht),Promise.all(r)}},gf=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yi}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},_f=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yi}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],a=n.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(o[0],o[1],o[2],Ht),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,At)),Promise.all(r)}},vf=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yi}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],a=n.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},xf=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yi}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},yf=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let r=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},wf=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},bf=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Sf=class{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=n.byteOffset||0,c=n.byteLength||0,u=n.count,d=n.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(f),u,d,h,n.mode,n.filter),f})})}else return null}},Mf=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==pn.TRIANGLES&&c.mode!==pn.TRIANGLE_STRIP&&c.mode!==pn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(let m of d){let _=new Ge,p=new U,g=new Yt,v=new U(1,1,1),x=new rr(m.geometry,m.material,h);for(let w=0;w<h;w++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,w),l.SCALE&&v.fromBufferAttribute(l.SCALE,w),x.setMatrixAt(w,_.compose(p,g,v));for(let w in l)if(w==="_COLOR_0"){let T=l[w];x.instanceColor=new Nn(T.array,T.itemSize,T.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&m.geometry.setAttribute(w,l[w]);Lt.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},d_="glTF",tl=12,o_={JSON:1313821514,BIN:5130562},Tf=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,tl),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==d_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-tl,r=new DataView(e,tl),a=0;for(;a<n;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===o_.JSON){let c=new Uint8Array(e,tl+a,o);this.content=i.decode(c)}else if(l===o_.BIN){let c=tl+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Af=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let d=Pf[u]||u.toLowerCase();o[d]=a[u]}for(let u in e.attributes){let d=Pf[u]||u.toLowerCase();if(a[u]!==void 0){let h=i.accessors[e.attributes[u]],f=Na[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){n.decodeDracoFile(u,function(f){for(let m in f.attributes){let _=f.attributes[m],p=l[m];p!==void 0&&(_.normalized=p)}d(f)},o,c,Ht,h)})})}},Ef=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Cf=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}},uu=class extends Cs{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=n-t,d=(i-t)/u,h=d*d,f=h*d,m=e*c,_=m-c,p=-2*f+3*h,g=f-h,v=1-p,x=g-h+d;for(let w=0;w!==o;w++){let T=a[_+w+o],M=a[_+w+l]*u,S=a[m+w+o],R=a[m+w]*u;r[w]=v*T+x*M+p*S+g*R}return r}},hA=new Yt,Rf=class extends uu{interpolate_(e,t,i,n){let r=super.interpolate_(e,t,i,n);return hA.fromArray(r).normalize().toArray(r),r}},pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Na={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},l_={9728:hi,9729:Di,9984:Ld,9985:Ja,9986:qr,9987:En},c_={33071:jn,33648:io,10497:In},sf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fA={CUBICSPLINE:void 0,LINEAR:sr,STEP:na},rf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pA(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new wn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pn})),s.DefaultMaterial}function Ar(s,e,t){for(let i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ys(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mA(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(n=!0),d.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let d=e[c];if(i){let h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(h)}if(n){let h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(h)}if(r){let h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],d=c[1],h=c[2];return i&&(s.morphAttributes.position=u),n&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function gA(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _A(s){let e,t=s.extensions&&s.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+af(t.attributes):e=s.indices+":"+af(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+af(s.targets[i]);return e}function af(s){let e="",t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function If(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vA(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var xA=new Ge,Lf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,r=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&r<98?this.textureLoader=new ua(this.options.manager):this.textureLoader=new pc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Is(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return Ar(r,o,n),Ys(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){let a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(r,a){i.load(Ls.resolveURL(t.uri,n.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let a=sf[n.type],o=Na[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new It(c,a,l))}let r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=sf[n.type],c=Na[n.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0,_,p;if(f&&f!==d){let g=Math.floor(h/f),v="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+g+":"+n.count,x=t.cache.get(v);x||(_=new c(o,g*f,n.count*f/u),x=new lo(_,f/u),t.cache.add(v,x)),p=new co(x,l,h%f/u,m)}else o===null?_=new c(n.count*l):_=new c(o,h,n.count*l),p=new It(_,l,m);if(n.sparse!==void 0){let g=sf.SCALAR,v=Na[n.sparse.indices.componentType],x=n.sparse.indices.byteOffset||0,w=n.sparse.values.byteOffset||0,T=new v(a[1],x,n.sparse.count*g),M=new c(a[2],w,n.sparse.count*l);o!==null&&(p=new It(p.array.slice(),p.itemSize,p.normalized));for(let S=0,R=T.length;S<R;S++){let b=T[S];if(p.setX(b,M[S*l]),l>=2&&p.setY(b,M[S*l+1]),l>=3&&p.setZ(b,M[S*l+2]),l>=4&&p.setW(b,M[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let n=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let h=(r.samplers||{})[a.sampler]||{};return u.magFilter=l_[h.magFilter]||Di,u.minFilter=l_[h.minFilter]||En,u.wrapS=c_[h.wrapS]||In,u.wrapT=c_[h.wrapT]||In,n.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=n.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let h=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let m=h;t.isImageBitmapLoader===!0&&(m=function(_){let p=new ti(_);p.needsUpdate=!0,h(p)}),t.load(Ls.resolveURL(d,r.path),m,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),d.userData.mimeType=a.mimeType||vA(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,n){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new fo,Xi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new ho,Xi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return wn}loadMaterial(e){let t=this,i=this.json,n=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[nt.KHR_MATERIALS_UNLIT]){let d=n[nt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],Ht),o.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,At)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Li);let u=r.alphaMode||rf.OPAQUE;if(u===rf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===rf.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Dn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new tt(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Dn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Dn){let d=r.emissiveFactor;o.emissive=new ze().setRGB(d[0],d[1],d[2],Ht)}return r.emissiveTexture!==void 0&&a!==Dn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,At)),Promise.all(c).then(function(){let d=new a(o);return r.name&&(d.name=r.name),Ys(d,r),t.associations.set(d,{materials:e}),r.extensions&&Ar(n,d,r),d})}createUniqueName(e){let t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return u_(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=_A(c),d=n[u];if(d)a.push(d.promise);else{let h;c.extensions&&c.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=u_(new Ni,c,t),n[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,n=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?pA(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,m=u.length;f<m;f++){let _=u[f],p=a[f],g,v=c[f];if(p.mode===pn.TRIANGLES||p.mode===pn.TRIANGLE_STRIP||p.mode===pn.TRIANGLE_FAN||p.mode===void 0)g=r.isSkinnedMesh===!0?new Ql(_,v):new fi(_,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===pn.TRIANGLE_STRIP?g.geometry=nf(g.geometry,_c):p.mode===pn.TRIANGLE_FAN&&(g.geometry=nf(g.geometry,go));else if(p.mode===pn.LINES)g=new sc(_,v);else if(p.mode===pn.LINE_STRIP)g=new ca(_,v);else if(p.mode===pn.LINE_LOOP)g=new rc(_,v);else if(p.mode===pn.POINTS)g=new ac(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&gA(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Ys(g,r),p.extensions&&Ar(n,g,p),t.assignFinalMaterial(g),d.push(g)}for(let f=0,m=d.length;f<m;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Ar(n,d[0],r),d[0];let h=new Rn;r.extensions&&Ar(n,h,r),t.associations.set(h,{meshes:e});for(let f=0,m=d.length;f<m;f++)h.add(d[f]);return h})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Xt(Qm.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new la(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ys(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let r=n.pop(),a=n,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let d=a[c];if(d){o.push(d);let h=new Ge;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new tc(o,l)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let d=0,h=n.channels.length;d<h;d++){let f=n.channels[d],m=n.samplers[f.sampler],_=f.target,p=_.node,g=n.parameters!==void 0?n.parameters[m.input]:m.input,v=n.parameters!==void 0?n.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(m),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){let h=d[0],f=d[1],m=d[2],_=d[3],p=d[4],g=[];for(let v=0,x=h.length;v<x;v++){let w=h[v],T=f[v],M=m[v],S=_[v],R=p[v];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let b=i._createAnimationTracks(w,T,M,S,R);if(b)for(let y=0;y<b.length;y++)g.push(b[y])}return new lc(r,void 0,g)})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));let l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,xA)});for(let f=0,m=d.length;f<m;f++)u.add(d[f]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new uo:c.length>1?u=new Rn:c.length===1?u=c[0]:u=new Lt,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=a),Ys(u,r),r.extensions&&Ar(i,u,r),r.matrix!==void 0){let d=new Ge;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return n.associations.has(u)||n.associations.set(u,{}),n.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,r=new Rn;i.name&&(r.name=n.createUniqueName(i.name)),Ys(r,i),i.extensions&&Ar(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);let c=u=>{let d=new Map;for(let[h,f]of n.associations)(h instanceof Xi||h instanceof ti)&&d.set(h,f);return u.traverse(h=>{let f=n.associations.get(h);f!=null&&d.set(h,f)}),d};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){let a=[],o=e.name?e.name:e.uuid,l=[];Xs[r.path]===Xs.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(o);let c;switch(Xs[r.path]){case Xs.weights:c=es;break;case Xs.rotation:c=Un;break;case Xs.position:case Xs.scale:c=ts;break;default:switch(i.itemSize){case 1:c=es;break;case 2:case 3:default:c=ts;break}break}let u=n.interpolation!==void 0?fA[n.interpolation]:sr,d=this._getArrayFromAccessor(i);for(let h=0,f=l.length;h<f;h++){let m=new c(l[h]+"."+Xs[r.path],t.array,d,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=If(t.constructor),n=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let n=this instanceof Un?Rf:uu;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function yA(s,e,t){let i=e.attributes,n=new sn;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),o.normalized){let u=If(Na[o.componentType]);n.min.multiplyScalar(u),n.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new U,l=new U;for(let c=0,u=r.length;c<u;c++){let d=r[c];if(d.POSITION!==void 0){let h=t.json.accessors[d.POSITION],f=h.min,m=h.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),h.normalized){let _=If(Na[h.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}s.boundingBox=n;let a=new Wi;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=a}function u_(s,e,t){let i=e.attributes,n=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in i){let o=Pf[a]||a.toLowerCase();o in s.attributes||n.push(r(i[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});n.push(a)}return dt.workingColorSpace!==Ht&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),Ys(s,e),yA(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?mA(s,e.targets,t):s})}var il=class extends hs{constructor(e){super(),this.sources=e,this.items={},this.toLoad=this.sources.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.gltfLoader=new cu,this.loaders.dracoLoader=new lu,this.loaders.textureLoader=new ua,this.loaders.cubeTextureLoader=new uc,this.loaders.dracoLoader.setDecoderPath("https://cdn.jsdelivr.net/gh/CilliersWebSolutions/portfolioV1@main/dist/draco/"),this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)}startLoading(){for(let e of this.sources)e.type==="gltfModel"?this.loaders.gltfLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="texture"?this.loaders.textureLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="cubeTexture"&&this.loaders.cubeTextureLoader.load(e.path,t=>{this.sourceLoaded(e,t)})}sourceLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.toLoad&&this.trigger("ready")}};var h_=[{name:"liningModel",type:"gltfModel",path:"https://cdn.prod.website-files.com/68a43ca43fc6c140cf3f82c2/695134a21c716fd126837ced_landfill_justSquare.glb.txt"},{name:"liningTexture",type:"texture",path:"https://cdn.prod.website-files.com/68a43ca43fc6c140cf3f82c2/695134cb4e2164d263d7741f_baked-final.jpg"},{name:"stoneTexture",type:"texture",path:"https://cdn.prod.website-files.com/68a43ca43fc6c140cf3f82c2/6915efce56769621ee31025b_stonedarkerGreen.png"}];var nl=class{constructor(e,t){this.container=t,this.canvas=e,this.containerAttribute=t.getAttribute("data-3d"),this.scene=new Jl,this.sizes=new $o(t),this.time=new Zo,this.camera=new Ko(this,t),this.renderer=new jo(this),this.resources=new il(h_),this.world=new el(this,t),this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()})}resize(){this.camera.resize(),this.renderer.resize()}update(){this.camera.update(),this.world.update(),this.renderer.update()}};Hs.registerPlugin(Ke);var sl=class{constructor(){this.initCounters()}initCounters(){document.querySelectorAll(".number").forEach(e=>{let t=parseInt(e.getAttribute("data-target"),10),i=e.getAttribute("data-target")==="fade-in";e.textContent="00";let n={val:0},r=Hs.timeline({scrollTrigger:{trigger:e,start:"top 80%",once:!0}});i&&r.fromTo(e,{opacity:0},{opacity:1,duration:.6,ease:"power1.out"}),r.to(n,{val:t,duration:2,ease:"power1.out",onUpdate:()=>{let a=Math.floor(n.val);e.textContent=a<10?`0${a}`:`${a}`}})})}};function Df(){let s=document.querySelector(".quickfacts-fadedimage");if(!s)return;let e=document.createElement("div");e.className="cw-mouse-circle",document.body.appendChild(e);let t=document.createElement("div");t.className="cw-mouse-overlay",s.appendChild(t);let i=!1,n="radial-gradient(circle 0px at 50% 50%, transparent 0%, transparent 100%)";t.style.setProperty("--mask-x","50%"),t.style.setProperty("--mask-y","50%"),t.style.setProperty("--mask-r","0.01px");let r=120,a=180,o=null,l=0,c=null,u={x:50,y:50},d=null,h=0,f={x:0,y:0,r:0},m=!1;function _(R,b,y){let C=Number.isFinite(R)?R:f.x,L=Number.isFinite(b)?b:f.y,P=Number.isFinite(y)?Math.max(.01,y):f.r;t.style.setProperty("--mask-x",`${C}px`),t.style.setProperty("--mask-y",`${L}px`),t.style.setProperty("--mask-r",`${P}px`),f.x=C,f.y=L,f.r=P,m&&(!Number.isFinite(R)||!Number.isFinite(b)||!Number.isFinite(y))&&console.debug("[minimalPointer] dropped invalid mask value",{x:R,y:b,r:y,used:{vx:C,vy:L,vr:P}})}function p(R){let b={r:l};o&&o.kill(),o=Hs.to(b,{r:R,duration:Math.max(.01,a/1e3),ease:"power3.out",onStart:()=>{try{let y=v||s.getBoundingClientRect(),C=Math.max(0,Math.min(y.width,u.x-y.left)),L=Math.max(0,Math.min(y.height,u.y-y.top));t.style.setProperty("--mask-x",`${C}px`),t.style.setProperty("--mask-y",`${L}px`),t.style.setProperty("--mask-r","0.01px")}catch{}e.style.display="block"},onUpdate:()=>{l=b.r;let y=Math.max(.001,l/r);e.style.setProperty("--cw-scale",String(y));try{l>.5?(c===null&&(c=document.body.style.cursor||""),document.body.style.cursor="none"):c!==null&&(document.body.style.cursor=c||"",c=null)}catch{}let C=v||s.getBoundingClientRect(),L=Math.max(0,Math.min(C.width,u.x-C.left)),P=Math.max(0,Math.min(C.height,u.y-C.top));_(L,P,l);try{let O=Math.max(6,r*.06);l>=O&&!e.classList.contains("cw-active")&&e.classList.add("cw-active")}catch{}},onComplete:()=>{o=null}})}l=0;let g=r*2;e.style.width=`${g}px`,e.style.height=`${g}px`,e.style.display="none",e.style.setProperty("--cw-x","-9999px"),e.style.setProperty("--cw-y","-9999px"),e.style.setProperty("--cw-scale","0.001");let v=s.getBoundingClientRect();function x(){v=s.getBoundingClientRect()}x(),window.addEventListener("resize",x,{passive:!0}),window.addEventListener("scroll",()=>{if(x(),i){let R=v;if(u.x>=R.left&&u.x<=R.right&&u.y>=R.top&&u.y<=R.bottom)w||(w=!0,requestAnimationFrame(T));else{let y=document.elementFromPoint(u.x,u.y);y&&(y===s||s.contains(y))?S():S(0)}}},{passive:!0});let w=!1;function T(){w=!1,x();let R=v;e.style.setProperty("--cw-x",`${u.x}px`),e.style.setProperty("--cw-y",`${u.y}px`),e.style.setProperty("--cw-scale",String(Math.max(.001,l/r)));let b=Math.max(0,Math.min(R.width,u.x-R.left)),y=Math.max(0,Math.min(R.height,u.y-R.top)),C=Number.isFinite(b)?b:0,L=Number.isFinite(y)?y:0;t.style.setProperty("--mask-x",`${C}px`),t.style.setProperty("--mask-y",`${L}px`)}document.addEventListener("mousemove",R=>{u.x=R.clientX,u.y=R.clientY;let b=v,y=Math.max(1,l||r),C=R.clientX,L=R.clientY,P=C>=b.left&&C<=b.right&&L>=b.top&&L<=b.bottom,O={left:b.left-y,right:b.right+y,top:b.top-y,bottom:b.bottom+y},z=C>=O.left&&C<=O.right&&L>=O.top&&L<=O.bottom;P?(d&&(clearTimeout(d),d=null,h+=1),M(),p(r),w||(w=!0,requestAnimationFrame(T))):z?(i?(p(0),w||(w=!0,requestAnimationFrame(T))):(M(),p(0),w||(w=!0,requestAnimationFrame(T))),S()):i&&S()});function M(){i||(i=!0,e.style.display="block",e.classList.add("cw-active"),x(),p(r))}function S(R=30){d&&clearTimeout(d),h+=1;let b=h;d=setTimeout(()=>{d=null,i=!1,e.classList.remove("cw-active"),p(0);let y=()=>{b===h&&(o?requestAnimationFrame(y):b===h&&setTimeout(()=>{b===h&&(e.style.display="none",t.style.setProperty("--mask-r","0.01px"))},220))};y()},R)}}function f_(s){return s!==null&&typeof s=="object"&&"constructor"in s&&s.constructor===Object}function Of(s,e){s===void 0&&(s={}),e===void 0&&(e={});let t=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof s[i]>"u"?s[i]=e[i]:f_(e[i])&&f_(s[i])&&Object.keys(e[i]).length>0&&Of(s[i],e[i])})}var p_={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function yi(){let s=typeof document<"u"?document:{};return Of(s,p_),s}var wA={document:p_,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(s){return typeof setTimeout>"u"?(s(),null):setTimeout(s,0)},cancelAnimationFrame(s){typeof setTimeout>"u"||clearTimeout(s)}};function Ut(){let s=typeof window<"u"?window:{};return Of(s,wA),s}function m_(s){return s===void 0&&(s=""),s.trim().split(" ").filter(e=>!!e.trim())}function g_(s){let e=s;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Ua(s,e){return e===void 0&&(e=0),setTimeout(s,e)}function Er(){return Date.now()}function bA(s){let e=Ut(),t;return e.getComputedStyle&&(t=e.getComputedStyle(s,null)),!t&&s.currentStyle&&(t=s.currentStyle),t||(t=s.style),t}function Nf(s,e){e===void 0&&(e="x");let t=Ut(),i,n,r,a=bA(s);return t.WebKitCSSMatrix?(n=a.transform||a.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(o=>o.replace(",",".")).join(", ")),r=new t.WebKitCSSMatrix(n==="none"?"":n)):(r=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=r.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?n=r.m41:i.length===16?n=parseFloat(i[12]):n=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?n=r.m42:i.length===16?n=parseFloat(i[13]):n=parseFloat(i[5])),n||0}function rl(s){return typeof s=="object"&&s!==null&&s.constructor&&Object.prototype.toString.call(s).slice(8,-1)==="Object"}function SA(s){return typeof window<"u"&&typeof window.HTMLElement<"u"?s instanceof HTMLElement:s&&(s.nodeType===1||s.nodeType===11)}function Hi(){let s=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){let i=t<0||arguments.length<=t?void 0:arguments[t];if(i!=null&&!SA(i)){let n=Object.keys(Object(i)).filter(r=>e.indexOf(r)<0);for(let r=0,a=n.length;r<a;r+=1){let o=n[r],l=Object.getOwnPropertyDescriptor(i,o);l!==void 0&&l.enumerable&&(rl(s[o])&&rl(i[o])?i[o].__swiper__?s[o]=i[o]:Hi(s[o],i[o]):!rl(s[o])&&rl(i[o])?(s[o]={},i[o].__swiper__?s[o]=i[o]:Hi(s[o],i[o])):s[o]=i[o])}}}return s}function Fa(s,e,t){s.style.setProperty(e,t)}function Uf(s){let{swiper:e,targetPosition:t,side:i}=s,n=Ut(),r=-e.translate,a=null,o,l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(e.cssModeFrameID);let c=t>r?"next":"prev",u=(h,f)=>c==="next"&&h>=f||c==="prev"&&h<=f,d=()=>{o=new Date().getTime(),a===null&&(a=o);let h=Math.max(Math.min((o-a)/l,1),0),f=.5-Math.cos(h*Math.PI)/2,m=r+f*(t-r);if(u(m,t)&&(m=t),e.wrapperEl.scrollTo({[i]:m}),u(m,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:m})}),n.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=n.requestAnimationFrame(d)};d()}function ai(s,e){e===void 0&&(e="");let t=Ut(),i=[...s.children];return t.HTMLSlotElement&&s instanceof HTMLSlotElement&&i.push(...s.assignedElements()),e?i.filter(n=>n.matches(e)):i}function MA(s,e){let t=[e];for(;t.length>0;){let i=t.shift();if(s===i)return!0;t.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function __(s,e){let t=Ut(),i=e.contains(s);return!i&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(i=[...e.assignedElements()].includes(s),i||(i=MA(s,e))),i}function al(s){try{console.warn(s);return}catch{}}function Mn(s,e){e===void 0&&(e=[]);let t=document.createElement(s);return t.classList.add(...Array.isArray(e)?e:m_(e)),t}function v_(s,e){let t=[];for(;s.previousElementSibling;){let i=s.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),s=i}return t}function x_(s,e){let t=[];for(;s.nextElementSibling;){let i=s.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),s=i}return t}function fs(s,e){return Ut().getComputedStyle(s,null).getPropertyValue(e)}function Cr(s){let e=s,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function za(s,e){let t=[],i=s.parentElement;for(;i;)e?i.matches(e)&&t.push(i):t.push(i),i=i.parentElement;return t}function ol(s,e,t){let i=Ut();return t?s[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):s.offsetWidth}function Ft(s){return(Array.isArray(s)?s:[s]).filter(e=>!!e)}function ka(s,e){e===void 0&&(e=""),typeof trustedTypes<"u"?s.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(e):s.innerHTML=e}var Ff;function TA(){let s=Ut(),e=yi();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in s||s.DocumentTouch&&e instanceof s.DocumentTouch)}}function T_(){return Ff||(Ff=TA()),Ff}var zf;function AA(s){let{userAgent:e}=s===void 0?{}:s,t=T_(),i=Ut(),n=i.navigator.platform,r=e||i.navigator.userAgent,a={ios:!1,android:!1},o=i.screen.width,l=i.screen.height,c=r.match(/(Android);?[\s\/]+([\d.]+)?/),u=r.match(/(iPad).*OS\s([\d_]+)/),d=r.match(/(iPod)(.*OS\s([\d_]+))?/),h=!u&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=n==="Win32",m=n==="MacIntel",_=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&m&&t.touch&&_.indexOf(`${o}x${l}`)>=0&&(u=r.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),m=!1),c&&!f&&(a.os="android",a.android=!0),(u||h||d)&&(a.os="ios",a.ios=!0),a}function A_(s){return s===void 0&&(s={}),zf||(zf=AA(s)),zf}var kf;function EA(){let s=Ut(),e=A_(),t=!1;function i(){let o=s.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(i()){let o=String(s.navigator.userAgent);if(o.includes("Version/")){let[l,c]=o.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));t=l<16||l===16&&c<2}}let n=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),r=i(),a=r||n&&e.ios;return{isSafari:t||r,needPerspectiveFix:t,need3dFix:a,isWebView:n}}function E_(){return kf||(kf=EA()),kf}function CA(s){let{swiper:e,on:t,emit:i}=s,n=Ut(),r=null,a=null,o=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(d=>{a=n.requestAnimationFrame(()=>{let{width:h,height:f}=e,m=h,_=f;d.forEach(p=>{let{contentBoxSize:g,contentRect:v,target:x}=p;x&&x!==e.el||(m=v?v.width:(g[0]||g).inlineSize,_=v?v.height:(g[0]||g).blockSize)}),(m!==h||_!==f)&&o()})}),r.observe(e.el))},c=()=>{a&&n.cancelAnimationFrame(a),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},u=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof n.ResizeObserver<"u"){l();return}n.addEventListener("resize",o),n.addEventListener("orientationchange",u)}),t("destroy",()=>{c(),n.removeEventListener("resize",o),n.removeEventListener("orientationchange",u)})}function RA(s){let{swiper:e,extendParams:t,on:i,emit:n}=s,r=[],a=Ut(),o=function(u,d){d===void 0&&(d={});let h=a.MutationObserver||a.WebkitMutationObserver,f=new h(m=>{if(e.__preventObserver__)return;if(m.length===1){n("observerUpdate",m[0]);return}let _=function(){n("observerUpdate",m[0])};a.requestAnimationFrame?a.requestAnimationFrame(_):a.setTimeout(_,0)});f.observe(u,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),r.push(f)},l=()=>{if(e.params.observer){if(e.params.observeParents){let u=za(e.hostEl);for(let d=0;d<u.length;d+=1)o(u[d])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},c=()=>{r.forEach(u=>{u.disconnect()}),r.splice(0,r.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",l),i("destroy",c)}var PA={on(s,e,t){let i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;let n=t?"unshift":"push";return s.split(" ").forEach(r=>{i.eventsListeners[r]||(i.eventsListeners[r]=[]),i.eventsListeners[r][n](e)}),i},once(s,e,t){let i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function n(){i.off(s,n),n.__emitterProxy&&delete n.__emitterProxy;for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];e.apply(i,a)}return n.__emitterProxy=e,i.on(s,n,t)},onAny(s,e){let t=this;if(!t.eventsListeners||t.destroyed||typeof s!="function")return t;let i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(s)<0&&t.eventsAnyListeners[i](s),t},offAny(s){let e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;let t=e.eventsAnyListeners.indexOf(s);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(s,e){let t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||s.split(" ").forEach(i=>{typeof e>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((n,r)=>{(n===e||n.__emitterProxy&&n.__emitterProxy===e)&&t.eventsListeners[i].splice(r,1)})}),t},emit(){let s=this;if(!s.eventsListeners||s.destroyed||!s.eventsListeners)return s;let e,t,i;for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return typeof r[0]=="string"||Array.isArray(r[0])?(e=r[0],t=r.slice(1,r.length),i=s):(e=r[0].events,t=r[0].data,i=r[0].context||s),t.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach(c=>{c.apply(i,[l,...t])}),s.eventsListeners&&s.eventsListeners[l]&&s.eventsListeners[l].forEach(c=>{c.apply(i,t)})}),s}};function IA(){let s=this,e,t,i=s.el;typeof s.params.width<"u"&&s.params.width!==null?e=s.params.width:e=i.clientWidth,typeof s.params.height<"u"&&s.params.height!==null?t=s.params.height:t=i.clientHeight,!(e===0&&s.isHorizontal()||t===0&&s.isVertical())&&(e=e-parseInt(fs(i,"padding-left")||0,10)-parseInt(fs(i,"padding-right")||0,10),t=t-parseInt(fs(i,"padding-top")||0,10)-parseInt(fs(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(s,{width:e,height:t,size:s.isHorizontal()?e:t}))}function LA(){let s=this;function e(y,C){return parseFloat(y.getPropertyValue(s.getDirectionLabel(C))||0)}let t=s.params,{wrapperEl:i,slidesEl:n,size:r,rtlTranslate:a,wrongRTL:o}=s,l=s.virtual&&t.virtual.enabled,c=l?s.virtual.slides.length:s.slides.length,u=ai(n,`.${s.params.slideClass}, swiper-slide`),d=l?s.virtual.slides.length:u.length,h=[],f=[],m=[],_=t.slidesOffsetBefore;typeof _=="function"&&(_=t.slidesOffsetBefore.call(s));let p=t.slidesOffsetAfter;typeof p=="function"&&(p=t.slidesOffsetAfter.call(s));let g=s.snapGrid.length,v=s.slidesGrid.length,x=t.spaceBetween,w=-_,T=0,M=0;if(typeof r>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*r:typeof x=="string"&&(x=parseFloat(x)),s.virtualSize=-x,u.forEach(y=>{a?y.style.marginLeft="":y.style.marginRight="",y.style.marginBottom="",y.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(Fa(i,"--swiper-centered-offset-before",""),Fa(i,"--swiper-centered-offset-after",""));let S=t.grid&&t.grid.rows>1&&s.grid;S?s.grid.initSlides(u):s.grid&&s.grid.unsetSlides();let R,b=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(y=>typeof t.breakpoints[y].slidesPerView<"u").length>0;for(let y=0;y<d;y+=1){R=0;let C;if(u[y]&&(C=u[y]),S&&s.grid.updateSlide(y,C,u),!(u[y]&&fs(C,"display")==="none")){if(t.slidesPerView==="auto"){b&&(u[y].style[s.getDirectionLabel("width")]="");let L=getComputedStyle(C),P=C.style.transform,O=C.style.webkitTransform;if(P&&(C.style.transform="none"),O&&(C.style.webkitTransform="none"),t.roundLengths)R=s.isHorizontal()?ol(C,"width",!0):ol(C,"height",!0);else{let z=e(L,"width"),k=e(L,"padding-left"),V=e(L,"padding-right"),N=e(L,"margin-left"),K=e(L,"margin-right"),I=L.getPropertyValue("box-sizing");if(I&&I==="border-box")R=z+N+K;else{let{clientWidth:ae,offsetWidth:Ce}=C;R=z+k+V+N+K+(Ce-ae)}}P&&(C.style.transform=P),O&&(C.style.webkitTransform=O),t.roundLengths&&(R=Math.floor(R))}else R=(r-(t.slidesPerView-1)*x)/t.slidesPerView,t.roundLengths&&(R=Math.floor(R)),u[y]&&(u[y].style[s.getDirectionLabel("width")]=`${R}px`);u[y]&&(u[y].swiperSlideSize=R),m.push(R),t.centeredSlides?(w=w+R/2+T/2+x,T===0&&y!==0&&(w=w-r/2-x),y===0&&(w=w-r/2-x),Math.abs(w)<1/1e3&&(w=0),t.roundLengths&&(w=Math.floor(w)),M%t.slidesPerGroup===0&&h.push(w),f.push(w)):(t.roundLengths&&(w=Math.floor(w)),(M-Math.min(s.params.slidesPerGroupSkip,M))%s.params.slidesPerGroup===0&&h.push(w),f.push(w),w=w+R+x),s.virtualSize+=R+x,T=R,M+=1}}if(s.virtualSize=Math.max(s.virtualSize,r)+p,a&&o&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${s.virtualSize+x}px`),t.setWrapperSize&&(i.style[s.getDirectionLabel("width")]=`${s.virtualSize+x}px`),S&&s.grid.updateWrapperSize(R,h),!t.centeredSlides){let y=[];for(let C=0;C<h.length;C+=1){let L=h[C];t.roundLengths&&(L=Math.floor(L)),h[C]<=s.virtualSize-r&&y.push(L)}h=y,Math.floor(s.virtualSize-r)-Math.floor(h[h.length-1])>1&&h.push(s.virtualSize-r)}if(l&&t.loop){let y=m[0]+x;if(t.slidesPerGroup>1){let C=Math.ceil((s.virtual.slidesBefore+s.virtual.slidesAfter)/t.slidesPerGroup),L=y*t.slidesPerGroup;for(let P=0;P<C;P+=1)h.push(h[h.length-1]+L)}for(let C=0;C<s.virtual.slidesBefore+s.virtual.slidesAfter;C+=1)t.slidesPerGroup===1&&h.push(h[h.length-1]+y),f.push(f[f.length-1]+y),s.virtualSize+=y}if(h.length===0&&(h=[0]),x!==0){let y=s.isHorizontal()&&a?"marginLeft":s.getDirectionLabel("marginRight");u.filter((C,L)=>!t.cssMode||t.loop?!0:L!==u.length-1).forEach(C=>{C.style[y]=`${x}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let y=0;m.forEach(L=>{y+=L+(x||0)}),y-=x;let C=y>r?y-r:0;h=h.map(L=>L<=0?-_:L>C?C+p:L)}if(t.centerInsufficientSlides){let y=0;m.forEach(L=>{y+=L+(x||0)}),y-=x;let C=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(y+C<r){let L=(r-y-C)/2;h.forEach((P,O)=>{h[O]=P-L}),f.forEach((P,O)=>{f[O]=P+L})}}if(Object.assign(s,{slides:u,snapGrid:h,slidesGrid:f,slidesSizesGrid:m}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Fa(i,"--swiper-centered-offset-before",`${-h[0]}px`),Fa(i,"--swiper-centered-offset-after",`${s.size/2-m[m.length-1]/2}px`);let y=-s.snapGrid[0],C=-s.slidesGrid[0];s.snapGrid=s.snapGrid.map(L=>L+y),s.slidesGrid=s.slidesGrid.map(L=>L+C)}if(d!==c&&s.emit("slidesLengthChange"),h.length!==g&&(s.params.watchOverflow&&s.checkOverflow(),s.emit("snapGridLengthChange")),f.length!==v&&s.emit("slidesGridLengthChange"),t.watchSlidesProgress&&s.updateSlidesOffset(),s.emit("slidesUpdated"),!l&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){let y=`${t.containerModifierClass}backface-hidden`,C=s.el.classList.contains(y);d<=t.maxBackfaceHiddenSlides?C||s.el.classList.add(y):C&&s.el.classList.remove(y)}}function DA(s){let e=this,t=[],i=e.virtual&&e.params.virtual.enabled,n=0,r;typeof s=="number"?e.setTransition(s):s===!0&&e.setTransition(e.params.speed);let a=o=>i?e.slides[e.getSlideIndexByData(o)]:e.slides[o];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(o=>{t.push(o)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){let o=e.activeIndex+r;if(o>e.slides.length&&!i)break;t.push(a(o))}else t.push(a(e.activeIndex));for(r=0;r<t.length;r+=1)if(typeof t[r]<"u"){let o=t[r].offsetHeight;n=o>n?o:n}(n||n===0)&&(e.wrapperEl.style.height=`${n}px`)}function OA(){let s=this,e=s.slides,t=s.isElement?s.isHorizontal()?s.wrapperEl.offsetLeft:s.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(s.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-s.cssOverflowAdjustment()}var y_=(s,e,t)=>{e&&!s.classList.contains(t)?s.classList.add(t):!e&&s.classList.contains(t)&&s.classList.remove(t)};function NA(s){s===void 0&&(s=this&&this.translate||0);let e=this,t=e.params,{slides:i,rtlTranslate:n,snapGrid:r}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-s;n&&(a=s),e.visibleSlidesIndexes=[],e.visibleSlides=[];let o=t.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<i.length;l+=1){let c=i[l],u=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=i[0].swiperSlideOffset);let d=(a+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+o),h=(a-r[0]+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+o),f=-(a-u),m=f+e.slidesSizesGrid[l],_=f>=0&&f<=e.size-e.slidesSizesGrid[l],p=f>=0&&f<e.size-1||m>1&&m<=e.size||f<=0&&m>=e.size;p&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l)),y_(c,p,t.slideVisibleClass),y_(c,_,t.slideFullyVisibleClass),c.progress=n?-d:d,c.originalProgress=n?-h:h}}function UA(s){let e=this;if(typeof s>"u"){let u=e.rtlTranslate?-1:1;s=e&&e.translate&&e.translate*u||0}let t=e.params,i=e.maxTranslate()-e.minTranslate(),{progress:n,isBeginning:r,isEnd:a,progressLoop:o}=e,l=r,c=a;if(i===0)n=0,r=!0,a=!0;else{n=(s-e.minTranslate())/i;let u=Math.abs(s-e.minTranslate())<1,d=Math.abs(s-e.maxTranslate())<1;r=u||n<=0,a=d||n>=1,u&&(n=0),d&&(n=1)}if(t.loop){let u=e.getSlideIndexByData(0),d=e.getSlideIndexByData(e.slides.length-1),h=e.slidesGrid[u],f=e.slidesGrid[d],m=e.slidesGrid[e.slidesGrid.length-1],_=Math.abs(s);_>=h?o=(_-h)/m:o=(_+m-f)/m,o>1&&(o-=1)}Object.assign(e,{progress:n,progressLoop:o,isBeginning:r,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(s),r&&!l&&e.emit("reachBeginning toEdge"),a&&!c&&e.emit("reachEnd toEdge"),(l&&!r||c&&!a)&&e.emit("fromEdge"),e.emit("progress",n)}var Bf=(s,e,t)=>{e&&!s.classList.contains(t)?s.classList.add(t):!e&&s.classList.contains(t)&&s.classList.remove(t)};function FA(){let s=this,{slides:e,params:t,slidesEl:i,activeIndex:n}=s,r=s.virtual&&t.virtual.enabled,a=s.grid&&t.grid&&t.grid.rows>1,o=d=>ai(i,`.${t.slideClass}${d}, swiper-slide${d}`)[0],l,c,u;if(r)if(t.loop){let d=n-s.virtual.slidesBefore;d<0&&(d=s.virtual.slides.length+d),d>=s.virtual.slides.length&&(d-=s.virtual.slides.length),l=o(`[data-swiper-slide-index="${d}"]`)}else l=o(`[data-swiper-slide-index="${n}"]`);else a?(l=e.find(d=>d.column===n),u=e.find(d=>d.column===n+1),c=e.find(d=>d.column===n-1)):l=e[n];l&&(a||(u=x_(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!u&&(u=e[0]),c=v_(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(d=>{Bf(d,d===l,t.slideActiveClass),Bf(d,d===u,t.slideNextClass),Bf(d,d===c,t.slidePrevClass)}),s.emitSlidesClasses()}var du=(s,e)=>{if(!s||s.destroyed||!s.params)return;let t=()=>s.isElement?"swiper-slide":`.${s.params.slideClass}`,i=e.closest(t());if(i){let n=i.querySelector(`.${s.params.lazyPreloaderClass}`);!n&&s.isElement&&(i.shadowRoot?n=i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(n=i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`),n&&n.remove())})),n&&n.remove()}},Hf=(s,e)=>{if(!s.slides[e])return;let t=s.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},Wf=s=>{if(!s||s.destroyed||!s.params)return;let e=s.params.lazyPreloadPrevNext,t=s.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);let i=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(s.params.slidesPerView),n=s.activeIndex;if(s.params.grid&&s.params.grid.rows>1){let a=n,o=[a-e];o.push(...Array.from({length:e}).map((l,c)=>a+i+c)),s.slides.forEach((l,c)=>{o.includes(l.column)&&Hf(s,c)});return}let r=n+i-1;if(s.params.rewind||s.params.loop)for(let a=n-e;a<=r+e;a+=1){let o=(a%t+t)%t;(o<n||o>r)&&Hf(s,o)}else for(let a=Math.max(n-e,0);a<=Math.min(r+e,t-1);a+=1)a!==n&&(a>r||a<n)&&Hf(s,a)};function zA(s){let{slidesGrid:e,params:t}=s,i=s.rtlTranslate?s.translate:-s.translate,n;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?i>=e[r]&&i<e[r+1]-(e[r+1]-e[r])/2?n=r:i>=e[r]&&i<e[r+1]&&(n=r+1):i>=e[r]&&(n=r);return t.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function kA(s){let e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:n,activeIndex:r,realIndex:a,snapIndex:o}=e,l=s,c,u=f=>{let m=f-e.virtual.slidesBefore;return m<0&&(m=e.virtual.slides.length+m),m>=e.virtual.slides.length&&(m-=e.virtual.slides.length),m};if(typeof l>"u"&&(l=zA(e)),i.indexOf(t)>=0)c=i.indexOf(t);else{let f=Math.min(n.slidesPerGroupSkip,l);c=f+Math.floor((l-f)/n.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),l===r&&!e.params.loop){c!==o&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===r&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=u(l);return}let d=e.grid&&n.grid&&n.grid.rows>1,h;if(e.virtual&&n.virtual.enabled&&n.loop)h=u(l);else if(d){let f=e.slides.find(_=>_.column===l),m=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(e.slides.indexOf(f),0)),h=Math.floor(m/n.grid.rows)}else if(e.slides[l]){let f=e.slides[l].getAttribute("data-swiper-slide-index");f?h=parseInt(f,10):h=l}else h=l;Object.assign(e,{previousSnapIndex:o,snapIndex:c,previousRealIndex:a,realIndex:h,previousIndex:r,activeIndex:l}),e.initialized&&Wf(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==h&&e.emit("realIndexChange"),e.emit("slideChange"))}function BA(s,e){let t=this,i=t.params,n=s.closest(`.${i.slideClass}, swiper-slide`);!n&&t.isElement&&e&&e.length>1&&e.includes(s)&&[...e.slice(e.indexOf(s)+1,e.length)].forEach(o=>{!n&&o.matches&&o.matches(`.${i.slideClass}, swiper-slide`)&&(n=o)});let r=!1,a;if(n){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===n){r=!0,a=o;break}}if(n&&r)t.clickedSlide=n,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var HA={updateSize:IA,updateSlides:LA,updateAutoHeight:DA,updateSlidesOffset:OA,updateSlidesProgress:NA,updateProgress:UA,updateSlidesClasses:FA,updateActiveIndex:kA,updateClickedSlide:BA};function VA(s){s===void 0&&(s=this.isHorizontal()?"x":"y");let e=this,{params:t,rtlTranslate:i,translate:n,wrapperEl:r}=e;if(t.virtualTranslate)return i?-n:n;if(t.cssMode)return n;let a=Nf(r,s);return a+=e.cssOverflowAdjustment(),i&&(a=-a),a||0}function GA(s,e){let t=this,{rtlTranslate:i,params:n,wrapperEl:r,progress:a}=t,o=0,l=0,c=0;t.isHorizontal()?o=i?-s:s:l=s,n.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:l,n.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-l:n.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${o}px, ${l}px, ${c}px)`);let u,d=t.maxTranslate()-t.minTranslate();d===0?u=0:u=(s-t.minTranslate())/d,u!==a&&t.updateProgress(s),t.emit("setTranslate",t.translate,e)}function WA(){return-this.snapGrid[0]}function XA(){return-this.snapGrid[this.snapGrid.length-1]}function YA(s,e,t,i,n){s===void 0&&(s=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),i===void 0&&(i=!0);let r=this,{params:a,wrapperEl:o}=r;if(r.animating&&a.preventInteractionOnTransition)return!1;let l=r.minTranslate(),c=r.maxTranslate(),u;if(i&&s>l?u=l:i&&s<c?u=c:u=s,r.updateProgress(u),a.cssMode){let d=r.isHorizontal();if(e===0)o[d?"scrollLeft":"scrollTop"]=-u;else{if(!r.support.smoothScroll)return Uf({swiper:r,targetPosition:-u,side:d?"left":"top"}),!0;o.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(u),t&&(r.emit("beforeTransitionStart",e,n),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(u),t&&(r.emit("beforeTransitionStart",e,n),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(h){!r||r.destroyed||h.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var qA={getTranslate:VA,setTranslate:GA,minTranslate:WA,maxTranslate:XA,translateTo:YA};function $A(s,e){let t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${s}ms`,t.wrapperEl.style.transitionDelay=s===0?"0ms":""),t.emit("setTransition",s,e)}function C_(s){let{swiper:e,runCallbacks:t,direction:i,step:n}=s,{activeIndex:r,previousIndex:a}=e,o=i;o||(r>a?o="next":r<a?o="prev":o="reset"),e.emit(`transition${n}`),t&&o==="reset"?e.emit(`slideResetTransition${n}`):t&&r!==a&&(e.emit(`slideChangeTransition${n}`),o==="next"?e.emit(`slideNextTransition${n}`):e.emit(`slidePrevTransition${n}`))}function ZA(s,e){s===void 0&&(s=!0);let t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),C_({swiper:t,runCallbacks:s,direction:e,step:"Start"}))}function KA(s,e){s===void 0&&(s=!0);let t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),C_({swiper:t,runCallbacks:s,direction:e,step:"End"}))}var jA={setTransition:$A,transitionStart:ZA,transitionEnd:KA};function JA(s,e,t,i,n){s===void 0&&(s=0),t===void 0&&(t=!0),typeof s=="string"&&(s=parseInt(s,10));let r=this,a=s;a<0&&(a=0);let{params:o,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:h,wrapperEl:f,enabled:m}=r;if(!m&&!i&&!n||r.destroyed||r.animating&&o.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=r.params.speed);let _=Math.min(r.params.slidesPerGroupSkip,a),p=_+Math.floor((a-_)/r.params.slidesPerGroup);p>=l.length&&(p=l.length-1);let g=-l[p];if(o.normalizeSlideIndex)for(let S=0;S<c.length;S+=1){let R=-Math.floor(g*100),b=Math.floor(c[S]*100),y=Math.floor(c[S+1]*100);typeof c[S+1]<"u"?R>=b&&R<y-(y-b)/2?a=S:R>=b&&R<y&&(a=S+1):R>=b&&(a=S)}if(r.initialized&&a!==d&&(!r.allowSlideNext&&(h?g>r.translate&&g>r.minTranslate():g<r.translate&&g<r.minTranslate())||!r.allowSlidePrev&&g>r.translate&&g>r.maxTranslate()&&(d||0)!==a))return!1;a!==(u||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(g);let v;a>d?v="next":a<d?v="prev":v="reset";let x=r.virtual&&r.params.virtual.enabled;if(!(x&&n)&&(h&&-g===r.translate||!h&&g===r.translate))return r.updateActiveIndex(a),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),o.effect!=="slide"&&r.setTranslate(g),v!=="reset"&&(r.transitionStart(t,v),r.transitionEnd(t,v)),!1;if(o.cssMode){let S=r.isHorizontal(),R=h?g:-g;if(e===0)x&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),x&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[S?"scrollLeft":"scrollTop"]=R})):f[S?"scrollLeft":"scrollTop"]=R,x&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return Uf({swiper:r,targetPosition:R,side:S?"left":"top"}),!0;f.scrollTo({[S?"left":"top"]:R,behavior:"smooth"})}return!0}let M=E_().isSafari;return x&&!n&&M&&r.isElement&&r.virtual.update(!1,!1,a),r.setTransition(e),r.setTranslate(g),r.updateActiveIndex(a),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,i),r.transitionStart(t,v),e===0?r.transitionEnd(t,v):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(R){!r||r.destroyed||R.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,v))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function QA(s,e,t,i){s===void 0&&(s=0),t===void 0&&(t=!0),typeof s=="string"&&(s=parseInt(s,10));let n=this;if(n.destroyed)return;typeof e>"u"&&(e=n.params.speed);let r=n.grid&&n.params.grid&&n.params.grid.rows>1,a=s;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)a=a+n.virtual.slidesBefore;else{let o;if(r){let h=a*n.params.grid.rows;o=n.slides.find(f=>f.getAttribute("data-swiper-slide-index")*1===h).column}else o=n.getSlideIndexByData(a);let l=r?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:c}=n.params,u=n.params.slidesPerView;u==="auto"?u=n.slidesPerViewDynamic():(u=Math.ceil(parseFloat(n.params.slidesPerView,10)),c&&u%2===0&&(u=u+1));let d=l-o<u;if(c&&(d=d||o<Math.ceil(u/2)),i&&c&&n.params.slidesPerView!=="auto"&&!r&&(d=!1),d){let h=c?o<n.activeIndex?"prev":"next":o-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?o+1:o-l+1,slideRealIndex:h==="next"?n.realIndex:void 0})}if(r){let h=a*n.params.grid.rows;a=n.slides.find(f=>f.getAttribute("data-swiper-slide-index")*1===h).column}else a=n.getSlideIndexByData(a)}return requestAnimationFrame(()=>{n.slideTo(a,e,t,i)}),n}function eE(s,e,t){e===void 0&&(e=!0);let i=this,{enabled:n,params:r,animating:a}=i;if(!n||i.destroyed)return i;typeof s>"u"&&(s=i.params.speed);let o=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(o=Math.max(i.slidesPerViewDynamic("current",!0),1));let l=i.activeIndex<r.slidesPerGroupSkip?1:o,c=i.virtual&&r.virtual.enabled;if(r.loop){if(a&&!c&&r.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,s,e,t)}),!0}return r.rewind&&i.isEnd?i.slideTo(0,s,e,t):i.slideTo(i.activeIndex+l,s,e,t)}function tE(s,e,t){e===void 0&&(e=!0);let i=this,{params:n,snapGrid:r,slidesGrid:a,rtlTranslate:o,enabled:l,animating:c}=i;if(!l||i.destroyed)return i;typeof s>"u"&&(s=i.params.speed);let u=i.virtual&&n.virtual.enabled;if(n.loop){if(c&&!u&&n.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}let d=o?i.translate:-i.translate;function h(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}let f=h(d),m=r.map(v=>h(v)),_=n.freeMode&&n.freeMode.enabled,p=r[m.indexOf(f)-1];if(typeof p>"u"&&(n.cssMode||_)){let v;r.forEach((x,w)=>{f>=x&&(v=w)}),typeof v<"u"&&(p=_?r[v]:r[v>0?v-1:v])}let g=0;if(typeof p<"u"&&(g=a.indexOf(p),g<0&&(g=i.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(g=g-i.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),n.rewind&&i.isBeginning){let v=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(v,s,e,t)}else if(n.loop&&i.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{i.slideTo(g,s,e,t)}),!0;return i.slideTo(g,s,e,t)}function iE(s,e,t){e===void 0&&(e=!0);let i=this;if(!i.destroyed)return typeof s>"u"&&(s=i.params.speed),i.slideTo(i.activeIndex,s,e,t)}function nE(s,e,t,i){e===void 0&&(e=!0),i===void 0&&(i=.5);let n=this;if(n.destroyed)return;typeof s>"u"&&(s=n.params.speed);let r=n.activeIndex,a=Math.min(n.params.slidesPerGroupSkip,r),o=a+Math.floor((r-a)/n.params.slidesPerGroup),l=n.rtlTranslate?n.translate:-n.translate;if(l>=n.snapGrid[o]){let c=n.snapGrid[o],u=n.snapGrid[o+1];l-c>(u-c)*i&&(r+=n.params.slidesPerGroup)}else{let c=n.snapGrid[o-1],u=n.snapGrid[o];l-c<=(u-c)*i&&(r-=n.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,n.slidesGrid.length-1),n.slideTo(r,s,e,t)}function sE(){let s=this;if(s.destroyed)return;let{params:e,slidesEl:t}=s,i=e.slidesPerView==="auto"?s.slidesPerViewDynamic():e.slidesPerView,n=s.getSlideIndexWhenGrid(s.clickedIndex),r,a=s.isElement?"swiper-slide":`.${e.slideClass}`,o=s.grid&&s.params.grid&&s.params.grid.rows>1;if(e.loop){if(s.animating)return;r=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?s.slideToLoop(r):n>(o?(s.slides.length-i)/2-(s.params.grid.rows-1):s.slides.length-i)?(s.loopFix(),n=s.getSlideIndex(ai(t,`${a}[data-swiper-slide-index="${r}"]`)[0]),Ua(()=>{s.slideTo(n)})):s.slideTo(n)}else s.slideTo(n)}var rE={slideTo:JA,slideToLoop:QA,slideNext:eE,slidePrev:tE,slideReset:iE,slideToClosest:nE,slideToClickedSlide:sE};function aE(s,e){let t=this,{params:i,slidesEl:n}=t;if(!i.loop||t.virtual&&t.params.virtual.enabled)return;let r=()=>{ai(n,`.${i.slideClass}, swiper-slide`).forEach((f,m)=>{f.setAttribute("data-swiper-slide-index",m)})},a=()=>{let h=ai(n,`.${i.slideBlankClass}`);h.forEach(f=>{f.remove()}),h.length>0&&(t.recalcSlides(),t.updateSlides())},o=t.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||o)&&a();let l=i.slidesPerGroup*(o?i.grid.rows:1),c=t.slides.length%l!==0,u=o&&t.slides.length%i.grid.rows!==0,d=h=>{for(let f=0;f<h;f+=1){let m=t.isElement?Mn("swiper-slide",[i.slideBlankClass]):Mn("div",[i.slideClass,i.slideBlankClass]);t.slidesEl.append(m)}};if(c){if(i.loopAddBlankSlides){let h=l-t.slides.length%l;d(h),t.recalcSlides(),t.updateSlides()}else al("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(u){if(i.loopAddBlankSlides){let h=i.grid.rows-t.slides.length%i.grid.rows;d(h),t.recalcSlides(),t.updateSlides()}else al("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();t.loopFix({slideRealIndex:s,direction:i.centeredSlides?void 0:"next",initial:e})}function oE(s){let{slideRealIndex:e,slideTo:t=!0,direction:i,setTranslate:n,activeSlideIndex:r,initial:a,byController:o,byMousewheel:l}=s===void 0?{}:s,c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");let{slides:u,allowSlidePrev:d,allowSlideNext:h,slidesEl:f,params:m}=c,{centeredSlides:_,initialSlide:p}=m;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&m.virtual.enabled){t&&(!m.centeredSlides&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):m.centeredSlides&&c.snapIndex<m.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=d,c.allowSlideNext=h,c.emit("loopFix");return}let g=m.slidesPerView;g==="auto"?g=c.slidesPerViewDynamic():(g=Math.ceil(parseFloat(m.slidesPerView,10)),_&&g%2===0&&(g=g+1));let v=m.slidesPerGroupAuto?g:m.slidesPerGroup,x=_?Math.max(v,Math.ceil(g/2)):v;x%v!==0&&(x+=v-x%v),x+=m.loopAdditionalSlides,c.loopedSlides=x;let w=c.grid&&m.grid&&m.grid.rows>1;u.length<g+x||c.params.effect==="cards"&&u.length<g+x*2?al("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):w&&m.grid.fill==="row"&&al("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let T=[],M=[],S=w?Math.ceil(u.length/m.grid.rows):u.length,R=a&&S-p<g&&!_,b=R?p:c.activeIndex;typeof r>"u"?r=c.getSlideIndex(u.find(k=>k.classList.contains(m.slideActiveClass))):b=r;let y=i==="next"||!i,C=i==="prev"||!i,L=0,P=0,z=(w?u[r].column:r)+(_&&typeof n>"u"?-g/2+.5:0);if(z<x){L=Math.max(x-z,v);for(let k=0;k<x-z;k+=1){let V=k-Math.floor(k/S)*S;if(w){let N=S-V-1;for(let K=u.length-1;K>=0;K-=1)u[K].column===N&&T.push(K)}else T.push(S-V-1)}}else if(z+g>S-x){P=Math.max(z-(S-x*2),v),R&&(P=Math.max(P,g-S+p+1));for(let k=0;k<P;k+=1){let V=k-Math.floor(k/S)*S;w?u.forEach((N,K)=>{N.column===V&&M.push(K)}):M.push(V)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect==="cards"&&u.length<g+x*2&&(M.includes(r)&&M.splice(M.indexOf(r),1),T.includes(r)&&T.splice(T.indexOf(r),1)),C&&T.forEach(k=>{u[k].swiperLoopMoveDOM=!0,f.prepend(u[k]),u[k].swiperLoopMoveDOM=!1}),y&&M.forEach(k=>{u[k].swiperLoopMoveDOM=!0,f.append(u[k]),u[k].swiperLoopMoveDOM=!1}),c.recalcSlides(),m.slidesPerView==="auto"?c.updateSlides():w&&(T.length>0&&C||M.length>0&&y)&&c.slides.forEach((k,V)=>{c.grid.updateSlide(V,k,c.slides)}),m.watchSlidesProgress&&c.updateSlidesOffset(),t){if(T.length>0&&C){if(typeof e>"u"){let k=c.slidesGrid[b],N=c.slidesGrid[b+L]-k;l?c.setTranslate(c.translate-N):(c.slideTo(b+Math.ceil(L),0,!1,!0),n&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-N,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-N))}else if(n){let k=w?T.length/m.grid.rows:T.length;c.slideTo(c.activeIndex+k,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(M.length>0&&y)if(typeof e>"u"){let k=c.slidesGrid[b],N=c.slidesGrid[b-P]-k;l?c.setTranslate(c.translate-N):(c.slideTo(b-P,0,!1,!0),n&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-N,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-N))}else{let k=w?M.length/m.grid.rows:M.length;c.slideTo(c.activeIndex-k,0,!1,!0)}}if(c.allowSlidePrev=d,c.allowSlideNext=h,c.controller&&c.controller.control&&!o){let k={slideRealIndex:e,direction:i,setTranslate:n,activeSlideIndex:r,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(V=>{!V.destroyed&&V.params.loop&&V.loopFix({...k,slideTo:V.params.slidesPerView===m.slidesPerView?t:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...k,slideTo:c.controller.control.params.slidesPerView===m.slidesPerView?t:!1})}c.emit("loopFix")}function lE(){let s=this,{params:e,slidesEl:t}=s;if(!e.loop||!t||s.virtual&&s.params.virtual.enabled)return;s.recalcSlides();let i=[];s.slides.forEach(n=>{let r=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;i[r]=n}),s.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),i.forEach(n=>{t.append(n)}),s.recalcSlides(),s.slideTo(s.realIndex,0)}var cE={loopCreate:aE,loopFix:oE,loopDestroy:lE};function uE(s){let e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;let t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=s?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function dE(){let s=this;s.params.watchOverflow&&s.isLocked||s.params.cssMode||(s.isElement&&(s.__preventObserver__=!0),s[s.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",s.isElement&&requestAnimationFrame(()=>{s.__preventObserver__=!1}))}var hE={setGrabCursor:uE,unsetGrabCursor:dE};function fE(s,e){e===void 0&&(e=this);function t(i){if(!i||i===yi()||i===Ut())return null;i.assignedSlot&&(i=i.assignedSlot);let n=i.closest(s);return!n&&!i.getRootNode?null:n||t(i.getRootNode().host)}return t(e)}function w_(s,e,t){let i=Ut(),{params:n}=s,r=n.edgeSwipeDetection,a=n.edgeSwipeThreshold;return r&&(t<=a||t>=i.innerWidth-a)?r==="prevent"?(e.preventDefault(),!0):!1:!0}function pE(s){let e=this,t=yi(),i=s;i.originalEvent&&(i=i.originalEvent);let n=e.touchEventsData;if(i.type==="pointerdown"){if(n.pointerId!==null&&n.pointerId!==i.pointerId)return;n.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(n.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){w_(e,i,i.targetTouches[0].pageX);return}let{params:r,touches:a,enabled:o}=e;if(!o||!r.simulateTouch&&i.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let l=i.target;if(r.touchEventsTarget==="wrapper"&&!__(l,e.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||n.isTouched&&n.isMoved)return;let c=!!r.noSwipingClass&&r.noSwipingClass!=="",u=i.composedPath?i.composedPath():i.path;c&&i.target&&i.target.shadowRoot&&u&&(l=u[0]);let d=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,h=!!(i.target&&i.target.shadowRoot);if(r.noSwiping&&(h?fE(d,l):l.closest(d))){e.allowClick=!0;return}if(r.swipeHandler&&!l.closest(r.swipeHandler))return;a.currentX=i.pageX,a.currentY=i.pageY;let f=a.currentX,m=a.currentY;if(!w_(e,i,f))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=f,a.startY=m,n.touchStartTime=Er(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(n.allowThresholdMove=!1);let _=!0;l.matches(n.focusableElements)&&(_=!1,l.nodeName==="SELECT"&&(n.isTouched=!1)),t.activeElement&&t.activeElement.matches(n.focusableElements)&&t.activeElement!==l&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!l.matches(n.focusableElements))&&t.activeElement.blur();let p=_&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||p)&&!l.isContentEditable&&i.preventDefault(),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function mE(s){let e=yi(),t=this,i=t.touchEventsData,{params:n,touches:r,rtlTranslate:a,enabled:o}=t;if(!o||!n.simulateTouch&&s.pointerType==="mouse")return;let l=s;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(M=>M.identifier===i.touchId),!c||c.identifier!==i.touchId)return}else c=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",l);return}let u=c.pageX,d=c.pageY;if(l.preventedByNestedSwiper){r.startX=u,r.startY=d;return}if(!t.allowTouchMove){l.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(r,{startX:u,startY:d,currentX:u,currentY:d}),i.touchStartTime=Er());return}if(n.touchReleaseOnEdges&&!n.loop)if(t.isVertical()){if(d<r.startY&&t.translate<=t.maxTranslate()||d>r.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else{if(a&&(u>r.startX&&-t.translate<=t.maxTranslate()||u<r.startX&&-t.translate>=t.minTranslate()))return;if(!a&&(u<r.startX&&t.translate<=t.maxTranslate()||u>r.startX&&t.translate>=t.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(i.focusableElements)&&e.activeElement!==l.target&&l.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&l.target===e.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",l),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=u,r.currentY=d;let h=r.currentX-r.startX,f=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(h**2+f**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let M;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:h*h+f*f>=25&&(M=Math.atan2(Math.abs(f),Math.abs(h))*180/Math.PI,i.isScrolling=t.isHorizontal()?M>n.touchAngle:90-M>n.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",l),typeof i.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(i.startMoving=!0),i.isScrolling||l.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!n.cssMode&&l.cancelable&&l.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&l.stopPropagation();let m=t.isHorizontal()?h:f,_=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;n.oneWayMovement&&(m=Math.abs(m)*(a?1:-1),_=Math.abs(_)*(a?1:-1)),r.diff=m,m*=n.touchRatio,a&&(m=-m,_=-_);let p=t.touchesDirection;t.swipeDirection=m>0?"prev":"next",t.touchesDirection=_>0?"prev":"next";let g=t.params.loop&&!n.cssMode,v=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(g&&v&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){let M=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(M)}i.allowMomentumBounce=!1,n.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}let x;if(new Date().getTime(),n._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&p!==t.touchesDirection&&g&&v&&Math.abs(m)>=1){Object.assign(r,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=m+i.startTranslate;let w=!0,T=n.resistanceRatio;if(n.touchReleaseOnEdges&&(T=0),m>0?(g&&v&&!x&&i.allowThresholdMove&&i.currentTranslate>(n.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(n.slidesPerView!=="auto"&&t.slides.length-n.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(w=!1,n.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+m)**T))):m<0&&(g&&v&&!x&&i.allowThresholdMove&&i.currentTranslate<(n.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(n.slidesPerView!=="auto"&&t.slides.length-n.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(n.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(w=!1,n.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-m)**T))),w&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),n.threshold>0)if(Math.abs(m)>n.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{i.currentTranslate=i.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&t.freeMode||n.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function gE(s){let e=this,t=e.touchEventsData,i=s;i.originalEvent&&(i=i.originalEvent);let n;if(i.type==="touchend"||i.type==="touchcancel"){if(n=[...i.changedTouches].find(T=>T.identifier===t.touchId),!n||n.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;n=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;let{params:a,touches:o,rtlTranslate:l,slidesGrid:c,enabled:u}=e;if(!u||!a.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);let d=Er(),h=d-t.touchStartTime;if(e.allowClick){let T=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(T&&T[0]||i.target,T),e.emit("tap click",i),h<300&&d-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=Er(),Ua(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let f;if(a.followFinger?f=l?e.translate:-e.translate:f=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:f});return}let m=f>=-e.maxTranslate()&&!e.params.loop,_=0,p=e.slidesSizesGrid[0];for(let T=0;T<c.length;T+=T<a.slidesPerGroupSkip?1:a.slidesPerGroup){let M=T<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[T+M]<"u"?(m||f>=c[T]&&f<c[T+M])&&(_=T,p=c[T+M]-c[T]):(m||f>=c[T])&&(_=T,p=c[c.length-1]-c[c.length-2])}let g=null,v=null;a.rewind&&(e.isBeginning?v=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(g=0));let x=(f-c[_])/p,w=_<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(h>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(x>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?g:_+w):e.slideTo(_)),e.swipeDirection==="prev"&&(x>1-a.longSwipesRatio?e.slideTo(_+w):v!==null&&x<0&&Math.abs(x)>a.longSwipesRatio?e.slideTo(v):e.slideTo(_))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(_+w):e.slideTo(_):(e.swipeDirection==="next"&&e.slideTo(g!==null?g:_+w),e.swipeDirection==="prev"&&e.slideTo(v!==null?v:_))}}function b_(){let s=this,{params:e,el:t}=s;if(t&&t.offsetWidth===0)return;e.breakpoints&&s.setBreakpoint();let{allowSlideNext:i,allowSlidePrev:n,snapGrid:r}=s,a=s.virtual&&s.params.virtual.enabled;s.allowSlideNext=!0,s.allowSlidePrev=!0,s.updateSize(),s.updateSlides(),s.updateSlidesClasses();let o=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&s.isEnd&&!s.isBeginning&&!s.params.centeredSlides&&!o?s.slideTo(s.slides.length-1,0,!1,!0):s.params.loop&&!a?s.slideToLoop(s.realIndex,0,!1,!0):s.slideTo(s.activeIndex,0,!1,!0),s.autoplay&&s.autoplay.running&&s.autoplay.paused&&(clearTimeout(s.autoplay.resizeTimeout),s.autoplay.resizeTimeout=setTimeout(()=>{s.autoplay&&s.autoplay.running&&s.autoplay.paused&&s.autoplay.resume()},500)),s.allowSlidePrev=n,s.allowSlideNext=i,s.params.watchOverflow&&r!==s.snapGrid&&s.checkOverflow()}function _E(s){let e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&s.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(s.stopPropagation(),s.stopImmediatePropagation())))}function vE(){let s=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=s;if(!i)return;s.previousTranslate=s.translate,s.isHorizontal()?s.translate=-e.scrollLeft:s.translate=-e.scrollTop,s.translate===0&&(s.translate=0),s.updateActiveIndex(),s.updateSlidesClasses();let n,r=s.maxTranslate()-s.minTranslate();r===0?n=0:n=(s.translate-s.minTranslate())/r,n!==s.progress&&s.updateProgress(t?-s.translate:s.translate),s.emit("setTranslate",s.translate,!1)}function xE(s){let e=this;du(e,s.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function yE(){let s=this;s.documentTouchHandlerProceeded||(s.documentTouchHandlerProceeded=!0,s.params.touchReleaseOnEdges&&(s.el.style.touchAction="auto"))}var R_=(s,e)=>{let t=yi(),{params:i,el:n,wrapperEl:r,device:a}=s,o=!!i.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;!n||typeof n=="string"||(t[l]("touchstart",s.onDocumentTouchStart,{passive:!1,capture:o}),n[l]("touchstart",s.onTouchStart,{passive:!1}),n[l]("pointerdown",s.onTouchStart,{passive:!1}),t[l]("touchmove",s.onTouchMove,{passive:!1,capture:o}),t[l]("pointermove",s.onTouchMove,{passive:!1,capture:o}),t[l]("touchend",s.onTouchEnd,{passive:!0}),t[l]("pointerup",s.onTouchEnd,{passive:!0}),t[l]("pointercancel",s.onTouchEnd,{passive:!0}),t[l]("touchcancel",s.onTouchEnd,{passive:!0}),t[l]("pointerout",s.onTouchEnd,{passive:!0}),t[l]("pointerleave",s.onTouchEnd,{passive:!0}),t[l]("contextmenu",s.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&n[l]("click",s.onClick,!0),i.cssMode&&r[l]("scroll",s.onScroll),i.updateOnWindowResize?s[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",b_,!0):s[c]("observerUpdate",b_,!0),n[l]("load",s.onLoad,{capture:!0}))};function wE(){let s=this,{params:e}=s;s.onTouchStart=pE.bind(s),s.onTouchMove=mE.bind(s),s.onTouchEnd=gE.bind(s),s.onDocumentTouchStart=yE.bind(s),e.cssMode&&(s.onScroll=vE.bind(s)),s.onClick=_E.bind(s),s.onLoad=xE.bind(s),R_(s,"on")}function bE(){R_(this,"off")}var SE={attachEvents:wE,detachEvents:bE},S_=(s,e)=>s.grid&&e.grid&&e.grid.rows>1;function ME(){let s=this,{realIndex:e,initialized:t,params:i,el:n}=s,r=i.breakpoints;if(!r||r&&Object.keys(r).length===0)return;let a=yi(),o=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",l=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?s.el:a.querySelector(i.breakpointsBase),c=s.getBreakpoint(r,o,l);if(!c||s.currentBreakpoint===c)return;let d=(c in r?r[c]:void 0)||s.originalParams,h=S_(s,i),f=S_(s,d),m=s.params.grabCursor,_=d.grabCursor,p=i.enabled;h&&!f?(n.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),s.emitContainerClasses()):!h&&f&&(n.classList.add(`${i.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&i.grid.fill==="column")&&n.classList.add(`${i.containerModifierClass}grid-column`),s.emitContainerClasses()),m&&!_?s.unsetGrabCursor():!m&&_&&s.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(M=>{if(typeof d[M]>"u")return;let S=i[M]&&i[M].enabled,R=d[M]&&d[M].enabled;S&&!R&&s[M].disable(),!S&&R&&s[M].enable()});let g=d.direction&&d.direction!==i.direction,v=i.loop&&(d.slidesPerView!==i.slidesPerView||g),x=i.loop;g&&t&&s.changeDirection(),Hi(s.params,d);let w=s.params.enabled,T=s.params.loop;Object.assign(s,{allowTouchMove:s.params.allowTouchMove,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev}),p&&!w?s.disable():!p&&w&&s.enable(),s.currentBreakpoint=c,s.emit("_beforeBreakpoint",d),t&&(v?(s.loopDestroy(),s.loopCreate(e),s.updateSlides()):!x&&T?(s.loopCreate(e),s.updateSlides()):x&&!T&&s.loopDestroy()),s.emit("breakpoint",d)}function TE(s,e,t){if(e===void 0&&(e="window"),!s||e==="container"&&!t)return;let i=!1,n=Ut(),r=e==="window"?n.innerHeight:t.clientHeight,a=Object.keys(s).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){let l=parseFloat(o.substr(1));return{value:r*l,point:o}}return{value:o,point:o}});a.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<a.length;o+=1){let{point:l,value:c}=a[o];e==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(i=l):c<=t.clientWidth&&(i=l)}return i||"max"}var AE={setBreakpoint:ME,getBreakpoint:TE};function EE(s,e){let t=[];return s.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(n=>{i[n]&&t.push(e+n)}):typeof i=="string"&&t.push(e+i)}),t}function CE(){let s=this,{classNames:e,params:t,rtl:i,el:n,device:r}=s,a=EE(["initialized",t.direction,{"free-mode":s.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),n.classList.add(...e),s.emitContainerClasses()}function RE(){let s=this,{el:e,classNames:t}=s;!e||typeof e=="string"||(e.classList.remove(...t),s.emitContainerClasses())}var PE={addClasses:CE,removeClasses:RE};function IE(){let s=this,{isLocked:e,params:t}=s,{slidesOffsetBefore:i}=t;if(i){let n=s.slides.length-1,r=s.slidesGrid[n]+s.slidesSizesGrid[n]+i*2;s.isLocked=s.size>r}else s.isLocked=s.snapGrid.length===1;t.allowSlideNext===!0&&(s.allowSlideNext=!s.isLocked),t.allowSlidePrev===!0&&(s.allowSlidePrev=!s.isLocked),e&&e!==s.isLocked&&(s.isEnd=!1),e!==s.isLocked&&s.emit(s.isLocked?"lock":"unlock")}var LE={checkOverflow:IE},M_={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function DE(s,e){return function(i){i===void 0&&(i={});let n=Object.keys(i)[0],r=i[n];if(typeof r!="object"||r===null){Hi(e,i);return}if(s[n]===!0&&(s[n]={enabled:!0}),n==="navigation"&&s[n]&&s[n].enabled&&!s[n].prevEl&&!s[n].nextEl&&(s[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&s[n]&&s[n].enabled&&!s[n].el&&(s[n].auto=!0),!(n in s&&"enabled"in r)){Hi(e,i);return}typeof s[n]=="object"&&!("enabled"in s[n])&&(s[n].enabled=!0),s[n]||(s[n]={enabled:!1}),Hi(e,i)}}var Vf={eventsEmitter:PA,update:HA,translate:qA,transition:jA,slide:rE,loop:cE,grabCursor:hE,events:SE,breakpoints:AE,checkOverflow:LE,classes:PE},Gf={},ps=class s{constructor(){let e,t;for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];n.length===1&&n[0].constructor&&Object.prototype.toString.call(n[0]).slice(8,-1)==="Object"?t=n[0]:[e,t]=n,t||(t={}),t=Hi({},t),e&&!t.el&&(t.el=e);let a=yi();if(t.el&&typeof t.el=="string"&&a.querySelectorAll(t.el).length>1){let u=[];return a.querySelectorAll(t.el).forEach(d=>{let h=Hi({},t,{el:d});u.push(new s(h))}),u}let o=this;o.__swiper__=!0,o.support=T_(),o.device=A_({userAgent:t.userAgent}),o.browser=E_(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],t.modules&&Array.isArray(t.modules)&&o.modules.push(...t.modules);let l={};o.modules.forEach(u=>{u({params:t,swiper:o,extendParams:DE(t,l),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});let c=Hi({},M_,l);return o.params=Hi({},c,Gf,t),o.originalParams=Hi({},o.params),o.passedParams=Hi({},t),o.params&&o.params.on&&Object.keys(o.params.on).forEach(u=>{o.on(u,o.params.on[u])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){let{slidesEl:t,params:i}=this,n=ai(t,`.${i.slideClass}, swiper-slide`),r=Cr(n[0]);return Cr(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){let e=this,{slidesEl:t,params:i}=e;e.slides=ai(t,`.${i.slideClass}, swiper-slide`)}enable(){let e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){let e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){let i=this;e=Math.min(Math.max(e,0),1);let n=i.minTranslate(),a=(i.maxTranslate()-n)*e+n;i.translateTo(a,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){let t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=[];e.slides.forEach(i=>{let n=e.getSlideClasses(i);t.push({slideEl:i,classNames:n}),e.emit("_slideClass",i,n)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);let i=this,{params:n,slides:r,slidesGrid:a,slidesSizesGrid:o,size:l,activeIndex:c}=i,u=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let d=r[c]?Math.ceil(r[c].swiperSlideSize):0,h;for(let f=c+1;f<r.length;f+=1)r[f]&&!h&&(d+=Math.ceil(r[f].swiperSlideSize),u+=1,d>l&&(h=!0));for(let f=c-1;f>=0;f-=1)r[f]&&!h&&(d+=r[f].swiperSlideSize,u+=1,d>l&&(h=!0))}else if(e==="current")for(let d=c+1;d<r.length;d+=1)(t?a[d]+o[d]-a[c]<l:a[d]-a[c]<l)&&(u+=1);else for(let d=c-1;d>=0;d-=1)a[c]-a[d]<l&&(u+=1);return u}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&du(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function n(){let a=e.rtlTranslate?e.translate*-1:e.translate,o=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)n(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){let a=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(a.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||n()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);let i=this,n=i.params.direction;return e||(e=n==="horizontal"?"vertical":"horizontal"),e===n||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${n}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){let t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){let t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);let n=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,a=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(n()):ai(i,n())[0];return!a&&t.params.createElements&&(a=Mn("div",t.params.wrapperClass),i.append(a),ai(i,`.${t.params.slideClass}`).forEach(o=>{a.append(o)})),Object.assign(t,{el:i,wrapperEl:a,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:a,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||fs(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||fs(i,"direction")==="rtl"),wrongRTL:fs(a,"display")==="-webkit-box"}),!0}init(e){let t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();let n=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(r=>{r.complete?du(t,r):r.addEventListener("load",a=>{du(t,a.target)})}),Wf(t),t.initialized=!0,Wf(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);let i=this,{params:n,el:r,wrapperEl:a,slides:o}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),n.loop&&i.loopDestroy(),t&&(i.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),a&&a.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),e!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),g_(i)),i.destroyed=!0),null}static extendDefaults(e){Hi(Gf,e)}static get extendedDefaults(){return Gf}static get defaults(){return M_}static installModule(e){s.prototype.__modules__||(s.prototype.__modules__=[]);let t=s.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>s.installModule(t)),s):(s.installModule(e),s)}};Object.keys(Vf).forEach(s=>{Object.keys(Vf[s]).forEach(e=>{ps.prototype[e]=Vf[s][e]})});ps.use([CA,RA]);function ll(s,e,t,i){return s.params.createElements&&Object.keys(i).forEach(n=>{if(!t[n]&&t.auto===!0){let r=ai(s.el,`.${i[n]}`)[0];r||(r=Mn("div",i[n]),r.className=i[n],s.el.append(r)),t[n]=r,e[n]=r}}),t}function Xf(s){let{swiper:e,extendParams:t,on:i,emit:n}=s;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function r(m){let _;return m&&typeof m=="string"&&e.isElement&&(_=e.el.querySelector(m)||e.hostEl.querySelector(m),_)?_:(m&&(typeof m=="string"&&(_=[...document.querySelectorAll(m)]),e.params.uniqueNavElements&&typeof m=="string"&&_&&_.length>1&&e.el.querySelectorAll(m).length===1?_=e.el.querySelector(m):_&&_.length===1&&(_=_[0])),m&&!_?m:_)}function a(m,_){let p=e.params.navigation;m=Ft(m),m.forEach(g=>{g&&(g.classList[_?"add":"remove"](...p.disabledClass.split(" ")),g.tagName==="BUTTON"&&(g.disabled=_),e.params.watchOverflow&&e.enabled&&g.classList[e.isLocked?"add":"remove"](p.lockClass))})}function o(){let{nextEl:m,prevEl:_}=e.navigation;if(e.params.loop){a(_,!1),a(m,!1);return}a(_,e.isBeginning&&!e.params.rewind),a(m,e.isEnd&&!e.params.rewind)}function l(m){m.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),n("navigationPrev"))}function c(m){m.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),n("navigationNext"))}function u(){let m=e.params.navigation;if(e.params.navigation=ll(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(m.nextEl||m.prevEl))return;let _=r(m.nextEl),p=r(m.prevEl);Object.assign(e.navigation,{nextEl:_,prevEl:p}),_=Ft(_),p=Ft(p);let g=(v,x)=>{v&&v.addEventListener("click",x==="next"?c:l),!e.enabled&&v&&v.classList.add(...m.lockClass.split(" "))};_.forEach(v=>g(v,"next")),p.forEach(v=>g(v,"prev"))}function d(){let{nextEl:m,prevEl:_}=e.navigation;m=Ft(m),_=Ft(_);let p=(g,v)=>{g.removeEventListener("click",v==="next"?c:l),g.classList.remove(...e.params.navigation.disabledClass.split(" "))};m.forEach(g=>p(g,"next")),_.forEach(g=>p(g,"prev"))}i("init",()=>{e.params.navigation.enabled===!1?f():(u(),o())}),i("toEdge fromEdge lock unlock",()=>{o()}),i("destroy",()=>{d()}),i("enable disable",()=>{let{nextEl:m,prevEl:_}=e.navigation;if(m=Ft(m),_=Ft(_),e.enabled){o();return}[...m,..._].filter(p=>!!p).forEach(p=>p.classList.add(e.params.navigation.lockClass))}),i("click",(m,_)=>{let{nextEl:p,prevEl:g}=e.navigation;p=Ft(p),g=Ft(g);let v=_.target,x=g.includes(v)||p.includes(v);if(e.isElement&&!x){let w=_.path||_.composedPath&&_.composedPath();w&&(x=w.find(T=>p.includes(T)||g.includes(T)))}if(e.params.navigation.hideOnClick&&!x){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===v||e.pagination.el.contains(v)))return;let w;p.length?w=p[0].classList.contains(e.params.navigation.hiddenClass):g.length&&(w=g[0].classList.contains(e.params.navigation.hiddenClass)),n(w===!0?"navigationShow":"navigationHide"),[...p,...g].filter(T=>!!T).forEach(T=>T.classList.toggle(e.params.navigation.hiddenClass))}});let h=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),o()},f=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:h,disable:f,update:o,init:u,destroy:d})}function qs(s){return s===void 0&&(s=""),`.${s.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function Yf(s){let{swiper:e,extendParams:t,on:i,emit:n}=s,r="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:v=>v,formatFractionTotal:v=>v,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),e.pagination={el:null,bullets:[]};let a,o=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(v,x){let{bulletActiveClass:w}=e.params.pagination;v&&(v=v[`${x==="prev"?"previous":"next"}ElementSibling`],v&&(v.classList.add(`${w}-${x}`),v=v[`${x==="prev"?"previous":"next"}ElementSibling`],v&&v.classList.add(`${w}-${x}-${x}`)))}function u(v,x,w){if(v=v%w,x=x%w,x===v+1)return"next";if(x===v-1)return"previous"}function d(v){let x=v.target.closest(qs(e.params.pagination.bulletClass));if(!x)return;v.preventDefault();let w=Cr(x)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===w)return;let T=u(e.realIndex,w,e.slides.length);T==="next"?e.slideNext():T==="previous"?e.slidePrev():e.slideToLoop(w)}else e.slideTo(w)}function h(){let v=e.rtl,x=e.params.pagination;if(l())return;let w=e.pagination.el;w=Ft(w);let T,M,S=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,R=e.params.loop?Math.ceil(S/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(M=e.previousRealIndex||0,T=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(T=e.snapIndex,M=e.previousSnapIndex):(M=e.previousIndex||0,T=e.activeIndex||0),x.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){let b=e.pagination.bullets,y,C,L;if(x.dynamicBullets&&(a=ol(b[0],e.isHorizontal()?"width":"height",!0),w.forEach(P=>{P.style[e.isHorizontal()?"width":"height"]=`${a*(x.dynamicMainBullets+4)}px`}),x.dynamicMainBullets>1&&M!==void 0&&(o+=T-(M||0),o>x.dynamicMainBullets-1?o=x.dynamicMainBullets-1:o<0&&(o=0)),y=Math.max(T-o,0),C=y+(Math.min(b.length,x.dynamicMainBullets)-1),L=(C+y)/2),b.forEach(P=>{let O=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(z=>`${x.bulletActiveClass}${z}`)].map(z=>typeof z=="string"&&z.includes(" ")?z.split(" "):z).flat();P.classList.remove(...O)}),w.length>1)b.forEach(P=>{let O=Cr(P);O===T?P.classList.add(...x.bulletActiveClass.split(" ")):e.isElement&&P.setAttribute("part","bullet"),x.dynamicBullets&&(O>=y&&O<=C&&P.classList.add(...`${x.bulletActiveClass}-main`.split(" ")),O===y&&c(P,"prev"),O===C&&c(P,"next"))});else{let P=b[T];if(P&&P.classList.add(...x.bulletActiveClass.split(" ")),e.isElement&&b.forEach((O,z)=>{O.setAttribute("part",z===T?"bullet-active":"bullet")}),x.dynamicBullets){let O=b[y],z=b[C];for(let k=y;k<=C;k+=1)b[k]&&b[k].classList.add(...`${x.bulletActiveClass}-main`.split(" "));c(O,"prev"),c(z,"next")}}if(x.dynamicBullets){let P=Math.min(b.length,x.dynamicMainBullets+4),O=(a*P-a)/2-L*a,z=v?"right":"left";b.forEach(k=>{k.style[e.isHorizontal()?z:"top"]=`${O}px`})}}w.forEach((b,y)=>{if(x.type==="fraction"&&(b.querySelectorAll(qs(x.currentClass)).forEach(C=>{C.textContent=x.formatFractionCurrent(T+1)}),b.querySelectorAll(qs(x.totalClass)).forEach(C=>{C.textContent=x.formatFractionTotal(R)})),x.type==="progressbar"){let C;x.progressbarOpposite?C=e.isHorizontal()?"vertical":"horizontal":C=e.isHorizontal()?"horizontal":"vertical";let L=(T+1)/R,P=1,O=1;C==="horizontal"?P=L:O=L,b.querySelectorAll(qs(x.progressbarFillClass)).forEach(z=>{z.style.transform=`translate3d(0,0,0) scaleX(${P}) scaleY(${O})`,z.style.transitionDuration=`${e.params.speed}ms`})}x.type==="custom"&&x.renderCustom?(ka(b,x.renderCustom(e,T+1,R)),y===0&&n("paginationRender",b)):(y===0&&n("paginationRender",b),n("paginationUpdate",b)),e.params.watchOverflow&&e.enabled&&b.classList[e.isLocked?"add":"remove"](x.lockClass)})}function f(){let v=e.params.pagination;if(l())return;let x=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length,w=e.pagination.el;w=Ft(w);let T="";if(v.type==="bullets"){let M=e.params.loop?Math.ceil(x/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&M>x&&(M=x);for(let S=0;S<M;S+=1)v.renderBullet?T+=v.renderBullet.call(e,S,v.bulletClass):T+=`<${v.bulletElement} ${e.isElement?'part="bullet"':""} class="${v.bulletClass}"></${v.bulletElement}>`}v.type==="fraction"&&(v.renderFraction?T=v.renderFraction.call(e,v.currentClass,v.totalClass):T=`<span class="${v.currentClass}"></span> / <span class="${v.totalClass}"></span>`),v.type==="progressbar"&&(v.renderProgressbar?T=v.renderProgressbar.call(e,v.progressbarFillClass):T=`<span class="${v.progressbarFillClass}"></span>`),e.pagination.bullets=[],w.forEach(M=>{v.type!=="custom"&&ka(M,T||""),v.type==="bullets"&&e.pagination.bullets.push(...M.querySelectorAll(qs(v.bulletClass)))}),v.type!=="custom"&&n("paginationRender",w[0])}function m(){e.params.pagination=ll(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});let v=e.params.pagination;if(!v.el)return;let x;typeof v.el=="string"&&e.isElement&&(x=e.el.querySelector(v.el)),!x&&typeof v.el=="string"&&(x=[...document.querySelectorAll(v.el)]),x||(x=v.el),!(!x||x.length===0)&&(e.params.uniqueNavElements&&typeof v.el=="string"&&Array.isArray(x)&&x.length>1&&(x=[...e.el.querySelectorAll(v.el)],x.length>1&&(x=x.find(w=>za(w,".swiper")[0]===e.el))),Array.isArray(x)&&x.length===1&&(x=x[0]),Object.assign(e.pagination,{el:x}),x=Ft(x),x.forEach(w=>{v.type==="bullets"&&v.clickable&&w.classList.add(...(v.clickableClass||"").split(" ")),w.classList.add(v.modifierClass+v.type),w.classList.add(e.isHorizontal()?v.horizontalClass:v.verticalClass),v.type==="bullets"&&v.dynamicBullets&&(w.classList.add(`${v.modifierClass}${v.type}-dynamic`),o=0,v.dynamicMainBullets<1&&(v.dynamicMainBullets=1)),v.type==="progressbar"&&v.progressbarOpposite&&w.classList.add(v.progressbarOppositeClass),v.clickable&&w.addEventListener("click",d),e.enabled||w.classList.add(v.lockClass)}))}function _(){let v=e.params.pagination;if(l())return;let x=e.pagination.el;x&&(x=Ft(x),x.forEach(w=>{w.classList.remove(v.hiddenClass),w.classList.remove(v.modifierClass+v.type),w.classList.remove(e.isHorizontal()?v.horizontalClass:v.verticalClass),v.clickable&&(w.classList.remove(...(v.clickableClass||"").split(" ")),w.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(w=>w.classList.remove(...v.bulletActiveClass.split(" ")))}i("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;let v=e.params.pagination,{el:x}=e.pagination;x=Ft(x),x.forEach(w=>{w.classList.remove(v.horizontalClass,v.verticalClass),w.classList.add(e.isHorizontal()?v.horizontalClass:v.verticalClass)})}),i("init",()=>{e.params.pagination.enabled===!1?g():(m(),f(),h())}),i("activeIndexChange",()=>{typeof e.snapIndex>"u"&&h()}),i("snapIndexChange",()=>{h()}),i("snapGridLengthChange",()=>{f(),h()}),i("destroy",()=>{_()}),i("enable disable",()=>{let{el:v}=e.pagination;v&&(v=Ft(v),v.forEach(x=>x.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),i("lock unlock",()=>{h()}),i("click",(v,x)=>{let w=x.target,T=Ft(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&T&&T.length>0&&!w.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&w===e.navigation.nextEl||e.navigation.prevEl&&w===e.navigation.prevEl))return;let M=T[0].classList.contains(e.params.pagination.hiddenClass);n(M===!0?"paginationShow":"paginationHide"),T.forEach(S=>S.classList.toggle(e.params.pagination.hiddenClass))}});let p=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:v}=e.pagination;v&&(v=Ft(v),v.forEach(x=>x.classList.remove(e.params.pagination.paginationDisabledClass))),m(),f(),h()},g=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:v}=e.pagination;v&&(v=Ft(v),v.forEach(x=>x.classList.add(e.params.pagination.paginationDisabledClass))),_()};Object.assign(e.pagination,{enable:p,disable:g,render:f,update:h,init:m,destroy:_})}ps.use([Xf,Yf]);var L_=new WeakMap;function D_(s=document){Array.from(s.querySelectorAll(".swiper")).forEach(t=>{if(!t||!(t instanceof Element)||L_.has(t))return;t.classList.add("cw-swiper");let i=t.querySelector(".swiper-button-next"),n=t.querySelector(".swiper-button-prev"),r=t.querySelector(".swiper-pagination"),a=i instanceof Element&&n instanceof Element?{nextEl:i,prevEl:n}:!1,o=r instanceof Element,l=["Quality Assurance","Design Review","Construction Support"],u={loop:!0,slidesPerView:1,spaceBetween:16,centeredSlides:!1,watchOverflow:!0,breakpoints:{0:{slidesPerView:1,spaceBetween:12},640:{slidesPerView:1,spaceBetween:16},900:{slidesPerView:1,spaceBetween:24},1200:{slidesPerView:1,spaceBetween:32}},navigation:a,pagination:o?{el:r,clickable:!0,renderBullet:function(d,h){let f=l[d]||`Slide ${d+1}`,_=d<l.length-1?'<span class="cw-swiper-dot" aria-hidden="true"></span>':"";return`<span class="${h} cw-swiper-bullet-wrapper"><span class="cw-swiper-label">${f}</span>${_}</span>`}}:!1,a11y:!0,keyboard:{enabled:!0},simulateTouch:!0};try{let d=new ps(t,u);L_.set(t,d);try{typeof window<"u"&&(window.__cw_swipers=window.__cw_swipers||[],window.__cw_swipers.push(d));let h=t.querySelector(".swiper-wrapper"),f=h?h.querySelectorAll(".swiper-slide").length:t.querySelectorAll(".swiper-slide").length;console.debug("Swiper initialized",{container:t.id||t.className||t.tagName,slides:f,hasWrapper:!!h,pagination:!!t.querySelector(".swiper-pagination"),navigationPrev:!!t.querySelector(".swiper-button-prev"),navigationNext:!!t.querySelector(".swiper-button-next"),options:u})}catch(h){console.warn("Swiper debug logging failed",h)}}catch(d){console.error("Swiper init failed for container",t,d)}})}Hs.registerPlugin(Ke);window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{new sl,Df();try{D_()}catch(s){console.warn("Swiper init failed",s)}});document.addEventListener("DOMContentLoaded",()=>{function s(e){e.forEach(t=>{let i=document.createElement("canvas");i.classList.add("webgl"),t.appendChild(i);try{new nl(i,t),console.log("commit achieved")}catch(n){console.error("Error initializing Experience:",n)}})}s(document.querySelectorAll('[data-3d="lining"]'))});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
