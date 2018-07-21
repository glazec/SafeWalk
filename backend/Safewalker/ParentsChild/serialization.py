from rest_framework import serializers
from .models import Ticket

class TicketSerializer(serializers.DjangoModelField):
    model=Ticket
    fields = ('uid','schedule','created','creator',)