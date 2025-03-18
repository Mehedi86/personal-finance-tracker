import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "../layout/LandingLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingLayout />
    }
])

export default router