<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Jadwal;

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
            'id_kalender' => 'required|exists:kalenders,id',
            'note' => 'nullable'
        ]);

        $jadwal = new Jadwal;
        $jadwal->nama = $request->nama;
        $jadwal->jenis = $request->jenis;
        $jadwal->id_kalender = $request->id_kalender;
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
            'nama' => 'required',
            'jenis' => 'required|in:work,exercise,daily',
            'id_kalender' => 'required|exists:kalenders,id',
            'note' => 'nullable'
        ]);

        $jadwal = Jadwal::find($id);
        $jadwal->nama = $request->nama;
        $jadwal->jenis = $request->jenis;
        $jadwal->id_kalender = $request->id_kalender;
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
