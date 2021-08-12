from rest_framework import generics
from ...models import TestModel
from ...serializers import TestListSerializer


class TestListView(generics.ListAPIView):
    serializer_class = TestListSerializer
    queryset = TestModel.objects.all()