import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export const Mypage = () => {

    useEffect(() => {
        getDiaryData();
    },[])

    const [diaries, setDiaries] = useState([]);

    const getDiaryData = async() => {
        await axios.get("api/get")
        .then(response => {
            setDiaries(response.data);
        });
        coneole.log(response.data);
    }

    return (
        <div>
            <h1>こんにちはですね</h1>
            <form>
                <input type="text"></input>
                <input type="submit" value="追加"></input>
            </form>
            {
                diaries.map((item, index) => {
                    return(
                        <div>
                        <h1 key={index}>{item['title']}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}