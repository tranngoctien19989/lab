
import React,{Component, useState} from 'react';
import { StyleSheet, Text, View,style, Button, TextInput } from 'react-native';
import ProductText, { ProductImage, ProductImage2 } from './src/screens/ProductText';
export default function App() {
  const [showStatus, setShowStatus] = useState(true);
  const [name,setname] = useState('');
  const [mota,setmota] = useState('');
  return (
    <View style={styles.container}>
      <View  style={styles.top}>
      <Text>Họ và tên : Trần Ngọc Tiến </Text>
      <Text>MSV : PH19989</Text>
      </View>
      <View style={styles.button}>
        <Button 
        title='Thêm mới'
        onPress={() => setShowStatus(!showStatus)}
        />
        {
        showStatus
        ?
        <>
        <TextInput
        onChangeText={(txt) => setname(txt)}
        value = {name}
        placeholder = 'Nhập họ tên'
        />
        <TextInput
        onChangeText={(txt) => setmota(txt)}
        value = {mota}
        placeholder = 'Nhập mô tả'
        />
        <TextInput
        onChangeText={(txt) => setmota(txt)}
        value = {mota}
        placeholder = 'Link'
        />
       
        <Button
        title='Lưu'>onPress={() => setShowStatus(false)}</Button>
      
        <Button  style={styles.button1}
        title='Hủy'
        onPress={() => setShowStatus(false)}
        />
        </>
        : null
        }

      </View>
       
      <View>
        <View style = {styles.textbottom}>
        <ProductImage/>
          <View style = {styles.textbottommota}>
          <Text>Họ và Tên : TNT</Text>
          <Text>Mô tả : 2003</Text>
          </View>
      
        </View>
        <View style = {styles.textbottom}>
        <ProductImage2/>
          <View style = {styles.textbottommota}>
            <Text>Họ và Tên : TMT</Text>
            <Text>Mô tả : 2003</Text>
          </View>
        
        </View>
      
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top : {
    marginTop : 5
  },
  button: {
    marginTop : 80,
    backgroundColor : '#FFFFFF',
    marginLeft : 100,
    marginRight : 100,
    
  },

  textbutton : {
    fontSize : 50,
    color : 'green'

  },
  textbottom : {
    flexDirection : "row"
    
  },
  textbottommota : {
    flexDirection : 'column',
    paddingTop : 60,
    paddingLeft : 20,
  },


  });
