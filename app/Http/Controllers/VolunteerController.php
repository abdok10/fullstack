<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Volunteer;
use Illuminate\Support\Facades\Validator;

class VolunteerController extends Controller
{
    public function index()
    {
        $volunteers = Volunteer::all();
        return response()->json(['volunteers' => $volunteers], 200);
    }

    public function show($id)
    {
        $volunteer = Volunteer::find($id);
        if (!$volunteer) {
            return response()->json(['error' => 'Volunteer not found'], 404);
        }
        return response()->json(['volunteer' => $volunteer], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'type' => 'required|in:association,individual',
            'description' => 'required|string',
            'adresse' => 'required|string',
            'email' => 'nullable|email|unique:volunteers,email',
            'password' => 'nullable|string|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $volunteer = Volunteer::create($request->all());
        return response()->json(['volunteer' => $volunteer], 201);
    }

    public function update(Request $request, $id)
    {
        $volunteer = Volunteer::find($id);
        if (!$volunteer) {
            return response()->json(['error' => 'Volunteer not found'], 404);
        }
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'type' => 'required|in:association,individual',
            'description' => 'required|string',
            'adresse' => 'required|string',
            'email' => 'nullable|email|unique:volunteers,email,' . $id,
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $volunteer->update($request->all());
        return response()->json(['volunteer' => $volunteer], 200);
    }

    public function destroy($id)
    {
        $volunteer = Volunteer::find($id);
        if (!$volunteer) {
            return response()->json(['error' => 'Volunteer not found'], 404);
        }
        $volunteer->delete();
        return response()->json(['message' => 'Volunteer deleted successfully'], 200);
    }
}
