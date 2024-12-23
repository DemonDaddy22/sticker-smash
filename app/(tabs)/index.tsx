import { registerRootComponent } from 'expo';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

const PlaceholderImage = require('@/assets/images/background-image.png');

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string>();

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label='Choose a photo' theme='primary' onPress={handlePickImage} />
        <Button label='Use this photo' onPress={() => {}} />
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
