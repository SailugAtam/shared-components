import AppContext from 'utils/storybook.util';
import Spinner from 'components/shared/Spinner';

// Component Title
export default {
  title: 'App Component/Spinner',
  component: Spinner,
  decorators: [AppContext],
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  contained: false,
  small: false,
  asIcon: false,
  inverted: false,
};
