import renderer from 'react-test-renderer';
import App from './App';

test('App snapshot test', () => {
  const components = renderer.create(<App />);

  const tree = components.toJSON();

  expect(tree).toMatchSnapshot();
});
