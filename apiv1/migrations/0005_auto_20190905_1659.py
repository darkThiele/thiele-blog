# Generated by Django 2.2.4 on 2019-09-05 07:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apiv1', '0004_auto_20190905_1646'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tag',
            old_name='name',
            new_name='tag',
        ),
    ]
