from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from Landing.models import *
from django.shortcuts import render
from django.template import loader
from django.urls import reverse
import os 
from PIL import Image

# Create your views here.

def index(request):
	return render(request, 'Landing/index.html')
