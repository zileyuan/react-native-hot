__d(function(e,r,t,a){'use strict';r(79);var s=r(80),n=r(15).Networking,o=r(81);function l(e){var r=[];for(var t in e)r.push([t,e[t]]);return r}var u=1;var i=(function(e){function r(){babelHelpers.classCallCheck(this,r);var e=babelHelpers.possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,n));return e.isAvailable=!0,e}return babelHelpers.inherits(r,e),babelHelpers.createClass(r,[{key:"sendRequest",value:function(e,r,t,a,s,i,c,b,f,p){var v=o(s);v&&v.formData&&(v.formData=v.formData.map(function(e){return babelHelpers.extends({},e,{headers:l(e.headers)})}));var h=u++;n.sendRequest(e,t,h,l(a),babelHelpers.extends({},v,{trackingName:r}),i,c,b,p),f(h)}},{key:"abortRequest",value:function(e){n.abortRequest(e)}},{key:"clearCookies",value:function(e){n.clearCookies(e)}}]),r})(s);i=new i,t.exports=i},78);