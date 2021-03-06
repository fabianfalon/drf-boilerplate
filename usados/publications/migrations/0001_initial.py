# Generated by Django 2.1.8 on 2019-05-04 23:11

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0003_auto_20190504_0718'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='name')),
                ('is_active', models.BooleanField(default=True, verbose_name='is active')),
                ('created', models.DateTimeField(auto_now_add=True, help_text='Date time on which the object was created.', verbose_name='created at')),
                ('modified', models.DateTimeField(auto_now=True, help_text='Date time on which the object was last modified.', verbose_name='modified at')),
            ],
        ),
        migrations.CreateModel(
            name='PublicationPicture',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('picture', models.ImageField(blank=True, null=True, upload_to='publications/pictures/', verbose_name='publication picture')),
                ('created', models.DateTimeField(auto_now_add=True, help_text='Date time on which the object was created.', verbose_name='created at')),
                ('modified', models.DateTimeField(auto_now=True, help_text='Date time on which the object was last modified.', verbose_name='modified at')),
            ],
        ),
        migrations.CreateModel(
            name='Publications',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='title')),
                ('model', models.CharField(max_length=255, verbose_name='model')),
                ('branch', models.CharField(max_length=255, verbose_name='branch')),
                ('type_of_publication', models.IntegerField(choices=[(1, 'new'), (2, 'old')], db_index=True, default=1)),
                ('price', models.DecimalField(decimal_places=2, default=0, max_digits=16, verbose_name='price')),
                ('kilometers', models.CharField(max_length=255, verbose_name='kilometers')),
                ('city', models.CharField(blank=True, max_length=255, null=True, verbose_name='city')),
                ('is_active', models.BooleanField(default=True, verbose_name='is active')),
                ('created', models.DateTimeField(auto_now_add=True, help_text='Date time on which the object was created.', verbose_name='created at')),
                ('modified', models.DateTimeField(auto_now=True, help_text='Date time on which the object was last modified.', verbose_name='modified at')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='publications.Category')),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.Profile')),
            ],
        ),
        migrations.AddField(
            model_name='publicationpicture',
            name='profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='publications.Publications'),
        ),
    ]
