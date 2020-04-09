import { StyleSheet, Text } from 'react-native';

import COLORS from '../constants/colors.json'
import React from 'react'

/**
 * @use <StyledText type="primary">Ola</StyledText>
 */
function StyledText({children, type = "primary"}) {
    return <Text style={{...styles.root, color: COLORS.text[type]}}>{children}</Text>
}

const styles = StyleSheet.create({
    root: {
    }
})


export default StyledText;