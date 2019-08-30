from django.contrib import admin

# Register your models here.
from .models import Article

class ArticleModelAdmin(admin.ModelAdmin):
    list_display = ('title', 'body', 'id', 'created_at')
    ordering = ('-created_at',)
    readonly_fields = ('id', 'created_at')

admin.site.register(Article, ArticleModelAdmin)