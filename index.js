function displayTime(id){
    var x='time-report-'+id;
    var totaldivs=document.querySelectorAll('.time-report-day,.time-report-week,.time-report-month');
    var curbutton=document.getElementsByClassName("time-button");
    for(var i=0;i<totaldivs.length;i++){
        var curdiv=totaldivs[i];
        if(curdiv.className===x){
            curdiv.style.display="block";
        } 
        else{
            curdiv.style.display="none";
        }
    }
    for(var t=0;t<curbutton.length;t++){
        curbutton[t].style.color="hsl(235, 45%, 61%)";
    }
    document.getElementById(id+'-button').style.color="#fff";
}