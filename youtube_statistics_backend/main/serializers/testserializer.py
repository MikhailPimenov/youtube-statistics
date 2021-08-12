from rest_framework import serializers

from ..models import TestModel


class TestListSerializer(serializers.ModelSerializer):
    string_for_json = serializers.CharField(source='string')

    class Meta:
        model = TestModel

        fields = (
            'string_for_json',
            'number',
        )
