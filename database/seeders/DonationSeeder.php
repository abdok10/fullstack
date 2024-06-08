<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Donation;

class DonationSeeder extends Seeder
{
    public function run()
    {
        // Generate 10 dummy donations
        Donation::factory()->count(10)->create();
    }
}
