import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from '../../services/api';
import CustomFlatList from '../../components/userInterface/CustomFlatList';

const Admin = ({ navigation }) => {
    const [courseList, setCourseList] = useState([])

    React.useEffect(() => {
        api.get('/course').then((resp) => {
            setCourseList(resp.data);
        })
    }, []);

    const handleEdit = () => {
        console.log('handle edit called');
    };

    const handleDelete = (courseId) => {
        api.delete(`course/${courseId}`).then((resp) => {
            api.get('/course').then((resp) => {
                console.log(resp.data);
                setCourseList(resp.data)
            });
        });
    };
    console.log('courseList', courseList)
    return (
        <>
            <View style={styles.container}>
                <Text>Estes são os cursos disponiveis</Text>
                <View style={styles.container}>
                    <CustomFlatList
                        listItems={[{ addNew: true, title: 'Add novo curso' }, ...courseList]}
                        field={'title'}
                        handleEdit={(courseId) => handleEdit(courseId)}
                        handleDelete={(courseId) => handleDelete(courseId)}
                    />
                </View>

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
    item: {
        width: '100%',
        padding: 10,
        backgroundColor: '#000000',
        color: '#ffffff',
    }
});

export default Admin;
