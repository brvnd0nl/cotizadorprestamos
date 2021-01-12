import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import colors from '../utils/colors';

const Footer = (props) => {
    const {calcularPrestamo} = props;
    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.touchableButton} onPress={() => calcularPrestamo()}>
                <Text style={styles.textStyle}>CALCULAR</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    touchableButton: {
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: '75%',        
    }
})
