<?php

namespace App\Http\Controllers;

use App\Models\Reception;
use Illuminate\Http\Request;

class ReceptController extends Controller
{
    
    
    public function recept () {

        // $get = Reception::all();

        // return $get;
        return view('reception', [
            'video_url' => Reception::value('video_url'),
            'contact_url' => Reception::value('contact_url'),
            'info_url' => Reception::value('info_url'),
            'regist_url' => Reception::value('regist_url'),
            'desc' => Reception::value('desc'),
        ]);
    }
}
