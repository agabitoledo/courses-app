import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, TextInput, Alert, Button } from 'react-native';
import api from '../../services/api';
import { AuthContext } from '../../context/AuthContextProvider';
import { red } from '@material-ui/core/colors';

export default function Login({ navigation }) {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const { setUserInfo } = useContext(AuthContext);
    const handleSubmit = () => {
        if (form.email === '' || form.password === '') {
            Alert.alert(
                "Todos os campos são obrigatórios!",
                "Preencha novamente.",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
        api.post('user/login', form).then((resp) => {
            setUserInfo(resp.data);
            navigation.navigate('Home');
        });
    };

    // useEffect(() => {
    //     if (!userInfo || !userInfo.token) {
    //         navigation.navigate('Home');
    //     }
    // }, [userInfo]);

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text} >
                    Login
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={newText => setForm({ ...form, email: newText })}
                    defaultValue={form.email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    onChangeText={newText => setForm({ ...form, password: newText })}
                    defaultValue={form.password}
                    secureTextEntry={true}
                />
                <Button color="#d45db4" title={'Entrar'} onPress={handleSubmit} style={styles.button}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 30,
        backgroundColor: '#d8c9da',
    },
    input: {
        height: 40,
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        borderWidth:1,
        borderColor: "#d45db4",
        borderRadius:4,

    },
    text:{
        fontSize: 25,
        fontWeight: "bold",
        color:"#3b373a"
    }
})