<?php
if($_POST["message"]) {
    mail("zachary_menter@hotmail.com", "Form to email message", $_POST["message"], "From: zachary_menter@hotmail.com");
}
?>