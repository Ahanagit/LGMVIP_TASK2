import React from "react";
import "./Card.css";
function Card(props){
    return (
        <>
          {props.userData.map((user, index) => {
            return (
            <div class="box">
            <div class="card">
                <div class="image">
                  <img class="circle-img"src={user.avatar} alt=""></img>
                </div>
                <div class="description">
                    <h2>{ user.id+' '+user.first_name +' '+ user.last_name }</h2>
                    <p>{user.email}</p>
                    <a href="" class="read-more">KNOW MORE</a>
                </div>
                </div>
            </div>
            );
          })}
        </>
      );
    }

    export default Card;