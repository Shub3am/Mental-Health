import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import "./Faq.css";
import FaqImage from "./faq.jpeg";

export default class Faq extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div className="Faq">
        <h1>Different Stages of Mental illness</h1>
        <div className="accordion">
          <Accordion styled>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Stage 1: Mild Symptoms and Warning Signs
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p>
                At Stage 1, a person begins to show symptoms of a mental health
                condition. However, he or she is still able to maintain the
                ability to function at home, work or school—although, perhaps
                not as easily as before they started to show symptoms. Often
                there is a sense that something is “not right.”
              </p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Stage 2: Symptoms Increase in Frequency and Severity and Interfere
              with Life Activities and Roles
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>
                At Stage 2, it usually becomes obvious that something is wrong.
                A person’s symptoms may become stronger and last longer or new
                symptoms may start appearing on top of existing ones, creating
                something of a snowball effect. Performance at work or school
                will become more difficult. A person may have trouble keeping up
                with family duties, social obligations or personal
                responsibilities.
              </p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Stage 3: Symptoms Worsen with Relapsing and Recurring Episodes
              Accompanied by Serious Disruption in Life Activities and Roles
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <p>
                At Stage 3, symptoms have continued to increase in severity, and
                many symptoms are often taking place at the same time. A person
                may feel as though they are losing control of their life and the
                ability to fill their roles at home, work or school.
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 3}
              index={3}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Stage 4: Symptoms are Persistent and Severe and Have Jeopardized
              One's Life
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
              <p>
                By Stage 4, the combination of extreme, prolonged and persistent
                symptoms and impairment often results in development of other
                health conditions and has the potential to turn into a crisis
                event like unemployment, hospitalization, homelessness or even
                incarceration. In the worst cases, untreated mental illnesses
                can lead to loss of life an average of 25 years early.
              </p>
            </Accordion.Content>
          </Accordion>
        </div>
        <img src={FaqImage} width="600px" />
      </div>
    );
  }
}
