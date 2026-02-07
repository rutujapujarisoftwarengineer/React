import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Details from "./Details";
import UserList from "./UserList";
import UserDetail from "./UserDetails";

function App() {
  return (
    <>
      <Routes>
        {/* Layout Route */}
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<UserList />} />
          <Route path="users/:id" element={<UserDetail />} />

          <Route path="in/user">
            <Route path="login" element={<Login />} />
            <Route path="about" element={<About />} />
          </Route>
        </Route>

        {/* College Nested Routes */}
        <Route path="college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="detail" element={<Details />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
