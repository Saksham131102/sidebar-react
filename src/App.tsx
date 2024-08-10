import { Route, Routes } from "react-router-dom";
// import Sidebar from "./components/Sidebar/Sidebar";
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    <main className="h-screen">
      {/* <Sidebar>
       <SidebarItem icon={} text="Dashboard" active />
        <SidebarItem icon={} text="Dashboard" />
        <SidebarItem icon={} text="Dashboard" />
        <SidebarItem icon={} text="Dashboard" />
        <SidebarItem icon={} text="Dashboard" />
      </Sidebar>

      <div className="p-4">App</div> */}
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<div>Home</div>} />
          <Route path="/stocks" element={<div>Stocks</div>} />
          <Route path="/top-investors" element={<div>Top Investors</div>} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
