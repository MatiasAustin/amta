<?php

namespace App\Http\Controllers;

use App\Models\Booth;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function event() {
        
        
        // $booths = Booth::all();

        // $value = $booths->pluck('event_url');

        // return $value;
        
        
        return view ('event', [

            'events' => Booth::all()
        
            // 'company_name' => Booth::pluck('company_name'),
            // 'brand_list' => Booth::pluck('brand_list'),
            // 'contact' => Booth::pluck('contact'),
            // 'description' => Booth::pluck('description'),
          
        ]);
    }
}
