import React, {useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook"
import MySelect from "../components/MySelect";
import UsersService from "../services/UsersService";
import DataService from "../services/DataService";
import WeldingsService from "../services/WeldingsService";
import '../assets/styles/welding.scss'
export default function WeldingsPage(){
    const [loading,setLoading] = useState(false)
    const [table,setTable] = useState(null)
    const [sync,setSync] = useState(false)

    const loadTabelSv = async () => {
        try {
            setLoading(true)
            cancelHandler()
            const {data} = await WeldingsService.loadTabelSv()
            setTable(data)
            console.log(data)
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }
    const syncTabelSv = async () => {
        try {
            setLoading(true)
            cancelHandler()
            const {data} = await WeldingsService.syncTabelSv()
            if(data){
                setSync(true)
            }
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }

    const loadViewsWorkSv = async () => {
        try {
            setLoading(true)
            cancelHandler()
            const {data} = await WeldingsService.loadViewsWorkSv()
            setTable(data)
            console.log(data)
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }
    const syncViewsWorkSv = async () => {
        try {
            setLoading(true)
            cancelHandler()
            const {data} = await WeldingsService.syncViewsWorkSv()
            if(data){
                setSync(true)
                console.log(data)
            }
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }

    const loadYmSvarka = async () => {
        try {
            setLoading(true)
            cancelHandler()
            const {data} = await WeldingsService.loadYmSvarka()
            setTable(data)
            console.log(data)
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }
    const syncYmSvarka = async () => {
        try {
            setLoading(true)
            cancelHandler()
            const {data} = await WeldingsService.syncYmSvarka()
            if(data){
                setSync(true)
                console.log(data)
            }
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }

    const loadZaSv = async () => {
        try {
            setLoading(true)
            cancelHandler()
            const {data} = await WeldingsService.loadZaSv()
            setTable(data)
            console.log(data)
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }
    const syncZaSv = async () => {
        try {
            setLoading(true)
            cancelHandler()
            const {data} = await WeldingsService.syncZaSv()
            if(data){
                setSync(true)
                console.log(data)
            }
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }

    const loadTableZayavka = async () => {
        try {
            setLoading(true)
            cancelHandler()
            const {data} = await WeldingsService.loadTableZayavka()
            setTable(data)
            console.log(data)
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }
    const syncTableZayavka = async () => {
        try {
            setLoading(true)
            cancelHandler()
            const {data} = await WeldingsService.syncTableZayavka()
            if(data){
                setSync(true)
                console.log(data)
            }
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }

    const loadCrewSv = async () => {
        try {
            setLoading(true)
            cancelHandler()
            const {data} = await WeldingsService.loadCrewSv()
            setTable(data)
            console.log(data)
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }
    const syncCrewSv = async () => {
        try {
            setLoading(true)
            cancelHandler()
            const {data} = await WeldingsService.syncCrewSv()
            if(data){
                setSync(true)
                console.log(data)
            }
        }catch (e) {
            console.log(e)
        }finally {
            setLoading(false)
        }
    }


    const cancelHandler = () => {
        setSync(false)
        setTable(null)
    }
    return (
        <div className='sync-box'>
            <div className='left-box'>
                <div className='control-box'>
                    {/*<div onClick={() => loadingHandler()} className='button'>Load</div>*/}
                    <div onClick={() => loadTabelSv()} className='button'>load Tabel_SV</div>
                    <div onClick={() => syncTabelSv()} className='button'>sync Tabel_SV</div>
                    <hr/>
                    <div onClick={() => loadViewsWorkSv()} className='button'>load ViewsWorkSv</div>
                    <div onClick={() => syncViewsWorkSv()} className='button'>sync ViewsWorkSv</div>
                    <hr/>
                    <div onClick={() => loadYmSvarka()} className='button'>load YmSvarka</div>
                    <div onClick={() => syncYmSvarka()} className='button'>sync YmSvarka</div>
                    <hr/>
                    <div onClick={() => loadZaSv()} className='button'>load ZaSv</div>
                    <div onClick={() => syncZaSv()} className='button'>sync ZaSv</div>
                    <hr/>
                    <div onClick={() => loadTableZayavka()} className='button'>load TableZayavka</div>
                    <div onClick={() => syncTableZayavka()} className='button'>sync TableZayavka</div>
                    <hr/>
                    <div onClick={() => loadCrewSv()} className='button'>load CrewSv</div>
                    <div onClick={() => syncCrewSv()} className='button'>sync CrewSv</div>
                    <hr/>
                </div>

            </div>
            <div className='right-box'>
                {table ? 'See log F12' : null}
                {sync ? 'Sync is done...💪' : null}
                {loading ? 'loading...' : null}
            </div>
        </div>
    )
}
