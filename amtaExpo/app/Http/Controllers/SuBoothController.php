<?php

namespace App\Http\Controllers;

use App\Models\Booth;
use Illuminate\Http\Request;

class SuBoothController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $boothData = Booth::all();

        // return $boothData;

        
        return view ('/do/booth-active-list', [
            'booths' => Booth::all(),
            'booth' => Booth::all()
        ]);

        // class  fairhall {
        //     return view ('fairhall', [
        //         'booths' => Booth::all()
        //     ]);
        // }


        // Ambill seluruh baris dari satu Column berdasarkan nilai Column 'boot_number'
        // $show = Booth::all();

        // $value = $show->where('booth_number', 'booth_2')->first();

        // return $value;

        // Ambil salah satu nilai data data Column berdasarkan nilai Column 'booth_number'
        
        // $show = Booth::all();

        // $column = $show->where('booth_number', 'booth_2')->first();

        // $record = $column->value('company_logo');

        // return $record;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('/do/booth-form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate Data
        $request->validate([
            'booth_number' => ['required', 'unique:booths'],
            'company_logo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'tooltip_logo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'company_name' => ['required'],
            'brand_list' => ['required'],
            'contact' => ['required'],
            'description' => ['required'],
            'video_url' => ['required'],
            'catalog_url' => ['required'],
            'contact_url' => ['required'],
            'product_url' => ['required'],
            'info_url' => ['required'],
            // 'event_name' => ['nullable'],   
            // 'event_desc' => ['nullable'],
            // 'event_schedule' => ['nullable'],    
            // 'event_url' => ['nullable'],    
        ]);


        $input = $request->all();
        if ($image = $request->file('company_logo')) {
            $imageDestinationPath = 'uploads/';
            $postImage = date('YmdHis') . "." .
            
            $image->getClientOriginalExtension();
            $image->move($imageDestinationPath, $postImage);
            $input['company_logo'] = "$postImage";
        }
        if ($image = $request->file('tooltip_logo')) {
            $imageDestinationPath = 'tooltip/';
            $postImage = date('YmdHis') . "." .
            
            $image->getClientOriginalExtension();
            $image->move($imageDestinationPath, $postImage);
            $input['tooltip_logo'] = "$postImage";
        }

        // $user = 
        Booth::create($input);

        // Auth::login($user);
        // return $boothData;
        // return redirect('do/booth-filled');
        return redirect()->route('booth-active-list.index')->with('success','Booth filled!.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\booth  $booth
     * @return \Illuminate\Http\Response
     */
    public function show(booth $booth)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\booth  $booth
     * @return \Illuminate\Http\Response
     */
    public function edit(booth $booth)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\booth  $booth
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, booth $booth)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\booth  $booth
     * @return \Illuminate\Http\Response
     */
    public function destroy(booth $booth)
    {
        
        // $booth->delete();
        // $booth = Booth::all()->where('booth_number');
        $booth->where('id')->get();
        // Booth::destroy($booth);
        return $booth;
        
        // $deleted = booths::delete('delete from users');
        // Booth::destroy($booth->id);
        // // $booth->where('booth_number')->delete();
        // return redirect()->route('booth-active-list.index')->with('success','Booth deleted!.');
        
        
        // Delete Booth
        // return view ('/do/booth-active-list', [    
        //  'delete1' => Booth::where('booth_number', 'booth_1')->delete(),
        //  'delete2' => Booth::where('booth_number', 'booth_2')->delete(),
        //  'delete3' => Booth::where('booth_number', 'booth_3')->delete(),
        //  'delete4' => Booth::where('booth_number', 'booth_4')->delete(),
        //  'delete5' => Booth::where('booth_number', 'booth_5')->delete(),
        //  'delete6' => Booth::where('booth_number', 'booth_6')->delete(),
        //  'delete7' => Booth::where('booth_number', 'booth_7')->delete(),
        //  'delete8' => Booth::where('booth_number', 'booth_8')->delete(),
        //  'delete9' => Booth::where('booth_number', 'booth_9')->delete(),
        //  'delete10' => Booth::where('booth_number', 'booth_10')->delete(),
        //  'delete11' => Booth::where('booth_number', 'booth_11')->delete(),
        //  'delete12' => Booth::where('booth_number', 'booth_12')->delete(),
        //  'delete13' => Booth::where('booth_number', 'booth_13')->delete(),




        // // return redirect()->route('do.booth-active-list')->with('success','Booth deleted successfully')

        // ]);
    }




    public function booth5 ()
    {
        
        $booth5 = Booth::where('booth_number', 'booth_5');
        return $booth5;



    }
}




