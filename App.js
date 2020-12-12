import React, {useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';

const App = () => {
  const [capital, setCapital] = useState(null);
  const [intereses, setIntereses] = useState(null);
  const [meses, setMeses] = useState(null);

  const onSubmit = () => {
    console.log('capital ->', capital)
    console.log('intereses ->', intereses)
    console.log('meses ->', meses)
  }

  return (
    <>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.tittleApp}>Cotizador de Prestamos</Text>
        <Form 
          setCapital={setCapital}
          setIntereses={setIntereses}
          setMeses={setMeses}
        />
      </SafeAreaView>
      
      <View>
        <Text>Resultado</Text>
      </View>

      <View>
        <Text>Footer</Text>
        <Button title="Consultar" onPress={onSubmit} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea:{
    height: 290,    
    alignItems:"center"
  },
  background: {
    backgroundColor:colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,

  },
  tittleApp: {
    fontSize:25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,

  }
});

export default App;
