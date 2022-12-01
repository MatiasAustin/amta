@extends('components/suform-new')

@section('style-child')
    #parent-nav .menu a#reception-page   {
        color: #63b1c9;
    }

    #su-title-1 {
        color: #63b1c9;
    }

    h1#title-form   {
        margin-left: 50px;
        text-decoration: none;
        font-family: "Barlow Semi Condensed", sans-serif;
        color: #63b1c9;
        font-weight: 500;
        letter-spacing: normal;
        font-size: 32px;
    }

    h3.sub-title {
        margin-bottom: 30px;
        margin-top: 30px;
        text-decoration: underline;
        font-family: "Barlow Semi Condensed", sans-serif;
        color: #b8b8b8;
        font-weight: 500;
        letter-spacing: 1px;
        font-size: 22px;
    }

@endsection

@section('form-bar')
    <h1 id="title-form">
        Reception Page
    </h1>

    <form id="booth-form-container" method="POST" action="{{ route('reception-page.store') }}">

        @csrf

                <!-- Booth Fill -->
                <h3 class="sub-title">
                    Button URL
                </h3>

                <!-- url Input - Video -->
                <label class="title" for="video_url">Video URL</label>
                <input class="input" type="text" name="video_url" :value="old('video_url')" required>
                    
                <!-- url Input - contact -->
                <label class="title" for="contact_url">Contact URL</label>
                <input class="input" type="text" name="contact_url" :value="old('contact_url')" required>

                <!-- url Input - info -->
                <label class="title" for="info_url">Info URL</label>
                <input class="input" type="text" name="info_url" :value="old('info_url')" required>
                
                <!-- url Input - regist -->
                <label class="title" for="regist_url">Registration URL</label>
                <input class="input" type="text" name="regist_url" :value="old('regist_url')" required>



                <!-- Booth Fill -->
                <h3 class="sub-title">
                    Page Description
                </h3>
                <!-- url Input - desc -->
                <label class="title" for="desc">Description</label>
                <textarea class="input-desc" name="desc" :value="old('desc')"></textarea>

                <!-- button -->
                <input id="save-form" type="submit" value="Save">
    </form>

@endsection