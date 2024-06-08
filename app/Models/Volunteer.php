<?php

namespace App\Models;

use App\Models\Donation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Volunteer extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'userType',
        'adresse',
        'phone',
        'email',
        'password',
    ];


    public function donations()
    {
        return $this->hasMany(Donation::class);
    }


}
