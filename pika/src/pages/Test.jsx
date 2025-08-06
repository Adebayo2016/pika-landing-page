import React, { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  redirect,
  useNavigate,
  useLoaderData,
  useRouteError,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';

const queryClient = new QueryClient();
const api = axios.create({ baseURL: 'https://fakestoreapi.com' });

let memoryToken = null;

// Axios interceptor for Authorization header
api.interceptors.request.use(async (config) => {
  const token = await auth.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const auth = {
  login: async ({ username, password }) => {
    const response = await api.post('/auth/login', { username, password }, { withCredentials: true });
    const { token } = response.data;
    memoryToken = token;
    const expiresAt = new Date().getTime() + 1000 * 60 * 60; // 1 hour
    localStorage.setItem('expiresAt', expiresAt);
    return token;
  },
  register: async (userData) => {
    const response = await api.post('/users', userData);
    return response.data;
  },
  logout: () => {
    memoryToken = null;
    localStorage.removeItem('expiresAt');
  },
  getToken: async () => {
    if (auth.isTokenExpired()) {
      try {
        return await auth.refresh();
      } catch (err) {
        auth.logout();
        throw new Error('Session expired');
      }
    }
    return memoryToken;
  },
  isTokenExpired: () => {
    const expiresAt = localStorage.getItem('expiresAt');
    return !expiresAt || new Date().getTime() > parseInt(expiresAt, 10);
  },
  isAuthenticated: () => {
    return memoryToken && !auth.isTokenExpired();
  },
  refresh: async () => {
    // Real app would use cookie-based refresh token
    const response = await api.post('/auth/refresh', {}, { withCredentials: true });
    const { token: newToken } = response.data;
    memoryToken = newToken;
    const newExpiresAt = new Date().getTime() + 1000 * 60 * 60;
    localStorage.setItem('expiresAt', newExpiresAt);
    return newToken;
  },
};

const requireAuth = async () => {
  if (!auth.isAuthenticated()) {
    throw redirect('/login');
  }
};

const usePersistLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isTokenExpired()) {
      auth.logout();
      navigate('/login');
    }
  }, [navigate]);
};

const Root = () => {
  usePersistLogin();
  return (
    <div className="p-4">
      <nav className="mb-4">
        <a className="mr-4 text-blue-500" href="/dashboard">Dashboard</a>
        <a className="mr-4 text-blue-500" href="/products">Products</a>
        <a className="mr-4 text-blue-500" href="/categories">Categories</a>
        <a className="mr-4 text-blue-500" href="/profile">Profile</a>
        <a className="text-red-500" href="/logout">Logout</a>
      </nav>
      <Outlet />
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const mutation = useMutation({
    mutationFn: auth.login,
    onSuccess: () => navigate('/dashboard'),
    onError: () => setError('Login failed'),
  });

  const handleSubmit = () => mutation.mutate({ username, password });

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input className="border p-2 w-full mb-2" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input className="border p-2 w-full mb-2" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 w-full">Login</button>
    </div>
  );
};

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '', username: '', password: '', name: { firstname: '', lastname: '' }, address: {}, phone: ''
  });
  const [error, setError] = useState('');

  const mutation = useMutation({
    mutationFn: auth.register,
    onSuccess: () => navigate('/login'),
    onError: () => setError('Registration failed'),
  });

  const handleSubmit = () => mutation.mutate(form);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input placeholder="Username" className="border p-2 w-full mb-2" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
      <input placeholder="Email" className="border p-2 w-full mb-2" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" className="border p-2 w-full mb-2" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
      <input placeholder="First Name" className="border p-2 w-full mb-2" value={form.name.firstname} onChange={e => setForm({ ...form, name: { ...form.name, firstname: e.target.value } })} />
      <input placeholder="Last Name" className="border p-2 w-full mb-2" value={form.name.lastname} onChange={e => setForm({ ...form, name: { ...form.name, lastname: e.target.value } })} />
      <input placeholder="Phone" className="border p-2 w-full mb-2" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
      <button onClick={handleSubmit} className="bg-green-600 text-white p-2 w-full">Register</button>
    </div>
  );
};

const Dashboard = () => <h2 className="text-xl">Welcome to the Dashboard</h2>;

const Products = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => (await api.get('/products')).data,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {data.map(product => (
          <div key={product.id} className="border p-4">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Categories = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => (await api.get('/products/categories')).data,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="list-disc pl-6">
        {data.map((cat, i) => <li key={i}>{cat}</li>)}
      </ul>
    </div>
  );
};

const Profile = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user'],
    queryFn: async () => (await api.get('/users/1')).data,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading profile</p>;

  return (
    <div>
      <h2 className="text-xl font-bold">Profile</h2>
      <p><strong>Username:</strong> {data.username}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Name:</strong> {data.name.firstname} {data.name.lastname}</p>
    </div>
  );
};

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    auth.logout();
    navigate('/login');
  }, [navigate]);
  return null;
};

const ErrorBoundary = () => {
  const error = useRouteError();
  return <div className="p-4 text-red-600">Error: {error.message}</div>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />,
    loader: requireAuth,
    children: [
      { path: '/dashboard', element: <Dashboard />, loader: requireAuth },
      { path: '/products', element: <Products />, loader: requireAuth },
      { path: '/categories', element: <Categories />, loader: requireAuth },
      { path: '/profile', element: <Profile />, loader: requireAuth },
      { path: '/logout', element: <Logout />, loader: requireAuth },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

function Test() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default Test;
