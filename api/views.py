import json,string,random
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse,Http404
from api.serializers import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny, IsAuthenticated,IsAdminUser
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from django.views.generic import TemplateView

User=get_user_model()
# project imports


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/',
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/',
    ]
   
    return Response(routes)


class TestEndpointView(APIView):

    permission_classes=[IsAuthenticated]

    def get(self,request):
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    
    def post(self,request):
        error={"data":"Empty"}
        try:
            body = request.body.decode('utf-8')
            data = json.loads(body)
            if 'data' not in data:
                return Response(error, status.HTTP_400_BAD_REQUEST)
            text = data.get('data')
            data = f'Congratulation syour API just responded to POST request with text: {text}'
            return Response({'response': data}, status=status.HTTP_200_OK)
        except json.JSONDecodeError:
            return Response(error, status.HTTP_400_BAD_REQUEST)

