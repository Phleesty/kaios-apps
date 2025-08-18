(function () {
'use strict';
try {
console.log('[patch] message hook installed');

text
function closeAppList() {
  try {
    if (window.Service && typeof window.Service.request === 'function') {
      console.log('[patch] close via Service.request');
      window.Service.request('closeSheet', 'appList');
      return;
    }
  } catch (err) {
    console.log('[patch] Service.request error', err);
  }
  try {
    if (typeof v !== 'undefined' && v && v.default && typeof v.default.request === 'function') {
      console.log('[patch] close via v.default.request');
      v.default.request('closeSheet', 'appList');
      return;
    }
  } catch (err) {
    console.log('[patch] v.default.request error', err);
  }
  console.log('[patch] no Service/v available');
}

window.addEventListener('message', function (e) {
  try {
    var data = e && e.data;
    if (data === 'flipclose' || data === 'closeAppList') {
      // опционально мягкий сброс фокуса (если хочешь):
      // try {
      //   if (window.app && window.app.panels && window.app.panels.appList) {
      //     window.app.panels.appList.setState({ focus: window.app.panels.appList.initFocus });
      //   }
      // } catch (err) {}
      closeAppList();
      // на всякий случай повтор после одного-двух кадров:
      setTimeout(closeAppList, 16);
      setTimeout(closeAppList, 48);
    }
  } catch (err) {
    console.log('[patch] message handler error', err);
  }
});

} catch (errOuter) {
console.log('[patch] init error', errOuter);
}
})();