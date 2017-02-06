<?php 

	$name = $_POST["aname"];
	$email = $_POST["aemail"];
	$dob = $_POST["adob"];
	$password = $_POST["apassword"];

   $con = mysqli_connect('localhost','root','','user_details');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }

    // mysqli_select_db($con,"ajax_demo");
    $sql='INSERT INTO details ( Name, Email, dob) VALUES ("'. $name . '","' . $email . '", "' . $dob . '")';
    echo $sql;	
    $result = mysqli_query($con,$sql);

    echo $result;

    mysqli_close($con);

 ?>