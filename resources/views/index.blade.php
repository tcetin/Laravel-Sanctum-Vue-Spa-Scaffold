<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Mda Twitter Bot</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
    <link rel="stylesheet" href="/css/app.css">
    <link rel="shortcut icon" href="/favicon.ico" type="image/png">
    <link rel="icon" href="/assets/img/favicon.png" type="image/png">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet"
</head>

<body class="font-sans bg-gray-100 font-sans leading-normal tracking-normal">
<div id="app">
    <router-view></router-view>
</div>

<script src="/js/app.js"></script>
</body>
</html>
