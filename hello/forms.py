from django import forms


class ContactForm(forms.Form):
    first_name = forms.CharField(label='First Name', max_length=100)
