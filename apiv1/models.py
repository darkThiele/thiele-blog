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