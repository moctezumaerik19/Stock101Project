<!DOCTYPE html>
<html>
<body>

<?php
$name = $lastname = $email = $pass = $confirmpass = "";
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
	$name = $_POST["signupName"];
	$lastname = $_POST["signupLastName"];
	$email = $_POST["signupEmail"];
	$pass = $_POST["signupPassword"];
	$confirmpass = $_POST["signupConfirmpass"];
	echo '<script type="text/javascript">alert("'.$name.'");</script>';
}
?>

</body>
</html>
