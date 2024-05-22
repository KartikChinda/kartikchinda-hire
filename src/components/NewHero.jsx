import React, { useEffect, useRef, useState } from 'react';
import images from '../assets/forHero';
import "../styles/NewHero.css"


const NewHero = () => {

    const galleryRef = useRef(null);
    // setting up the pictures 
    const [items, setitems] = useState([[]]);



    useEffect(() => {
        const generateItems = () => {
            const rows = [
                // who wrote this, a non programmer? (counting joke in case I am not funny anymore)
                { id: 1, count: 3 },
                { id: 2, count: 2 },
                { id: 3, count: 2 },
            ]

            const newItems = rows.map((row) => {
                // for each row, we are now making an array that basically has each element get an id of the form x-y. 
                return Array.from({ length: row.count }, (_, index) => {
                    const itemId = `${row.id}-${index}`;
                    const currImage = images.find((i) => i.rowId === itemId);
                    return {
                        id: itemId,
                        rowId: row.id,
                        image: currImage,
                    }
                })
            })

            // console.log(newItems);
            setitems(newItems);

        };
        generateItems();

        const handleMouseMove = (e) => {
            const { clientX, clientY, currentTarget } = e;
            const { width, height } = currentTarget.getBoundingClientRect();

            const centerX = width / 2;
            const centerY = height / 2;

            console.log("InmouseMove: ", clientX, clientY)

            const sensitivity = 1;

            const deltaX = (centerX - clientX) / sensitivity;
            const deltaY = (centerY - clientY) / sensitivity;

            galleryRef.current.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))`;

        }

        const container = document.querySelector("#gallery");
        container.addEventListener("mousemove", handleMouseMove);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
        }

    }, [])




    return (

        <div id='container'>
            <div id='gallery' ref={galleryRef}>
                {items.map((row, rowIndex) => (
                    <div key={`row-${rowIndex}`} id='row' >
                        {row.map((item) => (
                            <div id="item" >
                                <div id='preview-img'>
                                    <img id='targetimg' src={item.image.img} alt="This is the image" />
                                </div>
                                <p id='imagename'>
                                    {item.image.name}
                                </p>
                            </div>

                        ))}
                    </div>
                ))}

            </div>
        </div>

    )
}

export default NewHero