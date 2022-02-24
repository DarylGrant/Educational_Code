import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div class="error-page-container">
      <div class="number">404</div>
      <div class="text">
        <h2>Ooops...</h2>
        <p>Page Not Found</p>
      </div>
      <a
        class="me"
        href="https://codepen.io/uzcho_/pens/popular/?grid_type=list"
        target="_blank"
      ></a>
    </div>
  );
};

export default ErrorPage;
