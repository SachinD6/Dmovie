import Navbar from "../../components/GlobalComponents/Navbar/navbar";
import Footer from "../../components/GlobalComponents/Footer/footer";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {/* <navbar>Test navbar</navbar> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
