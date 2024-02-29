import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { LoginPage } from "./pages/LoginPage";
import { TasksPage } from "./pages/TasksPage";
import { TaskProvider } from "./context/tasksContext";
import { datosPProvider } from "./context/datosPContext";
import DatosPsPage from "./pages/DatosPsPage";
import DatosPFormPage from "./pages/DatosPFormPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <datosPProvider>
        <BrowserRouter>
          <main className="container content-container mx-auto px-10 md:px-0">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/add-task" element={<TaskFormPage />} />
                <Route path="/tasks/:id" element={<TaskFormPage />} />
                <Route path="/datosPs" element={<DatosPsPage/>}/>
                <Route path="/add-datosP" element={< DatosPFormPage/>}/>
                <Route path="/datosP/:id" element={< DatosPFormPage/>}/>
                <Route path="/profile" element={<ProfilePage/>} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
        </datosPProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
