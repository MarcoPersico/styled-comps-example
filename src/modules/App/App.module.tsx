import '@fontsource/quicksand';
import 'bulma/css/bulma.css';
import GlobalStyle from '../../assets/global.styles';
import RouterOutlet from '../Router/RouterOutlet.app';
import { lightTheme } from '../../assets/themes.styles';

const App = () => (
  <>
    <GlobalStyle primaryColor={lightTheme.palette.main.regular} />
    <RouterOutlet />
  </>
);

export default App;
