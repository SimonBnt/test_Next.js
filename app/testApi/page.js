"use client"

import { useState, useEffect } from "react"
import axios from "axios"

const Page = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get("https://dumbstockapi.com/stock?exchanges=NYSE")
                setData(response.data)
                setLoading(false)
            } catch(error) {
                console.log(error)
                setLoading(false)
            }
        }

        fetchData()

        return() => {
            // nettoyage au démontage du composant
            // cancelRequest()
        }
    }, [])

    return (
        <>
            {loading ? (
                <p>Chargement...</p>
            ) : (
                <ul>
                    {data && data.map(item => (
                        <li key={item.ticker}>{item.name}</li>
                        /* Warning: Each child in a list should have a unique "key" prop */
                    ))}
                </ul>
            )}
        </>
    )
}

export default Page
