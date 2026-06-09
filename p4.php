<?php

$month = date("F");

$str = "June";

//echo "Current month: " . $month;

if ($month == $str) {
    echo "<br>It's June!";
}

switch ($month) {
    case "January":
        echo "<br>It's January!";
        break;
    case "February":
        echo "<br>It's February!";
        break;
    case "March":
        echo "<br>It's March!";
        break;
    case "April":
        echo "<br>It's April!";
        break;
    case "May":
        echo "<br>It's May!";
        break;
    case "June":
        echo "<br>It's June!";
        break;
    case "July":
        echo "<br>It's July!";
        break;
    case "August":
        echo "<br>It's August!";
        break;
    case "September":
        echo "<br>It's September!";
        break;
    case "October":
        echo "<br>It's October!";
        break;
    case "November":
        echo "<br>It's November!";
        break;
    case "December":
        echo "<br>It's December!";
        break;
}

?>