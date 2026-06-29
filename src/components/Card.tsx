const Card = ({text, data }: {text: string, data: number}) => {
    return (
        <div className="bg-white border-3 border-[#39818D] p-6 rounded-lg shadow-lg text-center mb-2">
            <h3 className=" text-[#39818D] text-xl font-semibold mb-2">{text}</h3>
            <p className="text-4xl font-bold text-[#39818D]">
              {data}
            </p>
          </div>
    )
};

export default Card;