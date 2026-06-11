<?php

function welcomeStudent(){
    echo "Welcome to Marwadi University!";
}

if (function_exists('welcomeStudent')) {
    welcomeStudent();
} else {
    echo "Function does not exist.";
}

?>