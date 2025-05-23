import { Button } from "@nayhoo/ui/button";
import { ThemeProvider } from "@nayhoo/ui/providers";

function App() {
  return (
    <ThemeProvider>
      <Button onClick={() => alert("Hello!")}>Press me</Button>
    </ThemeProvider>
  );
}

export default App;
