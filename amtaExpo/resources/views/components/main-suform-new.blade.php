<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../component-css/suform.css">

    <style>
        @yield('style-child');
        
    </style>

    <!-- font style -->
    <link rel="stylesheet" href="https://fonts.google.com/specimen/Barlow+Semi+Condensed?query=barlow">
    <link rel="stylesheet" href="https://fonts.google.com/specimen/Barlow?query=barlow">
    <title>AMTA Expo</title>
</head>
<body>

    <div id="wrapper">
        <div id="logo">
            <div id="logo-img">
                <img src="../img/AMTA EXPO.png" alt="amta-logo" style="width:180px; height:auto;">
            </div>

            <div id="logout-btn">
                <!-- authenticated -->
                <form method="POST" action="{{ route('logout') }}">
                    @csrf

                    <x-dropdown-link :href="route('logout')"
                            onclick="event.preventDefault();
                            this.closest('form').submit();">
                            {{ __('Log Out') }}
                    </x-dropdown-link>
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
                    <li class="menu"><a id="reception-page" href="../do/reception-page">Reception Page</a></li>
                </ul>

                <h3 id="su-title-2">Partner Booth</h3>
                
                <ul id="parent-nav">
                    <li class="menu"><a id="b1" href="../do/booth-form">Booth From</a></li>
                    <li class="menu"><a id="b1" href="../do/booth-active-list">Booth Active List</a></li>
                </ul>
            </div>

            <div id="form-bar">
                @yield('form-bar')
            </div>
        </div>
    </div>
</body>
</html>