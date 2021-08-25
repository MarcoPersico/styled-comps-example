import styled from 'styled-components';
import { flexCenter, fullScreen } from '../../../assets/common.styles';

const Wrapper = styled.div`
  ${flexCenter}
  ${fullScreen}
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.palette.main.regular},
    ${(props) => props.theme.palette.main.light}
  );
`;

export const LoginWrapperStyles = {
  Wrapper,
};

export default null;
