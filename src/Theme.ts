import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({
    config,
    styles: {
        global: (props: { colorMode: string; }) => ({
            body: {
                bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
                color: props.colorMode === 'dark' ? 'gray.50' : 'gray.900',
            },
        }),
    },
    colors: {
        gray: {
            50: '#f0f0f0',
            100: '#e0e0e0',
            200: '#c0c0c0',
            300: '#a0a0a0',
            400: '#808080',
            500: '#606060',
            600: '#404040',
            700: '#303030',
            800: '#202020',
            900: '#101010',
        },
        accent: {
            50: '#e6f7ff',
            100: '#bae7ff',
            200: '#91d5ff',
            300: '#69c0ff',
            400: '#40a9ff',
            500: '#1890ff',
            600: '#096dd9',
            700: '#0050b3',
            800: '#003a8c',
            900: '#002766',
        }
    },
})

export default theme;