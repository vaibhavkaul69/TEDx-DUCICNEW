const second = 0,
      minute = second * 0,
      hour = minute * 0,
      day = hour *0;

let countDown = new Date('Aug 24, 2019 10:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText =  Math.floor(distance / (day)) ,
        document.getElementById('hours').innerText =  Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText =  Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)