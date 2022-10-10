import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import * as Contacts from 'expo-contacts';
import React from 'react';

export default function App() {

  const [contact, setContact] = useState([]);

  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync(
        { fields: [Contacts.Fields.PhoneNumbers] });
      if (data.length > 0) { setContact(data); }
    }
  };

  const render = (contact) =>{
    if(Object.keys(contact.phoneNumbers[0].number).length==0){
      return 1;
    }
    else{
      return
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={contact}
        renderItem={
        
          ({ item }) => {<Text>{item.name} ({item.phoneNumbers[0].number})</Text>}
     
    }
    
      />
      <View style={styles.btn}>
        <Button title="GET CONTACTS" onPress={getContacts} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    marginTop: 50,
    marginLeft: 30,
    marginBottom: 30,
  },
  btn: {
    marginBottom: 60,
  },
});