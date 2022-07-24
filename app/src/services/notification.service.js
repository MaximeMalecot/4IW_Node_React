import { API } from '../constants/base';

class NotificationService{
    async getAll(){
        const token = localStorage.getItem("token");

        try{
            let res = await fetch(`${API}/notification`, 
                    {
                        headers:{
                            "Accept": "*/*",
                            "Content-Type":"application/json",
                            "Authorization":`Bearer ${token}`
                        }
                    }
            );
            if(res.status !== 200){
                throw new Error();
            }
            return res.json();

        }catch(e){
            return false;
        }
    }

    async readAll(){
        const token = localStorage.getItem("token");

        try{
            let res = await fetch(`${API}/notification`, 
                    {
                        headers:{
                            "method": "PATCH",
                            "Accept": "*/*",
                            "Content-Type":"application/json",
                            "Authorization":`Bearer ${token}`
                        }
                    }
            );
            if(res.status !== 204){
                throw new Error();
            }
            return res.json();

        }catch(e){
            return false;
        }
    }

}

export default new NotificationService();
