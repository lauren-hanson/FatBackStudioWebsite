// import { useEffect, useState } from 'react'
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
// //import {CalendarDates} from "./CalendarDates.js"
// import "./Calendar.css"


// export const StudioCalendar = () => {


//     const [date, setDate] = useState(new Date())
//     // const [startDate, setStartDate] = useState({})
//     // const [endDate, setEndDate] = useState({})
//     //const [acceptedRequests, setAccepted] = useState([])

//     useEffect(() => { 
        
//     })


//     // useEffect(() => {

//     //     fetch(`http://localhost:8088/requests?isAccepted=true`)
//     //         .then(response => response.json())
//     //         .then(acceptedDates => {
//     //             setDate(acceptedDates)
//     //         })
//     // }, [])

//     // const handleSaveDateButton = () => {

//     //     const setRecordingDate = {
//     //         start: startDate.date[0].toDateString()

//     //     }

//     // }


//     return (
//         <>
//             <div className='calendar'>
//                 <h1 className='text-center'>Our Schedule</h1>
//                 <div className='calendar-container'>
//                     <Calendar
//                         onChange={setDate}
//                         value={date}
//                         defaultView='month'
//                         nextLabel='month>>'
//                         nextAriaLabel='Go to next month'
//                         next2Label='year>>'
//                         next2AriaLabel='Go to next year'
//                         prevLabel='<<month'
//                         prevAriaLabel='Go to prev month'
//                         prev2Label='<<year'
//                         prev2AriaLabel='Go to prev year'
//                         calendarType="US"
//                         tileClassName="days"
//                         selectRange={true}
                                                
                        


//                         // onClickDay={(value, event) => alert('Clicked day: ', {value})}

//                         // tileContent={({ activeStartDate, date, view }) => view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null}

//                     />
                
//                 </div>



//                 {date.length > 0 ? (
//                     <p className='text-center'>
//                         <span className='bold'>Start Date:</span>{' '}
//                         {date[0].toDateString()}
//                         &nbsp;|&nbsp;
//                         <span className='bold'>End Date:</span> {date[1].toDateString()}
//                     </p>
//                 ) : (
//                     <p className='text-center'>
//                         <span className='bold'>Today's Date:</span>{' '}
//                         {date.toDateString()}
//                     </p>
//                 )} 



//             </div>
            
//             {/* {dates.map(acceptedRequest => {
//                 return <p className='text-center'>
//                     {acceptedRequest.bandName}<br></br>
//                     {acceptedRequest.startDate}<br></br>
//                     {acceptedRequest.endDate}


//                 </p>
//             })

//             }  */}

//              <button>
//                 Save New Dates
//             </button> 
//         </>

//     )
// }




