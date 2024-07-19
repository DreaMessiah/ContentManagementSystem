import React, {useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook"
import MySelect from "../components/MySelect";
import UsersService from "../services/UsersService";
import DataService from "../services/DataService";

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
            console.log(e)
        }
    }

    const crewSv = async () => {
        try {
            const response = await DataService.syncCrewSv()
            console.log(response.data)
        }catch (e) {
            console.log(e)
        }
    }
    const crewBase = async () => {
        try {
            const response = await DataService.syncCrewBase()
            console.log(response.data)
        }catch (e) {
            console.log(e)
        }
    }
    const crewDoclist = async () => {
        try {
            const response = await DataService.syncCrewDoclist()
            console.log(response.data)
        }catch (e) {
            console.log(e)
        }
    }
    const crewManlist = async () => {
        try {
            const response = await DataService.syncCrewManlist()
            console.log(response.data)
        }catch (e) {
            console.log(e)
        }
    }
    const crewViewsWork = async () => {
        try {
            const response = await DataService.syncViewsWorkSv()
            console.log(response.data)
        }catch (e) {
            console.log(e)
        }
    }
    const crewMessageSv = async () => {
        try {
            const response = await DataService.syncMessageSv()
            console.log(response.data)
        }catch (e) {
            console.log(e)
        }
    }

    const tabelSv = async () => {
        try {
            const response = await DataService.syncTabelSv()
            console.log(response.data)
        }catch (e) {
            console.log(e)
        }
    }

    const ktuDoc = async () => {
        try {
            const response = await DataService.syncKtuDoc()
            console.log(response.data)
        }catch (e) {
            console.log(e)
        }
    }
    const ktuList = async () => {
        try {
            const response = await DataService.syncKtuList()
            console.log(response.data)
        }catch (e) {
            console.log(e)
        }
    }
    const TabelForMehans = async () => {
        try {
            const response = await DataService.syncTabelForMehans()
            console.log(response.data)
        }catch (e) {
            console.log(e)
        }
    }
    return (
        <div className='sync-box'>
            <div className='left-box'>
                <div className='control-box'>
                    {/*<div onClick={() => loadingHandler()} className='button'>Load</div>*/}
                    <div onClick={() => crewSv()} className='button'>sync CrewSv</div>
                    <div onClick={() => crewBase()} className='button'>sync crewBase</div>
                    <div onClick={() => crewDoclist()} className='button'>sync crewDoclist</div>
                    <div onClick={() => crewManlist()} className='button'>sync crewManlist</div>
                    <div onClick={() => crewViewsWork()} className='button'>sync crewViewsWork</div>
                    <div onClick={() => crewMessageSv()} className='button'>sync crewMessageSv</div>
                    <div onClick={() => tabelSv()} className='button'>sync TabelSv</div>
                    <div onClick={() => ktuList()} className='button'>sync KtuList</div>
                    <div onClick={() => ktuDoc()} className='button'>sync KtuDoc</div>
                    <hr/>
                    <div onClick={() => TabelForMehans()} className='button'>sync Tabel FOR Mehans</div>

                </div>

            </div>
            <div className='right-box'>

            </div>
        </div>
    )
}
