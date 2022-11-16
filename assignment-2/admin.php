<?php
$scriptList = array('js/jQuery/jquery-3.5.1.min.js', 'js/bookings.js', 'js/vehicles.js');
include('htaccess/header.php');

$booking_filename = "json/bookings.json";
$booking_input = file_get_contents($booking_filename);
$bookings = json_decode($booking_input, true);
$count = count($bookings['bookings']['booking']);


$vehicle_filename = "json/vehicles.json";
$vehicle_input = file_get_contents($vehicle_filename);
$vehicles = json_decode($vehicle_input, true);
?>
<main>
    <div id = bookingInfo>
        <h2> Bookings</h2>

    </div>
        <form id="deleteBooking" action ="php/deleteBooking.php" method="POST">
            <fieldset>
                <legend>Delete Booking:</legend>
            <label for="BookingID">Booking ID:</label>
            <select name="bookingId" id="bookingId" >
                <?php
                for($i = 0; $i < $count; $i++){
                    echo "<option value='" . $i . "'>" . $i . "</option>";
                }
                ?>
            </select>
            <input type="submit" id="delBooking">
            </fieldset>
        </form>
    </div>
    <div id = vehicles>
        <h2> Vehicles</h2>

    </div>
    <div id="image"></div>
        <form id="addVehicle" action="php/processBooking.php" method ="POST">
            <fieldset>
                <!-- First section of form is delivery address etc. -->
                <legend>Add Vehicle:</legend>
                <p>
                    <label for="regNum">Registration Number:</label>
                    <select name="regNum" id="regNum" >
                        <?php
                        foreach($vehicles['fleet']['vehicle'] as $val){
                            echo "<option value='" . $val["registration"] . "'>" . $val["registration"] . "</option>";
                        }
                        ?>
                    </select>
                </p>
                <p>
                    <label for="customerName">Name:</label>
                    <input type="text" name="customerName" id="customerName" required >
                </p>
                <p>
                    <label for="pickup">Pickup date:</label>

                    <input type="date" id="pickup" name="pickup" required >
                </p>
                <p>
                    <label for="dropoff">Dropoff date:</label>

                    <input type="date" id="dropoff" name="dropoff" required >
                </p>

            </fieldset>
            <input type="submit" id="submit" name="submit">
        </form>

    </div>
</main>
<?php include('htaccess/footer.php'); ?>
</body>
</html>