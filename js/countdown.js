window.onload = function() {

// var pictures = ["https://unsplash.imgix.net/photo-1429371527702-1bfdc0eeea7d?dpr=2&fit=crop&fm=jpg&h=700&q=75&w=1050", "https://ununsplash.imgix.net/photo-1429105049372-8d928fd29ba1?dpr=2&fit=crop&fm=jpg&h=700&q=75&w=1050", "https://unsplash.imgix.net/photo-1428908799722-0a74e26ce7f6?dpr=2&fit=crop&fm=jpg&h=700&q=75&w=1050", "https://unsplash.imgix.net/photo-1428856472086-8674d9cbd6bc?dpr=2&fit=crop&fm=jpg&h=800&q=75&w=1050", "https://ununsplash.imgix.net/photo-1428542170253-0d2f063e92c2?dpr=2&fit=crop&fm=jpg&h=700&q=75&w=1050", "https://unsplash.imgix.net/photo-1415200358018-bb07fced3660?dpr=2&fit=crop&fm=jpg&h=700&q=75&w=1050", "https://ununsplash.imgix.net/photo-1425136738262-212551713a58?dpr=2&fit=crop&fm=jpg&h=600&q=75&w=1050"];
// var pictureURL = pictures[Math.floor((Math.random() * 4) + 0)];
// console.log(pictureURL);
//
// document.getElementById('picture').style.background = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + pictureURL + "-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;)";




    var user = new Object();



    function counter(){
      //Things you'll need
      var birthDate = "3/16/1995";
      var birthDateInMs = Date.parse(birthDate);
      var birthDateInMsInt = parseInt(birthDateInMs);
      var currentDate = parseInt(Date.now());
      var milli = parseInt(2592000000000);
      var timeDifference = currentDate - birthDateInMsInt;
      var timeWasted = timeDifference/milli;




      document.getElementById('time').innerHTML = timeWasted;
      console.log(timeDifference);
      console.log(currentDate);

        //These Variables All Work
      setTimeout(counter, 1000);


    }
    counter();
}
