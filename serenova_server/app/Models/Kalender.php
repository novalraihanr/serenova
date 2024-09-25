<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Kalender extends Model
{
    use HasFactory;

    protected $table = 'kalender';

    protected $primaryKey = 'id_kalender';

    public function users(): BelongsToMany {
        return $this->belongsToMany(User::class, 'user_kalender', 'id_kalender', 'id_user');


    }
}
