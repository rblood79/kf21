var r1=280, r2=310;
var hours = [12,1,2,3,4,5,6,7,8,9,10,11];
hours.forEach(function(h) {
  var a = (h * 30 - 90) * Math.PI / 180;
  var x2 = (350 + r1 * Math.cos(a)).toFixed(2);
  var y2 = (350 + r1 * Math.sin(a)).toFixed(2);
  var lx = (350 + r2 * Math.cos(a) - 10).toFixed(2);
  var ly = (350 + r2 * Math.sin(a) - 10).toFixed(2);
  console.log("Hour " + h + " | M 350 350 L " + x2 + " " + y2 + " | label x=" + lx + " y=" + ly);
});
