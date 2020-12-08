import React, { useState, useEffect, Fragment } from 'react';
import moment from 'moment';

const date = moment()

const Body = (props) => {

    // const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment())
    const [allDayList, setAllDayList] = useState([])

    useEffect(() => {
        /* setCalendar(buildCalendar(value))
       console.log(moment().startOf('month').format("D"));
        console.log(moment().endOf('month').format("D"));*/


        const end = Number(moment(value).endOf('month').format("D"))

        let AllDaysInMonth = []
        for (let i=1; i<=end; i++){
            if(i<10){
                AllDaysInMonth.push(`0${i}`);
            }else{
                AllDaysInMonth.push(`${i}`);
            }
        }

        setAllDayList(AllDaysInMonth);

    }, [value])

    console.log(allDayList);

/*    function buildCalendar(date) {
        const a = [];
        const startDay = date.clone().startOf("month").startOf("week")
        const endDay = date.clone().endOf("month").endOf("week");
        const _date = startDay.clone().subtract(1, "day");

        while (_date.isBefore(endDay, "day")) {
            a.push(
                Array(7)
                .fill(0)
                .map(() => _date.add(1, "day").clone())
            );
        }
        return a;
    }*/

    function currMonthName() {
        return value.format("MMMM");
    }

    function currYear() {
        return value.format("YYYY");
    }

    function prevMonth() {
        return value.clone().subtract(1, "month");
    }

    function nextMonth() {
        return value.clone().add(1, "month");
    }

    const currentDay = () => { 
        if(Number(value.format("D"))<10){
            return "0"+value.format("D");
        } else{
         return value.format("D");
        }
    };

    return (
        <Fragment>
	        <div className="list">

            {/* 
            {
                [...Array(Number(moment('2020/12', 'YYYY/MM').startOf('month').format("day")[0]))].map((item, index)=> {
                    return (
                         <div className="singleList">
                            <span></span>
                        </div>
                    )
                })
            }
            */}

	        {
	        	/*calendar.map((week, i)=> {
	        		return (
	        			<Fragment key={i}>
	        			{
	        				week.map((day, i)=> {
	        					return (
	        						<Fragment key={i}>
	        							{
	        								day.format("D") === currentDay() && date.format("YYYY") === day.format("YYYY") && day.format("MMMM") == date.format("MMMM")
                                            ? <div key={i} className="singleList">
                                                <span>{day.format("D").toString()}</span>
                                                <span className="today">Today</span>
                                                </div>
                                            : <div key={i} className="singleList">
                                                <span>{day.format("D").toString()}</span>
                                                </div>
	        							}
	        						</Fragment>
	        					)
	        				})
	        			}
	        			</Fragment>
	        		)
	        	})*/
	        }

            {
                [...Array(Number(moment(value).startOf('month').format("day")[0]))].map((item, index)=> {
                    return (
                         <div>
                        </div>
                    )
                })
            }

            {
                allDayList.length > 0 && 
                allDayList.map((item,i)=> {
                    return (
                        <Fragment key={i}>
                        {console.log(currentDay())}
                            {
                                item === currentDay() && moment(date).format("YYYY") === moment(value).format("YYYY") && moment(date).format("MMMM") === moment(value).format("MMMM") ?
                                <div className="singleList">
                                    <span>{item}</span>
                                    <span className="today">Today</span>
                                </div>
                                :  <div className="singleList">
                                    <span>{item}</span>
                                </div>
                            }
                        </Fragment>
                    )
                })
            }

			</div>
			<div className="footer">
                {
                    moment("10-2020", "MM-YYYY").format("YYYY") === moment(value).format("YYYY") && moment("10-2020", "MM-YYYY").format("MMMM") === moment(value).format("MMMM")
				    ? ""
                    : <span onClick={() => setValue(prevMonth())}>prev</span>
                }
				<div className="monthYear">
					{currMonthName()}, 
					{currYear()}
				</div>
				<span onClick={() => setValue(nextMonth())}>next</span>
			</div>
		</Fragment>
    )
}
export default Body;