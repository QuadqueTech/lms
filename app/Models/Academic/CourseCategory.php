<?php

namespace App\Models\Academic;

use App\Traits\TraitCollection;
use Illuminate\Database\Eloquent\Model;

class CourseCategory extends Model
{
    use TraitCollection;

    protected $fillable = [
        'namne',
        'slug',
        'description',
        'thumbnail',
        'level',
    ];
}
