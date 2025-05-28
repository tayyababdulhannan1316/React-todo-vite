import React from 'react'
import { ConfigProvider } from 'antd'
import './App.scss';
import Routes from './pages/Routes'
import '@ant-design/v5-patch-for-react-19';
import 'bootstrap/dist/js/bootstrap.bundle'
import { useAuthContext } from 'contexts/Auth';
import ScreenLoader from './components/ScreenLoader';

function App() {
  
const {isAppLoading} = useAuthContext()
  return (
    <>
    <ConfigProvider theme={{token:{colorPrimary:"#124e66"}}}>
      {isAppLoading
      ?<ScreenLoader />
      :<Routes />
      }
      
    </ConfigProvider>
      
    </>
  )
}

export default App
