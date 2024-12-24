import { registerRootComponent } from 'expo';
import { View, StyleSheet } from 'react-native';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

const PlaceholderImage = require('@/assets/images/background-image.png');

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label='Choose a photo' theme='primary' />
        <Button label='Use this photo' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1C1E27',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 40,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

registerRootComponent(Index);

export default Index;
