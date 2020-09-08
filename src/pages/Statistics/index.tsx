import React from 'react';
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

const Statistics: React.FC = () => {
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
          <HeaderSegmentButton style={{ backgroundColor: '#fff' }}>
            <HeaderSegmentButtonText>
              My Country
            </HeaderSegmentButtonText>
          </HeaderSegmentButton>


          <HeaderSegmentButton>
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
          <CardValue>336,851</CardValue>
        </CardItemAffected>

        <CardItemDeath>
          <CardTitle>Death</CardTitle>
          <CardValue>9,620</CardValue>
        </CardItemDeath>


      </CardStatus>

      <CardStatus>

        <CardItemRecovered>
          <CardTitle>Recovered</CardTitle>
          <CardValue>17,977</CardValue>
        </CardItemRecovered>

        <CardItemActive>
          <CardTitle>Active</CardTitle>
          <CardValue>301,251</CardValue>
        </CardItemActive>

        <CardItemSerious>
          <CardTitle>Serious</CardTitle>
          <CardValue>8,702</CardValue>
        </CardItemSerious>

      </CardStatus>


      <CardGrafic>
        <CardGraficTitle>Daily New Cases</CardGraficTitle>

      </CardGrafic>

    </Container>
  );
}

export default Statistics;