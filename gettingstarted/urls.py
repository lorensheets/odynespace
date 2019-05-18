from django.conf.urls import include, url
from django.urls import path

from django.contrib import admin
admin.autodiscover()

import hello.views

# Examples:
# url(r'^$', 'gettingstarted.views.home', name='home'),
# url(r'^blog/', include('blog.urls')),

urlpatterns = [
    url(r'^$', hello.views.index, name='index'),
    url(r'^ascii-logo', hello.views.ascii_logo, name='ascii-logo'),
    url(r'^rocket-design', hello.views.rocket_design, name='rocket-design'),
    url(r'^test', hello.views.test, name='test'),
    url(r'^db', hello.views.db, name='db'),
    path('admin/', admin.site.urls),
]
