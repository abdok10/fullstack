<?php
namespace Database\Factories;

use App\Models\Donation;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class DonationFactory extends Factory
{
    protected $model = Donation::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'type' => $this->faker->randomElement(['money', 'food', 'clothes', 'other']),
            'status' => 'pending', // default status
            'user_id' => User::factory(), // Assuming a User factory exists
        ];
    }
}
