import ElementTest from "./components/ElementTest";
import DesignSystemTest from "./components/DesignSystemTest";

function App() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <DesignSystemTest />
      <ElementTest />
    </div>
  );
}

export default App;
