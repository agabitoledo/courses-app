import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from '../../services/api';
import AccordionUi from '../../components/userInterface/Accordion';
// import AccordionPure from '../../components/userInterface/AccordionPure';

const Home = ({ navigation }) => {
    const [courseList, setCourseList] = useState([])

    React.useEffect(() => {
        api.get('/course').then((resp) => {
            setCourseList(resp.data);
        })
    }, []);

    console.log('courseList', courseList)
    return (
        <>
            <View style={styles.vtext}>
                <Text style={styles.text}>Lista de Cursos</Text>
            </View>
            <View style={styles.container}>
                {
                    courseList && courseList.map((item) => (
                        <AccordionUi
                            style={styles.accordion}
                            key={`id-${item.courseId}`}
                            title={item.title}
                            description={item.description}
                            // onLongPress={()=>console.log('ksdopakd')}
                        >
                        </AccordionUi>
                    ))
                }

                {/* {
                    courseList && courseList.map((item) => (
                        <AccordionPure
                            key={`id-${item.courseId}`}
                            title={item.title}
                            onLongPress={()=> console.log('hndijsahdihasn')}
                        >
                            <Text>{new item.description}</Text>
                        </AccordionPure>
                    ))
                } */}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 30,
        backgroundColor: "#dca8ce",
    },
    button: {
        flex: 1,
        backgroundColor: '#5c6c',
        alignItens: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginHorizontal: 20,
        marginTop: 20,
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#3b373a",
        marginBottom: 20,
    },
    vtext: {
        backgroundColor: "#dca8ce",
        alignItems: 'center',
        justifyContent: 'center',
    },
    accordion: {
        backgroundColor: '#d8c9da'
    }
});

export default Home;
