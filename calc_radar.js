const cx = 350, cy = 350;
const areas = [
  ['Area 1 (Blue/Dark)', [200, 250, 260, 230, 180, 160, 120, 150, 200, 240, 270, 220]],
  ['Area 2 (Teal/Green)', [160, 180, 200, 240, 250, 220, 180, 140, 120, 150, 170, 140]],
  ['Area 3 (Red/Pink)', [100, 130, 170, 150, 120, 90, 140, 180, 160, 130, 100, 110]],
];
areas.forEach(function(item) {
  var name = item[0];
  var radii = item[1];
  var pts = [];
  for (var h = 0; h < 12; h++) {
    var deg = h * 30 - 90;
    var rad = deg * Math.PI / 180;
    var x = Math.round((cx + radii[h] * Math.cos(rad)) * 100) / 100;
    var y = Math.round((cy + radii[h] * Math.sin(rad)) * 100) / 100;
    pts.push([x, y]);
  }
  var d = 'M ' + pts[0][0] + ',' + pts[0][1];
  for (var i = 1; i < pts.length; i++) {
    d += ' L ' + pts[i][0] + ',' + pts[i][1];
  }
  d += ' Z';
  console.log('=== ' + name + ' ===');
  console.log(d);
  console.log('');
});
