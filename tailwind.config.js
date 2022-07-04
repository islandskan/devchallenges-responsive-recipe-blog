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
                instructions: '2.25rem auto',
                checkboxes: '21px auto',
                desktopLayout: 'auto 15% 216px',
            },
            fontFamily: {
                heading: ['"Playfair Display"'],
                body: ['Montserrat'],
            },
            boxShadow: {
                card: '0px 0px 20px rgba(0, 0, 0, 0.1);',
            },
        },
    },
    plugins: [],
};
