import React from "react";
import Color from "../HOC/Color";
import anh from "../../images/123.png";
class Home extends React.Component {

    render() {
        return (
            <>
            <div>
               WELCOME TO VNPT TECHNOLOGY
            </div>
            <div>
                <img src={anh} style={{ width:'300px', height:'300px', marginTop:'-80px' }}/>
            </div>
            </>
        )
    }
}

export default Color(Home); 