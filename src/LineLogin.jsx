import {useEffect} from "react";
import {liff} from "@line/liff";

function LineLogin() {

    useEffect(() => {
        liff.init({
            liffId : '2004757924-K09NzeWv'
        })
            .then(()=>{
                if (!liff.isLoggedIn()){
                    liff.login({
                        redirectUri : window.location.href,
                    });
                }
            })
            .catch((err)=>{
                console.log(err.code,err.message);
            })
    }, []);



    return (
        <div>Line Login</div>
    );
}

export default LineLogin;