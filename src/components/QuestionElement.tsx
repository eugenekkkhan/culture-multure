import { useState } from 'react'
import { MdClose } from 'react-icons/md';

type Props = { 
  question: string;
  answer: string;
  isLast?: boolean;
}

const QuestionElement = ({ question, answer, isLast = false }: Props) => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <div className='pt-[18px]'>
      <div 
      className="text-[24px] font-bold 
      flex flex-row items-center justify-between mb-[18px]">
        <p>{question}</p>
        <div onClick={()=>setIsOpened(prev=>!prev)} 
        className='rounded-full bg-brown-400 text-gold 
        w-[24px] h-[24px] flex items-center justify-center cursor-pointer 
        hover:bg-brown-300 transition-all'>
          <MdClose width={18} height={18} style={{
            transform: isOpened ? 'rotate(0deg)' : 'rotate(45deg)',
            transition: 'transform 0.3s ease-out'
          }} />
        </div>
      </div>
      {isOpened ? <div className="text-[24px]/[28px] text-brown-400 mb-[18px]">{answer}</div> : null}

      {isLast ? null : <div className="h-[1px] bg-brown-400"></div>}
    </div>
  )
}

export default QuestionElement