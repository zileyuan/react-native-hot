__d(function(e,r,t,n){'use strict';var a=r(36),o=r(109),l=r(112),s=r(39),i=r(113),p=r(127),u=(function(e){function r(){return babelHelpers.classCallCheck(this,r),babelHelpers.possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return babelHelpers.inherits(r,e),babelHelpers.createClass(r,[{key:"render",value:function(){return l.createElement(c,this.props)}}]),r})(s.NativeComponent);u.propTypes=babelHelpers.extends({},i,{styleAttr:o.oneOf(['Horizontal','Normal','Small','Large','Inverse','SmallInverse','LargeInverse']),animating:o.bool,indeterminate:function(e,r,t){for(var n=arguments.length,a=Array(n>3?n-3:0),l=3;l<n;l++)a[l-3]=arguments[l];return o.bool.apply(o,[e,r,t].concat(a))||(function(){var t=e[r],n=e.styleAttr;if(!t&&'Horizontal'!==n)return new Error('indeterminate=false is only valid for styleAttr=Horizontal')})()},progress:o.number,color:a,testID:o.string}),u.defaultProps={styleAttr:'Normal',indeterminate:!0,animating:!0};var c=p('AndroidProgressBar',u,{nativeOnly:{animating:!0}});t.exports=u},108);