# Django REST Framework
from rest_framework import serializers
from rest_framework.generics import get_object_or_404

# Serializers
from usados.users.serializers import ProfileModelSerializer

# Models
from .models import Category, Publications

# Utils
from usados.utils import DynamicFieldsModelSerializer


class PublicationsModelSerializer(DynamicFieldsModelSerializer):
    """PublicationsModelSerializer"""
    profile = ProfileModelSerializer(read_only=True)
    pictures = serializers.StringRelatedField(many=True)

    class Meta:
        model = Publications
        fields = (
            'profile',
            'id',
            'title',
            'model',
            'branch',
            'type_of_publication',
            'price',
            'kilometers',
            'city',
            'category',
            'is_active',
            'is_premium',
            'pictures'
        )


class PublicationCreateSerializer(serializers.Serializer):
    """create publication serializer."""
    title = serializers.CharField()
    model = serializers.CharField()
    branch = serializers.CharField()
    type_of_publication = serializers.CharField()
    price = serializers.CharField()
    kilometers = serializers.CharField()
    city = serializers.CharField()
    category = serializers.CharField()
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    def create(self, data):
        """Create new Publication."""
        user = data['user']
        category = get_object_or_404(Category, id=data['category'])
        data.pop('user')
        data.pop('category')
        if user.profile.publications_numbers < 5:
            publication = Publications.objects.create(
                profile=user.profile,
                category=category,
                **data
            )
            user.profile.publications_numbers += 1
            user.profile.save()
            return publication
        else:
            raise serializers.ValidationError(
                'You can only have 5 free publications'
            )
