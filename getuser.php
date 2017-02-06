        <?php

        if (isset($_GET['q'])) {
            
            $q = intval($_GET['q']);
        }

        $con = mysqli_connect('localhost','root','','user_details');
        if (!$con) {
            die('Could not connect: ' . mysqli_error($con));
        }

        // mysqli_select_db($con,"ajax_demo");
        $sql="SELECT * FROM details ";
        $result = mysqli_query($con,$sql);

        echo "<table>
        <tr>
        <thead>
        <th>S.No</th>
        <th>Name</th>
        <th>Email</th>
        <th>D.o.B</th>
        <th>Action</th>
        </thead>
        </tr>";

        $c = 1;

        while($row = mysqli_fetch_array($result)) {
            $id = $row['id'];
            echo '<tbody class="' .   $id   .  '"><tr>';
            echo "<td>" . $c . "</td>";
            echo "<td id='tname'>" . $row['Name'] . "</td>";
            echo "<td id='temail'>" . $row['Email'] . "</td>";
            echo "<td id='tdob'>" . $row['dob'] . "</td>";
            echo "<td>  <button class='edit ". $id ." '>EDIT</button> <button class='delete ". $id  .  "'>DELETE</button>  </td>";
            echo "</tr></tbody>";
            $c++;
        }
        echo "</table>";
        mysqli_close($con);
        ?>
