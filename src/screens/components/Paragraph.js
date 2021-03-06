import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function Paragraph(props) {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 12,
    fontFamily: 'sans-serif-light',
  },
});
