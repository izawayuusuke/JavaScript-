<?php
// 処理を3秒間中断（サーバー処理を体感するためのダミーの遅延）
sleep(3);
print('こんにちは、'.$_REQUEST['name'].'さん！');
?>
