interface AdviceProperties {
  advice: string;
}

const Advice = ({ advice }: AdviceProperties) => {
  return <div className="advice-container__advice">{advice}</div>;
};

export default Advice;
