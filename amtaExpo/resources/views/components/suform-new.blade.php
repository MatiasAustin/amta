<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../component-css/suform.css">

    <style>
        @yield('style-child');
        @exteds('components/booth-style');
    </style>

    <!-- Bootstrap icon -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">

    <!-- Bootstrap Style -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <!-- font style -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">

    <link rel="stylesheet" href="https://fonts.google.com/specimen/Barlow+Semi+Condensed?query=barlow">
    <link rel="stylesheet" href="https://fonts.google.com/specimen/Barlow?query=barlow">
    <title>AMTA Expo-Partner Booth</title>
</head>

<body class="bg-dark">

    <div id="wrapper">

        <div id="header">
            <div id="logo-img">
                <img src="../img/AMTA EXPO.png" alt="amta-logo" style="width:180px; height:auto;">
            </div>

            <div id="logout-btn">
                <!-- authenticated -->
                <form method="POST" action="{{ route('logout') }}">
                    @csrf

                    <div class="logout">
                        <x-dropdown-link :href="route('logout')"
                                onclick="event.preventDefault();
                                this.closest('form').submit();">
                                <!-- {{ __('Log Out') }} -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" opacity="80" class="bi bi-box-arrow-left" viewBox="0 0 16 16" >
                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                                </svg>
                            
                        </x-dropdown-link>
                    </div>
                </form>
            </div>
        </div>
        <div id="display-grid">
            <div id="nav-menu">

                <!-- nav menu AMTA -->
                <h3 id="su-title-1">AMTA Expo</h3>
                
                <ul id="parent-nav">
                    <li class="menu"><a id="badge" href="../do/badge">Badge</a></li>
                    <li class="menu"><a id="landing-page" href="../do/landing-page">Landing Page</a></li>
                    <li class="menu"><a id="reception-page" href="{{ route('reception-page.create') }}">Reception Page</a></li>
                </ul>

                <h3 id="su-title-2">Partner Booth</h3>
                
                <ul id="parent-nav">
                    <!-- <li class="menu"><a id="b-form" href="{{ route('booth-active-list.create') }}">Booth From</a></li> -->
                    <li class="menu"><a id="b-list" href="{{ route('booth-active-list.index') }}">Booth Active List</a></li>
                </ul>
            </div>

            <div id="form-bar">
                @yield('form-bar')


            </div>
        </div>
    </div>
</body>
</html>