import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #473F97;
`;

export const Header = styled.View`
    padding: 30px 20px 0px 20px;
`;

export const HeaderButtons = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 25px;
`;

export const ButtonMenu = styled.TouchableOpacity`

`;

export const ButtonAlert = styled.TouchableOpacity`

`;

export const HeaderSegment = styled.View`
    background-color: #6C65AC;
    /* opacity: 0.2; */
    border-radius: 50px;
    padding: 8px;
    margin-top: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;    
`;

export const HeaderSegmentButton = styled.TouchableOpacity`
    /* background-color: #fff; */
    height: 40px;
    width: 150px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
`;

export const HeaderSegmentButtonText = styled.Text`
    /* font-family: Graphik; */
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    text-align: center;

    color: #0D1333;

`;

export const HeaderBadge = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 10px 0px;  
`;

export const HeaderBadgeItem = styled.View`

`;

export const HeaderBadgeText = styled.Text`
    /* font-family: Graphik; */
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 15px;

    color: #FFFFFF;
`;


export const CardStatus = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const CardItemAffected = styled.View`
    background-color: #FFB259;
    border-radius: 8px;
    width: 155px;
    height: 100px;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;
`;

export const CardItemDeath = styled.View`
    background-color: #FF5959;
    border-radius: 8px;
    width: 155px;
    height: 100px;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;
`;

export const CardItemRecovered = styled.View`
    background-color: #4CD97B;
    border-radius: 8px;
    width: 98px;
    height: 100px;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;
`;

export const CardItemActive = styled.View`
    background-color:  #4DB5FF;
    border-radius: 8px;
    width: 98px;
    height: 100px;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;
`;

export const CardItemSerious = styled.View`
    background-color:#9059FF;
    border-radius: 8px;
    width: 98px;
    height: 100px;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;
`;


export const CardTitle = styled.Text`
    /* font-family: Graphik; */
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;

    color: #FFFFFF;
`;

export const CardValue = styled.Text`
    /* font-family: Graphik; */
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */


    color: #FFFFFF;
`;


export const CardGrafic = styled.View`
    height: 265px;

    background: #FFFFFF;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding: 20px;
`;

export const CardGraficTitle = styled.Text`
    /* font-family: Graphik; */
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    /* identical to box height */


    color: #0D1333;

`;
