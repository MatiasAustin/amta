<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- stylesheet CSS -->
    <link rel="stylesheet" href="/css/event.css">
    

    <title>AMTA Expo-Event</title>
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

        <div id="container nav-menu">
            <div id="nav-menu">
                <ul>
                    <li class="nav1"><a href="reception">RECEPTION</a></li>
                    <li class="nav2"><a href="fairhall">FAIR HALL</a></li>
                    <li class="nav3"><a href="exhibition">EXHIBITION</a></li>
                    <li class="nav4"><a href="event">EVENT</a></li>
                </ul>
            </div>
        </div> 

        
        
        <div id="exhibitor-flex">
            <div id="exhibitor">
                <div class="head-title">
                    <h5>EVENT</h5>
                </div>
                <div class="title-items">
                    <h5 class="title">DESCRIPTION</h5>
                    <h5 class="title">SCHEDULE</h5>
                </div>

                <div id="scrolling-mask">
                    
                    @foreach ( $events as $event )    
                        <!-- DOM item form booth with PHP -->
                        <div class="dom-item">
                            <p class="item-desc">
                                <b>{{ $event->event_name }}</b><br>
                                {{ $event->event_desc }}
                            </p>
                            <p class="item-schedule">
                                {{ $event->event_schedule }}
                            </p>
                            <div class="item-website">
                                <a href="{{ $event->event_url }}"><img src="img/Ikon/web button ikon.PNG" Alt="LOGO"></a>
                            </div>
                        </div>
                    @endforeach
                    

                </div>
            </div>
        </div>

        <div class="footer">
            <h5>All right reserved by AMTA EXPO</h5>
        </div>

    </div>
</body>
</html>