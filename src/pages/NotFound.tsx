import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white text-[#39818D] p-8 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-xl">Page non trouvée</p>
                <Link to="/" className="inline-block mt-4 px-4 py-2 bg-cyan-700 rounded text-white hover:bg-blue-700 transition">
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    )
};
export default NotFound;
