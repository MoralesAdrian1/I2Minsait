import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";
//paginas principales
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
//paginas task
import { TaskFormPage } from "./pages/TaskFormPage";
import { TasksPage } from "./pages/TasksPage";
import { TaskProvider } from "./context/tasksContext";
//paginas datos personales
import { DatosPProvider } from "./context/datosPContext";
import { DatosPPage } from "./pages/DatosPPage";
import { DatosPFormPage } from "./pages/DatosPFormPage";

//datos Del perfil
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <DatosPProvider>
        <BrowserRouter>
          <main className="container content-container mx-auto px-10 md:px-0">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                {/* rutas task*/ }
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/add-task" element={<TaskFormPage />} />
                <Route path="/tasks/:id" element={<TaskFormPage />} />
                {/* rutas Datos Personales*/ }
                <Route path="/datosP" element ={<DatosPPage/>}/>
                <Route path="/add-datosP" element ={<DatosPFormPage/>}/>
                <Route path="/datosP/:id" element ={<DatosPFormPage/>}/>
                {/* rutas perfil*/ }
                <Route path="/profile" element={<ProfilePage/>} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
        </DatosPProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
