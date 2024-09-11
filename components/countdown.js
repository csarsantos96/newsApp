import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

const daySince = (startDate) => {
  const start = moment(startDate, 'YYYY-MM-DD');
  if (!start.isValid()) {
    console.error('Data inválida:', startDate);
    return 0;
  }
  return moment().diff(start, 'days');
};

const Countdown = () => {
  const [days, setDays] = useState(daySince('2023-10-07'));

  useEffect(() => {
    const interval = setInterval(() => {
      setDays(daySince('2023-10-07'));
    }, 86400000); // Atualiza uma vez por dia

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {/* Contador de dias */}
      <Text style={styles.text}>
        {days} <Text style={styles.highlight}>days left until October 7th, 2023</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Mantém o texto centralizado verticalmente
    alignItems: 'center',      // Centraliza horizontalmente
    marginTop: 100,            // Mais espaçamento do topo da tela
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center', // Garante que o texto fique centralizado
  },
  highlight: {
    color: '#FF6347', // Cor destacada
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default Countdown;
