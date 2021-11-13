import React from 'react'

export const CardRoomie = (props) => {

    const {
        username,
        age,
        university,
        career,
        semester,
        picture_url
    } = props;

    return (
        
        <div className="card__roomie">
            <div className="img__card">
              <img alt="" src={picture_url} />
            </div>
            <div className="info__personal__card">
              <h1> {username} </h1>
              <h2>{age}</h2>
            </div>
            <div className="info__card__roomie">
              <p>{university}</p>
              <p>{career}</p>
              <p>{semester} Semestre</p>
            </div>
            <div className="icons__card__roomie">
              <div>
                <span className="fa fa-paw fa-2x negative"></span>
              </div>
              <div>
                <span className="fa fa-glass fa-2x positive"></span>
              </div>
              <div>
                <span className="fa fa-volume-up fa-2x positive"></span>
              </div>
              <div>
                <span className="fa fa-music fa-2x positive"></span>
              </div>
            </div>
        </div>
          
    )
}
