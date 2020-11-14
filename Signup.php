<!DOCTYPE html>
<html>
<body>

<script src="/Stock101Project/app/signup.js"></script>

<?php
$name = $lastname = $email = $pass = $confirmpass = "";
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
	$name = $_POST["signupName"];
	$lastname = $_POST["signupLastName"];
	$email = $_POST["signupEmail"];
	$pass = $_POST["signupPassword"];
	$confirmpass = $_POST["signupConfirmpass"];
}
?>

signup(<?php echo $name;?>, <?php echo $lastname;?>, <?php echo email;?>, <?php echo pass;?>, <?php echo confirmpass;?>);

</body>
</html>
