import React from 'react'

export const Information = () => {

    function getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
      }
    var params = getHashParams();

    const token = params.access_token;
    console.log(token);

    fetch("https://api.spotify.com/v1/me/top/artists",{headers:{"Authorization": `Bearer ${token}`}}).then(res=>{
        return res.json()
    }).then(data=>console.log(data))

    return (
        <div>
            <h1>I am the information tab</h1>
        </div>
    )
}
