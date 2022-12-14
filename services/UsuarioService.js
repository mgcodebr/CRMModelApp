import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from "../util/config"

class UsuarioService{
    
    async login(data){
        return axios({
            url: Config.API_URL + "usuario/login",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Accept: Config.HEADER_REQUEST
            }
        }).then((response) => {
            AsyncStorage.setItem("TOKEN", response.data.access_token)
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async loginToken(data){
        return axios({
            url: Config.API_URL + "usuario/login-token",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Accept: Config.HEADER_REQUEST
            }
        }).then((response) => {
            console.log(response.data.access_token);
            if (response.data.access_token){
                AsyncStorage.setItem("TOKEN", response.data.access_token)            
                return Promise.resolve(response)
            }else{
                return Promise.reject(response)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const usuarioService = new UsuarioService()
export default usuarioService