import React from "react";

function Progress(props){

  const cNames = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= props.percentage) cNames[i-1] = "progress-bar bg-success";
    else cNames[i-1] = "progress-bar bg-warning"
  }

  return (
    <div className="mi-progress">
      <h6 className="mi-progress-title">{props.title}</h6>
      <div className="mi-progress-inner">
        <div className="mi-progress-percentage"></div>
        <div className="mi-progress-container">
        <div class="progress">
          <div class={cNames[0]} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}>
            1
          </div>
          <div class={cNames[1]} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}>
            2
          </div>
          <div class={cNames[2]} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}>
            3
          </div>
          <div class={cNames[3]} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}>
            4
          </div>
          <div class={cNames[4]} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}>
            5
          </div>
        </div>
        </div>
      </div>
    </div>

    /*
    <div className="mi-progress">
      <h6 className="mi-progress-title">{props.title}</h6>
      <div className="mi-progress-inner">
        <div className="mi-progress-percentage"></div>
        <div className="mi-progress-container">
          <span
            className="mi-progress-active"
            style={props.isVisible ? {width: `${props.percentage*20}%`} : {width: 0}}
          ></span>
        </div>
      </div>
    </div>
    */
  );
}

export default Progress;
