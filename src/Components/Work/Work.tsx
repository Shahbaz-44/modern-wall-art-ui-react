import "./Work.css";
import { cards } from "./workData";

function Work() {
  return (
    <section className="work" id="work">
      <div className="container">

        <div className="work-heading">
          <h5>HOW IT WORKS</h5>
          <h2>Breathe Life Into Any Space</h2>
        </div>
        
        <div className="card-container">
          {cards.map((card) => (
            <div
              className="card"
              key={card.id}
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="overlay">

                <h3 className="title">{card.title}</h3>

                <div className="hover-content">
                  <h3>{card.hoverTitle}</h3>
                  <p>{card.description}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Work;