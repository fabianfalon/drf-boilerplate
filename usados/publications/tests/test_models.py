"""
Usados users tests tests_models
"""
from __future__ import unicode_literals

from django.test import TestCase

from .factories import CategoryFactory, PublicationFactory


# Create your tests here.
class PublicationModelTest(TestCase):
    """ User model tests"""

    def setUp(self):
        self.category = CategoryFactory()
        self.publication = PublicationFactory()

    def test_category__str__(self):
        self.assertEqual(str(self.category), 'Category: category_5')

    def test_category_is_active(self):
        self.assertTrue(self.category.is_active)

    def test_publication__str__(self):
        self.assertEqual(
            str(self.publication), '#title_2 - branch_2 model_2'
        )

    def test_publication_pictures(self):
        pictures = self.publication.get_pictures()
        self.assertEqual(pictures.count(), 0)
