import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants/icon';

const TabIcon = ({ focused, icons, icons1 }: any) => {
  const iconSize = focused ? 26 : 18
  const img = focused ? icons : icons1 

  return (
    <ImageBackground
      style={styles.iconContainer}
      imageStyle={styles.imageStyle}
    >
        <Image source={img} style={[styles.icon, {width: iconSize, height: iconSize}]} />
    </ImageBackground>
  );
};

const RootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          padding: 20,
          backgroundColor: '#DCDCDC',
          minHeight: 60,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
        }
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icons={icons.home} icons1={icons.home1} />
          ),
        }}
      />
      <Tabs.Screen
        name="Pets"
        options={{
          headerShown: false,
          title: 'Pets',
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icons={icons.paws} icons1={icons.paws1} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icons={icons.profile1} icons1={icons.profile}/>
          ),
        }}
        />
    </Tabs>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    width: 130,
    minHeight: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: 20,
    paddingHorizontal: 10,
    borderRightWidth: .5,
    backgroundColor: 'transparent',
  },
  imageStyle: {
    resizeMode: 'contain',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
