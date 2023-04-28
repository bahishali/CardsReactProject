import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">My Courses</p>
        </div>
      </section>
      <div className="container">
        <section className="section"></section>
        <div className="columns">
          <div className="column">
            <Course
              image={Angular}
              title="Angular"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eos dolores ducimus facilis corrupti recusandae similique ad, aliquid provident, pariatur rem. Adipisci velit iusto dolores dolor autem. Iure, ducimus deserunt."
            />
          </div>
          <div className="column">
            <Course
              image={Bootstrap}
              title="Bootstrap"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eos dolores ducimus facilis corrupti recusandae similique ad, aliquid provident, pariatur rem. Adipisci velit iusto dolores dolor autem. Iure, ducimus deserunt."
            />
          </div>
          <div className="column">
            <Course
              image={Csharp}
              title="Overall Web"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eos dolores ducimus facilis corrupti recusandae similique ad, aliquid provident, pariatur rem. Adipisci velit iusto dolores dolor autem. Iure, ducimus deserunt."
            />
          </div>
          <div className="column">
            <Course
              image={KompleWeb}
              title="Frontend"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eos dolores ducimus facilis corrupti recusandae similique ad, aliquid provident, pariatur rem. Adipisci velit iusto dolores dolor autem. Iure, ducimus deserunt."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
