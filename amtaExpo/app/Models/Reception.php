<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reception extends Model
{
    use HasFactory;


    protected $fillable = [
    
        'video_url',
        'contact_url',
        'info_url',
        'regist_url',
        'desc',
        
    ];

    protected $table = 'receptions';
}
