import React, { useState } from "react";
import Tittle from "../BaseComponents/Tittle";



const Home = ({ JsonData }) => {
    let [arr, setArr] = useState([]);
    let [day, setDay] = useState('')
    const handleClick = (e, title) => {
        const checkVal = e.target.getAttribute('data-index');
        if (e.target.checked) {
            !arr.includes(checkVal) && setArr([...arr, checkVal]);
            setDay(title);
            console.log(checkVal, "Index");
        }
        else {
            setArr(arr.filter(data => data !== checkVal));
        }
    }
    return (
        <form action="">
            <Tittle
                type={'h3'}
                className={'form_head'}
                children={"Task"}
            />
            <div className="row">
                {
                    JsonData && Array.isArray(JsonData) && JsonData.length > 0 && JsonData.map((data, key) => {
                        let { title: head, images } = data;
                        return (
                            <React.Fragment key={key}>
                                <p key={key}>{head}:</p>
                                {
                                    images && Array.isArray(images) && images.length > 0 && images.map((element, index) => {
                                        if (typeof element === 'object') {
                                            const { title, id } = element;
                                            return (
                                                <div key={index}>
                                                    <label htmlFor={title}>{title}</label>
                                                    <input type="checkbox" data-index={index} onClick={(e) => { handleClick(e, head) }} name={title} id={id} />
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </React.Fragment>
                        )
                    })
                }
            </div>
            {/* output show */}
            <div className="d-flex">
                <Tittle
                    type={'h4'}
                    children={"Index: "}
                />
                <span>{arr.join(',')}</span>
            </div>
            <p>Last checked Day : {arr.length !== 0 && day}</p>
        </form>
    )
}
export default Home;