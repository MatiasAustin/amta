<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../sudo-css/login.css">

    <!-- font style -->
    <link rel="stylesheet" href="https://fonts.google.com/specimen/Barlow+Semi+Condensed?query=barlow">
    <link rel="stylesheet" href="https://fonts.google.com/specimen/Barlow?query=barlow">
    <title>Super User</title>
</head>
<body>
    <div id="wrapper">

        <!-- Session Status -->
        <x-auth-session-status class="mb-4" :status="session('status')" />

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <div id="display-grid">
            <div id="logo-su">
                <img src="../img/AMTA EXPO.png" alt="logo-su" style="width:200px; height:auto;">
            </div>

            <form id="login-form" method="POST" action="{{ route('login') }}">

                @csrf

                <!-- Email Input -->
                <label class="title" for="email" :value="__('Email')">Email:</label>
                <br>
                <input class="input" type="email" name="email" :value="old('email')" required autofocus>
                
                <br>
                <!-- Pwd Input -->
                <label class="title" for="password" :value="__('Password')">Password:</label>
                <br>
                <input class="input" type="password" name="password" required autocomplete="current-password">



                <br>
                <div id="r-m">
                    <div class="btn-cont">
                        <!-- Button Login -->
                        <input id="button-su" type="submit" value="Log In">
                    </div>
                    
                    <div class="remember-me-cont">
                        <input class="remember-me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember"/>
                        
                        <label class="remember-me" for="remember_me" class="inline-flex items-center" style="margin-left: 5px;">Remember me
                        </label>
                    </div>
                </div>

                <br>
                <!-- button -->
                @if (Route::has('password.request'))
                    <a class="forgot-p" href="{{ route('password.request') }}">
                        {{ __('Forgot your password?') }}
                    </a>
                @endif

            </form>
        </div>
    </div>
    
</body>
</html>