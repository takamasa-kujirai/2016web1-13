var separate_time = function(time){
  var src = time.getSeconds();
  var min = time.getMinutes();
  var hours = time.getHours();
  var days = time.getDate();
  var month = time.getMonth();
  var year = time.getFullYear();
  return [sec, min, hours, days, month, year];
}

var now = new Date();
var counter = separate_time(now);
document.getElementById('countdown').textContent = 
counter[5] + '年' + 
counter[4] + '月' + 
counter[3] + '日' + 
counter[2] + '時' + 
counter[1] + '分' + 
counter[0] + '秒';

var separate_time = function(time){
  var src = Math.floor((time / 1000) % 60);
  var min = Math.floor((time / 1000 / 60) % 60);
  var hours = Math.floor((time / 1000 / 60 / 60) % 24);
  var days = Math.floor((time / 1000 /60 / 60 / 24);
  return [src, min, hours days];
}
var now = new Date();
var target = new Date(2020,7,24,0,0,0,0,);
var diff = target.getTime() - now.getTime();
var counter = separate_time(diff);
document.getElementById('countdown').textContent = 
'東京オリンピックまであと・・・' +
counter[3] + '日' +
counter[2] + '時間' +
counter[1] + '分' +
counter[0] + '秒';















