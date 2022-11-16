<?php

$scriptList = array('../js/jQuery/jquery-3.5.1.min.js');
include("../htaccess/header.php");
?>
<main>
<?php
        echo "<h3>Booking Made Successfully</h3>";
$input_filename = "../json/bookings.json";
$output_filename = "../json/bookings.json";

/** @var $json_input inputting bookings.json */
$json_input = file_get_contents($input_filename);
$json = json_decode($json_input, true);

/** @var $insertValue value to insert new booking into */
$insertValue = count($json['bookings']['booking']);


/** Getting the values from the form via POST and assigning them to variables */
$name = $_POST['customerName'];
$regNum = $_POST['regNum'];
list($pickYear, $pickMonth, $pickDay) = explode("-", $_POST['pickup']);
list($dropYear, $dropMonth, $dropDay) = explode("-", $_POST['dropoff']);
$pickDay = ltrim($pickDay, '0');
$pickMonth = ltrim($pickMonth, '0');
$dropDay = ltrim($dropDay, '0');
$dropMonth = ltrim($dropMonth, '0');
$pickupDate = $_POST['pickup'];
$dropoffDate = $_POST['dropoff'];

/** Inserting each value into a new json object */
$json['bookings']['booking'][$insertValue]['number'] = $regNum;
$json['bookings']['booking'][$insertValue]['name'] = $name;
$json['bookings']['booking'][$insertValue]['pickup']['day'] = $pickDay;
$json['bookings']['booking'][$insertValue]['pickup']['month'] = $pickMonth;
$json['bookings']['booking'][$insertValue]['pickup']['year'] = $pickYear;
$json['bookings']['booking'][$insertValue]['dropoff']['day'] = $dropDay;
$json['bookings']['booking'][$insertValue]['dropoff']['month'] = $dropMonth;
$json['bookings']['booking'][$insertValue]['dropoff']['year'] = $dropYear;

/** outputting the new json file with the added booking and writing it to bookings.json */
$json_output = json_encode($json, JSON_PRETTY_PRINT). "\n";
file_put_contents($output_filename, $json_output);
echo "<table style='margin:auto'><tr><th>Vehicle Regisration</th><th>Name</th><th>Pickup Date</th><th>Dropoff Date</th></tr>";
echo "<tr><td>". $regNum ."</td><td>". $name ."</td><td>". $pickupDate ."</td><td>". $dropoffDate."</td></tr></table>";
?>

</main>
<?php include("../htaccess/footer.php");
?>

</body>
</html>
