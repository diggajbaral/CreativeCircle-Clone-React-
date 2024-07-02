import React from 'react'
import Header from '../Component/Header'

function Error() {
    return (
        <>
            <Header />
            <div className="Error Main-Margin /// container fs-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>Sorry, Page not found ~ <span>404 Error</span> !!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem ex suscipit soluta recusandae numquam. Dolorum architecto sunt quod id odio quae ex, porro repellat fugiat illum consectetur ratione dignissimos cupiditate praesentium ullam iste quo hic, dicta asperiores. Quasi, sed iusto. Commodi hic rem enim vel nisi itaque officia sed!</p>
                    </div>
                    <div className="Images col-lg-6">
                        <img src="https://img.freepik.com/free-psd/cross-mark-isolated_23-2151478803.jpg?t=st=1719894981~exp=1719898581~hmac=5a0e46d03d8ae0daf85720071d5ee31535b136403dcfa8dc80fa220122431dd1&w=740" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error