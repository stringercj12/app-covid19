import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import {
    Container,
    Header,
    HeaderText,
    HeaderButtons,
    ButtonMenu,
    ButtonAlert,
    HeaderTitle,
    Title,
    SelectCountry,
    HeaderCard,
    HeaderCardTitle,
    HeaderCardDescription,
    HeaderCardButtons,
    HeaderCardButtonCall,
    HeaderCardButtonSMS,
    HeaderCardButtonText,
    CardPrevention,
    CardPreventiontitle,
    CardImage,
    CardIconCircle,
    CardIconText,
    CardBoxImages,
    CardInstructionsArea,
    CardInstructions,
    CardInstructionsImage,
    CardDescription,
    CardTitle,
    CardInfo,
} from './styles';
import { Feather, SimpleLineIcons, Foundation, MaterialCommunityIcons } from '@expo/vector-icons';

import ImageTest from '../../assets/image-test.png';
import ImageDistance from '../../assets/distance.png';
import ImageMao from '../../assets/mao.png';
import ImageMask from '../../assets/mask.png';
import { Picker } from '@react-native-picker/picker';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home: React.FC = () => {
    const [language, setLanguage] = useState<any>();
    const [country, setCountry] = useState<any>([]);

    async function carregarPaises() {
        const { data } = await api.get('countries');

        setCountry(data);
    }

    const storeData = async (value: any) => {
        try {
            await AsyncStorage.setItem('@my_country', value)
            setLanguage(value)
        } catch (e) {
            // saving error
        }
    }

    useEffect(() => {
        carregarPaises();
    }, [])
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

                <HeaderTitle>
                    <Title>Covid-19</Title>
                    <SelectCountry>
                        <Picker
                            mode={'dropdown'}
                            selectedValue={language}
                            itemStyle={{ height: 50, width: 100, backgroundColor: 'transparent' }}
                            onValueChange={(itemValue, itemIndex) => storeData(itemValue)}>
                            {country.map((item: any) => (
                                <Picker.Item key={item.country} label={item.country} value={item.country} />
                            ))}
                        </Picker>
                    </SelectCountry>
                </HeaderTitle>

                <HeaderCard>
                    <HeaderCardTitle>
                        Are you feeling sick?
                    </HeaderCardTitle>
                    <HeaderCardDescription>
                        If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.
                    </HeaderCardDescription>
                    <HeaderCardButtons>
                        <HeaderCardButtonCall>
                            <Foundation name="telephone" size={24} color="#fff" />
                            <HeaderCardButtonText>
                                Call Now
                                </HeaderCardButtonText>
                        </HeaderCardButtonCall>
                        <HeaderCardButtonSMS>
                            <MaterialCommunityIcons name="chat" size={24} color="#fff" />
                            <HeaderCardButtonText>
                                Send SMS
                                </HeaderCardButtonText>
                        </HeaderCardButtonSMS>
                    </HeaderCardButtons>
                </HeaderCard>
            </Header>

            <CardPrevention>
                <CardPreventiontitle>Prevention</CardPreventiontitle>

                <CardBoxImages>
                    <CardImage>
                        <CardIconCircle source={ImageDistance} />
                        <CardIconText>Avoid close contact</CardIconText>
                    </CardImage>

                    <CardImage>
                        <CardIconCircle source={ImageMao} />
                        <CardIconText>Clear your hands often</CardIconText>
                    </CardImage>

                    <CardImage>
                        <CardIconCircle source={ImageMask} />
                        <CardIconText>Awear a facemask</CardIconText>
                    </CardImage>
                </CardBoxImages>
            </CardPrevention>


            <CardInstructionsArea>
                <CardInstructions>
                    <CardInstructionsImage source={ImageTest} />
                    <CardDescription>
                        <CardTitle>
                            Do your own test!
                        </CardTitle>
                        <CardInfo>
                            Follow the instructions to do your own test.
                        </CardInfo>
                    </CardDescription>
                </CardInstructions>
            </CardInstructionsArea>
        </Container >
    );
}

export default Home;