import { NextRequest } from "next/server";
import {getObject} from "@/app/_lib/storage";
import mime from 'mime-types'

export async function GET(req: NextRequest, context: any){
    let { params } = context;
    if(!params) return new Response(null, { status: 400 });
    if(!params.hasOwnProperty("name")) return new Response(null, { status: 400 });
    let name = params.name;
    let contentType = mime.lookup(name);
    if (!contentType) contentType = 'application/octet-stream';
    let object = await getObject('test', name);
    return new Response(object, {
        headers: {
            'Content-Type': contentType,
            'Content-Disposition': 'inline'
        }
    });
}