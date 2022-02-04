import AppContext from 'utils/storybook.util';
import MetaAnchor from 'components/shared/MetaAnchor';

// Component Title
export default {
  title: 'Links/Meta Anchor',
  component: MetaAnchor,
  decorators: [
    AppContext,
    (Story) => (
      <div
        style={{ padding: '3em', backgroundColor: '#5d7c96', height: '100vh' }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: { onClick: { action: 'clicked' } },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <MetaAnchor {...args} />;

export const FooterLink = Template.bind({});
FooterLink.args = {
  mediaIcon: true,
  external: false,
  hide: '',
  label: 'Label',
  url: '#',
};
