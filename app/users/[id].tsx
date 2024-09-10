import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

const UserPage = () => {
  const { id, name } = useLocalSearchParams();

  return (
    <View>
      <Text>
        User {id}, name: {name}
      </Text>
    </View>
  );
};

export default UserPage;
