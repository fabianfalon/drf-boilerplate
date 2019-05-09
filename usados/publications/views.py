"""
Usados publications api views
"""

import logging

from rest_framework import status, viewsets
from rest_framework.exceptions import MethodNotAllowed
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .models import Publications
from .serializers import PublicationCreateSerializer, PublicationsModelSerializer

logger = logging.getLogger(__name__)


class PublicationsViewSet(viewsets.ModelViewSet):
    """
    PublicationsViewSet
    """
    queryset = Publications.objects.all()
    permission_classes = (AllowAny, )
    serializer_class = PublicationsModelSerializer

    # def get_queryset(self):
    #     """Filter publications by profile"""
    #     return Publications.objects.filter(profile=self.request.user.profile)

    def destroy(self, request, pk=None):
        raise MethodNotAllowed('DELETE')

    def create(self, request, *args, **kwargs):
        """publication create."""
        serializer = PublicationCreateSerializer(
            data=request.data,
            context={'request': request}
        )
        serializer.is_valid(raise_exception=True)
        publication = serializer.save()

        data = self.get_serializer(publication).data
        return Response(data, status=status.HTTP_201_CREATED)
