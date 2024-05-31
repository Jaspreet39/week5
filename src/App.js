import Blog from "./component/Blog";
import Header from "./component/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="Blogs">
        <Blog
          header="2024 S"
          heading="2024S-T3 CSDD2000 - Full-Stack Web Development 01 (M11 Group 1)"
          img="https://img.freepik.com/free-photo/blonde-woman-with-elegant-hairstyle-typing-text-keyboard-office-indoor-portrait-international-employees-with-secretary-using-laptop_197531-3711.jpg"
          name="Basir Ahmed"
        />
        <Blog
          header="2024 S"
          heading="2024S-T3 CSDD2000 - Full-Stack Web Development 01 (M11 Group 1)"
          img="https://img.freepik.com/free-photo/blonde-woman-with-elegant-hairstyle-typing-text-keyboard-office-indoor-portrait-international-employees-with-secretary-using-laptop_197531-3711.jpg"
          name="Basir Ahmed"
        />
      </div>
    </div>
  );
}

export default App;
