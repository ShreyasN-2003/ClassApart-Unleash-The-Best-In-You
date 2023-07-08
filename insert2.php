<!DOCTYPE html>
<html>
 
<head>

    <title></title>
</head>
 
<body>

    

        <?php
 

        // servername => localhost

        // username => root

        // password => empty

        // database name => database

        $conn = mysqli_connect("localhost", "root", "", "database");

         

        // Check connection

        if($conn === false){

            die("ERROR: Could not connect. "

                . mysqli_connect_error());

        }

         

        // Taking all 5 values from the form data(input)

        $name =  $_REQUEST['name'];

        

        $number =  $_REQUEST['number'];

        

        $email = $_REQUEST['email'];
        $textarea = $_REQUEST['textarea'];
         

        // Performing insert query execution

        // here our table name is college

        $sql = "INSERT INTO info  VALUES ('$name', 

            '$number','$email','$textarea')";

         

        if(mysqli_query($conn, $sql)){

            echo "<h3>data stored in a database successfully."; 
 

            echo nl2br("\n$name\n "

                . "$number\n $email\n $textarea");

        } else{

            echo "ERROR: Hush! Sorry $sql. "

                . mysqli_error($conn);

        }

         

        // Close connection

        mysqli_close($conn);

        ?>

    
</body>
 
</html>