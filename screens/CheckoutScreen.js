import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { CartContext } from '../App';

const CheckoutScreen = () => {
  const { totalPrice, cart } = useContext(CartContext);

  const handlePurchase = () => {
    Alert.alert(
      'Purchase Successful!', 
      `You have successfully purchased ${cart.length} items for ₹${totalPrice}.\n\nThank you for shopping!`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Final Purchase Step</Text>
      <Text style={styles.total}>Total Amount Payable</Text>
      <Text style={styles.amount}>₹{totalPrice}</Text>
      
      <Text style={styles.note}>
        This is a demo POC. No real payment will be processed.
      </Text>

      <TouchableOpacity style={styles.buyButton} onPress={handlePurchase}>
        <Text style={styles.buyText}>Buy Now - Pay ₹{totalPrice}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff' 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginBottom: 40 
  },
  total: { 
    fontSize: 18, 
    color: '#666', 
    marginBottom: 8 
  },
  amount: { 
    fontSize: 42, 
    fontWeight: 'bold', 
    color: '#28a745', 
    marginBottom: 40 
  },
  note: { 
    fontSize: 16, 
    textAlign: 'center', 
    marginBottom: 50, 
    color: '#888', 
    lineHeight: 24 
  },
  buyButton: { 
    backgroundColor: '#28a745', 
    padding: 20, 
    borderRadius: 12, 
    width: '90%' 
  },
  buyText: { 
    color: 'white', 
    fontSize: 20, 
    textAlign: 'center', 
    fontWeight: 'bold' 
  },
});

export default CheckoutScreen;