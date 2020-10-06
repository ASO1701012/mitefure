FROM python:3

ENV PYTHONUNBUFFERED 1

RUN mkdir /code

WORKDIR /code

# install Libraries
ADD requirements.txt /code/
RUN pip install -r requirements.txt

# to be consistent versions of between "Django and PyMySQL"
RUN pip install -U PyMySQL

ADD . /code/