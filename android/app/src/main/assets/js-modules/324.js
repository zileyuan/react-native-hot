__d(function(t,e,o,i){'use strict';var n=e(12),a=e(303),l=e(320),r=n.Dimensions.get('window').width,f={Title:{position:'absolute',top:20,left:0,right:0,alignItems:'center',height:44,backgroundColor:'transparent'},LeftButton:{position:'absolute',top:20,left:0,overflow:'hidden',opacity:1,height:44,backgroundColor:'transparent'},RightButton:{position:'absolute',top:20,right:0,overflow:'hidden',opacity:1,alignItems:'flex-end',height:44,backgroundColor:'transparent'}},p={Left:{Title:l(f.Title,{left:-r/2,opacity:0}),LeftButton:l(f.LeftButton,{left:0,opacity:0}),RightButton:l(f.RightButton,{opacity:0})},Center:{Title:l(f.Title,{left:0,opacity:1}),LeftButton:l(f.LeftButton,{left:0,opacity:1}),RightButton:l(f.RightButton,{opacity:1})},Right:{Title:l(f.Title,{left:r/2,opacity:0}),LeftButton:l(f.LeftButton,{left:0,opacity:0}),RightButton:l(f.RightButton,{opacity:0})}},u=100;function g(t,e){return{Title:a({opacity:{type:'linear',from:t.Title.opacity,to:e.Title.opacity,min:0,max:1},left:{type:'linear',from:t.Title.left,to:e.Title.left,min:0,max:1,extrapolate:!0}}),LeftButton:a({opacity:{type:'linear',from:t.LeftButton.opacity,to:e.LeftButton.opacity,min:0,max:1,round:u},left:{type:'linear',from:t.LeftButton.left,to:e.LeftButton.left,min:0,max:1}}),RightButton:a({opacity:{type:'linear',from:t.RightButton.opacity,to:e.RightButton.opacity,min:0,max:1,round:u},left:{type:'linear',from:t.RightButton.left,to:e.RightButton.left,min:0,max:1,extrapolate:!0}})}}var h={RightToCenter:g(p.Right,p.Center),CenterToLeft:g(p.Center,p.Left),RightToLeft:g(p.Right,p.Left)};o.exports={General:{NavBarHeight:44,StatusBarHeight:20,TotalNavHeight:64},Interpolators:h,Stages:p}},324);