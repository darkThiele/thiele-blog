from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Article, Comment
from .serializers import ArticleSerializer, CommentSerializer, TitleSerializer

# Create your views here.
class ArticleViewSet(viewsets.ModelViewSet):

    queryset = Article.objects.all().order_by('-created_at')
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

class TitleViewSet(viewsets.ModelViewSet):

    queryset = Article.objects.all().order_by('-created_at')
    serializer_class = TitleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

class CommentAPIView(generics.ListCreateAPIView):

    serializer_class = CommentSerializer

    def get_queryset(self):
        article_id = self.request.query_params.get('article_id', None)
        if article_id is not None:
            queryset = Comment.objects.filter(article = article_id).order_by('-created_at')
        else:
            queryset = Comment.objects.all().order_by('-created_at')
        return queryset

    