/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./*.html', './build/index.html'],
    theme: {
        extend: {
            colors: {
                primary: '#F2994A',
            },
            fontFamily: {
                heading: ['"Playfair Display"'],
                body: ['Montserrat'],
            },
        },
    },
    plugins: [],
};
