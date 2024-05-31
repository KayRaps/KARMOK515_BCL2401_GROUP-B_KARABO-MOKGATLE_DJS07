import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    

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