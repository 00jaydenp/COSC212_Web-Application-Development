<?php
echo "<p>Hello</p>";
$input_filename = "map-data.json";
$output_filename = "map-data.json";

$json_input = file_get_contents($input_filename);
$json = json_decode($json_input, true);
$json_output = json_encode($json, JSON_PRETTY_PRINT). "\n";
$json["features"][1]["properties"]["description"] = "HCL LAB";
file_put_contents($output_filename, $json_output);

var_dump($json_output);
print("<hr>");

// add data
$insertValue = count($json['features']);
$json['features'][$insertValue]['type'] = 'Feature';
$json['features'][$insertValue]['properties']['description'] = 'Owheo Building';
$json['features'][$insertValue]['geometry']['type'] = 'Point';
$json['features'][$insertValue]['geometry']['coordinates'] = [170.51528, -45.86788];
$json['features'][$insertValue]['id'] = count($json['features']);


$json_output = json_encode($json, JSON_PRETTY_PRINT). "\n";
file_put_contents($output_filename, $json_output);
// encode json and save to file
var_dump($json);
?>