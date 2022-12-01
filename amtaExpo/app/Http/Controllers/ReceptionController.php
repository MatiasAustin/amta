<?php

namespace App\Http\Controllers;

use App\Models\Reception;
use App\Http\Requests\StoreReceptionRequest;
use App\Http\Requests\UpdateReceptionRequest;

class ReceptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view ('/do/reception-page', [
            'booths' => Reception::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('do.reception-page');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreReceptionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreReceptionRequest $request)
    {
        // Validate Data
        $request->validate([
            
            'video_url' => ['required'],
            'contact_url' => ['required'],
            'info_url' => ['required'],
            'regist_url' => ['required'],
            'desc' => ['required'],
            // 'event_name' => ['nullable'],   
            // 'event_desc' => ['nullable'],
            // 'event_schedule' => ['nullable'],    
            // 'event_url' => ['nullable'],    
        ]);


        $input = $request->all();

        // $user = 
        Reception::create($input);

        // Auth::login($user);
        // return $boothData;
        // return redirect('do/booth-filled');
        return redirect()->route('reception-page.create')->with('success','Reception filled!.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reception  $reception
     * @return \Illuminate\Http\Response
     */
    public function show(Reception $reception)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Reception  $reception
     * @return \Illuminate\Http\Response
     */
    public function edit(Reception $reception)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateReceptionRequest  $request
     * @param  \App\Models\Reception  $reception
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateReceptionRequest $request, Reception $reception)
    {
        // Validate Data
        $request->validate([
            
            'video_url' => ['required'],
            'contact_url' => ['required'],
            'info_url' => ['required'],
            'regist_url' => ['required'],
            'desc' => ['required'],
            // 'event_name' => ['nullable'],   
            // 'event_desc' => ['nullable'],
            // 'event_schedule' => ['nullable'],    
            // 'event_url' => ['nullable'],    
        ]);


        // $input = $request->all();
        // News::find($news)->update($request->all());
        Reception::update($request->all());
        Reception::table($input)
                    ->where('id', 1)
                    ->update(['votes' => 1]);


              

        // Auth::login($user);
        // return $boothData;
        // return redirect('do/booth-filled');
        return redirect()->route('reception-page.create')->with('success','Reception filled!.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reception  $reception
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reception $reception)
    {
        $booth = Reception::all();
        Reception::destroy($booth); 
    }
}
