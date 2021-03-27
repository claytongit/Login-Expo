import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { LinearGradient  } from 'expo-linear-gradient';
import axios from 'axios';

import Router from '../../../Router';

export default function Login() {

  const [ usuario, setUsuario ] = useState('');
  const [ senha, setSenha ]     = useState('');
  const [ data, setData ]       = useState([]);
  const [ auth, setAuth ]       = useState(false);

  function handleLogin() {

    var valid = -1;

    if(usuario == '' && senha == ''){

      alert('Preencha todos os campos');

    }else{

      for (let i = 0; i < data.length; i++) {

        if( (usuario == data[i].name) && (senha == data[i].pass) ){
  
          valid = i;
  
          break;
    
        }
  
      }
  
      if(valid != -1){
  
        alert('Seja bem vindo!');

        setAuth(true);

      }else{
  
        alert('Usuario ou senha inválida!');
  
      } 

    }  

  }  

  useEffect(() => {

    ( async () => {

      const res = await axios.get('https://moto-v1-api.herokuapp.com/users');

      setData(res.data);

    } )();

  }, []);


  return (
    <>
      { 

      auth ? 

        <Router />

      :  

        <LinearGradient style={styles.container} colors={ [ 'rgba(62,62,62,1)', 'rgba(55,59,66,1)', 'rgba(93,88,101,1)' ] } >

          <Text style={ styles.title }>Login</Text>

          <View style={ styles.form }>

            <TextInput 
              type="text"  
              placeholder="Informe seu usuario" 
              placeholderTextColor="rgba(255,255,255,.4)"
              style={ styles.input }
              value={ usuario }
              onChangeText={ text => setUsuario(text) }
            />

            <TextInput 
              type="text"  
              placeholder="Informe sua senha" 
              placeholderTextColor="rgba(255,255,255,.4)"
              style={ styles.input }
              value={ senha }
              onChangeText={ text => setSenha(text) }
            />

            <TouchableOpacity style={ styles.button } onPress={ handleLogin } >
              <Text style={ styles.textButton } >Login</Text>
            </TouchableOpacity>

          </View>

        </LinearGradient>

      }

    </>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    marginBottom: 60,
    fontSize: 40,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#fff'
  },

  form: {
    width: '70%',
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,.7)',
    paddingHorizontal: 5,
    paddingVertical: 10,
    color: '#FFF',
    fontSize: 14,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#5c0ed1',
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 5,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textButton: {
    color: '#fff'
  }

});
