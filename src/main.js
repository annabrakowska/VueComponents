import components from './components';
import './styles/main.scss';

export default {
  install(Vue) {
    Vue.mixin({ components });
  }
};
