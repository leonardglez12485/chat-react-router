//import { AuthLayout } from './auth/layouts/AuthLayout'
import ChatLayout from './chat/layouts/ChatLayout'
import ChatPage from './chat/pages/ChatPage'

function App() {

  return (
    <>
      {/* <AuthLayout /> */}
      <ChatLayout >
        <ChatPage />
      </ChatLayout>

    </>
  )
}

export default App
