import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = ({ key, task}) => {
    return (
        <View style={styles.item} key={key}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.text}> {task} </Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 25,
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    itemLeft: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    square: {
        width: 24,
        height: 24,
        opacity: 0.4,
        backgroundColor: '#55BCF6',
        borderRadius: 5
    },
    text: {
        maxWidth: '80%',
        marginLeft: 5,
        fontSize: 14
    },
    circular: {
        width: 15,
        height: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#55BCF6',
    }
});

export default Task;