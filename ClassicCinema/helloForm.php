<?php
$formOK = false;
if (isset($_GET['user'])) {
    if(strlen(trim($_GET['user']))> 0){
        $formOK = true;
        $name = $_GET['user'];
        echo htmlentities("Hello $name ");
    } else {
        ?>
        <p> Please enter your name. </p>
        <?php
    }

}
if(!$formOK) {
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<form method ="GET"
      action ="helloForm.php">
    <input type="text" name="user">
    <input type="submit" name="submit">

</form>


</body>
</html>
<?php } ?>