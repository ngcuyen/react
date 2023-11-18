import React, { useState } from 'react'
import './css/index.css'

let dataGlasses = [
    { id: "G1", src: "../../../image/g1.jpg", virtualImg: "../../../image/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "../../../image/g2.jpg", virtualImg: "../../../image/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "../../../image/g3.jpg", virtualImg: "../../../image/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "../../../image/g4.jpg", virtualImg: "../../../image/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "../../../image/g5.jpg", virtualImg: "../../../image/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "../../../image/g6.jpg", virtualImg: "../../../image/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "../../../image/g7.jpg", virtualImg: "../../../image/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "../../../image/g8.jpg", virtualImg: "../../../image/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "../../../image/g9.jpg", virtualImg: "../../../image/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];


const Glasses = () => {

    const [glasses, setGlasses] = useState('G1');
    let selected = dataGlasses.find(item => item.id === glasses)


    const binding = () => {
        return dataGlasses.map((item) => {
            return <div className="col-4" key={item.id}>
                <img src={item.src}
                    alt={item.name}
                    onClick={() => { setGlasses(item.id) }}
                />
            </div>
        })
    }

    return (
        <div className="container vglasses py-3">
            <div className="row  justify-content-between">
                <div className="col-6 vglasses__left">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="mb-2">Virtual Glasses</h1>
                        </div>
                    </div>
                    <div className="row" id="vglassesList">
                        {binding()}
                    </div>
                </div>
                <div className="col-5 vglasses__right p-0">
                    <div className="vglasses__card">
                        <div className="mb-2 text-right mt-2 mr-2">
                            {/* <button className="btn btn-warning" onclick="removeGlasses(false)">Before</button>
                            <button className="btn btn-warning" onclick="removeGlasses(true)">After</button> */}
                        </div>
                        <div className="vglasses__model" id="avatar" >
                            <img src={selected.virtualImg} alt="" />
                        </div>
                        <div id="glassesInfo" className="vglasses__info">
                            <div>
                                <span>Name: {selected.name} | Brand: {selected.brand} | Price: {selected.price}</span>
                            </div>
                            <div>
                                <span>Description: {selected.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Glasses