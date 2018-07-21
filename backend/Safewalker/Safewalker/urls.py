"""Safewalker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views
from django.conf.urls import url
from rest_framework.authtoken import views as vw

urlpatterns = [
    path('admin/', admin.site.urls),
    # path("accounts/",include('django.contrib.auth.urls')),
    url(r"^register/$",view=views.Register.as_view()),
    url(r'^change_password/$',view=views.ChangePassword.as_view()),
    url(r'^login/$',view=vw.obtain_auth_token),
    url(r'^upload_phonenum/$',view=views.UploadPhonenum.as_view()),
    url(r'^get_phonenum/$',view=views.GetPhonenum.as_view()),
    url(r'^upload_govrnid/$', view=views.UploadGovernid.as_view()),
    url(r'^get_governid/$', view=views.GetGovernid.as_view()),
    url(r'^upload_avatar/$', view=views.UploadAvatar.as_view()),
    url(r'^get_avatar/$', view=views.GetAvatar.as_view()),
    url(r'^create_ticket/$',view=views.CreateTicket.as_view()),
    url(r'^ticket_confirm/$',view=views.TicketConfirm.as_view()),
    url(r'^ticket_viewset/$',view=views.TicketViewSet),
]
