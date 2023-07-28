import useDebounce from '@/hooks/useDebounce'
import React, { useEffect, useState } from 'react'
import NetWrapper from 'src/Network/netWrapper'
// import { ISearchInterface, Istate } from '../../Interface/Search';





function Typehead() {
    const [search, setsearch] = useState<string>("")
    const [suggestion, setsuggestion] = useState([])
    const debouncedValue = useDebounce<string>(search, 300)


    async function handleRequest(query) {
        const [state, cities, country] = await Promise.all<any>([NetWrapper(`api/states${query}`), NetWrapper(`api/cities${query}`), NetWrapper(`api/countries${query}`)])
        setsuggestion([...state.data.data, ...cities.data.data, ...country.data.data]);
    }



    useEffect(() => {
        if (!debouncedValue) {
            handleRequest("?pagination[page]=1&pagination[pageSize]=10")
            return
        }
        const query = `?filters[name][$contains]=${debouncedValue}`
        handleRequest(query)
    }, [debouncedValue])

    function handleChange(e) {
        setsearch(e.target.value)
    }

    return (
        <>

            <input type="text" value={search} onChange={handleChange} />
            {suggestion?.map((suggest) => {
                // eslint-disable-next-line react/jsx-key
                return <h1 key={suggest.attributes?.name} >{suggest.attributes?.name}</h1>
            })}
        </>
    )
}

export default Typehead

// http://localhost:1337/api/posts?filters[slug][$eq]=entrada-de-prueba-2