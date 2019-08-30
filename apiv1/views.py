from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Article
from .serializers import ArticleSerializer

# Create your views here.
class ArticleViewSet(viewsets.ModelViewSet):

    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)