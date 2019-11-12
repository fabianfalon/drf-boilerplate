"""Main URLs module."""

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    # Django Admin
    path(settings.ADMIN_URL, admin.site.urls),
    path('api/v1/', include(('usados.users.urls', 'users'), namespace='users')),
    path('api/v1/', include(
        ('usados.publications.urls', 'publications'), namespace='publications')
    ),
    path('api/v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
