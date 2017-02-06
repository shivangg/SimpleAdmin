<?php 

	

	 $name = $_POST['name'];
	 $email = $_POST['email'];
	 $dob= $_POST['dob'];
	 $password = $_POST['password'];
	 $id = $_POST['id'];

	$con = mysqli_connect('localhost','root','','user_details');
        if (!$con) {
            die('Could not connect: ' . mysqli_error($con));
        }


	$sql = 'UPDATE `details` SET `Name` = "' . $name . '", `Email` = "' . $email . '", `dob` = "' . $dob . '" WHERE `details`.`id` = ' . $id ;
	echo $sql;
	$result = mysqli_query($con,$sql);
	echo $result;


	mysqli_close($con);

 ?>