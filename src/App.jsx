import Button from "./components/button";
import Input from "./components/input";

function App() {
  return (
    <>
      <div className="text-center">
        <p className="mb-10 text-3xl">Components</p>
        <hr className="mt-3 mb-3" />
        <Button className="bg-slate-600 text-white hover:bg-purple-500 ">
          Click Here
        </Button>
        <hr className="mt-3 mb-3" />
        <Input className="w-48" placeholder="Your name" />
        <hr className="mt-3 mb-3" />
      </div>
    </>
  );
}

export default App;
