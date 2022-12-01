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

    <!-- font style -->
    <link rel="stylesheet" href="https://fonts.google.com/specimen/Barlow+Semi+Condensed?query=barlow">
    <link rel="stylesheet" href="https://fonts.google.com/specimen/Barlow?query=barlow">
    <title>AMTA Expo-Partner Booth</title>
</head>

<body>

    <div id="wrapper">
        <div id="logo">
            <img src="../img/AMTA EXPO.png" alt="amta-logo" style="width:180px; height:auto;">
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
                    <li class="menu"><a id="b1" href="../do/booth-1">Booth 1</a></li>
                    <li class="menu"><a id="b2" href="../do/booth-2">Booth 2</a></li>
                    <li class="menu"><a id="b3" href="../do/booth-3">Booth 3</a></li>
                    <li class="menu"><a id="b4" href="../do/booth-4">Booth 4</a></li>
                    <li class="menu"><a id="b5" href="../do/booth-5">Booth 5</a></li>
                    <li class="menu"><a id="b6" href="../do/booth-6">Booth 6</a></li>
                    <li class="menu"><a id="b7" href="../do/booth-7">Booth 7</a></li>
                    <li class="menu"><a id="b8" href="../do/booth-8">Booth 8</a></li>
                    <li class="menu"><a id="b9" href="../do/booth-9">Booth 9</a></li>
                    <li class="menu"><a id="b10" href="../do/booth-10">Booth 10</a></li>
                    <li class="menu"><a id="b11" href="../do/booth-11">Booth 11</a></li>
                    <li class="menu"><a id="b12" href="../do/booth-12">Booth 12</a></li>
                    <li class="menu"><a id="b13" href="../do/booth-13">Booth 13</a></li>
                    <li class="menu"><a id="b14" href="../do/booth-14">Booth 14</a></li>
                    <li class="menu"><a id="b15" href="../do/booth-15">Booth 15</a></li>
                    <li class="menu"><a id="b16" href="../do/booth-16">Booth 16</a></li>
                    <li class="menu"><a id="b17" href="../do/booth-17">Booth 17</a></li>
                    <li class="menu"><a id="b18" href="../do/booth-18">Booth 18</a></li>
                    <li class="menu"><a id="b19" href="../do/booth-19">Booth 19</a></li>
                    <li class="menu"><a id="b20" href="../do/booth-20">Booth 20</a></li>
                    <li class="menu"><a id="b21" href="../do/booth-21">Booth 21</a></li>
                    <li class="menu"><a id="b22" href="../do/booth-22">Booth 22</a></li>
                    <li class="menu"><a id="b23" href="../do/booth-23">Booth 23</a></li>
                    <li class="menu"><a id="b24" href="../do/booth-24">Booth 24</a></li>
                    <li class="menu"><a id="b25" href="../do/booth-25">Booth 25</a></li>
                    <li class="menu"><a id="b26" href="../do/booth-26">Booth 26</a></li>
                    <li class="menu"><a id="b27" href="../do/booth-27">Booth 27</a></li>
                    <li class="menu"><a id="b28" href="../do/booth-28">Booth 28</a></li>
                    <li class="menu"><a id="b29" href="../do/booth-29">Booth 29</a></li>
                    <li class="menu"><a id="b30" href="../do/booth-30">Booth 30</a></li>
                    <li class="menu"><a id="b31" href="../do/booth-31">Booth 31</a></li>
                    <li class="menu"><a id="b32" href="../do/booth-32">Booth 32</a></li>
                </ul>
            </div>

            <div id="form-bar">
                @yield('form-bar')

                <form id="booth-form-container" method="POST" action="booth-filled">

                    @csrf
                    <!-- <label class="title" for="logo">Company Logo</label><br>
                    <input class="input" type="file"name="company_logo"> -->


                    <!-- url Input - Video -->
                    <label class="title" for="company_name">Company Name</label>
                    <input class="input" type="text" name="company_name" required>
                    
                    <!-- url Input - catalog -->
                    <label class="title" for="brand_list">Brand List</label>
                    <input class="input" type="text" name="brand_list" required>

                    <!-- url Input - contact -->
                    <label class="title" for="contact">Contact</label>
                    <input class="input" type="text" name="contact" required>

                    <!-- url Input - product -->
                    <label class="title" for="description">Description</label>
                    <textarea class="input-desc" name="description" required></textarea>

                    <!-- button -->
                    <input id="save-form" type="submit" value="Save">
                </form>

            </div>
        </div>
    </div>
</body>
</html>