import React from "react";
import "./Stats.css";
import { Icon, Statistic } from "semantic-ui-react";

const Stats = () => {
  return (
    <div className="Stats">
      <h1>
        Approximately eight million deaths each year are attributable to mental
        illness.
      </h1>
      <Statistic.Group widths="four">
        <Statistic>
          <Statistic.Value>8</Statistic.Value>
          <Statistic.Label>Million Deaths Every Year</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>700K+</Statistic.Value>
          <Statistic.Label>Deaths Due to Depression</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>3.5%</Statistic.Value>
          <Statistic.Label>Mortality Rate</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>8%</Statistic.Value>
          <Statistic.Label>
            of World Population suffers <br />
            from Mental Health Issues
          </Statistic.Label>
        </Statistic>
      </Statistic.Group>
      ;
    </div>
  );
};

export default Stats;
