import LogoReact from '../logo.svg';

export const ReactLogo = () => {
  return (
    <img
      src={LogoReact}
      alt='React Logo'
      style={{ position: 'fixed', bottom: 20, right: 20, width: 130 }}
    />
  );
};
