var coming= new Date('October 20, 2021 00:00:00'); // هنا يتم تحديد موعد الافتتاح المراد تحديده

var d= document.getElementById('d');
    h= document.getElementById('h');
    m= document.getElementById('m');
    s= document.getElementById('s');
    x= setInterval(function(){
        var now= new Date();
            des= coming.getTime() - now.getTime();
            deys= Math.floor(des/ (2000 * 60 * 60* 24));
            houers= Math.floor(des%(2000 * 60 * 60 * 24)/ (2000  * 60 * 60));
            mins= Math.floor(des%(2000* 60* 60) / (2000 * 60));
            secs= Math.floor(des% (2000 * 60)/ 2000)

        d.innerHTML= get_number(deys);
        h.innerHTML= get_number(houers);
        m.innerHTML= get_number(mins);
        s.innerHTML= get_number(secs);

        if (des<=0)clearInterval(x);
    }, 2000);

function get_number(x){
    if (x < 10) return '0'+ x;
    else return x;
}