from django.urls import path

from .views import TestListView


urlpatterns = [
    path('api/test/', TestListView.as_view()),
]