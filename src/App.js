import BasicLayout from "./components/BasicLayout";
import ContentWrapper from "./components/ContentWrapper";
import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <BasicLayout>
      <ContentWrapper>
        <Dashboard />
      </ContentWrapper>
    </BasicLayout>
  );
}

export default App;
