!function(Q){var U={};function F(B){if(U[B])return U[B].exports;var n=U[B]={i:B,l:!1,exports:{}};return Q[B].call(n.exports,n,n.exports,F),n.l=!0,n.exports}F.m=Q,F.c=U,F.d=function(Q,U,B){F.o(Q,U)||Object.defineProperty(Q,U,{enumerable:!0,get:B})},F.r=function(Q){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},F.t=function(Q,U){if(1&U&&(Q=F(Q)),8&U)return Q;if(4&U&&"object"==typeof Q&&Q&&Q.__esModule)return Q;var B=Object.create(null);if(F.r(B),Object.defineProperty(B,"default",{enumerable:!0,value:Q}),2&U&&"string"!=typeof Q)for(var n in Q)F.d(B,n,function(U){return Q[U]}.bind(null,n));return B},F.n=function(Q){var U=Q&&Q.__esModule?function(){return Q.default}:function(){return Q};return F.d(U,"a",U),U},F.o=function(Q,U){return Object.prototype.hasOwnProperty.call(Q,U)},F.p="srh-rvl-typescript",F(F.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./source/modules/formWatcher.ts\nconst fragment = {};\r\nconst internal = {};\r\ninternal.readAsObject = (target) => {\r\n    let inputs = target.querySelectorAll('input');\r\n    let values = {};\r\n    inputs.forEach((input) => {\r\n        if (input.id && input.id != '') {\r\n            values[input.id] = input.value;\r\n        }\r\n    });\r\n    return values;\r\n};\r\nfragment.installWatcher = (target, changedCallback) => {\r\n    target.addEventListener('submit', (evt) => {\r\n        evt.preventDefault();\r\n        changedCallback(internal.readAsObject(target));\r\n    });\r\n};\r\n/* harmony default export */ var formWatcher = (fragment);\r\n\n// CONCATENATED MODULE: ./source/index.ts\n\r\nconst source_form = document.querySelector('form');\r\nformWatcher.installWatcher(source_form, (result) => {\r\n    console.log(`a: ${result.numA}`);\r\n    console.log(`b: ${result.numB}`);\r\n    console.log(`\\na + b = ${parseInt(result.numA) + parseInt(result.numB)}`);\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvbW9kdWxlcy9mb3JtV2F0Y2hlci50cz84MmVjIiwid2VicGFjazovLy8uL3NvdXJjZS9pbmRleC50cz83Y2QzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLFFBQVEsR0FBNEIsRUFBRSxDQUFDO0FBQzdDLE1BQU0sUUFBUSxHQUE0QixFQUFFLENBQUM7QUFFN0MsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLE1BQXVCLEVBQUUsRUFBRTtJQUNsRCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsSUFBSSxNQUFNLEdBQStCLEVBQUUsQ0FBQztJQUU1QyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDdkIsSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQzlCLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUNoQztJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsUUFBUSxDQUFDLGNBQWMsR0FBRyxDQUFDLE1BQXVCLEVBQUUsZUFBMEQsRUFBRSxFQUFFO0lBQ2hILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUN4QyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsZUFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVhLHdEQUFRLEVBQUM7OztBQ3ZCcUM7QUFFN0QsTUFBTSxXQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUUsQ0FBQztBQUU3QyxXQUFTLENBQUMsY0FBYyxDQUFDLFdBQUksRUFBRSxDQUFDLE1BQStCLEVBQUUsRUFBRTtJQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzVFLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmcmFnbWVudDogeyBbcHJvcDogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuY29uc3QgaW50ZXJuYWw6IHsgW3Byb3A6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG5pbnRlcm5hbC5yZWFkQXNPYmplY3QgPSAodGFyZ2V0OiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcclxuICBsZXQgaW5wdXRzID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbiAgbGV0IHZhbHVlczogeyBbcHJvcDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHJcbiAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICBpZiAoaW5wdXQuaWQgJiYgaW5wdXQuaWQgIT0gJycpIHtcclxuICAgICAgdmFsdWVzW2lucHV0LmlkXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdmFsdWVzO1xyXG59O1xyXG5cclxuZnJhZ21lbnQuaW5zdGFsbFdhdGNoZXIgPSAodGFyZ2V0OiBIVE1MRm9ybUVsZW1lbnQsIGNoYW5nZWRDYWxsYmFjazogKHJlc3VsdDogeyBbcHJvcDogc3RyaW5nXTogYW55IH0pID0+IHZvaWQpID0+IHtcclxuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjaGFuZ2VkQ2FsbGJhY2soaW50ZXJuYWwucmVhZEFzT2JqZWN0KHRhcmdldCkpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnJhZ21lbnQ7XHJcbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgZm9ybVV0aWxzIH0gZnJvbSAnLi9tb2R1bGVzL2Zvcm1XYXRjaGVyJztcclxuXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykhO1xyXG5cclxuZm9ybVV0aWxzLmluc3RhbGxXYXRjaGVyKGZvcm0sIChyZXN1bHQ6IHsgW3Byb3A6IHN0cmluZ106IGFueSB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coYGE6ICR7cmVzdWx0Lm51bUF9YCk7XHJcbiAgY29uc29sZS5sb2coYGI6ICR7cmVzdWx0Lm51bUJ9YCk7XHJcbiAgY29uc29sZS5sb2coYFxcbmEgKyBiID0gJHtwYXJzZUludChyZXN1bHQubnVtQSkgKyBwYXJzZUludChyZXN1bHQubnVtQil9YCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);