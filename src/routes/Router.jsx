import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "../layout/LandingLayout";
import LandingContent from "../pages/LandingContent";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingLayout />,
        children: [
            {
                path: '/',
                element: <LandingContent/>
            }
        ]
    }
])

export default router