<html>
  <head>
    <title>Internship Project</title>
    <link rel="stylesheet" type="text/css" href="bootstrap.min.css">
    <style>
          table {
              border-collapse: collapse;
              width: 100%;
          }

          table, td, th {
              border: 1px solid black;
              padding: 5px;
          }

          .error {
            color: red;
            text-align: left;
          }

          th {text-align: left;}
    </style>
  </head>
<body>
<div class="container">
<h1>The Project</h1>

<div id="tbl"></div>

<div class="form-group">
<h2 class="add-form ">Add Details of the New User</h2>

<form method="POST" class="text-center add-form">
  
  <div class=" error error-name "></div>
  <input type="text" placeholder="name" class="form-control" id="aname" name="aname">
  <div class=" error error-email "></div>
  <input type="text" placeholder="email" class="form-control" id="aemail" name="aemail">
  <div class=" error error-dob "></div>
  <input type="text" placeholder="yyyy-mm-dd"  class="form-control" id="adob" name="adob">
  <div class=" error error-password"></div>
  <input type="password" placeholder="password" class="form-control" id="apassword" name="apassword">
  <input type="submit" class="submit" class="form-control" name="submit">
</form>
</div>

<div class="form-group">
<h2 class="edit-form">Edit Details of the Existing User</h2>

<form method="POST" class="text-center edit-form">
  
  <div class=" error error-name2 "></div>
  <input type="text" placeholder="name" class="form-control" value="shivangg" id="name" name="name">
  <div class=" error error-email2 "></div>
  <input type="text" placeholder="email" class="form-control" id="email" name="email">
  <div class=" error error-dob2 "></div>
  <input type="text" placeholder="dob"class="form-control" value="2017-01-18" id="dob" name="dob">
  <div class=" error error-password2"></div>
  <input type="password" placeholder="password" class="form-control" id="password" name="password">
  <input type="submit" class="submit" class="form-control" name="submit">
</form>
</div>

<br>
<button class="btn-add" >Add New</button>


</div class="container">
<script type="text/javascript" src="jquery-2.2.2.min.js"></script>
<script type="text/javascript" src="app.js"></script>
</body>
</html>