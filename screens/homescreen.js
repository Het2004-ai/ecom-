import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../App';

const HomeScreen = ({ navigation }) => {
  const { products, addToCart } = useContext(CartContext);

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <TouchableOpacity
        style={styles.productInfo}
        onPress={() => navigation.navigate('ProductDetail', { product: item })}
      >
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>₹{item.price}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Ionicons name="cart" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.cartText}>View Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8'
  },
  productCard: {
    flexDirection: 'column',
    backgroundColor: '#8883838a',
    marginBottom: 12,
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  productInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12
  },
  textContainer: { flex: 1 },
  name: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 4
  },
  price: {
    fontSize: 18,
    color: '#28a745',
    fontWeight: 'bold'
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 11,
    paddingVertical: 10,
    borderRadius: 25,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  cartButton: {
    backgroundColor: '#28a745',
    padding: 16,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  cartText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default HomeScreen;