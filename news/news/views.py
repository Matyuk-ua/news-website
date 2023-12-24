from django.shortcuts import render
from news.models import NewsModel

def news_view(request):
    news_data = NewsModel.objects.all()
    return render(request, 'index.html', {'news_data': news_data})

def index(request):
    latest_news_list = NewsModel.objects.all()
    return render(request, 'index.html', {'latest_news_list': latest_news_list})

def home(request):
    return render(request, 'index.html')
  
def add_news_page(request):
    return render(request, 'add_news.html')
