import React from 'react'
import { SideBar } from '../components/SideBar'
import { BarChart } from '@mui/x-charts'

export const Aim = () => {
    const caloriData = [
        { day: "Pazartesi", calories: 2500 },
        { day: "Salı", calories: 3000 },
        { day: "Çarşamba", calories: 2800 },
        { day: "Perşembe", calories: 2500 },
        { day: "Cuma", calories: 2780 },
        { day: "Cumartesi", calories: 2486 },
        { day: "Pazar", calories: 3050 }
    ];

    const days = caloriData.map(item => item.day);
    const calories = caloriData.map(item => item.calories);

    const userData=[
        {kg:"90",calori_expect:"2200"}
    ]

    return (
        <div className='flex h-full'>
            <SideBar />
            <div className='bg-secondary w-full flex-col flex'>
                <div className='ml-10 bg-white w-[500px] h-[400px] flex-col'>
                    <BarChart
                        xAxis={[{ data: days, scaleType: 'band' }]}
                        series={[{ data: calories,color:"#FFA500" ,label:"kalori"}]}
                        height={300}
                        width={400}
                    />
                    <p className='pl-12 flex'> Günlük kalori hedefi : {userData[0].calori_expect}</p>
                </div>
            </div>
        </div>
    )
}
