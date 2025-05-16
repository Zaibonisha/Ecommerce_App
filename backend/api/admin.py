from django.contrib import admin
from .models import Product, Category

# Customizing the Product admin interface
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'created_at', 'updated_at')  # Columns to display in the list view
    list_filter = ('category',)  # Adds a filter sidebar to filter products by category
    search_fields = ('name', 'description')  # Allows search by product name and description
    prepopulated_fields = {'name': ('description',)}  # Automatically fills the 'name' field based on the description

admin.site.register(Product, ProductAdmin)

# Register Category if needed
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

admin.site.register(Category, CategoryAdmin)
