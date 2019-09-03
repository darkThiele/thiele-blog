from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.pagination import PageNumberPagination

from .models import Article, Comment
from .serializers import ArticleSerializer, CommentSerializer, TitleSerializer

# Create your views here.

class ArticlePagination(PageNumberPagination):
  page_size = 5
  page_size_query_param = 'page_size'
  max_page_size = 100

class ArticleViewSet(viewsets.ModelViewSet):

    queryset = Article.objects.all().order_by('-created_at')
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    pagination_class = ArticlePagination

class TitleViewSet(viewsets.ModelViewSet):

    queryset = Article.objects.all().order_by('-created_at')
    serializer_class = TitleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

class CommentAPIView(generics.ListCreateAPIView):

    serializer_class = CommentSerializer

    def get_queryset(self):
        article_id = self.request.query_params.get('article_id', None)
        if article_id:
            queryset = Comment.objects.filter(article=article_id).order_by('-created_at')
        else:
            queryset = Comment.objects.all().order_by('-created_at')
        return queryset

    