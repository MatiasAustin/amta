@extends('components/suform-new')

@section('style-child')
    #parent-nav .menu a#b-form  {
        color: #63b1c9;
    }

    #su-title-2 {
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

    .hide {display:none !important;}
    .show {display:block !important;}
    .hide2 {display:none !important;}
    .show2 {display:block !important;}

    #previewImg     {
        margin-bottom: 15px;
        max-width: 400px;
        height: auto;
        max-height: 200px;
    }
    #previewImg2     {
        margin-bottom: 15px;
        max-width: 400px;
        height: auto;
        max-height: 200px;
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

    select.form-select {
        width: 700px;
        height: 25px;
        text-decoration: none;
        font-family: "Barlow Semi Condensed", sans-serif;
        color: #8a8a8a;
        font-weight: 400;
        letter-spacing: 1px;
        font-size: 16px;
    }

    p.danger {
        text-decoration: none;
        font-family: "Barlow Semi Condensed", sans-serif;
        color: #e22525;
        font-weight: 400;
        letter-spacing: 1px;
        font-size: 9px;
    }

@endsection

@section('form-bar')
    <h1 id="title-form">
        Booth From
    </h1>

    <form id="booth-form-container" method="POST" action="{{ route('booth-active-list.store') }}" enctype="multipart/form-data">

        @csrf

                <!-- Booth Fill -->
                <h3 class="sub-title">
                    Booth Number
                </h3>
                    <!-- Select Booth Number -->
                    <select class="form-select form-select-sm" aria-label=".form-select-sm" name="booth_number" :value="old('booth_number')" required>
                        <option value="booth_1" selected>Booth 1</option>
                        <option value="booth_2">Booth 2</option>
                        <option value="booth_3">Booth 3</option>
                        <option value="booth_4">Booth 4</option>
                        <option value="booth_5">Booth 5</option>
                        <option value="booth_6">Booth 6</option>
                        <option value="booth_7">Booth 7</option>
                        <option value="booth_8">Booth 8</option>
                        <option value="booth_9">Booth 9</option>
                        <option value="booth_10">Booth 10</option>
                        <option value="booth_11">Booth 11</option>
                        <option value="booth_12">Booth 12</option>
                        <option value="booth_13">Booth 13</option>
                        <option value="booth_14">Booth 14</option>
                        <option value="booth_15">Booth 15</option>
                        <option value="booth_16">Booth 16</option>
                        <option value="booth_17">Booth 17</option>
                        <option value="booth_18">Booth 18</option>
                        <option value="booth_19">Booth 19</option>
                        <option value="booth_20">Booth 20</option>
                        <option value="booth_21">Booth 21</option>
                        <option value="booth_22">Booth 22</option>
                        <option value="booth_23">Booth 23</option>
                        <option value="booth_24">Booth 24</option>
                        <option value="booth_25">Booth 25</option>
                        <option value="booth_26">Booth 26</option>
                        <option value="booth_27">Booth 27</option>
                        <option value="booth_28">Booth 28</option>
                        <option value="booth_29">Booth 29</option>
                        <option value="booth_30">Booth 30</option>
                        <option value="booth_31">Booth 31</option>
                        <option value="booth_32">Booth 32</option>
                    </select>




                <!-- Booth Fill -->
                <h3 class="sub-title">
                    Booth Fill
                </h3>

                    <!-- Input Company Logo -->
                    <label class="title" for="tooltip_logo">Company Logo</label><br>
                    
                    <img id="previewImg" class="img" src=""  />

                    <p class="danger">Min. size for logo is width: 200px X height: auto!</p>

                    <input id="imgInp" class="input" type="file" name="tooltip_logo" :value="old('tooltip_logo')" required>


                    <!-- Input Company Logo for Fairhall -->
                    <label class="title" for="company_logo">Logo Fairhall</label><br>
                    
                    <img id="previewImg2" class="img2" src=""  />

                    <p class="danger">Image size for Booth in Fairhall is "width: 192px X height: 103,5px"!</p>

                    <input id="imgInp2" class="input" type="file" name="company_logo" :value="old('company_logo')" required>

                    

                    <script>
                        // Preview Image 1
                        imgInp.onchange = evt => {
                            const [file] = imgInp.files
                            if (file) {
                                previewImg.src = URL.createObjectURL(file)
                            }
                        }

                        $(document).ready(function(){
                            $('#previewImg[src=""]').hide();
                            $('#previewImg:not([src=""])').show();
                        });

                        // Preview Image 2
                        imgInp2.onchange = evt => {
                            const [file] = imgInp2.files
                            if (file) {
                                previewImg2.src = URL.createObjectURL(file)
                            }
                        }

                        $(document).ready(function(){
                            $('#previewImg2[src=""]').hide2();
                            $('#previewImg2:not([src=""])').show2();
                        });
                    </script>


                    <!-- url Input - Video -->
                    <label class="title" for="company_name">Company Name</label>
                    <input class="input" type="text" name="company_name" :value="old('company_name')" required>
                    
                    <!-- url Input - catalog -->
                    <label class="title" for="brand_list">Brand List</label>
                    <input class="input" type="text" name="brand_list" :value="old('brand_list')" required>

                    <!-- url Input - contact -->
                    <label class="title" for="contact">Contact</label>
                    <input class="input" type="text" name="contact" :value="old('contact')" required>

                    <!-- url Input - product -->
                    <label class="title" for="description">Description</label>
                    <textarea class="input-desc" name="description" :value="old('description')" required></textarea>


                <!-- Exhibitor Page Fill -->
                <h3 class="sub-title">
                    Booth URL Button
                </h3>
                    <!-- url Input - video -->
                    <label class="title" for="video_url">Video URL</label>
                    <input class="input" type="text" name="video_url" :value="old('video-url')" required>
                    
                    <!-- url Input - catalog -->
                    <label class="title" for="catalog_url">Catalog URL</label>
                    <input class="input" type="text" name="catalog_url" :value="old('catalog_url')" required>

                    <!-- url Input - contact -->
                    <label class="title" for="contact_url">Contact URL</label>
                    <input class="input" type="text" name="contact_url" :value="old('contact_url')" required>

                    <!-- url Input - product -->
                    <label class="title" for="product_url">Product URL</label>
                    <input class="input" type="text" name="product_url" :value="old('product_url')" required>

                    <!-- url Input - info -->
                    <label class="title" for="info_url">Info URL</label>
                    <input class="input" type="text" name="info_url" :value="old('info_url')" required>
                
                
                <!-- Event Page Fill -->
                <h3 class="sub-title">
                    Event Page
                </h3>
                    <!-- Input Event -Name  -->
                    <label class="title" for="event_name">Event Name</label>
                    <input class="input" type="text" name="event_name" :value="old('event_name')">
                    
                    <!-- Input Event -Desc -->
                    <label class="title" for="event_desc">Event Description</label>
                    <textarea class="input-desc" name="event_desc" :value="old('event_desc')"></textarea>

                    <!-- Input Event -Schedule -->
                    <label class="title" for="event_schedule">Event Schedule</label>
                    <input class="input" type="text" name="event_schedule" :value="old('event_schedule')">

                    <!-- Input Event -Link -->
                    <label class="title" for="event_url">Event URL</label>
                    <input class="input" type="text" name="event_url" :value="old('event_url')">
                    
                    
                

                    
                <!-- button -->
                <input id="save-form" type="submit" value="Save">
    </form>

@endsection