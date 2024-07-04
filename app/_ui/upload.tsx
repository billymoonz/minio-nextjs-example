'use client';

import {useState} from "react";
import {uploadObject} from "@/app/_lib/storage";

export function Upload(){
    const [object, setObject] = useState<undefined | string>(undefined);
    const [name, setName] = useState<undefined | string>(undefined);

    const handleObjectUpload = (e: any) =>{
        if(e.target.files.length >= 1) {
            let file = e.target.files[0] as File;
            let fr = new FileReader()
            fr.onload = () =>{
                setObject(fr.result as string);
                setName(file.name);
            }
            fr.readAsDataURL(file)
        }
    }

    const handleUpload = async () =>{
        if(!name || !object) return;
        let info = await uploadObject('test', name, object);
        console.log(info)
    }

    return (<div className='p-5 bg-gray-200 flex flex-col gap-4'>
        <h1>MinIO - Test Bucket</h1>
        <input type='file' onChange={handleObjectUpload}/>
        <div>
            <button onClick={handleUpload} className='underline'>upload object</button>
        </div>
    </div>)
}