import React, {useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook"
import MySelect from "../components/MySelect";
import UsersService from "../services/UsersService";

export default function LoadingPage(){
    const [table,setTable] = useState([])
    const [data,setData] = useState([])
    const loadingHandler = async () => {
        try {
            const response = await UsersService.getUsers()
            if(response.data){
                setTable(response.data)
                console.log(response.data)
            }
        }catch (e) {
            
        }
    }
    
    return (
        <div className='sync-box'>
            <div className='left-box'>
                <div className='control-box'>
                    <div onClick={() => loadingHandler()} className='button'>Load</div>
                </div>

            </div>
            <div className='right-box'>

            </div>
        </div>
    )
}
