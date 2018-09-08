__d(function(e,t,s,i){'use strict';var r=t(88),o=t(74),n=t(80),a=t(15),c=(t(23),t(94)),d=t(83),l=t(82),u=t(13),b=a.WebSocketModule,h=0,p=1,y=2,f=3,_=0,v=(function(e){function t(e,s,i){babelHelpers.classCallCheck(this,t);var r=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));r.CONNECTING=h,r.OPEN=p,r.CLOSING=y,r.CLOSED=f,r.readyState=h,'string'==typeof s&&(s=[s]);var o=i||{},a=o.headers,c=void 0===a?{}:a,d=babelHelpers.objectWithoutProperties(o,["headers"]);if(d&&'string'==typeof d.origin&&(console.warn('Specifying `origin` as a WebSocket connection option is deprecated. Include it under `headers` instead.'),c.origin=d.origin,delete d.origin),Object.keys(d).length>0&&console.warn('Unrecognized WebSocket connection option(s) `'+Object.keys(d).join('`, `')+"`. Did you mean to put these under `headers`?"),Array.isArray(s)||(s=null),!t.isAvailable)throw new Error("Cannot initialize WebSocket module. Native module WebSocketModule is missing.");return r._eventEmitter=new n(b),r._socketId=_++,r._registerEvents(),b.connect(e,s,{headers:c},r._socketId),r}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"close",value:function(e,t){this.readyState!==this.CLOSING&&this.readyState!==this.CLOSED&&(this.readyState=this.CLOSING,this._close(e,t))}},{key:"send",value:function(e){if(this.readyState===this.CONNECTING)throw new Error('INVALID_STATE_ERR');if(e instanceof r){var t=a.BlobModule;return u(t,'Native module BlobModule is required for blob support'),void t.sendBlob(e,this._socketId)}if('string'!=typeof e){if(!(e instanceof ArrayBuffer||ArrayBuffer.isView(e)))throw new Error('Unsupported data type');b.sendBinary(l(e),this._socketId)}else b.send(e,this._socketId)}},{key:"ping",value:function(){if(this.readyState===this.CONNECTING)throw new Error('INVALID_STATE_ERR');b.ping(this._socketId)}},{key:"_close",value:function(e,t){var s='number'==typeof e?e:1e3,i='string'==typeof t?t:'';b.close(s,i,this._socketId)}},{key:"_unregisterEvents",value:function(){this._subscriptions.forEach(function(e){return e.remove()}),this._subscriptions=[]}},{key:"_registerEvents",value:function(){var e=this;this._subscriptions=[this._eventEmitter.addListener('websocketMessage',function(t){if(t.id===e._socketId){var s=t.data;switch(t.type){case'binary':s=d.toByteArray(t.data).buffer;break;case'blob':s=r.create(t.data)}e.dispatchEvent(new c('message',{data:s}))}}),this._eventEmitter.addListener('websocketOpen',function(t){t.id===e._socketId&&(e.readyState=e.OPEN,e.dispatchEvent(new c('open')))}),this._eventEmitter.addListener('websocketClosed',function(t){t.id===e._socketId&&(e.readyState=e.CLOSED,e.dispatchEvent(new c('close',{code:t.code,reason:t.reason})),e._unregisterEvents(),e.close())}),this._eventEmitter.addListener('websocketFailed',function(t){t.id===e._socketId&&(e.readyState=e.CLOSED,e.dispatchEvent(new c('error',{message:t.message})),e.dispatchEvent(new c('close',{message:t.message})),e._unregisterEvents(),e.close())})]}},{key:"binaryType",get:function(){return this._binaryType},set:function(e){if('blob'!==e&&'arraybuffer'!==e)throw new Error('binaryType must be either \'blob\' or \'arraybuffer\'');if('blob'===this._binaryType||'blob'===e){var t=a.BlobModule;u(t,'Native module BlobModule is required for blob support'),t&&('blob'===e?t.enableBlobSupport(this._socketId):t.disableBlobSupport(this._socketId))}this._binaryType=e}}]),t})(o.apply(void 0,['close','error','message','open']));v.CONNECTING=h,v.OPEN=p,v.CLOSING=y,v.CLOSED=f,v.isAvailable=!!b,s.exports=v},87);