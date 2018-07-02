from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.core.mail import send_mail

from .models import Greeting
from .forms import ContactForm

# Create your views here.
def index(request):

    if request.method == 'POST':

        form = ContactForm(request.POST)
        post = True

        if form.is_valid():
            subject = "New Odyne Contact Form Submission"
            message = 'Sender: ' + form.cleaned_data['first_name'] + ' ' + form.cleaned_data['last_name'] + \
                '\nEmail: ' + form.cleaned_data['email'] + '\nMessage: ' + form.cleaned_data['message']
            sender = 'lorenmsheets@gmail.com'
            recipient = ['lorenmsheets@gmail.com']
            send_mail(subject, message, sender, recipient)

    else:

        form = ContactForm()
        post = False

    context = {'form': form, 'post': post}

    return render(request, 'index.html', context )



def design(request):
    return render(request, 'rocket-design.html')




def ascii_logo(request):
    return render(request, 'ascii.html')




def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, 'db.html', {'greetings': greetings})
