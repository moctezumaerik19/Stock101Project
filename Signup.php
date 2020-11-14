<!DOCTYPE html>
<html>
<body>

<?php
$name = "";
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
	$name = $_POST["signupName"];
	echo $name;
}
?>

</body>
</html>
