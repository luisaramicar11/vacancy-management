"use client"
import styled from 'styled-components';
import Header  from "./components/organism/Header/Header"

const PageContainer = styled.div`
    background: ${({ theme }) => theme.colors.bgGradient}; /* Fondo blanco */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.textBlack}; /* Texto negro */
`;

const GradientBackground = styled.div`
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.bgGradient}; /* Gradiente */
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1; /* Coloca el fondo detrás del contenido */
`;

const Page: React.FC = () => {
    return (

            <Header />

    );
};

export default Page;
