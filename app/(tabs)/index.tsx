import { View, Pressable } from 'react-native';
import { Link } from 'expo-router';

const HomePage = () => {
  return (
    <View>
      {/* <Link
        href={{
          pathname: '/users/[id]',
          params: {
            id: '1',
            name: 'john',
          },
        }}
      >
        go to user 1
      </Link> */}
      <Link href="/modal">Open modal</Link>
    </View>
  );
};

export default HomePage;
