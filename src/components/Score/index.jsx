// IMPORTS RECHARTS LIBRARY =============================================//
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
  Legend,
} from 'recharts';

// IMPORTS STYLES ======================================================//
import './Score.scss';

// COMPONENT ===========================================================//
const Score = ({ data }) => {
  const res = [{ score: data }];

  const RenderLegend = () => (
    <div className="score-container">
      <span className="score">{data * 100}%</span>
      <p className="description">de votre objectif</p>
    </div>
  );

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="80%"
        outerRadius="90%"
        barSize={15}
        data={res}
        startAngle={90}
        endAngle={450}
        fill="#FFF"
      >
        <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
        <RadialBar
          minAngle={15}
          clockWise
          dataKey="score"
          fill="red"
          cornerRadius={20}
        />
        <Legend
          width={220}
          height={220}
          layout="vertical"
          verticalAlign="middle"
          align="center"
          content={<RenderLegend />}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default Score;
// END FILE ==========================================================//
