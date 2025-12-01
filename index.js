"use strict";(()=>{var q_=Object.defineProperty;var Z_=(r,e,t)=>e in r?q_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Do=(r,e,t)=>(Z_(r,typeof e!="symbol"?e+"":e,t),t);var mu="164";var K_=0,Md=1,$_=2;var cm=1,gu=2,Yi=3,Ti=0,Ln=1,Pn=2,vs=0,Wr=1,Sd=2,bd=3,wd=4,J_=5,Js=100,j_=101,Q_=102,e0=103,t0=104,n0=200,i0=201,s0=202,r0=203,Fh=204,Bh=205,o0=206,a0=207,c0=208,l0=209,h0=210,u0=211,f0=212,d0=213,p0=214,m0=0,g0=1,_0=2,Tc=3,x0=4,y0=5,v0=6,M0=7,lm=0,S0=1,b0=2,Ms=0,w0=1,T0=2,A0=3,_u=4,E0=5,R0=6,C0=7,Td="attached",P0="detached",hm=300,Zr=301,Kr=302,kh=303,zh=304,nl=306,Ai=1e3,Zi=1001,qo=1002,ln=1003,xu=1004;var Hr=1005;var In=1006,Go=1007;var Si=1008;var Ss=1009,I0=1010,L0=1011,um=1012,fm=1013,$r=1014,bi=1015,il=1016,dm=1017,pm=1018,ra=1020,D0=35902,N0=1021,U0=1022,pi=1023,O0=1024,F0=1025,Xr=1026,Zo=1027,mm=1028,gm=1029,B0=1030,_m=1031,xm=1033,nh=33776,ih=33777,sh=33778,rh=33779,Ad=35840,Ed=35841,Rd=35842,Cd=35843,Pd=36196,Id=37492,Ld=37496,Dd=37808,Nd=37809,Ud=37810,Od=37811,Fd=37812,Bd=37813,kd=37814,zd=37815,Hd=37816,Vd=37817,Gd=37818,Wd=37819,Xd=37820,Yd=37821,oh=36492,qd=36494,Zd=36495,k0=36283,Kd=36284,$d=36285,Jd=36286;var Jr=2300,Qs=2301,ah=2302,jd=2400,Qd=2401,ep=2402,z0=2500;var ym=0,sl=1,oa=2,H0=3200,V0=3201,vm=0,G0=1,xs="",Tt="srgb",kt="srgb-linear",yu="display-p3",rl="display-p3-linear",Ac="linear",Mt="srgb",Ec="rec709",Rc="p3";var br=7680;var tp=519,W0=512,X0=513,Y0=514,Mm=515,q0=516,Z0=517,K0=518,$0=519,Hh=35044;var np="300 es",Ki=2e3,Cc=2001,bs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ip=1234567,Wo=Math.PI/180,jr=180/Math.PI;function mi(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[r&255]+on[r>>8&255]+on[r>>16&255]+on[r>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function cn(r,e,t){return Math.max(e,Math.min(t,r))}function vu(r,e){return(r%e+e)%e}function J0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function j0(r,e,t){return r!==e?(t-r)/(e-r):0}function Xo(r,e,t){return(1-t)*r+t*e}function Q0(r,e,t,n){return Xo(r,e,1-Math.exp(-t*n))}function ex(r,e=1){return e-Math.abs(vu(r,e*2)-e)}function tx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function nx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ix(r,e){return r+Math.floor(Math.random()*(e-r+1))}function sx(r,e){return r+Math.random()*(e-r)}function rx(r){return r*(.5-Math.random())}function ox(r){r!==void 0&&(ip=r);let e=ip+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ax(r){return r*Wo}function cx(r){return r*jr}function lx(r){return(r&r-1)===0&&r!==0}function hx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ux(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function fx(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*u,c*f,a*l);break;case"YZY":r.set(c*f,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*f,a*h,a*l);break;case"XZX":r.set(a*h,c*_,c*d,a*l);break;case"YXY":r.set(c*d,a*h,c*_,a*l);break;case"ZYZ":r.set(c*_,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function di(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function dt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Sm={DEG2RAD:Wo,RAD2DEG:jr,generateUUID:mi,clamp:cn,euclideanModulo:vu,mapLinear:J0,inverseLerp:j0,lerp:Xo,damp:Q0,pingpong:ex,smoothstep:tx,smootherstep:nx,randInt:ix,randFloat:sx,randFloatSpread:rx,seededRandom:ox,degToRad:ax,radToDeg:cx,isPowerOfTwo:lx,ceilPowerOfTwo:hx,floorPowerOfTwo:ux,setQuaternionFromProperEuler:fx,normalize:dt,denormalize:di},Qe=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ke=class r{constructor(e,t,n,i,s,o,a,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],S=i[1],M=i[4],y=i[7],E=i[2],A=i[5],b=i[8];return s[0]=o*g+a*S+c*E,s[3]=o*p+a*M+c*A,s[6]=o*m+a*y+c*b,s[1]=l*g+h*S+u*E,s[4]=l*p+h*M+u*A,s[7]=l*m+h*y+u*b,s[2]=f*g+d*S+_*E,s[5]=f*p+d*M+_*A,s[8]=f*m+d*y+_*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*s,d=l*s-o*c,_=t*u+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=u*g,e[1]=(i*l-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(h*t-i*c)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ch.makeScale(e,t)),this}rotate(e){return this.premultiply(ch.makeRotation(-e)),this}translate(e,t){return this.premultiply(ch.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ch=new Ke;function bm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ko(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dx(){let r=Ko("canvas");return r.style.display="block",r}var sp={};function wm(r){r in sp||(sp[r]=!0,console.warn(r))}var rp=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),op=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ja={[kt]:{transfer:Ac,primaries:Ec,toReference:r=>r,fromReference:r=>r},[Tt]:{transfer:Mt,primaries:Ec,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[rl]:{transfer:Ac,primaries:Rc,toReference:r=>r.applyMatrix3(op),fromReference:r=>r.applyMatrix3(rp)},[yu]:{transfer:Mt,primaries:Rc,toReference:r=>r.convertSRGBToLinear().applyMatrix3(op),fromReference:r=>r.applyMatrix3(rp).convertLinearToSRGB()}},px=new Set([kt,rl]),ht={enabled:!0,_workingColorSpace:kt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!px.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=Ja[e].toReference,i=Ja[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ja[r].primaries},getTransfer:function(r){return r===xs?Ac:Ja[r].transfer}};function Yr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function lh(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var wr,Vh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wr===void 0&&(wr=Ko("canvas")),wr.width=e.width,wr.height=e.height;let n=wr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ko("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Yr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yr(t[n]/255)*255):t[n]=Yr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mx=0,Pc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(hh(i[o].image)):s.push(hh(i[o]))}else s=hh(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function hh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Vh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gx=0,Qt=class r extends bs{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Zi,i=Zi,s=In,o=Si,a=pi,c=Ss,l=r.DEFAULT_ANISOTROPY,h=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=mi(),this.name="",this.source=new Pc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=hm;Qt.DEFAULT_ANISOTROPY=1;var mt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],_=c[9],g=c[2],p=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,y=(d+1)/2,E=(m+1)/2,A=(h+f)/4,b=(u+g)/4,L=(_+p)/4;return M>y&&M>E?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=A/n,s=b/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=L/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=b/s,i=L/s),this.set(n,i,s,t),this}let S=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(u-g)/S,this.z=(f-h)/S,this.w=Math.acos((l+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gh=class extends bs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Pc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$i=class extends Gh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ic=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wh=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(u!==g||c!==f||l!==d||h!==_){let p=1-a,m=c*f+l*d+h*_+u*g,S=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let E=Math.sqrt(M),A=Math.atan2(E,m*S);p=Math.sin(p*A)/E,a=Math.sin(a*A)/E}let y=a*S;if(c=c*p+f*y,l=l*p+d*y,h=h*p+_*y,u=u*p+g*y,p===1-a){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+h*u+c*d-l*f,e[t+1]=c*_+h*f+l*u-a*d,e[t+2]=l*_+h*d+a*f-c*u,e[t+3]=h*_-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),f=c(n/2),d=c(i/2),_=c(s/2);switch(o){case"XYZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"YZX":this._x=f*h*u+l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u-f*d*_;break;case"XZY":this._x=f*h*u-l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ap.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ap.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uh.copy(this).projectOnVector(e),this.sub(uh)}reflect(e){return this.sub(uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uh=new N,ap=new Gt,jn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hi):hi.fromBufferAttribute(s,o),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ja.copy(n.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),Qa.subVectors(this.max,No),Tr.subVectors(e.a,No),Ar.subVectors(e.b,No),Er.subVectors(e.c,No),fs.subVectors(Ar,Tr),ds.subVectors(Er,Ar),Ws.subVectors(Tr,Er);let t=[0,-fs.z,fs.y,0,-ds.z,ds.y,0,-Ws.z,Ws.y,fs.z,0,-fs.x,ds.z,0,-ds.x,Ws.z,0,-Ws.x,-fs.y,fs.x,0,-ds.y,ds.x,0,-Ws.y,Ws.x,0];return!fh(t,Tr,Ar,Er,Qa)||(t=[1,0,0,0,1,0,0,0,1],!fh(t,Tr,Ar,Er,Qa))?!1:(ec.crossVectors(fs,ds),t=[ec.x,ec.y,ec.z],fh(t,Tr,Ar,Er,Qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},zi=[new N,new N,new N,new N,new N,new N,new N,new N],hi=new N,ja=new jn,Tr=new N,Ar=new N,Er=new N,fs=new N,ds=new N,Ws=new N,No=new N,Qa=new N,ec=new N,Xs=new N;function fh(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Xs.fromArray(r,s);let a=i.x*Math.abs(Xs.x)+i.y*Math.abs(Xs.y)+i.z*Math.abs(Xs.z),c=e.dot(Xs),l=t.dot(Xs),h=n.dot(Xs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var _x=new jn,Uo=new N,dh=new N,Hn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_x.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);let t=Uo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Uo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(dh)),this.expandByPoint(Uo.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hi=new N,ph=new N,tc=new N,ps=new N,mh=new N,nc=new N,gh=new N,Qr=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ph.copy(e).add(t).multiplyScalar(.5),tc.copy(t).sub(e).normalize(),ps.copy(this.origin).sub(ph);let s=e.distanceTo(t)*.5,o=-this.direction.dot(tc),a=ps.dot(this.direction),c=-ps.dot(tc),l=ps.lengthSq(),h=Math.abs(1-o*o),u,f,d,_;if(h>0)if(u=o*c-a,f=o*a-c,_=s*h,u>=0)if(f>=-_)if(f<=_){let g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ph).addScaledVector(tc,f),d}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);let n=Hi.dot(this.direction),i=Hi.dot(Hi)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,i,s){mh.subVectors(t,e),nc.subVectors(n,e),gh.crossVectors(mh,nc);let o=this.direction.dot(gh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ps.subVectors(this.origin,e);let c=a*this.direction.dot(nc.crossVectors(ps,nc));if(c<0)return null;let l=a*this.direction.dot(mh.cross(ps));if(l<0||c+l>o)return null;let h=-a*ps.dot(gh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class r{constructor(e,t,n,i,s,o,a,c,l,h,u,f,d,_,g,p){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,u,f,d,_,g,p)}set(e,t,n,i,s,o,a,c,l,h,u,f,d,_,g,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),o=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=o*h,d=o*u,_=a*h,g=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+_*l,t[5]=f-g*l,t[9]=-a*c,t[2]=g-f*l,t[6]=_+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,_=l*h,g=l*u;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,_=l*h,g=l*u;t[0]=f-g*a,t[4]=-o*u,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,_=a*h,g=a*u;t[0]=c*h,t[4]=_*l-d,t[8]=f*l+g,t[1]=c*u,t[5]=g*l+f,t[9]=d*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=g-f*u,t[8]=_*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+_,t[10]=f-g*u}else if(e.order==="XZY"){let f=o*c,d=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+g,t[5]=o*h,t[9]=d*u-_,t[2]=_*u-d,t[6]=a*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xx,e,yx)}lookAt(e,t,n){let i=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),ms.crossVectors(n,kn),ms.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),ms.crossVectors(n,kn)),ms.normalize(),ic.crossVectors(kn,ms),i[0]=ms.x,i[4]=ic.x,i[8]=kn.x,i[1]=ms.y,i[5]=ic.y,i[9]=kn.y,i[2]=ms.z,i[6]=ic.z,i[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],S=n[3],M=n[7],y=n[11],E=n[15],A=i[0],b=i[4],L=i[8],v=i[12],x=i[1],I=i[5],D=i[9],P=i[13],B=i[2],G=i[6],Z=i[10],X=i[14],O=i[3],j=i[7],R=i[11],oe=i[15];return s[0]=o*A+a*x+c*B+l*O,s[4]=o*b+a*I+c*G+l*j,s[8]=o*L+a*D+c*Z+l*R,s[12]=o*v+a*P+c*X+l*oe,s[1]=h*A+u*x+f*B+d*O,s[5]=h*b+u*I+f*G+d*j,s[9]=h*L+u*D+f*Z+d*R,s[13]=h*v+u*P+f*X+d*oe,s[2]=_*A+g*x+p*B+m*O,s[6]=_*b+g*I+p*G+m*j,s[10]=_*L+g*D+p*Z+m*R,s[14]=_*v+g*P+p*X+m*oe,s[3]=S*A+M*x+y*B+E*O,s[7]=S*b+M*I+y*G+E*j,s[11]=S*L+M*D+y*Z+E*R,s[15]=S*v+M*P+y*X+E*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+s*c*u-i*l*u-s*a*f+n*l*f+i*a*d-n*c*d)+g*(+t*c*d-t*l*f+s*o*f-i*o*d+i*l*h-s*c*h)+p*(+t*l*u-t*a*d-s*o*u+n*o*d+s*a*h-n*l*h)+m*(-i*a*h-t*c*u+t*a*f+i*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],S=u*p*l-g*f*l+g*c*d-a*p*d-u*c*m+a*f*m,M=_*f*l-h*p*l-_*c*d+o*p*d+h*c*m-o*f*m,y=h*g*l-_*u*l+_*a*d-o*g*d-h*a*m+o*u*m,E=_*u*c-h*g*c-_*a*f+o*g*f+h*a*p-o*u*p,A=t*S+n*M+i*y+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/A;return e[0]=S*b,e[1]=(g*f*s-u*p*s-g*i*d+n*p*d+u*i*m-n*f*m)*b,e[2]=(a*p*s-g*c*s+g*i*l-n*p*l-a*i*m+n*c*m)*b,e[3]=(u*c*s-a*f*s-u*i*l+n*f*l+a*i*d-n*c*d)*b,e[4]=M*b,e[5]=(h*p*s-_*f*s+_*i*d-t*p*d-h*i*m+t*f*m)*b,e[6]=(_*c*s-o*p*s-_*i*l+t*p*l+o*i*m-t*c*m)*b,e[7]=(o*f*s-h*c*s+h*i*l-t*f*l-o*i*d+t*c*d)*b,e[8]=y*b,e[9]=(_*u*s-h*g*s-_*n*d+t*g*d+h*n*m-t*u*m)*b,e[10]=(o*g*s-_*a*s+_*n*l-t*g*l-o*n*m+t*a*m)*b,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*d-t*a*d)*b,e[12]=E*b,e[13]=(h*g*i-_*u*i+_*n*f-t*g*f-h*n*p+t*u*p)*b,e[14]=(_*a*i-o*g*i-_*n*c+t*g*c+o*n*p-t*a*p)*b,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*f+t*a*f)*b,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,f=s*l,d=s*h,_=s*u,g=o*h,p=o*u,m=a*u,S=c*l,M=c*h,y=c*u,E=n.x,A=n.y,b=n.z;return i[0]=(1-(g+m))*E,i[1]=(d+y)*E,i[2]=(_-M)*E,i[3]=0,i[4]=(d-y)*A,i[5]=(1-(f+m))*A,i[6]=(p+S)*A,i[7]=0,i[8]=(_+M)*b,i[9]=(p-S)*b,i[10]=(1-(f+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Rr.set(i[0],i[1],i[2]).length(),o=Rr.set(i[4],i[5],i[6]).length(),a=Rr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ui.copy(this);let l=1/s,h=1/o,u=1/a;return ui.elements[0]*=l,ui.elements[1]*=l,ui.elements[2]*=l,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,t.setFromRotationMatrix(ui),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Ki){let c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d,_;if(a===Ki)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Cc)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Ki){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-s),f=(t+e)*l,d=(n+i)*h,_,g;if(a===Ki)_=(o+s)*u,g=-2*u;else if(a===Cc)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Rr=new N,ui=new Ge,xx=new N(0,0,0),yx=new N(1,1,1),ms=new N,ic=new N,kn=new N,cp=new Ge,lp=new Gt,Ei=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(cn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lp.setFromEuler(this),this.setFromQuaternion(lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";var Lc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vx=0,hp=new N,Cr=new Gt,Vi=new Ge,sc=new N,Oo=new N,Mx=new N,Sx=new Gt,up=new N(1,0,0),fp=new N(0,1,0),dp=new N(0,0,1),pp={type:"added"},bx={type:"removed"},Pr={type:"childadded",child:null},_h={type:"childremoved",child:null},Lt=class r extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new N,t=new Ei,n=new Gt,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ke}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(up,e)}rotateY(e){return this.rotateOnAxis(fp,e)}rotateZ(e){return this.rotateOnAxis(dp,e)}translateOnAxis(e,t){return hp.copy(e).applyQuaternion(this.quaternion),this.position.add(hp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(up,e)}translateY(e){return this.translateOnAxis(fp,e)}translateZ(e){return this.translateOnAxis(dp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sc.copy(e):sc.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Oo,sc,this.up):Vi.lookAt(sc,Oo,this.up),this.quaternion.setFromRotationMatrix(Vi),i&&(Vi.extractRotation(i.matrixWorld),Cr.setFromRotationMatrix(Vi),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pp),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bx),_h.child=e,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pp),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,Mx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,Sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++){let a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Lt.DEFAULT_UP=new N(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new N,Gi=new N,xh=new N,Wi=new N,Ir=new N,Lr=new N,mp=new N,yh=new N,vh=new N,Mh=new N,Vr=class r{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fi.subVectors(e,t),i.cross(fi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){fi.subVectors(i,t),Gi.subVectors(n,t),xh.subVectors(e,t);let o=fi.dot(fi),a=fi.dot(Gi),c=fi.dot(xh),l=Gi.dot(Gi),h=Gi.dot(xh),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,_=(o*h-a*c)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Wi.x),c.addScaledVector(o,Wi.y),c.addScaledVector(a,Wi.z),c)}static isFrontFacing(e,t,n,i){return fi.subVectors(n,t),Gi.subVectors(e,t),fi.cross(Gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),fi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Ir.subVectors(i,n),Lr.subVectors(s,n),yh.subVectors(e,n);let c=Ir.dot(yh),l=Lr.dot(yh);if(c<=0&&l<=0)return t.copy(n);vh.subVectors(e,i);let h=Ir.dot(vh),u=Lr.dot(vh);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ir,o);Mh.subVectors(e,s);let d=Ir.dot(Mh),_=Lr.dot(Mh);if(_>=0&&d<=_)return t.copy(s);let g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Lr,a);let p=h*_-d*u;if(p<=0&&u-h>=0&&d-_>=0)return mp.subVectors(s,i),a=(u-h)/(u-h+(d-_)),t.copy(i).addScaledVector(mp,a);let m=1/(p+g+f);return o=g*m,a=f*m,t.copy(n).addScaledVector(Ir,o).addScaledVector(Lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},rc={h:0,s:0,l:0};function Sh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=vu(e,1),t=cn(t,0,1),n=cn(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Sh(o,s,e+1/3),this.g=Sh(o,s,e),this.b=Sh(o,s,e-1/3)}return ht.toWorkingColorSpace(this,i),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=Tm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=lh(e.r),this.g=lh(e.g),this.b=lh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return ht.fromWorkingColorSpace(an.copy(this),e),Math.round(cn(an.r*255,0,255))*65536+Math.round(cn(an.g*255,0,255))*256+Math.round(cn(an.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(an.copy(this),t);let n=an.r,i=an.g,s=an.b,o=Math.max(n,i,s),a=Math.min(n,i,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Tt){ht.fromWorkingColorSpace(an.copy(this),e);let t=an.r,n=an.g,i=an.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(gs),this.setHSL(gs.h+e,gs.s+t,gs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gs),e.getHSL(rc);let n=Xo(gs.h,rc.h,t),i=Xo(gs.s,rc.s,t),s=Xo(gs.l,rc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new Be;Be.NAMES=Tm;var wx=0,Vn=class extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Wr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Bh,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Tc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fh&&(n.blendSrc=this.blendSrc),this.blendDst!==Bh&&(n.blendDst=this.blendDst),this.blendEquation!==Js&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(n.stencilFail=this.stencilFail),this.stencilZFail!==br&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ri=class extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=lm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new N,oc=new Qe,It=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oc.fromBufferAttribute(this,t),oc.applyMatrix3(e),this.setXY(t,oc.x,oc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hh&&(e.usage=this.usage),e}};var Dc=class extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Nc=class extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Jn=class extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}},Tx=0,$n=new Ge,bh=new Lt,Dr=new N,zn=new jn,Fo=new jn,Kt=new N,Dn=class r extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bm(e)?Nc:Dc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return bh.lookAt(e),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(zn.min,Fo.min),zn.expandByPoint(Kt),Kt.addVectors(zn.max,Fo.max),zn.expandByPoint(Kt)):(zn.expandByPoint(Fo.min),zn.expandByPoint(Fo.max))}zn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Kt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Kt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Kt.fromBufferAttribute(a,l),c&&(Dr.fromBufferAttribute(e,l),Kt.add(Dr)),i=Math.max(i,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new N,c[L]=new N;let l=new N,h=new N,u=new N,f=new Qe,d=new Qe,_=new Qe,g=new N,p=new N;function m(L,v,x){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,x),f.fromBufferAttribute(s,L),d.fromBufferAttribute(s,v),_.fromBufferAttribute(s,x),h.sub(l),u.sub(l),d.sub(f),_.sub(f);let I=1/(d.x*_.y-_.x*d.y);isFinite(I)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(I),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(I),a[L].add(g),a[v].add(g),a[x].add(g),c[L].add(p),c[v].add(p),c[x].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,v=S.length;L<v;++L){let x=S[L],I=x.start,D=x.count;for(let P=I,B=I+D;P<B;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new N,y=new N,E=new N,A=new N;function b(L){E.fromBufferAttribute(i,L),A.copy(E);let v=a[L];M.copy(v),M.sub(E.multiplyScalar(E.dot(v))).normalize(),y.crossVectors(A,v);let I=y.dot(c[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,I)}for(let L=0,v=S.length;L<v;++L){let x=S[L],I=x.start,D=x.count;for(let P=I,B=I+D;P<B;P+=3)b(e.getX(P+0)),b(e.getX(P+1)),b(e.getX(P+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new N,s=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){let _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,_=0;for(let g=0,p=c.length;g<p;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*h;for(let m=0;m<h;m++)f[_++]=l[d++]}return new It(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gp=new Ge,Ys=new Qr,ac=new Hn,_p=new N,Nr=new N,Ur=new N,Or=new N,wh=new N,cc=new N,lc=new Qe,hc=new Qe,uc=new Qe,xp=new N,yp=new N,vp=new N,fc=new N,dc=new N,hn=class extends Lt{constructor(e=new Dn,t=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){cc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(wh.fromBufferAttribute(u,e),o?cc.addScaledVector(wh,h):cc.addScaledVector(wh.sub(t),h))}t.add(cc)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(s),Ys.copy(e.ray).recast(e.near),!(ac.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(ac,_p)===null||Ys.origin.distanceToSquared(_p)>(e.far-e.near)**2))&&(gp.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(gp),!(n.boundingBox!==null&&Ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let p=f[_],m=o[p.materialIndex],S=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=S,E=M;y<E;y+=3){let A=a.getX(y),b=a.getX(y+1),L=a.getX(y+2);i=pc(this,m,e,n,l,h,u,A,b,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){let S=a.getX(p),M=a.getX(p+1),y=a.getX(p+2);i=pc(this,o,e,n,l,h,u,S,M,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let p=f[_],m=o[p.materialIndex],S=Math.max(p.start,d.start),M=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let y=S,E=M;y<E;y+=3){let A=y,b=y+1,L=y+2;i=pc(this,m,e,n,l,h,u,A,b,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){let S=p,M=p+1,y=p+2;i=pc(this,o,e,n,l,h,u,S,M,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function Ax(r,e,t,n,i,s,o,a){let c;if(e.side===Ln?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Ti,a),c===null)return null;dc.copy(a),dc.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(dc);return l<t.near||l>t.far?null:{distance:l,point:dc.clone(),object:r}}function pc(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Nr),r.getVertexPosition(c,Ur),r.getVertexPosition(l,Or);let h=Ax(r,e,t,n,Nr,Ur,Or,fc);if(h){i&&(lc.fromBufferAttribute(i,a),hc.fromBufferAttribute(i,c),uc.fromBufferAttribute(i,l),h.uv=Vr.getInterpolation(fc,Nr,Ur,Or,lc,hc,uc,new Qe)),s&&(lc.fromBufferAttribute(s,a),hc.fromBufferAttribute(s,c),uc.fromBufferAttribute(s,l),h.uv1=Vr.getInterpolation(fc,Nr,Ur,Or,lc,hc,uc,new Qe)),o&&(xp.fromBufferAttribute(o,a),yp.fromBufferAttribute(o,c),vp.fromBufferAttribute(o,l),h.normal=Vr.getInterpolation(fc,Nr,Ur,Or,xp,yp,vp,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new N,materialIndex:0};Vr.getNormal(Nr,Ur,Or,u.normal),h.face=u}return h}var $o=class r extends Dn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Jn(l,3)),this.setAttribute("normal",new Jn(h,3)),this.setAttribute("uv",new Jn(u,2));function _(g,p,m,S,M,y,E,A,b,L,v){let x=y/b,I=E/L,D=y/2,P=E/2,B=A/2,G=b+1,Z=L+1,X=0,O=0,j=new N;for(let R=0;R<Z;R++){let oe=R*I-P;for(let Re=0;Re<G;Re++){let qe=Re*x-D;j[g]=qe*S,j[p]=oe*M,j[m]=B,l.push(j.x,j.y,j.z),j[g]=0,j[p]=0,j[m]=A>0?1:-1,h.push(j.x,j.y,j.z),u.push(Re/b),u.push(1-R/L),X+=1}}for(let R=0;R<L;R++)for(let oe=0;oe<b;oe++){let Re=f+oe+G*R,qe=f+oe+G*(R+1),q=f+(oe+1)+G*(R+1),ee=f+(oe+1)+G*R;c.push(Re,qe,ee),c.push(qe,q,ee),O+=6}a.addGroup(d,O,v),d+=O,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function eo(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yn(r){let e={};for(let t=0;t<r.length;t++){let n=eo(r[t]);for(let i in n)e[i]=n[i]}return e}function Ex(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Am(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Rx={clone:eo,merge:yn},Cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ci=class extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cx,this.fragmentShader=Px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=Ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Uc=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_s=new N,Mp=new Qe,Sp=new Qe,Vt=class extends Uc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_s.x,_s.y).multiplyScalar(-e/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-e/_s.z)}getViewSize(e,t){return this.getViewBounds(e,Mp,Sp),t.subVectors(Sp,Mp)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Wo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fr=-90,Br=1,Xh=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Vt(Fr,Br,e,t);i.layers=this.layers,this.add(i);let s=new Vt(Fr,Br,e,t);s.layers=this.layers,this.add(s);let o=new Vt(Fr,Br,e,t);o.layers=this.layers,this.add(o);let a=new Vt(Fr,Br,e,t);a.layers=this.layers,this.add(a);let c=new Vt(Fr,Br,e,t);c.layers=this.layers,this.add(c);let l=new Vt(Fr,Br,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ki)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Cc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Jo=class extends Qt{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Zr,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yh=class extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Jo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:In}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $o(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:vs});s.uniforms.tEquirect.value=t;let o=new hn(i,s),a=t.minFilter;return t.minFilter===Si&&(t.minFilter=In),new Xh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},Th=new N,Ix=new N,Lx=new Ke,qi=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Th.subVectors(n,t).cross(Ix.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Th),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Lx.getNormalMatrix(e),i=this.coplanarPoint(Th).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qs=new Hn,mc=new N,jo=class{constructor(e=new qi,t=new qi,n=new qi,i=new qi,s=new qi,o=new qi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ki){let n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],S=i[13],M=i[14],y=i[15];if(n[0].setComponents(c-s,f-l,p-d,y-m).normalize(),n[1].setComponents(c+s,f+l,p+d,y+m).normalize(),n[2].setComponents(c+o,f+h,p+_,y+S).normalize(),n[3].setComponents(c-o,f-h,p-_,y-S).normalize(),n[4].setComponents(c-a,f-u,p-g,y-M).normalize(),t===Ki)n[5].setComponents(c+a,f+u,p+g,y+M).normalize();else if(t===Cc)n[5].setComponents(a,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(mc.x=i.normal.x>0?e.max.x:e.min.x,mc.y=i.normal.y>0?e.max.y:e.min.y,mc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Em(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Dx(r){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c._updateRange,f=c.updateRanges;if(r.bindBuffer(l,a),u.count===-1&&f.length===0&&r.bufferSubData(l,0,h),f.length!==0){for(let d=0,_=f.length;d<_;d++){let g=f[d];r.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}u.count!==-1&&(r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var to=class r extends Dn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],_=[],g=[],p=[];for(let m=0;m<h;m++){let S=m*f-o;for(let M=0;M<l;M++){let y=M*u-s;_.push(y,-S,0),g.push(0,0,1),p.push(M/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<a;S++){let M=S+l*m,y=S+l*(m+1),E=S+1+l*(m+1),A=S+1+l*m;d.push(M,y,A),d.push(y,E,A)}this.setIndex(d),this.setAttribute("position",new Jn(_,3)),this.setAttribute("normal",new Jn(g,3)),this.setAttribute("uv",new Jn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Nx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ux=`#ifdef USE_ALPHAHASH
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
#endif`,Ox=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zx=`#ifdef USE_AOMAP
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
#endif`,Hx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vx=`#ifdef USE_BATCHING
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
#endif`,Gx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qx=`#ifdef USE_IRIDESCENCE
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
#endif`,Zx=`#ifdef USE_BUMPMAP
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
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,iy=`#define PI 3.141592653589793
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
} // validated`,sy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ry=`vec3 transformedNormal = objectNormal;
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
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ay=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hy="gl_FragColor = linearToOutputTexel( gl_FragColor );",uy=`
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
}`,fy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,py=`#ifdef USE_ENVMAP
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
#endif`,my=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
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
#endif`,_y=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,My=`#ifdef USE_GRADIENTMAP
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
}`,Sy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,by=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ty=`uniform bool receiveShadow;
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
#endif`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iy=`PhysicalMaterial material;
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
#endif`,Ly=`struct PhysicalMaterial {
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
}`,Dy=`
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
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Oy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,By=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ky=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gy=`#if defined( USE_POINTS_UV )
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
#endif`,Wy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zy=`#ifdef USE_MORPHNORMALS
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
#endif`,Ky=`#ifdef USE_MORPHTARGETS
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
#endif`,$y=`#ifdef USE_MORPHTARGETS
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
#endif`,Jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nv=`#ifdef USE_NORMALMAP
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
#endif`,iv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ov=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,av=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_v=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xv=`float getShadowMask() {
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
}`,yv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vv=`#ifdef USE_SKINNING
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
#endif`,Mv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sv=`#ifdef USE_SKINNING
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
#endif`,bv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Av=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ev=`#ifdef USE_TRANSMISSION
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
#endif`,Rv=`#ifdef USE_TRANSMISSION
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
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nv=`uniform sampler2D t2D;
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
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ov=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`#include <common>
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
}`,zv=`#if DEPTH_PACKING == 3200
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
}`,Hv=`#define DISTANCE
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
}`,Vv=`#define DISTANCE
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
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`uniform float scale;
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
}`,Yv=`uniform vec3 diffuse;
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
}`,qv=`#include <common>
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Kv=`#define LAMBERT
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
}`,$v=`#define LAMBERT
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
}`,Jv=`#define MATCAP
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
}`,jv=`#define MATCAP
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
}`,Qv=`#define NORMAL
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
}`,eM=`#define NORMAL
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
}`,tM=`#define PHONG
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
}`,nM=`#define PHONG
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
}`,iM=`#define STANDARD
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
}`,sM=`#define STANDARD
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
}`,rM=`#define TOON
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
}`,oM=`#define TOON
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
}`,aM=`uniform float size;
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
}`,cM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,hM=`uniform vec3 color;
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
}`,uM=`uniform float rotation;
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
}`,fM=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Nx,alphahash_pars_fragment:Ux,alphamap_fragment:Ox,alphamap_pars_fragment:Fx,alphatest_fragment:Bx,alphatest_pars_fragment:kx,aomap_fragment:zx,aomap_pars_fragment:Hx,batching_pars_vertex:Vx,batching_vertex:Gx,begin_vertex:Wx,beginnormal_vertex:Xx,bsdfs:Yx,iridescence_fragment:qx,bumpmap_pars_fragment:Zx,clipping_planes_fragment:Kx,clipping_planes_pars_fragment:$x,clipping_planes_pars_vertex:Jx,clipping_planes_vertex:jx,color_fragment:Qx,color_pars_fragment:ey,color_pars_vertex:ty,color_vertex:ny,common:iy,cube_uv_reflection_fragment:sy,defaultnormal_vertex:ry,displacementmap_pars_vertex:oy,displacementmap_vertex:ay,emissivemap_fragment:cy,emissivemap_pars_fragment:ly,colorspace_fragment:hy,colorspace_pars_fragment:uy,envmap_fragment:fy,envmap_common_pars_fragment:dy,envmap_pars_fragment:py,envmap_pars_vertex:my,envmap_physical_pars_fragment:Ay,envmap_vertex:gy,fog_vertex:_y,fog_pars_vertex:xy,fog_fragment:yy,fog_pars_fragment:vy,gradientmap_pars_fragment:My,lightmap_pars_fragment:Sy,lights_lambert_fragment:by,lights_lambert_pars_fragment:wy,lights_pars_begin:Ty,lights_toon_fragment:Ey,lights_toon_pars_fragment:Ry,lights_phong_fragment:Cy,lights_phong_pars_fragment:Py,lights_physical_fragment:Iy,lights_physical_pars_fragment:Ly,lights_fragment_begin:Dy,lights_fragment_maps:Ny,lights_fragment_end:Uy,logdepthbuf_fragment:Oy,logdepthbuf_pars_fragment:Fy,logdepthbuf_pars_vertex:By,logdepthbuf_vertex:ky,map_fragment:zy,map_pars_fragment:Hy,map_particle_fragment:Vy,map_particle_pars_fragment:Gy,metalnessmap_fragment:Wy,metalnessmap_pars_fragment:Xy,morphinstance_vertex:Yy,morphcolor_vertex:qy,morphnormal_vertex:Zy,morphtarget_pars_vertex:Ky,morphtarget_vertex:$y,normal_fragment_begin:Jy,normal_fragment_maps:jy,normal_pars_fragment:Qy,normal_pars_vertex:ev,normal_vertex:tv,normalmap_pars_fragment:nv,clearcoat_normal_fragment_begin:iv,clearcoat_normal_fragment_maps:sv,clearcoat_pars_fragment:rv,iridescence_pars_fragment:ov,opaque_fragment:av,packing:cv,premultiplied_alpha_fragment:lv,project_vertex:hv,dithering_fragment:uv,dithering_pars_fragment:fv,roughnessmap_fragment:dv,roughnessmap_pars_fragment:pv,shadowmap_pars_fragment:mv,shadowmap_pars_vertex:gv,shadowmap_vertex:_v,shadowmask_pars_fragment:xv,skinbase_vertex:yv,skinning_pars_vertex:vv,skinning_vertex:Mv,skinnormal_vertex:Sv,specularmap_fragment:bv,specularmap_pars_fragment:wv,tonemapping_fragment:Tv,tonemapping_pars_fragment:Av,transmission_fragment:Ev,transmission_pars_fragment:Rv,uv_pars_fragment:Cv,uv_pars_vertex:Pv,uv_vertex:Iv,worldpos_vertex:Lv,background_vert:Dv,background_frag:Nv,backgroundCube_vert:Uv,backgroundCube_frag:Ov,cube_vert:Fv,cube_frag:Bv,depth_vert:kv,depth_frag:zv,distanceRGBA_vert:Hv,distanceRGBA_frag:Vv,equirect_vert:Gv,equirect_frag:Wv,linedashed_vert:Xv,linedashed_frag:Yv,meshbasic_vert:qv,meshbasic_frag:Zv,meshlambert_vert:Kv,meshlambert_frag:$v,meshmatcap_vert:Jv,meshmatcap_frag:jv,meshnormal_vert:Qv,meshnormal_frag:eM,meshphong_vert:tM,meshphong_frag:nM,meshphysical_vert:iM,meshphysical_frag:sM,meshtoon_vert:rM,meshtoon_frag:oM,points_vert:aM,points_frag:cM,shadow_vert:lM,shadow_frag:hM,sprite_vert:uM,sprite_frag:fM},de={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Mi={basic:{uniforms:yn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:yn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:yn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:yn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:yn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:yn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:yn([de.points,de.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:yn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:yn([de.common,de.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:yn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:yn([de.sprite,de.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:yn([de.common,de.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:yn([de.lights,de.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Mi.physical={uniforms:yn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var gc={r:0,b:0,g:0},Zs=new Ei,dM=new Ge;function pM(r,e,t,n,i,s,o){let a=new Be(0),c=s===!0?0:1,l,h,u=null,f=0,d=null;function _(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function g(S){let M=!1,y=_(S);y===null?m(a,c):y&&y.isColor&&(m(y,1),M=!0);let E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil)}function p(S,M){let y=_(M);y&&(y.isCubeTexture||y.mapping===nl)?(h===void 0&&(h=new hn(new $o(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:eo(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Zs.copy(M.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dM.makeRotationFromEuler(Zs)),h.material.toneMapped=ht.getTransfer(y.colorSpace)!==Mt,(u!==y||f!==y.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new hn(new to(2,2),new Ci({name:"BackgroundMaterial",uniforms:eo(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ht.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,M){S.getRGB(gc,Am(r)),n.buffers.color.setClear(gc.r,gc.g,gc.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),c=M,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,m(a,c)},render:g,addToRenderList:p}}function mM(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(x,I,D,P,B){let G=!1,Z=u(P,D,I);s!==Z&&(s=Z,l(s.object)),G=d(x,P,D,B),G&&_(x,P,D,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(x,I,D,P),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return r.createVertexArray()}function l(x){return r.bindVertexArray(x)}function h(x){return r.deleteVertexArray(x)}function u(x,I,D){let P=D.wireframe===!0,B=n[x.id];B===void 0&&(B={},n[x.id]=B);let G=B[I.id];G===void 0&&(G={},B[I.id]=G);let Z=G[P];return Z===void 0&&(Z=f(c()),G[P]=Z),Z}function f(x){let I=[],D=[],P=[];for(let B=0;B<t;B++)I[B]=0,D[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:P,object:x,attributes:{},index:null}}function d(x,I,D,P){let B=s.attributes,G=I.attributes,Z=0,X=D.getAttributes();for(let O in X)if(X[O].location>=0){let R=B[O],oe=G[O];if(oe===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),R===void 0||R.attribute!==oe||oe&&R.data!==oe.data)return!0;Z++}return s.attributesNum!==Z||s.index!==P}function _(x,I,D,P){let B={},G=I.attributes,Z=0,X=D.getAttributes();for(let O in X)if(X[O].location>=0){let R=G[O];R===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(R=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(R=x.instanceColor));let oe={};oe.attribute=R,R&&R.data&&(oe.data=R.data),B[O]=oe,Z++}s.attributes=B,s.attributesNum=Z,s.index=P}function g(){let x=s.newAttributes;for(let I=0,D=x.length;I<D;I++)x[I]=0}function p(x){m(x,0)}function m(x,I){let D=s.newAttributes,P=s.enabledAttributes,B=s.attributeDivisors;D[x]=1,P[x]===0&&(r.enableVertexAttribArray(x),P[x]=1),B[x]!==I&&(r.vertexAttribDivisor(x,I),B[x]=I)}function S(){let x=s.newAttributes,I=s.enabledAttributes;for(let D=0,P=I.length;D<P;D++)I[D]!==x[D]&&(r.disableVertexAttribArray(D),I[D]=0)}function M(x,I,D,P,B,G,Z){Z===!0?r.vertexAttribIPointer(x,I,D,B,G):r.vertexAttribPointer(x,I,D,P,B,G)}function y(x,I,D,P){g();let B=P.attributes,G=D.getAttributes(),Z=I.defaultAttributeValues;for(let X in G){let O=G[X];if(O.location>=0){let j=B[X];if(j===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(j=x.instanceColor)),j!==void 0){let R=j.normalized,oe=j.itemSize,Re=e.get(j);if(Re===void 0)continue;let qe=Re.buffer,q=Re.type,ee=Re.bytesPerElement,fe=q===r.INT||q===r.UNSIGNED_INT||j.gpuType===fm;if(j.isInterleavedBufferAttribute){let ne=j.data,Le=ne.stride,Pe=j.offset;if(ne.isInstancedInterleavedBuffer){for(let k=0;k<O.locationSize;k++)m(O.location+k,ne.meshPerAttribute);x.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let k=0;k<O.locationSize;k++)p(O.location+k);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let k=0;k<O.locationSize;k++)M(O.location+k,oe/O.locationSize,q,R,Le*ee,(Pe+oe/O.locationSize*k)*ee,fe)}else{if(j.isInstancedBufferAttribute){for(let ne=0;ne<O.locationSize;ne++)m(O.location+ne,j.meshPerAttribute);x.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ne=0;ne<O.locationSize;ne++)p(O.location+ne);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let ne=0;ne<O.locationSize;ne++)M(O.location+ne,oe/O.locationSize,q,R,oe*ee,oe/O.locationSize*ne*ee,fe)}}else if(Z!==void 0){let R=Z[X];if(R!==void 0)switch(R.length){case 2:r.vertexAttrib2fv(O.location,R);break;case 3:r.vertexAttrib3fv(O.location,R);break;case 4:r.vertexAttrib4fv(O.location,R);break;default:r.vertexAttrib1fv(O.location,R)}}}}S()}function E(){L();for(let x in n){let I=n[x];for(let D in I){let P=I[D];for(let B in P)h(P[B].object),delete P[B];delete I[D]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;let I=n[x.id];for(let D in I){let P=I[D];for(let B in P)h(P[B].object),delete P[B];delete I[D]}delete n[x.id]}function b(x){for(let I in n){let D=n[I];if(D[x.id]===void 0)continue;let P=D[x.id];for(let B in P)h(P[B].object),delete P[B];delete D[x.id]}}function L(){v(),o=!0,s!==i&&(s=i,l(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:v,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function gM(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<u;d++)this.render(l[d],h[d]);else{f.multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];t.update(d,n,1)}}function c(l,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g];for(let g=0;g<f.length;g++)t.update(_,n,f[g])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function _M(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==pi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let b=A===il&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ss&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==bi&&!b)}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:y,maxSamples:E}}function xM(r){let e=this,t=null,n=0,i=!1,s=!1,o=new qi,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||_===null||_.length===0||s&&!p)s?h(null):l();else{let S=s?0:n,M=S*4,y=m.clippingState||null;c.value=y,y=h(_,f,M,d);for(let E=0;E!==M;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,_){let g=u!==null?u.length:0,p=null;if(g!==0){if(p=c.value,_!==!0||p===null){let m=d+g*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,y=d;M!==g;++M,y+=4)o.copy(u[M]).applyMatrix4(S,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function yM(r){let e=new WeakMap;function t(o,a){return a===kh?o.mapping=Zr:a===zh&&(o.mapping=Kr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===kh||a===zh)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Yh(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var no=class extends Uc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gr=4,bp=[.125,.215,.35,.446,.526,.582],js=20,Ah=new no,wp=new Be,Eh=null,Rh=0,Ch=0,Ph=!1,$s=(1+Math.sqrt(5))/2,kr=1/$s,Tp=[new N(-$s,kr,0),new N($s,kr,0),new N(-kr,0,$s),new N(kr,0,$s),new N(0,$s,-kr),new N(0,$s,kr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Oc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Eh=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eh,Rh,Ch),this._renderer.xr.enabled=Ph,e.scissorTest=!1,_c(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===Kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eh=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:il,format:pi,colorSpace:kt,depthBuffer:!1},i=Ap(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ap(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vM(s)),this._blurMaterial=MM(s,e,t)}return i}_compileMaterial(e){let t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,Ah)}_sceneToCubeUV(e,t,n,i){let a=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(wp),h.toneMapping=Ms,h.autoClear=!1;let d=new Ri({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),_=new hn(new $o,d),g=!1,p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(wp),g=!0);for(let m=0;m<6;m++){let S=m%3;S===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):S===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let M=this._cubeSize;_c(i,S*M,m>2?M:0,M,M),h.setRenderTarget(i),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Zr||e.mapping===Kr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ep());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new hn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;_c(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ah)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Tp[(i-s-1)%Tp.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new hn(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*js-1),g=s/_,p=isFinite(s)?1+Math.floor(h*g):js;p>js&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${js}`);let m=[],S=0;for(let b=0;b<js;++b){let L=b/g,v=Math.exp(-L*L/2);m.push(v),b===0?S+=v:b<p&&(S+=2*v)}for(let b=0;b<m.length;b++)m[b]=m[b]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;let y=this._sizeLods[i],E=3*y*(i>M-Gr?i-M+Gr:0),A=4*(this._cubeSize-y);_c(t,E,A,3*y,2*y),c.setRenderTarget(t),c.render(u,Ah)}};function vM(r){let e=[],t=[],n=[],i=r,s=r-Gr+1+bp.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Gr?c=bp[o-r+Gr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,p=2,m=1,S=new Float32Array(g*_*d),M=new Float32Array(p*_*d),y=new Float32Array(m*_*d);for(let A=0;A<d;A++){let b=A%3*2/3-1,L=A>2?0:-1,v=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];S.set(v,g*_*A),M.set(f,p*_*A);let x=[A,A,A,A,A,A];y.set(x,m*_*A)}let E=new Dn;E.setAttribute("position",new It(S,g)),E.setAttribute("uv",new It(M,p)),E.setAttribute("faceIndex",new It(y,m)),e.push(E),i>Gr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ap(r,e,t){let n=new $i(r,e,t);return n.texture.mapping=nl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _c(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function MM(r,e,t){let n=new Float32Array(js),i=new N(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:vs,depthTest:!1,depthWrite:!1})}function Ep(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:vs,depthTest:!1,depthWrite:!1})}function Rp(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vs,depthTest:!1,depthWrite:!1})}function Mu(){return`

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
	`}function SM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===kh||c===zh,h=c===Zr||c===Kr;if(l||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Oc(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Oc(r)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function bM(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wM(r,e,t,n){let i={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);for(let _ in f.morphAttributes){let g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete i[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let _ in f)e.update(f[_],r.ARRAY_BUFFER);let d=u.morphAttributes;for(let _ in d){let g=d[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],r.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,_=u.attributes.position,g=0;if(d!==null){let S=d.array;g=d.version;for(let M=0,y=S.length;M<y;M+=3){let E=S[M+0],A=S[M+1],b=S[M+2];f.push(E,A,A,b,b,E)}}else if(_!==void 0){let S=_.array;g=_.version;for(let M=0,y=S.length/3-1;M<y;M+=3){let E=M+0,A=M+1,b=M+2;f.push(E,A,A,b,b,E)}}else return;let p=new(bm(f)?Nc:Dc)(f,1);p.version=g;let m=s.get(u);m&&e.remove(m),s.set(u,p)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function TM(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function l(f,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,f*o,_),t.update(d,n,_))}function h(f,d,_){if(_===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(f[p]/o,d[p]);else{g.multiDrawElementsWEBGL(n,d,0,s,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,n,1)}}function u(f,d,_,g){if(_===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let m=0;for(let S=0;S<_;S++)m+=d[S];for(let S=0;S<g.length;S++)t.update(m,n,g[S])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function AM(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function EM(r,e,t){let n=new WeakMap,i=new mt;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let v=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;d===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let y=a.attributes.position.count*M,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*E*4*u),b=new Ic(A,y,E,u);b.type=bi,b.needsUpdate=!0;let L=M*4;for(let x=0;x<u;x++){let I=p[x],D=m[x],P=S[x],B=y*E*4*x;for(let G=0;G<I.count;G++){let Z=G*L;d===!0&&(i.fromBufferAttribute(I,G),A[B+Z+0]=i.x,A[B+Z+1]=i.y,A[B+Z+2]=i.z,A[B+Z+3]=0),_===!0&&(i.fromBufferAttribute(D,G),A[B+Z+4]=i.x,A[B+Z+5]=i.y,A[B+Z+6]=i.z,A[B+Z+7]=0),g===!0&&(i.fromBufferAttribute(P,G),A[B+Z+8]=i.x,A[B+Z+9]=i.y,A[B+Z+10]=i.z,A[B+Z+11]=P.itemSize===4?i.w:1)}}f={count:u,texture:b,size:new Qe(y,E)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];let _=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function RM(r,e,t,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Fc=class extends Qt{constructor(e,t,n,i,s,o,a,c,l,h){if(h=h!==void 0?h:Xr,h!==Xr&&h!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xr&&(n=$r),n===void 0&&h===Zo&&(n=ra),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=c!==void 0?c:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rm=new Qt,Cm=new Fc(1,1);Cm.compareFunction=Mm;var Pm=new Ic,Im=new Wh,Lm=new Jo,Cp=[],Pp=[],Ip=new Float32Array(16),Lp=new Float32Array(9),Dp=new Float32Array(4);function ao(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Cp[i];if(s===void 0&&(s=new Float32Array(i),Cp[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Wt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Xt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ol(r,e){let t=Pp[e];t===void 0&&(t=new Int32Array(e),Pp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function CM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function PM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;r.uniform2fv(this.addr,e),Xt(t,e)}}function IM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;r.uniform3fv(this.addr,e),Xt(t,e)}}function LM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;r.uniform4fv(this.addr,e),Xt(t,e)}}function DM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Dp.set(n),r.uniformMatrix2fv(this.addr,!1,Dp),Xt(t,n)}}function NM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Lp.set(n),r.uniformMatrix3fv(this.addr,!1,Lp),Xt(t,n)}}function UM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Ip.set(n),r.uniformMatrix4fv(this.addr,!1,Ip),Xt(t,n)}}function OM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function FM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;r.uniform2iv(this.addr,e),Xt(t,e)}}function BM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;r.uniform3iv(this.addr,e),Xt(t,e)}}function kM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;r.uniform4iv(this.addr,e),Xt(t,e)}}function zM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function HM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;r.uniform2uiv(this.addr,e),Xt(t,e)}}function VM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;r.uniform3uiv(this.addr,e),Xt(t,e)}}function GM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;r.uniform4uiv(this.addr,e),Xt(t,e)}}function WM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?Cm:Rm;t.setTexture2D(e||s,i)}function XM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Im,i)}function YM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Lm,i)}function qM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Pm,i)}function ZM(r){switch(r){case 5126:return CM;case 35664:return PM;case 35665:return IM;case 35666:return LM;case 35674:return DM;case 35675:return NM;case 35676:return UM;case 5124:case 35670:return OM;case 35667:case 35671:return FM;case 35668:case 35672:return BM;case 35669:case 35673:return kM;case 5125:return zM;case 36294:return HM;case 36295:return VM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return qM}}function KM(r,e){r.uniform1fv(this.addr,e)}function $M(r,e){let t=ao(e,this.size,2);r.uniform2fv(this.addr,t)}function JM(r,e){let t=ao(e,this.size,3);r.uniform3fv(this.addr,t)}function jM(r,e){let t=ao(e,this.size,4);r.uniform4fv(this.addr,t)}function QM(r,e){let t=ao(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function eS(r,e){let t=ao(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function tS(r,e){let t=ao(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function nS(r,e){r.uniform1iv(this.addr,e)}function iS(r,e){r.uniform2iv(this.addr,e)}function sS(r,e){r.uniform3iv(this.addr,e)}function rS(r,e){r.uniform4iv(this.addr,e)}function oS(r,e){r.uniform1uiv(this.addr,e)}function aS(r,e){r.uniform2uiv(this.addr,e)}function cS(r,e){r.uniform3uiv(this.addr,e)}function lS(r,e){r.uniform4uiv(this.addr,e)}function hS(r,e,t){let n=this.cache,i=e.length,s=ol(t,i);Wt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Rm,s[o])}function uS(r,e,t){let n=this.cache,i=e.length,s=ol(t,i);Wt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Im,s[o])}function fS(r,e,t){let n=this.cache,i=e.length,s=ol(t,i);Wt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Lm,s[o])}function dS(r,e,t){let n=this.cache,i=e.length,s=ol(t,i);Wt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Pm,s[o])}function pS(r){switch(r){case 5126:return KM;case 35664:return $M;case 35665:return JM;case 35666:return jM;case 35674:return QM;case 35675:return eS;case 35676:return tS;case 5124:case 35670:return nS;case 35667:case 35671:return iS;case 35668:case 35672:return sS;case 35669:case 35673:return rS;case 5125:return oS;case 36294:return aS;case 36295:return cS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return hS;case 35679:case 36299:case 36307:return uS;case 35680:case 36300:case 36308:case 36293:return fS;case 36289:case 36303:case 36311:case 36292:return dS}}var qh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ZM(t.type)}},Zh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pS(t.type)}},Kh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},Ih=/(\w+)(\])?(\[|\.)?/g;function Np(r,e){r.seq.push(e),r.map[e.id]=e}function mS(r,e,t){let n=r.name,i=n.length;for(Ih.lastIndex=0;;){let s=Ih.exec(n),o=Ih.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Np(t,l===void 0?new qh(a,r,e):new Zh(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Kh(a),Np(t,u)),t=u}}}var qr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);mS(s,o,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Up(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var gS=37297,_S=0;function xS(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function yS(r){let e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(r),n;switch(e===t?n="":e===Rc&&t===Ec?n="LinearDisplayP3ToLinearSRGB":e===Ec&&t===Rc&&(n="LinearSRGBToLinearDisplayP3"),r){case kt:case rl:return[n,"LinearTransferOETF"];case Tt:case yu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Op(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+xS(r.getShaderSource(e),o)}else return i}function vS(r,e){let t=yS(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function MS(r,e){let t;switch(e){case w0:t="Linear";break;case T0:t="Reinhard";break;case A0:t="OptimizedCineon";break;case _u:t="ACESFilmic";break;case R0:t="AgX";break;case C0:t="Neutral";break;case E0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function SS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function bS(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wS(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Vo(r){return r!==""}function Fp(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var TS=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(r){return r.replace(TS,ES)}var AS=new Map;function ES(r,e){let t=Ze[e];if(t===void 0){let n=AS.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $h(t)}var RS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kp(r){return r.replace(RS,CS)}function CS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===cm?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===gu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function IS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zr:case Kr:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Kr:e="ENVMAP_MODE_REFRACTION";break}return e}function DS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case lm:e="ENVMAP_BLENDING_MULTIPLY";break;case S0:e="ENVMAP_BLENDING_MIX";break;case b0:e="ENVMAP_BLENDING_ADD";break}return e}function NS(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function US(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=PS(t),l=IS(t),h=LS(t),u=DS(t),f=NS(t),d=SS(t),_=bS(s),g=i.createProgram(),p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vo).join(`
`),m.length>0&&(m+=`
`)):(p=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),m=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ms?"#define TONE_MAPPING":"",t.toneMapping!==Ms?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ms?MS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,vS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vo).join(`
`)),o=$h(o),o=Fp(o,t),o=Bp(o,t),a=$h(a),a=Fp(a,t),a=Bp(a,t),o=kp(o),a=kp(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===np?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=S+p+o,y=S+m+a,E=Up(i,i.VERTEX_SHADER,M),A=Up(i,i.FRAGMENT_SHADER,y);i.attachShader(g,E),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(I){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(E).trim(),B=i.getShaderInfoLog(A).trim(),G=!0,Z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,E,A);else{let X=Op(i,E,"vertex"),O=Op(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+X+`
`+O)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(P===""||B==="")&&(Z=!1);Z&&(I.diagnostics={runnable:G,programLog:D,vertexShader:{log:P,prefix:p},fragmentShader:{log:B,prefix:m}})}i.deleteShader(E),i.deleteShader(A),L=new qr(i,g),v=wS(i,g)}let L;this.getUniforms=function(){return L===void 0&&b(this),L};let v;this.getAttributes=function(){return v===void 0&&b(this),v};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,gS)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_S++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=A,this}var OS=0,Jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jh(e),t.set(e,n)),n}},jh=class{constructor(e){this.id=OS++,this.code=e,this.usedTimes=0}};function FS(r,e,t,n,i,s,o){let a=new Lc,c=new Jh,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,x,I,D,P){let B=D.fog,G=P.geometry,Z=v.isMeshStandardMaterial?D.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||Z),O=X&&X.mapping===nl?X.image.height:null,j=_[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let R=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=R!==void 0?R.length:0,Re=0;G.morphAttributes.position!==void 0&&(Re=1),G.morphAttributes.normal!==void 0&&(Re=2),G.morphAttributes.color!==void 0&&(Re=3);let qe,q,ee,fe;if(j){let st=Mi[j];qe=st.vertexShader,q=st.fragmentShader}else qe=v.vertexShader,q=v.fragmentShader,c.update(v),ee=c.getVertexShaderID(v),fe=c.getFragmentShaderID(v);let ne=r.getRenderTarget(),Le=P.isInstancedMesh===!0,Pe=P.isBatchedMesh===!0,k=!!v.map,Xe=!!v.matcap,Se=!!X,be=!!v.aoMap,_e=!!v.lightMap,Ne=!!v.bumpMap,Ie=!!v.normalMap,z=!!v.displacementMap,it=!!v.emissiveMap,C=!!v.metalnessMap,w=!!v.roughnessMap,Y=v.anisotropy>0,J=v.clearcoat>0,Q=v.dispersion>0,te=v.iridescence>0,me=v.sheen>0,ce=v.transmission>0,ie=Y&&!!v.anisotropyMap,De=J&&!!v.clearcoatMap,se=J&&!!v.clearcoatNormalMap,Me=J&&!!v.clearcoatRoughnessMap,$e=te&&!!v.iridescenceMap,ge=te&&!!v.iridescenceThicknessMap,xe=me&&!!v.sheenColorMap,Ue=me&&!!v.sheenRoughnessMap,We=!!v.specularMap,pt=!!v.specularColorMap,Oe=!!v.specularIntensityMap,U=ce&&!!v.transmissionMap,K=ce&&!!v.thicknessMap,$=!!v.gradientMap,ae=!!v.alphaMap,le=v.alphaTest>0,Ve=!!v.alphaHash,ct=!!v.extensions,ft=Ms;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ft=r.toneMapping);let _t={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:qe,fragmentShader:q,defines:v.defines,customVertexShaderID:ee,customFragmentShaderID:fe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Pe,instancing:Le,instancingColor:Le&&P.instanceColor!==null,instancingMorph:Le&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:kt,alphaToCoverage:!!v.alphaToCoverage,map:k,matcap:Xe,envMap:Se,envMapMode:Se&&X.mapping,envMapCubeUVHeight:O,aoMap:be,lightMap:_e,bumpMap:Ne,normalMap:Ie,displacementMap:f&&z,emissiveMap:it,normalMapObjectSpace:Ie&&v.normalMapType===G0,normalMapTangentSpace:Ie&&v.normalMapType===vm,metalnessMap:C,roughnessMap:w,anisotropy:Y,anisotropyMap:ie,clearcoat:J,clearcoatMap:De,clearcoatNormalMap:se,clearcoatRoughnessMap:Me,dispersion:Q,iridescence:te,iridescenceMap:$e,iridescenceThicknessMap:ge,sheen:me,sheenColorMap:xe,sheenRoughnessMap:Ue,specularMap:We,specularColorMap:pt,specularIntensityMap:Oe,transmission:ce,transmissionMap:U,thicknessMap:K,gradientMap:$,opaque:v.transparent===!1&&v.blending===Wr&&v.alphaToCoverage===!1,alphaMap:ae,alphaTest:le,alphaHash:Ve,combine:v.combine,mapUv:k&&g(v.map.channel),aoMapUv:be&&g(v.aoMap.channel),lightMapUv:_e&&g(v.lightMap.channel),bumpMapUv:Ne&&g(v.bumpMap.channel),normalMapUv:Ie&&g(v.normalMap.channel),displacementMapUv:z&&g(v.displacementMap.channel),emissiveMapUv:it&&g(v.emissiveMap.channel),metalnessMapUv:C&&g(v.metalnessMap.channel),roughnessMapUv:w&&g(v.roughnessMap.channel),anisotropyMapUv:ie&&g(v.anisotropyMap.channel),clearcoatMapUv:De&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&g(v.sheenRoughnessMap.channel),specularMapUv:We&&g(v.specularMap.channel),specularColorMapUv:pt&&g(v.specularColorMap.channel),specularIntensityMapUv:Oe&&g(v.specularIntensityMap.channel),transmissionMapUv:U&&g(v.transmissionMap.channel),thicknessMapUv:K&&g(v.thicknessMap.channel),alphaMapUv:ae&&g(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ie||Y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!G.attributes.uv&&(k||ae),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Re,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,useLegacyLights:r._useLegacyLights,decodeVideoTexture:k&&v.map.isVideoTexture===!0&&ht.getTransfer(v.map.colorSpace)===Mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Pn,flipSided:v.side===Ln,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ct&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ct&&v.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function m(v){let x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)x.push(I),x.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(S(x,v),M(x,v),x.push(r.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function S(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function M(v,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),v.push(a.mask)}function y(v){let x=_[v.type],I;if(x){let D=Mi[x];I=Rx.clone(D.uniforms)}else I=v.uniforms;return I}function E(v,x){let I;for(let D=0,P=h.length;D<P;D++){let B=h[D];if(B.cacheKey===x){I=B,++I.usedTimes;break}}return I===void 0&&(I=new US(r,x,v,s),h.push(I)),I}function A(v){if(--v.usedTimes===0){let x=h.indexOf(v);h[x]=h[h.length-1],h.pop(),v.destroy()}}function b(v){c.remove(v)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:b,programs:h,dispose:L}}function BS(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function kS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Hp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Vp(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,_,g,p){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},r[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=p),e++,m}function a(u,f,d,_,g,p){let m=o(u,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function c(u,f,d,_,g,p){let m=o(u,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function l(u,f){t.length>1&&t.sort(u||kS),n.length>1&&n.sort(f||Hp),i.length>1&&i.sort(f||Hp)}function h(){for(let u=e,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function zS(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new Vp,r.set(n,[o])):i>=s.length?(o=new Vp,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function HS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Be};break;case"SpotLight":t={position:new N,direction:new N,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function VS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var GS=0;function WS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function XS(r){let e=new HS,t=VS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let i=new N,s=new Ge,o=new Ge;function a(l,h){let u=0,f=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let _=0,g=0,p=0,m=0,S=0,M=0,y=0,E=0,A=0,b=0,L=0;l.sort(WS);let v=h===!0?Math.PI:1;for(let I=0,D=l.length;I<D;I++){let P=l[I],B=P.color,G=P.intensity,Z=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=B.r*G*v,f+=B.g*G*v,d+=B.b*G*v;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],G);L++}else if(P.isDirectionalLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity*v),P.castShadow){let j=P.shadow,R=t.get(P);R.shadowBias=j.bias,R.shadowNormalBias=j.normalBias,R.shadowRadius=j.radius,R.shadowMapSize=j.mapSize,n.directionalShadow[_]=R,n.directionalShadowMap[_]=X,n.directionalShadowMatrix[_]=P.shadow.matrix,M++}n.directional[_]=O,_++}else if(P.isSpotLight){let O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(B).multiplyScalar(G*v),O.distance=Z,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[p]=O;let j=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,j.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[p]=j.matrix,P.castShadow){let R=t.get(P);R.shadowBias=j.bias,R.shadowNormalBias=j.normalBias,R.shadowRadius=j.radius,R.shadowMapSize=j.mapSize,n.spotShadow[p]=R,n.spotShadowMap[p]=X,E++}p++}else if(P.isRectAreaLight){let O=e.get(P);O.color.copy(B).multiplyScalar(G),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=O,m++}else if(P.isPointLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity*v),O.distance=P.distance,O.decay=P.decay,P.castShadow){let j=P.shadow,R=t.get(P);R.shadowBias=j.bias,R.shadowNormalBias=j.normalBias,R.shadowRadius=j.radius,R.shadowMapSize=j.mapSize,R.shadowCameraNear=j.camera.near,R.shadowCameraFar=j.camera.far,n.pointShadow[g]=R,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=O,g++}else if(P.isHemisphereLight){let O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(G*v),O.groundColor.copy(P.groundColor).multiplyScalar(G*v),n.hemi[S]=O,S++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;let x=n.hash;(x.directionalLength!==_||x.pointLength!==g||x.spotLength!==p||x.rectAreaLength!==m||x.hemiLength!==S||x.numDirectionalShadows!==M||x.numPointShadows!==y||x.numSpotShadows!==E||x.numSpotMaps!==A||x.numLightProbes!==L)&&(n.directional.length=_,n.spot.length=p,n.rectArea.length=m,n.point.length=g,n.hemi.length=S,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=L,x.directionalLength=_,x.pointLength=g,x.spotLength=p,x.rectAreaLength=m,x.hemiLength=S,x.numDirectionalShadows=M,x.numPointShadows=y,x.numSpotShadows=E,x.numSpotMaps=A,x.numLightProbes=L,n.version=GS++)}function c(l,h){let u=0,f=0,d=0,_=0,g=0,p=h.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){let M=l[m];if(M.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),u++}else if(M.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(M.isRectAreaLight){let y=n.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:n}}function Gp(r){let e=new XS(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(h){e.setup(t,h)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function YS(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new Gp(r),e.set(i,[a])):s>=o.length?(a=new Gp(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Qh=class extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},eu=class extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},qS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZS=`uniform sampler2D shadow_pass;
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
}`;function KS(r,e,t){let n=new jo,i=new Qe,s=new Qe,o=new mt,a=new Qh({depthPacking:V0}),c=new eu,l={},h=t.maxTextureSize,u={[Ti]:Ln,[Ln]:Ti,[Pn]:Pn},f=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:qS,fragmentShader:ZS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let _=new Dn;_.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new hn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cm;let m=this.type;this.render=function(A,b,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let v=r.getRenderTarget(),x=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),D=r.state;D.setBlending(vs),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let P=m!==Yi&&this.type===Yi,B=m===Yi&&this.type!==Yi;for(let G=0,Z=A.length;G<Z;G++){let X=A[G],O=X.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let j=O.getFrameExtents();if(i.multiply(j),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,O.mapSize.y=s.y)),O.map===null||P===!0||B===!0){let oe=this.type!==Yi?{minFilter:ln,magFilter:ln}:{};O.map!==null&&O.map.dispose(),O.map=new $i(i.x,i.y,oe),O.map.texture.name=X.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();let R=O.getViewportCount();for(let oe=0;oe<R;oe++){let Re=O.getViewport(oe);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),D.viewport(o),O.updateMatrices(X,oe),n=O.getFrustum(),y(b,L,O.camera,X,this.type)}O.isPointLightShadow!==!0&&this.type===Yi&&S(O,L),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(v,x,I)};function S(A,b){let L=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $i(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,L,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,L,d,g,null)}function M(A,b,L,v){let x=null,I=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)x=I;else if(x=L.isPointLight===!0?c:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let D=x.uuid,P=b.uuid,B=l[D];B===void 0&&(B={},l[D]=B);let G=B[P];G===void 0&&(G=x.clone(),B[P]=G,b.addEventListener("dispose",E)),x=G}if(x.visible=b.visible,x.wireframe=b.wireframe,v===Yi?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let D=r.properties.get(x);D.light=L}return x}function y(A,b,L,v,x){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Yi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let P=e.update(A),B=A.material;if(Array.isArray(B)){let G=P.groups;for(let Z=0,X=G.length;Z<X;Z++){let O=G[Z],j=B[O.materialIndex];if(j&&j.visible){let R=M(A,j,v,x);A.onBeforeShadow(r,A,b,L,P,R,O),r.renderBufferDirect(L,null,P,R,A,O),A.onAfterShadow(r,A,b,L,P,R,O)}}}else if(B.visible){let G=M(A,B,v,x);A.onBeforeShadow(r,A,b,L,P,G,null),r.renderBufferDirect(L,null,P,G,A,null),A.onAfterShadow(r,A,b,L,P,G,null)}}let D=A.children;for(let P=0,B=D.length;P<B;P++)y(D[P],b,L,v,x)}function E(A){A.target.removeEventListener("dispose",E);for(let L in l){let v=l[L],x=A.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}function $S(r){function e(){let U=!1,K=new mt,$=null,ae=new mt(0,0,0,0);return{setMask:function(le){$!==le&&!U&&(r.colorMask(le,le,le,le),$=le)},setLocked:function(le){U=le},setClear:function(le,Ve,ct,ft,_t){_t===!0&&(le*=ft,Ve*=ft,ct*=ft),K.set(le,Ve,ct,ft),ae.equals(K)===!1&&(r.clearColor(le,Ve,ct,ft),ae.copy(K))},reset:function(){U=!1,$=null,ae.set(-1,0,0,0)}}}function t(){let U=!1,K=null,$=null,ae=null;return{setTest:function(le){le?fe(r.DEPTH_TEST):ne(r.DEPTH_TEST)},setMask:function(le){K!==le&&!U&&(r.depthMask(le),K=le)},setFunc:function(le){if($!==le){switch(le){case m0:r.depthFunc(r.NEVER);break;case g0:r.depthFunc(r.ALWAYS);break;case _0:r.depthFunc(r.LESS);break;case Tc:r.depthFunc(r.LEQUAL);break;case x0:r.depthFunc(r.EQUAL);break;case y0:r.depthFunc(r.GEQUAL);break;case v0:r.depthFunc(r.GREATER);break;case M0:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}$=le}},setLocked:function(le){U=le},setClear:function(le){ae!==le&&(r.clearDepth(le),ae=le)},reset:function(){U=!1,K=null,$=null,ae=null}}}function n(){let U=!1,K=null,$=null,ae=null,le=null,Ve=null,ct=null,ft=null,_t=null;return{setTest:function(st){U||(st?fe(r.STENCIL_TEST):ne(r.STENCIL_TEST))},setMask:function(st){K!==st&&!U&&(r.stencilMask(st),K=st)},setFunc:function(st,Ce,ye){($!==st||ae!==Ce||le!==ye)&&(r.stencilFunc(st,Ce,ye),$=st,ae=Ce,le=ye)},setOp:function(st,Ce,ye){(Ve!==st||ct!==Ce||ft!==ye)&&(r.stencilOp(st,Ce,ye),Ve=st,ct=Ce,ft=ye)},setLocked:function(st){U=st},setClear:function(st){_t!==st&&(r.clearStencil(st),_t=st)},reset:function(){U=!1,K=null,$=null,ae=null,le=null,Ve=null,ct=null,ft=null,_t=null}}}let i=new e,s=new t,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,S=null,M=null,y=null,E=null,A=new Be(0,0,0),b=0,L=!1,v=null,x=null,I=null,D=null,P=null,B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Z=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=Z>=2);let O=null,j={},R=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),Re=new mt().fromArray(R),qe=new mt().fromArray(oe);function q(U,K,$,ae){let le=new Uint8Array(4),Ve=r.createTexture();r.bindTexture(U,Ve),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ct=0;ct<$;ct++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(K,0,r.RGBA,1,1,ae,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(K+ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return Ve}let ee={};ee[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),ee[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ee[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(r.DEPTH_TEST),s.setFunc(Tc),Ne(!1),Ie(Md),fe(r.CULL_FACE),be(vs);function fe(U){l[U]!==!0&&(r.enable(U),l[U]=!0)}function ne(U){l[U]!==!1&&(r.disable(U),l[U]=!1)}function Le(U,K){return h[U]!==K?(r.bindFramebuffer(U,K),h[U]=K,U===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=K),U===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=K),!0):!1}function Pe(U,K){let $=f,ae=!1;if(U){$=u.get(K),$===void 0&&($=[],u.set(K,$));let le=U.textures;if($.length!==le.length||$[0]!==r.COLOR_ATTACHMENT0){for(let Ve=0,ct=le.length;Ve<ct;Ve++)$[Ve]=r.COLOR_ATTACHMENT0+Ve;$.length=le.length,ae=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,ae=!0);ae&&r.drawBuffers($)}function k(U){return d!==U?(r.useProgram(U),d=U,!0):!1}let Xe={[Js]:r.FUNC_ADD,[j_]:r.FUNC_SUBTRACT,[Q_]:r.FUNC_REVERSE_SUBTRACT};Xe[e0]=r.MIN,Xe[t0]=r.MAX;let Se={[n0]:r.ZERO,[i0]:r.ONE,[s0]:r.SRC_COLOR,[Fh]:r.SRC_ALPHA,[h0]:r.SRC_ALPHA_SATURATE,[c0]:r.DST_COLOR,[o0]:r.DST_ALPHA,[r0]:r.ONE_MINUS_SRC_COLOR,[Bh]:r.ONE_MINUS_SRC_ALPHA,[l0]:r.ONE_MINUS_DST_COLOR,[a0]:r.ONE_MINUS_DST_ALPHA,[u0]:r.CONSTANT_COLOR,[f0]:r.ONE_MINUS_CONSTANT_COLOR,[d0]:r.CONSTANT_ALPHA,[p0]:r.ONE_MINUS_CONSTANT_ALPHA};function be(U,K,$,ae,le,Ve,ct,ft,_t,st){if(U===vs){_===!0&&(ne(r.BLEND),_=!1);return}if(_===!1&&(fe(r.BLEND),_=!0),U!==J_){if(U!==g||st!==L){if((p!==Js||M!==Js)&&(r.blendEquation(r.FUNC_ADD),p=Js,M=Js),st)switch(U){case Wr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sd:r.blendFunc(r.ONE,r.ONE);break;case bd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sd:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case bd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,S=null,y=null,E=null,A.set(0,0,0),b=0,g=U,L=st}return}le=le||K,Ve=Ve||$,ct=ct||ae,(K!==p||le!==M)&&(r.blendEquationSeparate(Xe[K],Xe[le]),p=K,M=le),($!==m||ae!==S||Ve!==y||ct!==E)&&(r.blendFuncSeparate(Se[$],Se[ae],Se[Ve],Se[ct]),m=$,S=ae,y=Ve,E=ct),(ft.equals(A)===!1||_t!==b)&&(r.blendColor(ft.r,ft.g,ft.b,_t),A.copy(ft),b=_t),g=U,L=!1}function _e(U,K){U.side===Pn?ne(r.CULL_FACE):fe(r.CULL_FACE);let $=U.side===Ln;K&&($=!$),Ne($),U.blending===Wr&&U.transparent===!1?be(vs):be(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),i.setMask(U.colorWrite);let ae=U.stencilWrite;o.setTest(ae),ae&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),it(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(U){v!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),v=U)}function Ie(U){U!==K_?(fe(r.CULL_FACE),U!==x&&(U===Md?r.cullFace(r.BACK):U===$_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ne(r.CULL_FACE),x=U}function z(U){U!==I&&(G&&r.lineWidth(U),I=U)}function it(U,K,$){U?(fe(r.POLYGON_OFFSET_FILL),(D!==K||P!==$)&&(r.polygonOffset(K,$),D=K,P=$)):ne(r.POLYGON_OFFSET_FILL)}function C(U){U?fe(r.SCISSOR_TEST):ne(r.SCISSOR_TEST)}function w(U){U===void 0&&(U=r.TEXTURE0+B-1),O!==U&&(r.activeTexture(U),O=U)}function Y(U,K,$){$===void 0&&(O===null?$=r.TEXTURE0+B-1:$=O);let ae=j[$];ae===void 0&&(ae={type:void 0,texture:void 0},j[$]=ae),(ae.type!==U||ae.texture!==K)&&(O!==$&&(r.activeTexture($),O=$),r.bindTexture(U,K||ee[U]),ae.type=U,ae.texture=K)}function J(){let U=j[O];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(U){Re.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Re.copy(U))}function Ue(U){qe.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),qe.copy(U))}function We(U,K){let $=c.get(K);$===void 0&&($=new WeakMap,c.set(K,$));let ae=$.get(U);ae===void 0&&(ae=r.getUniformBlockIndex(K,U.name),$.set(U,ae))}function pt(U,K){let ae=c.get(K).get(U);a.get(K)!==ae&&(r.uniformBlockBinding(K,ae,U.__bindingPointIndex),a.set(K,ae))}function Oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},O=null,j={},h={},u=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,S=null,M=null,y=null,E=null,A=new Be(0,0,0),b=0,L=!1,v=null,x=null,I=null,D=null,P=null,Re.set(0,0,r.canvas.width,r.canvas.height),qe.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:fe,disable:ne,bindFramebuffer:Le,drawBuffers:Pe,useProgram:k,setBlending:be,setMaterial:_e,setFlipSided:Ne,setCullFace:Ie,setLineWidth:z,setPolygonOffset:it,setScissorTest:C,activeTexture:w,bindTexture:Y,unbindTexture:J,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:$e,texImage3D:ge,updateUBOMapping:We,uniformBlockBinding:pt,texStorage2D:se,texStorage3D:Me,texSubImage2D:me,texSubImage3D:ce,compressedTexSubImage2D:ie,compressedTexSubImage3D:De,scissor:xe,viewport:Ue,reset:Oe}}function JS(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qe,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,w){return d?new OffscreenCanvas(C,w):Ko("canvas")}function g(C,w,Y){let J=1,Q=it(C);if((Q.width>Y||Q.height>Y)&&(J=Y/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let te=Math.floor(J*Q.width),me=Math.floor(J*Q.height);u===void 0&&(u=_(te,me));let ce=w?_(te,me):u;return ce.width=te,ce.height=me,ce.getContext("2d").drawImage(C,0,0,te,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+te+"x"+me+")."),ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==ln&&C.minFilter!==In}function m(C){r.generateMipmap(C)}function S(C,w,Y,J,Q=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let te=w;if(w===r.RED&&(Y===r.FLOAT&&(te=r.R32F),Y===r.HALF_FLOAT&&(te=r.R16F),Y===r.UNSIGNED_BYTE&&(te=r.R8)),w===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(te=r.R8UI),Y===r.UNSIGNED_SHORT&&(te=r.R16UI),Y===r.UNSIGNED_INT&&(te=r.R32UI),Y===r.BYTE&&(te=r.R8I),Y===r.SHORT&&(te=r.R16I),Y===r.INT&&(te=r.R32I)),w===r.RG&&(Y===r.FLOAT&&(te=r.RG32F),Y===r.HALF_FLOAT&&(te=r.RG16F),Y===r.UNSIGNED_BYTE&&(te=r.RG8)),w===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(te=r.RG8UI),Y===r.UNSIGNED_SHORT&&(te=r.RG16UI),Y===r.UNSIGNED_INT&&(te=r.RG32UI),Y===r.BYTE&&(te=r.RG8I),Y===r.SHORT&&(te=r.RG16I),Y===r.INT&&(te=r.RG32I)),w===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(te=r.RGB9_E5),w===r.RGBA){let me=Q?Ac:ht.getTransfer(J);Y===r.FLOAT&&(te=r.RGBA32F),Y===r.HALF_FLOAT&&(te=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(te=me===Mt?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)}return(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function M(C,w){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==ln&&C.minFilter!==In?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function y(C){let w=C.target;w.removeEventListener("dispose",y),A(w),w.isVideoTexture&&h.delete(w)}function E(C){let w=C.target;w.removeEventListener("dispose",E),L(w)}function A(C){let w=n.get(C);if(w.__webglInit===void 0)return;let Y=C.source,J=f.get(Y);if(J){let Q=J[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(C),Object.keys(J).length===0&&f.delete(Y)}n.remove(C)}function b(C){let w=n.get(C);r.deleteTexture(w.__webglTexture);let Y=C.source,J=f.get(Y);delete J[w.__cacheKey],o.memory.textures--}function L(C){let w=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let Q=0;Q<w.__webglFramebuffer[J].length;Q++)r.deleteFramebuffer(w.__webglFramebuffer[J][Q]);else r.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)r.deleteFramebuffer(w.__webglFramebuffer[J]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Y=C.textures;for(let J=0,Q=Y.length;J<Q;J++){let te=n.get(Y[J]);te.__webglTexture&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(Y[J])}n.remove(C)}let v=0;function x(){v=0}function I(){let C=v;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),v+=1,C}function D(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function P(C,w){let Y=n.get(C);if(C.isVideoTexture&&Ie(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){let J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(Y,C,w);return}}t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+w)}function B(C,w){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){Re(Y,C,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+w)}function G(C,w){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){Re(Y,C,w);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+w)}function Z(C,w){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){qe(Y,C,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+w)}let X={[Ai]:r.REPEAT,[Zi]:r.CLAMP_TO_EDGE,[qo]:r.MIRRORED_REPEAT},O={[ln]:r.NEAREST,[xu]:r.NEAREST_MIPMAP_NEAREST,[Hr]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[Go]:r.LINEAR_MIPMAP_NEAREST,[Si]:r.LINEAR_MIPMAP_LINEAR},j={[W0]:r.NEVER,[$0]:r.ALWAYS,[X0]:r.LESS,[Mm]:r.LEQUAL,[Y0]:r.EQUAL,[K0]:r.GEQUAL,[q0]:r.GREATER,[Z0]:r.NOTEQUAL};function R(C,w){if(w.type===bi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===In||w.magFilter===Go||w.magFilter===Hr||w.magFilter===Si||w.minFilter===In||w.minFilter===Go||w.minFilter===Hr||w.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,X[w.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,X[w.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,X[w.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,O[w.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,O[w.minFilter]),w.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,j[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ln||w.minFilter!==Hr&&w.minFilter!==Si||w.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function oe(C,w){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",y));let J=w.source,Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));let te=D(w);if(te!==C.__cacheKey){Q[te]===void 0&&(Q[te]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),Q[te].usedTimes++;let me=Q[C.__cacheKey];me!==void 0&&(Q[C.__cacheKey].usedTimes--,me.usedTimes===0&&b(w)),C.__cacheKey=te,C.__webglTexture=Q[te].texture}return Y}function Re(C,w,Y){let J=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=r.TEXTURE_3D);let Q=oe(C,w),te=w.source;t.bindTexture(J,C.__webglTexture,r.TEXTURE0+Y);let me=n.get(te);if(te.version!==me.__version||Q===!0){t.activeTexture(r.TEXTURE0+Y);let ce=ht.getPrimaries(ht.workingColorSpace),ie=w.colorSpace===xs?null:ht.getPrimaries(w.colorSpace),De=w.colorSpace===xs||ce===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let se=g(w.image,!1,i.maxTextureSize);se=z(w,se);let Me=s.convert(w.format,w.colorSpace),$e=s.convert(w.type),ge=S(w.internalFormat,Me,$e,w.colorSpace,w.isVideoTexture);R(J,w);let xe,Ue=w.mipmaps,We=w.isVideoTexture!==!0,pt=me.__version===void 0||Q===!0,Oe=te.dataReady,U=M(w,se);if(w.isDepthTexture)ge=r.DEPTH_COMPONENT16,w.type===bi?ge=r.DEPTH_COMPONENT32F:w.type===$r?ge=r.DEPTH_COMPONENT24:w.type===ra&&(ge=r.DEPTH24_STENCIL8),pt&&(We?t.texStorage2D(r.TEXTURE_2D,1,ge,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,ge,se.width,se.height,0,Me,$e,null));else if(w.isDataTexture)if(Ue.length>0){We&&pt&&t.texStorage2D(r.TEXTURE_2D,U,ge,Ue[0].width,Ue[0].height);for(let K=0,$=Ue.length;K<$;K++)xe=Ue[K],We?Oe&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,xe.width,xe.height,Me,$e,xe.data):t.texImage2D(r.TEXTURE_2D,K,ge,xe.width,xe.height,0,Me,$e,xe.data);w.generateMipmaps=!1}else We?(pt&&t.texStorage2D(r.TEXTURE_2D,U,ge,se.width,se.height),Oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,Me,$e,se.data)):t.texImage2D(r.TEXTURE_2D,0,ge,se.width,se.height,0,Me,$e,se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){We&&pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,U,ge,Ue[0].width,Ue[0].height,se.depth);for(let K=0,$=Ue.length;K<$;K++)xe=Ue[K],w.format!==pi?Me!==null?We?Oe&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,xe.width,xe.height,se.depth,Me,xe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,ge,xe.width,xe.height,se.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Oe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,xe.width,xe.height,se.depth,Me,$e,xe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,ge,xe.width,xe.height,se.depth,0,Me,$e,xe.data)}else{We&&pt&&t.texStorage2D(r.TEXTURE_2D,U,ge,Ue[0].width,Ue[0].height);for(let K=0,$=Ue.length;K<$;K++)xe=Ue[K],w.format!==pi?Me!==null?We?Oe&&t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,xe.width,xe.height,Me,xe.data):t.compressedTexImage2D(r.TEXTURE_2D,K,ge,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Oe&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,xe.width,xe.height,Me,$e,xe.data):t.texImage2D(r.TEXTURE_2D,K,ge,xe.width,xe.height,0,Me,$e,xe.data)}else if(w.isDataArrayTexture)We?(pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,U,ge,se.width,se.height,se.depth),Oe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,$e,se.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ge,se.width,se.height,se.depth,0,Me,$e,se.data);else if(w.isData3DTexture)We?(pt&&t.texStorage3D(r.TEXTURE_3D,U,ge,se.width,se.height,se.depth),Oe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,$e,se.data)):t.texImage3D(r.TEXTURE_3D,0,ge,se.width,se.height,se.depth,0,Me,$e,se.data);else if(w.isFramebufferTexture){if(pt)if(We)t.texStorage2D(r.TEXTURE_2D,U,ge,se.width,se.height);else{let K=se.width,$=se.height;for(let ae=0;ae<U;ae++)t.texImage2D(r.TEXTURE_2D,ae,ge,K,$,0,Me,$e,null),K>>=1,$>>=1}}else if(Ue.length>0){if(We&&pt){let K=it(Ue[0]);t.texStorage2D(r.TEXTURE_2D,U,ge,K.width,K.height)}for(let K=0,$=Ue.length;K<$;K++)xe=Ue[K],We?Oe&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,Me,$e,xe):t.texImage2D(r.TEXTURE_2D,K,ge,Me,$e,xe);w.generateMipmaps=!1}else if(We){if(pt){let K=it(se);t.texStorage2D(r.TEXTURE_2D,U,ge,K.width,K.height)}Oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,$e,se)}else t.texImage2D(r.TEXTURE_2D,0,ge,Me,$e,se);p(w)&&m(J),me.__version=te.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function qe(C,w,Y){if(w.image.length!==6)return;let J=oe(C,w),Q=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+Y);let te=n.get(Q);if(Q.version!==te.__version||J===!0){t.activeTexture(r.TEXTURE0+Y);let me=ht.getPrimaries(ht.workingColorSpace),ce=w.colorSpace===xs?null:ht.getPrimaries(w.colorSpace),ie=w.colorSpace===xs||me===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let De=w.isCompressedTexture||w.image[0].isCompressedTexture,se=w.image[0]&&w.image[0].isDataTexture,Me=[];for(let $=0;$<6;$++)!De&&!se?Me[$]=g(w.image[$],!0,i.maxCubemapSize):Me[$]=se?w.image[$].image:w.image[$],Me[$]=z(w,Me[$]);let $e=Me[0],ge=s.convert(w.format,w.colorSpace),xe=s.convert(w.type),Ue=S(w.internalFormat,ge,xe,w.colorSpace),We=w.isVideoTexture!==!0,pt=te.__version===void 0||J===!0,Oe=Q.dataReady,U=M(w,$e);R(r.TEXTURE_CUBE_MAP,w);let K;if(De){We&&pt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,U,Ue,$e.width,$e.height);for(let $=0;$<6;$++){K=Me[$].mipmaps;for(let ae=0;ae<K.length;ae++){let le=K[ae];w.format!==pi?ge!==null?We?Oe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,0,0,le.width,le.height,ge,le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,Ue,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,0,0,le.width,le.height,ge,xe,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,Ue,le.width,le.height,0,ge,xe,le.data)}}}else{if(K=w.mipmaps,We&&pt){K.length>0&&U++;let $=it(Me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,U,Ue,$.width,$.height)}for(let $=0;$<6;$++)if(se){We?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Me[$].width,Me[$].height,ge,xe,Me[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ue,Me[$].width,Me[$].height,0,ge,xe,Me[$].data);for(let ae=0;ae<K.length;ae++){let Ve=K[ae].image[$].image;We?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,0,0,Ve.width,Ve.height,ge,xe,Ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,Ue,Ve.width,Ve.height,0,ge,xe,Ve.data)}}else{We?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ge,xe,Me[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ue,ge,xe,Me[$]);for(let ae=0;ae<K.length;ae++){let le=K[ae];We?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,0,0,ge,xe,le.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,Ue,ge,xe,le.image[$])}}}p(w)&&m(r.TEXTURE_CUBE_MAP),te.__version=Q.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function q(C,w,Y,J,Q,te){let me=s.convert(Y.format,Y.colorSpace),ce=s.convert(Y.type),ie=S(Y.internalFormat,me,ce,Y.colorSpace);if(!n.get(w).__hasExternalTextures){let se=Math.max(1,w.width>>te),Me=Math.max(1,w.height>>te);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,ie,se,Me,w.depth,0,me,ce,null):t.texImage2D(Q,te,ie,se,Me,0,me,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Ne(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Q,n.get(Y).__webglTexture,0,_e(w)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,Q,n.get(Y).__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ee(C,w,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let J=r.DEPTH_COMPONENT24;if(Y||Ne(w)){let Q=w.depthTexture;Q&&Q.isDepthTexture&&(Q.type===bi?J=r.DEPTH_COMPONENT32F:Q.type===$r&&(J=r.DEPTH_COMPONENT24));let te=_e(w);Ne(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,J,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,te,J,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,J,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){let J=_e(w);Y&&Ne(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,w.width,w.height):Ne(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{let J=w.textures;for(let Q=0;Q<J.length;Q++){let te=J[Q],me=s.convert(te.format,te.colorSpace),ce=s.convert(te.type),ie=S(te.internalFormat,me,ce,te.colorSpace),De=_e(w);Y&&Ne(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,De,ie,w.width,w.height):Ne(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,De,ie,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ie,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function fe(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),P(w.depthTexture,0);let J=n.get(w.depthTexture).__webglTexture,Q=_e(w);if(w.depthTexture.format===Xr)Ne(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(w.depthTexture.format===Zo)Ne(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ne(C){let w=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");fe(w.__webglFramebuffer,C)}else if(Y){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]=r.createRenderbuffer(),ee(w.__webglDepthbuffer[J],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),ee(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(C,w,Y){let J=n.get(C);w!==void 0&&q(J.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&ne(C)}function Pe(C){let w=C.texture,Y=n.get(C),J=n.get(w);C.addEventListener("dispose",E);let Q=C.textures,te=C.isWebGLCubeRenderTarget===!0,me=Q.length>1;if(me||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=w.version,o.memory.textures++),te){Y.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[ce]=[];for(let ie=0;ie<w.mipmaps.length;ie++)Y.__webglFramebuffer[ce][ie]=r.createFramebuffer()}else Y.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ce=0;ce<w.mipmaps.length;ce++)Y.__webglFramebuffer[ce]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(me)for(let ce=0,ie=Q.length;ce<ie;ce++){let De=n.get(Q[ce]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&Ne(C)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){let ie=Q[ce];Y.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[ce]);let De=s.convert(ie.format,ie.colorSpace),se=s.convert(ie.type),Me=S(ie.internalFormat,De,se,ie.colorSpace,C.isXRRenderTarget===!0),$e=_e(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,Me,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,Y.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),ee(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),R(r.TEXTURE_CUBE_MAP,w);for(let ce=0;ce<6;ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let ie=0;ie<w.mipmaps.length;ie++)q(Y.__webglFramebuffer[ce][ie],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ie);else q(Y.__webglFramebuffer[ce],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(w)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ce=0,ie=Q.length;ce<ie;ce++){let De=Q[ce],se=n.get(De);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),R(r.TEXTURE_2D,De),q(Y.__webglFramebuffer,C,De,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,0),p(De)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,J.__webglTexture),R(ce,w),w.mipmaps&&w.mipmaps.length>0)for(let ie=0;ie<w.mipmaps.length;ie++)q(Y.__webglFramebuffer[ie],C,w,r.COLOR_ATTACHMENT0,ce,ie);else q(Y.__webglFramebuffer,C,w,r.COLOR_ATTACHMENT0,ce,0);p(w)&&m(ce),t.unbindTexture()}C.depthBuffer&&ne(C)}function k(C){let w=C.textures;for(let Y=0,J=w.length;Y<J;Y++){let Q=w[Y];if(p(Q)){let te=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,me=n.get(Q).__webglTexture;t.bindTexture(te,me),m(te),t.unbindTexture()}}}let Xe=[],Se=[];function be(C){if(C.samples>0){if(Ne(C)===!1){let w=C.textures,Y=C.width,J=C.height,Q=r.COLOR_BUFFER_BIT,te=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=n.get(C),ce=w.length>1;if(ce)for(let ie=0;ie<w.length;ie++)t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ie=0;ie<w.length;ie++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,me.__webglColorRenderbuffer[ie]);let De=n.get(w[ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,De,0)}r.blitFramebuffer(0,0,Y,J,0,0,Y,J,Q,r.NEAREST),c===!0&&(Xe.length=0,Se.length=0,Xe.push(r.COLOR_ATTACHMENT0+ie),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Xe.push(te),Se.push(te),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let ie=0;ie<w.length;ie++){t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,me.__webglColorRenderbuffer[ie]);let De=n.get(w[ie]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,De,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let w=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function _e(C){return Math.min(i.maxSamples,C.samples)}function Ne(C){let w=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ie(C){let w=o.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function z(C,w){let Y=C.colorSpace,J=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==kt&&Y!==xs&&(ht.getTransfer(Y)===Mt?(J!==pi||Q!==Ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}function it(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=x,this.setTexture2D=P,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=Le,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Ne}function jS(r,e){function t(n,i=xs){let s,o=ht.getTransfer(i);if(n===Ss)return r.UNSIGNED_BYTE;if(n===dm)return r.UNSIGNED_SHORT_4_4_4_4;if(n===pm)return r.UNSIGNED_SHORT_5_5_5_1;if(n===D0)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===I0)return r.BYTE;if(n===L0)return r.SHORT;if(n===um)return r.UNSIGNED_SHORT;if(n===fm)return r.INT;if(n===$r)return r.UNSIGNED_INT;if(n===bi)return r.FLOAT;if(n===il)return r.HALF_FLOAT;if(n===N0)return r.ALPHA;if(n===U0)return r.RGB;if(n===pi)return r.RGBA;if(n===O0)return r.LUMINANCE;if(n===F0)return r.LUMINANCE_ALPHA;if(n===Xr)return r.DEPTH_COMPONENT;if(n===Zo)return r.DEPTH_STENCIL;if(n===mm)return r.RED;if(n===gm)return r.RED_INTEGER;if(n===B0)return r.RG;if(n===_m)return r.RG_INTEGER;if(n===xm)return r.RGBA_INTEGER;if(n===nh||n===ih||n===sh||n===rh)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===nh)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ih)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===nh)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ih)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sh)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rh)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ad||n===Ed||n===Rd||n===Cd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ad)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ed)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pd||n===Id||n===Ld)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pd||n===Id)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ld)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dd||n===Nd||n===Ud||n===Od||n===Fd||n===Bd||n===kd||n===zd||n===Hd||n===Vd||n===Gd||n===Wd||n===Xd||n===Yd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dd)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nd)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ud)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Od)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fd)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bd)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kd)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zd)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hd)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vd)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gd)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wd)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xd)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yd)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oh||n===qd||n===Zd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===oh)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===k0||n===Kd||n===$d||n===Jd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===oh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Kd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$d)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ra?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var tu=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},wi=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},QS={type:"move"},Yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let g of e.hand.values()){let p=t.getJointPose(g,n),m=this._getHandJoint(l,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QS)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tb=`
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

}`,nu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Qt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,i=new Ci({vertexShader:eb,fragmentShader:tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hn(new to(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},iu=class extends bs{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,_=null,g=new nu,p=t.getContextAttributes(),m=null,S=null,M=[],y=[],E=new Qe,A=null,b=new Vt;b.layers.enable(1),b.viewport=new mt;let L=new Vt;L.layers.enable(2),L.viewport=new mt;let v=[b,L],x=new tu;x.layers.enable(1),x.layers.enable(2);let I=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=M[q];return ee===void 0&&(ee=new Yo,M[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=M[q];return ee===void 0&&(ee=new Yo,M[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=M[q];return ee===void 0&&(ee=new Yo,M[q]=ee),ee.getHandSpace()};function P(q){let ee=y.indexOf(q.inputSource);if(ee===-1)return;let fe=M[ee];fe!==void 0&&(fe.update(q.inputSource,q.frame,l||o),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",G);for(let q=0;q<M.length;q++){let ee=y[q];ee!==null&&(y[q]=null,M[q].disconnect(ee))}I=null,D=null,g.reset(),e.setRenderTarget(m),d=null,f=null,u=null,i=null,S=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",B),i.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0){let ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new $i(d.framebufferWidth,d.framebufferHeight,{format:pi,type:Ss,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,fe=null,ne=null;p.depth&&(ne=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?Zo:Xr,fe=p.stencil?ra:$r);let Le={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Le),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new $i(f.textureWidth,f.textureHeight,{format:pi,type:Ss,depthTexture:new Fc(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),qe.setContext(i),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function G(q){for(let ee=0;ee<q.removed.length;ee++){let fe=q.removed[ee],ne=y.indexOf(fe);ne>=0&&(y[ne]=null,M[ne].disconnect(fe))}for(let ee=0;ee<q.added.length;ee++){let fe=q.added[ee],ne=y.indexOf(fe);if(ne===-1){for(let Pe=0;Pe<M.length;Pe++)if(Pe>=y.length){y.push(fe),ne=Pe;break}else if(y[Pe]===null){y[Pe]=fe,ne=Pe;break}if(ne===-1)break}let Le=M[ne];Le&&Le.connect(fe)}}let Z=new N,X=new N;function O(q,ee,fe){Z.setFromMatrixPosition(ee.matrixWorld),X.setFromMatrixPosition(fe.matrixWorld);let ne=Z.distanceTo(X),Le=ee.projectionMatrix.elements,Pe=fe.projectionMatrix.elements,k=Le[14]/(Le[10]-1),Xe=Le[14]/(Le[10]+1),Se=(Le[9]+1)/Le[5],be=(Le[9]-1)/Le[5],_e=(Le[8]-1)/Le[0],Ne=(Pe[8]+1)/Pe[0],Ie=k*_e,z=k*Ne,it=ne/(-_e+Ne),C=it*-_e;ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(C),q.translateZ(it),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let w=k+it,Y=Xe+it,J=Ie-C,Q=z+(ne-C),te=Se*Xe/Y*w,me=be*Xe/Y*w;q.projectionMatrix.makePerspective(J,Q,te,me,w,Y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function j(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;g.texture!==null&&(q.near=g.depthNear,q.far=g.depthFar),x.near=L.near=b.near=q.near,x.far=L.far=b.far=q.far,(I!==x.near||D!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,D=x.far,b.near=I,b.far=D,L.near=I,L.far=D,b.updateProjectionMatrix(),L.updateProjectionMatrix(),q.updateProjectionMatrix());let ee=q.parent,fe=x.cameras;j(x,ee);for(let ne=0;ne<fe.length;ne++)j(fe[ne],ee);fe.length===2?O(x,b,L):x.projectionMatrix.copy(b.projectionMatrix),R(q,x,ee)};function R(q,ee,fe){fe===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=jr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null};let oe=null;function Re(q,ee){if(h=ee.getViewerPose(l||o),_=ee,h!==null){let fe=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let ne=!1;fe.length!==x.cameras.length&&(x.cameras.length=0,ne=!0);for(let Pe=0;Pe<fe.length;Pe++){let k=fe[Pe],Xe=null;if(d!==null)Xe=d.getViewport(k);else{let be=u.getViewSubImage(f,k);Xe=be.viewport,Pe===0&&(e.setRenderTargetTextures(S,be.colorTexture,f.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(S))}let Se=v[Pe];Se===void 0&&(Se=new Vt,Se.layers.enable(Pe),Se.viewport=new mt,v[Pe]=Se),Se.matrix.fromArray(k.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(k.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Pe===0&&(x.matrix.copy(Se.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ne===!0&&x.cameras.push(Se)}let Le=i.enabledFeatures;if(Le&&Le.includes("depth-sensing")){let Pe=u.getDepthInformation(fe[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(e,Pe,i.renderState)}}for(let fe=0;fe<M.length;fe++){let ne=y[fe],Le=M[fe];ne!==null&&Le!==void 0&&Le.update(ne,ee,l||o)}g.render(e,x),oe&&oe(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),_=null}let qe=new Em;qe.setAnimationLoop(Re),this.setAnimationLoop=function(q){oe=q},this.dispose=function(){}}},Ks=new Ei,nb=new Ge;function ib(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Am(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,M,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,S,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ln&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ln&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=e.get(m),M=S.envMap,y=S.envMapRotation;if(M&&(p.envMap.value=M,Ks.copy(y),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),p.envMapRotation.value.setFromMatrix4(nb.makeRotationFromEuler(Ks)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let E=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*E,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,S,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ln&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){let S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sb(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){let y=M.program;n.uniformBlockBinding(S,y)}function l(S,M){let y=i[S.id];y===void 0&&(_(S),y=h(S),i[S.id]=y,S.addEventListener("dispose",p));let E=M.program;n.updateUBOMapping(S,E);let A=e.render.frame;s[S.id]!==A&&(f(S),s[S.id]=A)}function h(S){let M=u();S.__bindingPointIndex=M;let y=r.createBuffer(),E=S.__size,A=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,E,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,y),y}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let M=i[S.id],y=S.uniforms,E=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let A=0,b=y.length;A<b;A++){let L=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,x=L.length;v<x;v++){let I=L[v];if(d(I,A,v,E)===!0){let D=I.__offset,P=Array.isArray(I.value)?I.value:[I.value],B=0;for(let G=0;G<P.length;G++){let Z=P[G],X=g(Z);typeof Z=="number"||typeof Z=="boolean"?(I.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,D+B,I.__data)):Z.isMatrix3?(I.__data[0]=Z.elements[0],I.__data[1]=Z.elements[1],I.__data[2]=Z.elements[2],I.__data[3]=0,I.__data[4]=Z.elements[3],I.__data[5]=Z.elements[4],I.__data[6]=Z.elements[5],I.__data[7]=0,I.__data[8]=Z.elements[6],I.__data[9]=Z.elements[7],I.__data[10]=Z.elements[8],I.__data[11]=0):(Z.toArray(I.__data,B),B+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,M,y,E){let A=S.value,b=M+"_"+y;if(E[b]===void 0)return typeof A=="number"||typeof A=="boolean"?E[b]=A:E[b]=A.clone(),!0;{let L=E[b];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return E[b]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function _(S){let M=S.uniforms,y=0,E=16;for(let b=0,L=M.length;b<L;b++){let v=Array.isArray(M[b])?M[b]:[M[b]];for(let x=0,I=v.length;x<I;x++){let D=v[x],P=Array.isArray(D.value)?D.value:[D.value];for(let B=0,G=P.length;B<G;B++){let Z=P[B],X=g(Z),O=y%E;O!==0&&E-O<X.boundary&&(y+=E-O),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=X.storage}}}let A=y%E;return A>0&&(y+=E-A),S.__size=y,S.__cache={},this}function g(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(S){let M=S.target;M.removeEventListener("dispose",p);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function m(){for(let S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:c,update:l,dispose:m}}var Bc=class{constructor(e={}){let{canvas:t=dx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let d=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=Ms,this.toneMappingExposure=1;let M=this,y=!1,E=0,A=0,b=null,L=-1,v=null,x=new mt,I=new mt,D=null,P=new Be(0),B=0,G=t.width,Z=t.height,X=1,O=null,j=null,R=new mt(0,0,G,Z),oe=new mt(0,0,G,Z),Re=!1,qe=new jo,q=!1,ee=!1,fe=new Ge,ne=new N,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return b===null?X:1}let k=n;function Xe(T,F){return t.getContext(T,F)}try{let T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mu}`),t.addEventListener("webglcontextlost",U,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",$,!1),k===null){let F="webgl2";if(k=Xe(F,T),k===null)throw Xe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Se,be,_e,Ne,Ie,z,it,C,w,Y,J,Q,te,me,ce,ie,De,se,Me,$e,ge,xe,Ue,We;function pt(){Se=new bM(k),Se.init(),xe=new jS(k,Se),be=new _M(k,Se,e,xe),_e=new $S(k),Ne=new AM(k),Ie=new BS,z=new JS(k,Se,_e,Ie,be,xe,Ne),it=new yM(M),C=new SM(M),w=new Dx(k),Ue=new mM(k,w),Y=new wM(k,w,Ne,Ue),J=new RM(k,Y,w,Ne),Me=new EM(k,be,z),ie=new xM(Ie),Q=new FS(M,it,C,Se,be,Ue,ie),te=new ib(M,Ie),me=new zS,ce=new YS(Se),se=new pM(M,it,C,_e,J,f,c),De=new KS(M,J,be),We=new sb(k,Ne,be,_e),$e=new gM(k,Se,Ne),ge=new TM(k,Se,Ne),Ne.programs=Q.programs,M.capabilities=be,M.extensions=Se,M.properties=Ie,M.renderLists=me,M.shadowMap=De,M.state=_e,M.info=Ne}pt();let Oe=new iu(M,k);this.xr=Oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(G,Z,!1))},this.getSize=function(T){return T.set(G,Z)},this.setSize=function(T,F,H=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,Z=F,t.width=Math.floor(T*X),t.height=Math.floor(F*X),H===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(G*X,Z*X).floor()},this.setDrawingBufferSize=function(T,F,H){G=T,Z=F,X=H,t.width=Math.floor(T*H),t.height=Math.floor(F*H),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,F,H,V){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,F,H,V),_e.viewport(x.copy(R).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(oe)},this.setScissor=function(T,F,H,V){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,F,H,V),_e.scissor(I.copy(oe).multiplyScalar(X).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(T){_e.setScissorTest(Re=T)},this.setOpaqueSort=function(T){O=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(T=!0,F=!0,H=!0){let V=0;if(T){let W=!1;if(b!==null){let re=b.texture.format;W=re===xm||re===_m||re===gm}if(W){let re=b.texture.type,ue=re===Ss||re===$r||re===um||re===ra||re===dm||re===pm,pe=se.getClearColor(),Ee=se.getClearAlpha(),ke=pe.r,Te=pe.g,we=pe.b;ue?(d[0]=ke,d[1]=Te,d[2]=we,d[3]=Ee,k.clearBufferuiv(k.COLOR,0,d)):(_[0]=ke,_[1]=Te,_[2]=we,_[3]=Ee,k.clearBufferiv(k.COLOR,0,_))}else V|=k.COLOR_BUFFER_BIT}F&&(V|=k.DEPTH_BUFFER_BIT),H&&(V|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",U,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",$,!1),me.dispose(),ce.dispose(),Ie.dispose(),it.dispose(),C.dispose(),J.dispose(),Ue.dispose(),We.dispose(),Q.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",st),Oe.removeEventListener("sessionend",Ce),ye.stop()};function U(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let T=Ne.autoReset,F=De.enabled,H=De.autoUpdate,V=De.needsUpdate,W=De.type;pt(),Ne.autoReset=T,De.enabled=F,De.autoUpdate=H,De.needsUpdate=V,De.type=W}function $(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ae(T){let F=T.target;F.removeEventListener("dispose",ae),le(F)}function le(T){Ve(T),Ie.remove(T)}function Ve(T){let F=Ie.get(T).programs;F!==void 0&&(F.forEach(function(H){Q.releaseProgram(H)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,H,V,W,re){F===null&&(F=Le);let ue=W.isMesh&&W.matrixWorld.determinant()<0,pe=Zt(T,F,H,V,W);_e.setMaterial(V,ue);let Ee=H.index,ke=1;if(V.wireframe===!0){if(Ee=Y.getWireframeAttribute(H),Ee===void 0)return;ke=2}let Te=H.drawRange,we=H.attributes.position,lt=Te.start*ke,Ft=(Te.start+Te.count)*ke;re!==null&&(lt=Math.max(lt,re.start*ke),Ft=Math.min(Ft,(re.start+re.count)*ke)),Ee!==null?(lt=Math.max(lt,0),Ft=Math.min(Ft,Ee.count)):we!=null&&(lt=Math.max(lt,0),Ft=Math.min(Ft,we.count));let sn=Ft-lt;if(sn<0||sn===1/0)return;Ue.setup(W,V,pe,H,Ee);let _n,Ye=$e;if(Ee!==null&&(_n=w.get(Ee),Ye=ge,Ye.setIndex(_n)),W.isMesh)V.wireframe===!0?(_e.setLineWidth(V.wireframeLinewidth*Pe()),Ye.setMode(k.LINES)):Ye.setMode(k.TRIANGLES);else if(W.isLine){let Fe=V.linewidth;Fe===void 0&&(Fe=1),_e.setLineWidth(Fe*Pe()),W.isLineSegments?Ye.setMode(k.LINES):W.isLineLoop?Ye.setMode(k.LINE_LOOP):Ye.setMode(k.LINE_STRIP)}else W.isPoints?Ye.setMode(k.POINTS):W.isSprite&&Ye.setMode(k.TRIANGLES);if(W.isBatchedMesh)W._multiDrawInstances!==null?Ye.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances):Ye.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)Ye.renderInstances(lt,sn,W.count);else if(H.isInstancedBufferGeometry){let Fe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,vi=Math.min(H.instanceCount,Fe);Ye.renderInstances(lt,sn,vi)}else Ye.render(lt,sn)};function ct(T,F,H){T.transparent===!0&&T.side===Pn&&T.forceSinglePass===!1?(T.side=Ln,T.needsUpdate=!0,Et(T,F,H),T.side=Ti,T.needsUpdate=!0,Et(T,F,H),T.side=Pn):Et(T,F,H)}this.compile=function(T,F,H=null){H===null&&(H=T),p=ce.get(H),p.init(F),S.push(p),H.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),T!==H&&T.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(M._useLegacyLights);let V=new Set;return T.traverse(function(W){let re=W.material;if(re)if(Array.isArray(re))for(let ue=0;ue<re.length;ue++){let pe=re[ue];ct(pe,H,W),V.add(pe)}else ct(re,H,W),V.add(re)}),S.pop(),p=null,V},this.compileAsync=function(T,F,H=null){let V=this.compile(T,F,H);return new Promise(W=>{function re(){if(V.forEach(function(ue){Ie.get(ue).currentProgram.isReady()&&V.delete(ue)}),V.size===0){W(T);return}setTimeout(re,10)}Se.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let ft=null;function _t(T){ft&&ft(T)}function st(){ye.stop()}function Ce(){ye.start()}let ye=new Em;ye.setAnimationLoop(_t),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(T){ft=T,Oe.setAnimationLoop(T),T===null?ye.stop():ye.start()},Oe.addEventListener("sessionstart",st),Oe.addEventListener("sessionend",Ce),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(F),F=Oe.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,F,b),p=ce.get(T,S.length),p.init(F),S.push(p),fe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),qe.setFromProjectionMatrix(fe),ee=this.localClippingEnabled,q=ie.init(this.clippingPlanes,ee),g=me.get(T,m.length),g.init(),m.push(g),at(T,F,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(O,j);let H=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1;H&&se.addToRenderList(g,T),this.info.render.frame++,q===!0&&ie.beginShadows();let V=p.state.shadowsArray;De.render(V,T,F),q===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=g.opaque,re=g.transmissive;if(p.setupLights(M._useLegacyLights),F.isArrayCamera){let ue=F.cameras;if(re.length>0)for(let pe=0,Ee=ue.length;pe<Ee;pe++){let ke=ue[pe];He(W,re,T,ke)}H&&se.render(T);for(let pe=0,Ee=ue.length;pe<Ee;pe++){let ke=ue[pe];he(g,T,ke,ke.viewport)}}else re.length>0&&He(W,re,T,F),H&&se.render(T),he(g,T,F);b!==null&&(z.updateMultisampleRenderTarget(b),z.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(M,T,F),Ue.resetDefaultState(),L=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],q===!0&&ie.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function at(T,F,H,V){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||qe.intersectsSprite(T)){V&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);let ue=J.update(T),pe=T.material;pe.visible&&g.push(T,ue,pe,H,ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||qe.intersectsObject(T))){let ue=J.update(T),pe=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ne.copy(T.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),ne.copy(ue.boundingSphere.center)),ne.applyMatrix4(T.matrixWorld).applyMatrix4(fe)),Array.isArray(pe)){let Ee=ue.groups;for(let ke=0,Te=Ee.length;ke<Te;ke++){let we=Ee[ke],lt=pe[we.materialIndex];lt&&lt.visible&&g.push(T,ue,lt,H,ne.z,we)}}else pe.visible&&g.push(T,ue,pe,H,ne.z,null)}}let re=T.children;for(let ue=0,pe=re.length;ue<pe;ue++)at(re[ue],F,H,V)}function he(T,F,H,V){let W=T.opaque,re=T.transmissive,ue=T.transparent;p.setupLightsView(H),q===!0&&ie.setGlobalState(M.clippingPlanes,H),V&&_e.viewport(x.copy(V)),W.length>0&&Ae(W,F,H),re.length>0&&Ae(re,F,H),ue.length>0&&Ae(ue,F,H),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function He(T,F,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new $i(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?il:Ss,minFilter:Si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));let re=p.state.transmissionRenderTarget[V.id],ue=V.viewport||x;re.setSize(ue.z,ue.w);let pe=M.getRenderTarget();M.setRenderTarget(re),M.getClearColor(P),B=M.getClearAlpha(),B<1&&M.setClearColor(16777215,.5),M.clear();let Ee=M.toneMapping;M.toneMapping=Ms;let ke=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),q===!0&&ie.setGlobalState(M.clippingPlanes,V),Ae(T,H,V),z.updateMultisampleRenderTarget(re),z.updateRenderTargetMipmap(re),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let we=0,lt=F.length;we<lt;we++){let Ft=F[we],sn=Ft.object,_n=Ft.geometry,Ye=Ft.material,Fe=Ft.group;if(Ye.side===Pn&&sn.layers.test(V.layers)){let vi=Ye.side;Ye.side=Ln,Ye.needsUpdate=!0,ze(sn,H,V,_n,Ye,Fe),Ye.side=vi,Ye.needsUpdate=!0,Te=!0}}Te===!0&&(z.updateMultisampleRenderTarget(re),z.updateRenderTargetMipmap(re))}M.setRenderTarget(pe),M.setClearColor(P,B),ke!==void 0&&(V.viewport=ke),M.toneMapping=Ee}function Ae(T,F,H){let V=F.isScene===!0?F.overrideMaterial:null;for(let W=0,re=T.length;W<re;W++){let ue=T[W],pe=ue.object,Ee=ue.geometry,ke=V===null?ue.material:V,Te=ue.group;pe.layers.test(H.layers)&&ze(pe,F,H,Ee,ke,Te)}}function ze(T,F,H,V,W,re){T.onBeforeRender(M,F,H,V,W,re),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(M,F,H,V,T,re),W.transparent===!0&&W.side===Pn&&W.forceSinglePass===!1?(W.side=Ln,W.needsUpdate=!0,M.renderBufferDirect(H,F,V,W,T,re),W.side=Ti,W.needsUpdate=!0,M.renderBufferDirect(H,F,V,W,T,re),W.side=Pn):M.renderBufferDirect(H,F,V,W,T,re),T.onAfterRender(M,F,H,V,W,re)}function Et(T,F,H){F.isScene!==!0&&(F=Le);let V=Ie.get(T),W=p.state.lights,re=p.state.shadowsArray,ue=W.state.version,pe=Q.getParameters(T,W.state,re,F,H),Ee=Q.getProgramCacheKey(pe),ke=V.programs;V.environment=T.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(T.isMeshStandardMaterial?C:it).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",ae),ke=new Map,V.programs=ke);let Te=ke.get(Ee);if(Te!==void 0){if(V.currentProgram===Te&&V.lightsStateVersion===ue)return bt(T,pe),Te}else pe.uniforms=Q.getUniforms(T),T.onBuild(H,pe,M),T.onBeforeCompile(pe,M),Te=Q.acquireProgram(pe,Ee),ke.set(Ee,Te),V.uniforms=pe.uniforms;let we=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(we.clippingPlanes=ie.uniform),bt(T,pe),V.needsLights=xt(T),V.lightsStateVersion=ue,V.needsLights&&(we.ambientLightColor.value=W.state.ambient,we.lightProbe.value=W.state.probe,we.directionalLights.value=W.state.directional,we.directionalLightShadows.value=W.state.directionalShadow,we.spotLights.value=W.state.spot,we.spotLightShadows.value=W.state.spotShadow,we.rectAreaLights.value=W.state.rectArea,we.ltc_1.value=W.state.rectAreaLTC1,we.ltc_2.value=W.state.rectAreaLTC2,we.pointLights.value=W.state.point,we.pointLightShadows.value=W.state.pointShadow,we.hemisphereLights.value=W.state.hemi,we.directionalShadowMap.value=W.state.directionalShadowMap,we.directionalShadowMatrix.value=W.state.directionalShadowMatrix,we.spotShadowMap.value=W.state.spotShadowMap,we.spotLightMatrix.value=W.state.spotLightMatrix,we.spotLightMap.value=W.state.spotLightMap,we.pointShadowMap.value=W.state.pointShadowMap,we.pointShadowMatrix.value=W.state.pointShadowMatrix),V.currentProgram=Te,V.uniformsList=null,Te}function je(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=qr.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function bt(T,F){let H=Ie.get(T);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Zt(T,F,H,V,W){F.isScene!==!0&&(F=Le),z.resetTextureUnits();let re=F.fog,ue=V.isMeshStandardMaterial?F.environment:null,pe=b===null?M.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:kt,Ee=(V.isMeshStandardMaterial?C:it).get(V.envMap||ue),ke=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Te=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),we=!!H.morphAttributes.position,lt=!!H.morphAttributes.normal,Ft=!!H.morphAttributes.color,sn=Ms;V.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(sn=M.toneMapping);let _n=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ye=_n!==void 0?_n.length:0,Fe=Ie.get(V),vi=p.state.lights;if(q===!0&&(ee===!0||T!==v)){let Kn=T===v&&V.id===L;ie.setState(V,T,Kn)}let ut=!1;V.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==vi.state.version||Fe.outputColorSpace!==pe||W.isBatchedMesh&&Fe.batching===!1||!W.isBatchedMesh&&Fe.batching===!0||W.isInstancedMesh&&Fe.instancing===!1||!W.isInstancedMesh&&Fe.instancing===!0||W.isSkinnedMesh&&Fe.skinning===!1||!W.isSkinnedMesh&&Fe.skinning===!0||W.isInstancedMesh&&Fe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Fe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Fe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Fe.instancingMorph===!1&&W.morphTexture!==null||Fe.envMap!==Ee||V.fog===!0&&Fe.fog!==re||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ie.numPlanes||Fe.numIntersection!==ie.numIntersection)||Fe.vertexAlphas!==ke||Fe.vertexTangents!==Te||Fe.morphTargets!==we||Fe.morphNormals!==lt||Fe.morphColors!==Ft||Fe.toneMapping!==sn||Fe.morphTargetsCount!==Ye)&&(ut=!0):(ut=!0,Fe.__version=V.version);let Gs=Fe.currentProgram;ut===!0&&(Gs=Et(V,F,W));let yd=!1,Lo=!1,Ql=!1,rn=Gs.getUniforms(),us=Fe.uniforms;if(_e.useProgram(Gs.program)&&(yd=!0,Lo=!0,Ql=!0),V.id!==L&&(L=V.id,Lo=!0),yd||v!==T){rn.setValue(k,"projectionMatrix",T.projectionMatrix),rn.setValue(k,"viewMatrix",T.matrixWorldInverse);let Kn=rn.map.cameraPosition;Kn!==void 0&&Kn.setValue(k,ne.setFromMatrixPosition(T.matrixWorld)),be.logarithmicDepthBuffer&&rn.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&rn.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,Lo=!0,Ql=!0)}if(W.isSkinnedMesh){rn.setOptional(k,W,"bindMatrix"),rn.setOptional(k,W,"bindMatrixInverse");let Kn=W.skeleton;Kn&&(Kn.boneTexture===null&&Kn.computeBoneTexture(),rn.setValue(k,"boneTexture",Kn.boneTexture,z))}W.isBatchedMesh&&(rn.setOptional(k,W,"batchingTexture"),rn.setValue(k,"batchingTexture",W._matricesTexture,z));let eh=H.morphAttributes;if((eh.position!==void 0||eh.normal!==void 0||eh.color!==void 0)&&Me.update(W,H,Gs),(Lo||Fe.receiveShadow!==W.receiveShadow)&&(Fe.receiveShadow=W.receiveShadow,rn.setValue(k,"receiveShadow",W.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(us.envMap.value=Ee,us.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(us.envMapIntensity.value=F.environmentIntensity),Lo&&(rn.setValue(k,"toneMappingExposure",M.toneMappingExposure),Fe.needsLights&&wt(us,Ql),re&&V.fog===!0&&te.refreshFogUniforms(us,re),te.refreshMaterialUniforms(us,V,X,Z,p.state.transmissionRenderTarget[T.id]),qr.upload(k,je(Fe),us,z)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(qr.upload(k,je(Fe),us,z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&rn.setValue(k,"center",W.center),rn.setValue(k,"modelViewMatrix",W.modelViewMatrix),rn.setValue(k,"normalMatrix",W.normalMatrix),rn.setValue(k,"modelMatrix",W.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Kn=V.uniformsGroups;for(let th=0,Y_=Kn.length;th<Y_;th++){let vd=Kn[th];We.update(vd,Gs),We.bind(vd,Gs)}}return Gs}function wt(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function xt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,F,H){Ie.get(T.texture).__webglTexture=F,Ie.get(T.depthTexture).__webglTexture=H;let V=Ie.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){let H=Ie.get(T);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,H=0){b=T,E=F,A=H;let V=!0,W=null,re=!1,ue=!1;if(T){let Ee=Ie.get(T);Ee.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(k.FRAMEBUFFER,null),V=!1):Ee.__webglFramebuffer===void 0?z.setupRenderTarget(T):Ee.__hasExternalTextures&&z.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);let ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ue=!0);let Te=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Te[F])?W=Te[F][H]:W=Te[F],re=!0):T.samples>0&&z.useMultisampledRTT(T)===!1?W=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Te)?W=Te[H]:W=Te,x.copy(T.viewport),I.copy(T.scissor),D=T.scissorTest}else x.copy(R).multiplyScalar(X).floor(),I.copy(oe).multiplyScalar(X).floor(),D=Re;if(_e.bindFramebuffer(k.FRAMEBUFFER,W)&&V&&_e.drawBuffers(T,W),_e.viewport(x),_e.scissor(I),_e.setScissorTest(D),re){let Ee=Ie.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,H)}else if(ue){let Ee=Ie.get(T.texture),ke=F||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ee.__webglTexture,H||0,ke)}L=-1},this.readRenderTargetPixels=function(T,F,H,V,W,re,ue){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe){_e.bindFramebuffer(k.FRAMEBUFFER,pe);try{let Ee=T.texture,ke=Ee.format,Te=Ee.type;if(!be.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-V&&H>=0&&H<=T.height-W&&k.readPixels(F,H,V,W,xe.convert(ke),xe.convert(Te),re)}finally{let Ee=b!==null?Ie.get(b).__webglFramebuffer:null;_e.bindFramebuffer(k.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(T,F,H=0){let V=Math.pow(2,-H),W=Math.floor(F.image.width*V),re=Math.floor(F.image.height*V);z.setTexture2D(F,0),k.copyTexSubImage2D(k.TEXTURE_2D,H,0,0,T.x,T.y,W,re),_e.unbindTexture()},this.copyTextureToTexture=function(T,F,H,V=0){let W=F.image.width,re=F.image.height,ue=xe.convert(H.format),pe=xe.convert(H.type);z.setTexture2D(H,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment),F.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,V,T.x,T.y,W,re,ue,pe,F.image.data):F.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,V,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,ue,F.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,V,T.x,T.y,ue,pe,F.image),V===0&&H.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(T,F,H,V,W=0){let re=T.max.x-T.min.x,ue=T.max.y-T.min.y,pe=T.max.z-T.min.z,Ee=xe.convert(V.format),ke=xe.convert(V.type),Te;if(V.isData3DTexture)z.setTexture3D(V,0),Te=k.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)z.setTexture2DArray(V,0),Te=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);let we=k.getParameter(k.UNPACK_ROW_LENGTH),lt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ft=k.getParameter(k.UNPACK_SKIP_PIXELS),sn=k.getParameter(k.UNPACK_SKIP_ROWS),_n=k.getParameter(k.UNPACK_SKIP_IMAGES),Ye=H.isCompressedTexture?H.mipmaps[W]:H.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Ye.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ye.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,T.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,T.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,T.min.z),H.isDataTexture||H.isData3DTexture?k.texSubImage3D(Te,W,F.x,F.y,F.z,re,ue,pe,Ee,ke,Ye.data):V.isCompressedArrayTexture?k.compressedTexSubImage3D(Te,W,F.x,F.y,F.z,re,ue,pe,Ee,Ye.data):k.texSubImage3D(Te,W,F.x,F.y,F.z,re,ue,pe,Ee,ke,Ye),k.pixelStorei(k.UNPACK_ROW_LENGTH,we),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,lt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ft),k.pixelStorei(k.UNPACK_SKIP_ROWS,sn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,_n),W===0&&V.generateMipmaps&&k.generateMipmap(Te),_e.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?z.setTextureCube(T,0):T.isData3DTexture?z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?z.setTexture2DArray(T,0):z.setTexture2D(T,0),_e.unbindTexture()},this.resetState=function(){E=0,A=0,b=null,_e.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===yu?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===rl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}};var kc=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wm("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new N,ea=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=di(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Wp=new N,Xp=new mt,Yp=new mt,rb=new N,qp=new Ge,xc=new N,Lh=new Hn,Zp=new Ge,Dh=new Qr,zc=class extends hn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Td,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xc),this.boundingBox.expandByPoint(xc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xc),this.boundingSphere.expandByPoint(xc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lh.copy(this.boundingSphere),Lh.applyMatrix4(i),e.ray.intersectsSphere(Lh)!==!1&&(Zp.copy(i).invert(),Dh.copy(e.ray).applyMatrix4(Zp),!(this.boundingBox!==null&&Dh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Dh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Td?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===P0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Xp.fromBufferAttribute(i.attributes.skinIndex,e),Yp.fromBufferAttribute(i.attributes.skinWeight,e),Wp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=Yp.getComponent(s);if(o!==0){let a=Xp.getComponent(s);qp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(rb.copy(Wp).applyMatrix4(qp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},ta=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Hc=class extends Qt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=ln,h=ln,u,f){super(null,o,a,c,l,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kp=new Ge,ob=new Ge,Vc=class r{constructor(e=[],t=[]){this.uuid=mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:ob;Kp.multiplyMatrices(a,t[s]),Kp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Hc(t,e,e,pi,bi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new ta),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Pi=class extends It{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zr=new Ge,$p=new Ge,yc=[],Jp=new jn,ab=new Ge,Bo=new hn,ko=new Hn,er=class extends hn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ab)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),Jp.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(Jp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),ko.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Bo.geometry=this.geometry,Bo.material=this.material,Bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(n),e.ray.intersectsSphere(ko)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,zr),$p.multiplyMatrices(n,zr),Bo.matrixWorld=$p,Bo.raycast(e,yc);for(let o=0,a=yc.length;o<a;o++){let c=yc[o];c.instanceId=s,c.object=this,t.push(c)}yc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pi(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hc(new Float32Array(i*this.count),i,this.count,mm,bi));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var na=class extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Gc=new N,Wc=new N,jp=new Ge,zo=new Qr,vc=new Hn,Nh=new N,Qp=new N,io=class extends Lt{constructor(e=new Dn,t=new na){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Gc.fromBufferAttribute(t,i-1),Wc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Gc.distanceTo(Wc);e.setAttribute("lineDistance",new Jn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(i),vc.radius+=s,e.ray.intersectsSphere(vc)===!1)return;jp.copy(i).invert(),zo.copy(e.ray).applyMatrix4(jp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=l){let m=h.getX(g),S=h.getX(g+1),M=Mc(this,e,zo,c,m,S);M&&t.push(M)}if(this.isLineLoop){let g=h.getX(_-1),p=h.getX(d),m=Mc(this,e,zo,c,g,p);m&&t.push(m)}}else{let d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=l){let m=Mc(this,e,zo,c,g,g+1);m&&t.push(m)}if(this.isLineLoop){let g=Mc(this,e,zo,c,_-1,d);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Mc(r,e,t,n,i,s){let o=r.geometry.attributes.position;if(Gc.fromBufferAttribute(o,i),Wc.fromBufferAttribute(o,s),t.distanceSqToSegment(Gc,Wc,Nh,Qp)>n)return;Nh.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Nh);if(!(c<e.near||c>e.far))return{distance:c,point:Qp.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}var em=new N,tm=new N,Xc=class extends io{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)em.fromBufferAttribute(t,i),tm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+em.distanceTo(tm);e.setAttribute("lineDistance",new Jn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Yc=class extends io{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ia=class extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nm=new Ge,su=new Qr,Sc=new Hn,bc=new N,qc=class extends Lt{constructor(e=new Dn,t=new ia){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sc.copy(n.boundingSphere),Sc.applyMatrix4(i),Sc.radius+=s,e.ray.intersectsSphere(Sc)===!1)return;nm.copy(i).invert(),su.copy(e.ray).applyMatrix4(nm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let _=f,g=d;_<g;_++){let p=l.getX(_);bc.fromBufferAttribute(u,p),im(bc,p,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let _=f,g=d;_<g;_++)bc.fromBufferAttribute(u,_),im(bc,_,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function im(r,e,t,n,i,s,o){let a=su.distanceSqToPoint(r);if(a<t){let c=new N;su.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var gi=class extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vm,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gn=class extends gi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return cn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function wc(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function cb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function lb(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function sm(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function Dm(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}var ws=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ru=class extends ws{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jd,endingEnd:jd}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qd:s=e,a=2*t-n;break;case ep:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Qd:o=e,c=2*n-t;break;case ep:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,m=-f*p+2*f*g-f*_,S=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,M=(-1-d)*p+(1.5+d)*g+.5*_,y=d*p-d*g;for(let E=0;E!==a;++E)s[E]=m*o[h+E]+S*o[l+E]+M*o[c+E]+y*o[u+E];return s}},ou=class extends ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[l+f]*u+o[c+f]*h;return s}},au=class extends ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wc(t,this.TimeBufferType),this.values=wc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wc(e.times,Array),values:wc(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new au(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ou(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ru(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Jr:t=this.InterpolantFactoryMethodDiscrete;break;case Qs:t=this.InterpolantFactoryMethodLinear;break;case ah:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jr;case this.InterpolantFactoryMethodLinear:return Qs;case this.InterpolantFactoryMethodSmooth:return ah}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&cb(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ah,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let _=0;_!==n;++_){let g=t[u+_];if(g!==t[f+_]||g!==t[d+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Qs;var Ts=class extends Qn{};Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Jr;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Zc=class extends Qn{};Zc.prototype.ValueTypeName="color";var Ji=class extends Qn{};Ji.prototype.ValueTypeName="number";var cu=class extends ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)Gt.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ii=class extends Qn{InterpolantFactoryMethodLinear(e){return new cu(this.times,this.values,this.getValueSize(),e)}};Ii.prototype.ValueTypeName="quaternion";Ii.prototype.DefaultInterpolation=Qs;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends Qn{};As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Jr;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Qn{};ji.prototype.ValueTypeName="vector";var Kc=class{constructor(e="",t=-1,n=[],i=z0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ub(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Qn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let h=lb(c);c=sm(c,1,h),l=sm(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Ji(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(s);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,_,g){if(d.length!==0){let p=[],m=[];Dm(d,p,m,_),p.length!==0&&g.push(new u(f,p,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},_;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(let g in d){let p=[],m=[];for(let S=0;S!==f[_].morphTargets.length;++S){let M=f[_];p.push(M.time),m.push(M.morphTarget===g?1:0)}i.push(new Ji(".morphTargetInfluence["+g+"]",p,m))}c=d.length*o}else{let d=".bones["+t[u].name+"]";n(ji,d+".position",f,"pos",i),n(Ii,d+".quaternion",f,"rot",i),n(ji,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function hb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ji;case"vector":case"vector2":case"vector3":case"vector4":return ji;case"color":return Zc;case"quaternion":return Ii;case"bool":case"boolean":return Ts;case"string":return As}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function ub(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=hb(r.type);if(r.times===void 0){let t=[],n=[];Dm(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var ys={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},lu=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],_=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}},fb=new lu,ei=class{constructor(e){this.manager=e!==void 0?e:fb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xi={},hu=class extends Error{constructor(e,t){super(e),this.response=t}},Es=class extends ei{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ys.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Xi[e]!==void 0){Xi[e].push({onLoad:t,onProgress:n,onError:i});return}Xi[e]=[],Xi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Xi[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0,g=0,p=new ReadableStream({start(m){S();function S(){u.read().then(({done:M,value:y})=>{if(M)m.close();else{g+=y.byteLength;let E=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let A=0,b=h.length;A<b;A++){let L=h[A];L.onProgress&&L.onProgress(E)}m.enqueue(y),S()}})}}});return new Response(p)}else throw new hu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{ys.add(e,l);let h=Xi[e];delete Xi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=Xi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Xi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var $c=class extends ei{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=ys.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Ko("img");function c(){h(),ys.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},Jc=class extends ei{constructor(e){super(e)}load(e,t,n,i){let s=new Jo;s.colorSpace=Tt;let o=new $c(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(h){s.images[l]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return s}};var so=class extends ei{constructor(e){super(e)}load(e,t,n,i){let s=new Qt,o=new $c(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},ro=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Uh=new Ge,rm=new N,om=new N,sa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;rm.setFromMatrixPosition(e.matrixWorld),t.position.copy(rm),om.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(om),t.updateMatrixWorld(),Uh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uu=class extends sa{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=jr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},jc=class extends ro{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new uu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},am=new Ge,Ho=new N,Oh=new N,fu=class extends sa{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ho.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ho),Oh.copy(n.position),Oh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oh),n.updateMatrixWorld(),i.makeTranslation(-Ho.x,-Ho.y,-Ho.z),am.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(am)}},Qc=class extends ro{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},du=class extends sa{constructor(){super(new no(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oo=class extends ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new du}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},el=class extends ro{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Rs=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var tl=class extends ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=ys.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return ys.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ys.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ys.add(e,c),s.manager.itemStart(e)}};var Su="\\[\\]\\.:\\/",db=new RegExp("["+Su+"]","g"),bu="[^"+Su+"]",pb="[^"+Su.replace("\\.","")+"]",mb=/((?:WC+[\/:])*)/.source.replace("WC",bu),gb=/(WCOD+)?/.source.replace("WCOD",pb),_b=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bu),xb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bu),yb=new RegExp("^"+mb+gb+_b+xb+"$"),vb=["material","materials","bones","map"],pu=class{constructor(e,t,n){let i=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(db,"")}static parseTrackName(e){let t=yb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);vb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=pu;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var NT=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mu);function Qi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Hm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ho={duration:.5,overwrite:!1,delay:0},Vu,un,At,ni=1e8,vt=1/ni,Iu=Math.PI*2,Mb=Iu/4,Sb=0,Vm=Math.sqrt,bb=Math.cos,wb=Math.sin,Yt=function(e){return typeof e=="string"},Dt=function(e){return typeof e=="function"},ts=function(e){return typeof e=="number"},gl=function(e){return typeof e>"u"},Ni=function(e){return typeof e=="object"},On=function(e){return e!==!1},Gu=function(){return typeof window<"u"},al=function(e){return Dt(e)||Yt(e)},Gm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},fn=Array.isArray,Lu=/(?:-?\.?\d|\.)+/gi,Wu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Xu=/[+-]=-?[.\d]+/,Wm=/[^,'"\[\]\s]+/gi,Tb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rt,Li,Du,Yu,Xn={},ul={},Xm,Ym=function(e){return(ul=sr(e,Xn))&&dn},_l=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},fa=function(e,t){return!t&&console.warn(e)},qm=function(e,t){return e&&(Xn[e]=t)&&ul&&(ul[e]=t)||Xn},da=function(){return 0},Ab={suppressEvents:!0,isStart:!0,kill:!1},cl={suppressEvents:!0,kill:!1},Eb={suppressEvents:!0},qu={},Ps=[],Nu={},Zm,Nn={},Tu={},Nm=30,ll=[],Zu="",Ku=function(e){var t=e[0],n,i;if(Ni(t)||Dt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ll.length;i--&&!ll[i].targetTest(t););n=ll[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ju(e[i],n)))||e.splice(i,1);return e},Is=function(e){return e._gsap||Ku(ii(e))[0]._gsap},$u=function(e,t,n){return(n=e[t])&&Dt(n)?e[t]():gl(n)&&e.getAttribute&&e.getAttribute(t)||n},vn=function(e,t){return(e=e.split(",")).forEach(t)||e},Nt=function(e){return Math.round(e*1e5)/1e5||0},$t=function(e){return Math.round(e*1e7)/1e7||0},or=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Rb=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},fl=function(){var e=Ps.length,t=Ps.slice(0),n,i;for(Nu={},Ps.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Km=function(e,t,n,i){Ps.length&&!un&&fl(),e.render(t,n,i||un&&t<0&&(e._initted||e._startAt)),Ps.length&&!un&&fl()},$m=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Wm).length<2?t:Yt(e)?e.trim():e},Jm=function(e){return e},si=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Cb=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},sr=function(e,t){for(var n in t)e[n]=t[n];return e},Um=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ni(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},dl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},la=function(e){var t=e.parent||Rt,n=e.keyframes?Cb(fn(e.keyframes)):si;if(On(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Pb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},jm=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},xl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ls=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},tr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ib=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Uu=function(e,t,n,i){return e._startAt&&(un?e._startAt.revert(cl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Lb=function r(e){return!e||e._ts&&r(e.parent)},Om=function(e){return e._repeat?uo(e._tTime,e=e.duration()+e._rDelay)*e:0},uo=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},pl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},yl=function(e){return e._end=$t(e._start+(e._tDur/Math.abs(e._ts||e._rts||vt)||0))},vl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=$t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),yl(e),n._dirty||tr(n,e)),e},Qm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=pl(e.rawTime(),t),(!t._dur||ga(0,t.totalDuration(),n)-t._tTime>vt)&&t.render(n,!0)),tr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-vt}},Di=function(e,t,n,i){return t.parent&&Ls(t),t._start=$t((ts(n)?n:n||e!==Rt?ti(e,n,t):e._time)+t._delay),t._end=$t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jm(e,t,"_first","_last",e._sort?"_start":0),Ou(t)||(e._recent=t),i||Qm(e,t),e._ts<0&&vl(e,e._tTime),e},eg=function(e,t){return(Xn.ScrollTrigger||_l("scrollTrigger",t))&&Xn.ScrollTrigger.create(t,e)},tg=function(e,t,n,i,s){if(tf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!un&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Zm!==Un.frame)return Ps.push(e),e._lazy=[s,i],1},Db=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ou=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Nb=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Db(e)&&!(!e._initted&&Ou(e))||(e._ts<0||e._dp._ts<0)&&!Ou(e))?0:1,a=e._rDelay,c=0,l,h,u;if(a&&e._repeat&&(c=ga(0,e._tDur,t),h=uo(c,a),e._yoyo&&h&1&&(o=1-o),h!==uo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||un||i||e._zTime===vt||!t&&e._zTime){if(!e._initted&&tg(e,t,i,n,c))return;for(u=e._zTime,e._zTime=t||(n?vt:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&Uu(e,t,n,!0),e._onUpdate&&!n&&Wn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Wn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ls(e,1),!n&&!un&&(Wn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ub=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},fo=function(e,t,n,i){var s=e._repeat,o=$t(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:$t(o*(s+1)+e._rDelay*s):o,a>0&&!i&&vl(e,e._tTime=e._tDur*a),e.parent&&yl(e),n||tr(e.parent,e),e},Fm=function(e){return e instanceof en?tr(e):fo(e,e._dur)},Ob={_start:0,endTime:da,totalDuration:da},ti=function r(e,t,n){var i=e.labels,s=e._recent||Ob,o=e.duration()>=ni?s.endTime(!1):e._dur,a,c,l;return Yt(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(fn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},ha=function(e,t,n){var i=ts(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=On(c.vars.inherit)&&c.parent;o.immediateRender=On(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ot(t[0],o,t[s+1])},Ds=function(e,t){return e||e===0?t(e):t},ga=function(e,t,n){return n<e?e:n>t?t:n},tn=function(e,t){return!Yt(e)||!(t=Tb.exec(e))?"":t[1]},Fb=function(e,t,n){return Ds(n,function(i){return ga(e,t,i)})},Fu=[].slice,ng=function(e,t){return e&&Ni(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ni(e[0]))&&!e.nodeType&&e!==Li},Bb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Yt(i)&&!t||ng(i,1)?(s=n).push.apply(s,ii(i)):n.push(i)})||n},ii=function(e,t,n){return At&&!t&&At.selector?At.selector(e):Yt(e)&&!n&&(Du||!po())?Fu.call((t||Yu).querySelectorAll(e),0):fn(e)?Bb(e,n):ng(e)?Fu.call(e,0):e?[e]:[]},Bu=function(e){return e=ii(e)[0]||fa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ii(t,n.querySelectorAll?n:n===e?fa("Invalid scope")||Yu.createElement("div"):e)}},ig=function(e){return e.sort(function(){return .5-Math.random()})},sg=function(e){if(Dt(e))return e;var t=Ni(e)?e:{each:e},n=nr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,h=i,u=i;return Yt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],u=i[1]),function(f,d,_){var g=(_||t).length,p=o[g],m,S,M,y,E,A,b,L,v;if(!p){if(v=t.grid==="auto"?0:(t.grid||[1,ni])[1],!v){for(b=-ni;b<(b=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(p=o[g]=[],m=c?Math.min(v,g)*h-.5:i%v,S=v===ni?0:c?g*u/v-.5:i/v|0,b=0,L=ni,A=0;A<g;A++)M=A%v-m,y=S-(A/v|0),p[A]=E=l?Math.abs(l==="y"?y:M):Vm(M*M+y*y),E>b&&(b=E),E<L&&(L=E);i==="random"&&ig(p),p.max=b-L,p.min=L,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(v>g?g-1:l?l==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=tn(t.amount||t.each)||0,n=n&&g<0?dg(n):n}return g=(p[f]-p.min)/p.max||0,$t(p.b+(n?n(g):g)*p.v)+p.u}},ku=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=$t(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ts(n)?0:tn(n))}},rg=function(e,t){var n=fn(e),i,s;return!n&&Ni(e)&&(i=n=e.radius||ni,e.values?(e=ii(e.values),(s=!ts(e[0]))&&(i*=i)):e=ku(e.increment)),Ds(t,n?Dt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),l=ni,h=0,u=e.length,f,d;u--;)s?(f=e[u].x-a,d=e[u].y-c,f=f*f+d*d):f=Math.abs(e[u]-a),f<l&&(l=f,h=u);return h=!i||l<=i?e[h]:o,s||h===o||ts(o)?h:h+tn(o)}:ku(e))},og=function(e,t,n,i){return Ds(fn(e)?!t:n===!0?!!(n=0):!i,function(){return fn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},kb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},zb=function(e,t){return function(n){return e(parseFloat(n))+(t||tn(n))}},Hb=function(e,t,n){return cg(e,t,0,1,n)},ag=function(e,t,n){return Ds(n,function(i){return e[~~t(i)]})},Vb=function r(e,t,n){var i=t-e;return fn(e)?ag(e,r(0,e.length),t):Ds(n,function(s){return(i+(s-e)%i)%i+e})},Gb=function r(e,t,n){var i=t-e,s=i*2;return fn(e)?ag(e,r(0,e.length-1),t):Ds(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},mo=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Wm:Lu),n+=e.substr(t,i-t)+og(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},cg=function(e,t,n,i,s){var o=t-e,a=i-n;return Ds(s,function(c){return n+((c-e)/o*a||0)})},Wb=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Yt(e),a={},c,l,h,u,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(fn(e)&&!fn(t)){for(h=[],u=e.length,f=u-2,l=1;l<u;l++)h.push(r(e[l-1],e[l]));u--,s=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=t}else i||(e=sr(fn(e)?[]:{},e));if(!h){for(c in t)Qu.call(a,e,c,"get",t[c]);s=function(_){return rf(_,a)||(o?e.p:e)}}}return Ds(n,s)},Bm=function(e,t,n){var i=e.labels,s=ni,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},Wn=function(e,t,n){var i=e.vars,s=i[t],o=At,a=e._ctx,c,l,h;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&Ps.length&&fl(),a&&(At=a),h=c?s.apply(l,c):s.call(l),At=o,h},aa=function(e){return Ls(e),e.scrollTrigger&&e.scrollTrigger.kill(!!un),e.progress()<1&&Wn(e,"onInterrupt"),e},lo,lg=[],hg=function(e){if(e)if(e=!e.name&&e.default||e,Gu()||e.headless){var t=e.name,n=Dt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:da,render:rf,add:Qu,kill:ow,modifier:rw,rawVars:0},o={targetTest:0,get:0,getSetter:Ml,aliases:{},register:0};if(po(),e!==i){if(Nn[t])return;si(i,si(dl(e,s),o)),sr(i.prototype,sr(s,dl(e,o))),Nn[i.prop=t]=i,e.targetTest&&(ll.push(i),qu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}qm(t,i),e.register&&e.register(dn,i,Mn)}else lg.push(e)},gt=255,ca={aqua:[0,gt,gt],lime:[0,gt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,gt],navy:[0,0,128],white:[gt,gt,gt],olive:[128,128,0],yellow:[gt,gt,0],orange:[gt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[gt,0,0],pink:[gt,192,203],cyan:[0,gt,gt],transparent:[gt,gt,gt,0]},Au=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*gt+.5|0},ug=function(e,t,n){var i=e?ts(e)?[e>>16,e>>8&gt,e&gt]:0:ca.black,s,o,a,c,l,h,u,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ca[e])i=ca[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&gt,i&gt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&gt,e&gt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Lu),!t)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(l+1):h+l-h*l,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Au(c+1/3,s,o),i[1]=Au(c,s,o),i[2]=Au(c-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Wu),n&&i.length<4&&(i[3]=1),i}else i=e.match(Lu)||ca.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/gt,o=i[1]/gt,a=i[2]/gt,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?c=l=0:(d=u-f,l=h>.5?d/(2-u-f):d/(u+f),c=u===s?(o-a)/d+(o<a?6:0):u===o?(a-s)/d+2:(s-o)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},fg=function(e){var t=[],n=[],i=-1;return e.split(es).forEach(function(s){var o=s.match(rr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},km=function(e,t,n){var i="",s=(e+i).match(es),o=t?"hsla(":"rgba(",a=0,c,l,h,u;if(!s)return e;if(s=s.map(function(f){return(f=ug(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=fg(e),c=n.c,c.join(i)!==h.c.join(i)))for(l=e.replace(es,"1").split(rr),u=l.length-1;a<u;a++)i+=l[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!l)for(l=e.split(es),u=l.length-1;a<u;a++)i+=l[a]+s[a];return i+l[u]},es=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ca)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Xb=/hsl[a]?\(/,Ju=function(e){var t=e.join(" "),n;if(es.lastIndex=0,es.test(t))return n=Xb.test(t),e[1]=km(e[1],n),e[0]=km(e[0],n,fg(e[1])),!0},pa,Un=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],c,l,h,u,f,d,_=function g(p){var m=r()-i,S=p===!0,M,y,E,A;if((m>e||m<0)&&(n+=m-t),i+=m,E=i-n,M=E-o,(M>0||S)&&(A=++u.frame,f=E-u.time*1e3,u.time=E=E/1e3,o+=M+(M>=s?4:s-M),y=1),S||(c=l(g)),y)for(d=0;d<a.length;d++)a[d](E,f,A,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Xm&&(!Du&&Gu()&&(Li=Du=window,Yu=Li.document||{},Xn.gsap=dn,(Li.gsapVersions||(Li.gsapVersions=[])).push(dn.version),Ym(ul||Li.GreenSockGlobals||!Li.gsap&&Li||{}),lg.forEach(hg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(p){return setTimeout(p,o-u.time*1e3+1|0)},pa=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),pa=0,l=da},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=u.time*1e3+s},add:function(p,m,S){var M=m?function(y,E,A,b){p(y,E,A,b),u.remove(M)}:p;return u.remove(p),a[S?"unshift":"push"](M),po(),M},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},u}(),po=function(){return!pa&&Un.wake()},rt={},Yb=/^[\d.\-M][\d.\-,\s]/,qb=/["']/g,Zb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,c,l;s<o;s++)c=n[s],a=s!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(qb,"").trim():+l,i=c.substr(a+1).trim();return t},Kb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},$b=function(e){var t=(e+"").split("("),n=rt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Zb(t[1])]:Kb(e).split(",").map($m)):rt._CE&&Yb.test(e)?rt._CE("",e):n},dg=function(e){return function(t){return 1-e(1-t)}},pg=function r(e,t){for(var n=e._first,i;n;)n instanceof en?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},nr=function(e,t){return e&&(Dt(e)?e:rt[e]||$b(e))||t},ar=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return vn(e,function(a){rt[a]=Xn[a]=s,rt[o=a.toLowerCase()]=n;for(var c in s)rt[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=rt[a+"."+c]=s[c]}),s},mg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Eu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Iu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*wb((h-o)*s)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:mg(a);return s=Iu/s,c.config=function(l,h){return r(e,l,h)},c},Ru=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:mg(n);return i.config=function(s){return r(e,s)},i};vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ar(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});rt.Linear.easeNone=rt.none=rt.Linear.easeIn;ar("Elastic",Eu("in"),Eu("out"),Eu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ar("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ar("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});ar("Circ",function(r){return-(Vm(1-r*r)-1)});ar("Sine",function(r){return r===1?1:-bb(r*Mb)+1});ar("Back",Ru("in"),Ru("out"),Ru());rt.SteppedEase=rt.steps=Xn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-vt;return function(a){return((i*ga(0,o,a)|0)+s)*n}}};ho.ease=rt["quad.out"];vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Zu+=r+","+r+"Params,"});var ju=function(e,t){this.id=Sb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:$u,this.set=t?t.getSetter:Ml},ma=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,fo(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),pa||Un.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,fo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(po(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(vl(this,n),!s._dp||s.parent||Qm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===vt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Km(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Om(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Om(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?uo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-vt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?pl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-vt?0:this._rts,this.totalTime(ga(-Math.abs(this._delay),this._tDur,s),i!==!1),yl(this),Ib(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(po(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==vt&&(this._tTime-=vt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Di(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(On(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?pl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Eb);var i=un;return un=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),un=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Fm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Fm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ti(this,n),On(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,On(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-vt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-vt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Dt(n)?n:Jm,a=function(){var l=i.then;i.then=null,Dt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),s(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){aa(this)},r}();si(ma.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-vt,_prom:0,_ps:!1,_rts:1});var en=function(r){Hm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=On(n.sortChildren),Rt&&Di(n.parent||Rt,Qi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&eg(Qi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ha(0,arguments,this),this},t.from=function(i,s,o){return ha(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ha(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,la(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ot(i,s,ti(this,o),1),this},t.call=function(i,s,o){return Di(this,Ot.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,c,l,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=h,o.parent=this,new Ot(i,o,ti(this,c)),this},t.staggerFrom=function(i,s,o,a,c,l,h){return o.runBackwards=1,la(o).immediateRender=On(o.immediateRender),this.staggerTo(i,s,o,a,c,l,h)},t.staggerFromTo=function(i,s,o,a,c,l,h,u){return a.startAt=o,la(a).immediateRender=On(a.immediateRender),this.staggerTo(i,s,a,c,l,h,u)},t.render=function(i,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:$t(i),u=this._zTime<0!=i<0&&(this._initted||!l),f,d,_,g,p,m,S,M,y,E,A,b;if(this!==Rt&&h>c&&i>=0&&(h=c),h!==this._tTime||o||u){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),f=h,y=this._start,M=this._ts,m=!M,u&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=$t(h%p),h===c?(g=this._repeat,f=l):(g=~~(h/p),g&&g===h/p&&(f=l,g--),f>l&&(f=l)),E=uo(this._tTime,p),!a&&this._tTime&&E!==g&&this._tTime-E*p-this._dur<=0&&(E=g),A&&g&1&&(f=l-f,b=1),g!==E&&!this._lock){var L=A&&E&1,v=L===(A&&g&1);if(g<E&&(L=!L),a=L?0:h%l?l:h,this._lock=1,this.render(a||(b?0:$t(g*p)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&Wn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,v&&(this._lock=2,a=L?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;pg(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Ub(this,$t(a),$t(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!g&&(Wn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){S=0,_&&(h+=this._zTime=-vt);break}}d=_}else{d=this._last;for(var x=i<0?i:f;d;){if(_=d._prev,(d._act||x<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||un&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){S=0,_&&(h+=this._zTime=x?-vt:vt);break}}d=_}}if(S&&!s&&(this.pause(),S.render(f>=a?0:-vt)._zTime=f>=a?1:-1,this._ts))return this._start=y,yl(this),this.render(i,s,o);this._onUpdate&&!s&&Wn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Ls(this,1),!s&&!(i<0&&!a)&&(h||a||!c)&&(Wn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(ts(s)||(s=ti(this,s,i)),!(i instanceof ma)){if(fn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Yt(i))return this.addLabel(i,s);if(Dt(i))i=Ot.delayedCall(0,i);else return this}return this!==i?Di(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Ot?s&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,o)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Yt(i)?this.removeLabel(i):Dt(i)?this.killTweensOf(i):(xl(this,i),i===this._recent&&(this._recent=this._last),tr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$t(Un.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ti(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ot.delayedCall(0,s||da,o);return a.data="isPause",this._hasPause=1,Di(this,a,ti(this,i))},t.removePause=function(i){var s=this._first;for(i=ti(this,i);s;)s._start===i&&s.data==="isPause"&&Ls(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Cs!==a[c]&&a[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ii(i),c=this._first,l=ts(s),h;c;)c instanceof Ot?Rb(c._targets,a)&&(l?(!Cs||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(h=c.getTweensOf(a,s)).length&&o.push.apply(o,h),c=c._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ti(o,i),c=s,l=c.startAt,h=c.onStart,u=c.onStartParams,f=c.immediateRender,d,_=Ot.to(o,si({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||vt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());_._dur!==p&&fo(_,p,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,u||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,si({startAt:{time:ti(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Bm(this,ti(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Bm(this,ti(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+vt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in c)c[l]>=o&&(c[l]+=i);return tr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),tr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,c=ni,l,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Di(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;fo(o,o===Rt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Rt._ts&&(Km(Rt,pl(i,Rt)),Zm=Un.frame),Un.frame>=Nm){Nm+=Fn.autoSleep||120;var s=Rt._first;if((!s||!s._ts)&&Fn.autoSleep&&Un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Un.sleep()}}},e}(ma);si(en.prototype,{_lock:0,_hasPause:0,_forcing:0});var Jb=function(e,t,n,i,s,o,a){var c=new Mn(this._pt,e,t,0,1,sf,null,s),l=0,h=0,u,f,d,_,g,p,m,S;for(c.b=n,c.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=mo(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),f=n.match(wu)||[];u=wu.exec(i);)_=u[0],g=i.substring(l,u.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[h++]&&(p=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?or(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},l=wu.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(Xu.test(i)||m)&&(c.e=0),this._pt=c,c},Qu=function(e,t,n,i,s,o,a,c,l,h){Dt(i)&&(i=i(s||0,e,o));var u=e[t],f=n!=="get"?n:Dt(u)?l?e[t.indexOf("set")||!Dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():u,d=Dt(u)?l?nw:xg:nf,_;if(Yt(i)&&(~i.indexOf("random(")&&(i=mo(i)),i.charAt(1)==="="&&(_=or(f,i)+(tn(f)||0),(_||_===0)&&(i=_))),!h||f!==i||zu)return!isNaN(f*i)&&i!==""?(_=new Mn(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?sw:yg,0,d),l&&(_.fp=l),a&&_.modifier(a,this,e),this._pt=_):(!u&&!(t in e)&&_l(t,i),Jb.call(this,e,t,f,i,d,c||Fn.stringFilter,l))},jb=function(e,t,n,i,s){if(Dt(e)&&(e=ua(e,s,t,n,i)),!Ni(e)||e.style&&e.nodeType||fn(e)||Gm(e))return Yt(e)?ua(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=ua(e[a],s,t,n,i);return o},ef=function(e,t,n,i,s,o){var a,c,l,h;if(Nn[e]&&(a=new Nn[e]).init(s,a.rawVars?t[e]:jb(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=c=new Mn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==lo))for(l=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)l[a._props[h]]=c;return a},Cs,zu,tf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,M=e._overwrite==="auto"&&!Vu,y=e.timeline,E,A,b,L,v,x,I,D,P,B,G,Z,X;if(y&&(!f||!s)&&(s="none"),e._ease=nr(s,ho.ease),e._yEase=u?dg(nr(u===!0?s:u,ho.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(D=p[0]?Is(p[0]).harness:0,Z=D&&i[D.prop],E=dl(i,qu),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!d?g.render(-1,!0):g.revert(h&&_?cl:Ab),g._lazy=0),o){if(Ls(e._startAt=Ot.set(p,si({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&On(c),startAt:null,delay:0,onUpdate:l&&function(){return Wn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un||!a&&!d)&&e._startAt.revert(cl),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(a=!1),b=si({overwrite:!1,data:"isFromStart",lazy:a&&!g&&On(c),immediateRender:a,stagger:0,parent:m},E),Z&&(b[D.prop]=Z),Ls(e._startAt=Ot.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un?e._startAt.revert(cl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,vt,vt);else if(!t)return}for(e._pt=e._ptCache=0,c=_&&On(c)||c&&!_,A=0;A<p.length;A++){if(v=p[A],I=v._gsap||Ku(p)[A]._gsap,e._ptLookup[A]=B={},Nu[I.id]&&Ps.length&&fl(),G=S===p?A:S.indexOf(v),D&&(P=new D).init(v,Z||E,e,G,S)!==!1&&(e._pt=L=new Mn(e._pt,v,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(O){B[O]=L}),P.priority&&(x=1)),!D||Z)for(b in E)Nn[b]&&(P=ef(b,E,e,G,v,S))?P.priority&&(x=1):B[b]=L=Qu.call(e,v,b,"get",E[b],G,S,0,i.stringFilter);e._op&&e._op[A]&&e.kill(v,e._op[A]),M&&e._pt&&(Cs=e,Rt.killTweensOf(v,B,e.globalTime(t)),X=!e.parent,Cs=0),e._pt&&c&&(Nu[I.id]=1)}x&&of(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!X,f&&t<=0&&y.render(ni,!0,!0)},Qb=function(e,t,n,i,s,o,a,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return zu=1,e.vars[t]="+=0",tf(e,a),zu=0,c?fa(t+" not eligible for reset"):1;l.push(h)}for(d=l.length;d--;)u=l[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Nt(n)+tn(u.e)),u.b&&(u.b=h.s+tn(u.b))},ew=function(e,t){var n=e[0]?Is(e[0]).harness:0,i=n&&n.aliases,s,o,a,c;if(!i)return t;s=sr({},t);for(o in i)if(o in s)for(c=i[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},tw=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(fn(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ua=function(e,t,n,i,s){return Dt(e)?e.call(t,n,i,s):Yt(e)&&~e.indexOf("random(")?mo(e):e},gg=Zu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",_g={};vn(gg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return _g[r]=1});var Ot=function(r){Hm(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:la(i))||this;var c=a.vars,l=c.duration,h=c.delay,u=c.immediateRender,f=c.stagger,d=c.overwrite,_=c.keyframes,g=c.defaults,p=c.scrollTrigger,m=c.yoyoEase,S=i.parent||Rt,M=(fn(n)||Gm(n)?ts(n[0]):"length"in i)?[n]:ii(n),y,E,A,b,L,v,x,I;if(a._targets=M.length?Ku(M):fa("GSAP target "+n+" not found. https://gsap.com",!Fn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||al(l)||al(h)){if(i=a.vars,y=a.timeline=new en({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:M}),y.kill(),y.parent=y._dp=Qi(a),y._start=0,f||al(l)||al(h)){if(b=M.length,x=f&&sg(f),Ni(f))for(L in f)~gg.indexOf(L)&&(I||(I={}),I[L]=f[L]);for(E=0;E<b;E++)A=dl(i,_g),A.stagger=0,m&&(A.yoyoEase=m),I&&sr(A,I),v=M[E],A.duration=+ua(l,Qi(a),E,v,M),A.delay=(+ua(h,Qi(a),E,v,M)||0)-a._delay,!f&&b===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),y.to(v,A,x?x(E,v,M):0),y._ease=rt.none;y.duration()?l=h=0:a.timeline=0}else if(_){la(si(y.vars.defaults,{ease:"none"})),y._ease=nr(_.ease||i.ease||"none");var D=0,P,B,G;if(fn(_))_.forEach(function(Z){return y.to(M,Z,">")}),y.duration();else{A={};for(L in _)L==="ease"||L==="easeEach"||tw(L,_[L],A,_.easeEach);for(L in A)for(P=A[L].sort(function(Z,X){return Z.t-X.t}),D=0,E=0;E<P.length;E++)B=P[E],G={ease:B.e,duration:(B.t-(E?P[E-1].t:0))/100*l},G[L]=B.v,y.to(M,G,D),D+=G.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||a.duration(l=y.duration())}else a.timeline=0;return d===!0&&!Vu&&(Cs=Qi(a),Rt.killTweensOf(M),Cs=0),Di(S,Qi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!l&&!_&&a._start===$t(S._time)&&On(u)&&Lb(Qi(a))&&S.data!=="nested")&&(a._tTime=-vt,a.render(Math.max(0,-h)||0)),p&&eg(Qi(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-vt&&!h?c:i<vt?0:i,f,d,_,g,p,m,S,M,y;if(!l)Nb(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,M=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,o);if(f=$t(u%g),u===c?(_=this._repeat,f=l):(_=~~(u/g),_&&_===$t(u/g)&&(f=l,_--),f>l&&(f=l)),m=this._yoyo&&_&1,m&&(y=this._yEase,f=l-f),p=uo(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=u,this;_!==p&&(M&&this._yEase&&pg(M,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render($t(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(tg(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(l!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(f/l),this._from&&(this.ratio=S=1-S),f&&!a&&!s&&!_&&(Wn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Uu(this,i,s,o),Wn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Wn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Uu(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ls(this,1),!s&&!(h&&!a)&&(u||a||m)&&(Wn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,c){pa||Un.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||tf(this,l),h=this._ease(l/this._dur),Qb(this,i,s,o,a,h,l,c)?this.resetTo(i,s,o,a,1):(vl(this,0),this.parent||jm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?aa(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Cs&&Cs.vars.overwrite!==!0)._first||aa(this),this.parent&&o!==this.timeline.totalDuration()&&fo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?ii(i):a,l=this._ptLookup,h=this._pt,u,f,d,_,g,p,m;if((!s||s==="all")&&Pb(a,c))return s==="all"&&(this._pt=0),aa(this);for(u=this._op=this._op||[],s!=="all"&&(Yt(s)&&(g={},vn(s,function(S){return g[S]=1}),s=g),s=ew(a,s)),m=a.length;m--;)if(~c.indexOf(a[m])){f=l[m],s==="all"?(u[m]=s,_=f,d={}):(d=u[m]=u[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&xl(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&aa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ha(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ha(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Rt.killTweensOf(i,s,o)},e}(ma);si(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});vn("staggerTo,staggerFrom,staggerFromTo",function(r){Ot[r]=function(){var e=new en,t=Fu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var nf=function(e,t,n){return e[t]=n},xg=function(e,t,n){return e[t](n)},nw=function(e,t,n,i){return e[t](i.fp,n)},iw=function(e,t,n){return e.setAttribute(t,n)},Ml=function(e,t){return Dt(e[t])?xg:gl(e[t])&&e.setAttribute?iw:nf},yg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},sw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},sf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},rf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},rw=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},ow=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?xl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},aw=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},of=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Mn=function(){function r(t,n,i,s,o,a,c,l,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||yg,this.d=c||this,this.set=l||nf,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=aw,this.m=n,this.mt=s,this.tween=i},r}();vn(Zu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return qu[r]=1});Xn.TweenMax=Xn.TweenLite=Ot;Xn.TimelineLite=Xn.TimelineMax=en;Rt=new en({sortChildren:!1,defaults:ho,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=Ju;var ir=[],hl={},cw=[],zm=0,lw=0,Cu=function(e){return(hl[e]||cw).map(function(t){return t()})},Hu=function(){var e=Date.now(),t=[];e-zm>2&&(Cu("matchMediaInit"),ir.forEach(function(n){var i=n.queries,s=n.conditions,o,a,c,l;for(a in i)o=Li.matchMedia(i[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),Cu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zm=e,Cu("matchMedia"))},vg=function(){function r(t,n){this.selector=n&&Bu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=lw++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Dt(n)&&(s=i,i=n,n=Dt);var o=this,a=function(){var l=At,h=o.selector,u;return l&&l!==o&&l.data.push(o),s&&(o.selector=Bu(s)),At=o,u=i.apply(o,arguments),Dt(u)&&o._r.push(u),At=l,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Dt?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},e.ignore=function(n){var i=At;At=null,n(this),At=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ot&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof en?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ot)&&l.revert&&l.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ir.length;o--;)ir[o].id===this.id&&ir.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),hw=function(){function r(t){this.contexts=[],this.scope=t,At&&At.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ni(n)||(n={matches:n});var o=new vg(0,s||this.scope),a=o.conditions={},c,l,h;At&&!o.selector&&(o.selector=At.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?h=1:(c=Li.matchMedia(n[l]),c&&(ir.indexOf(o)<0&&ir.push(o),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener(Hu):c.addEventListener("change",Hu)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ml={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return hg(i)})},timeline:function(e){return new en(e)},getTweensOf:function(e,t){return Rt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Yt(e)&&(e=ii(e)[0]);var s=Is(e||{}).get,o=n?Jm:$m;return n==="native"&&(n=""),e&&(t?o((Nn[t]&&Nn[t].get||s)(e,t,n,i)):function(a,c,l){return o((Nn[a]&&Nn[a].get||s)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=ii(e),e.length>1){var i=e.map(function(h){return dn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var o=Nn[t],a=Is(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(h){var u=new o;lo._pt=0,u.init(e,n?h+n:h,lo,0,[e]),u.render(1,u),lo._pt&&rf(1,lo)}:a.set(e,c);return o?l:function(h){return l(e,c,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=dn.to(e,sr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(c,l,h){return s.resetTo(t,c,l,h)};return o.tween=s,o},isTweening:function(e){return Rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=nr(e.ease,ho.ease)),Um(ho,e||{})},config:function(e){return Um(Fn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Nn[a]&&!Xn[a]&&fa(t+" effect requires "+a+" plugin.")}),Tu[t]=function(a,c,l){return n(ii(a),si(c||{},s),l)},o&&(en.prototype[t]=function(a,c,l){return this.add(Tu[t](a,Ni(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){rt[e]=nr(t)},parseEase:function(e,t){return arguments.length?nr(e,t):rt},getById:function(e){return Rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new en(e),i,s;for(n.smoothChildTiming=On(e.smoothChildTiming),Rt.remove(n),n._dp=0,n._time=n._tTime=Rt._time,i=Rt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ot&&i.vars.onComplete===i._targets[0]))&&Di(n,i,i._start-i._delay),i=s;return Di(Rt,n,0),n},context:function(e,t){return e?new vg(e,t):At},matchMedia:function(e){return new hw(e)},matchMediaRefresh:function(){return ir.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Hu()},addEventListener:function(e,t){var n=hl[e]||(hl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=hl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Vb,wrapYoyo:Gb,distribute:sg,random:og,snap:rg,normalize:Hb,getUnit:tn,clamp:Fb,splitColor:ug,toArray:ii,selector:Bu,mapRange:cg,pipe:kb,unitize:zb,interpolate:Wb,shuffle:ig},install:Ym,effects:Tu,ticker:Un,updateRoot:en.updateRoot,plugins:Nn,globalTimeline:Rt,core:{PropTween:Mn,globals:qm,Tween:Ot,Timeline:en,Animation:ma,getCache:Is,_removeLinkedListItem:xl,reverting:function(){return un},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return Vu=e}}};vn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ml[r]=Ot[r]});Un.add(en.updateRoot);lo=ml.to({},{duration:0});var uw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},fw=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=uw(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Pu=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var c,l;if(Yt(s)&&(c={},vn(s,function(h){return c[h]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}fw(a,s)}}}},dn=ml.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)un?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Pu("roundProps",ku),Pu("modifiers"),Pu("snap",rg))||ml;Ot.version=en.version=dn.version="3.12.5";Xm=1;Gu()&&po();var dw=rt.Power0,pw=rt.Power1,mw=rt.Power2,gw=rt.Power3,_w=rt.Power4,xw=rt.Linear,yw=rt.Quad,vw=rt.Cubic,Mw=rt.Quart,Sw=rt.Quint,bw=rt.Strong,ww=rt.Elastic,Tw=rt.Back,Aw=rt.SteppedEase,Ew=rt.Bounce,Rw=rt.Sine,Cw=rt.Expo,Pw=rt.Circ;var Mg,Ns,_o,df,ur,Iw,Sg,pf,Lw=function(){return typeof window<"u"},is={},hr=180/Math.PI,xo=Math.PI/180,go=Math.atan2,bg=1e8,mf=/([A-Z])/g,Dw=/(left|right|width|margin|padding|x)/i,Nw=/[\s,\(]\S/,Ui={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Uw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ow=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Fw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Pg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ig=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Bw=function(e,t,n){return e.style[t]=n},kw=function(e,t,n){return e.style.setProperty(t,n)},zw=function(e,t,n){return e._gsap[t]=n},Hw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Vw=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Gw=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ct="transform",Bn=Ct+"Origin",Ww=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in is&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ui[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ns(i,a)}):this.tfm[e]=o.x?o[e]:ns(i,e),e===Bn&&(this.tfm.zOrigin=o.zOrigin);else return Ui.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ct)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Bn,t,"")),e=Ct}(s||t)&&this.props.push(e,t,s[e])},Lg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Xw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(mf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=pf(),(!s||!s.isStart)&&!n[Ct]&&(Lg(n),i.zOrigin&&n[Bn]&&(n[Bn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Dg=function(e,t){var n={target:e,props:[],revert:Xw,save:Ww};return e._gsap||dn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Ng,hf=function(e,t){var n=Ns.createElementNS?Ns.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ns.createElement(e);return n&&n.style?n:Ns.createElement(e)},Oi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(mf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,yo(t)||t,1)||""},wg="O,Moz,ms,Ms,Webkit".split(","),yo=function(e,t,n){var i=t||ur,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(wg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?wg[o]:"")+e},uf=function(){Lw()&&window.document&&(Mg=window,Ns=Mg.document,_o=Ns.documentElement,ur=hf("div")||{style:{}},Iw=hf("div"),Ct=yo(Ct),Bn=Ct+"Origin",ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ng=!!yo("perspective"),pf=dn.core.reverting,df=1)},af=function r(e){var t=hf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(_o.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),_o.removeChild(t),this.style.cssText=s,o},Tg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ug=function(e){var t;try{t=e.getBBox()}catch{t=af.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===af||(t=af.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Tg(e,["x","cx","x1"])||0,y:+Tg(e,["y","cy","y1"])||0,width:0,height:0}:t},Og=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ug(e))},fr=function(e,t){if(t){var n=e.style,i;t in is&&t!==Bn&&(t=Ct),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(mf,"-$1").toLowerCase())):n.removeAttribute(t)}},Us=function(e,t,n,i,s,o){var a=new Mn(e._pt,t,n,0,1,o?Ig:Pg);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Ag={deg:1,rad:1,turn:1},Yw={grid:1,flex:1},Os=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ur.style,c=Dw.test(t),l=e.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,f=i==="px",d=i==="%",_,g,p,m;if(i===o||!s||Ag[i]||Ag[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&Og(e),(d||o==="%")&&(is[t]||~t.indexOf("adius")))return _=m?e.getBBox()[c?"width":"height"]:e[h],Nt(d?s/_*u:s/100*_);if(a[c?"width":"height"]=u+(f?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Ns||!g.appendChild)&&(g=Ns.body),p=g._gsap,p&&d&&p.width&&c&&p.time===Un.time&&!p.uncache)return Nt(s/p.width*u);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=u+i,_=e[h],S?e.style[t]=S:fr(e,t)}else(d||o==="%")&&!Yw[Oi(g,"display")]&&(a.position=Oi(e,"position")),g===e&&(a.position="static"),g.appendChild(ur),_=ur[h],g.removeChild(ur),a.position="absolute";return c&&d&&(p=Is(g),p.time=Un.time,p.width=g[h]),Nt(f?_*s/u:_&&s?u/_*s:0)},ns=function(e,t,n,i){var s;return df||uf(),t in Ui&&t!=="transform"&&(t=Ui[t],~t.indexOf(",")&&(t=t.split(",")[0])),is[t]&&t!=="transform"?(s=ya(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:bl(Oi(e,Bn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Sl[t]&&Sl[t](e,t,n)||Oi(e,t)||$u(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Os(e,t,s,n)+n:s},qw=function(e,t,n,i){if(!n||n==="none"){var s=yo(t,e,1),o=s&&Oi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Oi(e,"borderTopColor"))}var a=new Mn(this._pt,e.style,t,0,1,sf),c=0,l=0,h,u,f,d,_,g,p,m,S,M,y,E;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=Oi(e,t)||i,g?e.style[t]=g:fr(e,t)),h=[n,i],Ju(h),n=h[0],i=h[1],f=n.match(rr)||[],E=i.match(rr)||[],E.length){for(;u=rr.exec(i);)p=u[0],S=i.substring(c,u.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(g=f[l++]||"")&&(d=parseFloat(g)||0,y=g.substr((d+"").length),p.charAt(1)==="="&&(p=or(d,p)+y),m=parseFloat(p),M=p.substr((m+"").length),c=rr.lastIndex-M.length,M||(M=M||Fn.units[t]||y,c===i.length&&(i+=M,a.e+=M)),y!==M&&(d=Os(e,t,g,M)||0),a._pt={_next:a._pt,p:S||l===1?S:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?Ig:Pg;return Xu.test(i)&&(a.e=0),this._pt=a,a},Eg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Zw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Eg[n]||n,t[1]=Eg[i]||i,t.join(" ")},Kw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],is[a]&&(c=1,a=a==="transformOrigin"?Bn:Ct),fr(n,a);c&&(fr(n,Ct),o&&(o.svg&&n.removeAttribute("transform"),ya(n,1),o.uncache=1,Lg(i)))}},Sl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Mn(e._pt,t,n,0,0,Kw);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},xa=[1,0,0,1,0,0],Fg={},Bg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Rg=function(e){var t=Oi(e,Ct);return Bg(t)?xa:t.substr(7).match(Wu).map(Nt)},gf=function(e,t){var n=e._gsap||Is(e),i=e.style,s=Rg(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?xa:s):(s===xa&&!e.offsetParent&&e!==_o&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(l=1,a=e.nextElementSibling,_o.appendChild(e)),s=Rg(e),c?i.display=c:fr(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):_o.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ff=function(e,t,n,i,s,o){var a=e._gsap,c=s||gf(e,!0),l=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=c[0],_=c[1],g=c[2],p=c[3],m=c[4],S=c[5],M=t.split(" "),y=parseFloat(M[0])||0,E=parseFloat(M[1])||0,A,b,L,v;n?c!==xa&&(b=d*p-_*g)&&(L=y*(p/b)+E*(-g/b)+(g*S-p*m)/b,v=y*(-_/b)+E*(d/b)-(d*S-_*m)/b,y=L,E=v):(A=Ug(e),y=A.x+(~M[0].indexOf("%")?y/100*A.width:y),E=A.y+(~(M[1]||M[0]).indexOf("%")?E/100*A.height:E)),i||i!==!1&&a.smooth?(m=y-l,S=E-h,a.xOffset=u+(m*d+S*g)-m,a.yOffset=f+(m*_+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Bn]="0px 0px",o&&(Us(o,a,"xOrigin",l,y),Us(o,a,"yOrigin",h,E),Us(o,a,"xOffset",u,a.xOffset),Us(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},ya=function(e,t){var n=e._gsap||new ju(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=Oi(e,Bn)||"0",h,u,f,d,_,g,p,m,S,M,y,E,A,b,L,v,x,I,D,P,B,G,Z,X,O,j,R,oe,Re,qe,q,ee;return h=u=f=g=p=m=S=M=y=0,d=_=1,n.svg=!!(e.getCTM&&Og(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Ct]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ct]!=="none"?c[Ct]:"")),i.scale=i.rotate=i.translate="none"),b=gf(e,n.svg),n.svg&&(n.uncache?(O=e.getBBox(),l=n.xOrigin-O.x+"px "+(n.yOrigin-O.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),ff(e,X||l,!!X||n.originIsAbsolute,n.smooth!==!1,b)),E=n.xOrigin||0,A=n.yOrigin||0,b!==xa&&(I=b[0],D=b[1],P=b[2],B=b[3],h=G=b[4],u=Z=b[5],b.length===6?(d=Math.sqrt(I*I+D*D),_=Math.sqrt(B*B+P*P),g=I||D?go(D,I)*hr:0,S=P||B?go(P,B)*hr+g:0,S&&(_*=Math.abs(Math.cos(S*xo))),n.svg&&(h-=E-(E*I+A*P),u-=A-(E*D+A*B))):(ee=b[6],qe=b[7],R=b[8],oe=b[9],Re=b[10],q=b[11],h=b[12],u=b[13],f=b[14],L=go(ee,Re),p=L*hr,L&&(v=Math.cos(-L),x=Math.sin(-L),X=G*v+R*x,O=Z*v+oe*x,j=ee*v+Re*x,R=G*-x+R*v,oe=Z*-x+oe*v,Re=ee*-x+Re*v,q=qe*-x+q*v,G=X,Z=O,ee=j),L=go(-P,Re),m=L*hr,L&&(v=Math.cos(-L),x=Math.sin(-L),X=I*v-R*x,O=D*v-oe*x,j=P*v-Re*x,q=B*x+q*v,I=X,D=O,P=j),L=go(D,I),g=L*hr,L&&(v=Math.cos(L),x=Math.sin(L),X=I*v+D*x,O=G*v+Z*x,D=D*v-I*x,Z=Z*v-G*x,I=X,G=O),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Nt(Math.sqrt(I*I+D*D+P*P)),_=Nt(Math.sqrt(Z*Z+ee*ee)),L=go(G,Z),S=Math.abs(L)>2e-4?L*hr:0,y=q?1/(q<0?-q:q):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Bg(Oi(e,Ct)),X&&e.setAttribute("transform",X))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Nt(d),n.scaleY=Nt(_),n.rotation=Nt(g)+a,n.rotationX=Nt(p)+a,n.rotationY=Nt(m)+a,n.skewX=S+a,n.skewY=M+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Bn]=bl(l)),n.xOffset=n.yOffset=0,n.force3D=Fn.force3D,n.renderTransform=n.svg?Jw:Ng?kg:$w,n.uncache=0,n},bl=function(e){return(e=e.split(" "))[0]+" "+e[1]},cf=function(e,t,n){var i=tn(t);return Nt(parseFloat(t)+parseFloat(Os(e,"x",n+"px",i)))+i},$w=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,kg(e,t)},cr="0deg",_a="0px",lr=") ",kg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,M=n.zOrigin,y="",E=m==="auto"&&e&&e!==1||m===!0;if(M&&(u!==cr||h!==cr)){var A=parseFloat(h)*xo,b=Math.sin(A),L=Math.cos(A),v;A=parseFloat(u)*xo,v=Math.cos(A),o=cf(S,o,b*v*-M),a=cf(S,a,-Math.sin(A)*-M),c=cf(S,c,L*v*-M+M)}p!==_a&&(y+="perspective("+p+lr),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(E||o!==_a||a!==_a||c!==_a)&&(y+=c!==_a||E?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+lr),l!==cr&&(y+="rotate("+l+lr),h!==cr&&(y+="rotateY("+h+lr),u!==cr&&(y+="rotateX("+u+lr),(f!==cr||d!==cr)&&(y+="skew("+f+", "+d+lr),(_!==1||g!==1)&&(y+="scale("+_+", "+g+lr),S.style[Ct]=y||"translate(0, 0)"},Jw=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,M=parseFloat(o),y=parseFloat(a),E,A,b,L,v;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=xo,l*=xo,E=Math.cos(c)*u,A=Math.sin(c)*u,b=Math.sin(c-l)*-f,L=Math.cos(c-l)*f,l&&(h*=xo,v=Math.tan(l-h),v=Math.sqrt(1+v*v),b*=v,L*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),E*=v,A*=v)),E=Nt(E),A=Nt(A),b=Nt(b),L=Nt(L)):(E=u,L=f,A=b=0),(M&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(M=Os(d,"x",o,"px"),y=Os(d,"y",a,"px")),(_||g||p||m)&&(M=Nt(M+_-(_*E+g*b)+p),y=Nt(y+g-(_*A+g*L)+m)),(i||s)&&(v=d.getBBox(),M=Nt(M+i/100*v.width),y=Nt(y+s/100*v.height)),v="matrix("+E+","+A+","+b+","+L+","+M+","+y+")",d.setAttribute("transform",v),S&&(d.style[Ct]=v)},jw=function(e,t,n,i,s){var o=360,a=Yt(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?hr:1),l=c-i,h=i+l+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),u==="cw"&&l<0?l=(l+o*bg)%o-~~(l/o)*o:u==="ccw"&&l>0&&(l=(l-o*bg)%o-~~(l/o)*o)),e._pt=f=new Mn(e._pt,t,n,i,l,Uw),f.e=h,f.u="deg",e._props.push(n),f},Cg=function(e,t){for(var n in t)e[n]=t[n];return e},Qw=function(e,t,n){var i=Cg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,h,u,f,d,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ct]=t,a=ya(n,1),fr(n,Ct),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Ct],o[Ct]=t,a=ya(n,1),o[Ct]=l);for(c in is)l=i[c],h=a[c],l!==h&&s.indexOf(c)<0&&(d=tn(l),_=tn(h),u=d!==_?Os(n,c,l,_):parseFloat(l),f=parseFloat(h),e._pt=new Mn(e._pt,a,c,u,f-u,lf),e._pt.u=_||0,e._props.push(c));Cg(a,i)};vn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Sl[e>1?"border"+r:r]=function(a,c,l,h,u){var f,d;if(arguments.length<4)return f=o.map(function(_){return ns(a,_,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(c,d,u)}});var _f={name:"css",register:uf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,c=n.vars.startAt,l,h,u,f,d,_,g,p,m,S,M,y,E,A,b,L;df||uf(),this.styles=this.styles||Dg(e),L=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(Nn[g]&&ef(g,t,n,i,e,s)))){if(d=typeof h,_=Sl[g],d==="function"&&(h=h.call(n,i,e,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=mo(h)),_)_(this,e,g,h,n)&&(b=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",es.lastIndex=0,es.test(l)||(p=tn(l),m=tn(h)),m?p!==m&&(l=Os(e,g,l,m)+m):p&&(h+=p),this.add(a,"setProperty",l,h,i,s,0,0,g),o.push(g),L.push(g,0,a[g]);else if(d!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,e,s):c[g],Yt(l)&&~l.indexOf("random(")&&(l=mo(l)),tn(l+"")||l==="auto"||(l+=Fn.units[g]||tn(ns(e,g))||""),(l+"").charAt(1)==="="&&(l=ns(e,g))):l=ns(e,g),f=parseFloat(l),S=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),g in Ui&&(g==="autoAlpha"&&(f===1&&ns(e,"visibility")==="hidden"&&u&&(f=0),L.push("visibility",0,a.visibility),Us(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Ui[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in is,M){if(this.styles.save(g),y||(E=e._gsap,E.renderTransform&&!t.parseTransform||ya(e,t.parseTransform),A=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new Mn(this._pt,a,Ct,0,1,E.renderTransform,E,0,-1),y.dep=1),g==="scale")this._pt=new Mn(this._pt,E,"scaleY",E.scaleY,(S?or(E.scaleY,S+u):u)-E.scaleY||0,lf),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(Bn,0,a[Bn]),h=Zw(h),E.svg?ff(e,h,0,A,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==E.zOrigin&&Us(this,E,"zOrigin",E.zOrigin,m),Us(this,a,g,bl(l),bl(h)));continue}else if(g==="svgOrigin"){ff(e,h,1,A,0,this);continue}else if(g in Fg){jw(this,E,g,f,S?or(f,S+h):h);continue}else if(g==="smoothOrigin"){Us(this,E,"smooth",E.smooth,h);continue}else if(g==="force3D"){E[g]=h;continue}else if(g==="transform"){Qw(this,h,e);continue}}else g in a||(g=yo(g)||g);if(M||(u||u===0)&&(f||f===0)&&!Nw.test(h)&&g in a)p=(l+"").substr((f+"").length),u||(u=0),m=tn(h)||(g in Fn.units?Fn.units[g]:p),p!==m&&(f=Os(e,g,l,m)),this._pt=new Mn(this._pt,M?E:a,g,f,(S?or(f,S+u):u)-f,!M&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?Fw:lf),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=Ow);else if(g in a)qw.call(this,e,g,l,S?S+h:h);else if(g in e)this.add(e,g,l||e[g],S?S+h:h,i,s);else if(g!=="parseTransform"){_l(g,h);continue}M||(g in a?L.push(g,0,a[g]):L.push(g,1,l||e[g])),o.push(g)}}b&&of(this)},render:function(e,t){if(t.tween._time||!pf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ns,aliases:Ui,getSetter:function(e,t,n){var i=Ui[t];return i&&i.indexOf(",")<0&&(t=i),t in is&&t!==Bn&&(e._gsap.x||ns(e,"x"))?n&&Sg===n?t==="scale"?Hw:zw:(Sg=n||{})&&(t==="scale"?Vw:Gw):e.style&&!gl(e.style[t])?Bw:~t.indexOf("-")?kw:Ml(e,t)},core:{_removeProperty:fr,_getMatrix:gf}};dn.utils.checkPrefix=yo;dn.core.getStyleSaver=Dg;(function(r,e,t,n){var i=vn(r+","+e+","+t,function(s){is[s]=1});vn(e,function(s){Fn.units[s]="deg",Fg[s]=1}),Ui[i[13]]=r+","+e,vn(n,function(s){var o=s.split(":");Ui[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Fn.units[r]="px"});dn.registerPlugin(_f);var ri=dn.registerPlugin(_f)||dn,VT=ri.core.Tween;function zg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function eT(r,e,t){return e&&zg(r.prototype,e),t&&zg(r,t),r}var nn,Al,tT,Yn,Fs,Bs,Mo,Vg,dr,Ma,Gg,ss,_i,Wg,Xg=function(){return nn||typeof window<"u"&&(nn=window.gsap)&&nn.registerPlugin&&nn},Yg=1,vo=[],et=[],xi=[],Sa=Date.now,xf=function(e,t){return t},nT=function(){var e=Ma.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,et),i.push.apply(i,xi),et=n,xi=i,xf=function(o,a){return t[o](a)}},os=function(e,t){return~xi.indexOf(e)&&xi[xi.indexOf(e)+1][t]},ba=function(e){return!!~Gg.indexOf(e)},bn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},wl="scrollLeft",Tl="scrollTop",yf=function(){return ss&&ss.isPressed||et.cache++},El=function(e,t){var n=function i(s){if(s||s===0){Yg&&(Yn.history.scrollRestoration="manual");var o=ss&&ss.isPressed;s=i.v=Math.round(s)||(ss&&ss.iOS?1:0),e(s),i.cacheID=et.cache,o&&xf("ss",s)}else(t||et.cache!==i.cacheID||xf("ref"))&&(i.cacheID=et.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},pn={s:wl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:El(function(r){return arguments.length?Yn.scrollTo(r,zt.sc()):Yn.pageXOffset||Fs[wl]||Bs[wl]||Mo[wl]||0})},zt={s:Tl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:pn,sc:El(function(r){return arguments.length?Yn.scrollTo(pn.sc(),r):Yn.pageYOffset||Fs[Tl]||Bs[Tl]||Mo[Tl]||0})},wn=function(e,t){return(t&&t._ctx&&t._ctx.selector||nn.utils.toArray)(e)[0]||(typeof e=="string"&&nn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},rs=function(e,t){var n=t.s,i=t.sc;ba(e)&&(e=Fs.scrollingElement||Bs);var s=et.indexOf(e),o=i===zt.sc?1:2;!~s&&(s=et.push(e)-1),et[s+o]||bn(e,"scroll",yf);var a=et[s+o],c=a||(et[s+o]=El(os(e,n),!0)||(ba(e)?i:El(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,a||(c.smooth=nn.getProperty(e,"scrollBehavior")==="smooth"),c},Rl=function(e,t,n){var i=e,s=e,o=Sa(),a=o,c=t||50,l=Math.max(500,c*3),h=function(_,g){var p=Sa();g||p-o>c?(s=i,i=_,a=o,o=p):n?i+=_:i=s+(_-s)/(p-a)*(o-a)},u=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,p=s,m=Sa();return(_||_===0)&&_!==i&&h(_),o===a||m-a>l?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:h,reset:u,getVelocity:f}},va=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Hg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},qg=function(){Ma=nn.core.globals().ScrollTrigger,Ma&&Ma.core&&nT()},Zg=function(e){return nn=e||Xg(),!Al&&nn&&typeof document<"u"&&document.body&&(Yn=window,Fs=document,Bs=Fs.documentElement,Mo=Fs.body,Gg=[Yn,Fs,Bs,Mo],tT=nn.utils.clamp,Wg=nn.core.context||function(){},dr="onpointerenter"in Mo?"pointer":"mouse",Vg=Ut.isTouch=Yn.matchMedia&&Yn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,_i=Ut.eventTypes=("ontouchstart"in Bs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Bs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Yg=0},500),qg(),Al=1),Al};pn.op=zt;et.cache=0;var Ut=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Al||Zg(nn)||console.warn("Please gsap.registerPlugin(Observer)"),Ma||qg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,l=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,M=n.onPress,y=n.onRelease,E=n.onRight,A=n.onLeft,b=n.onUp,L=n.onDown,v=n.onChangeX,x=n.onChangeY,I=n.onChange,D=n.onToggleX,P=n.onToggleY,B=n.onHover,G=n.onHoverEnd,Z=n.onMove,X=n.ignoreCheck,O=n.isNormalizer,j=n.onGestureStart,R=n.onGestureEnd,oe=n.onWheel,Re=n.onEnable,qe=n.onDisable,q=n.onClick,ee=n.scrollSpeed,fe=n.capture,ne=n.allowClicks,Le=n.lockAxis,Pe=n.onLockAxis;this.target=a=wn(a)||Bs,this.vars=n,d&&(d=nn.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,ee=ee||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(Yn.getComputedStyle(Mo).lineHeight)||22);var k,Xe,Se,be,_e,Ne,Ie,z=this,it=0,C=0,w=n.passive||!h,Y=rs(a,pn),J=rs(a,zt),Q=Y(),te=J(),me=~o.indexOf("touch")&&!~o.indexOf("pointer")&&_i[0]==="pointerdown",ce=ba(a),ie=a.ownerDocument||Fs,De=[0,0,0],se=[0,0,0],Me=0,$e=function(){return Me=Sa()},ge=function(ye,at){return(z.event=ye)&&d&&~d.indexOf(ye.target)||at&&me&&ye.pointerType!=="touch"||X&&X(ye,at)},xe=function(){z._vx.reset(),z._vy.reset(),Xe.pause(),u&&u(z)},Ue=function(){var ye=z.deltaX=Hg(De),at=z.deltaY=Hg(se),he=Math.abs(ye)>=i,He=Math.abs(at)>=i;I&&(he||He)&&I(z,ye,at,De,se),he&&(E&&z.deltaX>0&&E(z),A&&z.deltaX<0&&A(z),v&&v(z),D&&z.deltaX<0!=it<0&&D(z),it=z.deltaX,De[0]=De[1]=De[2]=0),He&&(L&&z.deltaY>0&&L(z),b&&z.deltaY<0&&b(z),x&&x(z),P&&z.deltaY<0!=C<0&&P(z),C=z.deltaY,se[0]=se[1]=se[2]=0),(be||Se)&&(Z&&Z(z),Se&&(S(z),Se=!1),be=!1),Ne&&!(Ne=!1)&&Pe&&Pe(z),_e&&(oe(z),_e=!1),k=0},We=function(ye,at,he){De[he]+=ye,se[he]+=at,z._vx.update(ye),z._vy.update(at),l?k||(k=requestAnimationFrame(Ue)):Ue()},pt=function(ye,at){Le&&!Ie&&(z.axis=Ie=Math.abs(ye)>Math.abs(at)?"x":"y",Ne=!0),Ie!=="y"&&(De[2]+=ye,z._vx.update(ye,!0)),Ie!=="x"&&(se[2]+=at,z._vy.update(at,!0)),l?k||(k=requestAnimationFrame(Ue)):Ue()},Oe=function(ye){if(!ge(ye,1)){ye=va(ye,h);var at=ye.clientX,he=ye.clientY,He=at-z.x,Ae=he-z.y,ze=z.isDragging;z.x=at,z.y=he,(ze||Math.abs(z.startX-at)>=s||Math.abs(z.startY-he)>=s)&&(S&&(Se=!0),ze||(z.isDragging=!0),pt(He,Ae),ze||p&&p(z))}},U=z.onPress=function(Ce){ge(Ce,1)||Ce&&Ce.button||(z.axis=Ie=null,Xe.pause(),z.isPressed=!0,Ce=va(Ce),it=C=0,z.startX=z.x=Ce.clientX,z.startY=z.y=Ce.clientY,z._vx.reset(),z._vy.reset(),bn(O?a:ie,_i[1],Oe,w,!0),z.deltaX=z.deltaY=0,M&&M(z))},K=z.onRelease=function(Ce){if(!ge(Ce,1)){Sn(O?a:ie,_i[1],Oe,!0);var ye=!isNaN(z.y-z.startY),at=z.isDragging,he=at&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),He=va(Ce);!he&&ye&&(z._vx.reset(),z._vy.reset(),h&&ne&&nn.delayedCall(.08,function(){if(Sa()-Me>300&&!Ce.defaultPrevented){if(Ce.target.click)Ce.target.click();else if(ie.createEvent){var Ae=ie.createEvent("MouseEvents");Ae.initMouseEvent("click",!0,!0,Yn,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),Ce.target.dispatchEvent(Ae)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,u&&at&&!O&&Xe.restart(!0),m&&at&&m(z),y&&y(z,he)}},$=function(ye){return ye.touches&&ye.touches.length>1&&(z.isGesturing=!0)&&j(ye,z.isDragging)},ae=function(){return(z.isGesturing=!1)||R(z)},le=function(ye){if(!ge(ye)){var at=Y(),he=J();We((at-Q)*ee,(he-te)*ee,1),Q=at,te=he,u&&Xe.restart(!0)}},Ve=function(ye){if(!ge(ye)){ye=va(ye,h),oe&&(_e=!0);var at=(ye.deltaMode===1?c:ye.deltaMode===2?Yn.innerHeight:1)*_;We(ye.deltaX*at,ye.deltaY*at,0),u&&!O&&Xe.restart(!0)}},ct=function(ye){if(!ge(ye)){var at=ye.clientX,he=ye.clientY,He=at-z.x,Ae=he-z.y;z.x=at,z.y=he,be=!0,u&&Xe.restart(!0),(He||Ae)&&pt(He,Ae)}},ft=function(ye){z.event=ye,B(z)},_t=function(ye){z.event=ye,G(z)},st=function(ye){return ge(ye)||va(ye,h)&&q(z)};Xe=z._dc=nn.delayedCall(f||.25,xe).pause(),z.deltaX=z.deltaY=0,z._vx=Rl(0,50,!0),z._vy=Rl(0,50,!0),z.scrollX=Y,z.scrollY=J,z.isDragging=z.isGesturing=z.isPressed=!1,Wg(this),z.enable=function(Ce){return z.isEnabled||(bn(ce?ie:a,"scroll",yf),o.indexOf("scroll")>=0&&bn(ce?ie:a,"scroll",le,w,fe),o.indexOf("wheel")>=0&&bn(a,"wheel",Ve,w,fe),(o.indexOf("touch")>=0&&Vg||o.indexOf("pointer")>=0)&&(bn(a,_i[0],U,w,fe),bn(ie,_i[2],K),bn(ie,_i[3],K),ne&&bn(a,"click",$e,!0,!0),q&&bn(a,"click",st),j&&bn(ie,"gesturestart",$),R&&bn(ie,"gestureend",ae),B&&bn(a,dr+"enter",ft),G&&bn(a,dr+"leave",_t),Z&&bn(a,dr+"move",ct)),z.isEnabled=!0,Ce&&Ce.type&&U(Ce),Re&&Re(z)),z},z.disable=function(){z.isEnabled&&(vo.filter(function(Ce){return Ce!==z&&ba(Ce.target)}).length||Sn(ce?ie:a,"scroll",yf),z.isPressed&&(z._vx.reset(),z._vy.reset(),Sn(O?a:ie,_i[1],Oe,!0)),Sn(ce?ie:a,"scroll",le,fe),Sn(a,"wheel",Ve,fe),Sn(a,_i[0],U,fe),Sn(ie,_i[2],K),Sn(ie,_i[3],K),Sn(a,"click",$e,!0),Sn(a,"click",st),Sn(ie,"gesturestart",$),Sn(ie,"gestureend",ae),Sn(a,dr+"enter",ft),Sn(a,dr+"leave",_t),Sn(a,dr+"move",ct),z.isEnabled=z.isPressed=z.isDragging=!1,qe&&qe(z))},z.kill=z.revert=function(){z.disable();var Ce=vo.indexOf(z);Ce>=0&&vo.splice(Ce,1),ss===z&&(ss=0)},vo.push(z),O&&ba(a)&&(ss=z),z.enable(g)},eT(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ut.version="3.12.5";Ut.create=function(r){return new Ut(r)};Ut.register=Zg;Ut.getAll=function(){return vo.slice()};Ut.getById=function(r){return vo.filter(function(e){return e.vars.id===r})[0]};Xg()&&nn.registerPlugin(Ut);var ve,wo,ot,Pt,yi,St,f_,Wl,Oa,Pa,Ta,Cl,mn,Zl,Ef,An,Kg,$g,To,d_,vf,p_,Tn,Rf,m_,g_,ks,Cf,Nf,Ao,Uf,Xl,Pf,Mf,Pl=1,gn=Date.now,Sf=gn(),ci=0,Aa=0,Jg=function(e,t,n){var i=Zn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},jg=function(e,t){return t&&(!Zn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},iT=function r(){return Aa&&requestAnimationFrame(r)},Qg=function(){return Zl=1},e_=function(){return Zl=0},Fi=function(e){return e},Ea=function(e){return Math.round(e*1e5)/1e5||0},__=function(){return typeof window<"u"},x_=function(){return ve||__()&&(ve=window.gsap)&&ve.registerPlugin&&ve},yr=function(e){return!!~f_.indexOf(e)},y_=function(e){return(e==="Height"?Uf:ot["inner"+e])||yi["client"+e]||St["client"+e]},v_=function(e){return os(e,"getBoundingClientRect")||(yr(e)?function(){return Gl.width=ot.innerWidth,Gl.height=Uf,Gl}:function(){return as(e)})},sT=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=os(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?y_(s):e["client"+s])||0}},rT=function(e,t){return!t||~xi.indexOf(e)?v_(e):function(){return Gl}},Bi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=os(e,n))?o()-v_(e)()[s]:yr(e)?(yi[n]||St[n])-y_(i):e[n]-e["offset"+i])},Il=function(e,t){for(var n=0;n<To.length;n+=3)(!t||~t.indexOf(To[n+1]))&&e(To[n],To[n+1],To[n+2])},Zn=function(e){return typeof e=="string"},Rn=function(e){return typeof e=="function"},Ra=function(e){return typeof e=="number"},pr=function(e){return typeof e=="object"},wa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},bf=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},So=Math.abs,M_="left",S_="top",Of="right",Ff="bottom",gr="width",_r="height",Ia="Right",La="Left",Da="Top",Na="Bottom",Ht="padding",oi="margin",Ro="Width",Bf="Height",qt="px",ai=function(e){return ot.getComputedStyle(e)},oT=function(e){var t=ai(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},t_=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},as=function(e,t){var n=t&&ai(e)[Ef]!=="matrix(1, 0, 0, 1, 0, 0)"&&ve.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Yl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},b_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},aT=function(e){return function(t){return ve.utils.snap(b_(e),t)}},kf=function(e){var t=ve.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},cT=function(e){return function(t,n){return kf(b_(e))(t,n.direction)}},Ll=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},jt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Jt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Dl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},n_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Nl={toggleActions:"play",anticipatePin:0},ql={top:0,left:0,center:.5,bottom:1,right:1},kl=function(e,t){if(Zn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ql?ql[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ul=function(e,t,n,i,s,o,a,c){var l=s.startColor,h=s.endColor,u=s.fontSize,f=s.indent,d=s.fontWeight,_=Pt.createElement("div"),g=yr(n)||os(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?St:n,S=e.indexOf("start")!==-1,M=S?l:h,y="border-color:"+M+";font-size:"+u+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||c)&&g?"fixed;":"absolute;"),(p||c||!g)&&(y+=(i===zt?Of:Ff)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],zl(_,0,i,S),_},zl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ro]=1,s["border"+a+Ro]=0,s[n.p]=t+"px",ve.set(e,s)},tt=[],If={},Fa,i_=function(){return gn()-ci>34&&(Fa||(Fa=requestAnimationFrame(cs)))},bo=function(){(!Tn||!Tn.isPressed||Tn.startX>St.clientWidth)&&(et.cache++,Tn?Fa||(Fa=requestAnimationFrame(cs)):cs(),ci||Mr("scrollStart"),ci=gn())},wf=function(){g_=ot.innerWidth,m_=ot.innerHeight},Ca=function(){et.cache++,!mn&&!p_&&!Pt.fullscreenElement&&!Pt.webkitFullscreenElement&&(!Rf||g_!==ot.innerWidth||Math.abs(ot.innerHeight-m_)>ot.innerHeight*.25)&&Wl.restart(!0)},vr={},lT=[],w_=function r(){return Jt(Je,"scrollEnd",r)||mr(!0)},Mr=function(e){return vr[e]&&vr[e].map(function(t){return t()})||lT},qn=[],T_=function(e){for(var t=0;t<qn.length;t+=5)(!e||qn[t+4]&&qn[t+4].query===e)&&(qn[t].style.cssText=qn[t+1],qn[t].getBBox&&qn[t].setAttribute("transform",qn[t+2]||""),qn[t+3].uncache=1)},zf=function(e,t){var n;for(An=0;An<tt.length;An++)n=tt[An],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Xl=!0,t&&T_(t),t||Mr("revert")},A_=function(e,t){et.cache++,(t||!En)&&et.forEach(function(n){return Rn(n)&&n.cacheID++&&(n.rec=0)}),Zn(e)&&(ot.history.scrollRestoration=Nf=e)},En,xr=0,s_,hT=function(){if(s_!==xr){var e=s_=xr;requestAnimationFrame(function(){return e===xr&&mr(!0)})}},E_=function(){St.appendChild(Ao),Uf=!Tn&&Ao.offsetHeight||ot.innerHeight,St.removeChild(Ao)},r_=function(e){return Oa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},mr=function(e,t){if(ci&&!e&&!Xl){jt(Je,"scrollEnd",w_);return}E_(),En=Je.isRefreshing=!0,et.forEach(function(i){return Rn(i)&&++i.cacheID&&(i.rec=i())});var n=Mr("refreshInit");d_&&Je.sort(),t||zf(),et.forEach(function(i){Rn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),tt.slice(0).forEach(function(i){return i.refresh()}),Xl=!1,tt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Pf=1,r_(!0),tt.forEach(function(i){var s=Bi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),r_(!1),Pf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),et.forEach(function(i){Rn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),A_(Nf,1),Wl.pause(),xr++,En=2,cs(2),tt.forEach(function(i){return Rn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),En=Je.isRefreshing=!1,Mr("refresh")},Lf=0,Hl=1,Ua,cs=function(e){if(e===2||!En&&!Xl){Je.isUpdating=!0,Ua&&Ua.update(0);var t=tt.length,n=gn(),i=n-Sf>=50,s=t&&tt[0].scroll();if(Hl=Lf>s?-1:1,En||(Lf=s),i&&(ci&&!Zl&&n-ci>200&&(ci=0,Mr("scrollEnd")),Ta=Sf,Sf=n),Hl<0){for(An=t;An-- >0;)tt[An]&&tt[An].update(0,i);Hl=1}else for(An=0;An<t;An++)tt[An]&&tt[An].update(0,i);Je.isUpdating=!1}Fa=0},Df=[M_,S_,Ff,Of,oi+Na,oi+Ia,oi+Da,oi+La,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Vl=Df.concat([gr,_r,"boxSizing","max"+Ro,"max"+Bf,"position",oi,Ht,Ht+Da,Ht+Ia,Ht+Na,Ht+La]),uT=function(e,t,n){Eo(n);var i=e._gsap;if(i.spacerIsNative)Eo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Tf=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Df.length,o=t.style,a=e.style,c;s--;)c=Df[s],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Ff]=a[Of]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[gr]=Yl(e,pn)+qt,o[_r]=Yl(e,zt)+qt,o[Ht]=a[oi]=a[S_]=a[M_]="0",Eo(i),a[gr]=a["max"+Ro]=n[gr],a[_r]=a["max"+Bf]=n[_r],a[Ht]=n[Ht],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},fT=/([A-Z])/g,Eo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||ve.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(fT,"-$1").toLowerCase())}},Ol=function(e){for(var t=Vl.length,n=e.style,i=[],s=0;s<t;s++)i.push(Vl[s],n[Vl[s]]);return i.t=e,i},dT=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Gl={left:0,top:0},o_=function(e,t,n,i,s,o,a,c,l,h,u,f,d,_){Rn(e)&&(e=e(c)),Zn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?kl("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,S;if(d&&d.seek(0),isNaN(e)||(e=+e),Ra(e))d&&(e=ve.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&zl(a,n,i,!0);else{Rn(t)&&(t=t(c));var M=(e||"0").split(" "),y,E,A,b;S=wn(t,c)||St,y=as(S)||{},(!y||!y.left&&!y.top)&&ai(S).display==="none"&&(b=S.style.display,S.style.display="block",y=as(S),b?S.style.display=b:S.style.removeProperty("display")),E=kl(M[0],y[i.d]),A=kl(M[1]||"0",n),e=y[i.p]-l[i.p]-h+E+s-A,a&&zl(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(_&&(c[_]=e||-.001,e<0&&(e=0)),o){var L=e+n,v=o._isStart;p="scroll"+i.d2,zl(o,L,i,v&&L>20||!v&&(u?Math.max(St[p],yi[p]):o.parentNode[p])<=L+1),u&&(l=as(a),u&&(o.style[i.op.p]=l[i.op.p]-i.op.m-o._offset+qt))}return d&&S&&(p=as(S),d.seek(f),m=as(S),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},pT=/(webkit|moz|length|cssText|inset)/i,a_=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===St){e._stOrig=s.cssText,a=ai(e);for(o in a)!+o&&!pT.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;ve.core.getCache(e).uncache=1,t.appendChild(e)}},R_=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},Fl=function(e,t,n){var i={};i[t.p]="+="+n,ve.set(e,i)},c_=function(e,t){var n=rs(e,t),i="_scroll"+t.p2,s=function o(a,c,l,h,u){var f=o.tween,d=c.onComplete,_={};l=l||n();var g=R_(n,l,function(){f.kill(),o.tween=0});return u=h&&u||0,h=h||a-l,f&&f.kill(),c[i]=a,c.inherit=!1,c.modifiers=_,_[i]=function(){return g(l+h*f.ratio+u*f.ratio*f.ratio)},c.onUpdate=function(){et.cache++,o.tween&&cs()},c.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=ve.to(e,c),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},jt(e,"wheel",n.wheelHandler),Je.isTouch&&jt(e,"touchmove",n.wheelHandler),s},Je=function(){function r(t,n){wo||r.register(ve)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Cf(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Aa){this.update=this.refresh=this.kill=Fi;return}n=t_(Zn(n)||Ra(n)||n.nodeType?{trigger:n}:n,Nl);var s=n,o=s.onUpdate,a=s.toggleClass,c=s.id,l=s.onToggle,h=s.onRefresh,u=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,M=s.once,y=s.snap,E=s.pinReparent,A=s.pinSpacer,b=s.containerAnimation,L=s.fastScrollEnd,v=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?pn:zt,I=!u&&u!==0,D=wn(n.scroller||ot),P=ve.core.getCache(D),B=yr(D),G=("pinType"in n?n.pinType:os(D,"pinType")||B&&"fixed")==="fixed",Z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=I&&n.toggleActions.split(" "),O="markers"in n?n.markers:Nl.markers,j=B?0:parseFloat(ai(D)["border"+x.p2+Ro])||0,R=this,oe=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Re=sT(D,B,x),qe=rT(D,B),q=0,ee=0,fe=0,ne=rs(D,x),Le,Pe,k,Xe,Se,be,_e,Ne,Ie,z,it,C,w,Y,J,Q,te,me,ce,ie,De,se,Me,$e,ge,xe,Ue,We,pt,Oe,U,K,$,ae,le,Ve,ct,ft,_t;if(R._startClamp=R._endClamp=!1,R._dir=x,p*=45,R.scroller=D,R.scroll=b?b.time.bind(b):ne,Xe=ne(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(d_=1,n.refreshPriority===-9999&&(Ua=R)),P.tweenScroll=P.tweenScroll||{top:c_(D,zt),left:c_(D,pn)},R.tweenTo=Le=P.tweenScroll[x.p],R.scrubDuration=function(he){$=Ra(he)&&he,$?K?K.duration(he):K=ve.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:$,paused:!0,onComplete:function(){return m&&m(R)}}):(K&&K.progress(1).kill(),K=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(u),Oe=0,c||(c=i.vars.id)),y&&((!pr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in St.style&&ve.set(B?[St,yi]:D,{scrollBehavior:"auto"}),et.forEach(function(he){return Rn(he)&&he.target===(B?Pt.scrollingElement||yi:D)&&(he.smooth=!1)}),k=Rn(y.snapTo)?y.snapTo:y.snapTo==="labels"?aT(i):y.snapTo==="labelsDirectional"?cT(i):y.directional!==!1?function(he,He){return kf(y.snapTo)(he,gn()-ee<500?0:He.direction)}:ve.utils.snap(y.snapTo),ae=y.duration||{min:.1,max:2},ae=pr(ae)?Pa(ae.min,ae.max):Pa(ae,ae),le=ve.delayedCall(y.delay||$/2||.1,function(){var he=ne(),He=gn()-ee<500,Ae=Le.tween;if((He||Math.abs(R.getVelocity())<10)&&!Ae&&!Zl&&q!==he){var ze=(he-be)/Y,Et=i&&!I?i.totalProgress():ze,je=He?0:(Et-U)/(gn()-Ta)*1e3||0,bt=ve.utils.clamp(-ze,1-ze,So(je/2)*je/.185),Zt=ze+(y.inertia===!1?0:bt),wt,xt,T=y,F=T.onStart,H=T.onInterrupt,V=T.onComplete;if(wt=k(Zt,R),Ra(wt)||(wt=Zt),xt=Math.round(be+wt*Y),he<=_e&&he>=be&&xt!==he){if(Ae&&!Ae._initted&&Ae.data<=So(xt-he))return;y.inertia===!1&&(bt=wt-ze),Le(xt,{duration:ae(So(Math.max(So(Zt-Et),So(wt-Et))*.185/je/.05||0)),ease:y.ease||"power3",data:So(xt-he),onInterrupt:function(){return le.restart(!0)&&H&&H(R)},onComplete:function(){R.update(),q=ne(),i&&(K?K.resetTo("totalProgress",wt,i._tTime/i._tDur):i.progress(wt)),Oe=U=i&&!I?i.totalProgress():R.progress,S&&S(R),V&&V(R)}},he,bt*Y,xt-he-bt*Y),F&&F(R,Le.tween)}}else R.isActive&&q!==he&&le.restart(!0)}).pause()),c&&(If[c]=R),f=R.trigger=wn(f||d!==!0&&d),_t=f&&f._gsap&&f._gsap.stRevert,_t&&(_t=_t(R)),d=d===!0?f:wn(d),Zn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===oi||(_=!_&&d.parentNode&&d.parentNode.style&&ai(d.parentNode).display==="flex"?!1:Ht),R.pin=d,Pe=ve.core.getCache(d),Pe.spacer?J=Pe.pinState:(A&&(A=wn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Pe.spacerIsNative=!!A,A&&(Pe.spacerState=Ol(A))),Pe.spacer=me=A||Pt.createElement("div"),me.classList.add("pin-spacer"),c&&me.classList.add("pin-spacer-"+c),Pe.pinState=J=Ol(d)),n.force3D!==!1&&ve.set(d,{force3D:!0}),R.spacer=me=Pe.spacer,pt=ai(d),$e=pt[_+x.os2],ie=ve.getProperty(d),De=ve.quickSetter(d,x.a,qt),Tf(d,me,pt),te=Ol(d)),O){C=pr(O)?t_(O,n_):n_,z=Ul("scroller-start",c,D,x,C,0),it=Ul("scroller-end",c,D,x,C,0,z),ce=z["offset"+x.op.d2];var st=wn(os(D,"content")||D);Ne=this.markerStart=Ul("start",c,st,x,C,ce,0,b),Ie=this.markerEnd=Ul("end",c,st,x,C,ce,0,b),b&&(ft=ve.quickSetter([Ne,Ie],x.a,qt)),!G&&!(xi.length&&os(D,"fixedMarkers")===!0)&&(oT(B?St:D),ve.set([z,it],{force3D:!0}),xe=ve.quickSetter(z,x.a,qt),We=ve.quickSetter(it,x.a,qt))}if(b){var Ce=b.vars.onUpdate,ye=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){R.update(0,0,1),Ce&&Ce.apply(b,ye||[])})}if(R.previous=function(){return tt[tt.indexOf(R)-1]},R.next=function(){return tt[tt.indexOf(R)+1]},R.revert=function(he,He){if(!He)return R.kill(!0);var Ae=he!==!1||!R.enabled,ze=mn;Ae!==R.isReverted&&(Ae&&(Ve=Math.max(ne(),R.scroll.rec||0),fe=R.progress,ct=i&&i.progress()),Ne&&[Ne,Ie,z,it].forEach(function(Et){return Et.style.display=Ae?"none":"block"}),Ae&&(mn=R,R.update(Ae)),d&&(!E||!R.isActive)&&(Ae?uT(d,me,J):Tf(d,me,ai(d),ge)),Ae||R.update(Ae),mn=ze,R.isReverted=Ae)},R.refresh=function(he,He,Ae,ze){if(!((mn||!R.enabled)&&!He)){if(d&&he&&ci){jt(r,"scrollEnd",w_);return}!En&&oe&&oe(R),mn=R,Le.tween&&!Ae&&(Le.tween.kill(),Le.tween=0),K&&K.pause(),g&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Et=Re(),je=qe(),bt=b?b.duration():Bi(D,x),Zt=Y<=.01,wt=0,xt=ze||0,T=pr(Ae)?Ae.end:n.end,F=n.endTrigger||f,H=pr(Ae)?Ae.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),V=R.pinnedContainer=n.pinnedContainer&&wn(n.pinnedContainer,R),W=f&&Math.max(0,tt.indexOf(R))||0,re=W,ue,pe,Ee,ke,Te,we,lt,Ft,sn,_n,Ye,Fe,vi;for(O&&pr(Ae)&&(Fe=ve.getProperty(z,x.p),vi=ve.getProperty(it,x.p));re--;)we=tt[re],we.end||we.refresh(0,1)||(mn=R),lt=we.pin,lt&&(lt===f||lt===d||lt===V)&&!we.isReverted&&(_n||(_n=[]),_n.unshift(we),we.revert(!0,!0)),we!==tt[re]&&(W--,re--);for(Rn(H)&&(H=H(R)),H=Jg(H,"start",R),be=o_(H,f,Et,x,ne(),Ne,z,R,je,j,G,bt,b,R._startClamp&&"_startClamp")||(d?-.001:0),Rn(T)&&(T=T(R)),Zn(T)&&!T.indexOf("+=")&&(~T.indexOf(" ")?T=(Zn(H)?H.split(" ")[0]:"")+T:(wt=kl(T.substr(2),Et),T=Zn(H)?H:(b?ve.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,be):be)+wt,F=f)),T=Jg(T,"end",R),_e=Math.max(be,o_(T||(F?"100% 0":bt),F,Et,x,ne()+wt,Ie,it,R,je,j,G,bt,b,R._endClamp&&"_endClamp"))||-.001,wt=0,re=W;re--;)we=tt[re],lt=we.pin,lt&&we.start-we._pinPush<=be&&!b&&we.end>0&&(ue=we.end-(R._startClamp?Math.max(0,we.start):we.start),(lt===f&&we.start-we._pinPush<be||lt===V)&&isNaN(H)&&(wt+=ue*(1-we.progress)),lt===d&&(xt+=ue));if(be+=wt,_e+=wt,R._startClamp&&(R._startClamp+=wt),R._endClamp&&!En&&(R._endClamp=_e||-.001,_e=Math.min(_e,Bi(D,x))),Y=_e-be||(be-=.01)&&.001,Zt&&(fe=ve.utils.clamp(0,1,ve.utils.normalize(be,_e,Ve))),R._pinPush=xt,Ne&&wt&&(ue={},ue[x.a]="+="+wt,V&&(ue[x.p]="-="+ne()),ve.set([Ne,Ie],ue)),d&&!(Pf&&R.end>=Bi(D,x)))ue=ai(d),ke=x===zt,Ee=ne(),se=parseFloat(ie(x.a))+xt,!bt&&_e>1&&(Ye=(B?Pt.scrollingElement||yi:D).style,Ye={style:Ye,value:Ye["overflow"+x.a.toUpperCase()]},B&&ai(St)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Ye.style["overflow"+x.a.toUpperCase()]="scroll")),Tf(d,me,ue),te=Ol(d),pe=as(d,!0),Ft=G&&rs(D,ke?pn:zt)(),_?(ge=[_+x.os2,Y+xt+qt],ge.t=me,re=_===Ht?Yl(d,x)+Y+xt:0,re&&(ge.push(x.d,re+qt),me.style.flexBasis!=="auto"&&(me.style.flexBasis=re+qt)),Eo(ge),V&&tt.forEach(function(ut){ut.pin===V&&ut.vars.pinSpacing!==!1&&(ut._subPinOffset=!0)}),G&&ne(Ve)):(re=Yl(d,x),re&&me.style.flexBasis!=="auto"&&(me.style.flexBasis=re+qt)),G&&(Te={top:pe.top+(ke?Ee-be:Ft)+qt,left:pe.left+(ke?Ft:Ee-be)+qt,boxSizing:"border-box",position:"fixed"},Te[gr]=Te["max"+Ro]=Math.ceil(pe.width)+qt,Te[_r]=Te["max"+Bf]=Math.ceil(pe.height)+qt,Te[oi]=Te[oi+Da]=Te[oi+Ia]=Te[oi+Na]=Te[oi+La]="0",Te[Ht]=ue[Ht],Te[Ht+Da]=ue[Ht+Da],Te[Ht+Ia]=ue[Ht+Ia],Te[Ht+Na]=ue[Ht+Na],Te[Ht+La]=ue[Ht+La],Q=dT(J,Te,E),En&&ne(0)),i?(sn=i._initted,vf(1),i.render(i.duration(),!0,!0),Me=ie(x.a)-se+Y+xt,Ue=Math.abs(Y-Me)>1,G&&Ue&&Q.splice(Q.length-2,2),i.render(0,!0,!0),sn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),vf(0)):Me=Y,Ye&&(Ye.value?Ye.style["overflow"+x.a.toUpperCase()]=Ye.value:Ye.style.removeProperty("overflow-"+x.a));else if(f&&ne()&&!b)for(pe=f.parentNode;pe&&pe!==St;)pe._pinOffset&&(be-=pe._pinOffset,_e-=pe._pinOffset),pe=pe.parentNode;_n&&_n.forEach(function(ut){return ut.revert(!1,!0)}),R.start=be,R.end=_e,Xe=Se=En?Ve:ne(),!b&&!En&&(Xe<Ve&&ne(Ve),R.scroll.rec=0),R.revert(!1,!0),ee=gn(),le&&(q=-1,le.restart(!0)),mn=0,i&&I&&(i._initted||ct)&&i.progress()!==ct&&i.progress(ct||0,!0).render(i.time(),!0,!0),(Zt||fe!==R.progress||b||g)&&(i&&!I&&i.totalProgress(b&&be<-.001&&!fe?ve.utils.normalize(be,_e,0):fe,!0),R.progress=Zt||(Xe-be)/Y===fe?0:fe),d&&_&&(me._pinOffset=Math.round(R.progress*Me)),K&&K.invalidate(),isNaN(Fe)||(Fe-=ve.getProperty(z,x.p),vi-=ve.getProperty(it,x.p),Fl(z,x,Fe),Fl(Ne,x,Fe-(ze||0)),Fl(it,x,vi),Fl(Ie,x,vi-(ze||0))),Zt&&!En&&R.update(),h&&!En&&!w&&(w=!0,h(R),w=!1)}},R.getVelocity=function(){return(ne()-Se)/(gn()-Ta)*1e3||0},R.endAnimation=function(){wa(R.callbackAnimation),i&&(K?K.progress(1):i.paused()?I||wa(i,R.direction<0,1):wa(i,i.reversed()))},R.labelToScroll=function(he){return i&&i.labels&&(be||R.refresh()||be)+i.labels[he]/i.duration()*Y||0},R.getTrailing=function(he){var He=tt.indexOf(R),Ae=R.direction>0?tt.slice(0,He).reverse():tt.slice(He+1);return(Zn(he)?Ae.filter(function(ze){return ze.vars.preventOverlaps===he}):Ae).filter(function(ze){return R.direction>0?ze.end<=be:ze.start>=_e})},R.update=function(he,He,Ae){if(!(b&&!Ae&&!he)){var ze=En===!0?Ve:R.scroll(),Et=he?0:(ze-be)/Y,je=Et<0?0:Et>1?1:Et||0,bt=R.progress,Zt,wt,xt,T,F,H,V,W;if(He&&(Se=Xe,Xe=b?ne():ze,y&&(U=Oe,Oe=i&&!I?i.totalProgress():je)),p&&d&&!mn&&!Pl&&ci&&(!je&&be<ze+(ze-Se)/(gn()-Ta)*p?je=1e-4:je===1&&_e>ze+(ze-Se)/(gn()-Ta)*p&&(je=.9999)),je!==bt&&R.enabled){if(Zt=R.isActive=!!je&&je<1,wt=!!bt&&bt<1,H=Zt!==wt,F=H||!!je!=!!bt,R.direction=je>bt?1:-1,R.progress=je,F&&!mn&&(xt=je&&!bt?0:je===1?1:bt===1?2:3,I&&(T=!H&&X[xt+1]!=="none"&&X[xt+1]||X[xt],W=i&&(T==="complete"||T==="reset"||T in i))),v&&(H||W)&&(W||u||!i)&&(Rn(v)?v(R):R.getTrailing(v).forEach(function(Ee){return Ee.endAnimation()})),I||(K&&!mn&&!Pl?(K._dp._time-K._start!==K._time&&K.render(K._dp._time-K._start),K.resetTo?K.resetTo("totalProgress",je,i._tTime/i._tDur):(K.vars.totalProgress=je,K.invalidate().restart())):i&&i.totalProgress(je,!!(mn&&(ee||he)))),d){if(he&&_&&(me.style[_+x.os2]=$e),!G)De(Ea(se+Me*je));else if(F){if(V=!he&&je>bt&&_e+1>ze&&ze+1>=Bi(D,x),E)if(!he&&(Zt||V)){var re=as(d,!0),ue=ze-be;a_(d,St,re.top+(x===zt?ue:0)+qt,re.left+(x===zt?0:ue)+qt)}else a_(d,me);Eo(Zt||V?Q:te),Ue&&je<1&&Zt||De(se+(je===1&&!V?Me:0))}}y&&!Le.tween&&!mn&&!Pl&&le.restart(!0),a&&(H||M&&je&&(je<1||!Mf))&&Oa(a.targets).forEach(function(Ee){return Ee.classList[Zt||M?"add":"remove"](a.className)}),o&&!I&&!he&&o(R),F&&!mn?(I&&(W&&(T==="complete"?i.pause().totalProgress(1):T==="reset"?i.restart(!0).pause():T==="restart"?i.restart(!0):i[T]()),o&&o(R)),(H||!Mf)&&(l&&H&&bf(R,l),Z[xt]&&bf(R,Z[xt]),M&&(je===1?R.kill(!1,1):Z[xt]=0),H||(xt=je===1?1:3,Z[xt]&&bf(R,Z[xt]))),L&&!Zt&&Math.abs(R.getVelocity())>(Ra(L)?L:2500)&&(wa(R.callbackAnimation),K?K.progress(1):wa(i,T==="reverse"?1:!je,1))):I&&o&&!mn&&o(R)}if(We){var pe=b?ze/b.duration()*(b._caScrollDist||0):ze;xe(pe+(z._isFlipped?1:0)),We(pe)}ft&&ft(-ze/b.duration()*(b._caScrollDist||0))}},R.enable=function(he,He){R.enabled||(R.enabled=!0,jt(D,"resize",Ca),B||jt(D,"scroll",bo),oe&&jt(r,"refreshInit",oe),he!==!1&&(R.progress=fe=0,Xe=Se=q=ne()),He!==!1&&R.refresh())},R.getTween=function(he){return he&&Le?Le.tween:K},R.setPositions=function(he,He,Ae,ze){if(b){var Et=b.scrollTrigger,je=b.duration(),bt=Et.end-Et.start;he=Et.start+bt*he/je,He=Et.start+bt*He/je}R.refresh(!1,!1,{start:jg(he,Ae&&!!R._startClamp),end:jg(He,Ae&&!!R._endClamp)},ze),R.update()},R.adjustPinSpacing=function(he){if(ge&&he){var He=ge.indexOf(x.d)+1;ge[He]=parseFloat(ge[He])+he+qt,ge[1]=parseFloat(ge[1])+he+qt,Eo(ge)}},R.disable=function(he,He){if(R.enabled&&(he!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,He||K&&K.pause(),Ve=0,Pe&&(Pe.uncache=1),oe&&Jt(r,"refreshInit",oe),le&&(le.pause(),Le.tween&&Le.tween.kill()&&(Le.tween=0)),!B)){for(var Ae=tt.length;Ae--;)if(tt[Ae].scroller===D&&tt[Ae]!==R)return;Jt(D,"resize",Ca),B||Jt(D,"scroll",bo)}},R.kill=function(he,He){R.disable(he,He),K&&!He&&K.kill(),c&&delete If[c];var Ae=tt.indexOf(R);Ae>=0&&tt.splice(Ae,1),Ae===An&&Hl>0&&An--,Ae=0,tt.forEach(function(ze){return ze.scroller===R.scroller&&(Ae=1)}),Ae||En||(R.scroll.rec=0),i&&(i.scrollTrigger=null,he&&i.revert({kill:!1}),He||i.kill()),Ne&&[Ne,Ie,z,it].forEach(function(ze){return ze.parentNode&&ze.parentNode.removeChild(ze)}),Ua===R&&(Ua=0),d&&(Pe&&(Pe.uncache=1),Ae=0,tt.forEach(function(ze){return ze.pin===d&&Ae++}),Ae||(Pe.spacer=0)),n.onKill&&n.onKill(R)},tt.push(R),R.enable(!1,!1),_t&&_t(R),i&&i.add&&!Y){var at=R.update;R.update=function(){R.update=at,be||_e||R.refresh()},ve.delayedCall(.01,R.update),Y=.01,be=_e=0}else R.refresh();d&&hT()},r.register=function(n){return wo||(ve=n||x_(),__()&&window.document&&r.enable(),wo=Aa),wo},r.defaults=function(n){if(n)for(var i in n)Nl[i]=n[i];return Nl},r.disable=function(n,i){Aa=0,tt.forEach(function(o){return o[i?"kill":"disable"](n)}),Jt(ot,"wheel",bo),Jt(Pt,"scroll",bo),clearInterval(Cl),Jt(Pt,"touchcancel",Fi),Jt(St,"touchstart",Fi),Ll(Jt,Pt,"pointerdown,touchstart,mousedown",Qg),Ll(Jt,Pt,"pointerup,touchend,mouseup",e_),Wl.kill(),Il(Jt);for(var s=0;s<et.length;s+=3)Dl(Jt,et[s],et[s+1]),Dl(Jt,et[s],et[s+2])},r.enable=function(){if(ot=window,Pt=document,yi=Pt.documentElement,St=Pt.body,ve&&(Oa=ve.utils.toArray,Pa=ve.utils.clamp,Cf=ve.core.context||Fi,vf=ve.core.suppressOverwrites||Fi,Nf=ot.history.scrollRestoration||"auto",Lf=ot.pageYOffset,ve.core.globals("ScrollTrigger",r),St)){Aa=1,Ao=document.createElement("div"),Ao.style.height="100vh",Ao.style.position="absolute",E_(),iT(),Ut.register(ve),r.isTouch=Ut.isTouch,ks=Ut.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Rf=Ut.isTouch===1,jt(ot,"wheel",bo),f_=[ot,Pt,yi,St],ve.matchMedia?(r.matchMedia=function(c){var l=ve.matchMedia(),h;for(h in c)l.add(h,c[h]);return l},ve.addEventListener("matchMediaInit",function(){return zf()}),ve.addEventListener("matchMediaRevert",function(){return T_()}),ve.addEventListener("matchMedia",function(){mr(0,1),Mr("matchMedia")}),ve.matchMedia("(orientation: portrait)",function(){return wf(),wf})):console.warn("Requires GSAP 3.11.0 or later"),wf(),jt(Pt,"scroll",bo);var n=St.style,i=n.borderTopStyle,s=ve.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=as(St),zt.m=Math.round(o.top+zt.sc())||0,pn.m=Math.round(o.left+pn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Cl=setInterval(i_,250),ve.delayedCall(.5,function(){return Pl=0}),jt(Pt,"touchcancel",Fi),jt(St,"touchstart",Fi),Ll(jt,Pt,"pointerdown,touchstart,mousedown",Qg),Ll(jt,Pt,"pointerup,touchend,mouseup",e_),Ef=ve.utils.checkPrefix("transform"),Vl.push(Ef),wo=gn(),Wl=ve.delayedCall(.2,mr).pause(),To=[Pt,"visibilitychange",function(){var c=ot.innerWidth,l=ot.innerHeight;Pt.hidden?(Kg=c,$g=l):(Kg!==c||$g!==l)&&Ca()},Pt,"DOMContentLoaded",mr,ot,"load",mr,ot,"resize",Ca],Il(jt),tt.forEach(function(c){return c.enable(0,1)}),a=0;a<et.length;a+=3)Dl(Jt,et[a],et[a+1]),Dl(Jt,et[a],et[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Mf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Cl)||(Cl=i)&&setInterval(i_,i),"ignoreMobileResize"in n&&(Rf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Il(Jt)||Il(jt,n.autoRefreshEvents||"none"),p_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=wn(n),o=et.indexOf(s),a=yr(s);~o&&et.splice(o,a?6:2),i&&(a?xi.unshift(ot,i,St,i,yi,i):xi.unshift(s,i))},r.clearMatchMedia=function(n){tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Zn(n)?wn(n):n).getBoundingClientRect(),a=o[s?gr:_r]*i||0;return s?o.right-a>0&&o.left+a<ot.innerWidth:o.bottom-a>0&&o.top+a<ot.innerHeight},r.positionInViewport=function(n,i,s){Zn(n)&&(n=wn(n));var o=n.getBoundingClientRect(),a=o[s?gr:_r],c=i==null?a/2:i in ql?ql[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+c)/ot.innerWidth:(o.top+c)/ot.innerHeight},r.killAll=function(n){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=vr.killAll||[];vr={},i.forEach(function(s){return s()})}},r}();Je.version="3.12.5";Je.saveStyles=function(r){return r?Oa(r).forEach(function(e){if(e&&e.style){var t=qn.indexOf(e);t>=0&&qn.splice(t,5),qn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ve.core.getCache(e),Cf())}}):qn};Je.revert=function(r,e){return zf(!r,e)};Je.create=function(r,e){return new Je(r,e)};Je.refresh=function(r){return r?Ca():(wo||Je.register())&&mr(!0)};Je.update=function(r){return++et.cache&&cs(r===!0?2:0)};Je.clearScrollMemory=A_;Je.maxScroll=function(r,e){return Bi(r,e?pn:zt)};Je.getScrollFunc=function(r,e){return rs(wn(r),e?pn:zt)};Je.getById=function(r){return If[r]};Je.getAll=function(){return tt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!ci};Je.snapDirectional=kf;Je.addEventListener=function(r,e){var t=vr[r]||(vr[r]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(r,e){var t=vr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(l,h){var u=[],f=[],d=ve.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(_){u.length||d.restart(!0),u.push(_.trigger),f.push(_),s<=u.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Rn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Rn(s)&&(s=s(),jt(Je,"refresh",function(){return s=e.batchMax()})),Oa(r).forEach(function(c){var l={};for(a in n)l[a]=n[a];l.trigger=c,t.push(Je.create(l))}),t};var l_=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Af=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ut.isTouch?" pinch-zoom":""):"none",e===yi&&r(St,t)},Bl={auto:1,scroll:1},mT=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ve.core.getCache(s),a=gn(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Bl[(c=ai(s)).overflowY]||Bl[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!yr(s)&&(Bl[(c=ai(s)).overflowY]||Bl[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},C_=function(e,t,n,i){return Ut.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&mT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&jt(Pt,Ut.eventTypes[0],u_,!1,!0)},onDisable:function(){return Jt(Pt,Ut.eventTypes[0],u_,!0)}})},gT=/(input|label|select|textarea)/i,h_,u_=function(e){var t=gT.test(e.target.tagName);(t||h_)&&(e._gsapAllow=!0,h_=t)},_T=function(e){pr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,c,l=wn(e.target)||yi,h=ve.core.globals().ScrollSmoother,u=h&&h.get(),f=ks&&(e.content&&wn(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),d=rs(l,zt),_=rs(l,pn),g=1,p=(Ut.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,m=0,S=Rn(i)?function(){return i(a)}:function(){return i||2.8},M,y,E=C_(l,e.type,!0,s),A=function(){return y=!1},b=Fi,L=Fi,v=function(){c=Bi(l,zt),L=Pa(ks?1:0,c),n&&(b=Pa(0,Bi(l,pn))),M=xr},x=function(){f._gsap.y=Ea(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},I=function(){if(y){requestAnimationFrame(A);var O=Ea(a.deltaY/2),j=L(d.v-O);if(f&&j!==d.v+d.offset){d.offset=j-d.v;var R=Ea((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",d.cacheID=et.cache,cs()}return!0}d.offset&&x(),y=!0},D,P,B,G,Z=function(){v(),D.isActive()&&D.vars.scrollY>c&&(d()>c?D.progress(1)&&d(c):D.resetTo("scrollY",c))};return f&&ve.set(f,{y:"+=0"}),e.ignoreCheck=function(X){return ks&&X.type==="touchmove"&&I(X)||g>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){y=!1;var X=g;g=Ea((ot.visualViewport&&ot.visualViewport.scale||1)/p),D.pause(),X!==g&&Af(l,g>1.01?!0:n?!1:"x"),P=_(),B=d(),v(),M=xr},e.onRelease=e.onGestureStart=function(X,O){if(d.offset&&x(),!O)G.restart(!0);else{et.cache++;var j=S(),R,oe;n&&(R=_(),oe=R+j*.05*-X.velocityX/.227,j*=l_(_,R,oe,Bi(l,pn)),D.vars.scrollX=b(oe)),R=d(),oe=R+j*.05*-X.velocityY/.227,j*=l_(d,R,oe,Bi(l,zt)),D.vars.scrollY=L(oe),D.invalidate().duration(j).play(.01),(ks&&D.vars.scrollY>=c||R>=c-1)&&ve.to({},{onUpdate:Z,duration:j})}o&&o(X)},e.onWheel=function(){D._ts&&D.pause(),gn()-m>1e3&&(M=0,m=gn())},e.onChange=function(X,O,j,R,oe){if(xr!==M&&v(),O&&n&&_(b(R[2]===O?P+(X.startX-X.x):_()+O-R[1])),j){d.offset&&x();var Re=oe[2]===j,qe=Re?B+X.startY-X.y:d()+j-oe[1],q=L(qe);Re&&qe!==q&&(B+=q-qe),d(q)}(j||O)&&cs()},e.onEnable=function(){Af(l,n?!1:"x"),Je.addEventListener("refresh",Z),jt(ot,"resize",Z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),E.enable()},e.onDisable=function(){Af(l,!0),Jt(ot,"resize",Z),Je.removeEventListener("refresh",Z),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ut(e),a.iOS=ks,ks&&!d()&&d(1),ks&&ve.ticker.add(Fi),G=a._dc,D=ve.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:R_(d,d(),function(){return D.pause()})},onUpdate:cs,onComplete:G.vars.onComplete}),a};Je.sort=function(r){return tt.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Je.observe=function(r){return new Ut(r)};Je.normalizeScroll=function(r){if(typeof r>"u")return Tn;if(r===!0&&Tn)return Tn.enable();if(r===!1){Tn&&Tn.kill(),Tn=r;return}var e=r instanceof Ut?r:_T(r);return Tn&&Tn.target===e.target&&Tn.kill(),yr(e.target)&&(Tn=e),e};Je.core={_getVelocityProp:Rl,_inputObserver:C_,_scrollers:et,_proxies:xi,bridge:{ss:function(){ci||Mr("scrollStart"),ci=gn()},ref:function(){return mn}}};x_()&&ve.registerPlugin(Je);var ls=class{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(i=>{let s=this.resolveName(i);this.callbacks[s.namespace]instanceof Object||(this.callbacks[s.namespace]={}),this.callbacks[s.namespace][s.value]instanceof Array||(this.callbacks[s.namespace][s.value]=[]),this.callbacks[s.namespace][s.value].push(t)}),this)}off(e){return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(n=>{let i=this.resolveName(n);if(i.namespace!=="base"&&i.value==="")delete this.callbacks[i.namespace];else if(i.namespace==="base")for(let s in this.callbacks)this.callbacks[s]instanceof Object&&this.callbacks[s][i.value]instanceof Array&&(delete this.callbacks[s][i.value],Object.keys(this.callbacks[s]).length===0&&delete this.callbacks[s]);else this.callbacks[i.namespace]instanceof Object&&this.callbacks[i.namespace][i.value]instanceof Array&&(delete this.callbacks[i.namespace][i.value],Object.keys(this.callbacks[i.namespace]).length===0&&delete this.callbacks[i.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;let n=null,i=null,s=t instanceof Array?t:[],o=this.resolveNames(e);if(o=this.resolveName(o[0]),o.namespace==="base")for(let a in this.callbacks)this.callbacks[a]instanceof Object&&this.callbacks[a][o.value]instanceof Array&&this.callbacks[a][o.value].forEach(function(c){i=c.apply(this,s),typeof n>"u"&&(n=i)});else if(this.callbacks[o.namespace]instanceof Object){if(o.value==="")return console.warn("wrong name"),this;this.callbacks[o.namespace][o.value].forEach(function(a){i=a.apply(this,s),typeof n>"u"&&(n=i)})}return n}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){let t={},n=e.split(".");return t.original=e,t.value=n[0],t.namespace="base",n.length>1&&n[1]!==""&&(t.namespace=n[1]),t}};var Ba=class extends ls{constructor(e){super(),this.container=e,this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")})}};var ka=class extends ls{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,window.requestAnimationFrame(()=>{this.tick()})}tick(){let e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.trigger("tick"),window.requestAnimationFrame(()=>{this.tick()})}};var za=class{constructor(e,t){this.experience=e,this.sizes=e.sizes,this.scene=e.scene,this.canvas=e.canvas,this.containerAttribute=t.getAttribute("data-3d"),this.setInstance()}setInstance(){let e=this.sizes.width/this.sizes.height;this.instance=new Vt(60,e,.1,1e4),this.instance.position.set(5,4,6),this.instance.lookAt(0,0,0),this.scene.add(this.instance)}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){}};var Ha=class{constructor(e){this.experience=e,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.setInstance()}setInstance(){this.instance=new Bc({canvas:this.canvas,antialias:!0,alpha:!0}),this.instance.outputColorSpace=Tt,this.instance.toneMapping=_u,this.instance.toneMappingExposure=1,this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=gu,this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}update(){this.instance.render(this.scene,this.camera.instance)}};var Va=class{constructor(e,t){this.experience=e,this.scene=this.experience.scene,this.resources=this.experience.resources,this.containerAttribute=t.getAttribute("data-3d"),this.addThreePointLights(),this.containerAttribute,console.log(this.scene.children)}addThreePointLights(){let e=new oo(16777215,2);e.position.set(4,6,5),e.target.position.set(0,0,0),e.castShadow=!0,e.shadow.mapSize.width=4096,e.shadow.mapSize.height=4096,e.shadow.bias=.005,e.shadow.normalBias=.2,e.shadow.radius=60,e.shadow.camera.left=-8,e.shadow.camera.right=8,e.shadow.camera.top=8,e.shadow.camera.bottom=-8,e.shadow.camera.near=1,e.shadow.camera.far=40,this.scene.add(e),this.scene.add(e.target);let t=new el(8947848,8);this.scene.add(t)}};function xT(r){let e=2166136261;for(let t=0;t<r.length;t++)e=Math.imul(e^r.charCodeAt(t),16777619)>>>0;return e>>>0}function yT(r){let e=r>>>0;return function(){e|=0,e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function vT(r){return 1-Math.pow(1-r,3)}var Ga=class{constructor(e){Do(this,"stoneLayerDefs",[{name:"layer2",sizeScale:1},{name:"layer3",sizeScale:1},{name:"layer7",sizeScale:1},{name:"layer8",sizeScale:1}]);Do(this,"stoneLayerIndices",[2,3,7,8]);Do(this,"stoneLayerMap",{2:0,3:1,7:2,8:3});Do(this,"stoneAnimation",{startTime:null,perInstanceDelays:[],finalPositions:[],duration:2,heightAbove:8,layerStates:[],groundFadeDuration:.3});this.stoneSizeMultiplier=1.5,this.stoneSeed=3405691582,this.experience=e,this.scene=this.experience.scene,this.resources=this.experience.resources,this.resource=this.resources.items.liningModel,this.liningTexture=this.resources.items.liningTexture,this.layerMeshes=[],this.stonePlanes=[],this.setupLayers()}resetLayerAnimationState(){this.stoneAnimation.layerStates=[];let e=0;this.stoneAnimation.layerStates.push({type:"ground",index:11,start:e,end:e+this.stoneAnimation.groundFadeDuration,done:!1,progress:0}),e+=this.stoneAnimation.groundFadeDuration;for(let t=10;t>=1;t--)this.stoneAnimation.layerStates.push({type:this.stoneLayerIndices.includes(t)?"stone":"normal",index:t,start:e,end:e+this.stoneAnimation.duration,done:!1,progress:0}),e+=this.stoneAnimation.duration}setupLayers(){this.setupTexture(this.liningTexture),this.resource.scene&&!this.scene.children.includes(this.resource.scene)&&this.scene.add(this.resource.scene);let e=[];this.resource.scene.traverse(t=>{t.isMesh&&e.push(t)}),e.forEach(t=>{this.scene.children.includes(t)||this.scene.add(t)});for(let t=11;t>=1;t--){let n=`layer${t}`,i=this.scene.children.find(s=>s.name===n);i&&(i.userData.targetY=i.position.y,i.castShadow=!1,i.receiveShadow=!1,t===2||t===3||t===7||t===8?(i.visible=!1,i.castShadow=!0,i.receiveShadow=!0):t===1?(i.visible=!0,i.material=new gi({color:230732,roughness:.7,metalness:.1,transparent:!1,opacity:1}),i.castShadow=!0,i.receiveShadow=!0):t===4||t===6||t===9?(i.visible=!0,i.material=new gi({color:230732,roughness:.7,metalness:.1,transparent:!1,opacity:0}),i.castShadow=!0,i.receiveShadow=!0):(i.visible=!0,i.material=new gi({map:this.liningTexture,color:16777215,roughness:.7,metalness:.1,transparent:!1,opacity:0}),i.castShadow=!0,i.receiveShadow=!0),this.scene.add(i),this.layerMeshes.push(i))}this.generateStoneLayerPlanes()}generateStoneLayers(){}refreshLayers(){this.stonePlanes.forEach(e=>{this.scene.remove(e),e.geometry.dispose(),e.material.dispose()}),this.stonePlanes=[],this.generateStoneLayerPlanes()}setupTexture(e){e&&(e.flipY=!1,e.encoding=Tt)}update(){this.stoneAnimation.startTime||(this.stoneAnimation.startTime=performance.now()*.001,this.resetLayerAnimationState());let e=performance.now()*.001-this.stoneAnimation.startTime,t=this.stoneAnimation.layerStates[0],n=this.scene.children.find(s=>s.name==="layer11");if(n){let s=(e-t.start)/(t.end-t.start);s=Math.max(0,Math.min(1,s)),n.material.transparent=!0,n.material.opacity=s,s>=1&&(t.done=!0)}for(let s=1;s<this.stoneAnimation.layerStates.length;s++){let o=this.stoneAnimation.layerStates[s],a=this.scene.children.find(l=>l.name===`layer${o.index}`),c=(e-o.start)/(o.end-o.start);if(c=Math.max(0,Math.min(1,c)),o.progress=c,a){a.material.transparent=!0;let l=.3,h=o.end-o.start||this.stoneAnimation.duration,u=0;if(h>0){let d=c*h;u=Math.min(1,d/l)}a.material.opacity=u,a.position.y=a.userData.targetY+(1-c)*this.stoneAnimation.heightAbove,c>=1&&(a.position.y=a.userData.targetY,o.done=!0);let f=.5;a.castShadow=u>f,a.receiveShadow=!0}}for(let s=0;s<this.stonePlanes.length;s++){let o=this.stoneLayerIndices[s],a=this.stoneAnimation.layerStates.find(y=>y.index===o);if(!a)continue;let c=this.stonePlanes[s],l=.5,h=a.progress;c.castShadow=!0,c.receiveShadow=!1,c.material&&(c.material.transparent=!0,c.material.opacity=Math.max(0,Math.min(1,h)));let u=this.stoneAnimation.perInstanceDelays[s]||[],f=this.stoneAnimation.finalPositions[s]||[],d=this.stoneAnimation.perInstanceRotations&&this.stoneAnimation.perInstanceRotations[s]||[],_=c.userData.maxDelay||1,g=a.progress,p=!1,m=new Gt().setFromAxisAngle(new N(0,0,1),Math.PI/4),S=new Gt().setFromAxisAngle(new N(0,1,0),Math.PI/4),M=m.clone().multiply(S);for(let y=0;y<c.count;y++){let A=(u[y]||0)/_,L=.6/Math.max(1e-4,this.stoneAnimation.duration),v=Math.min(1,A+L),x=f[y];if(!x)continue;let I,D=!1;if(g<A)I=x.y+this.stoneAnimation.heightAbove,c._lastY?.[y]!==I&&(D=!0);else if(g>=v||g>=1)I=x.y,c._lastY?.[y]!==I&&(D=!0);else{let P=(g-A)/(v-A);P=Math.max(0,Math.min(1,P)),P=vT(P),I=x.y+(1-P)*this.stoneAnimation.heightAbove,c._lastY?.[y]!==I&&(D=!0)}if(D){let P=new N(x.x,I,x.z),B=new Ge,G=d[y]||0,Z=new Gt().setFromAxisAngle(new N(0,0,1),G),X=M.clone().multiply(Z);B.compose(P,X,new N(1,1,1)),c.setMatrixAt(y,B),p=!0,c._lastY||(c._lastY=[]),c._lastY[y]=I}}if(p&&(c.instanceMatrix.needsUpdate=!0),a.progress>=1){let y=f.length;c.count!==y&&console.debug("[Lining] instance count mismatch",{count:c.count,finalsLen:y});for(let E=0;E<Math.min(c.count,y);E++){let A=new N(f[E].x,f[E].y,f[E].z),b=new Ge,L=this.stoneAnimation.perInstanceRotations&&this.stoneAnimation.perInstanceRotations[s]&&this.stoneAnimation.perInstanceRotations[s][E]||0,v=new Gt().setFromAxisAngle(new N(0,0,1),L),x=M.clone().multiply(v);b.compose(A,x,new N(1,1,1)),c.setMatrixAt(E,b)}c.instanceMatrix.needsUpdate=!0;try{var i=Array.isArray(f)?f.length:void 0;console.debug("[Lining] finalizing layer",o,"stoneIdx",s,"seed",this.stoneSeed,"allocatedInstances",c.count||"(unknown)","finalPositions",i)}catch(E){console.warn("[Lining] failed to log finalizing diagnostics",E)}if(typeof c.count=="number"&&typeof y=="number"&&c.count!==y&&(console.warn("[Lining] instance count mismatch \u2014 correcting instancedMesh.count",c.count,"->",y),c.count=y),c.material){c.material.opacity=1,c.material.transparent=!1,c.material.depthWrite=!0;try{c.material.side=Pn}catch{}c.material.alphaTest=Math.max(c.material.alphaTest||0,.1),c.material.needsUpdate=!0}c._lastY=null}}}destroy(){this.gui&&this.gui.destroy(),this.guiContainer&&this.guiContainer.parentNode&&this.guiContainer.parentNode.removeChild(this.guiContainer),this.stonePlanes.forEach(e=>{this.scene.remove(e),e.geometry.dispose(),e.material.dispose()}),this.stonePlanes=[],this.layerMeshes.forEach(e=>{this.scene.remove(e)})}generateStoneLayerPlanes(){this.stoneAnimation.perInstanceDelays=[],this.stoneAnimation.finalPositions=[],this.stonePlanes.forEach(t=>this.scene.remove(t)),this.stonePlanes=[];let e={layer2:{x:4,z:4,y:.180905,color:65280},layer3:{x:4,z:4,y:.092328,color:255},layer7:{x:4,z:4,y:.180905,color:16711935},layer8:{x:4,z:4,y:.092328,color:16746496}};this.stoneLayerDefs.forEach((t,n)=>{let i=this.scene.children.find(I=>I.name===t.name);if(!i){console.warn(`Stone layer mesh not found: ${t.name}`);return}let s=i.position.clone(),o=e[t.name],a=.98,c={x:o.x*a,y:o.y,z:o.z*a,color:o.color},l=3,h=c.y/l*.98*t.sizeScale*this.stoneSizeMultiplier,u=Math.max(1,Math.floor(c.x/h)),f=Math.max(1,Math.floor(c.z/h));u<1&&(u=1),f<1&&(f=1);let d=new to(h,h),_=new gi({map:this.resources.items.stoneTexture,transparent:!0,roughness:.7,metalness:.1,depthWrite:!1,opacity:0,side:Pn,alphaTest:.05}),g=u*l*f,p=new er(d,_,g);p.castShadow=!0,p.receiveShadow=!1,p.frustumCulled=!1;let m=new Gt().setFromAxisAngle(new N(0,0,1),Math.PI/4),S=new Gt().setFromAxisAngle(new N(0,1,0),Math.PI/4),M=m.clone().multiply(S),y=xT(`${t.name}:${this.stoneSeed}:${n}`),E=yT(y),A=[],b=[],L=[];for(let I=0;I<l;I++)for(let D=0;D<u;D++)for(let P=0;P<f;P++){let B=u>1?D/(u-1):.5,G=l>1?I/(l-1):.5,Z=f>1?P/(f-1):.5,X=s.x-c.x/2+B*c.x,O=s.y-c.y/2+G*c.y,j=s.z-c.z/2+Z*c.z,R=h*.1,oe=(qe,q,ee)=>Math.max(q,Math.min(ee,qe));X+=oe((E()-.5)*R,-(X-(s.x-c.x/2)),s.x+c.x/2-X),O+=oe((E()-.5)*R,-(O-(s.y-c.y/2)),s.y+c.y/2-O),j+=oe((E()-.5)*R,-(j-(s.z-c.z/2)),s.z+c.z/2-j),O=Math.min(O,s.y+c.y/2-h*.5);let Re=E();A.push(Re),b.push({x:X,y:O,z:j}),L.push(E()*Math.PI*2)}let v=Math.max.apply(null,A);p.userData.maxDelay=v;let x=b.length;if(x!==p.count)if(x<p.count)p.count=x,console.debug("[Lining] adjusted instancedMesh.count down",{name:t.name,gridX:u,gridY:l,gridZ:f,original:g,adjusted:p.count,finalsLen:x});else{console.warn("[Lining] finalPositions exceed instanced allocation; recreating mesh",{name:t.name,allocated:p.count,needed:x});let I=new er(d,_,x);I.castShadow=p.castShadow,I.receiveShadow=p.receiveShadow,I.frustumCulled=p.frustumCulled,this.scene.remove(p),this.scene.add(I),p=I}for(let I=0;I<b.length;I++){let D=b[I],P=L[I]||0,B=new N(D.x,D.y+this.stoneAnimation.heightAbove,D.z),G=new Ge,Z=new Gt().setFromAxisAngle(new N(0,0,1),P),X=M.clone().multiply(Z);G.compose(B,X,new N(1,1,1)),p.setMatrixAt(I,G)}try{let I=this.resources.items.stoneTexture;I&&(I.wrapS=Ai,I.wrapT=Ai,I.needsUpdate=!0);let D=new Float32Array(b.length*2),P=new Float32Array(b.length*3);for(let G=0;G<b.length;G++){let Z=(E()-.5)*.8,X=(E()-.5)*.8;D[G*2]=Z,D[G*2+1]=X;let O=.75+E()*.25;P[G*3]=O,P[G*3+1]=O,P[G*3+2]=O}p.geometry.setAttribute("instanceUvOffset",new Pi(D,2)),p.geometry.setAttribute("instanceColor",new Pi(P,3));let B=p.material;if(B&&typeof B.onBeforeCompile=="function"){let G="__cw_instanced_uv_injected__";B[G]||(B.onBeforeCompile=Z=>{try{let X=Z.vertexShader;/varying\s+vec2\s+vUv\s*;/.test(X)||(X=`varying vec2 vUv;
`+X),/attribute\s+vec2\s+instanceUvOffset\s*;/.test(X)||(X=X.replace(/void\s+main\s*\(\s*\)\s*{/,`attribute vec2 instanceUvOffset;
attribute vec3 instanceColor;
varying vec3 vInstanceColor;

void main() {`)),X.indexOf("#include <uv_vertex>")!==-1?X=X.replace("#include <uv_vertex>",`#include <uv_vertex>
    vUv += instanceUvOffset;
    vInstanceColor = instanceColor;`):X.indexOf("vUv = uv;")!==-1?X=X.replace("vUv = uv;",`vUv = uv + instanceUvOffset;
    vInstanceColor = instanceColor;`):X=X.replace(/\n}\s*$/,`
    vUv += instanceUvOffset;
    vInstanceColor = instanceColor;
}
`),Z.vertexShader=X;let O=Z.fragmentShader;/varying\s+vec3\s+vInstanceColor\s*;/.test(O)||(/varying\s+vec2\s+vUv\s*;/.test(O)?O=O.replace(/varying\s+vec2\s+vUv\s*;/,`varying vec2 vUv;
varying vec3 vInstanceColor;`):O=`varying vec3 vInstanceColor;
`+O),O.indexOf("vec4 diffuseColor = vec4( diffuse, opacity );")!==-1&&(O=O.replace("vec4 diffuseColor = vec4( diffuse, opacity );","vec4 diffuseColor = vec4( diffuse * vInstanceColor, opacity );")),Z.fragmentShader=O}catch(X){console.warn("[Lining] failed to inject instanced UV+color shader code",X)}},B[G]=!0,B.needsUpdate=!0)}}catch(I){console.warn("[Lining] failed to add per-instance UV offsets",I)}this.stoneAnimation.perInstanceDelays.push(A),this.stoneAnimation.finalPositions.push(b),this.stoneAnimation.perInstanceRotations||(this.stoneAnimation.perInstanceRotations=[]),this.stoneAnimation.perInstanceRotations.push(L),this.scene.add(p),this.stonePlanes.push(p)})}};var Wa=class{constructor(e,t){if(this.experience=e,this.scene=this.experience.scene,this.resources=this.experience.resources,!this.resources)throw new Error("World: this.resources is undefined. Check Experience initialization and sources.js.");this.containerAttribute=t.getAttribute("data-3d"),this.resources.on("ready",()=>{this.containerAttribute==="lining"?(this.Lining=new Ga(this.experience),this.environment=new Va(this.experience,t)):console.log("nothing was loaded")})}update(){this.Lining&&this.Lining.update&&this.Lining.update(),this.experience.camera&&this.experience.camera.update()}};var Hf=new WeakMap,Kl=class extends ei{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){let s=new Es(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Tt).catch(n)}decodeDracoFile(e,t,n,i,s=kt,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Hf.has(e)){let c=Hf.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i,s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(c=>(i=c,new Promise((l,h)=>{i._callbacks[s]={resolve:l,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Hf.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new Dn;e.index&&t.setIndex(new It(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,c=new It(o,a);s==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==Tt)return;let n=new Be;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new Es(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let s=MT.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){let o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function MT(){let r,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":let c=a.buffer,l=a.taskConfig;e.then(h=>{let u=h.draco,f=new u.Decoder;try{let d=t(u,f,new Int8Array(c),l),_=d.attributes.map(g=>g.array.buffer);d.index&&_.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},_)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{u.destroy(f)}});break}};function t(o,a,c,l){let h=l.attributeIDs,u=l.attributeTypes,f,d,_=a.GetEncodedGeometryType(c);if(_===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(c,c.byteLength,f);else if(_===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(c,c.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());let g={index:null,attributes:[]};for(let p in h){let m=self[u[p]],S,M;if(l.useUniqueIDs)M=h[p],S=a.GetAttributeByUniqueId(f,M);else{if(M=a.GetAttributeId(f,o[h[p]]),M===-1)continue;S=a.GetAttribute(f,M)}let y=i(o,a,f,p,m,S);p==="color"&&(y.vertexColorSpace=l.vertexColorSpace),g.attributes.push(y)}return _===o.TRIANGULAR_MESH&&(g.index=n(o,a,f)),o.destroy(f),g}function n(o,a,c){let h=c.num_faces()*3,u=h*4,f=o._malloc(u);a.GetTrianglesUInt32Array(c,u,f);let d=new Uint32Array(o.HEAPF32.buffer,f,h).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,c,l,h,u){let f=u.num_components(),_=c.num_points()*f,g=_*h.BYTES_PER_ELEMENT,p=s(o,h),m=o._malloc(g);a.GetAttributeDataArrayForAllPoints(c,u,p,g,m);let S=new h(o.HEAPF32.buffer,m,_).slice();return o._free(m),{name:l,array:S,itemSize:f}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function Vf(r,e){if(e===ym)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===oa||e===sl){let t=r.getIndex();if(t===null){let o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===oa)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var $l=class extends ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Kf(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new jf(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new ld(t)})}load(e,t,n,i){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Rs.extractUrlBase(e);o=Rs.resolveURL(l,this.path)}else o=Rs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Es(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===N_){try{o[nt.KHR_BINARY_GLTF]=new hd(e)}catch(u){i&&i(u);return}s=JSON.parse(o[nt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new _d(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:o[u]=new qf;break;case nt.KHR_DRACO_MESH_COMPRESSION:o[u]=new ud(s,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:o[u]=new fd;break;case nt.KHR_MESH_QUANTIZATION:o[u]=new dd;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function ST(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Yf=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new Be(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],kt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new oo(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Qc(h),l.distance=u;break;case"spot":l=new jc(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Hs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},qf=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ri}extendParams(e,t,n){let i=[];e.color=new Be(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],kt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Tt))}return Promise.all(i)}},Zf=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},Kf=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Qe(a,a)}return Promise.all(s)}},$f=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},Jf=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}},jf=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Tt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}},Qf=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}},ed=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(a[0],a[1],a[2],kt),Promise.all(s)}},td=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},nd=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(a[0],a[1],a[2],kt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Tt)),Promise.all(s)}},id=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}},sd=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}},rd=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},od=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ad=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},cd=class{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},ld=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==li.TRIANGLES&&l.mode!==li.TRIANGLE_STRIP&&l.mode!==li.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let _ of u){let g=new Ge,p=new N,m=new Gt,S=new N(1,1,1),M=new er(_.geometry,_.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&S.fromBufferAttribute(c.SCALE,y),M.setMatrixAt(y,g.compose(p,m,S));for(let y in c)if(y==="_COLOR_0"){let E=c[y];M.instanceColor=new Pi(E.array,E.itemSize,E.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,c[y]);Lt.prototype.copy.call(M,_),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},N_="glTF",Xa=12,P_={JSON:1313821514,BIN:5130562},hd=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Xa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==N_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Xa,s=new DataView(e,Xa),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let c=s.getUint32(o,!0);if(o+=4,c===P_.JSON){let l=new Uint8Array(e,Xa+o,a);this.content=n.decode(l)}else if(c===P_.BIN){let l=Xa+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ud=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=md[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=md[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Co[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let _ in d.attributes){let g=d.attributes[_],p=c[_];p!==void 0&&(g.normalized=p)}u(d)},a,l,kt,f)})})}},fd=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},dd=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}},Jl=class extends ws{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,_=e*l,g=_-l,p=-2*d+3*f,m=d-f,S=1-p,M=m-f+u;for(let y=0;y!==a;y++){let E=o[g+y+a],A=o[g+y+c]*h,b=o[_+y+a],L=o[_+y]*h;s[y]=S*E+M*A+p*b+m*L}return s}},bT=new Gt,pd=class extends Jl{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return bT.fromArray(s).normalize().toArray(s),s}},li={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Co={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},I_={9728:ln,9729:In,9984:xu,9985:Go,9986:Hr,9987:Si},L_={33071:Zi,33648:qo,10497:Ai},Gf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},md={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wT={CUBICSPLINE:void 0,LINEAR:Qs,STEP:Jr},Wf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function TT(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new gi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ti})),r.DefaultMaterial}function Sr(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hs(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function AT(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(f)}if(s){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function ET(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function RT(r){let e,t=r.extensions&&r.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xf(t.attributes):e=r.indices+":"+Xf(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Xf(r.targets[n]);return e}function Xf(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function gd(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function CT(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var PT=new Ge,_d=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ST,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new so(this.options.manager):this.textureLoader=new tl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Es(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Sr(s,a,i),Hs(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(Rs.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Gf[i.type],a=Co[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new It(l,o,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],c=Gf[i.type],l=Co[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0,g,p;if(d&&d!==u){let m=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,M=t.cache.get(S);M||(g=new l(a,m*d,i.count*d/h),M=new Qo(g,d/h),t.cache.add(S,M)),p=new ea(M,c,f%d/h,_)}else a===null?g=new l(i.count*c):g=new l(a,f,i.count*c),p=new It(g,c,_);if(i.sparse!==void 0){let m=Gf.SCALAR,S=Co[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,E=new S(o[1],M,i.sparse.count*m),A=new l(o[2],y,i.sparse.count*c);a!==null&&(p=new It(p.array.slice(),p.itemSize,p.normalized));for(let b=0,L=E.length;b<L;b++){let v=E[b];if(p.setX(v,A[b*c]),c>=2&&p.setY(v,A[b*c+1]),c>=3&&p.setZ(v,A[b*c+2]),c>=4&&p.setW(v,A[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return h.magFilter=I_[f.magFilter]||In,h.minFilter=I_[f.minFilter]||Si,h.wrapS=L_[f.wrapS]||Ai,h.wrapT=L_[f.wrapT]||Ai,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){let p=new Qt(g);p.needsUpdate=!0,f(p)}),t.load(Rs.resolveURL(u,s.path),_,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||CT(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[nt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=s.associations.get(o);o=s.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ia,Vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new na,Vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return gi}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,a={},c=s.extensions||{},l=[];if(c[nt.KHR_MATERIALS_UNLIT]){let u=i[nt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{let u=s.pbrMetallicRoughness||{};if(a.color=new Be(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],kt),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Tt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Pn);let h=s.alphaMode||Wf.OPAQUE;if(h===Wf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Wf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ri&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Qe(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Ri&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ri){let u=s.emissiveFactor;a.emissive=new Be().setRGB(u[0],u[1],u[2],kt)}return s.emissiveTexture!==void 0&&o!==Ri&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Tt)),Promise.all(l).then(function(){let u=new o(a);return s.name&&(u.name=s.name),Hs(u,s),t.associations.set(u,{materials:e}),s.extensions&&Sr(i,u,s),u})}createUniqueName(e){let t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return D_(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=RT(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=D_(new Dn,l,t),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?TT(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,_=h.length;d<_;d++){let g=h[d],p=o[d],m,S=l[d];if(p.mode===li.TRIANGLES||p.mode===li.TRIANGLE_STRIP||p.mode===li.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new zc(g,S):new hn(g,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===li.TRIANGLE_STRIP?m.geometry=Vf(m.geometry,sl):p.mode===li.TRIANGLE_FAN&&(m.geometry=Vf(m.geometry,oa));else if(p.mode===li.LINES)m=new Xc(g,S);else if(p.mode===li.LINE_STRIP)m=new io(g,S);else if(p.mode===li.LINE_LOOP)m=new Yc(g,S);else if(p.mode===li.POINTS)m=new qc(g,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&ET(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Hs(m,s),p.extensions&&Sr(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let d=0,_=u.length;d<_;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return s.extensions&&Sr(i,u[0],s),u[0];let f=new wi;s.extensions&&Sr(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,_=u.length;d<_;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(Sm.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new no(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new Ge;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Vc(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],_=i.samplers[d.sampler],g=d.target,p=g.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,S=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",S)),l.push(_),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],_=u[2],g=u[3],p=u[4],m=[];for(let S=0,M=f.length;S<M;S++){let y=f[S],E=d[S],A=_[S],b=g[S],L=p[S];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let v=n._createAnimationTracks(y,E,A,b,L);if(v)for(let x=0;x<v.length;x++)m.push(v[x])}return new Kc(s,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,PT)});for(let d=0,_=u.length;d<_;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new ta:l.length>1?h=new wi:l.length===1?h=l[0]:h=new Lt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Hs(h,s),s.extensions&&Sr(n,h,s),s.matrix!==void 0){let u=new Ge;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new wi;n.name&&(s.name=i.createUniqueName(n.name)),Hs(s,n),n.extensions&&Sr(t,s,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Vn||f instanceof Qt)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){let o=[],a=e.name?e.name:e.uuid,c=[];zs[s.path]===zs.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(zs[s.path]){case zs.weights:l=Ji;break;case zs.rotation:l=Ii;break;case zs.position:case zs.scale:l=ji;break;default:switch(n.itemSize){case 1:l=Ji;break;case 2:case 3:default:l=ji;break}break}let h=i.interpolation!==void 0?wT[i.interpolation]:Qs,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let _=new l(c[f]+"."+zs[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=gd(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ii?pd:Jl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function IT(r,e,t){let n=e.attributes,i=new jn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),a.normalized){let h=gd(Co[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new N,c=new N;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){let g=gd(Co[f.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new Hn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function D_(r,e,t){let n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(let o in n){let a=md[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){let o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return ht.workingColorSpace!==kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Hs(r,e),IT(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?AT(r,e.targets,t):r})}var Ya=class extends ls{constructor(e){super(),this.sources=e,this.items={},this.toLoad=this.sources.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.gltfLoader=new $l,this.loaders.dracoLoader=new Kl,this.loaders.textureLoader=new so,this.loaders.cubeTextureLoader=new Jc,this.loaders.dracoLoader.setDecoderPath("https://cdn.jsdelivr.net/gh/CilliersWebSolutions/portfolioV1@main/dist/draco/"),this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)}startLoading(){for(let e of this.sources)e.type==="gltfModel"?this.loaders.gltfLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="texture"?this.loaders.textureLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="cubeTexture"&&this.loaders.cubeTextureLoader.load(e.path,t=>{this.sourceLoaded(e,t)})}sourceLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.toLoad&&this.trigger("ready")}};var U_=[{name:"liningModel",type:"gltfModel",path:"https://cdn.prod.website-files.com/68a43ca43fc6c140cf3f82c2/68d1900f067299c802280c4f_landfill_square_V2.glb.txt"},{name:"liningTexture",type:"texture",path:"https://cdn.prod.website-files.com/68a43ca43fc6c140cf3f82c2/68a45b67774e43e59daa12e2_baked-1.jpg"},{name:"stoneTexture",type:"texture",path:"https://cdn.prod.website-files.com/68a43ca43fc6c140cf3f82c2/6915efce56769621ee31025b_stonedarkerGreen.png"}];var qa=class{constructor(e,t){this.container=t,this.canvas=e,this.containerAttribute=t.getAttribute("data-3d"),this.scene=new kc,this.sizes=new Ba(t),this.time=new ka,this.camera=new za(this,t),this.renderer=new Ha(this),this.resources=new Ya(U_),this.world=new Wa(this,t),this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()})}resize(){this.camera.resize(),this.renderer.resize()}update(){this.camera.update(),this.world.update(),this.renderer.update()}};ri.registerPlugin(Je);var Za=class{constructor(){this.initCounters()}initCounters(){document.querySelectorAll(".number").forEach(e=>{let t=parseInt(e.getAttribute("data-target"),10),n=e.getAttribute("data-target")==="fade-in";e.textContent="00";let i={val:0},s=ri.timeline({scrollTrigger:{trigger:e,start:"top 80%",once:!0}});n&&s.fromTo(e,{opacity:0},{opacity:1,duration:.6,ease:"power1.out"}),s.to(i,{val:t,duration:2,ease:"power1.out",onUpdate:()=>{let o=Math.floor(i.val);e.textContent=o<10?`0${o}`:`${o}`}})})}};var Cn,k_,hs,ki,Vs,z_,H_,jl,V_=function(){return typeof window<"u"},G_=function(){return Cn||V_()&&(Cn=window.gsap)&&Cn.registerPlugin&&Cn},W_=function(e){return typeof e=="string"},O_=function(e){return typeof e=="function"},Ka=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return e===hs||e===ki||e===Vs?Math.max(ki[i],Vs[i])-(hs["inner"+n]||ki[s]||Vs[s]):e[i]-e["offset"+n]},$a=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===hs&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=ki[n]!=null?ki:Vs),function(){return e[n]}},LT=function(e,t,n,i){if(O_(e)&&(e=e(t,n,i)),typeof e!="object")return W_(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&O_(e[o])?e[o](t,n,i):e[o];return s},X_=function(e,t){if(e=z_(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),i=!t||t===hs||t===Vs,s=i?{top:ki.clientTop-(hs.pageYOffset||ki.scrollTop||Vs.scrollTop||0),left:ki.clientLeft-(hs.pageXOffset||ki.scrollLeft||Vs.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-s.left,y:n.top-s.top};return!i&&t&&(o.x+=$a(t,"x")(),o.y+=$a(t,"y")()),o},F_=function(e,t,n,i,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:W_(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-s:e==="max"?Ka(t,n)-s:Math.min(Ka(t,n),X_(e,t)[n]-s)},B_=function(){Cn=G_(),V_()&&Cn&&typeof document<"u"&&document.body&&(hs=window,Vs=document.body,ki=document.documentElement,z_=Cn.utils.toArray,Cn.config({autoKillThreshold:7}),H_=Cn.config(),k_=1)},Po={version:"3.12.5",name:"scrollTo",rawVars:1,register:function(e){Cn=e,B_()},init:function(e,t,n,i,s){k_||B_();var o=this,a=Cn.getProperty(e,"scrollSnapType");o.isWin=e===hs,o.target=e,o.tween=n,t=LT(t,i,e,s),o.vars=t,o.autoKill=!!t.autoKill,o.getX=$a(e,"x"),o.getY=$a(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),jl||(jl=Cn.core.globals().ScrollTrigger),Cn.getProperty(e,"scrollBehavior")==="smooth"&&Cn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,F_(t.x,e,"x",o.x,t.offsetX||0),i,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,F_(t.y,e,"y",o.y,t.offsetY||0),i,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,i=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,c=t.yPrev,l=t.isWin,h=t.snap,u=t.snapInline,f,d,_,g,p;n;)n.r(e,n.d),n=n._next;f=l||!t.skipX?t.getX():a,d=l||!t.skipY?t.getY():c,_=d-c,g=f-a,p=H_.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(g>p||g<-p)&&f<Ka(i,"x")&&(t.skipX=1),!t.skipY&&(_>p||_<-p)&&d<Ka(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),l?hs.scrollTo(t.skipX?f:t.x,t.skipY?d:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),h&&(e===1||e===0)&&(d=i.scrollTop,f=i.scrollLeft,u?i.style.scrollSnapType=u:i.style.removeProperty("scroll-snap-type"),i.scrollTop=d+1,i.scrollLeft=f+1,i.scrollTop=d,i.scrollLeft=f),t.xPrev=t.x,t.yPrev=t.y,jl&&jl.update()},kill:function(e){var t=e==="scrollTo",n=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};Po.max=Ka;Po.getOffset=X_;Po.buildGetter=$a;G_()&&Cn.registerPlugin(Po);ri.registerPlugin(Po);var Io=class{constructor(e={}){this.progressBar=document.querySelector(".progress-bar"),this.menuItems=Array.from(document.querySelectorAll(".nav-link-content-wrapper")),this.waypoints=Array.from(document.querySelectorAll(".waypoint")),this.sections=Array.from(document.querySelectorAll('[id^="service-content-"]')),this.topVH=.3,this.bottomVH=.5,this.observerDebounceMs=80,this._computeTopOffset=()=>{let t=document.querySelector(".services-nav-wrapper");if(t)try{let n=window.getComputedStyle(t),i=parseFloat(n.top);if(Number.isFinite(i)&&i>=0)return i}catch{}return window.innerHeight*this.topVH},this._topOffsetPx=this._computeTopOffset(),this._bottomOffsetPx=window.innerHeight*(1-this.bottomVH),this.programmaticScroll=!1,this.lastMenuIdx=-1,this.debug=!!(window&&window.PROGRESS_BAR_DEBUG),this.progressMap=e.progressMap||this._defaultProgressMap(),this.sectionToMenu={},this.sections.forEach(t=>{let n=t.id;for(let i=0;i<this.menuItems.length;i++)if(this.menuItems[i].getAttribute("data-target")===n){this.sectionToMenu[n]=i;break}}),this._bind(),this._init(),window.addEventListener("resize",()=>{if(this._topOffsetPx=this._computeTopOffset(),this._bottomOffsetPx=window.innerHeight*(1-this.bottomVH),this.observer){try{this.observer.disconnect()}catch{}this.observer=new IntersectionObserver(this.onIntersect,{root:null,rootMargin:`-${this._topOffsetPx}px 0px -${this._bottomOffsetPx}px 0px`,threshold:[0,.01,.5,1]}),this.sections.forEach(t=>this.observer.observe(t))}})}applyActive(e){this.menuItems.forEach((t,n)=>t.classList.toggle("active",n<=e))}applyCurrent(e){this.menuItems.forEach((t,n)=>t.classList.toggle("currentActive",n===e))}animateBarTo(e,t,n){if(!this.progressBar)return this.applyActive(n);this.currentTween&&(this.currentTween.kill(),this.currentTween=null),this._activatedDuringTween=!1,this.currentTween=ri.to(this.progressBar,{height:`${e}rem`,duration:t,ease:"power2.out",onUpdate:()=>{try{let i=this.currentTween?this.currentTween.progress():1;!this._activatedDuringTween&&i>=.9&&(this._activatedDuringTween=!0,this.applyActive(n),this.applyCurrent(n))}catch{}},onComplete:()=>{this._activatedDuringTween||this.applyActive(n),this.applyCurrent(n),this.currentTween=null}})}_defaultProgressMap(){return["0","3","6","9","12","15","18","21","24","27","30","33"]}getRemForMenu(e){if(this.progressMap&&typeof this.progressMap[e]<"u"){let t=parseFloat(this.progressMap[e]);if(!Number.isNaN(t))return t}return(e+1)*3}_bind(){this.onMenuClick=this.onMenuClick.bind(this),this.onIntersect=this.onIntersect.bind(this)}_init(){this.menuItems.forEach((n,i)=>n.addEventListener("click",s=>this.onMenuClick(s,i)));let e=`-${this._topOffsetPx}px 0px -${this._bottomOffsetPx}px 0px`;this.observer=new IntersectionObserver(this.onIntersect,{root:null,rootMargin:e,threshold:[0,.01,.5,1]}),setTimeout(()=>{this.sections.forEach(n=>this.observer.observe(n)),this._observerStarted=!0},350);let t=0;this.progressBar&&ri.set(this.progressBar,{height:"0rem"}),this.applyActive(t),this.applyCurrent(t),this.lastMenuIdx=t}onMenuClick(e,t){e.preventDefault();let n=this.menuItems[t],i=n&&n.getAttribute("data-target");if(!i)return this.updateStateByIndex(t,{source:"click"});let s=this.sections.find(h=>h.id===i);if(!s)return this.updateStateByIndex(t,{source:"click"});let o=this._computeTopOffset(),a=s.getBoundingClientRect(),c=window.scrollY+a.top-o;this.programmaticScroll=!0;let l=this.getRemForMenu(t);this.animateBarTo(l,.45,t),ri.to(window,{duration:.8,ease:"power2.inOut",scrollTo:{y:c,autoKill:!1},onComplete:()=>{setTimeout(()=>{this.programmaticScroll=!1},300)}})}onIntersect(e){this.programmaticScroll||(clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{let t=this._topOffsetPx,n=window.innerHeight*this.bottomVH,i=[],s=(t+n)/2;for(let a=0;a<this.sections.length;a++){let l=this.sections[a].getBoundingClientRect(),h=l.top+l.height/2;h>=t&&h<=n&&i.push({i:a,center:h})}let o=-1;if(i.length&&(i.sort((a,c)=>Math.abs(a.center-s)-Math.abs(c.center-s)),o=i[0].i),o===-1){let a={idx:-1,top:-1/0};this.sections.forEach((c,l)=>{let h=c.getBoundingClientRect();h.top<=n&&h.top>a.top&&(a={idx:l,top:h.top})}),o=a.idx}o!==-1&&(this.debug&&console.debug("[ProgressBar] onIntersect -> foundIdx",o,"sectionId",this.sections[o].id),this.updateStateByIndex(o,{source:"observer"}))},this.observerDebounceMs))}updateStateByIndex(e,t={source:"observer"}){let n=this.sections[e];if(!n)return;let i=n.id,s=typeof this.sectionToMenu[i]=="number"?this.sectionToMenu[i]:-1;if(s<0&&(s=Math.min(e,this.menuItems.length-1)),this.debug&&console.debug("[ProgressBar] updateStateByIndex",{sectionIdx:e,sectionId:i,menuIdx:s,lastMenuIdx:this.lastMenuIdx,source:t.source}),this.lastMenuIdx===s&&t.source!=="click"&&!this.currentTween)return;this.lastMenuIdx=s;let o=this.getRemForMenu(s),a=.4;if(t.source==="observer"&&(a=.3),t.source==="click"&&(a=.6),t.source==="init"){this.progressBar&&ri.set(this.progressBar,{height:`${o}rem`}),this.applyActive(s);return}this.animateBarTo(o,a,s)}};function xd(){let r=document.querySelector(".quickfacts-fadedimage");if(!r)return;let e=document.createElement("div");e.className="cw-mouse-circle",document.body.appendChild(e);let t=!1,n="radial-gradient(circle 0px at 50% 50%, transparent 0%, transparent 100%)";r.style.setProperty("--mask-x","50%"),r.style.setProperty("--mask-y","50%"),r.style.setProperty("--mask-r","0px");let i=120,s=2e3,o=null,a=null,c=0,l=0,h=0,u={x:50,y:50},f=null,d=0,_={x:0,y:0,r:0},g=!1;function p(v,x,I){let D=Number.isFinite(v)?v:_.x,P=Number.isFinite(x)?x:_.y,B=Number.isFinite(I)?Math.max(0,I):_.r;r.style.setProperty("--mask-x",`${D}px`),r.style.setProperty("--mask-y",`${P}px`),r.style.setProperty("--mask-r",`${B}px`),_.x=D,_.y=P,_.r=B,g&&(!Number.isFinite(v)||!Number.isFinite(x)||!Number.isFinite(I))&&console.debug("[minimalPointer] dropped invalid mask value",{x:v,y:x,r:I,used:{vx:D,vy:P,vr:B}})}function m(v){return 1-Math.pow(1-v,3)}function S(v){a||(a=v);let x=v-a,I=Math.min(1,x/s),D=m(I);h=c+(l-c)*D;let P=Math.max(.001,h/i);e.style.setProperty("--cw-scale",String(P)),e.style.setProperty("--cw-x",`${u.x}px`),e.style.setProperty("--cw-y",`${u.y}px`);let B=E||r.getBoundingClientRect(),G=Math.max(0,Math.min(B.width,u.x-B.left)),Z=Math.max(0,Math.min(B.height,u.y-B.top)),X=Number.isFinite(G)?G:0,O=Number.isFinite(Z)?Z:0,j=Number.isFinite(h)?Math.max(0,h):0;p(X,O,j),I<1?o=requestAnimationFrame(S):(o=null,a=null,c=h)}function M(v){o&&cancelAnimationFrame(o),c=h,l=v,a=null,o=requestAnimationFrame(S)}h=0;let y=i*2;e.style.width=`${y}px`,e.style.height=`${y}px`,e.style.display="none",e.style.setProperty("--cw-x","-9999px"),e.style.setProperty("--cw-y","-9999px"),e.style.setProperty("--cw-scale","0.001");let E=r.getBoundingClientRect();function A(){E=r.getBoundingClientRect()}A(),window.addEventListener("resize",A,{passive:!0}),window.addEventListener("scroll",()=>{if(A(),t){let v=Math.max(0,Math.min(E.width,u.x-E.left)),x=Math.max(0,Math.min(E.height,u.y-E.top)),I=Number.isFinite(v)?v:0,D=Number.isFinite(x)?x:0;r.style.setProperty("--mask-x",`${I}px`),r.style.setProperty("--mask-y",`${D}px`),e.style.setProperty("--cw-x",`${u.x}px`),e.style.setProperty("--cw-y",`${u.y}px`),e.style.setProperty("--cw-scale",String(Math.max(.001,h/i)))}},{passive:!0});let b=!1;function L(){b=!1,A();let v=E;e.style.setProperty("--cw-x",`${u.x}px`),e.style.setProperty("--cw-y",`${u.y}px`),e.style.setProperty("--cw-scale",String(Math.max(.001,h/i)));let x=Math.max(0,Math.min(v.width,u.x-v.left)),I=Math.max(0,Math.min(v.height,u.y-v.top)),D=Number.isFinite(x)?x:0,P=Number.isFinite(I)?I:0;r.style.setProperty("--mask-x",`${D}px`),r.style.setProperty("--mask-y",`${P}px`)}document.addEventListener("mousemove",v=>{u.x=v.clientX,u.y=v.clientY;let x=E;if(v.clientX>=x.left&&v.clientX<=x.right&&v.clientY>=x.top&&v.clientY<=x.bottom)f&&(clearTimeout(f),f=null,d+=1),t||(t=!0,e.style.display="block",e.classList.add("cw-active"),A(),M(i)),b||(b=!0,requestAnimationFrame(L));else if(t){f&&clearTimeout(f),d+=1;let D=d;f=setTimeout(()=>{f=null,t=!1,e.classList.remove("cw-active"),M(0);let P=()=>{D===d&&(o?requestAnimationFrame(P):D===d&&(e.style.display="none",r.style.setProperty("--mask-r","0px")))};P()},60)}})}ri.registerPlugin(Je);window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{new Za,new Io,xd()});console.log(Io);document.addEventListener("DOMContentLoaded",()=>{function r(e){e.forEach(t=>{let n=document.createElement("canvas");n.classList.add("webgl"),t.appendChild(n);try{new qa(n,t),console.log("commit achieved")}catch(i){console.error("Error initializing Experience:",i)}})}r(document.querySelectorAll('[data-3d="lining"]'))});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollToPlugin.js:
  (*!
   * ScrollToPlugin 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
