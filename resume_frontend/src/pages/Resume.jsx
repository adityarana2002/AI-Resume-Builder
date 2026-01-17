import { useEffect } from "react";
import { useNavigate } from "react-router";

function Resume() {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to generate resume page
        navigate('/generate-resume');
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="loading loading-spinner loading-lg text-primary"></div>
        </div>
    );
}

export default Resume;
