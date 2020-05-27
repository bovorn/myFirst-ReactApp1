import React from 'react'

function Loading() {
    return (
        <div className="w-100 tc" style={style.loading}>
            <div>
                <h4 style={{color: 'red'}}>LOADING</h4>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="red">
                    <path transform="translate(0 0)" d="M0 12 V20 H4 V12z">
                    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0" repeatCount="indefinite" keyTimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
                    </path>
                    <path opacity="0.5" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
                    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.1s" repeatCount="indefinite" keyTimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
                    </path>
                    <path opacity="0.25" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
                    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.2s" repeatCount="indefinite" keyTimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
                    </path>
                </svg>
            </div>
        </div>
    )
}

const style = {
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    }
}

export default Loading;
