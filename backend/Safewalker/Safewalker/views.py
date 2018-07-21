from rest_framework import generics,permissions
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.http import HttpResponse
from django.http import response
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
# from ..ParentsChild.models import

class Register(generics.CreateAPIView):
    permission_classes = (permissions.AllowAny,)

    def post(self,request,*args,**kwargs):
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = User.objects.create_user(username=username,password=password)
        token = Token.objects.create(user=user)
        # return HttpResponse({'detail': ('User has been created with token :'+token.key)})
        return JsonResponse({'detail':"User has been created","token":token.key})

class ChangePassword(generics.CreateAPIView):
    permissions_classes = (permissions.IsAuthenticated,)

    def post(self,request,*args,**kwargs):
        user = get_object_or_404(User,username=request.user)
        user.set_password(request.POST.get('new_password'))
        user.save()
        return JsonResponse({'detail':'Password has been rest'})
