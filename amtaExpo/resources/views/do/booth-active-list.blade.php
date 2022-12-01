@extends('components/suform-new')

@section('style-child')
    #parent-nav .menu a#b-list  {
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

    #add-booth-btn {
        width: 150px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 50px;
        margin-bottom: 30px;
        margin-top: 30px;
        background-color: #63b1c9;
        border-radius: 5px;
        opacity: 75%;
    }
    #add-booth-btn:hover {
        opacity: 100%;
        background-color: #5496aa;
        
        <!-- Text Style -->
        color: #dddddd;
    }

    #add-booth-btn a {
        
        text-decoration: none;
        font-family: "Barlow Semi Condensed", sans-serif;
        color: #b8b8b8;
        font-weight: 500;
        letter-spacing: 1px;
        <!-- font-size: 16px; -->
    }

    #add-booth-btn .add-icon {
        margin-left: 10px;
    }

    #booth-list {
        margin-left: 50px;
        margin-bottom: 30px;
        margin-top: 30px;
    }

@endsection

@section('form-bar')
    <h1 id="title-form">
        Booth Active List
    </h1>


    <div id="add-booth-btn">
        <a href="{{ route('booth-active-list.create') }}">
            Add Booth

            <svg class="add-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#b8b8b8" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
            </svg>
        </a>
    </div>
        
    <div id="booth-list">
         <div class="table-responsive ms-0" style="width:700px;">
             <table class="table table-dark" >
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Booth Number</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ( $booths as $booth )
                        <tr>
                        <th scope="row">{{ $loop->iteration }}</th>
                            <td>{{ $booth->booth_number }}</td>
                            <td>{{ $booth->company_name }}</td>
                            <td>
                                <form action="{{ route('booth-active-list.destroy', $booth) }}" method="POST" class="d-inline">
                                    @method('delete')
                                    @csrf


                                    <button onclick="return confirm('Delete Booth')" class="bg-none" style="cursor: pointer;"> 
                                        <img src="/img/ikon/delete-icon.png" alt="delete-icon" style="width:32px; height: 32px;">
                                    </button>
                                </form>
                            </td>
                            
                        </tr>
                    @endforeach
                    
                
                </tbody>
            </table>
        </div>

    </div>

    

@endsection