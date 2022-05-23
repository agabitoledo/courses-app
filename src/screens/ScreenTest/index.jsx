import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import api from '../../services/api';
// import UiButton from '../../components/userInterface/UiButton'
// import CustomButton from '../../components/userInterface/CustomButton';
import AccordionUi from '../../components/userInterface/Accordion';

const ScreenTest = ({ navigation }) => {
  const [courseList, setCourseList] = useState([])

  React.useEffect(() => {
    api.get('/course').then((resp) => {
      setCourseList(resp.data);
    })
  }, []);

  console.log('jjjjj', courseList)
  return (
    <>
      <View>
        <Text>Courses app</Text>
        {/* <UiButton
          initialCounter={0} teste={10}
        /> */}
        <Button
          style={styles.button}
          title='Login'
          onPress={() =>  navigation.navigate("Login") }

        />

        {/* <CustomButton
          styleTitle={styles.title}
          styleContainer={styles.button}
          title={'uhuhuhuh'}
        /> */}
        {
          courseList && courseList.map((item) => (
            <AccordionUi
              key={`id-${item.courseId}`}
              title={item.title}
              description={item.description}
            >
            </AccordionUi>
          ))
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
  }
});

export default ScreenTest;
