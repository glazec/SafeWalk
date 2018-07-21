from django.shortcuts import render

# Create your views here.
from rest_framework import generics,permissions
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.http import response


class Register(generics.CreateAPIView):
    def post(self,request,*args,**kwargs):
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = User.objects.create_user(username,password)
        token = Token.objects.create(user=user)
        return response({'detail':'User has been created with token'+token})



