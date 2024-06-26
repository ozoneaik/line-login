import {useEffect} from "react";
import {liff} from "@line/liff";

function LineLogin() {

    useEffect(() => {
        liff.init({
            liffId : '2004757924-K09NzeWv'
        })
            .then(()=>{
                if (!liff.isLoggedIn()){
                    // ตรวจสอบว่าอุปกรณ์เป็นมือถือหรือไม่
                    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

                    if (isMobile) {
                        // เปิดแอปพลิเคชัน LINE โดยใช้ schema URL
                        window.location.href = "line://app/2004757924-K09NzeWv";
                    } else {
                        // ใช้ liff.login สำหรับผู้ใช้ที่ไม่ใช่มือถือ
                        liff.login();
                    }
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