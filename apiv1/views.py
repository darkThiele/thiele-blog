from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.pagination import PageNumberPagination

from .models import Article, Comment, Tag
from .serializers import ArticleSerializer, CommentSerializer, TitleSerializer, TagSerializer

# Create your views here.

class ArticlePagination(PageNumberPagination):
  page_size = 5
  page_size_query_param = 'page_size'
  max_page_size = 100

class ArticleViewSet(viewsets.ModelViewSet):

    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    pagination_class = ArticlePagination

    def get_queryset(self):
        tag_name = self.request.query_params.get('tag', None)
        if tag_name:
            queryset = Article.objects.filter(tag__tagname=tag_name).order_by('-created_at')
        else:
            queryset = Article.objects.all().order_by('-created_at')
        return queryset

class TagViewSet(viewsets.ModelViewSet):

    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

class TitleViewSet(viewsets.ModelViewSet):

    queryset = Article.objects.all().order_by('-created_at')
    serializer_class = TitleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        tag_name = self.request.query_params.get('tag', None)
        if tag_name:
            queryset = Article.objects.filter(tag__tagname=tag_name).order_by('-created_at')
        else:
            queryset = Article.objects.all().order_by('-created_at')
        return queryset
        

class CommentAPIView(generics.ListCreateAPIView):

    serializer_class = CommentSerializer

    def get_queryset(self):
        article_id = self.request.query_params.get('article_id', None)
        if article_id:
            queryset = Comment.objects.filter(article=article_id).order_by('-created_at')
        else:
            queryset = Comment.objects.all().order_by('-created_at')
        return queryset

    