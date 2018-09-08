__d(function(a,t,r,n){for(var m=t(304),u=m({x:null}),V=m({y:null}),o=m({z:null}),e=m({w:null}),i=m({transformRotateRadians:null}),Q={transformRotateRadians:!0,transformScale:!0,transformTranslate:!0},v={transformRotateRadians:[0,0,0,1],transformTranslate:[0,0,0],transformScale:[1,1,1]},l=/([^\s,]+)/g,x=function(a,t){var r=a.slice(a.indexOf('(')+1,a.indexOf(')')).match(l)||[],n=r.map(function(a){return'\\b'+a+'\\b'}).join('|'),m=new RegExp(n,'g');return a.substring(a.indexOf('{')+1,a.lastIndexOf('}')).replace(m,function(a){var n=r.indexOf(a);return t[n]}).split('\n')},f={unroll:"function(matVar, m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15) {\n    m0 = matVar[0];\n    m1 = matVar[1];\n    m2 = matVar[2];\n    m3 = matVar[3];\n    m4 = matVar[4];\n    m5 = matVar[5];\n    m6 = matVar[6];\n    m7 = matVar[7];\n    m8 = matVar[8];\n    m9 = matVar[9];\n    m10 = matVar[10];\n    m11 = matVar[11];\n    m12 = matVar[12];\n    m13 = matVar[13];\n    m14 = matVar[14];\n    m15 = matVar[15];\n  }",matrixDiffers:"function(retVar, matVar, m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15) {\n    retVar = retVar ||\n    m0 !== matVar[0] ||\n    m1 !== matVar[1] ||\n    m2 !== matVar[2] ||\n    m3 !== matVar[3] ||\n    m4 !== matVar[4] ||\n    m5 !== matVar[5] ||\n    m6 !== matVar[6] ||\n    m7 !== matVar[7] ||\n    m8 !== matVar[8] ||\n    m9 !== matVar[9] ||\n    m10 !== matVar[10] ||\n    m11 !== matVar[11] ||\n    m12 !== matVar[12] ||\n    m13 !== matVar[13] ||\n    m14 !== matVar[14] ||\n    m15 !== matVar[15];\n  }",transformScale:"function(matVar, opVar) {\n    // Scaling matVar by opVar\n    var x = opVar[0];\n    var y = opVar[1];\n    var z = opVar[2];\n    matVar[0] = matVar[0] * x;\n    matVar[1] = matVar[1] * x;\n    matVar[2] = matVar[2] * x;\n    matVar[3] = matVar[3] * x;\n    matVar[4] = matVar[4] * y;\n    matVar[5] = matVar[5] * y;\n    matVar[6] = matVar[6] * y;\n    matVar[7] = matVar[7] * y;\n    matVar[8] = matVar[8] * z;\n    matVar[9] = matVar[9] * z;\n    matVar[10] = matVar[10] * z;\n    matVar[11] = matVar[11] * z;\n    matVar[12] = matVar[12];\n    matVar[13] = matVar[13];\n    matVar[14] = matVar[14];\n    matVar[15] = matVar[15];\n  }",transformTranslate:"function(matVar, opVar) {\n    // Translating matVar by opVar\n    var x = opVar[0];\n    var y = opVar[1];\n    var z = opVar[2];\n    matVar[12] = matVar[0] * x + matVar[4] * y + matVar[8] * z + matVar[12];\n    matVar[13] = matVar[1] * x + matVar[5] * y + matVar[9] * z + matVar[13];\n    matVar[14] = matVar[2] * x + matVar[6] * y + matVar[10] * z + matVar[14];\n    matVar[15] = matVar[3] * x + matVar[7] * y + matVar[11] * z + matVar[15];\n  }",transformRotateRadians:"function(matVar, q) {\n    // Rotating matVar by q\n    var xQuat = q[0], yQuat = q[1], zQuat = q[2], wQuat = q[3];\n    var x2Quat = xQuat + xQuat;\n    var y2Quat = yQuat + yQuat;\n    var z2Quat = zQuat + zQuat;\n    var xxQuat = xQuat * x2Quat;\n    var xyQuat = xQuat * y2Quat;\n    var xzQuat = xQuat * z2Quat;\n    var yyQuat = yQuat * y2Quat;\n    var yzQuat = yQuat * z2Quat;\n    var zzQuat = zQuat * z2Quat;\n    var wxQuat = wQuat * x2Quat;\n    var wyQuat = wQuat * y2Quat;\n    var wzQuat = wQuat * z2Quat;\n    // Step 1: Inlines the construction of a quaternion matrix ('quatMat')\n    var quatMat0 = 1 - (yyQuat + zzQuat);\n    var quatMat1 = xyQuat + wzQuat;\n    var quatMat2 = xzQuat - wyQuat;\n    var quatMat4 = xyQuat - wzQuat;\n    var quatMat5 = 1 - (xxQuat + zzQuat);\n    var quatMat6 = yzQuat + wxQuat;\n    var quatMat8 = xzQuat + wyQuat;\n    var quatMat9 = yzQuat - wxQuat;\n    var quatMat10 = 1 - (xxQuat + yyQuat);\n    // quatMat3/7/11/12/13/14 = 0, quatMat15 = 1\n\n    // Step 2: Inlines multiplication, takes advantage of constant quatMat cells\n    var a00 = matVar[0];\n    var a01 = matVar[1];\n    var a02 = matVar[2];\n    var a03 = matVar[3];\n    var a10 = matVar[4];\n    var a11 = matVar[5];\n    var a12 = matVar[6];\n    var a13 = matVar[7];\n    var a20 = matVar[8];\n    var a21 = matVar[9];\n    var a22 = matVar[10];\n    var a23 = matVar[11];\n\n    var b0  = quatMat0, b1 = quatMat1, b2 = quatMat2;\n    matVar[0] = b0 * a00 + b1 * a10 + b2 * a20;\n    matVar[1] = b0 * a01 + b1 * a11 + b2 * a21;\n    matVar[2] = b0 * a02 + b1 * a12 + b2 * a22;\n    matVar[3] = b0 * a03 + b1 * a13 + b2 * a23;\n    b0 = quatMat4; b1 = quatMat5; b2 = quatMat6;\n    matVar[4] = b0 * a00 + b1 * a10 + b2 * a20;\n    matVar[5] = b0 * a01 + b1 * a11 + b2 * a21;\n    matVar[6] = b0 * a02 + b1 * a12 + b2 * a22;\n    matVar[7] = b0 * a03 + b1 * a13 + b2 * a23;\n    b0 = quatMat8; b1 = quatMat9; b2 = quatMat10;\n    matVar[8] = b0 * a00 + b1 * a10 + b2 * a20;\n    matVar[9] = b0 * a01 + b1 * a11 + b2 * a21;\n    matVar[10] = b0 * a02 + b1 * a12 + b2 * a22;\n    matVar[11] = b0 * a03 + b1 * a13 + b2 * a23;\n  }"},s={transformScale:"function(matVar, opVar) {\n    // Scaling matVar known to be identity by opVar\n    matVar[0] = opVar[0];\n    matVar[1] = 0;\n    matVar[2] = 0;\n    matVar[3] = 0;\n    matVar[4] = 0;\n    matVar[5] = opVar[1];\n    matVar[6] = 0;\n    matVar[7] = 0;\n    matVar[8] = 0;\n    matVar[9] = 0;\n    matVar[10] = opVar[2];\n    matVar[11] = 0;\n    matVar[12] = 0;\n    matVar[13] = 0;\n    matVar[14] = 0;\n    matVar[15] = 1;\n  }",transformTranslate:"function(matVar, opVar) {\n    // Translating matVar known to be identity by opVar;\n    matVar[0] = 1;\n    matVar[1] = 0;\n    matVar[2] = 0;\n    matVar[3] = 0;\n    matVar[4] = 0;\n    matVar[5] = 1;\n    matVar[6] = 0;\n    matVar[7] = 0;\n    matVar[8] = 0;\n    matVar[9] = 0;\n    matVar[10] = 1;\n    matVar[11] = 0;\n    matVar[12] = opVar[0];\n    matVar[13] = opVar[1];\n    matVar[14] = opVar[2];\n    matVar[15] = 1;\n  }",transformRotateRadians:"function(matVar, q) {\n\n    // Rotating matVar which is known to be identity by q\n    var xQuat = q[0], yQuat = q[1], zQuat = q[2], wQuat = q[3];\n    var x2Quat = xQuat + xQuat;\n    var y2Quat = yQuat + yQuat;\n    var z2Quat = zQuat + zQuat;\n    var xxQuat = xQuat * x2Quat;\n    var xyQuat = xQuat * y2Quat;\n    var xzQuat = xQuat * z2Quat;\n    var yyQuat = yQuat * y2Quat;\n    var yzQuat = yQuat * z2Quat;\n    var zzQuat = zQuat * z2Quat;\n    var wxQuat = wQuat * x2Quat;\n    var wyQuat = wQuat * y2Quat;\n    var wzQuat = wQuat * z2Quat;\n    // Step 1: Inlines the construction of a quaternion matrix ('quatMat')\n    var quatMat0 = 1 - (yyQuat + zzQuat);\n    var quatMat1 = xyQuat + wzQuat;\n    var quatMat2 = xzQuat - wyQuat;\n    var quatMat4 = xyQuat - wzQuat;\n    var quatMat5 = 1 - (xxQuat + zzQuat);\n    var quatMat6 = yzQuat + wxQuat;\n    var quatMat8 = xzQuat + wyQuat;\n    var quatMat9 = yzQuat - wxQuat;\n    var quatMat10 = 1 - (xxQuat + yyQuat);\n    // quatMat3/7/11/12/13/14 = 0, quatMat15 = 1\n\n    // Step 2: Inlines the multiplication with identity matrix.\n    var b0  = quatMat0, b1 = quatMat1, b2 = quatMat2;\n    matVar[0] = b0;\n    matVar[1] = b1;\n    matVar[2] = b2;\n    matVar[3] = 0;\n    b0 = quatMat4; b1 = quatMat5; b2 = quatMat6;\n    matVar[4] = b0;\n    matVar[5] = b1;\n    matVar[6] = b2;\n    matVar[7] = 0;\n    b0 = quatMat8; b1 = quatMat9; b2 = quatMat10;\n    matVar[8] = b0;\n    matVar[9] = b1;\n    matVar[10] = b2;\n    matVar[11] = 0;\n    matVar[12] = 0;\n    matVar[13] = 0;\n    matVar[14] = 0;\n    matVar[15] = 1;\n  }"},y=function(a,t){return"  if (!didChange) {\n    var prevVal = result."+a+";\n    result."+a+' = '+t+";\n    didChange = didChange  || ("+t+" !== prevVal);\n  } else {\n    result."+a+' = '+t+";\n  }\n"},b=function(a,t,r,n){var m='round'in a,u=a.round,V='  ratio = (value - '+a.min+') / '+(a.max-a.min)+';\n';return a.extrapolate||(V+='  ratio = ratio > 1 ? 1 : (ratio < 0 ? 0 : ratio);\n'),V+='  '+n+' = '+(m?'Math.round('+u+' * ':'')+'('+t+' * (1 - ratio) + '+r+' * ratio)'+(m?') / '+u:'')+';\n'},c=function(a){return b(a,a.from,a.to,'nextScalarVal')},z=function(a){return'  nextScalarVal = '+JSON.stringify(a.value)+';\n'},q=function(a){return'  nextScalarVal = value >= '+a.threshold+' ? '+a.to+' : '+a.from+';\n'},p=function(a){return a+'ReuseOp'},M=function(a){return'\n'+a.join('\n')+'\n'},d=function(a,t,r,n){var m=p(t)+'['+n+']';return void 0!==a.from[r]&&void 0!==a.to[r]?'  '+a.from[r]!==a.to[r]?b(a,a.from[r],a.to[r],m):m+' = '+a.from[r]+';':'  '+m+' = '+v[t][n]+';'},w=[],h=0;h<16;h++)w.push('m'+h);var S={transformTranslate:!0,transformRotateRadians:!0,transformScale:!0},g=function(a){var t=[],r='return (function() {\n';for(var n in r+=(function(a){var t='';for(var r in a)Q[r]&&(t+='var '+p(r)+' = [];\n');return t})(a),r+='return function(result, value) {\n',r+='  var didChange = false;\n',r+='  var nextScalarVal;\n',r+='  var ratio;\n',a){var m=a[n];if('linear'===m.type)if(S[n]){t.push(n);var v=[d(m,n,u,0),d(m,n,V,1),d(m,n,o,2)];n===i&&v.push(d(m,n,e,3)),r+=M(v)}else r+=c(m),r+=y(n,'nextScalarVal');else'constant'===m.type?(r+=z(m),r+=y(n,'nextScalarVal')):'step'===m.type?(r+=q(m),r+=y(n,'nextScalarVal')):'identity'===m.type&&(r+='  nextScalarVal = value;\n',r+=y(n,'nextScalarVal'))}return t.length&&(r+=M((function(a){var t=["  var transform = result.transform !== undefined ? result.transform : (result.transform = [{ matrix: [] }]);  var transformMatrix = transform[0].matrix;"];t.push.apply(t,x(f.unroll,['transformMatrix'].concat(w)));for(var r=0;r<a.length;r++){var n=a[r];0===r?t.push.apply(t,x(s[n],['transformMatrix',p(n)])):t.push.apply(t,x(f[n],['transformMatrix',p(n)]))}return t.push.apply(t,x(f.matrixDiffers,['didChange','transformMatrix'].concat(w))),t})(t))),r+='  return didChange;\n',r+='};\n',r+='})()'};r.exports=function(a){var t=null;return function(r,n){return null===t&&(t=Function(g(a))()),t(r,n)}}},303);