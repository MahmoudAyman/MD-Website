from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic import TemplateView
from django.conf import settings

urlpatterns = [
	url(r'^', include('Landing.urls')),
    url(r'^admin/', admin.site.urls),
]
