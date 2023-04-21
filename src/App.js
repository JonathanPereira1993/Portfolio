import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ContextProvider from "./Context/ContextProvider";
import AboutTwo from "./Pages/About/AboutTwo";
import ContactTwo from "./Pages/Contact/ContactTwo";
import Home from "./Pages/Home/HomeTwo";
import PortfiloTwo from "./Pages/Portfilo/Portfilo";
import ResumeTwo from "./Pages/Resume/ResumeTwo";
import NotFound from "./Share/NotFound";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<AboutTwo />} />
              <Route path="home/about" element={<AboutTwo />} />
              <Route path="home/resume" element={<ResumeTwo />} />
              <Route path="home/contact" element={<ContactTwo />} />
              <Route path="home/works" element={<PortfiloTwo />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
