import logo from './logo.svg';
import './App.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Layout from './Components/Layout.js';



function App() {
  return (
<ProSidebarProvider>
  <Layout />
</ProSidebarProvider>
  );
}

export default App;
