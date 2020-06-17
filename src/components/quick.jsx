import React from "react";

const Quick = () => (
  <div className="quick">
    <div className="dots1">
      <img className="eng-image" src="/images/dots.svg" alt="" />
    </div>

    <h1 className="quick-header">Quick brief</h1>
    <div className="quick-body">
      <div className="quick-body_content">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
          and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
          Ipsum comes from
        </p>
      </div>
      <div className="quick-body_image">
        <div className="quick-body_image_wrapper">
          <img class="eng-image" src="/images/quick.svg" alt="" />
        </div>
      </div>
    </div>
    <div className="dots2">
      <img className="eng-image" src="/images/dots.svg" alt="" />
    </div>
  </div>
);

export default Quick;
