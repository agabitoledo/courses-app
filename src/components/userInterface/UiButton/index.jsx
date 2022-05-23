import React, { useState } from "react";
import { Button, Text } from 'react-native';
import { View } from "react-native-web";

export default function UiButton(props) {
    const [count, setCount] = useState(props.initialCounter);

    const increment = () => setCount(count + props.teste);
    const decrement = () => setCount(count - props.teste);
    return (
        <>
            <Button 
            title="+++++++" 
            onPress={increment}
            />

            <Text>{count}</Text>

            <Button 
            title="*-------" 
            onPress={decrement}
            />
        </>
    )
}