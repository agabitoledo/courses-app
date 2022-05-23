import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native-web";

export default function UiButton({ title, onChange, styleContainer, styleTitle }) {
    return (
        <TouchableOpacity
            onPress={onChange}
            style={styleContainer ? styleContainer : styles.container}
        >
            <Text title={styleTitle ? styleTitle : styles.titleTxt}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItens: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#c6c',
        marginTop:20,
    },
    titleTxt: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})