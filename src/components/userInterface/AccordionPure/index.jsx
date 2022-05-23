import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native-web';

export default function AccordionPure({ children, title, onLongPress }) {
    const [isOpen, setIsOpen] = useState()
    return (
        <>
            <View style={styles.container} >
                <View>
                    <TouchableOpacity onPress={() => setIsOpen(!isOpen)} onLongPress={onLongPress}>
                        <Text style={styles.text}>
                            {title}
                        </Text>
                    </TouchableOpacity>
                </View>
                {
                    isOpen &&
                    <View style={styles.content}>
                        <Text>

                        {children}
                        </Text>
                    </View>
                }
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItens: 'center',
        justifyContent: 'center',
        marginTop: 50,
        backgroundColor: '#999',
    },
    content: {
        width: '100%',
        padding: 16,
        fontSize: 16,
    },
    text: {
        color: 'white',
        fontFamily: 'sans serif',
        fontWeight: 'bold',
    }
})