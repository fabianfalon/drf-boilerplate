"""User models admin."""

# Django
from django.contrib import admin

# Models
from .models import Category, Publications, PublicationPicture


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    """Categoy model admin."""
    list_display = ('name', 'is_active', 'created', )


@admin.register(Publications)
class PublicationsAdmin(admin.ModelAdmin):
    """Publications model admin."""

    list_display = (
        'profile',
        'title',
        'model',
        'branch',
        'type_of_publication',
        'price',
        'kilometers',
        'city',
        'category',
        'is_active',
        'created',
    )
    search_fields = ('profile__user__username', 'title', 'category')
    list_filter = ('category',)


@admin.register(PublicationPicture)
class PublicationPictureAdmin(admin.ModelAdmin):
    """PublicationPicture model admin."""
    list_display = ('profile', 'picture', 'created',)
