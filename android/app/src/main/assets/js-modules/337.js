__d(function(e,t,a,r){'use strict';Object.defineProperty(r,"__esModule",{value:!0});var l=t(46),n=babelHelpers.interopRequireDefault(l),i=t(12),o=t(338),s=babelHelpers.interopRequireDefault(o),u=t(502),b=babelHelpers.interopRequireDefault(u),d=t(511),c=t(512),p=babelHelpers.interopRequireDefault(c),f=t(520),h=babelHelpers.interopRequireDefault(f),m=t(522),T=babelHelpers.interopRequireDefault(m),y=t(528),S=babelHelpers.interopRequireDefault(y),v=i.Dimensions.get('window'),B=v.width,H=(v.height,(function(e){function t(e){babelHelpers.classCallCheck(this,t);var a=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={currentTab:'News',hideTabBar:!1},a.tabNames=[["\u65b0\u95fb","fiber-new","News",n.default.createElement(p.default,a.props)],["\u89c6\u9891","videocam","VideoPage",n.default.createElement(T.default,a.props)],["\u53d1\u73b0","public","Find",n.default.createElement(h.default,a.props)],["\u6211\u7684","person","My",n.default.createElement(S.default,a.props)]],t.hideTabBar=t.hideTabBar.bind(a),t.showTabBar=t.showTabBar.bind(a),a}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){var e=this;return n.default.createElement(b.default,{hidesTabTouch:!0,tabBarStyle:[w.tabbar,this.state.hideTabBar?w.hide:{}],sceneStyle:{}},this.tabNames.map(function(t,a){return n.default.createElement(b.default.Item,{key:t[2],tabStyle:w.tab,title:t[0],titleStyle:w.tabText,selected:e.state.currentTab===t[2],selectedTitleStyle:{color:"#fa4747"},renderIcon:function(){return n.default.createElement(s.default,{style:w.icon,name:t[1]})},renderSelectedIcon:function(){return n.default.createElement(s.default,{style:w.selectedIcon,name:t[1]})},onPress:function(){return e.setState({currentTab:t[2]})}},t[3])}))}}],[{key:"showTabBar",value:function(e){this.setState({hideTabBar:!1})}},{key:"hideTabBar",value:function(e){this.setState({hideTabBar:!0})}}]),t})(l.Component));r.default=H;var w=i.StyleSheet.create({tabbar:{height:(0,d.px2dp)(46),alignItems:'center',justifyContent:'center',backgroundColor:'#fff'},hide:{transform:[{translateX:B}]},tab:{},icon:{position:'relative',top:(0,d.px2dp)(3),fontSize:(0,d.px2dp)(22)},selectedIcon:{position:'relative',top:(0,d.px2dp)(3),color:'#fa4747',fontSize:(0,d.px2dp)(22)},tabText:{fontSize:(0,d.px2dp)(10),fontWeight:'bold'}})},337);