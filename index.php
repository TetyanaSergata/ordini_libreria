<!DOCTYPE html>
<html lang="en" dir="ltr">
<header>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/style.css">
    <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
            crossorigin="anonymous"></script>
    <title>Ordini</title>
</header>
<body>
<div class="container">
    <div class="option_box">
        <div class="opt_title">
            <h3>Seleziona un ordine effettuato in base alla data</h3>
        </div>
        <div class="opt_content">
            <select id="order">
                <option value="desc">pi&ugrave; recente</option>
                <option value="asc">meno recente</option>
            </select>
        </div>
    </div>
    <div id="table_container"></div>
    <div class="bottom_cnt">
        <h4>Creato da Tetyana Sergata</h4>
    </div>
</div>
<script type="text/javascript" src="js/script.js"></script>
</body>
</html>