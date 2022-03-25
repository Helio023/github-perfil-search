import './style.scss';

type Props = {
  text: string;
  click?: (e: React.MouseEvent<HTMLButtonElement>) => void 
};
const AppButton = ({ text, click}: Props) => {
  return <button type='button' className='btn' onClick={click}>{text}</button>;
};

export default AppButton;
