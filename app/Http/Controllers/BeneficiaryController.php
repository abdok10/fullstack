<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Beneficiary;
use Illuminate\Support\Facades\Validator;

class BeneficiaryController extends Controller
{
    public function index()
    {
        $beneficiaries = Beneficiary::all();
        return response()->json(['beneficiaries' => $beneficiaries], 200);
    }

    public function show($id)
    {
        $beneficiary = Beneficiary::find($id);
        if (!$beneficiary) {
            return response()->json(['error' => 'Beneficiary not found'], 404);
        }
        return response()->json(['beneficiary' => $beneficiary], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'userType' => 'required|in:volunteer,beneficiary',
            'adresse' => 'required|string',
            'phone' => 'required',  
            'email' => 'required|email|unique:beneficiaries,email',
            'password' => 'string|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $beneficiary = Beneficiary::create($request->all());
        return response()->json(['beneficiary' => $beneficiary], 201);
    }

    public function update(Request $request, $id)
    {
        $beneficiary = Beneficiary::find($id);
        if (!$beneficiary) {
            return response()->json(['error' => 'Beneficiary not found'], 404);
        }
        
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'userType' => 'required|in:volunteer,beneficiary',
            'adresse' => 'required|string',
            'phone' => 'required',  
            'email' => 'required|email|unique:beneficiaries,email',
            'password' => 'string|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $beneficiary->update($request->all());
        return response()->json(['beneficiary' => $beneficiary], 200);
    }

    public function destroy($id)
    {
        $beneficiary = Beneficiary::find($id);
        if (!$beneficiary) {
            return response()->json(['error' => 'Beneficiary not found'], 404);
        }
        $beneficiary->delete();
        return response()->json(['message' => 'Beneficiary deleted successfully'], 200);
    }
}
