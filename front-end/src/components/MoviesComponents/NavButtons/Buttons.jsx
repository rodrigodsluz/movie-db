import React from "react";
import Button from "../../Button/Button";

import "./buttons.scss";

const Buttons = () => {
  return (
    <section className="buttons">
      <div className="buttons__inner">
        {/* <Button name="Melhores avaliados" path={`/movies/top-rated`} />
        <Button name="Mais populares" path={`/movies/popular`} />
        <Button name="Assistidos recentemente" path={`/movies/now-playing`} /> */}
      </div>
    </section>
  );
};

export default Buttons;
