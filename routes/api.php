<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\VolunteerController;
use App\Http\Controllers\BeneficiaryController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResources([
    'users' => UserController::class,
    'admins' => AdminController::class,
    'beneficiaries'=> BeneficiaryController::class,
    'volunteers' => VolunteerController::class,
    'donations' => DonationController::class,
]);
  
Route::post('contact', [ContactController::class, 'store']);