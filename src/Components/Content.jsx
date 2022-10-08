import React from "react";
import './ContentStyles.css';
const Content =()=>{
    return(
        <div className="inside-div">
            <div className="input-div">
                <p>2.100000 CAKE</p>
            </div>
            <div className="balance">
                <button className="bal">use balance</button>
                <button className="bal light-bal">$1000</button>
                <button className="bal light-bal">$100</button>
            </div>
            <h3 className="time">Timeframe</h3>
            <div className="btn-handeler">
            <button className="days bal">1 Day</button>
            <button className="days gray bal">7 Days</button>
            <button className="days gray bal">1 Years</button>
            <button className="days gray bal">6 Years</button>
            </div>
            <div className="down">
            <p className="enb">Enable accelerated apy</p>
            <input className = "checkbox1" type="checkbox"/>
            </div>
            <p className="text-tier">Select Tier</p>
            <div className="balance">
                <button className="bal  round">Tier 1</button>
                <button className="bal light-bal round">Tier 2</button>
                <button className="bal light-bal round">Tier 3</button>
                <button className="bal  round">Tier 4</button>
                <button className="bal light-bal round">Tier 5</button>
            </div>
            <p className="roi">ROI at Current States</p>
            <div className="input-div">
                <p>100.0 USD</p>
            </div>
            <div className="final-btn">
                <button className="Dark">Apply</button>
                <button className="Dark light">Cancel</button>
            </div>
        </div>
    )
}
export default Content;