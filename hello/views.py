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
            message = form.cleaned_data['message']
            sender = 'lorenmsheets@gmail.com'
            recipient = ['lorenmsheets@gmail.com']
            send_mail(subject, message, sender, recipient)

    else:

        form = ContactForm()
        post = False

    context = {'form': form, 'post': post}

    return render(request, 'index.html', context )



def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, 'db.html', {'greetings': greetings})
