import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 109px;
  height: 92px;

  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_primary};

  padding: 16px;
  margin-top: 8px;
  
`;
export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(13)}px;
`;