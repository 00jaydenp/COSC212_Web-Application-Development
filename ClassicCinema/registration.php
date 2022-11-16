<?php
$scriptList = array('js/jquery3.3.js');
include('htaccess/header.php');
?>

<main>
    <form id="registrationForm"
          method="POST">
        <fieldset>
            <!-- First section of form is delivery address etc. -->
            <legend>Registration:</legend>
            <p>
                <label for="userName">Username:</label>
                <input type="text" name="UsenameName" id="userName">
            </p>
            <p>
                <label for="userEmail">Email:</label>
                <input type="email" name="userEmail" id="userEmail">
            </p>
            <p>
                <label for="userPassword">Password:</label>
                <input type="text" name="userPassword" id="userPassword" >
            </p>

        </fieldset>
        <input type="submit">
    </form>
</main>
<?php include('htaccess/footer.php');?>