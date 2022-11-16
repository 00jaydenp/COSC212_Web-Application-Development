<?php

$scriptList = array('../js/jQuery/jquery-3.5.1.min.js');
include("../htaccess/header.php");
?>
    <main>
<?php
echo "<h3>Booking Removed Successfully</h3>";

$filename = "../json/bookings.json";
$json_input = file_get_contents($filename);
$json = json_decode($json_input, true);

/** @var  $bookingID ID of the chosen booking to be removed*/
$bookingID = $_POST['bookingId'];

/**removes selected booking */
unset($json["bookings"]["booking"][$bookingID]);
$json['bookings']['booking'] = array_values($json['bookings']['booking']);

/** @var $json_output updated file with removed booking */
$json_output = json_encode($json, JSON_PRETTY_PRINT). "\n";
file_put_contents($filename, $json_output);
?>
    </main>
<?php
include("../htaccess/footer.php");

