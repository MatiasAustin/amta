<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booth;

class BoothController extends Controller
{
    // Booth View
    public function booth_1() {
        return view('Booth/Booth-1', [
            'video_url' => Booth::where('booth_number', 'booth_1')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_1')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_1')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_1')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_1')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_1')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_1')->value('description'),
        ]);
    }
    public function booth_2() {
        return view('Booth/Booth-2', [
            'video_url' => Booth::where('booth_number', 'booth_2')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_2')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_2')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_2')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_2')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_2')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_2')->value('description'),
        ]);
    }
    public function booth_3() {
        return view('Booth/Booth-3', [
            'video_url' => Booth::where('booth_number', 'booth_3')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_3')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_3')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_3')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_3')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_3')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_3')->value('description'),
        ]);
    }
    public function booth_4() {
        return view('Booth/Booth-4', [
            'video_url' => Booth::where('booth_number', 'booth_4')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_4')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_4')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_4')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_4')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_4')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_4')->value('description'),
        ]);
    }
    public function booth_5() {
        return view('Booth/Booth-5', [
            'video_url' => Booth::where('booth_number', 'booth_5')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_5')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_5')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_5')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_5')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_5')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_5')->value('description'),
        ]);
    }
    public function booth_6() {
        return view('Booth/Booth-6', [
            'video_url' => Booth::where('booth_number', 'booth_6')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_6')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_6')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_6')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_6')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_6')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_6')->value('description'),
        ]);
    }
    public function booth_7() {
        return view('Booth/Booth-7', [
            'video_url' => Booth::where('booth_number', 'booth_7')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_7')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_7')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_7')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_7')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_7')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_7')->value('description'),
        ]);
    }
    public function booth_8() {
        return view('Booth/Booth-8', [
            'video_url' => Booth::where('booth_number', 'booth_8')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_8')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_8')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_8')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_8')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_8')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_8')->value('description'),
        ]);
    }
    public function booth_9() {
        return view('Booth/Booth-9', [
            'video_url' => Booth::where('booth_number', 'booth_9')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_9')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_9')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_9')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_9')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_9')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_9')->value('description'),
        ]);
    }
    public function booth_10() {
        return view('Booth/Booth-10',[
            'video_url' => Booth::where('booth_number', 'booth_10')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_10')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_10')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_10')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_10')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_10')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_10')->value('description'),
        ]);
    }
    public function booth_11() {
        return view('Booth/Booth-11', [
            'video_url' => Booth::where('booth_number', 'booth_11')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_11')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_11')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_11')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_11')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_11')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_11')->value('description'),
        ]);
    }
    public function booth_12() {
        return view('Booth/Booth-12', [
            'video_url' => Booth::where('booth_number', 'booth_12')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_12')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_12')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_12')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_12')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_12')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_12')->value('description'),
        ]);
    }
    public function booth_13() {
        return view('Booth/Booth-13', [
            'video_url' => Booth::where('booth_number', 'booth_13')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_13')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_13')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_13')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_13')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_13')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_13')->value('description'),
        ]);
    }
    public function booth_14() {
        return view('Booth/Booth-14', [
            'video_url' => Booth::where('booth_number', 'booth_14')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_14')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_14')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_14')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_14')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_14')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_14')->value('description'),
        ]);
    }
    public function booth_15() {
        return view('Booth/Booth-15', [
            'video_url' => Booth::where('booth_number', 'booth_15')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_15')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_15')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_15')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_15')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_15')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_15')->value('description'),
        ]);
    }
    public function booth_16() {
        return view('Booth/Booth-16', [
            'video_url' => Booth::where('booth_number', 'booth_16')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_16')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_16')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_16')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_16')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_16')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_16')->value('description'),
        ]);
    }
    public function booth_17() {
        return view('Booth/Booth-17', [
            'video_url' => Booth::where('booth_number', 'booth_17')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_17')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_17')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_17')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_17')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_17')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_17')->value('description'),
        ]);
    }
    public function booth_18() {
        return view('Booth/Booth-18', [
            'video_url' => Booth::where('booth_number', 'booth_18')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_18')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_18')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_18')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_18')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_18')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_18')->value('description'),
        ]);
    }
    public function booth_19() {
        return view('Booth/Booth-19', [
            'video_url' => Booth::where('booth_number', 'booth_19')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_19')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_19')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_19')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_19')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_19')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_19')->value('description'),
        ]);
    }
    public function booth_20() {
        return view('Booth/Booth-20', [
            'video_url' => Booth::where('booth_number', 'booth_20')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_20')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_20')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_20')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_20')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_20')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_20')->value('description'),
        ]);
    }
    public function booth_21() {
        return view('Booth/Booth-21', [
            'video_url' => Booth::where('booth_number', 'booth_21')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_21')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_21')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_21')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_21')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_21')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_21')->value('description'),
        ]);
    }
    public function booth_22() {
        return view('Booth/Booth-22', [
            'video_url' => Booth::where('booth_number', 'booth_22')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_22')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_22')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_22')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_22')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_22')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_22')->value('description'),
        ]);
    }
    public function booth_23() {
        return view('Booth/Booth-23', [
            'video_url' => Booth::where('booth_number', 'booth_23')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_23')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_23')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_23')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_23')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_23')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_23')->value('description'),
        ]);
    }
    public function booth_24() {
        return view('Booth/Booth-24', [
            'video_url' => Booth::where('booth_number', 'booth_24')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_24')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_24')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_24')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_24')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_24')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_24')->value('description'),
        ]);
    }
    public function booth_25() {
        return view('Booth/Booth-25', [
            'video_url' => Booth::where('booth_number', 'booth_25')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_25')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_25')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_25')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_25')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_25')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_25')->value('description'),
        ]);
    }
    public function booth_26() {
        return view('Booth/Booth-26', [
            'video_url' => Booth::where('booth_number', 'booth_26')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_26')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_26')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_26')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_26')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_26')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_26')->value('description'),
        ]);
    }
    public function booth_27() {
        return view('Booth/Booth-27', [
            'video_url' => Booth::where('booth_number', 'booth_27')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_27')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_27')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_27')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_27')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_27')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_27')->value('description'),
        ]);
    }
    public function booth_28() {
        return view('Booth/Booth-28', [
            'video_url' => Booth::where('booth_number', 'booth_28')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_28')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_28')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_28')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_28')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_28')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_28')->value('description'),
        ]);
    }
    public function booth_29() {
        return view('Booth/Booth-29', [
            'video_url' => Booth::where('booth_number', 'booth_29')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_29')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_29')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_29')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_29')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_29')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_29')->value('description'),
        ]);
    }
    public function booth_30() {
        return view('Booth/Booth-30', [
            'video_url' => Booth::where('booth_number', 'booth_30')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_30')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_30')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_30')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_30')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_30')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_30')->value('description'),
        ]);
    }
    public function booth_31() {
        return view('Booth/Booth-31', [
            'video_url' => Booth::where('booth_number', 'booth_31')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_31')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_31')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_31')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_31')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_31')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_31')->value('description'),
        ]);
    }
    public function booth_32() {
        return view('Booth/Booth-32', [
            'video_url' => Booth::where('booth_number', 'booth_32')->value('video_url'),
            'catalog_url' => Booth::where('booth_number', 'booth_32')->value('catalog_url'),
            'contact_url' => Booth::where('booth_number', 'booth_32')->value('contact_url'),
            'product_url' => Booth::where('booth_number', 'booth_32')->value('product_url'),
            'info_url' => Booth::where('booth_number', 'booth_32')->value('info_url'),
            'company_name' => Booth::where('booth_number', 'booth_32')->value('company_name'),
            'description' => Booth::where('booth_number', 'booth_32')->value('description'),
        ]);
    }


}

