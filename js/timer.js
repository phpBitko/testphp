function startTimer() {
    var my_timer = document.getElementById("my_timer");
  //  var time = my_timer.innerHTML;
    var now = new Date();
   // var arr = time.split(":");
   // console.log(now);
    var future = new Date(2016, 02, 14, 9,0,0);

    var riz = future - now;


    var h = Math.floor(riz/3600000);
    riz = riz - h*3600000;
    var m = Math.floor(riz/60000);
    riz = riz - m*60000;
    var s = Math.floor(riz/1000);


   // console.log(riz + ""+ future);

  // console.log(sh+":"+sm+":"+ss + "::" + future);


    if (s == 0) {
        if (m == 0) {
            if (h == 0) {
                alert("Время вышло");
                window.location.reload();
                return;
            }
            h--;
            m = 60;
            if (h < 10) h = "0" + h;
        }
        m--;
        if (m < 10) m = "0" + m;
        s = 59;
    }
    else s--;
    if (s < 10) s = "0" + s;
    document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
    setTimeout(startTimer, 1000);
}