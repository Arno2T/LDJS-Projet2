const Card = ({text, data }: {text: string, data: number}) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center mb-2">
            <h3 className="text-xl font-semibold mb-2">{text}</h3>
            <p className="text-4xl font-bold text-blue-400">
              {data}
            </p>
          </div>
    )
};

export default Card;