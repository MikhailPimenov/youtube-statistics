from django.contrib import admin

from ..models import TestModel


class TestAdmin(admin.ModelAdmin):
    pass


admin.site.register(TestModel, TestAdmin)
