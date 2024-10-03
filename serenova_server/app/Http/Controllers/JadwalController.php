<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Jadwal;
use App\Models\Kalender;
use App\Models\User;

use Illuminate\Support\Facades\DB;

class JadwalController extends Controller
{

    public function countJenis()
    {
        $total = Jadwal::all()->count();
        $jenis = Jadwal::select('jenis', DB::raw('count(*) as count'))
            ->groupBy('jenis')
            ->get();
        foreach ($jenis as $j) {
            $j->percentage = number_format(($j->count / $total) * 100, 0);
        }
        return response()->json($jenis);
    }

    public function index()
    {
        $jadwal = Jadwal::select('jadwal.*', 'kalender.tanggal')
            ->join('kalender', 'jadwal.id_kalender', '=', 'kalender.id_kalender')
            ->get();
        return response()->json($jadwal);
    }

    public function store(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'nama' => 'required',
            'jenis' => 'required|in:work,exercise,daily',
            'date' => 'required',
            'startTime' => 'nullable',
            'endTime' => 'nullable',
            'note' => 'nullable'
        ]);

        $date = date('Y-m-d', strtotime($request->date));
        $startTime = date('H:i:s', strtotime($request->startTime));
        $endTime = date('H:i:s', strtotime($request->endTime));

        $kalender = Kalender::where('tanggal', '=',$date)->first();

        if($kalender == null) {
            $user = User::find($request->id);

            $kalender = new Kalender;
            $kalender->tanggal = $date;
            $user->kalender()->save($kalender);
        }

        $jadwal = new Jadwal([
            'nama' => $request->nama,
            'jenis' => $request->jenis,
            'id_kalender' => $kalender->id_kalender,
            'start_time' => $startTime,
            'end_time' => $endTime,
            'note' => $request->note
        ]);

        $jadwal->save();

        return response()->json([
            'success' => true,
            'message' => 'Jadwal baru telah ditambahkan',
            'data' => $jadwal
        ]);
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
