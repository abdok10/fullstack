<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    public function index()
    {
        // Retrieve all admins
        $admins = Admin::all();

        // Return the list of admins
        return response()->json(['admins' => $admins], 200);
    }

    public function show($id)
    {
        // Find the admin by ID
        $admin = Admin::find($id);

        // If admin not found, return error response
        if (!$admin) {
            return response()->json(['error' => 'Admin not found'], 404);
        }

        // Return the admin data
        return response()->json(['admin' => $admin], 200);
    }

    public function store(Request $request)
    {
        // Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:admins,email',
            'password' => 'required|string|min:6',
        ]);

        // If validation fails, return error response
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create a new admin with the validated data
        $admin = Admin::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);

        // Return success response with the created admin data
        return response()->json(['admin' => $admin], 201);
    }

    public function update(Request $request, $id)
    {
        // Find the admin by ID
        $admin = Admin::find($id);

        // If admin not found, return error response
        if (!$admin) {
            return response()->json(['error' => 'Admin not found'], 404);
        }

        // Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:admins,email,' . $id,
            'password' => 'required|string|min:6',
        ]);

        // If validation fails, return error response
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Update the admin with the validated data
        $admin->update([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);

        // Return success response with the updated admin data
        return response()->json(['admin' => $admin], 200);
    }

    public function destroy($id)
    {
        // Find the admin by ID
        $admin = Admin::find($id);

        // If admin not found, return error response
        if (!$admin) {
            return response()->json(['error' => 'Admin not found'], 404);
        }

        // Delete the admin
        $admin->delete();

        // Return success response
        return response()->json(['message' => 'Admin deleted successfully'], 200);
    }
}
