import { useRouteError } from "react-router-dom";


export default function ErrorPage() {
    const error = useRouteError();
    console.log(error.message);

    return (
        
        <div className=" space-y-8">
            <h1 className=" text-center text-6xl font-extrabold mt-20 text-blue-900">CRM Cliente</h1>
            <p className=" text-center uppercase font-bold text-2xl text-red-500">Hubo un error</p>
            <p className=" text-center text-sky-700">{error.statusText || error.message}</p>
        </div>
    )
}