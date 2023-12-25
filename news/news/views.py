from django.shortcuts import render
from news.models import NewsModel     

def index(request):
    latest_news_list = NewsModel.objects.all().order_by("-id")
    return render(request, 'index.html', {'latest_news_list': latest_news_list})
