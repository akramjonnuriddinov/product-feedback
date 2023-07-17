export const content = ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
export const theme = {
  extend: {
    backgroundImage: {
      'board-bg':
        'radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)',
    },
    backgroundColor: {
      primary: '#AD1FEA',
      'light-blue': '#F2F4FF',
      'dark-blue': '#4661E6',
    },
    colors: {
      'dark-sky': '#4661E6',
    },
    maxWidth: {
      255: '255px',
      825: '825px',
      410: '410px',
      540: '540px',
      600: '600px',
    },
    minHeight: {
      96: '96px',
    },
    padding: {
      15: '60px',
    },
    margin: {
      15: '60px',
    },
    borderRadius: {
      10: '10px',
    },
  },
}
export const plugins = []
