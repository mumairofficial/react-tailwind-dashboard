import BasicLayout from "./components/BasicLayout";
import ContentWrapper from "./components/ContentWrapper";
import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";
import useToggleDarkMode from "./hooks/useDarkMode";

function App() {
  useToggleDarkMode();

  return (
    <BasicLayout>
      <ContentWrapper>
        <Dashboard />
      </ContentWrapper>
    </BasicLayout>
  );
}

export default App;
