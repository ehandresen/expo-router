import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const HeaderRight = () => {
  return (
    <Link href="/modal" style={{ paddingRight: 8 }}>
      <Text>New post</Text>
    </Link>
  );
};

export default HeaderRight;
