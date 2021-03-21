import "./styles.css";

interface MiddleProps {
  title: string;
  children: any;
}

const Middle: React.FC<MiddleProps> = ({ 
  title, children 
}) => {
  return (
    <section id="middle">
      <div className="content-middle">
      <div className="header-middle">
        <h2 className="title-middle">
          {title}
        </h2>
      </div>
        {children}
      </div>
    </section>
  );
};

export default Middle;
