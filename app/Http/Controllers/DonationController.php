<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Donation;
use Illuminate\Support\Facades\Validator;

class DonationController extends Controller
{
    public function index()
    {
        // Retrieve all donations
        $donations = Donation::all();

        // Return the list of donations
        return response()->json(['donations' => $donations], 200);
    }

    public function show($id)
    {
        // Find the donation by ID
        $donation = Donation::find($id);

        // If donation not found, return error response
        if (!$donation) {
            return response()->json(['error' => 'Donation not found'], 404);
        }

        // Return the donation data
        return response()->json(['donation' => $donation], 200);
    }

    public function store(Request $request)
    {
        // Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'type' => 'required|in:money,food,clothes,other',
            'status' => 'in:pending,accepted,rejected',
            'user_id' => 'required|exists:users,id',
        ]);

        // If validation fails, return error response
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create a new donation with the validated data
        $donation = Donation::create($request->all());

        // Return success response with the created donation data
        return response()->json(['donation' => $donation], 201);
    }

    public function update(Request $request, $id)
    {
        // Find the donation by ID
        $donation = Donation::find($id);

        // If donation not found, return error response
        if (!$donation) {
            return response()->json(['error' => 'Donation not found'], 404);
        }

        // Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'type' => 'required|in:money,food,clothes,other',
            'status' => 'in:pending,accepted,rejected',
            'user_id' => 'required|exists:users,id',
        ]);

        // If validation fails, return error response
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Update the donation with the validated data
        $donation->update($request->all());

        // Return success response with the updated donation data
        return response()->json(['donation' => $donation], 200);
    }

    public function destroy($id)
    {
        // Find the donation by ID
        $donation = Donation::find($id);

        // If donation not found, return error response
        if (!$donation) {
            return response()->json(['error' => 'Donation not found'], 404);
        }

        // Delete the donation
        $donation->delete();

        // Return success response
        return response()->json(['message' => 'Donation deleted successfully'], 200);
    }
}
