<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date and Time Functions</title>
    <link rel="stylesheet" href="style.css">
</head>

<?php

date_default_timezone_set("Asia/Kolkata");
$date = date("d-M-Y H:i:s");

echo "<pre>";
echo date("D-m-y H:i:s");
echo "</pre>";

echo "<pre>";
echo $date;
echo "</pre>";

$date_1 = new DateTime('2026-07-07 10:30:00');
$date_2 = new DateTime('2004-04-13 10:30:00');

$finsl = date_diff($date_1, $date_2);

echo "<pre>";
echo $final = $finsl->format("%y years, %m months, %d days, %h hours, %i minutes, %s seconds");
echo "</pre>";

echo "<pre>";
echo $finsl->format("%a days");
echo "</pre>";

?>