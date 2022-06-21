import React from "react";
import { StyleSheet, View, Pressable, Text} from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { Formik } from "formik";

export function InputForm({addArticle}) {
    return(
        <View>
            <Formik initialValues={{title: '', description: '', img: ''}} onSubmit={(values, action) => {
                if(values.title.trim() != '' & values.description.trim() != '' & values.img.startsWith('https://')){
                    addArticle(values)
                    action.resetForm
                }
            }}>
                {(props) =>(
                    <View>
                        <TextInput
                            style={styles.title}
                            value={props.values.title}
                            placeholder='Title' 
                            onChangeText={props.handleChange('title')}/>
                        <TextInput
                            style={styles.title}
                            value={props.values.img}
                            placeholder='Photo' 
                            onChangeText={props.handleChange('img')}/>
                        <TextInput  
                            editable
                            style={styles.title}
                            value={props.values.description}
                            multiline
                            placeholder='Description' 
                            onChangeText={props.handleChange('description')}/>
                        <Pressable style={styles.addButton} onPress={props.handleSubmit}>
                            <Text style={styles.text}>Add</Text>
                        </Pressable>
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        borderWidth: 1,
        marginTop: 10,
        padding: 10,
        borderColor:'silver',
        borderRadius: 10,
        padding: 10
    },
    addButton: {
        marginTop: 10,
        marginBottom: 50,
        marginHorizontal:20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});