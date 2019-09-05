from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('articles', views.ArticleViewSet, base_name='Article')
router.register('titles', views.TitleViewSet)
router.register('tags', views.TagViewSet)

urlpatterns = [
    path('', include(router.urls)),
]