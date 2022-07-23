import React from 'react'
import { useState } from "react";

type Props = {
    endpoints: string[];
}


export const MarketSelector: React.FC<Props> = ({
    endpoints,
}) => {
    const [selectedEndpoint, setSelectedEndpoint] = useState('')
    
    function changeEndpoint(value: string) {
        setSelectedEndpoint(value)
    }
    
    return (
        <select name="endpoints" value={selectedEndpoint} onChange={(event) => changeEndpoint(event.target.value)}>
            {
                endpoints.map((endpoint) =>
                    <option key={endpoint} value={endpoint}>{endpoint}</option>
                )
            }
        </select>
    )
}