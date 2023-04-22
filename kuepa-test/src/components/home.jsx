import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1>Bienvenido a Kuepa</h1>
        <div className="containerLinks">
          <div className="">
            <button className="login"> <a href="/login"> Login </a> </button>
          </div>
          <div className="">
            <button className="register"> <a href="/register"> Register </a> </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
