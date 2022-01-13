import * as BaseBulk from 'src/components/templates/layout_parts/bases/index';
import styles from './Base.module.scss';

const Base = (): JSX.Element => {
  let count = 1;
  for (let key in BaseBulk) {
    if (BaseBulk.hasOwnProperty(key)) {
      if (count == 1) {
        const Base = BaseBulk[key];
        return <Base />;
      }
      count++;
    }
  }
};

export default Base;
