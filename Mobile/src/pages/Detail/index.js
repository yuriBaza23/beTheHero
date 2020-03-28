import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, FlatList, Linking, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

import * as MailComposer from 'expo-mail-composer';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  var message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`;

  function navigateBack(){
    navigation.goBack();
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [`${incident.email}`],
      body: message
    })
  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}/>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name='arrow-left' color='#E82041' size={28}/>
        </TouchableOpacity>
      </View>

      <FlatList
        data={[0]}
        style={styles.incidentList}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item)}
        renderItem={() => (
          <>
            <View style={styles.incident}>
              <Text style={styles.incidentProperty}>ONG:</Text>
              <Text style={styles.incidentValue}>{incident.name} - {incident.city}/{incident.uf}</Text>

              <Text style={styles.incidentProperty}>CASO:</Text>
              <Text style={styles.incidentValue}>{incident.title}</Text>

              <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
              <Text style={styles.incidentValue}>{incident.description}</Text>

              <Text style={styles.incidentProperty}>VALOR:</Text>
              <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
            </View>
            
            <View style={styles.incident}>
              <Text style={styles.contactTitle}>Salve o dia!</Text>
              <Text style={styles.contactTitle}>Seja o herói desse caso.</Text>
              <Text style={styles.contactDescription}>Entre em contato</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={sendWhatsapp}>
                  <Text style={styles.textButton}>WhatsApp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={sendMail}>
                  <Text style={styles.textButton}>E-mail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      />

    </View>
  );
}
