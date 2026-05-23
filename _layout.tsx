import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function App() {
  const [posts, setPosts] = useState([]);

  // Sample data loaded once
  useEffect(() => {
    setPosts([
      { id: 1, name: 'ilyas hussain', role: 'Software Engineer at Google',
        text: 'Just shipped my first React Native app! 🚀', likes: 12, liked: false },
      { id: 2, name: 'M. Abbas', role: 'Product Manager at Microsoft',
        text: 'Looking for a UI/UX designer for our startup. DM me if interested.', likes: 34, liked: true },
      { id: 3, name: 'Ajmul', role: 'Data Analyst at Amazon',
        text: 'Completed my 100 days of coding challenge. Consistency is key!', likes: 56, liked: false },
    ]);
  }, []);

  const toggleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id
       ? {...post, liked:!post.liked, likes: post.liked? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Linkit</Text>
      </View>

      <ScrollView>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>GB</Text>
          </View>
          <Text style={styles.profileName}>M.Sarwar</Text>
          <Text style={styles.profileRole}>web Developer</Text>
          <Text style={styles.profileStats}>450 connections</Text>
        </View>

        {/* Feed Title */}
        <Text style={styles.sectionTitle}>Feed</Text>

        {/* Posts */}
        {posts.map(post => (
          <View key={post.id} style={styles.postCard}>
            <View style={styles.postHeader}>
              <View style={styles.smallAvatar}>
                <Text style={styles.smallAvatarText}>{post.name[0]}</Text>
              </View>
              <View>
                <Text style={styles.postName}>{post.name}</Text>
                <Text style={styles.postRole}>{post.role}</Text>
              </View>
            </View>

            <Text style={styles.postText}>{post.text}</Text>

            <View style={styles.postFooter}>
              <Text style={styles.likesText}>{post.likes} likes</Text>
              <TouchableOpacity
                style={[styles.likeBtn, post.liked && styles.likeBtnActive]}
                onPress={() => toggleLike(post.id)}
              >
                <Text style={[styles.likeText, post.liked && styles.likeTextActive]}>
                  {post.liked? '❤️ Liked' : '👍 Like'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2EF',
  },
  header: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0A66C2',
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#0A66C2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  profileRole: {
    fontSize: 15,
    color: '#666',
    marginTop: 4,
  },
  profileStats: {
    fontSize: 14,
    color: '#0A66C2',
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  postCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  smallAvatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#0A66C2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  smallAvatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  postName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  postRole: {
    fontSize: 13,
    color: '#666',
  },
  postText: {
    fontSize: 15,
    color: '#000',
    lineHeight: 22,
    marginBottom: 12,
  },
  postFooter: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  likesText: {
    fontSize: 14,
    color: '#666',
  },
  likeBtn: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#F3F2EF',
  },
  likeBtnActive: {
    backgroundColor: '#E8F3FF',
  },
  likeText: {
    fontSize: 15,
    color: '#666',
    fontWeight: '600',
  },
  likeTextActive: {
    color: '#0A66C2',
  },
});