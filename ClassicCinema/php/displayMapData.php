<?php

$input_filename = "map-data.json";
$json_input = file_get_contents($input_filename);
$json = json_decode($json_input,true);
echo "<table><tr><th>Description</th><th>Latitude</th><th>Longitude</th>";
foreach ($json['features'] as $key){

    echo "<tr>";
    echo "<td>" . $key['properties']['description'] . "</td>";
    echo "<td>" . $key['geometry']['coordinates'][0] . "</td>";
    echo "<td>" . $key['geometry']['coordinates'][1] . "</td>";
    echo "</tr>";
}
echo "</table>"
?>