<?php 
$url = $_GET['q']; 
$ch = curl_init(); 
$timeout = 5; 
curl_setopt($ch, CURLOPT_URL, $url); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout); 
$contents = curl_exec($ch); 
curl_close($ch); 
header('Content-Type: text/json;charset=utf-8');
header('Access-Control-Allow-Origin:*.haotown.cn');  
header('Access-Control-Allow-Methods:POST');  
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
echo $contents; 
?> 