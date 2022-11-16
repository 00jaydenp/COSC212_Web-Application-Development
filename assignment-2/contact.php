<!DOCTYPE html>
<?php
$scriptList = array('js/jQuery/jquery-3.5.1.min.js', 'js/map.js', 'leaflet/leaflet.js');
include('htaccess/header.php');
?>
<main>
    <figure id="map">

    </figure>

    <div id="buttons">
        <button type = 'button' class="restaurants"> Show/Hide Restaurants</button>
        <button type = 'button' class="landmarks"> Show/Hide Landmarks</button>
    </div>
</main>
<?php include('htaccess/footer.php'); ?>
</body>
</html>