__d(function(e,t,r,o){'use strict';var n=t(222),s=t(112),a=t(227),i=t(205),c=t(13),l=(function(e){function t(){var e,r,o,a,i=this;babelHelpers.classCallCheck(this,t);for(var l=arguments.length,p=Array(l),u=0;u<l;u++)p[u]=arguments[u];return r=o=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(p))),o.state=o._computeState(o.props,{ds:new n.DataSource({rowHasChanged:function(e,t){return!0},sectionHeaderHasChanged:function(){return!0},getSectionHeaderData:function(e,t){return o.state.sectionHeaderData[t]}}),sectionHeaderData:{}}),o._captureRef=function(e){o._listRef=e},o._renderFooter=function(){return s.createElement(i.props.FooterComponent,{key:"$footer"})},o._renderRow=function(e,t,r,n){return o.props.renderItem({item:e,index:r})},o._renderSectionHeader=function(e,t){var r=o.props.renderSectionHeader;return c(r,'Must provide renderSectionHeader with sections prop'),r({section:e})},o._renderSeparator=function(e,t){return s.createElement(i.props.SeparatorComponent,{key:e+t})},a=r,babelHelpers.possibleConstructorReturn(o,a)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"scrollToEnd",value:function(e){throw new Error('scrollToEnd not supported in legacy ListView.')}},{key:"scrollToIndex",value:function(e){throw new Error('scrollToIndex not supported in legacy ListView.')}},{key:"scrollToItem",value:function(e){throw new Error('scrollToItem not supported in legacy ListView.')}},{key:"scrollToLocation",value:function(e){throw new Error('scrollToLocation not supported in legacy ListView.')}},{key:"scrollToOffset",value:function(e){var t=e.animated,r=e.offset;this._listRef.scrollTo(this.props.horizontal?{x:r,animated:t}:{y:r,animated:t})}},{key:"getListRef",value:function(){return this._listRef}},{key:"setNativeProps",value:function(e){this._listRef&&this._listRef.setNativeProps(e)}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.setState(function(r){return t._computeState(e,r)})}},{key:"render",value:function(){return s.createElement(n,babelHelpers.extends({},this.props,{dataSource:this.state.ds,ref:this._captureRef,renderRow:this._renderRow,renderFooter:this.props.FooterComponent&&this._renderFooter,renderSectionHeader:this.props.sections&&this._renderSectionHeader,renderSeparator:this.props.SeparatorComponent&&this._renderSeparator}))}},{key:"_computeState",value:function(e,t){var r={};if(e.sections){c(!e.items,'Cannot have both sections and items props.');var o={};return e.sections.forEach(function(e,t){var n='s'+t;o[n]=e.data,r[n]=e}),{ds:t.ds.cloneWithRowsAndSections(o),sectionHeaderData:r}}return c(!e.sections,'Cannot have both sections and items props.'),{ds:t.ds.cloneWithRows(e.items),sectionHeaderData:r}}}]),t})(s.Component);l.defaultProps={keyExtractor:function(e,t){return e.key||String(t)},renderScrollComponent:function(e){return e.onRefresh?s.createElement(i,babelHelpers.extends({},e,{refreshControl:s.createElement(a,{refreshing:e.refreshing,onRefresh:e.onRefresh})})):s.createElement(i,e)}},r.exports=l},221);