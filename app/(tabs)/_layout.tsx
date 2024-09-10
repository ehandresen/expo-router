import { Tabs } from 'expo-router';
import { useState } from 'react';
import { Text, Pressable } from 'react-native';
import HeaderRight from '../../components/HeaderRight';

const TabsLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'Home',
          title: 'Home',
          headerLeft: () => <Text style={{ paddingLeft: 8 }}>Profile</Text>,
          headerRight: () => <HeaderRight />,
        }}
      />
      <Tabs.Screen
        name="users/[id]"
        options={{
          headerTitle: 'User',
          title: 'User',
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
