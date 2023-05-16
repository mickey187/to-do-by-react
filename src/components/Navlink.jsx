/* eslint-disable react/prop-types */
const Navlink = (props) => {
  return (
    <a className="nav-link" aria-current="page" href="#">
      {props.navLinkName}
    </a>
  );
};

export default Navlink;
