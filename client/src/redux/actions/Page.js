import axios from 'axios';
import SetAuthToken from '../../utils/SetAuthToken';
import { SHOW_PAGE, SHOW_MODEL, QUARTER_SELECTED, ZONE_SELECTED, ROTATION_SHEET_CREATED, 
        SERVER_ERRORS, MEMBER_ASSIGNED, YEAR_SELECTED, UPDATE_QUARTER_LIST, UDPATE_ZONE_LIST, DATABASE_BACKUP_SUCCESS } from './Types';


const download = (name, data) => {
    const url = window.URL.createObjectURL(new Blob([data]), {
        type:'application/zip',
    });
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${name}.zip`);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
const ratingOptions = {
            NAN: "Select Rating",
            1: "New to the job or is developing and need frequent guidance",
            2: "Good, but still has room to grow",
            3: "Excellent and completely satisfied with performance",
            4: "Outstanding and far exceeds performance",
           
        }

export const UpdateQuarterList = (list) => dispatch => {
    dispatch({type:UPDATE_QUARTER_LIST, payload:list});
}

export const ShowPage = (page) => dispatch => {
    dispatch({type:SHOW_PAGE, payload:page});
}

export const ShowModel = (obj) => dispatch => {
    dispatch({type:SHOW_MODEL, payload:obj});
}

export const ZoneChanged = (val) => dispatch => {
    dispatch({type:ZONE_SELECTED, payload:val});
}

export const QuarterChanged = (val) => dispatch => {
    dispatch({type:QUARTER_SELECTED, payload:val});
}

export const YearChanged = (val) => dispatch => {
    dispatch({type:YEAR_SELECTED, payload:val});
}

export const UpdateZoneList = (arr) => dispatch => {
    dispatch({type:UDPATE_ZONE_LIST, payload:arr});
}

//*****member assigned from dragging******//
export const MemberAssigned = (member) => dispatch => {
    dispatch({type:MEMBER_ASSIGNED, payload:member});
}
export const DownloadSheetYear = (name,year)=> async dispatch=>{
    console.log(" from page",name)
    if(localStorage.token){
        SetAuthToken(localStorage.token);
    }

    const config = {
        headers:{
            'Content-Type':'application/json'
        },
        responseType:'blob'
    }
    
    const body = JSON.stringify({name,year});
    // const sheetUrl = (name === "rotation")?"rotation":stype==="member"?"feedback/"+name : stype==="team"?"teamFeedback/"+name:"amFeedback/"+name;

    try{
        console.log(" from page",body)
        let res = await axios.post('/api/sheet/yearfeedback', body, config);
        console.log(res.data)
        const url = window.URL.createObjectURL(new Blob([res.data]), {
            type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `yaerend.xlsx`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        //dispatch({type:ROTATION_SHEET_CREATED});
    }catch(err){
        console.log('some error-1')
        dispatch({type:SERVER_ERRORS});
    }
}
export const DownloadSheet = (name, data, stype='') => async dispatch => {
   //console.log('::::',data)
    // if(!Array.isArray(data)){
    //      //"Manish for single designer
    //     data.data.values.forEach(element => {
    //         //console.log(element.rating)
    //          element.rating=  ratingOptions[element.rating];
             
    //     });
    // }
    // else{
    //     //"Manish" for multiple designers
    //     data.map((item)=>{
    //         //console.log(item)
    //        return item.data.values.forEach(element => {
    //            //console.log(element.rating)
    //             element.rating=  ratingOptions[element.rating];
                
    //        });
    
    //    })
    // }
   
    if(localStorage.token){
        SetAuthToken(localStorage.token);
    }

    const config = {
        headers:{
            'Content-Type':'application/json'
        },
        responseType:'blob'
    }
    
    const body = JSON.stringify({data});
    const sheetUrl = (name === "rotation")?"rotation":stype==="member"?"feedback/"+name : stype==="team"?"teamFeedback/"+name:"amFeedback/"+name;
    //const sheetUrl="feedback/ashishkumar"
    //console.log(body)

    try{
       // console.log(data)
        let res = await axios.post('/api/sheet/'+sheetUrl, body, config);
        const url = window.URL.createObjectURL(new Blob([res.data]), {
            type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${name}.xlsx`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        //dispatch({type:ROTATION_SHEET_CREATED});
    }catch(err){
        console.log('some error-1')
        //dispatch({type:SERVER_ERRORS});
    }
}

export const DownloadDatabase = () => async dispatch => {
    try{
        let res = await axios.get('/api/backup', {responseType: 'arraybuffer'});
        download('data', res.data);
        dispatch({type:DATABASE_BACKUP_SUCCESS});
    }catch(err){
        dispatch({type:SERVER_ERRORS});
    }
}