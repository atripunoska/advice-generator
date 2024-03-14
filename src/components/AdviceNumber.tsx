interface AdviceNumberProperties {
  number?: number;
}
const AdviceNumber = ({ number }: AdviceNumberProperties) => {
  return <div className="advice-generator__number">Advice #{number}</div>;
};

export default AdviceNumber;
