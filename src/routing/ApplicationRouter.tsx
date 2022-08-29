import { BrowserRouter, Route, Routes, Router, Navigate } from "react-router-dom";
import App from "../App";
import ContenetsInputPage from "../pages/ContentsInput";
import QuizComponent from '../components/quiz'

const ApplicationRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path='/get-contents' element={<ContenetsInputPage />} />
            <Route path='/quiz' element={<QuizComponent />} />
        </Routes>
    );
}

export default ApplicationRouter;