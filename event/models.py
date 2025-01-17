from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
import uuid

# Create your models here.
class Register(models.Model):
    regChoice = (
        ('Self', 'Self'),
        ('Group', 'Group'),
        ('Corporate', 'Corporate'),
        ('Others', 'Others'),
    )
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254,null=True)
    phoneNumber = PhoneNumberField(null=True)
    idCard = models.ImageField(upload_to='idCard', null=True)
    regType = models.CharField(max_length=25, choices=regChoice,null=True)
    ticketNo = models.IntegerField(default=1,null=True)
    date = models.DateTimeField(auto_now=True)
    expDate = models.DateTimeField(null=True)
    status = models.BooleanField(default=False)
    random = models.IntegerField(null=True)

    def __str__(self):
        return self.name