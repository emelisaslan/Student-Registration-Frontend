import { css } from "styled-components";

export const setTypography = ({ color, fontSize, fontWeight, lineHeight }) => css`
    color: ${color};
    font-size: ${fontSize};
    font-weight: ${fontWeight === 'medium' ? 500 : fontWeight};
    line-height: ${lineHeight};
`;