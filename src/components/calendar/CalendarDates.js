import { useEffect, useState } from 'react'

export const CalendarDates = () =>  {

    const [dates, setDates] = useState()

    useEffect(() => { 

        fetch(`http://localhost:8088/requests?isAccepted=true`)
            .then(response => response.json())
            .then((date) => { 
                setDates(date)
            })
    }, [])

    return ( 
        <>
        </>
    )
}


