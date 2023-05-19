function timf() {

    var time;
    time = new Date()
    const a = time.getHours();
    const b = time.getMinutes();
    const c = time.getDay();
    const d = time.getFullYear();
    const e = time.getDate();

    if(c === 1){
        $('#fe1').text("Monday" + " " + e)
        $('#date').text("Monday" + " " + e)
    }
    if(c === 2){
        $('#fe1').text("Tuesday" + " " + e)
        $('#date').text("Tuesday" + " " + e)
    }

    if(c === 3){
        $('#fe1').text("Wednesday" + " " + e)
        $('#date').text("Wednesday" + " " + e)
    }

    if(c === 4){
        $('#fe1').text("Thursday" + " " + e)
        $('#date').text("Thursday" + " " + e)
    }
    if(c === 5){
        $('#fe1').text("Friday" + " " + e)
        $('#date').text("Friday" + " " + e)
    }
    if(c === 6){
        $('#fe1').text("Saturday" + " " + e)
        $('#date').text("Saturday" + " " + e)
    }
    if(c === 0){
        $('#fe1').text("Sunday" + " " + e)
        $('#date').text("Sunday" + " " + e)
    }




    $('#fe').text(a + ':' + b)
    if(b == 0) {

        $('#fe').text(a + ':' + b + '0')
        if(a < 12){

            $('#fe').text(a + ':' + b + '0' + ' AM')

        }
        if( a > 11 && a < 24){

            $('#fe').text(a + ':' + b + '0' + ' PM')
        }
    }
    if(0 < b < 10){

        $('#fe').text(a + ':' + '0' + b)
        if(a < 12){

            $('#fe').text(a + ':' + '0' + b + ' AM')
        }
        if( a > 11 && a < 24){

            $('#fe').text(a + ':' + '0' + b + ' PM')
        }
    }
    if(b > 9){

        $('#fe').text(a + ':' + b)
        if(a < 12){

            $('#fe').text(a + ':' + b +  ' AM')
        }
        if( a > 11 && a < 24){

            $('#fe').text(a + ':' + b + ' PM')
        }
    }

}
setInterval(timf, 1000)