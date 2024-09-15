import React from 'react';
import {StyleSheet, Image, Text, View, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Feed = () => {
    return (        
        <SafeAreaView >
            <View style={styles.topContainer}>
                <Text style={styles.Back}>Back</Text>
                <Text style={styles.feedTitle}>Feed</Text>
                <Text style={styles.Filter}>Filter</Text>
            </View>

            <TextInput style={styles.input} placeholder='Search'
        ></TextInput>
            <View style={styles.container}>
            <View style={styles.imageContainer}></View>
            <View style={styles.textContainer}>
                <View style={styles.topContainer}>
                    <Text style={styles.title}>Header</Text>
                    <Text style = {styles.time}>8m ago</Text>
                </View>
                <Text style={styles.bodyText}>He'll want to use your yacht, and I don't want this thing smelling like fish.</Text>
            </View>
            </View>

            <View style={styles.container}>
            <View style={styles.imageContainer}></View>
            <View style={styles.textContainer}>
                <View style={styles.topContainer}>
                    <Text style={styles.title}>Header</Text>
                    <Text style = {styles.time}>8m ago</Text>
                </View>
                <Text style={styles.bodyText}>He'll want to use your yacht, and I don't want this thing smelling like fish.</Text>
            </View>
            </View>

            <View style={styles.container}>
            <View style={styles.imageContainer}></View>
            <View style={styles.textContainer}>
                <View style={styles.topContainer}>
                    <Text style={styles.title}>Header</Text>
                    <Text style = {styles.time}>8m ago</Text>
                </View>
                <Text style={styles.bodyText}>He'll want to use your yacht, and I don't want this thing smelling like fish.</Text>
            </View>
            </View>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 32, 
        paddingHorizontal: 16, 
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
    },
    imageContainer: {
        borderRadius: 8,
        backgroundColor: "#F6F6F6", 
        width: 50,
        height: 50,
        marginRight: 16,
    },
    textContainer: {
        flex: 1, 
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 19,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,  
    },
    bodyText: {
        flexWrap: 'wrap', 
        lineHeight: 18,
        marginRight: 16,
    },
    Back: {
        color: '#5DB075',
        fontSize: 16,
        fontWeight: "500",
        padding: 16,
        paddingTop: 25,
    },
    Filter: {
        color: '#5DB075',
        fontSize: 16,
        fontWeight: "500",
        paddingHorizontal: 10,
        paddingTop: 25,
    },
    feedTitle: {
        fontSize: 30,
        fontWeight: '600',
        padding: 16,
    },

    input: {
        height: 50,
        margin: 12,
        borderRadius: 20,
        fontSize: 16,
        fontWeight: '500',
        color: '#BDBDBD',
        padding: 10,
        backgroundColor: "#E8E8E8"
    },
    time: {
        color: '#BDBDBD',
        fontSize: 12, 
    }
});


export default Feed;
