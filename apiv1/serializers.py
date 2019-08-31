from rest_framework import serializers

from .models import Article, Comment

class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = ('id', 'title', 'body')

class TitleSerializer(serializers.ModelSerializer):
    '''
    Subset of ArticleSerializer
    Get id and title
    '''

    class Meta:
        model = Article
        fields = ('id', 'title', 'created_at')

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ('id', 'name', 'body', 'article')