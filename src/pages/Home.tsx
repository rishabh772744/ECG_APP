import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from 'react';

import axios from 'axios';
import Chart from "react-google-charts";

import { BottomTabs } from './../components/BottomTabs';

import './../main.css';
import './../bootstrap.css';

const Home: React.FC = () => {

  const [deviceStatus, setDeviceStatus] = useState('off')
  const [plotData, setPlotData] = useState<any>([])
  const [bpm, setBpm] = useState(-1)
  const [fitness, setFitness] = useState("")

  const delay = ms => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    async function repeatMeasuring(){
      if(deviceStatus === "on"){
        await delay(20000);
        startMeasuring();    
      }
    }
    repeatMeasuring()   
  }, [plotData]);

  async function initiateMeasuring(){

    
    await setDeviceStatus("measuring")
    await delay(2000);
    startMeasuring();
    measureBpm();
  }

  async function startMeasuring(){

    await setDeviceStatus("on")

    axios
        .get('http://api.thingspeak.com/channels/1397317/feeds.json?api_key=8TV4HD1VG0XN611S&results=30')
        .then(async function (response) {
          var curr_time = new Date(Date.now()).toISOString()
          var useful_data = response.data.feeds.filter(datapoint => (Date.parse(curr_time)-Date.parse(new Date(datapoint.created_at).toISOString()))/60000 <= 30);
          console.log(useful_data)
          const tempPlotData : any[] = [];
          var len = useful_data.length

          tempPlotData.push([
                    'Time',
                    'Field5',
                    'Field6',
                    'Field7',
                  ])
          for(var i = 0; i<len; i++){
            const tempPlotDataPoint : any[] = [];
            tempPlotDataPoint.push(i)
            tempPlotDataPoint.push(parseFloat(useful_data[i].field5))
            tempPlotDataPoint.push(parseFloat(useful_data[i].field6))
            tempPlotDataPoint.push(parseFloat(useful_data[i].field7))

            tempPlotData.push(tempPlotDataPoint)
          }
          await setPlotData(tempPlotData)
          
         
        })


   


  }

  async function measureBpm(){
    axios
        .get('http://api.thingspeak.com/channels/1397317/feeds.json?api_key=8TV4HD1VG0XN611S&results=30')
        .then(async function (response) {
          var curr_time = new Date(Date.now()).toISOString()
          var useful_data = response.data.feeds.filter(datapoint => (Date.parse(curr_time)-Date.parse(new Date(datapoint.created_at).toISOString()))/60000 <= 30);
          var len = useful_data.length
          await setBpm(parseInt(useful_data[len-1].field8))
          if(bpm <=100 && bpm >=60){
            await setFitness("GOOD")
          }
          else{
            await setFitness("POOR")
          }
        })  
  }


  return (
    <IonPage>
    {deviceStatus === "off" ? 
      <IonContent fullscreen>
        <div className="scroll-container">
          <div className="mx-5 mt-3 row no-gutter text-center">
              <div className="col-6 active-button py-2">
                Measure
              </div>
              <div className="col-6 inactive-button py-2">
                History
              </div>
            </div>
            <div className="my-3 mx-5 text-center" style={{ fontFamily: 'Poppins'}}>Device Status: OFF</div>

            <div className="mx-5 text-center" style={{ fontFamily: 'Poppins'}}>
              <img className="heartbeat" src="https://i.ibb.co/RjgJz70/Group-6894.png" />
            </div>

            <div className="mx-5">
              <div className="mt-5">
                Select your most recent activity:
                <div className="mt-3 text-left">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Sleeping
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Sitting
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Walking
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Running
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Workout
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-5 primary-button py-3 px-4 text-center" onClick={() => initiateMeasuring()}>Start</div>
            </div>  
          </div>

      </IonContent> : ''}
      {deviceStatus === "measuring" ? 
      <IonContent fullscreen>
        <div className="scroll-container">
          <div className="mx-5 mt-3 row no-gutter text-center">
              <div className="col-6 active-button py-2">
                Measure
              </div>
              <div className="col-6 inactive-button py-2">
                History
              </div>
            </div>
            <div className="my-3 mx-5 text-center" style={{ fontFamily: 'Poppins'}}>Device Status: ON</div>

            <div className="m-5 text-center py-4">
              <img className="heartbeat" src="https://i.ibb.co/RjgJz70/Group-6894.png" />
            </div>

            <div className="mx-5 text-center py-4">
              Measuring... <br/>
              Try to stay still and quiet.
            </div>
          </div>

      </IonContent> : ''}
      {deviceStatus === "on" ? 
      <IonContent fullscreen>
        <div className="scroll-container">
          <div className="mx-5 mt-3 row no-gutter text-center">
              <div className="col-6 active-button py-2">
                Measure
              </div>
              <div className="col-6 inactive-button py-2">
                History
              </div>
            </div>
            <div className="my-3 mx-5 text-center" style={{ fontFamily: 'Poppins'}}>Device Status: ON</div>

            <div className="mx-5 text-center bg-dark-heart py-4">
              <div className="bpm-style">{bpm} BPM</div>
              <img className="mt-3 heartbeat-dark" src="https://i.ibb.co/rbXL1ct/Frame.png" />
            </div>

            <div className="my-3 mx-5 text-center">FITNESSssssssss STATUS: <b>{fitness}</b>{plotData}</div>
            <div className="text-center py-4 mx-2">
              <Chart
                width={'90vw'}
                chartType="Line"
                loader={<div>Loading Chart</div>}
                data={plotData}
                options={{
                  legend: {position: 'none'}
                }}
                rootProps={{ 'data-testid': '3' }}
              />
            </div>
          </div>

      </IonContent> : ''}
      <BottomTabs name="home" />
    </IonPage> 
  );
};

export default Home;
