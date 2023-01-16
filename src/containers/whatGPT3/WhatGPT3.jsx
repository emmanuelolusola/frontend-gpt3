import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          omnis autem, odio praesentium excepturi vel numquam ducimus
          accusantium labore amet id voluptates quidem?"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          omnis autem, odio praesentium excepturi vel numquam ducimus
          accusantium labore amet id voluptates quidem?"
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          omnis autem, odio praesentium excepturi vel numquam ducimus
          accusantium labore amet id voluptates quidem?"
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          omnis autem, odio praesentium excepturi vel numquam ducimus
          accusantium labore amet id voluptates quidem?"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
