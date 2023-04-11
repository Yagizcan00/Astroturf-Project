import Container from "./components/Container";

import { ContentProvider } from "./context/ContentContext";


function App() {
  return (
    <div>
      <ContentProvider>
        <Container />
      </ContentProvider>
    </div>
  );
}

export default App;
