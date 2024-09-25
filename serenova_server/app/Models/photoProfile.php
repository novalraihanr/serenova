<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class photoProfile extends Model
{
    use HasFactory;

    protected $table = 'photo_profile';

    protected $primaryKey = 'id_photo_profile';
}
