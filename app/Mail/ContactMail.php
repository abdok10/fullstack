<?php 

namespace App\Mail;

use App\Models\Contact; 
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Contracts\Queue\ShouldQueue;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    public $contact;

    public function __construct(Contact $contact)
    {
        $this->contact = $contact;
    }

    public function build()
    {
        return $this->from('teambuilder@gmail.com')
                    ->to($this->contact->email)
                    ->subject('Message Received')
                    ->view('emails.test')
                    ->with([
                        'name' => $this->contact->name,
                        'email' => $this->contact->email,
                        'message' => $this->contact->message,
                    ]);
    }
}
