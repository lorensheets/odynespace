from django import forms


class ContactForm(forms.Form):
    first_name   = forms.CharField(label="First Name", label_suffix=" *")
    last_name    = forms.CharField(label="Last Name", label_suffix=" *")
    email        = forms.EmailField(label="Your Email Address", label_suffix=" *")
    message      = forms.CharField(widget=forms.Textarea, label="Message", label_suffix=" *")
