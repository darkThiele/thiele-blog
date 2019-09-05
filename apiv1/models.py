import uuid
from django.db import models
from django.utils import timezone

# Create your models here.

class Article(models.Model):
    """ 記事モデル """
    class Meta:
        # テーブル名
        db_table = 'article'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(verbose_name='タイトル', max_length=40)
    body = models.TextField(verbose_name='本文')
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title


class Tag(models.Model):

    class Tag:
        db_table = 'tag'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    article = models.ManyToManyField(Article, verbose_name='タグ', related_name="tags", related_query_name="tag")
    tagname = models.CharField(verbose_name="タグ", max_length=10, unique=True)

    def __str__(self):
        return self.tagname

class Comment(models.Model):

    class Meta:
        db_table = 'comment'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(verbose_name="名前", max_length=30)
    body = models.TextField(verbose_name='本文', max_length = 200)
    created_at = models.DateTimeField(default=timezone.now)
    article = models.ForeignKey(Article, verbose_name="記事", on_delete=models.CASCADE)

    def __str__(self):
        return self.name