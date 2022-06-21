import { StyleSheet, Text, SafeAreaView, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { gStyle } from '../../styles/Style';

export default function FullInfo({route}) {

    return (
        <SafeAreaView style={gStyle.main}>
            <ScrollView>
                <Image style={gStyle.image} source={{
                    uri: route.params.img
                }}/>
                <Text style={gStyle.title}>{route.params.title}</Text>
                <Text style={styles.description}>{route.params.description}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    description: {
        fontSize: 15,
        color:'#333',
        fontFamily: 'comf-light',
        marginTop:5,
        textAlign: "center"
    }
})
