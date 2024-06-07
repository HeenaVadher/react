'use client'
import { useState, useEffect } from 'react';

const DateSelector = () => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const [years, setYears] = useState([]);
    const [months] = useState(monthNames);
    const [days, setDays] = useState([]);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedDay, setSelectedDay] = useState(new Date().getDate());

    useEffect(() => {
        // Generate the years dynamically based on the current year
        const currentYear = new Date().getFullYear();
        const yearList = [];
        for (let y = 0; y < 50; y++) {
            yearList.push(currentYear - y);
            console.log(yearList);
        }
        setYears(yearList);
    }, []);

    useEffect(() => {
        // Adjust days whenever year or month changes
        const adjustDays = () => {
            const year = selectedYear;
            const month = selectedMonth + 1; // JavaScript months are 0-11
            const daysInMonth = new Date(year, month, 0).getDate();
            const dayList = [];
            for (let d = 1; d <= daysInMonth; d++) {
                dayList.push(d);
            }
            setDays(dayList);
        };
        adjustDays();
    }, [selectedYear, selectedMonth]);

    return (
        <div>
            <select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
                {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>

            <select value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))}>
                {months.map((month, index) => (
                    <option key={month} value={index}>{month}</option>
                ))}
            </select>

            <select value={selectedDay} onChange={(e) => setSelectedDay(Number(e.target.value))}>
                {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                ))}
            </select>
        </div>
    );
};

export default DateSelector;
