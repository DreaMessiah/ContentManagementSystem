import React, {useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook"
import MySelect from "../components/MySelect";

export default function SyncPage(){
    const {loading,error,request,clearError} = useHttp()

    const [dataList,setDataList] = useState([])
    const [model,setModel] = useState([])
    const [typesModel,setTypesModel] = useState([])
    const [numberRows,setNumberRows] = useState(0)
    const [swch,setSwch] = useState(true)
    const [tablesList,setTableList] = useState([])
    const [table,setTable] = useState([])
    const [hoveredCell, setHoveredCell] = useState(null);
    const url = 'http://localhost:5000'

    useEffect(() => {
        const tablesreq = loadingHandler()
        console.log(tablesreq)
    },[])

    const loadingHandler = async () => {
        try{
            const res = await request(url+'/db/gettables','POST')
            setTableList(() => {
                return res.map((tableName, index) => ({
                    value: index+1,
                    label: tableName
                }))
            })
        }catch (e){
            console.log('error reading databases')
        }
    }
    const handleLoading = async () => {
        const {req,header} = await request(url+'/db/getselect','POST',{table})
        if(req === undefined) {
            setDataList([['Таблица пуста']])
        }else{
            setDataList(req)
        }
        if(header === undefined) {
            setModel(['Выбери таблицу из списка'])
        }else{
            setModel(header)
        }
        setSwch(true)
        console.log(req)
    }
    const handleTypes = async () => {
        const {types,header} = await request(url+'/db/getselect','POST',{table})
        if(types === undefined){
            setTypesModel(['Выбери таблицу из списка'])
        }else{
            setModel(header)
            setTypesModel(types)
        }
        setSwch(false)
        console.log(types)
    }
    const handleSelectTable = (set) => {
        setTable(set.label)
    }
    const handleMouseEnter = (rowIndex,cellIndex) => {
        setHoveredCell({rowIndex,cellIndex});
    }
    const handleMouseLeave = () => {
        setHoveredCell(null);
    }
    const empty = () => {

    }
    const handleSyncUsers = async () => {
        try{
            const {req} = await request(url+'/sync/users','POST')
            setDataList(req)
            setModel(['asdasd'])
            setSwch(true)
            setNumberRows(req.length)
            console.log(req)
        }catch (e){

        }
    }
    const handleSyncObjects = async () => {
        try{
            const {req} = await request(url+'/sync/objects','POST')
            setDataList(req)
            setModel(['asdasd'])
            setSwch(true)
            setNumberRows(req.length)
            console.log(req)
        }catch (e){

        }
    }
    const handleSyncCompany = async () => {
        try{
            const {req} = await request(url+'/sync/company','POST')
            setDataList(req)
            setModel(['asdasd'])
            setSwch(true)
            console.log(req)
        }catch (e){

        }
    }
    const handleSyncPositions = async () => {
        try{
            const {req} = await request(url+'/sync/positions','POST')
            setDataList(req)
            setModel(['asdasd'])
            setSwch(true)
            setNumberRows(req.length)
            console.log(req)
        }catch (e){

        }
    }
    const handleSyncTnForUsers = async () => {
        try{
            console.log('pred')
            const {req,header} = await request(url+'/sync/tnforusers','POST')
            console.log(req)
            setDataList(req)
            setModel(header)
            setNumberRows(req.length)
            setSwch(true)
        }catch (e){

        }
    }
    const handleSyncTabelToPayslip = async () => {
        try{
            const {req} = await request(url+'/sync/payslip','POST')
            console.log(req)
            setDataList(req)
            setModel([1,2,3,4,5])
            setNumberRows(req.length)
            setSwch(true)
        }catch (e){

        }
    }
    const handleSyncTableTabel = async () => {
        try{
            const {req} = await request(url+'/sync/tt','POST')
            console.log(req)
            setDataList(req)
            setModel([1,2,3,4,5])
            setNumberRows(req.length)
            setSwch(true)
        }catch (e){

        }
    }
    const handleSyncTableSv = async () => {
        try{
            const {req} = await request(url+'/sync/tsv','POST')
            console.log(req)
            setDataList(req)
            setModel([1,2,3,4,5])
            setNumberRows(req.length)
            setSwch(true)
        }catch (e){

        }
    }
    const handleSyncT13 = async () => {
        try{
            const {req} = await request(url+'/sync/t13','POST')
            console.log(req)
            setDataList([['Сервер ответил']])
            setModel([1,2,3,4,5])
            setNumberRows(req.length)
            setSwch(true)
        }catch (e){

        }
    }

    function f(n) {
        if (n === 0) return 1
        else return n * f(n - 1)
    }

    const handleSyncKtuList = async () => {
        try{
            const {req} = await request(url+'/sync/ktulist','POST')
            console.log(req)
            setDataList(req)
            setModel([1,2,3,4,5])
            setNumberRows(req.length)
            setSwch(true)
        }catch (e){

        }
    }
    const emptys = async () => {
        console.log('empty')
    }
    const handleTel = async () => {
        try{
            const {req} = await request(url+'/sync/setel','POST')
            console.log(req)
            setDataList(req)
            setModel([1,2,3,4,5])
            setNumberRows(req.length)
            setSwch(true)
        }catch (e){

        }
    }
    return (
        <div className='sync-box'>
            <div className='left-box'>
                <div className='control-box'>
                    <MySelect setChange={handleSelectTable} className='select' options={tablesList} />
                    <div onClick={handleLoading} className='button'>Load table</div>
                    <div onClick={handleTypes} className='button'>Load model</div>
                    <div onClick={handleSyncUsers} className='button'>Sync table users</div>
                    <div onClick={handleSyncObjects} className='button'>Sync table objects</div>
                    <div onClick={handleSyncCompany} className='button'>Sync table company</div>
                    <div onClick={handleSyncPositions} className='button'>Sync table positions</div>
                    <div onClick={handleSyncTabelToPayslip} className='button'>Sync tabel table to payslip</div>
                    <div onClick={handleSyncTableTabel} className='button'>Sync TableTabel</div>
                    <div onClick={handleSyncTableSv} className='button'>Sync TableSV</div>
                    <div onClick={handleSyncT13} className='button'>Sync T13</div>
                    <div onClick={handleSyncKtuList} className='button'>Sync KtuList</div>

                    <div onClick={handleTel} className='button'>SetTelephones</div>

                    <div>{numberRows}</div>
                </div>

            </div>
            <div className='right-box'>
                {swch ?
                <div className='table'>
                    <div className='row top'>
                    {model.map((item,index) => (
                        <div key={index} className='cell'>{item}</div>
                    ))}
                    </div>
                {dataList.map((row,rowIndex) => (
                    <div key={rowIndex} className='row'>
                        {row.map((cell,cellIndex) => (
                            <div onMouseLeave={() => handleMouseLeave()} onMouseEnter={() => handleMouseEnter(rowIndex, cellIndex)} key={cellIndex} className="cell">{row[cellIndex]}<div onMouseLeave={() => empty} onMouseEnter={() => empty} className={hoveredCell && hoveredCell.rowIndex === rowIndex && hoveredCell.cellIndex === cellIndex ?'flex cellmaxima': 'cellmaxima'}>{row[cellIndex]}</div></div>
                        ))}
                    </div>
                ))}
                </div> :
                <div className='model'>
                    <div className='field'>
                        <p>const <span>{table}</span> = sequelize.define('{table}',{`{`}</p>
                        {typesModel.map((item,index) => (
                            <p className='m' key={index}>{model[index]}:{'{'+item+'},'}</p>
                        ))}
                        <p>{'})'}</p>
                    </div>
                </div>
                }
            </div>


        </div>
    )
}
