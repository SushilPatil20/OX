import React from 'react'

const Status = ({ draw, winner, character }) => {
    return (
        <>
            {draw ? (
                <p style={{ fontSize: "34px" }}>Match is Draw 😐</p>
            ) : (
                <div>
                    {!winner ? (
                        <p style={{ fontSize: "34px" }}>{character} : Turn</p>
                    ) : (
                        <p style={{ fontSize: "34px" }}>
                            {character} is a Winner..🎉
                        </p>
                    )}
                </div>
            )}
        </>
    )
}

export default Status
