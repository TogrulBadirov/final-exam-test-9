import { Link } from "react-router-dom";
import "./index.scss";

const UpcomingEvents = () => {
  return (
    <section id="UpcomingEvents">
      <div className="container">
        <div className="sectionHeader">
          <div className="yellow-bar"></div>
          <h2>Upcoming Events</h2>
        </div>

        <div className="courses">
          <div className="row">
            <div className="col-lg-12 course">
              <div className="date">
                <p>07</p>
                <p>January</p>
              </div>
              <div className="content">
                <h4>Student Festival</h4>
                <p>
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor.
                </p>
              
              </div>
              <img src="https://preview.colorlib.com/theme/course/images/event_1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
