<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booth extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'booth_number',
        'tooltip_logo',
        'company_logo',
        'company_name',
        'brand_list',
        'contact',
        'description',
        'video_url',
        'catalog_url',
        'contact_url',
        'product_url',
        'info_url',
        'event_name',
        'event_desc',
        'event_schedule',
        'event_url',
    ];

    protected $table = 'booths';
}