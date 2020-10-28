import React from "react";
import Router from "next/router";

const NextPage = () => {

    const handleClick = () => {
        Router.push("/")
    }
    return (
        <div className="titleWrapper">
            <div className="textStyle">
             This is Users Next Page.
            </div>
            <div className="wrapperStyles">
                <button onClick={handleClick} className="buttonStyles">
                    Home Page
                </button>
            </div>
            <style jsx>
                {`
                    .titleWrapper {
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        margin-top: 200px;
                    }
                    .textStyle {
                        font-size: 50px;
                    }
                    .buttonStyles {
                        padding: 20px;
                        background:  #32a852;
                        color: #ffffff;
                        border: 1px solid #ffffff;
                        border-radius: 15px;
                        cursor: pointer;
                        font-size: 20px;
                    }
                    .wrapperStyles {
                        padding: 10px;
                    }
                `}
            </style>
        </div>
    )
}

export default NextPage;