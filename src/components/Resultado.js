import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Resultado = (props) => {
    const {capital, intereses, meses, total, errorMessage} = props;
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text> 
                    <ComponenteDato title="Cantidad solicitada: " value={`${capital} $`} />
                    <ComponenteDato title="Intereses %: " value={`${intereses} %`} />
                    <ComponenteDato title="Plazos: " value={`${meses} meses`} />
                    <ComponenteDato title="Pago mensual: " value={`${total.cuotaMensual} $`} />
                    <ComponenteDato title="Total a pagar: " value={`${total.totalPagado} $`} />
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    )
}

export default Resultado;

function ComponenteDato(props) {
    const {title, value} = props;

    return (
        <View style={styles.viewValue}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    },
    content: {
        marginHorizontal: 40,
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30,
    },
    viewValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    }
})