import Loader from "react-loader-spinner";

const loader = ({ width, height }) => {
  return <Loader type="Bars" color="#00BFFF" height={height} width={width} />;
};

export default loader;
