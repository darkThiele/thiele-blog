from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('articles', views.ArticleViewSet)
router.register('titles', views.TitleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]