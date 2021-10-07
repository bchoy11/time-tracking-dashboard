function displayTime(id){
    var x='time-report-'+id;
    var totaldivs=document.querySelectorAll('.time-report-day,.time-report-week,.time-report-month');
    for(var i=0;i<totaldivs.length;i++){
        var curdiv=totaldivs[i];
        if(curdiv.className===x){
            curdiv.style.display="block"
        } 
        else{
            curdiv.style.display="none"
        }
    }
}