import Header from "../../shared/Header/Header";

const PublicLayout = ({ children }) => {
  return <div>
    <Header />
    {children}
    </div>;
};

export default PublicLayout;