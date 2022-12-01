<!DOCTYPE html>
<html>

    <head>

        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


        <!-- doc style [0] -->
        <link rel="stylesheet" href="/css/Fairhall.css">

        <!-- tooltip style -->
        <link rel="stylesheet" href="/css/tooltip.css">
        
        <!-- layout booth style ( section zoom) -->
            <!-- zoom null [1] -->
            <link id="zoom-style" rel="stylesheet" href="/css/partner-booth-layout-zoom-responsive.css">

        <!-- Style Hide or Show Partner Logo -->
        <style>
            #booth4 img.hide {display:none !important;}
            #booth4 img.show {display:block !important;}
        </style>

        
        <!-- font style -->
        <link rel="stylesheet" href="https://fonts.google.com/specimen/Barlow+Semi+Condensed?query=barlow">
        <link rel="stylesheet" href="https://fonts.google.com/specimen/Barlow?query=barlow">
    
        
        <title>AMTA EXPO-Fair Hall</title>
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

            <div id="maps-image">
                <div id="frame-dragable-image-fairhall">
                        <div id="dragable-image" style="top: -100px; left: -400px;">
                                <img src="img/fairhall.jpg" alt="image-background" style="width: 2500px; 
                                height: 1259.66px;">

                                <div id="partner-booth">
                                    <div id="column1">
                                        <div id="booth1" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-1">
                                                <img id="imgJs" src="uploads/{{ $booth_1 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth2" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-2">
                                                <img id="imgJs" src="uploads/{{ $booth_2 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth3" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-3">
                                                <img id="imgJs" src="uploads/{{ $booth_3 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth4" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-4">
                                                <img id="imgJs" src="uploads/{{ $booth_4 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth5" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-5">
                                                <img id="imgJs" src="uploads/{{ $booth_5 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth6" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-6">
                                                <img id="imgJs" src="uploads/{{ $booth_6 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth7" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-7">
                                                <img id="imgJs" src="uploads/{{ $booth_7 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth8" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-8">
                                                <img id="imgJs" src="uploads/{{ $booth_8 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                    </div>
                                    <div id="column2">
                                        <div id="booth9" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-9">
                                                <img id="imgJs" src="uploads/{{ $booth_9 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth10" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-10">
                                                <img id="imgJs" src="uploads/{{ $booth_10 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth11" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-11">
                                                <img id="imgJs" src="uploads/{{ $booth_11 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth12" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-12">
                                                <img id="imgJs" src="uploads/{{ $booth_12 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth13" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-13">
                                                <img id="imgJs" src="uploads/{{ $booth_13 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth14" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-14">
                                                <img id="imgJs" src="uploads/{{ $booth_14 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth15" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-15">
                                                <img id="imgJs" src="uploads/{{ $booth_15 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth16" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-16">
                                                <img id="imgJs" src="uploads/{{ $booth_16 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                    </div>
                                    <div id="column3">
                                        <div id="booth17" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-17">
                                                <img id="imgJs" src="uploads/{{ $booth_17 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth18" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-18">
                                                <img id="imgJs" src="uploads/{{ $booth_18 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth19" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-19">
                                                <img id="imgJs" src="uploads/{{ $booth_19 }}" alt="partner-logo">
                                            </a>
                                        </div>
                                        <div id="booth20" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-20">
                                                <img id="imgJs" src="uploads/{{ $booth_20 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth21" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-21">
                                                <img id="imgJs" src="uploads/{{ $booth_21 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth22" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-22">
                                                <img id="imgJs" src="uploads/{{ $booth_22 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth23" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-23">
                                                <img id="imgJs" src="uploads/{{ $booth_23 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                    </div>
                                    <div id="column4">
                                        <div id="booth24" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-24">
                                                <img id="imgJs" src="uploads/{{ $booth_24 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth25">
                                            <a class="a_get" href="Booth/Booth-25">
                                                <img id="imgJs" src="uploads/{{ $booth_25 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth26" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-26">
                                                <img id="imgJs" src="uploads/{{ $booth_26 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth27" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-27">
                                                <img id="imgJs" src="uploads/{{ $booth_27 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth28" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-28">
                                                <img id="imgJs" src="uploads/{{ $booth_28 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth29" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-29">
                                                <img id="imgJs" src="uploads/{{ $booth_29 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth30" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-30">
                                                <img id="imgJs" src="uploads/{{ $booth_30 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth31" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-31">
                                                <img id="imgJs" src="uploads/{{ $booth_31 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                        <div id="booth32" style="width: 88px; height: 49px;">
                                            <a class="a_get" href="Booth/Booth-32">
                                                <img id="imgJs" src="uploads/{{ $booth_32 }}" alt="partner-logo" style="width: 88px; height: 49px;">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div id="button-maps">
                            <div id="arrow">  
                                <div id="vertical">
                                    <div class="up">
                                        <a href="javascript:;"><img src="img/button nav/Up hover.png" alt="up"></a>
                                    </div>
                                    <div class="down">
                                        <a href="javascript:;"><img src="img/button nav/Down hover.png" alt="down"></a>
                                    </div>
                                </div>
                                <div id="horizontal">
                                    <div class="left">
                                        <a href="javascript:;"><img src="img/button nav/Left hover.png" alt="left"></a>
                                    </div>
                                    <div class="right">
                                        <a href="javascript:;"><img src="img/button nav/Right hover.png" alt="right"></a>
                                    </div>
                                </div>
                            </div>
                            <div id="zoom-control">
                                <div class="zoomOut">
                                    <a href="javascript:;"><img src="img/button nav/zoom out-hover.png" alt="zoomOut"></a>
                                </div>
                                <div class="zoomIn">
                                    <a href="javascript:;"><img src="img/button nav/zoom in-hover.png" alt="zoomIn"></a>
                                </div>
                            </div>
                        </div>
                </div>

                <span class="overlay-radius">
                    <img src="img/Subtract.png">
                </span>
            </div>

            <div class="about-fairhall">
                <h3>SUBTITLE</h3>
                <br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut volutpat nisi, a fringilla mi. Maecenas sollicitudin turpis ante. Pellentesque lorem metus, iaculis auctor pretium vel, luctus quis ex. Maecenas et tristique quam. Aenean eget gravida arcu, in imperdiet nulla. In viverra aliquam massa vel porttitor.</p>
            </div>

            <div class="footer">
                <h5>All right reserved by AMTA EXPO</h5>
            </div>

        </div>
        


        


    <!-- zoom control -->
    <script id="zoom-control" src="/js/zoomControl.js"></script>

    <!-- arrow control imgae -->
    <script id="nav-arrow" src="/js/eventNavArrow-zoom-responsive.js"></script>

    <!-- <script src="JS/dragableDiv.js"></script> -->

    <!-- <script src="/js/hide-img.js"></script> -->
    

    <!-- tooltip-hover -->
    <!-- <script id="tooltip-hover" src="/js/tooltipHover.js"></script> -->
    <!-- <script id="tooltip-hover" src="/js/tooltip.js"></script> -->
   
    @extends('tool_tip/tool_tip')
    @extends('components/JS/hide-img')
    
    
    


    </body>
</html>




