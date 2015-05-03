var birthDate = "December 25, 1995"
var birthDateInMs = Date.parse(birthDate);
var birthDateInMsInt = parseInt(birthDateInMs);


window.onload = function() {
    // all of your code goes in here
    // it runs after the DOM is built

    var user = new Object();



    function counter(){
      //Things you'll need

      var currentDate = parseInt(Date.now());
      var milli = parseInt(2592000000000);
      var timeDifference = currentDate - birthDateInMsInt;
      var timeWasted = timeDifference/milli;


      document.getElementById('time').innerHTML = timeDifference;

        //These Variables All Work
      setTimeout(counter, 1000);


    }

    counter();


}
