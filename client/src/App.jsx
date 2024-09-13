import Header from "./assets/components/Header";
import Form from "./assets/components/Form";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      <Header />
      <main className="flex justify-center items-center py-10">
        <Form />
      </main>
    </div>
  );
}

export default App;
