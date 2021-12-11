import { createGlobalStyle } from 'styled-components';
import { variables } from './variables';

export const BasicStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,500;1,400;1,500&display=swap');

    body{
        background-color: ${variables.colorBackground};
        color: ${variables.colorFont};
        font-family: 'Lato', sans-serif;
    }
`;
