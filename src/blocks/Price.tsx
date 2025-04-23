import { MdEventAvailable, MdOutlineCleaningServices } from "react-icons/md";

const Price = () => {
  return (
    <div className="
    flex items-center justify-center relative gap-10
    w-full md:h-screen md:flex-row md:py-0
    py-[48px] h-full flex-col  bg-brown-400 text-gold
    ">
      <h2 className="text-[48px] font-bold md:absolute top-[48px]">Прайс</h2>
      <div className="flex flex-col  items-center w-[348px]">
        <MdEventAvailable size={"90px"} />
        <h3 className="text-[48px] text-center">Мероприятие</h3>

        <ul className="text-[24px]">
          <li>
            <span>ПН-ЧТ – 3000 ₽/час (до 23:00)</span>
          </li>
          <li>
            <span>ПТ-ВС – 5000 ₽/час</span>
          </li>
        </ul>
      </div>
      <span className="w-[1px] h-[400px] bg-gold absolute hidden md:block"></span>
      <span className="w-[80vw] h-[1px] bg-gold md:hidden block"></span>
      <div className="flex flex-col  items-center w-[348px]">
        <MdOutlineCleaningServices size={"90px"} />
        <h3 className="text-[48px] text-center ">Клининг</h3>

        <p className="text-[24px] w-[290px] text-center">
          Единоразовая уборка <br />
          после мероприятия – 3000 ₽
        </p>
      </div>
    </div>
  );
};

export default Price;
