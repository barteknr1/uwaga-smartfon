import { Routes, Route } from "react-router-dom"
import SharedLayout from "./components/SharedLayout/SharedLayout"
import Home from "./pages/Home/Home"
import Volunteering from "./pages/Volunteering/Volunteering"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="volunteering" element={<Volunteering />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
