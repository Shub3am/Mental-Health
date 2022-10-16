import React from "react";
import { Container, Header } from "semantic-ui-react";
import "./cures.css";
import mental_health from "../../Assets/Help/mental-health.jpg";
import helpline from "../../Assets/Help/helpline.png";
const Cures = () => {
  return (
    <div className="cures">
      <Container text>
        <Header as="h2">How We can Help!</Header>
        <p>
          First, We Determine which mental illness you have Sometimes it's
          difficult to find out which mental illness may be causing your
          symptoms. But taking the time and effort to get an accurate diagnosis
          will help determine the appropriate treatment. The more information
          you have, the more you will be prepared to work with your mental
          health professional in understanding what your symptoms may represent.
          The defining symptoms for each mental illness are detailed in the
          Diagnostic and Statistical Manual of Mental Disorders (DSM-5),
          published by the American Psychiatric Association. This manual is used
          by mental health professionals to diagnose mental conditions and by
          insurance companies to reimburse for treatment.
        </p>
        <br />
        <img src={mental_health} />
        <h3>
          According to Studies and Statistics, Mental Health is being left
          untreated, Even After showing noticable symptoms
        </h3>
        <p>
          Without treatment, the consequences of mental illness for the
          individual and society are staggering. Untreated mental health
          conditions can result in unnecessary disability, unemployment,
          substance abuse, homelessness, inappropriate incarceration, and
          suicide, and poor quality of life
        </p>
        <br />
        <img src={helpline} />
        <h1>Why is mental Health so serious</h1>
        <p>
          Why is mental health important for overall health? Mental and physical
          health are equally important components of overall health. For
          example, depression increases the risk for many types of physical
          health problems, particularly long-lasting conditions like diabetes,
          heart disease, and stroke.
        </p>
      </Container>
    </div>
  );
};

export default Cures;
