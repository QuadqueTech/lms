<?php 
namespace App\Traits;

use App\Traits\UserAction;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

trait TraitCollection
{
    use HasFactory, SoftDeletes, UserAction;
}