import { StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native';
import Index from './src/telas/Login/Index';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Index />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1822',
  },
  texto: {
    color: "#fff",
  }
});
