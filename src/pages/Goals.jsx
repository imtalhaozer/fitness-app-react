import React from 'react'
import { SideBar } from '../components/SideBar'
import { BarChart, Gauge, gaugeClasses } from '@mui/x-charts'
import { CoachBar } from '../components/CoachBar';
import { ChatBar } from '../components/ChatBar';

export const Goals = () => {
    // Dummy data
    const caloriData = [
        { day: "Pazartesi", calories: 2500 },
        { day: "Salı", calories: 3000 },
        { day: "Çarşamba", calories: 2800 },
        { day: "Perşembe", calories: 2500 },
        { day: "Cuma", calories: 2780 },
        { day: "Cumartesi", calories: 2486 },
        { day: "Pazar", calories: 3050 }
    ];

    //Dummy data
    const goalsData = [
        { aim: "Haftada 150 dakika orta şiddetli kardiyo egzersizi yaparak dayanıklılığını artır." },
        { aim: "Haftada 2-3 gün ağırlık antrenmanı yaparak kas kütleni artır." },
        { aim: "Haftada 2-3 gün 15-20 dakika esneme ve mobilite egzersizleriyle esnekliğini geliştir." },
        { aim: "Günlük dengeli bir diyetle sağlıklı beslenmeye özen göster ve işlenmiş gıdalardan kaçın." },
        { aim: "Günlük en az 2-3 litre su içerek yeterli hidrasyonu sağla ve uykunu düzenleyerek iyi dinlenmeyi hedefle." }
    ];
    

    // Dummy data for step
    const stepData = [
        {
            step: 3000,
            expectedStep: 4000
        }
    ]
    const { step, expectedStep } = stepData[0];

    const days = caloriData.map(item => item.day);
    const calories = caloriData.map(item => item.calories);

    const userData = [
        { kg: "90", calori_expect: "2200" }
    ];

    return (
        <div className='relative h-full bg-secondary flex'>
            <div className='mr-10'>
                <SideBar />
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex w-full justify-between'>
                    <div className='bg-white w-[55%] h-[400px] flex flex-col rounded-xl mt-5'>
                        <div className='flex flex-col items-center justify-center'>
                            <BarChart
                                xAxis={[{ data: days, scaleType: 'band' }]}
                                series={[{ data: calories, color: "#FFA500", label: "kalori" }]}
                                height={300}
                                width={400}
                            />
                            <p className='mt-4 mb-5 text-primary'>Günlük kalori hedefi : {userData[0].calori_expect}</p>
                        </div>
                    </div>
                    <div className='bg-white w-[50%] h-[400px] flex flex-col rounded-xl mt-5 ml-5'>
                        <div className='flex flex-col items-center justify-center'>
                            <Gauge
                                value={step}
                                valueMax={expectedStep}
                                startAngle={-110}
                                endAngle={110}
                                height={300}
                                width={300}
                                sx={{
                                    [`& .${gaugeClasses.valueText}`]: {
                                        fontSize: 25,
                                        transform: 'translate(0px, 0px)',
                                    },
                                }}
                                text={
                                    ({ value, valueMax }) => `${value} / ${valueMax}`}
                            />
                            <p className='mt-3 text-primary'>Günlük adım sayınız</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white w-full h-[285px] mt-5 rounded-xl'>
                    <div className='ml-3 mt-3'>
                        <h1 className='mb-5 text-primary'>Aylık Hedefler</h1>
                        <ul>
                            {goalsData.map((goal,index)=>(
                                <li key={index} className='mb-2 break-words'>{"+ "+goal.aim}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <ChatBar/>
            </div>
            <div className='right-0 top-0 mx-5 '>
                <CoachBar />
            </div>
        </div>
    )
}
