__d(function(n,e,t,i){'use strict';e(13);var c=!1,o=0,a={installReactHook:function(n){n,!0},setEnabled:function(n){c!==n&&(c=n)},isEnabled:function(){return c},beginEvent:function(e,t){c&&(e='function'==typeof e?e():e,n.nativeTraceBeginSection(131072,e,t))},endEvent:function(){c&&n.nativeTraceEndSection(131072)},beginAsyncEvent:function(e){var t=o;return c&&(o++,e='function'==typeof e?e():e,n.nativeTraceBeginAsyncSection(131072,e,t,0)),t},endAsyncEvent:function(e,t){c&&(e='function'==typeof e?e():e,n.nativeTraceEndAsyncSection(131072,e,t,0))},counterEvent:function(e,t){c&&(e='function'==typeof e?e():e,n.nativeTraceCounter&&n.nativeTraceCounter(131072,e,t))},attachToRelayProfiler:function(n){n.attachProfileHandler('*',function(n){var e=a.beginAsyncEvent(n);return function(){a.endAsyncEvent(n,e)}}),n.attachAggregateHandler('*',function(n,e){a.beginEvent(n),e(),a.endEvent()})},swizzleJSON:function(){a.measureMethods(JSON,'JSON',['parse','stringify'])},measureMethods:function(n,e,t){},measure:function(n,e,t){return t}};t.exports=a},19);