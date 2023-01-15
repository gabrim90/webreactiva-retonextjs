export default function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <ul>
          <li>
            <a href="/about">About (pages)</a>
          </li>
          <li>
            <a href="/about-extra">About Extra (app)</a>
          </li>
          <li>
            <a href="#">Dropdown</a>
            <ul>
              <li>
                <a href="/products">Products  (pages)</a>
              </li>
              <li>
                <a href="/products-extra">Products Extra (app)</a>
              </li>
              <li>
                <a href="/products/static">Products static  (pages)</a>
              </li>
              <li>
                <a href="/products-extra/static">Products Extra static (app)</a>
              </li>
              <li>
                <a href="#">Short sublink</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}