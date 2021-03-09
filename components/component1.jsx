import React from 'react';
import { StyleSheet, View, Text , Button, Image } from 'react-native';
import { useSelector , useDispatch } from 'react-redux';
import {tambah,kurang} from '../redux/action';
import gambar from '../assets/Chibi_Nobu.png';

const Component = () => {
    const data = useSelector(state => state.tinggi )
    const dispatch = useDispatch() 
    return (
    <View style={styles.button}>
            <Button title="ZOOM IN" color='blue' onPress={() => dispatch(tambah())} />
            <Button title="ZOOM OUT" color='red' onPress={() => dispatch(kurang())} />
            <Text>{data}</Text>
        <View style={styles.img}>
            <Image source={gambar} style={{width:100+data, height:100+data}} />
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    button: {
        flexdirection:'row',
        textAlign:'center',
    },
    img: {
        alignItems:'center',
        justifyContent: 'center',
    },
  });
export default Component