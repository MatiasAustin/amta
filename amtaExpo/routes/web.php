<?php

use App\Models\Reception;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExhiController;
use App\Http\Controllers\BoothController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ReceptController;
use App\Http\Controllers\SuBoothController;
use App\Http\Controllers\FairhallController;
use App\Http\Controllers\ReceptionController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// Template Route with Controler
require __DIR__.'/auth.php';




// AMTA Expo Routes View
// Landing Page Route
Route::get('/', function () {
    return view('amtaexpo_landing_page', [
        'desc' => Reception::value('desc'),
    ]);
});

// Reception Route
Route::get('reception',[ReceptController::class, 'recept']);


// Fairhall Route
// Route::get('fairhall', function () {
//     return view('fairhall');
// });
Route::get('fairhall', [FairhallController::class, 'fairhall']);

// Exhi Route
Route::get('exhibition', [ExhiController::class, 'exhi']);

// Event Route
Route::get('event', [EventController::class, 'event']);
    

// booth-view

Route::get('Booth/Booth-1', [BoothController::class, 'booth_1']);
    
Route::get('Booth/Booth-2', [BoothController::class, 'booth_2']);

Route::get('Booth/Booth-3', [BoothController::class, 'booth_3']);

Route::get('Booth/Booth-4', [BoothController::class, 'booth_4']);

Route::get('Booth/Booth-5', [BoothController::class, 'booth_5']);

Route::get('Booth/Booth-6', [BoothController::class, 'booth_6']);

Route::get('Booth/Booth-7', [BoothController::class, 'booth_7']);

Route::get('Booth/Booth-8', [BoothController::class, 'booth_8']);

Route::get('Booth/Booth-9', [BoothController::class, 'booth_9']);

Route::get('Booth/Booth-10', [BoothController::class, 'booth_10']);

Route::get('Booth/Booth-11', [BoothController::class, 'booth_11']);

Route::get('Booth/Booth-12', [BoothController::class, 'booth_12']);

Route::get('Booth/Booth-13', [BoothController::class, 'booth_13']);

Route::get('Booth/Booth-14', [BoothController::class, 'booth_14']);

Route::get('Booth/Booth-15', [BoothController::class, 'booth_15']);

Route::get('Booth/Booth-16', [BoothController::class, 'booth_16']);

Route::get('Booth/Booth-17', [BoothController::class, 'booth_17']);

Route::get('Booth/Booth-18', [BoothController::class, 'booth_18']);

Route::get('Booth/Booth-19', [BoothController::class, 'booth_19']);

Route::get('Booth/Booth-20', [BoothController::class, 'booth_20']);

Route::get('Booth/Booth-21', [BoothController::class, 'booth_21']);

Route::get('Booth/Booth-22', [BoothController::class, 'booth_22']);

Route::get('Booth/Booth-23', [BoothController::class, 'booth_23']);

Route::get('Booth/Booth-24', [BoothController::class, 'booth_24']);

Route::get('Booth/Booth-25', [BoothController::class, 'booth_25']);

Route::get('Booth/Booth-26', [BoothController::class, 'booth_26']);

Route::get('Booth/Booth-27', [BoothController::class, 'booth_27']);

Route::get('Booth/Booth-28', [BoothController::class, 'booth_28']);

Route::get('Booth/Booth-29', [BoothController::class, 'booth_29']);

Route::get('Booth/Booth-30', [BoothController::class, 'booth_30']);

Route::get('Booth/Booth-31', [BoothController::class, 'booth_31']);

Route::get('Booth/Booth-32', [BoothController::class, 'booth32']);







// SU-route
// do-form view Main

Route::get('do/badge', function () {
    return view('do/badge');
})->middleware(['auth'])->name('dashboard');

Route::get('do/landing-page', function () {
    return view('do/landing-page');
})->middleware(['auth'])->name('landing-page');

Route::get('do/reception-page', function () {
    return view('do/reception-page');
})->middleware(['auth'])->name('reception');



// do-form view Booth

Route::get('do/booth-1', function () {
    return view('do/booth-1');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-2', function () {
    return view('do/booth-2');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-3', function () {
    return view('do/booth-3');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-4', function () {
    return view('do/booth-4');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-5', function () {
    return view('do/booth-5');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-6', function () {
    return view('do/booth-6');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-7', function () {
    return view('do/booth-7');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-8', function () {
    return view('do/booth-8');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-9', function () {
    return view('do/booth-9');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-10', function () {
    return view('do/booth-10');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-11', function () {
    return view('do/booth-11');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-12', function () {
    return view('do/booth-12');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-13', function () {
    return view('do/booth-13');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-14', function () {
    return view('do/booth-14');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-14', function () {
    return view('do/booth-14');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-14', function () {
    return view('do/booth-14');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-15', function () {
    return view('do/booth-15');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-16', function () {
    return view('do/booth-16');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-17', function () {
    return view('do/booth-17');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-17', function () {
    return view('do/booth-17');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-17', function () {
    return view('do/booth-17');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-18', function () {
    return view('do/booth-18');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-19', function () {
    return view('do/booth-19');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-20', function () {
    return view('do/booth-20');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-21', function () {
    return view('do/booth-21');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-22', function () {
    return view('do/booth-22');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-23', function () {
    return view('do/booth-23');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-24', function () {
    return view('do/booth-24');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-25', function () {
    return view('do/booth-25');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-26', function () {
    return view('do/booth-26');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-27', function () {
    return view('do/booth-27');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-28', function () {
    return view('do/booth-28');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-29', function () {
    return view('do/booth-29');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-30', function () {
    return view('do/booth-30');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-31', function () {
    return view('do/booth-31');
})->middleware(['auth'])->name('booth');

Route::get('do/booth-32', function () {
    return view('do/booth-32');
})->middleware(['auth'])->name('booth');



// Route Resource
Route::get('do', function () {
    return view('/do');
});

Route::resource('booth-active-list', SuBoothController::class)
    ->middleware(['auth']);

Route::resource('reception-page', ReceptionController::class)
    ->middleware(['auth']);

// Route::get('/', function () {
//     return view('welcome');
// });

// check components page
Route::get('components/suform', function () {
    return view('components/suform');
});

//boot manager

// Route::get('do/booth-form', function () {
//     return view('do/booth-form');    
// })->middleware(['auth'])->name('booth');

Route::get('do/booth-active-list', function () {
    return view('do/booth-active-list');
})->middleware(['auth'])->name('booth');