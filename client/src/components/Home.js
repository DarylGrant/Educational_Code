import "./Home.css";

const Home = () => {
  return <>
  <div id="container">
  <div id="error-content">
    <div id="about">
      <h1>
        <div>
          Web Development
        </div>
        <div class="stage">
          <div class="pyramid3d">
            <div class="triangle side1"></div>
            <div class="triangle side2"></div>
            <div class="triangle side3"></div>
            <div class="triangle side4"></div>
          </div>
        </div> 
      </h1>
      <h3>
      Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.
      </h3>
      <p id='pleft'>
        We provide information to people interested in learning about web development to get them started.
      </p>
      <p id='pright'>
        Once you have learned about a topic, have a go at a quiz to test your knowledge!
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>

    </div>
  </div>
</div>
          </>
};

export default Home;
