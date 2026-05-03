import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { CartContext } from '../App';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.detailImage} />
      
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>₹{product.price}</Text>
        <Text style={styles.desc}>{product.desc}</Text>

        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(product)}>
          <Text style={styles.addText}>Add to Cart (+)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.cartText}>Go to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  detailImage: { 
    width: '100%', 
    height: 280, 
    borderRadius: 12, 
  },
  content: { 
    padding: 20 
  },
  name: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 8 
  },
  price: { 
    fontSize: 26, 
    color: '#28a745', 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  desc: { 
    fontSize: 16, 
    lineHeight: 24, 
    marginBottom: 30, 
    color: '#444' 
  },
  addButton: { 
    backgroundColor: '#007AFF', 
    padding: 16, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginBottom: 12 
  },
  addText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  cartButton: { 
    backgroundColor: '#28a745', 
    padding: 16, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  cartText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});

export default ProductDetailScreen;