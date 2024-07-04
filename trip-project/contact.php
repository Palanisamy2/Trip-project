<?php
$name=$_POST['name'];
$mobile=$_POST['mobile'];
$comments=$_POST['comments'];
//database connect
$conn=new mysqli('localhost','root','','trip form');
if ($conn->connect_error){
    die('connection failed:'.$conn->connect_error);
}
else
{
    $stmt=$conn->prepare("inset into registration(name,mobile,comments) values(?,?,?)");
    $stmt->bind_param("sis",$name,$comments,$mobile);
    $stmt->execute();
    echo"registration successfull";
    $stmt->close();
    $conn->close();
}
?>