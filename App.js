import React, {useState, useEffect} from 'react';
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
import Footer from './src/components/Footer';
import Resultado from './src/components/Resultado';

const App = () => {
  const [capital, setCapital] = useState(null);
  const [intereses, setIntereses] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [botonCalcular, setBotonCalcular] = useState(false);

  useEffect(() => {
    if(capital, intereses, meses, botonCalcular){
      calcularPrestamo();
    }else{
      resetear();
    }
  },[capital, intereses, meses])

  const calcularPrestamo = () => {

    resetear();

    if(!capital){
      setErrorMessage('Añade la cantidad que quieres solicitar.');
    }else if(!intereses){
      setErrorMessage('Añade el interes del prestamo a solicitar.');
    }else if(!meses){
      setErrorMessage('Añade los meses del prestamo a solicitar.');
    }else{
      const i = intereses / 100;
      const valorCuota = capital / ((1 - Math.pow(i + 1, -meses)) / i);
      setTotal({
        cuotaMensual: valorCuota.toFixed(2).replace('.',','),
        totalPagado: (valorCuota * meses).toFixed(2).replace('.',','),
      })
    }

    setBotonCalcular(true);

  }

  const resetear = () => {
    setErrorMessage('');
    setTotal(null);
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
      <Resultado 
        errorMessage={errorMessage} 
        capital={capital}
        intereses={intereses}
        meses={meses}
        total={total}
      />
      <Footer calcularPrestamo={calcularPrestamo} />
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
