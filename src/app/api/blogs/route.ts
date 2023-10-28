import { db } from "@/firebase/firebase";
import { DocumentData, addDoc, collection, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try {
        const res = await request.json();
        const {title, desc} = res;
        const docRef = await addDoc(collection(db, "blogs"),{title, desc});
        return NextResponse.json({message:'successfully added a blog', docId: docRef.id })
    
    } catch (error) {
        return NextResponse.json({error})
    }
}

export async function GET() {
    try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const tempData: DocumentData[] = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            tempData.push({id: doc.id,...doc.data()})
        });
        return NextResponse.json({message:'success',status: 200, data: tempData})

    } catch (error: any) {
        return NextResponse.json({error: `${error}`});
    }
}