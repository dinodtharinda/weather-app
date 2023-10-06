import { View, Text } from 'react-native'
import React from "react";

const OurChild = ( props ) => {
    const { message } = props
    return (
        <View style={{ height: 200, width: 200, backgroundColor: 'red' }}>
            <Text>
                {message}
            </Text>
        </View>
    )
}

export default OurChild