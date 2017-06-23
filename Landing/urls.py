from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic import TemplateView
from django.conf import settings
from . import views

app_name = "Landing"
urlpatterns = [
    url(r'^$', views.index, name='index'),
]

