import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Pizza', 'Burger', 'Dry Fruits', 'Balti Zaan', 'Mangos'];
  
  const foods = [
    { id: 1, name: 'Pizza', price: '$12.99', rating: '4.8', time: '25 min', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400' },
    { id: 2, name: 'Burger', price: '$8.99', rating: '4.6', time: '15 min', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
    { id: 3, name: 'Dry Fruits', price: '$10.99', rating: '4.9', time: '20 min', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWD-thKHwQqnp5PIWI5qXmkW2hFw4-MllbA&s' },
    { id: 4, name: 'Balti Zaan', price: '$10.99', rating: '4.9', time: '10 min', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4MnnHRP0cAfydt8m3ZKZoSR9T_VWpZX0DTg&s' },
    { id: 5, name: 'Mangos', price: '$3.99', rating: '4.4', time: '8 min', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZ91EMc1ts6-TN9_cS_-hjldD4uzi1OvOPw&s' },
  ];

  const filteredFoods = selectedCategory === 'All' 
    ? foods 
    : foods.filter(f => f.name.includes(selectedCategory));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi Sarwar👋</Text>
           <Text style={styles.location}>name: Sarwar</Text>
            <Text style={styles.location}>reg no :562</Text>
          <Text style={styles.location}>Skardu</Text>
        </View>
        <TouchableOpacity style={styles.profile}>
          <Text style={styles.profileText}>GB</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for food..."
            value={search}
            onChangeText={setSearch}
            placeholderTextColor="#999"
          />
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerText}>
            <Text style={styles.bannerTitle}>30% OFF</Text>
            <Text style={styles.bannerSubtitle}>select your order</Text>
          </View>
        </View>

        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
          {categories.map(cat => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.categoryBtn,
                selectedCategory === cat && styles.categoryBtnActive
              ]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text style={[
                styles.categoryText,
                selectedCategory === cat && styles.categoryTextActive
              ]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Popular Foods */}
        <Text style={styles.sectionTitle}>Popular Dishesh</Text>
        <View style={styles.foodGrid}>
          {filteredFoods.map(food => (
            <TouchableOpacity key={food.id} style={styles.foodCard}>
              <Image source={{ uri: food.img }} style={styles.foodImage} />
              <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{food.name}</Text>
                <View style={styles.foodMeta}>
                  <Text style={styles.foodPrice}>{food.price}</Text>
                  <Text style={styles.foodRating}>⭐ {food.rating}</Text>
                </View>
                <Text style={styles.foodTime}>{food.time}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🛒</Text>
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 14,
    color: '#666',
  },
  location: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    marginTop: 4,
  },
  profile: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#FF6B35',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  searchBox: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 15,
    fontSize: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  banner: {
    marginHorizontal: 20,
    backgroundColor: '#FF6B35',
    borderRadius: 20,
    padding: 25,
    marginBottom: 25,
  },
  bannerText: {},
  bannerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
  },
  bannerSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  categories: {
    paddingLeft: 20,
    marginBottom: 25,
  },
  categoryBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  categoryBtnActive: {
    backgroundColor: '#FF6B35',
    borderColor: '#FF6B35',
  },
  categoryText: {
    fontSize: 15,
    color: '#666',
    fontWeight: '600',
  },
  categoryTextActive: {
    color: '#fff',
  },
  foodGrid: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  foodCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  foodImage: {
    width: '100%',
    height: 160,
  },
  foodInfo: {
    padding: 15,
  },
  foodName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  foodMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  foodPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF6B35',
  },
  foodRating: {
    fontSize: 14,
    color: '#666',
  },
  foodTime: {
    fontSize: 13,
    color: '#999',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 22,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: '#999',
  },
  navTextActive: {
    fontSize: 12,
    color: '#FF6B35',
    fontWeight: '600',
  },
});