import React from "react";
import axios from "axios";
import bg from "../images/background.jpg";

class App extends React.Component {

    state = {
        isLoading: true,
        airs: []
    }
    // getAirs2 = () => {
    //     const apiKey2="LpAJu0DhlQK%2Bn%2BuAMNKTvlSyKVlVFgD1Tzctb%2BISbie0eU6mi6PldEYAUnLkgTX55X6GDEntc2ny6aG%2B69s6Jg%3D%3D"
    //     const url2=`http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureLIst?serviceKey=${apiKey2}&numOfRows=10&pageNo=1&itemCode=PM10&dataGubun=HOUR&searchCondition=MONTH&_returnType=json`
    //     fetch(url2)
    //         .then(function(response) {
    //             return response.json();
    //         })
    //         .then(function(myJson) {
    //             console.log(JSON.stringify(myJson));
    //         });
    // }

    
    getAirs = async() => {
        const apiKey="LpAJu0DhlQK%2Bn%2BuAMNKTvlSyKVlVFgD1Tzctb%2BISbie0eU6mi6PldEYAUnLkgTX55X6GDEntc2ny6aG%2B69s6Jg%3D%3D"
        const url=`http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureLIst?serviceKey=${apiKey}&numOfRows=10&pageNo=1&itemCode=PM10&dataGubun=HOUR&searchCondition=MONTH&_returnType=json`
                
        const airPoloution = await axios.get(url)
        console.log(airPoloution)
    }    
    componentDidMount() {
        this.getAirs();
        // this.getAirs2();
    } 
    
    render() {
        const {isLoading} = this.state;
        return (
            <div style={{ width: '100vw', height: '100vh', backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
                {isLoading ? "asdasd" : "We are ready" }
            </div>
        )
    }
}

export default App;