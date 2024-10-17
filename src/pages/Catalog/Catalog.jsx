import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { fetchManufacturerByName } from "../../api/manufacturers";

const Catalog = () => {
    const location = useLocation();
    const [manufacturerData, setManufacturerData] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const manufacturer = params.get("manufacturers");

        if (manufacturer) {
            fetchManufacturerByName(manufacturer)
                .then((data) => setManufacturerData(data))
                .catch((error) => console.error("Failed to fetch manufacturer data:", error));
        }
    }, [location.search]);

    return (
        <div>
            {manufacturerData ? (
                <div>
                    <h2>Manufacturer Data</h2>
                    <pre>{JSON.stringify(manufacturerData, null, 2)}</pre>
                </div>
            ) : (
                <p>Loading manufacturer data...</p>
            )}
        </div>
    );
};

export default Catalog;
