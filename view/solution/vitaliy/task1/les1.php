//$hostName="localhost";
//$databaseName="lesson1_base";
//$userName="root";
//$pswd="";
//$dbh = mysql_connect($hostName, $userName, $pswd) or die("Не можу з'єднатися з MySQL.");
//mysql_select_db($databaseName) or die("Не можу пбідключитися до бази.");

echo "Ім'я - " .$_POST['valName'];
echo "<br />";
echo "Пароль - ". $_POST['valPassword'];
$nameVal = $_POST['valName'];
$pasVal = $_POST['valPassword'];
//$query="INSERT INTO `users` (name, password) VALUES($nameVal, $pasVal)";
//mysql_query($query);
//mysql_close($dbh);

