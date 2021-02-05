/**
 * 5. Holy Grail
 *
 * We are in 2021.
 * Using CSS, how would you build the layout seen in the holy-grail.png picture.
 * Feel free to update the html structure and add classNames in this document if needed.
 */

import { Fragment } from "react";
import "../styles/style.module.css";

const HolyGrail = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <header className="header">
          <h1>HEADER</h1>
        </header>
        <nav className="left-menu">
          Menu
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </nav>
        <main className="main">
          <h1>CONTENT</h1>
          <section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </section>
        </main>
        <div className="right-someads">
          <ul>
            <li>Ad 1</li>
            <li>Ad 2</li>
          </ul>
        </div>
        <footer className="footer">
          <h1>FOOTER</h1>
        </footer>
      </div>
    </Fragment>
  );
};

export default HolyGrail;
