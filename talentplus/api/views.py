from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

class staticdata(APIView):
    def get(self, request):
        data = {
            "name": "TALENT PLUS",
        }
        return Response(data)
