import Routes from './pages/Routes';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './hooks/reduxHooks';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const theme = useAppSelector((state) => state.theme);

  return (
    <div className="App">
      <ThemeProvider theme={ theme }>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
