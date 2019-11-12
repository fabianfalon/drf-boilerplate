"""
Usados users tests tests_models
"""
from __future__ import unicode_literals

from django.test import TestCase

from ..models import User
from usados.users.tests.factories import ProfileFactory


# Create your tests here.
class UserModelTest(TestCase):
    """ User model tests"""

    def setUp(self):
        self.user = User.objects.create_user(
            username='jonsnow', email='iknow@nothing.com', password='youknownothingjonsnow',
            first_name='jon', last_name="snow",
        )
        self.profile = self.profile = ProfileFactory(user=self.user)

    def test__str__(self):
        self.assertEqual(str(self.profile), 'jon snow')

    def test__publications_numbers(self):
        self.assertEqual(self.profile.publications_numbers, 0)
