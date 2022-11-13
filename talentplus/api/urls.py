from django.urls import path
from .views import staticdata

urlpatterns = [
    path("talentplus/", staticdata.as_view())
]