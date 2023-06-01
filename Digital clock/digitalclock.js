document.getElementById("select").value

setInterval(showtime,1000)
function showtime(){
    var time =new Date()
    var hour = time.getHours()
    var minutes = time.getMinutes()
    var sec = time.getSeconds()
    var am_pm="AM"
    if(hour>=12){
        am_pm="PM"
        hour=hour-12
    }
    if(hour==0){
        hour=12
    }
    var sec= sec <10 ? "0"+ sec : sec;
    var hour = hour<10 ? "0" + hour : hour;
    var minutes = minutes<10 ? "0" + minutes : minutes;
    var para = document.getElementById("para")
    para.textContent=`${hour}:${minutes}:${sec}${am_pm}`
}