<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- stylesheet CSS -->
    <link rel="stylesheet" href="/css/exhibitor.css">
    

    <title>AMTA Expo-Exhibitor</title>
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
                    <h5>EXHIBITOR</h5>
                </div>
                <div class="title-items">
                    <h5 class="title">COMPANY NAME</h5>
                    <h5 class="title">BRAND</h5>
                    <h5 class="title">CONTACT US</h5>
                    <h5 class="title">DESCRIPTION</h5>
                </div>

                <div id="scrolling-mask">
                   
                
                @foreach ( $booths as $booth  )
                    <!-- Exhi 1 -->
                    <div class="dom-item">
                        <p class="item-nama" style="width: 240px;">{{ $booth->company_name }}</p>
                        <p class="item-brandList" style="width: 186.167px;">
                            {{ $booth->brand_list }}
                        </p>
                        
                        <p class="item-contact" style="width: 219.167px;">{{ $booth->contact }}</p>
                        <p class="item-desc" style="width: 400px;">{{ $booth->description }}</p>
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