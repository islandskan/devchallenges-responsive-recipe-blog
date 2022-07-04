/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./build/index.html'],
    theme: {
        extend: {
            colors: {
                primary: '#F2994A',
                secondary: {
                    100: '#4F4F4F',
                    200: '#BDBDBD',
                    300: '#333333',
                    400: '#4F4F4F',
                    500: '#828282',
                },
            },
            gridTemplateColumns: {
                instructions: '1fr auto',
            },
            fontFamily: {
                heading: ['"Playfair Display"'],
                body: ['Montserrat'],
            },
        },
    },
    plugins: [],
};
