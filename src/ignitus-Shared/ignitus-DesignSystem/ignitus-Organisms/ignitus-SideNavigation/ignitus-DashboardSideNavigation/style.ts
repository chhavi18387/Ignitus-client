import styled from '@emotion/styled';
import * as C from '../../../ignitus-Atoms/colors';
import {flexibleColDiv} from '../../../ignitus-Atoms/atoms';
import {MD, Normal} from '../../../ignitus-Atoms/fonts';
import Icon from '../../../ignitus-Assets/ignitus-Icons/icon';

type Props = {
  border: boolean;
  marginTop: boolean;
  marginBottom: boolean;
};

export const SettingsContainer = styled(flexibleColDiv)`
  background: ${C.White};
  border-radius: 16px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  width: 12rem;
`;

export const Layer = styled.div<Props>`
  border-bottom: ${props =>
    props.border ? `1px solid ${C.GreyLight}` : 'null'};
  color: ${C.IgnitusBlue};
  cursor: pointer;
  font-size: ${MD};
  font-weight: ${Normal};
  padding: 1rem;
  margin-top: ${props => (props.marginTop ? '0.5rem' : 'none')};
  margin-bottom: ${props => (props.marginBottom ? '0.5rem' : 'none')};
  display: flex;
  flex-direction: row;
  width: 100%;
  &:hover {
    background-color: ${C.IgnitusBlue};
    color: ${C.White};
    svg {
      fill: ${C.White};
    }
  }
`;

export const SideNavIcon = styled(Icon)`
  height: 1.5rem;
  width: 1.5rem;
  fill: ${C.IgnitusBlue};
`;

export const styledParagraph = styled.p`
  margin: 0;
  margin-left: 0.5rem;
`;
