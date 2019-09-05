from rest_framework import serializers

from .models import Article, Comment, Tag

class ArticleSerializer(serializers.ModelSerializer):

    tags = serializers.SlugRelatedField(many=True, slug_field="tagname", queryset=Tag.objects.all())

    class Meta:
        model = Article
        fields = ('id', 'title', 'body', 'tags')

    # def create(self, validate_data):
    #     tag_data = validate_data.pop('tags')
    #     article = Article.objects.create(**validate_data)
    #     Tag.objects.create(article=article, **tag_data)
    #     return article

class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = ('tagname',)

class TitleSerializer(serializers.ModelSerializer):
    '''
    Subset of ArticleSerializer
    Get id and title
    '''
    tags = serializers.SlugRelatedField(many=True, slug_field="tagname", queryset=Tag.objects.all())

    class Meta:
        model = Article
        fields = ('id', 'title', 'tags','created_at')

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ('id', 'name', 'body', 'article')