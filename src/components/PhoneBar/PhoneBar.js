import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, BarChart, Tooltip, YAxis } from 'recharts';

const PhoneBar = () => {
    const [phone, setPhones] = useState([]);
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesLoaded = data.data.data;
            const phoneData = phonesLoaded.map(phones => {
                const parts = phones.slug.split('-');
                const price = parseInt(parts[1]);
                const phone = {
                    name: phones.phone_name,
                    price: price
                }
                return phone;
            })
            console.log(phoneData)
            setPhones(phoneData)
        })
    },[])
    return (
        <div>
             <BarChart width={500} height={200} data={phone}>
          <Bar dataKey="price" fill="#8884d8" />
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default PhoneBar;