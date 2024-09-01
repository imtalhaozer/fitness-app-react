import React from 'react'
import coach from '../assets/coach.jpg'
import { Link } from 'react-router-dom'
import question from '../assets/question.svg'
import datee from '../assets/date.svg'
export const CoachBar = () => {
    const coachTitles = [
        "Eğitmeniniz",
        "Kategori",
        "Kayıt Tarihiniz",
        "Haftanın Mesajı"
    ];

    // dummy data
    const coachData = [
        {
            name: "Fatih Terim",
            date: "12.12.2022",
            category: "Fitness",
            message: `Son dönemdeki performansını incelediğimde, kalori açığını başarılı bir şekilde
             yönetip hedeflediğin kas kütlesi artışını sağladığını görmekten memnuniyet duyuyorum.
`
        }
    ];

    const { name, date, category, message } = coachData[0];

    const combinedData = [
        { title: coachTitles[0], value: name },
        { title: coachTitles[1], value: category },
        { title: coachTitles[2], value: date },
        { title: coachTitles[3], value: message }
    ];

    return (
        <div className='flex '>
            <div className='bg-white flex flex-col w-[200px] h-auto mt-5 p right-10 rounded-xl'>
                <div className='flex flex-col items-center mt-10'>
                    <Link to={"/coach"}>
                        <img
                            src={coach}
                            alt='coach'
                            className='w-[100px] h-[100px] rounded-full border-red-500 border-[4px]'
                        />
                    </Link>
                </div>
                <div className='mt-5 ml-3'>
                    {combinedData.map((item, index) => (
                        <div key={index} className='mb-2'>
                            <p className='font-bold text-primary'>{item.title}</p>
                            <p>{item.value}</p>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col items-start mt-8 ml-3'>
                    <button className='mb-5 bg-green-500 flex text-white p-2 w-30 rounded-xl'>
                        Soru Sor
                        <img src={question} alt="question_icon" className='w-6 ml-2' />
                    </button>
                    <button className='mb-5 bg-green-500 flex text-white p-2 w-30 rounded-xl'>
                        Randevu Al
                        <img src={datee} alt="question_icon" className='w-6 ml-2' />
                    </button>
                </div>
            </div>
        </div>
    );
}
