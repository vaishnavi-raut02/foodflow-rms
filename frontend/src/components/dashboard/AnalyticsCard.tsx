interface Props {
  title: string;
  value: string;
  growth: string;
}

const AnalyticsCard = ({
  title,
  value,
  growth,
}: Props) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">

      <div className="flex items-center justify-between mb-5">

        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-xl">
          📊
        </div>

        <span className="text-green-500 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
          {growth}
        </span>

      </div>

      <h3 className="text-gray-400 text-sm font-medium mb-2 uppercase tracking-wide">
        {title}
      </h3>

      <p className="text-3xl font-bold text-gray-800">
        {value}
      </p>

      <div className="h-1 bg-green-500 rounded-full mt-5 w-24" />

    </div>
  );
};

export default AnalyticsCard;
