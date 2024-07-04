'use server';

import * as Minio from 'minio'

const minioClient = new Minio.Client({
    endPoint: process.env.MINIO_URL,
    port: 443,
    useSSL: true,
    accessKey: process.env.MINIO_ACCESS,
    secretKey: process.env.MINIO_SECRET,
})

export async function uploadObject(bucketName: string, objectName: string, objectBase64: string) {
    const base64Data = objectBase64.replace(/^data:\w+\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    return await minioClient.putObject(bucketName, objectName, buffer, buffer.length)
}

export async function getObject(bucketName: string, objectName: string) {
    return await minioClient.getObject(bucketName, objectName)
}