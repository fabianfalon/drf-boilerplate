import factory
from ..models import User, Profile


class UserFactory(factory.DjangoModelFactory):
    class Meta:
        model = User

    username = factory.Sequence(lambda n: 'john%s' % n)
    email = factory.LazyAttribute(lambda o: '%s@example.org' % o.username)
    first_name = factory.Sequence(lambda n: 'name%s' % n)
    last_name = factory.Sequence(lambda n: 'last_name%s' % n)
    email = factory.LazyAttribute(lambda o: '%s@example.org' % o.username)
    password='youknownothingjonsnow'


class ProfileFactory(factory.DjangoModelFactory):
    class Meta:
        model = Profile

    user = factory.SubFactory(UserFactory)
    birthdate="1991-06-17"

