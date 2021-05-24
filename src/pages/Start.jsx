import React from 'react'

export const Start = () => {

    const authorize = async () =>{
        var client_id = 'de61cf4abac24d48b3618575bd655883'; // Your client id
        var redirect_uri = 'http://localhost:3000/info'; // Your redirect uri

        var scope = 'user-read-private user-read-email user-top-read';

        var url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
        
        window.location = url;
    }
    return (
        <div>
            <h3>Start here and move to the information tab</h3>
            <div>
                <button onClick={authorize}>Click me</button>
            </div>
        </div>
    )
}
