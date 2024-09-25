<?php

use App\Http\Controllers\JadwalController;
use App\Http\Controllers\KalenderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/user', [UserController::class, 'index']);
Route::get('/user/:id', [UserController::class, 'show']);

Route::post('/user/add', [UserController::class, 'store']);
Route::put('/user/:id', [UserController::class, 'update']);
Route::delete('/user/:id', [UserController::class, 'delete']);

Route::get('/kalender', [KalenderController::class, 'index']);
Route::get('/kalender/:id', [KalenderController::class, 'show']);

Route::post('/kalender/add', [KalenderController::class, 'store']);
Route::put('/kalender/:id', [KalenderController::class, 'update']);
Route::delete('/kalender/:id', [KalenderController::class, 'delete']);

Route::get('/jadwal', [JadwalController::class, 'index']);
Route::get('/jadwal/:id', [JadwalController::class, 'show']);

Route::post('/jadwal/add', [JadwalController::class, 'store']);
Route::put('/jadwal/:id', [JadwalController::class, 'update']);
Route::delete('/jadwal/:id', [JadwalController::class, 'delete']);
