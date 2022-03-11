import Home from "./pages/Home/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BlogsHeader from "./pages/Blogs/BlogsHeader/BlogsHeader";
import ProjectsHeader from "./pages/Projects/ProjectsHeader/ProjectsHeader";
import SkillHeader from "./pages/Skills/SkillsHeader/SkillHeader";
import AboutHeader from "./pages/About/AboutHeader/AboutHeader";
import ServicesHeader from "./pages/Services/ServicesHeader/ServicesHeader";
import ContactsHeader from "./pages/Contacts/ContactsHeader/ContactsHeader";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="/projects" element={<ProjectsHeader />}></Route>
          <Route path="/blogs" element={<BlogsHeader />}></Route>
          <Route path="/about" element={<AboutHeader />}></Route>
          <Route path="/skills" element={<SkillHeader />}></Route>
          <Route path="/services" element={<ServicesHeader />}></Route>
          <Route path="/contacts" element={<ContactsHeader />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
