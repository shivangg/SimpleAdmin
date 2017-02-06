function showUser(str) {
    if (str === "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getuser.php?q="+str,true);
        xmlhttp.send();
    }
}

function showAll() {
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 ) {
      document.getElementById("tbl").innerHTML = this.responseText;
    }
  };

  xmlhttp.open("GET", "getuser.php?w="+"showAll", true);
  xmlhttp.send();

}

function validateName(name) {
  if (/^[a-z0-9][a-z0-9._\-]*$/.exec(name)) {
    return true;
  }
  return false;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

var errorn = true;
var errore = true;
var errord = true;




function validatee() {
              
              errorn = false;
              errore = false;
              errord = false;
              
              
              $('#name').on('input', function(){
                  var input=$(this);  
                  var is_name=input.val();
                  if (!is_name) {
                    $('.error-name2')[0].innerHTML = "Name should not be empty.";
                    errorn = true;
                  }
                  else
                    { 
                      $('.error-name2')[0].innerHTML = "";
                      errorn = false;
                      // console.log((errorn + " " + errore + " " + errord));
                    }

              });


              $('#email').on('input', function(){
                  var input=$(this);  
                  var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                  var is_email=re.test(input.val());
                  if (!is_email) {
                    $('.error-email2')[0].innerHTML = "Enter valid email.";
                    errore = true;
                  }
                  else
                    {
                      $('.error-email2')[0].innerHTML = "";
                      errore = false;
                      // console.log((errorn + " " + errore + " " + errord));
                    }
              });

              $('#dob').on('input', function(){
                  var input=$(this);  
                  var re = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
                  var is_dob=re.test(input.val());
                  if (!is_dob) {
                    $('.error-dob2')[0].innerHTML = "Enter valid Date in yyyy-mm-dd ";
                    errord = true;
                  }
                  else
                    {
                      $('.error-dob2')[0].innerHTML = "";
                      errord = false;
                      // console.log((errorn + " " + errore + " " + errord));
                    }
              });


          // errord = false;
          console.log((errorn + " " + errore + " " + errord));

          return !(errore || errord || errorn);
    }    





function validatea() {
              
              
              
              $('#aname').on('input', function(){
                  var input=$(this);  
                  var is_name=input.val();
                  if (!is_name) {
                    $('.error-name')[0].innerHTML = "Name should not be empty.";
                    errorn = true;
                  }
                  else
                    { 
                      $('.error-name')[0].innerHTML = "";
                      errorn = false;
                      // console.log((errorn + " " + errore + " " + errord));
                    }

              });


              $('#aemail').on('input', function(){
                  var input=$(this);  
                  var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                  var is_email=re.test(input.val());
                  if (!is_email) {
                    $('.error-email')[0].innerHTML = "Enter valid email.";
                    errore = true;
                  }
                  else
                    {
                      $('.error-email')[0].innerHTML = "";
                      errore = false;
                      // console.log((errorn + " " + errore + " " + errord));
                    }
              });

              $('#adob').on('input', function(){
                  var input=$(this);  
                  var re = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
                  var is_dob=re.test(input.val());
                  if (!is_dob) {
                    $('.error-dob')[0].innerHTML = "Enter valid Date in yyyy-mm-dd ";
                    errord = true;
                  }
                  else
                    {
                      $('.error-dob')[0].innerHTML = "";
                      errord = false;
                      // console.log((errorn + " " + errore + " " + errord));
                    }
              });


          // errord = false;
          console.log((errorn + " " + errore + " " + errord));

          return !(errore || errord || errorn);
    }    




  $(document).ready(function () {


    // Validate the shit up

    showAll();

    $('.add-form').hide(); 
    $('.edit-form').hide();



    $('.btn-add').on("click", function(){
      $('.add-form').fadeIn(500).show();
      $('#aname').focus();
      // $('.submit').prop("disabled", true);
    });

    validatea();
    validatee();

    $(".add-form").submit(function (event) {
      
      var form = $(this);

      var inputs = form.find("input, select, button, textarea");

      event.preventDefault();
      var name = $('#aname').val();
      var email = $('#aemail').val();
      var dob = $('#adob').val();
      var password = $('#apassword').val();


      if (validatea()) {

        
        var data = $(this).serialize();

        // console.log(data);

        inputs.prop("disabled", true);

        req = $.ajax({

          type: 'POST',
          url: 'addUser.php',
          data: data
        });

        req.done(function(response, textStatus, jqXHR){
          $('.add-form').fadeOut(500);
          $('#aname').val("");
          $('#aemail').val("");
          $('#adob').val("");
          $('#apassword').val("");
          showAll();
          inputs.prop("disabled", false);
          errorn = true;
          errore = true;
          errord = true;

    

      });
    }
    });




    $(document).on('click', '.edit', function () {

      $('.edit-form').fadeIn(500).show();

      var nameTable = $($(this).parent().siblings()[1]);
      var emailTable = $($(this).parent().siblings()[2]);
      var dobTable = $($(this).parent().siblings()[3]);
      var id = $(this).attr('class').split(' ')[1];

      var name = nameTable[0].innerHTML;
      var email = emailTable[0].innerHTML;
      var dob = dobTable[0].innerHTML;

      // console.log(name);

      $('#name').val(name);
      $('#email').val(email);
      $('#dob').val(dob);



      $('.edit-form').submit(function(event){

      var form = $(this);

      var inputs = form.find("input, select, button, textarea");

      event.preventDefault();
      name = $('#name').val();
      email = $('#email').val();
      dob = $('#dob').val();
      var password = $('#password').val();

      if (validatee()) {
      //set new data in the table
      nameTable[0].innerHTML = name;
      emailTable[0].innerHTML = email;
      dobTable[0].innerHTML = dob;

      

      var data =  $(this).serialize();
      data += "&id=" + id;

      // console.log(data);

      inputs.prop("disabled", true);

      req = $.ajax({

        type: 'POST',
        url: 'editUser.php',
        data: data
      });

      req.done(function(response, textStatus, jqXHR){
        $('.edit-form').fadeOut(500);
        inputs.prop("disabled", false);
          errorn = true;
          errore = true;
          errord = true;

      });
    }


    });


   });


    $(document).on('click', '.delete', function () {
      // console.log("here!");


      // console.log($(this));


      var s = $(this).attr('class').split(' ')[1];



      // console.log(s);

      var data = "s="+s; 

      $.ajax({
        type: 'POST',
        url: 'delUser.php',
        data: data
      });



      $("."+s).remove();


    });


  });