import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useState } from 'react';

export const Mypage = () => {

    useEffect(() => {
        getPitcherData();
    },[])

    const [pitchers, setPitchers] = useState([]);

    const getPitcherData = async() => {
        await axios.get("api/foo")
        .then(response => {
            setPitchers(response.data);
            console.log(response.data);//取得データ確認用のconsole.log()
            //取得データ確認用のconsole.log()
        })
        // pitchers用にオブジェクトを配列化する

    }

    return (
        <div>
            <h1>こんにちは</h1>
            <form>
                <input type="text"></input>
                <input type="submit" value="追加"></input>
            </form>
            {
                pitchers.map((item) => {
                    // console.log(item.name);
                    return <h1>{item.name}</h1>
                })
            }
        </div>
    )
}