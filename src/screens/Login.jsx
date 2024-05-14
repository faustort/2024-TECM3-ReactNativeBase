import { Button, Surface, TextInput } from "react-native-paper";
import styles from "../styles/DashboardStyle";
import { View } from "react-native";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    try {
      const user = await signInWithEmailAndPassword(auth, email, senha);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Surface style={styles.container}>
      <View>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu e-mail"
        />
        <TextInput
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite sua senha"
        />
        <Button onPress={handleLogin}>Login</Button>
      </View>
    </Surface>
  );
};
