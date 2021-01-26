import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';

import {
  Container,
  Header,
  HeaderButtons,
  ButtonMenu,
  ButtonAlert,
  HeaderSegment,
  HeaderSegmentButton,
  HeaderSegmentButtonText,
  HeaderBadge,
  HeaderBadgeItem,
  HeaderBadgeText,
  CardStatus,
  CardItemAffected,
  CardItemDeath,
  CardItemRecovered,
  CardItemActive,
  CardItemSerious,
  CardTitle,
  CardValue,
  CardGrafic,
  CardGraficTitle,
} from './styles';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Statistics: React.FC = () => {
  const [global, setGlobal] = useState<any>();
  const [country, setCountry] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const [selectedCountry, setSelectedCountry] = useState<any>();
  const [filtro, setFiltro] = useState('country');

  async function carregarGlobal() {
    const { data } = await api.get('all');

    await setData(data);
    await setFiltro('global');
  }
  async function carregarMyCountry() {
    const { data } = await api.get(`countries/${selectedCountry}`);

    await setData(data);
    await setFiltro('country');
  }


  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@my_country')
      if (value !== null) {
        // value previously stored
        await setSelectedCountry(value)
        console.log(value)
        await carregarMyCountry()
      }
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    async function init() {
      await getData();
    }

    init();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderButtons>
          <ButtonMenu onPress={() => { }}>
            <SimpleLineIcons name="menu" size={24} color="#fff" />
          </ButtonMenu>
          <ButtonAlert onPress={() => { }}>
            <Feather name="bell" size={24} color="#fff" />
          </ButtonAlert>
        </HeaderButtons>

        <HeaderSegment>
          <HeaderSegmentButton
            style={filtro === 'country' ? { backgroundColor: '#fff' } : {}}
            onPress={() => {
              carregarMyCountry();
            }}
          >
            <HeaderSegmentButtonText>
              My Country {selectedCountry}
            </HeaderSegmentButtonText>
          </HeaderSegmentButton>


          <HeaderSegmentButton
            style={filtro === 'global' ? { backgroundColor: '#fff' } : {}}
            onPress={() => {
              carregarGlobal();
            }}
          >
            <HeaderSegmentButtonText>
              Global
            </HeaderSegmentButtonText>
          </HeaderSegmentButton>

        </HeaderSegment>

        <HeaderBadge>
          <HeaderBadgeItem>
            <HeaderBadgeText>
              Total
            </HeaderBadgeText>
          </HeaderBadgeItem>


          <HeaderBadgeItem>
            <HeaderBadgeText style={{ opacity: 0.6 }}>
              Today
            </HeaderBadgeText>
          </HeaderBadgeItem>


          <HeaderBadgeItem>
            <HeaderBadgeText style={{ opacity: 0.6 }}>
              Yesterday
            </HeaderBadgeText>
          </HeaderBadgeItem>
        </HeaderBadge>
      </Header>

      <CardStatus>

        <CardItemAffected>
          <CardTitle>Affected</CardTitle>
          <CardValue>{data?.cases}</CardValue>
        </CardItemAffected>

        <CardItemDeath>
          <CardTitle>Death</CardTitle>
          <CardValue>{data?.deaths}</CardValue>
        </CardItemDeath>


      </CardStatus>

      <CardStatus>

        <CardItemRecovered style={filtro === 'global' ? { width: '50%' } : {}}>
          <CardTitle>Recovered</CardTitle>
          <CardValue>{data?.recovered}</CardValue>
        </CardItemRecovered>

        {filtro != 'global' && (
          <>
            <CardItemActive>
              <CardTitle>Active</CardTitle>
              <CardValue>{data?.active}</CardValue>
            </CardItemActive>

            <CardItemSerious>
              <CardTitle>Serious</CardTitle>
              <CardValue>{data?.critical}</CardValue>
            </CardItemSerious>
          </>
        )}
      </CardStatus>


      <CardGrafic>
        <CardGraficTitle>Daily New Cases</CardGraficTitle>

      </CardGrafic>

    </Container>
  );
}

export default Statistics;