import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import { createPet, getPets } from '../services/api.js';

interface PetProps {
  _id: string
  name: string
  desc: string
}
interface PetCreateProps {
  name: string,
  desc: string
}

export default function App() {
    const [pets, setPets] = useState<PetProps[]>([]);
    const [value, setValue]= useState<PetCreateProps>({ name: '', desc: '' })

    useEffect(() => {
        // Fetch pet categories on app load
        const fetchPets = async () => {
            try {
                const petsData = await getPets();
                setPets(petsData);
            } catch (error) {
                console.error('Error fetching pets', error);
            }
        };
        fetchPets();
    }, []);
    
    const handleAddPet  = async () => {
      try {
        const newPet = await createPet(value.name, value.desc)
        setPets([...pets, newPet]);
        setValue({ name: '', desc: '' });
      } catch (error) {
        console.log("Error adding pet")
      }
    }
    return (
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20 }}>Home</Text>
            <FlatList
          data={pets}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
              <View style={{ marginBottom: 15 }}>
            <Text style={{
              fontSize: 20, fontWeight: '600'
            }}>{item.name}</Text>
            <Text style={{
              fontSize: 15, fontWeight: '400', color: '#555'
            }}>{item.desc}</Text>
              </View>
          )}
            />
            <Text style={{
              marginTop: 30, fontSize: 18, fontWeight: '500'
            }}>Pet name</Text>


            <TextInput 
              style={{
          borderWidth: 1, borderColor: '#ccc', padding: 10, marginTop: 10, borderRadius: 5
              }} 
              placeholder='Enter pet details'
              onChangeText={(text) => setValue({ ...value, name: text })}
              value={value.name}
            />
            <TextInput 
              style={{
          borderWidth: 1, borderColor: '#ccc', padding: 10, marginTop: 10, borderRadius: 5
              }} 
              placeholder='Enter pet description'
              onChangeText={(text) => setValue({ ...value, desc: text })}
              value={value.desc}
            />
            <View style={{ marginTop: 20 }}>
              <Button 
                title="Add Pet" 
                onPress={handleAddPet}
              />
            </View>
        </View>
    );
}
