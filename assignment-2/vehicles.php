<?php
$scriptList = array('js/jQuery/jquery-3.5.1.min.js', 'js/bookingStorage.js', 'js/vehicles.js',  'js/reviews.js');
include('htaccess/header.php');
?>
<main>
    <div id="vehicles">
        <h2> Vehicles</h2>

    </div>

        <div id="image">

        </div>
    <button type = 'button' class="showReviews"> Show/Hide Reviews</button>
    <div id="review"></div>

    <div id = "form">
            <form id="bookingForm" action="php/processBooking.php" method ="POST">
                <fieldset>
                    <!-- First section of form is delivery address etc. -->
                    <legend>Book Car:</legend>
                    <p>
                        <label for="regNum">Registration Number:</label>
                        <select name="regNum" id="regNum" >
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
            <div id="errors"></div>
    </div>
</main>
<?php include('htaccess/footer.php'); ?>
</body>
</html>