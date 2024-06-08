<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index()
    {
        // Retrieve all users
        $users = User::all();

        // Return the list of users
        return response()->json(['users' => $users], 200);
    }

    public function show($id)
    {
        // Find the user by ID
        $user = User::find($id);

        // If user not found, return error response
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        // Return the user data
        return response()->json(['user' => $user], 200);
    }

    public function store(Request $request)
    {
        // Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'userType' => 'required|in:volunteer,beneficiary',
            'adresse' => 'required|string',
            'phone' => 'required',  
            'email' => 'required|email|unique:users,email',
            'password' => 'string|min:6',
        ]);

        // If validation fails, return error response
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create a new user with the validated data
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);

        // Return success response with the created user data
        return response()->json(['user' => $user], 201);
    }

    public function update(Request $request, $id)
    {
        // Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'userType' => 'required|in:volunteer,beneficiary',
            'adresse' => 'required|string',
            'phone' => 'required',  
            'email' => 'required|email|unique:users,email',
            'password' => 'string|min:6',
        ]);

        // If validation fails, return error response
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Find the user by ID
        $user = User::find($id);

        // If user not found, return error response
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        // Update the user with the validated data
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->save();

        // Return success response with the updated user data
        return response()->json(['user' => $user], 200);
    }

    public function destroy($id)
    {
        // Find the user by ID
        $user = User::find($id);

        // If user not found, return error response
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        // Delete the user
        $user->delete();

        // Return success response
        return response()->json(['message' => 'User deleted successfully'], 200);
    }
}
