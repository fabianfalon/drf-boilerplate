# Usados.com

### Local Setup
    usados.com es una plataforma en donde podras conseguir tu proximo vehiculo (moto / auto) usado o nuevo.

### 3 Run with docker
    $ docker-compose -f local.yml up
    $ docker-compose -f production.yml up

### 3.1 Initial migration
    $ docker volume ls
    $ docker volume rm VOLUME-NAME
    $ sudo docker-compose -f local.yml run --rm django python manage.py makemigrations
    $ sudo docker-compose -f local.yml run --rm django python manage.py migrate

### RUN Tests
    $ docker-compose -f local.yml run --rm django pytest

### Run flake8
    $ docker-compose -f local.yml run --rm django flake8