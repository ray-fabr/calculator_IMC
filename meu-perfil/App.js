import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput,TouchableOpacity, StyleSheet, Image } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(0);
  const [status, setStatus] = useState('');

  const imc = () => {
    const p = parseFloat(peso.replace(',', '.'));
    const a = parseFloat(altura.replace(',', '.'));

    if (p > 0 && a > 0) {
      const aoQuadrado = a * a;
      const calculo = p / aoQuadrado;
      
      setResultado(calculo.toFixed(2));

      // As verificações devem estar DENTRO do if principal
      if (calculo < 18.5) {
        setStatus('Abaixo do peso');
      } else if (calculo >= 18.5 && calculo < 24.9) {
        setStatus('Normal');
      } else if (calculo >= 25.0 && calculo <= 29.9) { // Use ponto e repita 'calculo'
        setStatus('Sobrepeso');
      } else if (calculo >= 30.0 && calculo <= 39.9) {
        setStatus('Obesidade');
      } else {
        setStatus('Obesidade grave');
      } 
    } else {
      alert("Por favor, preencha os campos corretamente.");
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.fundo}>
        <Text style={styles.title}>Calculadora de IMC</Text>

          <View>
            <TextInput style={styles.input}
              placeholder="Peso"
              keyboardType="numeric"
              onChangeText={(peso) => setPeso(peso)}
              value={peso}
            />
            <TextInput style={styles.input}
              placeholder = "Altura"
              keyboardType = "numeric"
              onChangeText={(altura) => setAltura(altura)}
              value={altura}
            />
          </View>

          <TouchableOpacity style={styles.botao} onPress={imc}>
            <Text style={styles.textoBotao}>Calcular</Text>
          </TouchableOpacity>

          <View style={styles.resultado}>
            <Text style={styles.total}>Total: {resultado}</Text>
            <Text style={styles.total}>Status: {status}</Text>
          </View>
          

          <View style={styles.imgs}>
            <Image
              source={require('./assets/moço.png')}
              style={{ width: 100, height: 150 }}
            />
            <Image
              source={require('./assets/calculadoraa.png')}
              style={styles.calculadora}
            />
          </View>
          
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#173454',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    backgroundColor:'#FFC059',
    width:200,
    padding: 10,
    fontSize: 20,
    borderRadius:10,
  },
  fundo:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#D6EEFA',
    width:350,
    padding: 90,
    marginTop: 10,
    borderRadius:10,
  },
  input:{
    marginTop:20,
    marginBlock:20,
    width:200,
    backgroundColor:'#A9CBE4',
    borderRadius:10,
    textAlign:'center',
  },
  imgs:{
    flexDirection: 'row', // Alinha os itens na horizontal
    justifyContent: 'space-between', // Dá espaço entre as imagens
    width: '100%',
    gap:4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  calculadora:{
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  botao: {
    backgroundColor: '#FFC059',
    padding: 15,
    borderRadius: 10,
    width: 150,
    alignItems: 'center', // Centraliza o texto
    marginTop: 15,
  },
  textoBotao: {
    color: '#000',
    fontSize: 16,
  },
  resultado:{
    gap:9,
    margin: 10,
    backgroundColor: '#A9CBE4',
    width: 100,
    height:90,
    marginTop:10,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    borderRadius: 20,
  },
  total:{
    textAlign:'center',
  },

});