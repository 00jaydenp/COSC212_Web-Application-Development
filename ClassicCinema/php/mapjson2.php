
<?php
$json_input = file_get_contents("map-data-updated.json");
$json = json_decode($json_input,true);
var_dump($json);
print("<hr>");

echo strtoupper($json["features"][1]["properties"]["description"]);
$json["features"][1]["properties"]["description"] = "HCL LAB";
file_put_contents("map-data-updated.json", json_encode($json));
var_dump($json);

print("<hr>");

// add data
$json_arr[] = array('type'=>"Feature", 'properties'=>['description'=>'Owheo Building'], 'geometry'=>['type'=>'Point', 'type'=>'1234, -3456']);

// encode json and save to file
file_put_contents('map-data-updated.json', json_encode($json_arr));
var_dump($json);
?>