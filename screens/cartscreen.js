import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { CartContext } from '../App';

const CartScreen = ({ navigation }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.cartImage} />
      
      <View style={styles.itemInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₹{item.price} × {item.quantity}</Text>
        
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
            <Text style={styles.qtyBtn}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
            <Text style={styles.qtyBtn}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeBtn}>
        <Text style={{ color: 'red', fontWeight: '600' }}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList 
            data={cart} 
            keyExtractor={(item) => item.id.toString()} 
            renderItem={renderCartItem} 
          />
          <View style={styles.totalContainer}>
            <Text style={styles.total}>Total: ₹{totalPrice}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutBtn} onPress={() => navigation.navigate('Checkout')}>
            <Text style={styles.checkoutText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f8f8f8' },
  cartItem: { 
    flexDirection: 'row', 
    backgroundColor: 'white',
    marginBottom: 12,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center'
  },
  cartImage: { 
    width: 70, 
    height: 70, 
    borderRadius: 8,
    marginRight: 12 
  },
  itemInfo: { flex: 1 },
  name: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  price: { fontSize: 15, color: '#666', marginBottom: 8 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  qtyBtn: { fontSize: 24, paddingHorizontal: 12, color: '#007AFF' },
  quantity: { fontSize: 18, paddingHorizontal: 10 },
  removeBtn: { padding: 8 },
  totalContainer: { marginVertical: 20 },
  total: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: '#28a745' },
  checkoutBtn: { 
    backgroundColor: '#28a745', 
    padding: 18, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  checkoutText: { 
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
  empty: { 
    textAlign: 'center', 
    marginTop: 100, 
    fontSize: 20, 
    color: '#888' 
  },
});

export default CartScreen;