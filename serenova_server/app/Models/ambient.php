<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ambient extends Model
{
    use HasFactory;

    protected $table = 'ambient';

    protected $primaryKey = 'id_ambient';
}
