import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";
import styles from "./UserStatsGraphs.module.css";

function UserStatsGraphs({ data }) {
  const { graphClass, totalClass, graphItemClass } = styles;
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      data.map(({ acessos }) => +acessos).reduce((acc, num) => acc + num, 0)
    );
    setGraph(
      data.map(({ title, acessos }) => ({
        x: title,
        y: +acessos,
      }))
    );
  }, [data]);

  return (
    <section className={`${graphClass} animeLeft`}>
      <div className={`${totalClass} ${graphItemClass}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={graphItemClass}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={graphItemClass}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </div>
    </section>
  );
}

export default UserStatsGraphs;

UserStatsGraphs.propTypes = {
  data: PropTypes.array.isRequired,
};
