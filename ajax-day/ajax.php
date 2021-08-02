<?php

header("Content-type:application/jsonp; charset=UTF-8");

$zipcode = $_POST['zipcode'];

$list = array("zipcode" => $zipcode);

echo json_encode($list);

?>