<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title> Otago Car Rentals</title>
    <link rel="stylesheet" href="../leaflet/leaflet.css">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../js/jQuery/jquery-ui.min.css">
   <?php if(isset($scriptList) && is_array($scriptList)){
        foreach($scriptList as $script){
            echo "<script src='$script'></script>";
        }
    } ?>
</head>
<body>
<header>
    <h1>Otago Car Rental</h1>
    <nav>
        <ul>
            <?php
            $currentPage = basename($_SERVER['PHP_SELF']);
            if ($currentPage === 'index.php'){
                echo "<li>Home";
            }else {
                echo "<li><a href='../index.php'>Home</a>";
            }
            if ($currentPage === 'vehicles.php'){
                echo "<li>Vehicles";
            }else {
                echo "<li><a href='../vehicles.php'>Vehicles</a>";
            }
            if ($currentPage === 'contact.php'){
                echo "<li>Location";
            }else {
                echo "<li><a href='../contact.php'>Location</a>";
            }
            if ($currentPage === 'admin.php'){
                echo "<li>Admin";
            }else {
                echo "<li><a href='../admin.php'>Admin</a>";
            }
            ?>
        </ul>
    </nav>
</header>