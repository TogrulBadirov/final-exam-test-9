import "./index.scss";

const Register = () => {
  return (
    <section id="Register">
      <div className="left-side">
        <div className="content">
          <h2>Register now and get a discount <span>50%</span> discount until 1 January</h2>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum
            nulla, vitae tempo.
          </p>
        </div>
      </div>
      <div className="right-side">
        <h3>Search for your course</h3>
        <form action="">
           <div>
           <input type="text"  placeholder="Course Name"/>
           </div>
            <div>
            <input type="text"  placeholder="Category"/>
            </div>
           <div>
           <input type="text"  placeholder="Degree"/>
           </div>
            <button>SEARCH COURSE</button>
        </form>
      </div>
    </section>
  );
};

export default Register;
