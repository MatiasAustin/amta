<?php

namespace App\Http\Controllers;

use App\Models\Booth;
use Illuminate\Http\Request;

class ExhiController extends Controller
{


    public function exhi() {
        
        
        // $booths = Booth::all();

        // $value = $booths->pluck('company_name');

        // return $value;
        
        
        return view ('exhibition', [

            'booths' => Booth::all()
        
            // 'company_name' => Booth::pluck('company_name'),
            // 'brand_list' => Booth::pluck('brand_list'),
            // 'contact' => Booth::pluck('contact'),
            // 'description' => Booth::pluck('description'),
          
        ]);
    }












    // /**
    //  * Display a listing of the resource.
    //  *
    //  * @return \Illuminate\Http\Response
    //  */
    // public function index()
    // {
    //     //
    // }

    // /**
    //  * Show the form for creating a new resource.
    //  *
    //  * @return \Illuminate\Http\Response
    //  */
    // public function create()
    // {
    //     //
    // }

    // /**
    //  * Store a newly created resource in storage.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @return \Illuminate\Http\Response
    //  */
    // public function store(Request $request)
    // {
    //     //
    // }

    // /**
    //  * Display the specified resource.
    //  *
    //  * @param  \App\Models\Booth  $booth
    //  * @return \Illuminate\Http\Response
    //  */
    // public function show(Booth $booth)
    // {
    //     //
    // }

    // /**
    //  * Show the form for editing the specified resource.
    //  *
    //  * @param  \App\Models\Booth  $booth
    //  * @return \Illuminate\Http\Response
    //  */
    // public function edit(Booth $booth)
    // {
    //     //
    // }

    // /**
    //  * Update the specified resource in storage.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @param  \App\Models\Booth  $booth
    //  * @return \Illuminate\Http\Response
    //  */
    // public function update(Request $request, Booth $booth)
    // {
    //     //
    // }

    // /**
    //  * Remove the specified resource from storage.
    //  *
    //  * @param  \App\Models\Booth  $booth
    //  * @return \Illuminate\Http\Response
    //  */
    // public function destroy(Booth $booth)
    // {
    //     //
    // }
}
