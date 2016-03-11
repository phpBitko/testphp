<?php
error_reporting(-1);
header('Content-Type: text/html; charset=UTF-8');

include './view/head.php';
//header( 'Location: view/main.php', true );

include './view/title.php';


if (isset($_GET['page'])) {

	if ($_GET['page'] = 'tasks') {
		include './view/tasks.php';
	}
} else {
	include './view/main.php';
}

include './view/footer.php';