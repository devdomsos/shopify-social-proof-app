`<div style="text-align: left; padding-left:5%; color:#000000; margin-bottom: 15px;">
<script>
    function startTime() {
     var today = new Date();
     var h = today.getHours();
     var m = today.getMinutes();
     var s = today.getSeconds();
         var count= 0;
         var max = 10;
         var min = 5;
         var range = max - min;
            if (s < 11) { count = 0.73 * max + m / 10
                       } else if (s > 12 && s < 30) { count = 0.63 * max + m / 10
                               } else if (s > 31 && s < 45) { count = min + 0.55 * range + m / 10
                                             } else if (s > 46 && s < 51) { count = 0.89 * range + min - s + 44 + m / 10 
                                                } else if (s == 52 || s == 55 || s == 58 || s == 59) { count = 0.92 * max - s + 54 + m / 10
                                                                          } else { count = 0.87 * max + m / 10}
                    m = checkTime(m);
                    s = checkTime(s);
     document.getElementById('txt').innerHTML =
                "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong>" + Math.round(count) + "</strong> ogląda ten produkt";
             var t = setTimeout(startTime, 500);
        }
    function checkTime(i) {
         if (i < 10) {i = i};
     return i;
    }
</script>            
    <body onload="startTime()">
                   <img src="https://i.imgur.com/kCe9CqS.gif"
                         alt="live beacon"
                         style="height: 32px; margin-bottom: -34px;">
        <div id="txt"></div>
    </body>
</div>`
