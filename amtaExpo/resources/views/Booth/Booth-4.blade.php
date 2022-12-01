<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="/booth-css/booth-4.css">

    <title>AMTA Expo-Booth 4</title>
</head>

<body>
    <div id="wrapper">
        <div id="header">
            <div id="logo">
                <a href="/"><img src="/booth-img/AMTA EXPO.png" Alt="LOGO"></a>
            </div>

            <div id="sub-menu">
                <div id="brochure-button">
                    <a href="{{ $catalog_url }}"><img src="/booth-img/Ikon/Brochure.png" alt="icon"></a>
                </div>
                <div id="contactUs-button">
                    <a href="{{ $contact_url }}"><img src="/booth-img/Ikon/Contact Us.png" alt="icon"></a>
                </div>
                <div id="product-button">
                    <a href="{{ $product_url }}"><img src="/booth-img/Ikon/Product.png" alt="icon"></a>
                </div>
                <div id="exit-button">
                    <a href="../fairhall"><img src="/booth-img/Ikon/Exit Booth.png" alt="icon"></a>
                </div>
            </div>
        </div>


        <div id="booth">

            <div id="img-booth">
                <img src="/booth-img/Booth Background/bg-booth4.png">
            </div>
            <div id="info-button">
                <a href="{{ $info_url }}"><img src="/booth-img/Ikon/Info.png" alt="icon" style="width: 50px; height: 50px;"></a>
            </div> 

            <iframe id="video-player" width="170" height="100"
            src="{{ $video_url }}">
            </iframe> 
        </div>

        <div class="about-booth">
            <h3>{{ $company_name }}</h3>
            <br>
            <p>{{ $description }}</p>
        </div>

        <div class="footer">
            <h5>All right reserved by AMTA EXPO</h5>
        </div>

    </div>
    
</body>
</html>