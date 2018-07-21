from django.db import models
import datetime
import uuid
from django.contrib.auth.models import AbstractUser,AbstractBaseUser
from django.contrib.auth.models import User


# Create your models here.
class Ticket(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    creator = models.CharField(max_length=100)
    # startpoint = model.
    # route
    # miss = models.BooleanField(default=False)
    being = models.BooleanField(default=False)
    uid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    schedule = models.DateTimeField(default=datetime.datetime.now())

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,null=True)
    phonenum = models.CharField(max_length=12,blank=False,null=True)
    ticketcount = models.IntegerField(null=True)
    avatar = models.ImageField(null=True)
    governid = models.ImageField(null=True)
    score = models.DecimalField(decimal_places=2,max_digits=2,null=True)
