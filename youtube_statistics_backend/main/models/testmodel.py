from django.db import models


class TestModel(models.Model):
    string = models.CharField(max_length=20, default='text')
    number = models.IntegerField(blank=True, null=True, default=0)

    class Meta:
        verbose_name = 'test'
        verbose_name_plural = 'tests'

    def __str__(self):
        return f'test {self.id} {self.string} with number {self.number}'
