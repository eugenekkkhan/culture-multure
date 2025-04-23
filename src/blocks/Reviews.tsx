import { useEffect, useState } from "react";

type Review = {
  author: string;
  text: string;
};

const ReviewList: Review[] = [
  { author: "Олег Самойлов", text: "Отличный сервис, быстро и качественно!" },
  {
    author: "Александр Петров",
    text: "Рекомендую всем, кто ищет надежную компанию!",
  },
  {
    author: "Елена Иванова",
    text: "Профессионалы своего дела, все сделали на высшем уровне!",
  },
  {
    author: "Мария Сидорова",
    text: "Очень довольна работой этой компании, буду обращаться еще!",
  },
  {
    author: "Иван Кузнецов",
    text: "Лучший сервис, с которым я когда-либо работал!",
  },
];

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(()=>{
      setCurrentReview((prev) => ((prev + 1)%ReviewList.length));
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <div className="bg-gold text-brown-400
    flex items-center justify-center relative
    w-full md:h-screen
    py-[48px] h-screen flex-col">
      <h2 className="text-[48px] font-bold">Отзывы</h2>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-full md:w-[600px] p-8 text-center">
          <p className="text-[24px]">{ReviewList[currentReview].text}</p>
          <p className="text-[32px] text-brown-300 mt-4">{ReviewList[currentReview].author}</p>
        </div>
      </div>
      <div className="flex gap-2">
        {ReviewList.map((el, i) => {
          return (
            <div
              className={currentReview === i ? "w-[10px] h-[10px] rounded-full transition-all bg-brown-400 my-2" :
                "w-[10px] h-[10px] rounded-full transition-all bg-brown-300 my-2 cursor-pointer hover:bg-brown-350"}
              onClick={() => setCurrentReview(()=>i)}
              key={i}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
