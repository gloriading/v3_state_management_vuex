import Counter from '../components/Counter.vue';

export default {
  title: 'Example/Counter',
  component: Counter,
  argTypes: {
    fontColor: {
      control: 'color',
    },
  },
};
interface Props {
  fontSize: number;
  fontColor: string;
  count: number;
}
const Template = (args: Props) => ({
  components: { Counter },
  setup() {
    return { args };
  },
  template: '<Counter v-bind="args" />'
});

export const defaultCounter = Template.bind({});
defaultCounter.args = {
  fontColor: 'blue',
  fontSize: '30',
  count: 0,
};

