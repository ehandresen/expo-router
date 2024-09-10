import { Link, router } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

const HomePage = () => {
  return (
    <View>
      <Text>HomePage</Text>
      <Link
        href={{
          pathname: '/users/[id]',
          params: {
            id: 1,
            name: 'john',
          },
        }}
      >
        go to user 1
      </Link>
      <Pressable
        onPress={() =>
          router.push({
            pathname: '/users/[id]',
            params: { id: 2 },
          })
        }
      >
        <Text>go to user 2</Text>
      </Pressable>
    </View>
  );
};

export default HomePage;
