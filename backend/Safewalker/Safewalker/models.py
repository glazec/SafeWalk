from django.db import models
from django.contrib.auth.models import AbstractUser,AbstractBaseUser

# Create your models here.
class Ticket(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    creator = models.CharField(max_length=100)
    # startpoint = model.
    # route
    miss = models.BooleanField()
    being = models.BooleanField()
    uid = models.UUIDField()
    

