import React from 'react';
import { Text } from 'react-native';
import {
    Container,
    Header,
    HeaderText,
    HeaderButtons,
    ButtonMenu,
    Buttonalert,
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

const Home: React.FC = () => {
    return (
        <Container>
            <Header>
                <HeaderButtons>
                    <ButtonMenu onPress={() => { }}>
                        <SimpleLineIcons name="menu" size={24} color="#fff" />
                    </ButtonMenu>
                    <Buttonalert onPress={() => { }}>
                        <Feather name="bell" size={24} color="#fff" />
                    </Buttonalert>
                </HeaderButtons>

                <HeaderTitle>
                    <Title>Covid-19</Title>
                    <SelectCountry>
                        <Text>Aqui</Text>
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
        </Container>
    );
}

export default Home;