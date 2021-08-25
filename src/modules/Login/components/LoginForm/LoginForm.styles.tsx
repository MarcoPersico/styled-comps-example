import styled from 'styled-components';
import {
  borderRadius,
  boxShadow,
  spacing,
  spacingV,
  title,
} from '../../../../assets/common.styles';

const FormWrapper = styled.div`
  ${boxShadow}
  ${borderRadius('medium')}
  ${spacing('medium')}
  width: 350px;
  height: 500px;
  background: ${(props) => props.theme.palette.background.main};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  ${spacingV('medium')}
`;

const Button = styled.button`
  background: ${(props) => props.theme.palette.main.regular};
  color: ${(props) => props.theme.palette.main.contrast};
  font-weight: 200;
  transition: all 200ms;

  &:hover {
    font-weight: 200;
    filter: brightness(1.25);
    color: ${(props) => props.theme.palette.main.contrast};
  }
`;

const Title = styled.h1`
  ${title}
`;

export const LoginFormStyles = {
  FormWrapper,
  Form,
  Title,
  Button,
};

export default null;
