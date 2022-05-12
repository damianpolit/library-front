import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from './LoginPage';

Enzyme.configure({adapter: new Adapter()});

it('renders', () => {
  shallow(<LoginPage />)
})