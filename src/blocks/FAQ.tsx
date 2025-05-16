import QuestionElement from '../components/QuestionElement';

type FAQData = { 
  question: string;
  answer: string;
}

const hardCodeData: FAQData[] = [
  {
    question: "Какой срок выполнения заказа?",
    answer: "Срок выполнения заказа зависит от сложности работы и объема. Обычно это занимает от 1 до 3 дней."
  },
  {
    question: "Какова стоимость услуг?",
    answer: "Стоимость услуг зависит от типа работы и объема. Мы предоставляем индивидуальные расценки для каждого клиента."
  },
  {
    question: "Как можно связаться с вами?",
    answer: "Вы можете связаться с нами по телефону, электронной почте или через форму обратной связи на сайте."
  },
  {
    question: "Какие способы оплаты вы принимаете?",
    answer: "Мы принимаем наличные, банковские карты и электронные платежи."
  },
  {
    question: "Вы предоставляете гарантии на выполненные работы?",
    answer: "Да, мы предоставляем гарантии на все выполненные работы. Если у вас возникнут проблемы, мы их решим."
  },
  {
    question: "Как можно оставить отзыв о вашей работе?",
    answer: "Вы можете оставить отзыв на нашем сайте или в социальных сетях. Мы всегда рады услышать ваше мнение!"
  }
]

const FAQ = () => {
  return (
  <div className="
  flex items-center justify-center relative gap-10
  w-full 
  py-[48px] h-full flex-col text-gold
  ">
    <h2 className="text-[48px] font-bold top-[48px] text-center p-[18px]">Часто задаваемые вопросы</h2>
    <div className="flex flex-col px-[18px] md:w-[720px] mx-[18px]
     bg-gold text-brown-400 
     text-[24px] rounded-[12px]">
      {hardCodeData.map((el, i) => 
      <QuestionElement 
        question={el.question}
        answer={el.answer}
        isLast={i === hardCodeData.length - 1}
        key={i}
      />
      )}
    </div>
  </div>
  )
}

export default FAQ