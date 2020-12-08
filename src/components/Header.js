import React, {Fragment} from 'react';

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Header = (props) => {
  return (
    <Fragment>
      <div className="header">
        	{
        		weekDays.map((item,index)=> {
        			return (
        				<span className="header-day" key={index}>
        					{item}
        				</span>
        			)
        		})
        	}
      </div>
      <div className="header-mobile">
        Calendar
      </div>
    </Fragment>
  )
}

export default Header;