import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from '.';

Enzyme.configure({adapter: new Adapter()});

it('renders', () => {
  shallow(<LoginPage />)
})