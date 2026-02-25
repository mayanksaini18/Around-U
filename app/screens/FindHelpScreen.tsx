import { useState, useMemo } from 'react';
import {
  View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity,
  StatusBar, ActivityIndicator, Linking
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CATEGORIES = [
  { id: '1', name: 'ELECTRICIAN', size: 'large', icon: 'flash-outline' },
  { id: '2', name: 'CLEANING', size: 'small', icon: 'water-outline' },
  { id: '3', name: 'PLUMBING', size: 'small', icon: 'construct-outline' },
  { id: '4', name: 'CAR WASH', size: 'large', icon: 'car-outline' },
];

export default function DiscoveryScreen() {
  const insets = useSafeAreaInsets();
  const [service, setService] = useState("");
  const [pincode, setPincode] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (manualService?: string) => {
    const searchService = manualService || service;
    if (!searchService || !pincode) return;

    try {
      setLoading(true);
      setHasSearched(true);
      const url = `https://around-u-ma5e.onrender.com/api/search/?service=${searchService}&pincode=${pincode}`;
      const response = await fetch(url);
      const data = await response.json();
      setResults(data.data || []);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  // FIX: Stable Header to prevent focus loss
  const HeaderComponent = useMemo(()=>{
   return (
    <View>
      <Text style={styles.header}>EXPLORE{"\n"}SERVICES.</Text>
      
      <View style={styles.searchCard}>
        

        <View style={styles.inputWrapper}>
          <Ionicons name="construct-outline" size={18} color="#888" />
          <TextInput
            style={styles.input}
            placeholder="What service?"
            placeholderTextColor="#666"
            value={service}
            onChangeText={setService}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Ionicons name="location-outline" size={18} color="#888" />
          <TextInput
            style={styles.input}
            placeholder="Enter Pincode"
            placeholderTextColor="#666"
            keyboardType="numeric"
            value={pincode}
            onChangeText={setPincode}
          />
        </View>

        <TouchableOpacity style={styles.searchButton} onPress={() => handleSearch()}>
          {loading ? <ActivityIndicator color="#000" /> : <Text style={styles.searchButtonText}>SEARCH</Text>}
        </TouchableOpacity>
      </View>

      {!hasSearched && (
        <View style={styles.grid}>
          {CATEGORIES.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              onPress={() => {
                setService(item.name);
                handleSearch(item.name);
              }}
              style={[styles.tile, item.size === 'large' ? styles.tileLarge : styles.tileSmall]}
            >
              <Ionicons name={item.icon as any} size={24} color="#FFF" style={styles.tileIcon} />
              <Text style={styles.tileText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
   )
  
  },[service ,pincode ,loading, hasSearched])


  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={results}
        // FIX: Using a function or direct component here often causes the focus bug.
        // We pass the Header component we defined above.
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={styles.scrollContent}
        keyExtractor={(item) => item._id}
        keyboardShouldPersistTaps="handled" // Important for search inputs
        renderItem={({ item }) => (
          <View style={styles.resultCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.resName}>{item.name}</Text>
              <Text style={styles.resService}>{item.phone}</Text>
              <Text style={styles.resService}>{item.service} • {item.location}</Text>
              <Text style={styles.resService}>{item.city}</Text>
              <Text style={styles.resService}>{item.pincode}</Text>

            </View>
            <TouchableOpacity
              style={styles.callButton}
              onPress={() => Linking.openURL(`tel:${item.phone}`)}
            >
              <Ionicons name="call" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          hasSearched && !loading ? (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No professionals found in this area.</Text>
            </View>
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  scrollContent: { padding: 20 },
  header: { fontSize: 48, fontWeight: '900', color: '#FFF', marginBottom: 20, letterSpacing: -1 },
  searchCard: { backgroundColor: '#1A1A1A', borderRadius: 24, padding: 20, marginBottom: 30 },
  inputWrapper: { flexDirection: "row", alignItems: "center", backgroundColor: "#000", borderRadius: 12, paddingHorizontal: 15, marginBottom: 12 },
  input: { flex: 1, paddingVertical: 14, marginLeft: 10, color: '#FFF' },
  searchButton: { backgroundColor: '#FFF', padding: 16, borderRadius: 12, alignItems: 'center' },
  searchButtonText: { fontWeight: '900', color: '#000', fontSize: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  tile: { backgroundColor: '#1A1A1A', borderRadius: 24, padding: 20, marginBottom: 15, justifyContent: 'flex-end' },
  tileSmall: { width: '48%', height: 160 },
  tileLarge: { width: '100%', height: 160 },
  tileIcon: { position: 'absolute', top: 20, right: 20 },
  tileText: { color: '#FFF', fontSize: 20, fontWeight: '800' },
  resultCard: { backgroundColor: '#1A1A1A', borderRadius: 20, padding: 20, marginBottom: 12, flexDirection: 'row', alignItems: 'center' },
  resName: { color: '#FFF', fontSize: 18, fontWeight: '700' },
  resService: { color: '#888', fontSize: 14, marginTop: 4 },
  callButton: { backgroundColor: '#FFF', padding: 12, borderRadius: 12 },
  emptyContainer: { paddingVertical: 20, alignItems: 'center' },
  emptyText: { color: '#444', fontWeight: '600' }
});