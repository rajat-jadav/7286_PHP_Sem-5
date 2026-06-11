<?php

function calculatePercentage($sub1,$sub2,$sub3,$sub4,$sub5){
    $total = $sub1 + $sub2 + $sub3 + $sub4 + $sub5;
    if ($total == 0) {
        return "Total marks cannot be zero.";
    }
    $percentage = ($total / 500) * 100;
    echo "Your percentage is: " . $percentage . "%";
}

calculatePercentage(85, 90, 78, 92, 88);

?>