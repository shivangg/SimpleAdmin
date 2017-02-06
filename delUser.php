<?php 
	

	$s =  $_POST["s"];

	$con = mysqli_connect('localhost','root','','user_details');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }

    // mysqli_select_db($con,"ajax_demo");
    $sql='DELETE FROM `details` WHERE `details`.`id` = ' . $s . ';';
    echo $sql;	
    $result = mysqli_query($con,$sql);

    echo $result;

    mysqli_close($con);


 ?>