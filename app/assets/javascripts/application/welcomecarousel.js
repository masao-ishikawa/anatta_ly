function addBackstretch() {
  pictures = [
        "assets/index/test1.jpg",
        "assets/index/test2.jpg",
        "assets/index/test3.jpg",
        "assets/index/test5.jpg",
        "assets/index/test6.jpg",
        "assets/index/test7.jpg",
        "assets/index/test8.jpg",
        "assets/index/test9.jpg",
        "assets/index/test10.jpg",
        "assets/index/test11.jpg",
        "assets/index/test12.jpg",
        "assets/index/test14.jpg",
      ].sort(function(){
        return Math.round(Math.random()) - 0.5;
      });

  var random_duration = (Math.random() + 5)*1000
  $('#backstretch'+i).backstretch(pictures, {duration: random_duration, fade: 750});
}





$(function(){

  for(i = 0; i < 11; i++) {
    setTimeout(addBackstretch(i), 250);
   }

});
