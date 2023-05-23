import { Info } from "./Info";
import { Button } from "./Button";
import { Gentlemen } from "./Gentlemen";

export function App() {
  const title = "the pointing gentlemen";

  return (
    <>
      <Info title={title}></Info>
      <Button></Button>
      <main className="main">
        <ul className="gentlemen">
          <Gentlemen></Gentlemen>
        </ul>
      </main>
    </>
  );
}

export default App;
