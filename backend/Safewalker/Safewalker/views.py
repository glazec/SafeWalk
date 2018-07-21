from rest_framework import generics,permissions,viewsets
from ParentsChild.serialization import TicketSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.http import HttpResponse
from django.http import response
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from ParentsChild.models import Profile
from ParentsChild.models import Ticket
# from ..ParentsChild.models import

class Register(generics.CreateAPIView):
    permission_classes = (permissions.AllowAny,)

    def post(self,request,*args,**kwargs):
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = User.objects.create_user(username=username,password=password)
        token = Token.objects.create(user=user)
        user.first_name = request.POST.get("firstName")
        user.last_name = request.POST.get("lastName")
        user.save()
        profile = Profile.objects.create(user=user)
        # return HttpResponse({'detail': ('User has been created with token :'+token.key)})
        return JsonResponse({'detail':"User has been created","token":token.key})

class ChangePassword(generics.CreateAPIView):
    permissions_classes = (permissions.IsAuthenticated,)

    def post(self,request,*args,**kwargs):
        user = get_object_or_404(User,username=request.user)
        user.set_password(request.POST.get('new_password'))
        user.save()
        return JsonResponse({'detail':'Password has been rest'})

class UploadPhonenum(generics.CreateAPIView):
    permissions_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        user = get_object_or_404(User,username = request.user)
        profile = Profile.objects.filter(user=user)[0]
        profile.phonenum = request.POST.get("phonenum")
        profile.save()
        return JsonResponse({'datail': 'Upload phone number successfully'})

class GetPhonenum(generics.CreateAPIView):
    permissions_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        user = get_object_or_404(User,username = request.user)
        profile = Profile.objects.filter(user=user)[0]
        return JsonResponse({'phonenum': profile.phonenum})

class UploadGovernid(generics.CreateAPIView):
    permissions_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        user = get_object_or_404(User,username = request.user)
        profile = Profile.objects.filter(user=user)[0]
        profile.governId = request.POST.get("governid")
        profile.save()
        return JsonResponse({'datail': 'Upload govern id successfully'})

class GetGovernid(generics.CreateAPIView):
    permissions_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        user = get_object_or_404(User,username = request.user)
        profile = Profile.objects.filter(user=user)[0]
        return JsonResponse({'governid': profile.governid})

class UploadAvatar(generics.CreateAPIView):
    permissions_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        user = get_object_or_404(User,username = request.user)
        profile = Profile.objects.filter(user=user)[0]
        profile.avatar = request.POST.get("avatar")
        profile.save()
        return JsonResponse({'datail': 'Upload avatar successfully'})

class GetAvatar(generics.CreateAPIView):
    permissions_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        user = get_object_or_404(User,username = request.user)
        profile = Profile.objects.filter(user=user)[0]
        return JsonResponse({'avatar': profile.avatar})

class CreateTicket(generics.CreateAPIView):
    permissions_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        user = get_object_or_404(User,username = request.user)
        ticket = Ticket.objects.create(created = user.username,schedule=request.POST.get('schedule'))
        return JsonResponse({'uuid':ticket.uid})

class TicketConfirm(generics.CreateAPIView):
    permissions_classes = (permissions.IsAuthenticated,)

    def post(self,request, *args, **kwargs):
        user = get_object_or_404(User,username = request.user)
        ticket = Ticket.objects.filter(uid=request.POST.get("uuid"))[0]
        ticket.receiver=user
        ticket.save()
        return JsonResponse({'last_name':user.last_name,"first_name":user.first_name})

class TicketViewSet(viewsets.ModelViewSet):
    querryset= Ticket.objects.all()
    serializer_class = TicketSerializer
