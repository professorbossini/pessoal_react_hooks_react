import React, { useState, useEffect } from 'react'
import { InputText } from 'primereact/inputtext'
const Busca = () => {
    const [termoDeBusca, setTermoDeBusca] = useState('')
    useEffect (() => {
        console.log ("executando todas as vezes...")
    })
    useEffect(() => {
        console.log("executando somente uma vez")
    }, [])
    useEffect(() => {
        console.log("Executando somente quando o termo é alterado")
    }, [termoDeBusca])
    return (
        <div>
            <span className="p-input-icon-left">
                <i className="pi pi-search"></i>
                <InputText 
                    onChange={(e) => setTermoDeBusca(e.target.value)}
                />
            </span>
            
        </div>
    )
}

export default Busca
