import React from 'react';
import { View } from 'react-native';
import { FlatList, StyleSheet, Text } from 'react-native-web';

export default function CustomFlatList({ listItems, field, handleEdit, handleDelete, addNew }) {
    const renderItem = ({ item, index }) => {
        return item.addNew ? (
            <View style={styles.item} onPress={addNew}>
                <Text>
                    {item[field]}
                </Text>

            </View>
        )
            :
            (
                <View style={{ ...styles.item, backgroundColor: index % 2 === 0 ? '#e4b9e3' : '#ed5bbe87' }} >
                    <Text>
                        {item[field]}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        {
                            handleEdit && handleDelete &&
                            <>
                                <Text style={{ ...styles.btn, color: '#077c0d' }} onPress={() => handleEdit(item.courseId)} > Editar </Text>
                                <Text style={{ ...styles.btn, color: '#8a0c6a' }} onPress={() => handleEdit(item.courseId)} > Apagar </Text>
                            </>
                        }
                    </View>
                </View >
            )
    };
    return (
        <View style={styles.container}>
            <FlatList 
                data={listItems}            
                renderItem={renderItem}
                keyExtractor={item => item.courseId}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:  '100%',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    item: {
        maxWidth: '100%',
        padding: 10,
        backgroundColor:'#e4b9e3',
        color: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn:{
        paddingRight: 10,
        paddingLeft: 10,
    },
    
});