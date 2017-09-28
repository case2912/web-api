// ジャイロセンサー
!(() => {
  let max_x = 0;
  let max_y = 0;
  let max_z = 0;
  let min_x = 0;
  let min_y = 0;
  let min_z = 0;
  window.addEventListener("deviceorientation", deviceorientationHandler);

  function deviceorientationHandler(event) {
    var x = Math.floor(event.beta);
    var y = Math.floor(event.gamma);
    var z = Math.floor(event.alpha);
    if (x >= max_x) max_x = x;
    if (y >= max_y) max_y = y;
    if (z >= max_z) max_z = z;
    if (x <= min_x) min_x = x;
    if (y <= min_y) min_y = y;
    if (z <= min_z) min_z = z;
    document.getElementById('axis').innerHTML =
      "<b>axis:</b> <br/>value (" +
      x + ", " +
      y + ", " +
      z + ")<br/>max (" +
      max_x + ", " +
      max_y + ", " +
      max_z + ")<br/>min (" +
      min_x + ", " +
      min_y + ", " +
      min_z + ")"
  }
})();
// 回転速度
!(() => {
  let max_x = 0;
  let max_y = 0;
  let max_z = 0;
  let min_x = 0;
  let min_y = 0;
  let min_z = 0;
  window.addEventListener("devicemotion", deviceorientationHandler);

  function deviceorientationHandler(event) {
    var x = Math.floor(event.rotationRate.beta);
    var y = Math.floor(event.rotationRate.gamma);
    var z = Math.floor(event.rotationRate.alpha);
    if (x >= max_x) max_x = x;
    if (y >= max_y) max_y = y;
    if (z >= max_z) max_z = z;
    if (x <= min_x) min_x = x;
    if (y <= min_y) min_y = y;
    if (z <= min_z) min_z = z;
    document.getElementById('rotationRate').innerHTML =
      "<b>rotationRate:</b> <br/>value (" +
      x + ", " +
      y + ", " +
      z + ")<br/>max (" +
      max_x + ", " +
      max_y + ", " +
      max_z + ")<br/>min (" +
      min_x + ", " +
      min_y + ", " +
      min_z + ")"
  }
})();
//加速度
!(() => {
  let max_x = 0;
  let max_y = 0;
  let max_z = 0;
  let min_x = 0;
  let min_y = 0;
  let min_z = 0;
  window.addEventListener("devicemotion", devicemotionHandler);

  function devicemotionHandler(event) {
    var x = Math.floor(event.acceleration.x);
    var y = Math.floor(event.acceleration.y);
    var z = Math.floor(event.acceleration.z);
    if (x >= max_x) max_x = x;
    if (y >= max_y) max_y = y;
    if (z >= max_z) max_z = z;
    if (x <= min_x) min_x = x;
    if (y <= min_y) min_y = y;
    if (z <= min_z) min_z = z;
    document.getElementById('acceleration').innerHTML =
      "<b>acceleration:</b> <br/>value (" +
      x + ", " +
      y + ", " +
      z + ")<br/>max (" +
      max_x + ", " +
      max_y + ", " +
      max_z + ")<br/>min (" +
      min_x + ", " +
      min_y + ", " +
      min_z + ")"
  }
})();
!(() => {
  let max_x = 0;
  let max_y = 0;
  let max_z = 0;
  let min_x = 0;
  let min_y = 0;
  let min_z = 0;
  window.addEventListener("devicemotion", devicemotionHandler);

  function devicemotionHandler(event) {
    var x = Math.floor(event.accelerationIncludingGravity.x);
    var y = Math.floor(event.accelerationIncludingGravity.y);
    var z = Math.floor(event.accelerationIncludingGravity.z);
    if (x >= max_x) max_x = x;
    if (y >= max_y) max_y = y;
    if (z >= max_z) max_z = z;
    if (x <= min_x) min_x = x;
    if (y <= min_y) min_y = y;
    if (z <= min_z) min_z = z;
    document.getElementById('accelerationIncludingGravity').innerHTML =
      "<b>accelerationIncludingGravity:</b> <br/>value (" +
      x + ", " +
      y + ", " +
      z + ")<br/>max (" +
      max_x + ", " +
      max_y + ", " +
      max_z + ")<br/>min (" +
      min_x + ", " +
      min_y + ", " +
      min_z + ")"
  }
})();
(function() {
  function TouchEventHandler(event) {
    // event.preventDefault();
    const count = event.changedTouches.length;
    document.getElementById('touch').innerHTML = "<b>touch:</b> <br/>count " + count + "<br/>"
    const p = event.changedTouches;
    for (var i = 0; i < p.length; i++) {
      document.getElementById('touch').innerHTML += "identifier " +
        p[i].identifier + "<br/>page (" +
        p[i].pageX + ", " +
        p[i].pageY + ")<br/>client (" +
        p[i].clientX + ", " +
        p[i].clientY + ")<br/>screen (" +
        p[i].screenX + ", " +
        p[i].screenY + ")<br/>"
    }
  }

  function TouchEndHandler() {
    document.getElementById('touch').innerHTML = ""
  }
  document.addEventListener("touchstart", TouchEventHandler);
  document.addEventListener("touchmove", TouchEventHandler);
  document.addEventListener("touchend", TouchEndHandler);
})();
// document.getElementById('useragent').innerHTML = "<b>userAgent:</b><br/>"+window.navigator.userAgent
