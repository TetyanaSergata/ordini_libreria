<?php
include 'dbTable.php';
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/style.css">
    <title></title>
  </head>
  <body>
    <div class="container">
      <select>
        <option>recente</option>
        <option>meno recente</option>
      </select>
      <?php if ( $order->num_rows > 0 ) { ?>
        <table>
          <tr>
            <th>Nome</th>
            <th>Data</th>
          </tr>
      <?php $i = 0;
       while($row = $order->fetch_assoc()) {

        if ( $i < 5 ) { ?>
          <tr>
            <td>
              <!-- <?php echo 'Nome:' . ' ' . $row['nome']; ?> -->
              <?php echo $row['nome']; ?>
            </td>
            <td>
              <?php echo $row['data']; ?>
            </td>
          </tr>
        <?php  }?>
      <?php  $i++; } ?>
        </table>
      <?php } else {
        'Nessun risultato';
            }
      ?>
    </div>

  </body>
</html>
