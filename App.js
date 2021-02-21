import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import{FontAwesome5,FontAwesome} from '@expo/vector-icons';

function inicioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{width: "100%", flex:1, alignItems: "center", paddingTop: 100, paddingBottom:30}}>
        <Image source={require("./assets/imagenes/animalespeligro.jpg")} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.titulo}>
          Animales en peligro de extincion
        </Text>
        <TouchableOpacity style={styles.boton1} onPress={() => {
          navigation.navigate("koala")
        }}>
          <Text style={{color:"#FFF"}}>
            Siguiente
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("indice")
        }}>
          <Text style={{color:"#0111A3"}}>
            Indice
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function indiceScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{width: "100%", flex:1, alignItems: "center", paddingTop: 100, paddingBottom:30}}>
        <Image source={require("./assets/imagenes/logo_small.png")} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.titulo}>
           BIENVENIDOS
        </Text>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("koala")
        }}>
          <Text style={{color:"#FFF"}}>
            "Koala"
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("panda")
        }}>
          <Text style={{color:"#0111A3"}}>
            "Panda"
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("polar")
        }}>
          <Text style={{color:"#0111A3"}}>
            "Polar"
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("tigreblanco")
        }}>
           <Text style={{color:"#0111A3"}}>
            "Tigre Blanco"
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("guacamayo")
        }}>
           <Text style={{color:"#0111A3"}}>
            "Guacamayos"
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("inicio")
        }}>

          <Text style={{color:"#FFF"}}>
            "inicio"
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function koalaScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width: "100%", flex:1, alignItems: "center", paddingTop: 100, paddingBottom:30}}>
        <Image source={require("./assets/imagenes/koala.jpg")} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.subtitulo}>
        El koala es una especie de marsupial diprotodonto de la familia Phascolarctidae, endémico de Australia.
        </Text>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("panda")
        }}>
          <Text style={{color:"#0111A3"}}>
            Siguiente
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("inicio")
        }}>
          <Text style={{color:"#FFF"}}>
            Inicio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("indice")
        }}>
          <Text style={{color:"#0111A3"}}>
            Indice
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function pandaScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width: "100%", flex:1, alignItems: "center", paddingTop: 100, paddingBottom:30}}>
        <Image source={require("./assets/imagenes/panda.jpg")} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.subtitulo}>
        El panda, oso panda o panda gigante es una especie de mamífero del orden de los carnívoros.
        </Text>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("polar")
        }}>
          <Text style={{color:"#0111A3"}}>
            Siguiente
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("inicio")
        }}>
          <Text style={{color:"#FFF"}}>
            Inicio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("indice")
        }}>
          <Text style={{color:"#0111A3"}}>
            Indice
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function polarScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width: "100%", flex:1, alignItems: "center", paddingTop: 100, paddingBottom:30}}>
        <Image source={require("./assets/imagenes/polar.jpg")} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.subtitulo}>
        El oso polar u oso blanco es una especie de mamífero carnívoro de la familia de los osos.
       
        </Text>

        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("tigreblanco")
        }}>
          <Text style={{color:"#FFF"}}>
          Siguiente
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("inicio")
        }}>
          <Text style={{color:"#0111A3"}}>
            Anterior
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("indice")
        }}>
          <Text style={{color:"#FFF"}}>
          Indice
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function tigreblancoScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width: "100%", flex:1, alignItems: "center", paddingTop: 100, paddingBottom:30}}>
        <Image source={require("./assets/imagenes/tigreblanco.png")} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.subtitulo}>
        El tigre blanco, también conocido como tigre albino, es un ejemplar de tigre con una condición genética que casi elimina el pigmento de su coloración, normalmente anaranjada, aunque las rayas negras no se ven afectadas.
        </Text>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("inicio")
          
        }}>
          <Text style={{color:"#0111A3"}}>
            Inicio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("indice")
        }}>
          <Text style={{color:"#FFF"}}>
          Indice
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function guacamayoScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width: "100%", flex:1, alignItems: "center", paddingTop: 100, paddingBottom:30}}>
        <Image source={require("./assets/imagenes/guacamayo.jpg")} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.subtitulo}>
        Los guacamayos son aves del orden Psittaciformes y de la familia Psittacidae, muy llamativas por el colorido de su plumaje.
        </Text>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("inicio")
        }}>
          <Text style={{color:"#0111A3"}}>
            Inicio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("indice")
        }}>
          <Text style={{color:"#FFF"}}>
          Indice
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const Main = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Main.Navigator>
      <Main.Screen name="inicio" component={inicioScreen}></Main.Screen>
      <Main.Screen name="indice" component={indiceScreen}></Main.Screen>
        <Main.Screen name="koala" component={koalaScreen}></Main.Screen>
        <Main.Screen name="panda" component={pandaScreen}></Main.Screen>
        <Main.Screen name="polar" component={polarScreen}></Main.Screen>
        <Main.Screen name="tigreblanco" component={tigreblancoScreen}></Main.Screen>
        <Main.Screen name="guacamayo" component={guacamayoScreen}></Main.Screen>
      </Main.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7116CB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: "60%",
    height: undefined,
    flex: 1
  },
  titulo:{
    fontSize: 40,
    color: "#16B8CB",
    fontWeight: "bold",
    marginBottom:20
  },
  boton1:{
    backgroundColor: "#3416CB",
    paddingTop: 10,
    paddingBottom: 10,
    width: 200,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 10
  },
  boton2:{
    backgroundColor: "#FFCC00",
    paddingTop: 10,
    paddingBottom: 10,
    width: 200,
    borderRadius: 15,
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 10
  },
  boton3:{
    backgroundColor: "#CB2116",
    paddingTop: 10,
    paddingBottom: 10,
    width: 200,
    borderRadius: 15,
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 10
  }
});
