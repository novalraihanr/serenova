<?php

namespace App\Http\Controllers;

use App\Models\Kalender;
use Illuminate\Http\Request;

class KalenderController extends Controller
{
    public function index()
    {
        $kalenders = Kalender::all();
        return response()->json($kalenders);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $kalender = new Kalender;
        $kalender->nama = $request->nama;
        $kalender->save();

        return response()->json($kalender);
    }

    public function show($id)
    {
        $kalender = Kalender::find($id);
        return response()->json($kalender);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $kalender = Kalender::find($id);
        $kalender->name = $request->name;
        $kalender->save();

        return response()->json($kalender);
    }

    public function destroy($id)
    {
        $kalender = Kalender::find($id);
        $kalender->delete();

        return response()->json('Kalender deleted');
    }
}
