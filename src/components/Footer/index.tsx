import {AiOutlineCopyright} from "react-icons/ai";
import "./styles.css";

const Footer = () => {
  return(
    <footer>
      <div className="content-footer">
        <AiOutlineCopyright />
        <h1>
          <span>- 2021 -</span> Felipe 
          <strong>Antoniati</strong>
        </h1>
      </div>
    </footer>
  );
}

export default Footer;