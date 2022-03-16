window.onload = function()
{
    var hour = 00 ;
    var minute = 00 ;
    var second = 00 ;
    var milisecond = 00 ;

    var nhour = document.getElementById("hours")
    var nmin = document.getElementById("minutes")
    var nsecond = document.getElementById("seconds")
    var nmilisecond = document.getElementById("miliseconds")
    var start = document.getElementById('Start');
    var stop = document.getElementById('Stop');
    var restart = document.getElementById('Restart');
    var interval ;
    start.onclick = function()
    {
        clearInterval(interval);
        interval = setInterval(timer , 10);

    }
    stop.onclick = function()
    {
        clearInterval(interval);
    }

    restart.onclick = function()
    {
        clearInterval(interval);
        hour = "0";
        minute = "0" ;
        second = "0" ;
        milisecond = "0" ;
        nhour.innerHTML = "0" + hour ;
        nmin.innerHTML = "0" + minute ;
        nsecond.innerHTML = "0" + second ;
        nmilisecond.innerHTML = "0" + milisecond ;

    }

    function timer()
    {
        milisecond++ ;
        if(milisecond <= 9)
        {
            nmilisecond.innerHTML = "0" + milisecond ;
        }
        if(milisecond > 9)
        {
           nmilisecond.innerHTML = milisecond ;
        }
        if(milisecond > 99)
        {
            console.log("second");
            second++ ;
            nsecond.innerHTML = "0" + second ;
            milisecond = 0 ;
            nmilisecond.innerHTML = "0" + 0 ;
        }
        
        if(second > 9)
        {
            nsecond.innerHTML = second ;
        }
        if(second > 59)
        {
            console.log("minute");
            minute++ ;
            nmin.innerHTML = "0" + minute ;
            second = 0 ;
            nsecond.innerHTML = "0" + 0 ;
            milisecond = 0 ;
            nmilisecond.innerHTML = "0" + 0 ;

        }
        if(minute <= 9 )
        {
            nmin.innerHTML = "0" + minute ;
        }
        if( minute > 9)
        {
            nmin.innerHTML = minute ;
        }
        if( minute > 59)
        {
            console.log("hour");
            hour++ ;
            nhour.innerHTML = "0" + hour ;
            minute = 0 ;
            second = 0 ;
            milisecond = 0 ;
            nmin.innerHTML = "0" + minute ;
            nsecond.innerHTML = "0" + second ;
            nmilisecond.innerHTML = "0" + milisecond ;
        }
        if( hour <= 9)
        {
            nhour.innerHTML = "0" + hour;
        }
        if( hour > 9)
        {
            nhour.innerHTML = hour ;
        }
        
    }


}