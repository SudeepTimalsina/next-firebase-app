import React from 'react';
import Router from 'next/router';

const Index = () => {

    const handleClick = () => {
        Router.push("/next-page")
    }
    return (
        <div className="titleWrapper">
            <div className="textStyle">
                Welcome to Users
            </div>
            <div className="buttonWrapper">
            <button onClick={handleClick} className="nextButton">
                Next page
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
                    .nextButton {
                        padding: 20px;
                        background:  #32a852;
                        color: #ffffff;
                        border: 1px solid #ffffff;
                        border-radius: 15px;
                        cursor: pointer;
                        font-size: 20px;
                    }
                    .buttonWrapper: {
                        padding: 10px;
                    }
                `}
            </style>
        </div>
    )
}

export default Index;