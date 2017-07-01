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
	rounds=Round.objects.all()
	adjusted_rounds=[]
	for i in rounds:
		adjusted_rounds.append([])
		adjusted_rounds[-1].append(i.startDate.year)
		adjusted_rounds[-1].append(i.startDate.month-1)
		adjusted_rounds[-1].append(i.startDate.day)
	context={'rounds':rounds}
	return render(request, 'Landing/index.html',context)
