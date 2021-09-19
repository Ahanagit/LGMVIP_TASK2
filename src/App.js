import React,{useState,useEffect} from "react";
import "./App.css";
import Card from "./components/Card";

const App=()=>{
    const [dataLoaded,setLoader] = useState(false);
    const [userData,setUser] = useState([]);
    const [clickButton,setClick] = useState(false);

    const updateApp=()=>{
        setClick(true);
        fetch("https://reqres.in/api/users?page=1")
        .then((response) => response.json())
        .then((res) => {
            setUser(res.data);
            setInterval(() => {
                setLoader(false);
            }, 1500);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    useEffect(()=>{
        alert("It is Loading");
    },[clickButton]);

    return (
        <>
            <section className="container">
                <navbar>
                    <div className="logo">
                        myUsers
                    </div>
                    <button onClick={updateApp}>Get Users</button>
                </navbar>
                <main>

                {
                    setClick?(setLoader?(<Card userData={userData} />):(<div className="loader"></div>)):(<div>Wait</div>)
            
                }

                </main>
                <p className="below">@copyright Ahana 2021</p>
            </section>
        </>
    );

}

export default App;