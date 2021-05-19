function send(){
     number_1 = document.getElementById("num1").value;
     number_2 = document.getElementById("num2").value;
     Acutual_ans = parseInt(number_1) * parseInt(number_2);

     Question_number = "<h4>" + number_1 + " X or (multiply) by " + number_2;
     input_box = "<br>Answer : <input type='text' id='input_check_box'>";
     check_butt = "<br><br> <button class='btn btn-info' onclick='Check()'> CHECK </button>";
     row = Question_number + input_box + check_butt;
     document.getElementById("output").innerHTML = row;
     document.getElementById("number1").value = "";
     document.getElementById("number2").value = "";
}