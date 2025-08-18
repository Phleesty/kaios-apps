(function () {
'use strict';
try {
window.addEventListener('message', function (e) {
try {
if (e && e.data === 'closeAppList') {
if (typeof v !== 'undefined' && v && v.default && v.default.request) {
v.default.request('closeSheet', 'appList');
}
}
} catch (err) {
// no-op
}
});
window.__closeAppListFast = function () {
  try {
    if (typeof v !== 'undefined' && v && v.default && v.default.request) {
      v.default.request('closeSheet', 'appList');
    }
  } catch (err) {
    // no-op
  }
};
} catch (errOuter) {
// no-op
}
})();