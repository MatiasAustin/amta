@extends('components/suform-new')

@section('style-child')
    #parent-nav .menu a#badge   {
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


    /* Section */


    #form-badge {
        display: grid;
        margin-top: 50px;
        margin-left: 50px;
    }
    
    #upload-title   {
        text-decoration: none;
        font-family: "Barlow Semi Condensed", sans-serif;
        color: #b8b8b8;
        font-weight: 400;
        letter-spacing: 1px;
        font-size: 16px;
    }

    #upload-logo    {
        margin-top: 15px;
        text-decoration: none;
        font-family: sans-serif;
        color: #858585;
        font-weight: 400;
        letter-spacing: 1px;
        font-size: 14px;
    }

    input#save  {
        margin-top: 50px;
        width: 120px;
        height: 25px;
        background-color: #63b1c9;
        border: none;
        border-radius: 5px;

        /* text style */
        text-decoration: none;
        font-family: sans-serif;
        color: #858585;
        font-weight: 400;
        letter-spacing: 1px;
        font-size: 14px;
        }

        input#save:hover  {
            cursor: pointer;
            background-color: #5496aa;

            /* text style */
            color: #dddddd;
        }
@endsection

@section('form-bar')
    <h1 id="title-form">
        Badge
    </h1>


    <form id="form-badge" action="">
        <!-- Logo Upload -->

        <label id="upload-title" for="logo">Website Logo</label><br>
        <input id="upload-logo" type="file"name="logo">

        
        
        <!-- button -->
        <input id="save" type="submit" value="Save">
    </form>

@endsection