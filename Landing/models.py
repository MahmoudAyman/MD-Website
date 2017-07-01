from __future__ import unicode_literals
import PIL
from django.db import models
from django.forms import ModelForm
import os
from uuid import uuid4
from django.utils.deconstruct import deconstructible
from django.conf import settings


@deconstructible
class UploadToPathAndRename(object):

    def __init__(self, path):
        self.sub_path = path

    def __call__(self, instance, filename):
        ext = filename.split('.')[-1]
        # get filename
        filename = '{}.{}'.format(instance.first_name, ext)
        # if instance.:
        #     filename = '{}.{}'.format(instance.first_name, ext)
        # else:
        #     # set filename as random string
        #     filename = '{}.{}'.format(uuid4().hex, ext)
        # return the whole path to the file
        return os.path.join(self.sub_path, filename)


class Student(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    fb = models.CharField(max_length=500)
    git = models.CharField(max_length=500)
    img = models.ImageField(upload_to=UploadToPathAndRename(os.path.join(settings.MEDIA_ROOT, 'upload')))    

    def __str__ (self):
        return self.last_name

class Round(models.Model):
	number = models.CharField(max_length=200)
	startDate=models.DateField()
	at=models.CharField(max_length=200,default="")

	def __str__ (self):
		return	self.number


