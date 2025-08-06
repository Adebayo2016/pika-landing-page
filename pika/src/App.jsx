
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, useRouteError } from "react-router-dom";
import Landing from './pages/Landing';
import Login from './pages/Login';
import Join from "./pages/Join";
import NoPage from "./pages/NoPage";
import Logout from "./pages/Logout";
import VerifyOTPSuccess from "./pages/VerifyOTPSuccess";
import SignUpSuccess from "./pages/SignUpSuccess";
import Subscription from "./pages/Subscription";
import Signup from "./pages/Signup";
import MenuBar from "./pages/MenuBar";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import Inventory from "./pages/Inventory";
import Navbar from "./pages/Navbar";
import VerifyOTP from "./pages/VerifyOtp";

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { requireAuth } from "./accessory/Auth";

const queryClient = new QueryClient()

const ErrorBoundary = () => {
  const error = useRouteError();
  return <div className="p-4 text-red-600">Error: {error.message}</div>;
};

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <ErrorBoundary />,
//     loader: requireAuth,
//     children: [
//       { path: '/dashboard', element: <Dashboard />, loader: requireAuth },
//       { path: '/products', element: <Products />, loader: requireAuth },
//       { path: '/categories', element: <Categories />, loader: requireAuth },
//       { path: '/profile', element: <Profile />, loader: requireAuth },
//       { path: '/logout', element: <Logout />, loader: requireAuth },
//     ],
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },
//   {
//     path: '/register',
//     element: <Register />,
//   },
// ]);

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <RouterProvider router={router} />
//     </QueryClientProvider>
//   );
// }

// export default App;


export default function App(){

    return(
        <QueryClientProvider client={queryClient}>
            {/* <ErrorBoundary> */}
                <BrowserRouter>
                    <Routes>
                        <Route element={<Navbar />}>
                            <Route index element={<Landing />} />
                            <Route path="login" element={<Login />} />
                            <Route path="logout" element={<Logout />} />
                            <Route path="sign-up" element={<Join />} />
                            <Route path="sign-up/verify-otp" element={<VerifyOTP />} />
                            <Route path="sign-up/verify-otp/success" element={<VerifyOTPSuccess />} />
                            <Route path="sign-up/business-profile" element={<Signup />}  loader={requireAuth} />
                            <Route path="sign-up/business-profile/success" element={<SignUpSuccess />} loader={requireAuth} />
                            <Route path="sign-up/subscription" element={<Subscription />} loader={requireAuth} />
                        </Route>
                        <Route path="/" element={<MenuBar />}>
                            <Route index path="dashboard" element={<Dashboard />} loader={requireAuth} />
                            <Route path="wallet" element={<Wallet />} loader={requireAuth} />
                            <Route path="inventory" element={<Inventory />} loader={requireAuth} />
                        </Route>
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </BrowserRouter>
            {/* </ErrorBoundary> */}
        </QueryClientProvider>
    );
};
