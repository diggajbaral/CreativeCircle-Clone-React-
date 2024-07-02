import React from 'react'

// function Homecard(props) {
//     return (
//         <div className="Card">
//             <img src={props.data.imageURL} alt="" />
//             <figcaption>{props.data.cardTitle}</figcaption>
//         </div>
//     )
// }

function Homecard({ data: { imageURL, cardTitle } }) {
    return (
        <div className="Card">
            <img src={imageURL} alt="" />
            <figcaption>{cardTitle}</figcaption>
        </div>
    );
}

export default Homecard