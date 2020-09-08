import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f3f3f3;
  /* position: relative; */
`;

export const Header = styled.View`
  padding-top: 35px;
  /* position: absolute; */
  /* width: 375px; */
  height: 290px;
  margin-top: -${Constants.statusBarHeight}px;
  /* flex: 1; */
  background-color: #473F97;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const HeaderText = styled.Text`
  color: #fff;
`;

export const HeaderButtons = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  /* height: 20px; */
  padding: 0px 20px;
`;

export const ButtonMenu = styled.TouchableOpacity`

`;

export const ButtonAlert = styled.TouchableOpacity`

`;


export const HeaderTitle = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0px 20px;
  height: 45px;
  margin-top: 30px;
`;

export const Title = styled.Text`
  width: 103px;
  height: 26px;
  /* font-family: Graphik; */
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 26px;
  color: #FFFFFF;
`;

export const SelectCountry = styled.View`
  width: 116px;
  height: 40px;
  background-color: #fff;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const HeaderCard = styled.View`
  padding: 20px;
`;

export const HeaderCardTitle = styled.Text`
  /* font-family: Graphik; */
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  color: #FFFFFF;
`;

export const HeaderCardDescription = styled.Text`
  /* font-family: Graphik; */
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  opacity: 0.8;
`;

export const HeaderCardButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const HeaderCardButtonCall = styled.TouchableOpacity`
  width: 155px;
  height: 48px;
  background: #FF4D58;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const HeaderCardButtonSMS = styled.TouchableOpacity`
  width: 155px;
  height: 48px;
  background: #4D79FF;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const HeaderCardButtonText = styled.Text`
  /* font-family: Graphik; */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #FFFFFF;
  margin-left: 10px;
`;


export const CardPrevention = styled.View`
  padding: 20px;
  /* margin-top: 10px; */
  margin-bottom:10px;
`;

export const CardPreventiontitle = styled.Text`
  /* font-family: Graphik; */
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  color: #0D1333;
  margin-bottom:10px;
`;

export const CardBoxImages = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const CardImage = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardIconCircle = styled.Image`
  /* width: 90px;
  height: 90px;
  border-radius: 50px;
  background-color: #FFE6EE; */
`;

export const CardIconText = styled.Text`
  /* font-family: Graphik; */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #0D1333;
  margin-top: 10px;
  width: 100px;
`;

export const CardInstructionsArea = styled.View`
  padding: 20px;
  margin-top: -30px;
`;

export const CardInstructions = styled.View`
  /* width: 330px; */
  height: 105px;
  padding: 10px;
  background-color: #56549E;
  /* background: linear-gradient(269.6deg, #56549E 0.35%, #AEA1E6 101.48%); */
  border-radius: 16px;
  flex-direction: row;
  /* position: relative; */
`;

export const CardInstructionsImage = styled.Image`
  bottom: 22px;
  left: 3px;
`;

export const CardDescription = styled.View`
  padding: 10px 15px;
  flex: 1;
`;

export const CardTitle = styled.Text`
  /* font-family: Graphik; */
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #FFFFFF;
`;

export const CardInfo = styled.Text`
  /* font-family: Graphik; */
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  opacity: 0.8;
`;
