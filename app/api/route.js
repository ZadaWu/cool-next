export function GET(request){
    console.log(request);
    return new Response('Hello World- GET');
}

export function POST(request){
    console.log(request);
    return new Response('Hello World');
}   