import React from "react"

export default function Meme() {
    return (
        <main>
            <form className="form">
                <div>
                    <input
                        type="text"
                        placeholder="Shut up"
                        className="form--input"
                    />    
                </div>
                <div>
                    <input
                       type="text"
                       placeholder="and take my money"
                       className="form--input"
                    />   
                </div>
                <button
                   className="form--button"
                >
                   Get a new Meme image 🖼
                </button>   
            </form>
        </main>
    )
    
}