__d(function(e,r,t,n){'use strict';var o=r(128),s=r(129),i=r(59),a=r(138),p=r(139),l=r(140),u=r(141),v=r(134),c=r(142),b=r(137),y=(r(149),r(13)),f=r(27);var T={CATransform3D:l,CGPoint:u,CGSize:b,UIEdgeInsets:p};function d(e){return e&&e.map(v)}var g={CGColor:v,CGColorArray:d,UIColor:v,UIColorArray:d,CGImage:c,UIImage:c,RCTImageSource:c,Color:v,ColorArray:d};t.exports=function(e,r,t){function n(e,r){if(!r)return e;if(!e)return r;for(var t in r)if(r.hasOwnProperty(t)){var o=r[t];if(e.hasOwnProperty(t)){var s=e[t];'object'==typeof o&&'object'==typeof s&&(o=n(s,o))}e[t]=o}return e}return a(e,function(){var t=i[e];y(null!=t&&null!=!t.NativeProps,'Native component for "%s" does not exist',e),t.uiViewClassName=e,t.validAttributes={},t.propTypes=r?'object'==typeof r.__propTypesSecretDontUseThesePlease?r.__propTypesSecretDontUseThesePlease:r.propTypes:null;for(var a=t.baseModuleName,p=babelHelpers.extends({},t.NativeProps);a;){var l=i[a];l?(p=babelHelpers.extends({},p,l.NativeProps),a=l.baseModuleName):(f(!1,'Base module "%s" does not exist',a),a=null)}for(var u in p){var v=!1,c={},b=T[p[u]];b&&(c.diff=b,v=!0);var d=g[p[u]];d&&(c.process=d,v=!0),t.validAttributes[u]=!v||c}return t.validAttributes.style=s,(function(e){i.genericBubblingEventTypes&&(e.bubblingEventTypes=n(e.bubblingEventTypes,i.genericBubblingEventTypes),delete i.genericBubblingEventTypes)})(t),(function(e){i.genericDirectEventTypes&&(e.directEventTypes=n(e.directEventTypes,i.genericDirectEventTypes),delete i.genericDirectEventTypes)})(t),o.processEventTypes(t),t})}},127);