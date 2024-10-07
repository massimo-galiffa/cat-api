import { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file for styling

function App() {
    const [catImage, setCatImage] = useState('');

    const fetchCatImage = () => {
        axios.get('https://api.thecatapi.com/v1/images/search')
            .then(response => {
                setCatImage(response.data[0].url);
            })
            .catch(error => {
                console.error("There was an error fetching the cat image!", error);
            });
    };

    return (
        <div className="app-container">
            <h1>Random Cat</h1>
            {catImage && (
                <div className="cat-image-container">
                    <img src={catImage} alt="Random Cat" className="cat-image" />
                </div>
            )}
            <button className="fetch-button" onClick={fetchCatImage}>
                Get Random Cat
            </button>
        </div>
    );
}

export default App;
