import factory

from ..models import Category, Publications
from usados.users.tests.factories import ProfileFactory


class CategoryFactory(factory.DjangoModelFactory):

    class Meta:
        model = Category

    name = factory.Sequence(lambda n: 'category_%d' % n)


class PublicationFactory(factory.DjangoModelFactory):

    class Meta:
        model = Publications
    
    profile = factory.SubFactory(ProfileFactory)
    title = factory.Sequence(lambda n: 'title_%d' % n)
    model = factory.Sequence(lambda n: 'model_%d' % n)
    branch = factory.Sequence(lambda n: 'branch_%d' % n)
    profile = factory.SubFactory(ProfileFactory)
    category = factory.SubFactory(CategoryFactory)
