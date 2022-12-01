@extends('components/suform-new')

@section('style-child')
    #parent-nav .menu a#landing-page   {
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

@endsection

@section('form-bar')
    <h1 id="title-form">
        Landing Page
    </h1>

    <form id="booth-form-container" action="">
        <!-- desc landing page -->
        <label class="title" for="desc-landing-page">Landing Page Descriptions</label>
        <textarea class="input-desc" name="desc-landing-page"></textarea>

        <!-- button -->
        <input id="save-form" type="submit" value="Save">
    </form>

@endsection