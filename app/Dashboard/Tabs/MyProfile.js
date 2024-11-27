import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MyProfile = () => {
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Kyla Gabriento",
    username: "teokbooki",
    bio: "i lovee cats and dogs!",
    followers: 4989,
    friends: 3800,
    relationshipStatus: "Single",
    profileImage: require("../../assets/meow.jpg"),
  });

  const handleEditPress = () => {
    setEditing(!editing);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
          <Image source={profileData.profileImage} style={styles.profileImage} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{profileData.name}</Text>
            <Text style={styles.username}>@{profileData.username}</Text>
            <Text style={styles.bio}>{profileData.bio}</Text>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>{profileData.friends} Friends</Text>
              <Text style={styles.infoText}>{profileData.relationshipStatus}</Text>
              <Text style={styles.infoText}>Followed by {profileData.followers} people</Text>
            </View>
          </View>
        </View>

        {/* Button Section */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleEditPress} style={styles.editButton}>
            <Text style={styles.buttonText}>{editing ? "Save" : "Edit"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>

        {/* Posts Section */}
        <View style={styles.postsContainer}>
          <View style={styles.post}>
            <Text style={styles.postUsername}>@teokbooki</Text>
            <Text style={styles.postText}>Looking for a new pet friend!</Text>
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="heart-outline" size={24} color="#718355" />
                <Text style={styles.iconText}>Like</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="chatbubble-outline" size={24} color="#718355" />
                <Text style={styles.iconText}>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="share-social-outline" size={24} color="#718355" />
                <Text style={styles.iconText}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator}></View>

          {/* Another Post */}
          <View style={styles.post}>
            <Text style={styles.postUsername}>@teokbooki</Text>
            <Text style={styles.postText}>Adopt pets now!</Text>
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="heart-outline" size={24} color="#718355" />
                <Text style={styles.iconText}>Like</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="chatbubble-outline" size={24} color="#718355" />
                <Text style={styles.iconText}>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="share-social-outline" size={24} color="#718355" />
                <Text style={styles.iconText}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator}></View>

          {/* Additional Posts can be added here */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', 
  },
  container: {
    padding: 20,
    alignItems: 'flex-start',
  },
  profileContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileImageContainer: {
    marginRight: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#CFE1B9',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#718355', 
  },
  username: {
    fontSize: 15,
    color: '#87986A',
  },
  bio: {
    fontSize: 16,
    color: '#718355', 
    marginTop: 10,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#718355', 
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  editButton: {
    backgroundColor: '#B5C99A',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#B5C99A',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  postsContainer: {
    marginTop: 30,
    width: '100%',
  },
  post: {
    marginBottom: 20,
    width: '100%',
  },
  postUsername: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#718355', 
  },
  postText: {
    fontSize: 16,
    color: '#718355', 
    marginTop: 5,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 14,
    color: '#718355', 
    marginLeft: 5,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#CFE1B9', 
    marginTop: 10,
  },
});

export default MyProfile;
