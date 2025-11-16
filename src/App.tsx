import './App.css'
import Layout from './layouts/Layout'
import AppRoutes from './routes/AppRoute'

function App() {
  return (  
    <div>
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
  )
}

export default App