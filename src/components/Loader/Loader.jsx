import { MutatingDots } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loadmoWrap}>
      <MutatingDots
        visible={true}
        height={100} // Значение передается как число
        width={100}  // Значение передается как число
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius={12.5} // Значение передается как число
        ariaLabel="mutating-dots-loading"
      />
    </div>
  );
};

export default Loader;