$(document).ready(function() {
  $("#img2").click(function(){
    alert($("#sentence").val());
  })

  $( "#target" ).submit(function( event ) {

      function reverse (input) {
        return input.split("").reverse().join("");
      }
      function countLetters (input) {
        return sentence.charAt((Math.floor(sentence.length / 2)));
      }

    var sentence=$("#sentence").val();
    var firstLetter = sentence.charAt(0);
    var lastLetter = sentence.charAt((sentence.length)-1);
    var fl=firstLetter.toUpperCase()+lastLetter.toUpperCase();
    alert(reverse(countLetters(sentence)+ sentence+reverse(fl)));
    event.preventDefault();
  });

});
