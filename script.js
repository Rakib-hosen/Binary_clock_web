var b = "#03A8FF", r="#DB2160", g="#94BE54", bg = "backgroundColor",w="#1E1E1E";


function looping(){
    let d= new Date();
    let sec = d.getSeconds(), min = d.getMinutes(), hour = d.getHours();
    let sa = Math.floor(sec%10);
    let ma = Math.floor(min%10);
    let ha = Math.floor(hour%10);
    let sb = Math.floor((sec/10)%10);
    let mb = Math.floor((min/10)%10);
    let hb = Math.floor((hour/10)%10);


    $(".clock").css(bg, w);
    if (sa === 1) {$("#s1").css(bg , r);};
    if (sa === 2) {$("#s2").css(bg , r);};
    if (sa === 3) {$("#s2").css(bg , r);$("#s1").css(bg , r);};
    if (sa === 4) {$("#s4").css(bg , r);};
    if (sa === 5) {$("#s4").css(bg , r);$("#s1").css(bg , r);};
    if (sa === 6) {$("#s4").css(bg , r);$("#s2").css(bg , r);};
    if (sa === 7) {$("#s4").css(bg , r);$("#s2").css(bg , r);$("#s1").css(bg , r);};
    if (sa === 8) {$("#s8").css(bg , r);};
    if (sa === 9) {$("#s8").css(bg , r);$("#s1").css(bg , r);};
    $("#nsecond1").html(sa);

    if (sb === 1) {$("#s10").css(bg , r);};
    if (sb === 2) {$("#s20").css(bg , r);};
    if (sb === 3) {$("#s20").css(bg , r);$("#s10").css(bg , r);};
    if (sb === 4) {$("#s40").css(bg , r);};
    if (sb === 5) {$("#s40").css(bg , r);$("#s10").css(bg , r);};
    $("#nsecond").html(sb);

    if (ma === 1) {$("#m1").css(bg , g);};
    if (ma === 2) {$("#m2").css(bg , g);};
    if (ma === 3) {$("#m2").css(bg , g);$("#m1").css(bg , g);};
    if (ma === 4) {$("#m4").css(bg , g);};
    if (ma === 5) {$("#m4").css(bg , g);$("#m1").css(bg , g);};
    if (ma === 6) {$("#m4").css(bg , g);$("#m2").css(bg , g);};
    if (ma === 7) {$("#m4").css(bg , g);$("#m2").css(bg , g);$("#m1").css(bg , g);};
    if (ma === 8) {$("#m8").css(bg , g);};
    if (ma === 9) {$("#m8").css(bg , g);$("#m1").css(bg , g);};
    $("#nminute1").html(ma);

    if (mb === 1) {$("#m10").css(bg , g);};
    if (mb === 2) {$("#m20").css(bg , g);};
    if (mb === 3) {$("#m20").css(bg , g);$("#m10").css(bg , g);};
    if (mb === 4) {$("#m40").css(bg , g);};
    if (mb === 5) {$("#m40").css(bg , g);$("#m10").css(bg , g);};
    $("#nminute").html(mb);

    if (ha === 1) {$("#h1").css(bg , b);};
    if (ha === 2) {$("#h2").css(bg , b);};
    if (ha === 3) {$("#h2").css(bg , b);$("#h1").css(bg , b);};
    if (ha === 4) {$("#h4").css(bg , b);};
    if (ha === 5) {$("#h4").css(bg , b);$("#h1").css(bg , b);};
    if (ha === 6) {$("#h4").css(bg , b);$("#h2").css(bg , b);};
    if (ha === 7) {$("#h4").css(bg , b);$("#h2").css(bg , b);$("#s1").css(bg , b);};
    if (ha === 8) {$("#h8").css(bg , b);};
    if (ha === 9) {$("#h8").css(bg , b);$("#h1").css(bg , b);};
    $("#nhour1").html(ha);

    if (hb === 1) {$("#h10").css(bg , b);};
    if (hb === 2) {$("#h20").css(bg , b);};
    if (hb === 3) {$("#h20").css(bg , b);$("#h10").css(bg , b);};
    $("#nhour").html(hb);
    

};


setInterval(looping);