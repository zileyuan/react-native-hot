__d(function(e,t,o,s){'use strict';var r=t(23),n=t(112),i=t(109),a=t(39),p=t(163),l=t(171),d=t(59),c=t(154),u=t(173),h=t(134),b=i.shape({type:i.oneOf(['RippleAndroid']),color:i.number,borderless:i.bool}),f=i.shape({type:i.oneOf(['ThemeAttrAndroid']),attribute:i.string.isRequired}),y=i.oneOfType([b,f]),P={top:20,left:20,right:20,bottom:30},g=c({displayName:'TouchableNativeFeedback',propTypes:babelHelpers.extends({},l.propTypes,{background:y,useForeground:i.bool}),statics:{SelectableBackground:function(){return{type:'ThemeAttrAndroid',attribute:'selectableItemBackground'}},SelectableBackgroundBorderless:function(){return{type:'ThemeAttrAndroid',attribute:'selectableItemBackgroundBorderless'}},Ripple:function(e,t){return{type:'RippleAndroid',color:h(e),borderless:t}},canUseNativeForeground:function(){return r.Version>=23}},mixins:[p.Mixin],getDefaultProps:function(){return{background:this.SelectableBackground()}},getInitialState:function(){return this.touchableGetInitialState()},componentDidMount:function(){u(this.props)},componentWillReceiveProps:function(e){u(e)},touchableHandleActivePressIn:function(e){this.props.onPressIn&&this.props.onPressIn(e),this._dispatchPressedStateChange(!0),this._dispatchHotspotUpdate(this.pressInLocation.locationX,this.pressInLocation.locationY)},touchableHandleActivePressOut:function(e){this.props.onPressOut&&this.props.onPressOut(e),this._dispatchPressedStateChange(!1)},touchableHandlePress:function(e){this.props.onPress&&this.props.onPress(e)},touchableHandleLongPress:function(e){this.props.onLongPress&&this.props.onLongPress(e)},touchableGetPressRectOffset:function(){return this.props.pressRetentionOffset||P},touchableGetHitSlop:function(){return this.props.hitSlop},touchableGetHighlightDelayMS:function(){return this.props.delayPressIn},touchableGetLongPressDelayMS:function(){return this.props.delayLongPress},touchableGetPressOutDelayMS:function(){return this.props.delayPressOut},_handleResponderMove:function(e){this.touchableHandleResponderMove(e),this._dispatchHotspotUpdate(e.nativeEvent.locationX,e.nativeEvent.locationY)},_dispatchHotspotUpdate:function(e,t){d.dispatchViewManagerCommand(a.findNodeHandle(this),d.RCTView.Commands.hotspotUpdate,[e||0,t||0])},_dispatchPressedStateChange:function(e){d.dispatchViewManagerCommand(a.findNodeHandle(this),d.RCTView.Commands.setPressed,[e])},render:function(){var e,t=n.Children.only(this.props.children),o=t.props.children;p.TOUCH_TARGET_DEBUG&&'View'===t.type.displayName&&(Array.isArray(o)||(o=[o]),o.push(p.renderDebugView({color:'brown',hitSlop:this.props.hitSlop}))),this.props.useForeground&&!g.canUseNativeForeground()&&console.warn("Requested foreground ripple, but it is not available on this version of Android. Consider calling TouchableNativeFeedback.canUseNativeForeground() and using a different Touchable if the result is false.");var s=this.props.useForeground&&g.canUseNativeForeground()?'nativeForegroundAndroid':'nativeBackgroundAndroid',r=babelHelpers.extends({},t.props,(e={},babelHelpers.defineProperty(e,s,this.props.background),babelHelpers.defineProperty(e,"accessible",!1!==this.props.accessible),babelHelpers.defineProperty(e,"accessibilityLabel",this.props.accessibilityLabel),babelHelpers.defineProperty(e,"accessibilityComponentType",this.props.accessibilityComponentType),babelHelpers.defineProperty(e,"accessibilityTraits",this.props.accessibilityTraits),babelHelpers.defineProperty(e,"children",o),babelHelpers.defineProperty(e,"testID",this.props.testID),babelHelpers.defineProperty(e,"onLayout",this.props.onLayout),babelHelpers.defineProperty(e,"hitSlop",this.props.hitSlop),babelHelpers.defineProperty(e,"onStartShouldSetResponder",this.touchableHandleStartShouldSetResponder),babelHelpers.defineProperty(e,"onResponderTerminationRequest",this.touchableHandleResponderTerminationRequest),babelHelpers.defineProperty(e,"onResponderGrant",this.touchableHandleResponderGrant),babelHelpers.defineProperty(e,"onResponderMove",this._handleResponderMove),babelHelpers.defineProperty(e,"onResponderRelease",this.touchableHandleResponderRelease),babelHelpers.defineProperty(e,"onResponderTerminate",this.touchableHandleResponderTerminate),e));return n.cloneElement(t,r)}});o.exports=g},170);