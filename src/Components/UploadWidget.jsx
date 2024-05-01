import { useEffect,useRef } from "react";
import './postcreateform.css'
const UploadWidget=({uploadUrl})=>{
    const cloudinaryRef=useRef();
    const widgetref=useRef();
    useEffect(()=>{
        cloudinaryRef.current=window.cloudinary;
        // console.log(cloudinaryRef);
        widgetref.current=cloudinaryRef.current.createUploadWidget({
            cloudName: 'dir8wys0g',
            uploadPreset: 'guwm5xv4'
        },function(error,result){
            const imageurl=result.info.secure_url;
            // url milgya result.info.secure_url
            if(imageurl!==undefined)uploadUrl(imageurl);
        });
    },[])
    return(
        <button className="upload-button" onClick={()=>widgetref.current.open()}>
            Upload
        </button>
    );
}
export default UploadWidget;