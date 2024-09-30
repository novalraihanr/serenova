<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Jadwal;
use App\Models\Kalender;
use App\Models\User;

class JadwalController extends Controller
{
    public function index()
    {
        $jadwal = Jadwal::all();
        return response()->json($jadwal);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'jenis' => 'required|in:work,exercise,daily',
            'date' => 'required',
            'note' => 'nullable'
        ]);

        $kalender = Kalender::where('tanggal', '=',$request->date)->first();

        if($kalender == null) {
            $user = User::find($request->id);

            $kalender = new Kalender;
            $kalender->tanggal = $request->date;
            $user->kalender()->save($kalender);
        }

        $jadwal = new Jadwal;
        $jadwal->nama = $request->nama;
        $jadwal->jenis = $request->jenis;
        $jadwal->id_kalender = $kalender->id_kalender;
        $jadwal->note = $request->note;
        $jadwal->save();

        return response()->json($jadwal);
    }

    public function show($id)
    {
        $jadwal = Jadwal::find($id);
        return response()->json($jadwal);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nama' => 'nullable',
            'jenis' => 'required|in:work,exercise,daily',
            'date' => 'required',
            'note' => 'nullable'
        ]);

        $kalender = Kalender::where('tanggal', '=',$request->date)->first();

        if($kalender == null) {
            $user = User::find($request->id);

            $kalender = new Kalender;
            $kalender->tanggal = $request->date;
            $user->kalender()->save($kalender);
        }

        $jadwal = Jadwal::find($id);
        $jadwal->nama = $request->nama;
        $jadwal->jenis = $request->jenis;
        $jadwal->id_kalender = $kalender->id_kalender;
        $jadwal->note = $request->note;
        $jadwal->save();

        return response()->json($jadwal);
    }

    public function destroy($id)
    {
        $jadwal = Jadwal::find($id);
        $jadwal->delete();

        return response()->json('Jadwal deleted');
    }
}
