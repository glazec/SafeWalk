from django.db import models

# Create your models here.
class Ticket(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    creator = models.CharField(max_length=100)
    # startpoint = model.
    