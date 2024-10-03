<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class ambientController extends Controller
{

    public function getAmbientMP3($filename)
    {
        $file = Storage::disk('ambient')->get($filename);
        return response($file, 200)->header('Content-Type', 'audio/mpeg');
    }
}
