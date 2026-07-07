<!DOCTYPE html>
<html>
<head>
    <title>Array Functions</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<?php

$array_one = array("one", "two", "three");
$array_two = array(4,5,6    );

echo "<pre>";
print_r($array_one);
echo "</pre>";

echo "<pre>";
print_r($array_two);
echo "</pre>";

echo "<pre>";
print_r(array_push($array_one, "four"));
echo "</pre>";

echo "<pre>";
print_r($array_one);
echo "</pre>";

echo "<pre>";
print_r(array_pop($array_one));
echo "</pre>";

echo "<pre>";
print_r($array_one);
echo "</pre>";

echo "<pre>";
$array_three = (array_merge($array_one, $array_two));
echo "</pre>";

echo "<pre>";
print_r($array_three);
echo "</pre>";

echo "<pre>";
print_r(array_flip($array_three));
echo "</pre>";


foreach($array_three as $key => $value){
    echo "Key: ".$key." Value: ".$value."<br>";
}

?>