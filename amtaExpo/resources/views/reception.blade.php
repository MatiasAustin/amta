<!DOCTYPE html>
<html>

    <head>

        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="stylesheet" href="/css/reception.css">
        <link rel="stylesheet" href="https://fonts.google.com/specimen/Barlow+Semi+Condensed?query=barlow">
        <link rel="stylesheet" href="https://fonts.google.com/specimen/Barlow?query=barlow">
    
        
        <title>AMTA EXPO-Reception</title>
    </head>

    <body>
        <div id="wrapper">
            <div id="header">
                <div id="logo">
                    <a href="/"><img src="img/AMTA EXPO.png" Alt="LOGO"></a>
                </div>
    
                <div id="frame-slide">
                    <div id="slider-clip">
                        <div id="slider-animation">
                            <ul id="logo-partner">
                                <li class="logo"><a href=""><img src="img/partner logo.png" ></a></li>
                                <li class="logo"><a href=""><img src="img/partner logo.png" ></a></li>
                                <li class="logo"><a href=""><img src="img/partner logo.png" ></a></li>
                                <li class="logo"><a href=""><img src="img/partner logo.png" ></a></li>
                                <li class="logo"><a href=""><img src="img/partner logo.png" ></a></li>

                            </ul>
                            <ul id="logo-partner2">
                                <li class="logo"><a href=""><img src="img/partner logo.png" ></a></li>
                                <li class="logo"><a href=""><img src="img/partner logo.png" ></a></li>
                                <li class="logo"><a href=""><img src="img/partner logo.png" ></a></li>
                                <li class="logo"><a href=""><img src="img/partner logo.png" ></a></li>
                                <li class="logo"><a href=""><img src="img/partner logo.png" ></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="frame-menu">
                <div id="nav-menu">
                    <ul>
                        <li class="nav1"><a href="reception">RECEPTION</a></li>
                        <li class="nav2"><a href="fairhall">FAIR HALL</a></li>
                        <li class="nav3"><a href="exhibition">EXHIBITION</a></li>
                        <li class="nav4"><a href="event">EVENT</a></li>
                    </ul>
                </div>
            </div>

            <div id="reception">

                <div id="img-reception">
                    <img src="img/Reception.png">
                </div>
                <div id="sub-menu">
                    <div id="video-button">
                        <a href="{{ $video_url }}"><img src="img/Ikon/Video.png" alt="icon"></a>
                    </div>
                    <div id="contact-us-button">
                        <a href="{{ $contact_url }}"><img src="img/Ikon/Contact Us.png" alt="icon"></a>
                    </div>
                    <div id="info-button">
                        <a href="{{ $info_url }}"><img src="img/Ikon/Info.png" alt="icon"></a>
                    </div>
                </div>

                <div id="registration-button" >
                    <a href="{{ $regist_url }}">REGISTRATION</a>
                </div>  

            </div>

            <div class="about-reception">
                <h3>AMTA Expo</h3>
                <br>
                <p>{{ $desc }}</p>
            </div>

            <div class="footer">
                <h5>All right reserved by AMTA EXPO</h5>
            </div>

        </div>



    </body>
</html>