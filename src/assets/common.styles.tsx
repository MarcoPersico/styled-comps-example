import { css } from 'styled-components';

const meassures = (type: 'medium' | 'small' | 'big') => (type === 'medium' && '1rem')
|| (type === 'small' && '.5rem')
|| (type === 'big' && '2rem');

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const fullScreen = css`
  width: 100%;
  height: 100vh;
`;

export const borderRadius = (type: 'medium' | 'small' | 'big') => css`
  border-radius: ${meassures(type)};
`;

export const spacing = (type: 'medium' | 'small' | 'big') => css`
  padding: ${meassures(type)};
`;

export const spacingV = (type: 'medium' | 'small' | 'big') => css`
  padding-top: ${meassures(type)};
  padding-bottom: ${meassures(type)};
`;

export const boxShadow = css`
  box-shadow: 0px 0px 10px 4px #00000040;
`;

const titleDecoration = css`
  ${borderRadius('medium')}
  content: '';
  position: absolute;
  width: 15%;
  height: 12px;
  left: 0;
  bottom: -10px;
  background: ${(props) => props.theme.palette.main.dark};
`;

export const title = css`
  font-weight: bold;
  font-size: 1.75rem;
  position: relative;

  &::after {
    ${titleDecoration}
  }
`;
