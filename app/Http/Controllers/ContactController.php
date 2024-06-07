<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $formFields = $request->validate([
            'name' => 'required|string|max:40',
            'email' => 'required|string|email|max:40',
            'message' => 'required|string|min:5',
        ]);
        $contact = Contact::create($formFields);
        $this->sendEmail($contact);

        return response()->json(['message' => 'Message sent successfully.']);
    }

    private function sendEmail($contact) {
        Mail::to($contact->email)->send(new ContactMail($contact));
    }
}
